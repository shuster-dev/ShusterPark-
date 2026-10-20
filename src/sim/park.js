// The park: the land, what's built on it, the money, the guests and the
// staff. Pure JavaScript, no drawing, so the tests can run years of it in a
// second. The screen reads this and calls the build/price/hire methods.
import {
  MAP, MONTH, DAYS, MONTHS, START_MONTH, GATE, MAX_GUESTS, START_CASH, START_LOAN, MAX_LOAN, LOAN_STEP, INTEREST,
  PATH_COST, REFUND, UNDO_WINDOW, MARKETING, GOAL, RIDES, SHOPS, SCENERY, ADDONS, ADDON_BY_ID, STAFF, COASTER, PIECES,
  CLEAR_PATH, CLEAR_TRACK, NAMES, LETTERS,
} from './catalog.js';
import { nextState, stationPieces, endState, isComplete, checkPiece, autoComplete, testRun, buildCurve, DX, DZ } from './track.js';
import { stepGuest, spawnGuest, thinkCounts } from './guests.js';
import { stepStaff } from './staff.js';
import { N, idx, tx, tz, inMap, NB } from './grid.js';

export { N, idx, tx, tz, inMap, NB };

export function footprint(def, rot) {
  const w = def.w || 1, d = def.d || 1;
  return rot % 2 ? { w: d, d: w } : { w, d };
}

const money = (n) => Math.round(n * 100) / 100;

export class Park {
  constructor(seed = (Math.random() * 2 ** 31) | 0) { this.reset(seed); }

  reset(seed) {
    this.seed = seed >>> 0 || 1;
    this.t = 0;
    this.name = 'שוסטר פארק';
    this.cash = START_CASH;
    this.loan = START_LOAN;
    this.entryFee = 0;
    this.marketingUntil = -1;
    this.rating = 500;
    this.path = new Uint8Array(N);
    this.addon = new Uint8Array(N);
    this.dirt = new Uint8Array(N);
    this.vomit = new Uint8Array(N);
    this.owner = new Int32Array(N);
    this.objects = new Map();
    this.guests = [];
    this.staff = [];
    this.nextId = 1;
    this.ledger = this.newLedger();
    this.history = [];
    this.totals = { guestsIn: 0, guestsOut: 0, turnedAway: 0, happyOut: 0 };
    this.won = false;
    this.goalMissed = false;
    this.events = [];
    this.spawnAcc = 0;
    this.slow = 0;
    this.rev = { land: 1, objects: 1, dirt: 1, staff: 1 };
    this.trackOcc = new Map();
    this.builtAt = new Map();
    // the way in: a short path from the gate
    for (let z = GATE.z; z >= GATE.z - 6; z--) this.path[idx(GATE.x, z)] = 1;
    this.derive();
  }

  rand() { // mulberry32, so a saved park plays on the same way
    let t = (this.seed = (this.seed + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  pick(a) { return a[Math.floor(this.rand() * a.length)]; }
  newLedger() { return { in: { entry: 0, rides: 0, food: 0, shops: 0 }, out: { build: 0, upkeep: 0, wages: 0, interest: 0, marketing: 0, stock: 0 } }; }
  emit(kind, text, extra) { this.events.push({ kind, text, t: this.t, ...extra }); }

  // ---------- time ----------
  get month() { return Math.floor(this.t / MONTH); }
  date() {
    const m = this.month, abs = START_MONTH + m;
    return { day: 1 + Math.floor(((this.t % MONTH) / MONTH) * DAYS), month: abs % 12, monthName: MONTHS[abs % 12], year: 1 + Math.floor(abs / 12), index: m };
  }
  goalDate() { const abs = START_MONTH + GOAL.months; return { monthName: MONTHS[abs % 12], year: 1 + Math.floor(abs / 12) }; }

  // ---------- money ----------
  canAfford(c) { return this.cash >= c; }
  spend(c, cat = 'build') { this.cash = money(this.cash - c); this.ledger.out[cat] += c; }
  earn(c, cat) { this.cash = money(this.cash + c); this.ledger.in[cat] += c; }
  takeLoan() {
    if (this.loan + LOAN_STEP > MAX_LOAN) return 'הגעת לתקרת ההלוואה';
    this.loan += LOAN_STEP; this.cash = money(this.cash + LOAN_STEP); return null;
  }
  repayLoan() {
    if (this.loan <= 0) return 'אין הלוואה';
    const n = Math.min(LOAN_STEP, this.loan);
    if (this.cash < n) return 'אין מספיק כסף';
    this.loan -= n; this.cash = money(this.cash - n); return null;
  }
  setEntryFee(v) { this.entryFee = Math.max(0, Math.min(80, Math.round(v))); }
  startMarketing() {
    if (this.t < this.marketingUntil) return 'כבר יש קמפיין';
    if (!this.canAfford(MARKETING.cost)) return 'אין מספיק כסף';
    this.spend(MARKETING.cost, 'marketing');
    this.marketingUntil = this.t + MARKETING.months * MONTH;
    return null;
  }

  // ---------- what's where ----------
  objAt(x, z) { return inMap(x, z) ? this.objects.get(this.owner[idx(x, z)]) || null : null; }
  trackAt(x, z) { return this.trackOcc.get(idx(x, z)) || []; }

  // Ground tiles an object would cover; null if any is outside.
  tilesOf(x, z, w, d) {
    const out = [];
    for (let dz = 0; dz < d; dz++) for (let dx = 0; dx < w; dx++) {
      if (!inMap(x + dx, z + dz)) return null;
      out.push(idx(x + dx, z + dz));
    }
    return out;
  }
  groundFree(tiles, height) {
    for (const i of tiles) {
      if (this.path[i] || this.owner[i]) return false;
      for (const e of this.trackOcc.get(i) || []) if (e.lo < height + 1) return false;
    }
    return true;
  }

  // ---------- paths ----------
  pathReason(x, z) {
    if (!inMap(x, z)) return 'מחוץ לפארק';
    const i = idx(x, z);
    if (this.path[i]) return 'כבר יש שביל';
    if (this.owner[i]) return 'תפוס';
    for (const e of this.trackOcc.get(i) || []) if (e.lo < CLEAR_PATH) return 'המסילה נמוכה מדי';
    if (!this.canAfford(PATH_COST)) return 'אין מספיק כסף';
    return null;
  }
  placePath(x, z) {
    const r = this.pathReason(x, z);
    if (r) return r;
    this.path[idx(x, z)] = 1;
    this.spend(PATH_COST);
    this.builtAt.set('p' + idx(x, z), this.t);
    this.changed();
    return null;
  }
  removePath(x, z) {
    const i = idx(x, z);
    if (!this.path[i]) return 'אין כאן שביל';
    if (x === GATE.x && z === GATE.z) return 'זה השביל של הכניסה';
    const back = this.t - (this.builtAt.get('p' + i) ?? -99) < UNDO_WINDOW ? PATH_COST : 0;
    if (this.addon[i]) this.removeAddon(x, z);
    this.path[i] = 0; this.dirt[i] = 0; this.vomit[i] = 0;
    if (back) this.refund(back);
    this.changed();
    return null;
  }
  refund(n) { this.cash = money(this.cash + n); this.ledger.out.build -= n; }

  placeAddon(kind, x, z) {
    if (!inMap(x, z)) return 'מחוץ לפארק';
    const i = idx(x, z), def = ADDONS[kind];
    if (!this.path[i]) return 'רק על שביל';
    if (this.addon[i] === def.id) return 'כבר יש כאן';
    if (!this.canAfford(def.cost)) return 'אין מספיק כסף';
    this.spend(def.cost);
    this.addon[i] = def.id;
    this.builtAt.set('a' + i, this.t);
    this.changed();
    return null;
  }
  removeAddon(x, z) {
    const i = idx(x, z), k = ADDON_BY_ID[this.addon[i]];
    if (!k) return 'אין כאן כלום';
    const back = this.t - (this.builtAt.get('a' + i) ?? -99) < UNDO_WINDOW ? ADDONS[k].cost : 0;
    this.addon[i] = 0;
    if (back) this.refund(back);
    this.changed();
    return null;
  }

  // ---------- rides, stalls, scenery ----------
  defOf(type, kind) { return type === 'ride' ? RIDES[kind] : type === 'shop' ? SHOPS[kind] : SCENERY[kind]; }
  placeReason(type, kind, x, z, rot = 0) {
    const def = this.defOf(type, kind);
    if (!def) return 'לא קיים';
    const { w, d } = footprint(def, rot);
    const tiles = this.tilesOf(x, z, w, d);
    if (!tiles) return 'מחוץ לפארק';
    if (!this.groundFree(tiles, def.h || 4)) return 'המקום תפוס';
    if (!this.canAfford(def.cost)) return 'אין מספיק כסף';
    return null;
  }
  place(type, kind, x, z, rot = 0) {
    const r = this.placeReason(type, kind, x, z, rot);
    if (r) return { error: r };
    const def = this.defOf(type, kind), { w, d } = footprint(def, rot);
    const id = this.nextId++;
    const o = { id, type, kind, x, z, rot, w, d, built: this.t, spent: def.cost };
    if (type === 'ride') Object.assign(o, this.rideState(), { name: this.nameFor(def.he), price: def.price, exc: def.exc, int: def.int, nau: def.nau, open: true });
    if (type === 'shop') Object.assign(o, { name: this.nameFor(def.he), price: def.price, sales: 0, monthIncome: 0, totalIncome: 0, open: true });
    this.objects.set(id, o);
    for (const i of this.tilesOf(x, z, w, d)) this.owner[i] = id;
    this.spend(def.cost);
    this.changed();
    return { id };
  }
  rideState() {
    return { queue: [], riders: [], phase: 'idle', timer: 0, rel: 0.98, broken: false, lastInspect: this.t, age: 0, runs: 0, monthIncome: 0, totalIncome: 0, totalRiders: 0 };
  }
  nameFor(base) {
    let n = 1;
    const names = new Set([...this.objects.values()].map((o) => o.name));
    while (names.has(`${base} ${n}`)) n++;
    return `${base} ${n}`;
  }

  demolish(id) {
    const o = this.objects.get(id);
    if (!o) return 'לא קיים';
    if (o.queue) this.emptyRide(o, true);
    const full = this.t - o.built < UNDO_WINDOW;
    const back = Math.round(o.spent * (full ? 1 : REFUND));
    if (o.type === 'coaster') this.untrack(o);
    for (let i = 0; i < N; i++) if (this.owner[i] === id) this.owner[i] = 0;
    this.objects.delete(id);
    this.refund(back);
    for (const s of this.staff) if (s.task && s.task.id === id) s.task = null;
    this.changed();
    return null;
  }
  demolishValue(id) {
    const o = this.objects.get(id);
    return o ? Math.round(o.spent * (this.t - o.built < UNDO_WINDOW ? 1 : REFUND)) : 0;
  }

  // Everyone off and out of the line, back onto the path.
  emptyRide(o, quiet) {
    const acc = this.access.get(o.id) || [];
    for (const gid of [...o.queue, ...o.riders]) {
      const g = this.guestById(gid);
      if (!g) continue;
      g.state = 'walk'; g.goal = null; g.nxt = -1; g.p = 0;
      if (!this.path[g.cur]) g.cur = acc.length ? this.pick(acc) : idx(GATE.x, GATE.z);
      if (!quiet) g.happy = Math.max(0, g.happy - 4);
    }
    o.queue = []; o.riders = []; o.phase = 'idle'; o.timer = 0;
  }
  setOpen(id, open) {
    const o = this.objects.get(id);
    if (!o || !('open' in o)) return 'לא קיים';
    if (o.type === 'coaster' && open && !o.tested) return 'קודם צריך לבדוק את המסלול';
    o.open = !!open;
    if (!open && o.queue) this.emptyRide(o, false);
    this.rev.objects++;
    return null;
  }
  setPrice(id, p) {
    const o = this.objects.get(id);
    if (!o) return;
    o.price = Math.max(0, Math.min(50, Math.round(p * 2) / 2));
  }

  // ---------- roller coasters ----------
  trackFree(occ, selfId) {
    for (const o of occ) {
      if (!inMap(o.x, o.z)) return false;
      const i = idx(o.x, o.z);
      if (this.path[i] && o.lo < CLEAR_PATH) return false;
      // rides and trees are tall; another coaster's low track is checked below by height
      const ow = this.objects.get(this.owner[i]);
      if (ow && ow.type !== 'coaster' && o.lo < (this.defOf(ow.type, ow.kind).h || 4) + 1) return false;
      if (i === idx(GATE.x, GATE.z)) return false;
      for (const e of this.trackOcc.get(i) || []) if (o.lo < e.hi + CLEAR_TRACK && e.lo < o.hi + CLEAR_TRACK) return false;
    }
    return true;
  }
  coasterReason(x, z, d) {
    const st = stationPieces(x, z, d), occ = st.flatMap((p) => nextState(p.t, p).occ);
    const after = endState(st);
    if (!inMap(after.x, after.z)) return 'אין מקום למסילה אחרי התחנה';
    const tiles = occ.map((o) => (inMap(o.x, o.z) ? idx(o.x, o.z) : -1));
    if (tiles.includes(-1)) return 'מחוץ לפארק';
    if (!this.groundFree(tiles, 0) || !this.trackFree(occ, 0)) return 'המקום תפוס';
    if (!this.canAfford(this.coasterBaseCost())) return 'אין מספיק כסף';
    return null;
  }
  coasterBaseCost() { return 500 + PIECES.station.cost * COASTER.stationLen; }
  startCoaster(x, z, d) {
    const r = this.coasterReason(x, z, d);
    if (r) return { error: r };
    const id = this.nextId++;
    const n = [...this.objects.values()].filter((o) => o.type === 'coaster').length;
    const o = {
      id, type: 'coaster', kind: 'coaster', x, z, rot: d, built: this.t, spent: this.coasterBaseCost(),
      name: this.nameFor('רכבת הרים'), color: COASTER.colors[n % COASTER.colors.length],
      pieces: stationPieces(x, z, d), tested: false, editing: true, price: COASTER.price, open: false, stats: null,
      exc: 0, int: 0, nau: 0, fail: null, ...this.rideState(),
    };
    this.objects.set(id, o);
    this.spend(o.spent);
    this.retrack(o);
    this.changed();
    return { id };
  }
  pieceReason(id, type) {
    const o = this.objects.get(id);
    if (!o || o.type !== 'coaster') return 'לא קיים';
    const r = checkPiece(o.pieces, type, (occ) => this.trackFree(occ, id));
    if (r) return r;
    const s = endState(o.pieces);
    if (!this.canAfford(PIECES[type].cost + s.h * 4)) return 'אין מספיק כסף';
    return null;
  }
  addPiece(id, type) {
    const r = this.pieceReason(id, type);
    if (r) return r;
    const o = this.objects.get(id), s = endState(o.pieces), cost = PIECES[type].cost + Math.max(0, s.h) * 4;
    o.pieces.push({ t: type, ...s });
    o.spent += cost; this.spend(cost);
    this.trackChanged(o);
    return null;
  }
  removePiece(id) {
    const o = this.objects.get(id);
    if (!o || o.pieces.length <= COASTER.stationLen) return 'אין מה להוריד';
    const p = o.pieces.pop(), cost = PIECES[p.t].cost + Math.max(0, p.h) * 4;
    o.spent -= cost; this.refund(cost); // still being built: all of it back
    this.trackChanged(o);
    return null;
  }
  finishTrack(id) {
    const o = this.objects.get(id);
    if (!o) return 'לא קיים';
    if (isComplete(o.pieces)) return 'המסלול כבר סגור';
    // the open end itself isn't in the way of finishing
    const seq = autoComplete(o.pieces, (occ) => this.trackFree(occ, id));
    if (!seq) return 'לא מצאתי דרך חזרה לתחנה. נסה לפנות לכיוון התחנה';
    const cost = seq.reduce((a, p) => a + PIECES[p.t].cost + Math.max(0, p.h) * 4, 0);
    if (!this.canAfford(cost)) return `צריך ₪${Math.round(cost)} כדי לסגור`;
    for (const p of seq) o.pieces.push(p);
    o.spent += cost; this.spend(cost);
    this.trackChanged(o);
    return null;
  }
  trackChanged(o) {
    o.tested = false; o.stats = null; o.fail = null; o.run = null; o.open = false;
    this.emptyRide(o, true);
    this.retrack(o);
    this.changed();
  }
  testCoaster(id) {
    const o = this.objects.get(id);
    if (!o) return { ok: false, reason: 'לא קיים' };
    const r = testRun(o.pieces);
    if (!r.ok) { o.fail = r; o.tested = false; this.rev.objects++; return r; }
    o.run = r; o.tested = true; o.fail = null;
    const { traj, ...stats } = r;
    o.stats = stats; o.exc = r.exc; o.int = r.int; o.nau = r.nau;
    o.curve.bank = r.bank;
    this.rev.objects++;
    return r;
  }
  editCoaster(id, on) {
    const o = this.objects.get(id);
    if (!o) return;
    o.editing = on;
    if (on) { o.open = false; this.emptyRide(o, false); }
    this.rev.objects++;
  }
  untrack(o) {
    for (const [i, list] of this.trackOcc) {
      const keep = list.filter((e) => e.id !== o.id);
      if (keep.length) this.trackOcc.set(i, keep); else this.trackOcc.delete(i);
    }
  }
  retrack(o) {
    this.untrack(o);
    for (let i = 0; i < N; i++) if (this.owner[i] === o.id) this.owner[i] = 0;
    o.pieces.forEach((p, k) => {
      for (const c of nextState(p.t, p).occ) {
        const i = idx(c.x, c.z);
        if (!this.trackOcc.has(i)) this.trackOcc.set(i, []);
        this.trackOcc.get(i).push({ id: o.id, lo: c.lo, hi: c.hi, k });
        if (c.lo < CLEAR_PATH) this.owner[i] = o.id; // low track takes the ground
      }
    });
    o.curve = buildCurve(o.pieces);
    if (o.tested) {
      // a loaded park: replay the run it had
      const r = testRun(o.pieces);
      if (r.ok) { o.run = r; o.curve.bank = r.bank; } else { o.tested = false; o.open = false; }
    }
  }
  stationTiles(o) { return o.pieces.slice(0, COASTER.stationLen).map((p) => idx(p.x, p.z)); }

  // ---------- staff ----------
  hire(role) {
    const def = STAFF[role];
    if (!def) return 'לא קיים';
    if (this.staff.length >= 60) return 'יש מספיק עובדים';
    const n = this.staff.filter((s) => s.role === role).length + 1;
    const gi = idx(GATE.x, GATE.z);
    this.staff.push({ id: this.nextId++, role, name: `${def.he} ${n}`, cur: gi, nxt: -1, p: 0, x: GATE.x + 0.5, z: GATE.z + 0.5, dir: 0, state: 'walk', timer: 0, task: null, done: 0, from: -1, off: 0, hired: this.t });
    this.rev.staff++;
    return null;
  }
  fire(id) {
    const i = this.staff.findIndex((s) => s.id === id);
    if (i < 0) return 'לא קיים';
    this.staff.splice(i, 1);
    this.rev.staff++;
    return null;
  }
  wages() { return this.staff.reduce((a, s) => a + STAFF[s.role].wage, 0); }

  // ---------- derived maps ----------
  changed() { this.needDerive = true; this.rev.land++; this.rev.objects++; }

  derive() {
    this.needDerive = false;
    // who can be reached from which path tiles
    this.access = new Map();
    this.accessAt = new Map();
    for (const o of this.objects.values()) {
      if (o.type === 'scenery') continue;
      let tiles;
      if (o.type === 'coaster') tiles = this.stationTiles(o);
      else tiles = this.tilesOf(o.x, o.z, o.w, o.d) || [];
      const acc = new Set();
      for (const i of tiles) for (const [dx, dz] of NB) {
        const x = tx(i) + dx, z = tz(i) + dz;
        if (inMap(x, z) && this.path[idx(x, z)]) acc.add(idx(x, z));
      }
      const list = [...acc];
      this.access.set(o.id, list);
      for (const a of list) { if (!this.accessAt.has(a)) this.accessAt.set(a, []); this.accessAt.get(a).push(o.id); }
    }
    // walking distance to every ride and stall, to the gate, to a bench
    this.fields = new Map();
    for (const [id, list] of this.access) this.fields.set(id, list.length ? this.bfs(list) : null);
    this.exitField = this.bfs([idx(GATE.x, GATE.z)]);
    const benches = [];
    for (let i = 0; i < N; i++) if (this.addon[i] === ADDONS.bench.id && this.path[i]) benches.push(i);
    this.benchField = benches.length ? this.bfs(benches) : null;
    // beauty spreads from scenery and lamps
    this.beauty = new Float32Array(N);
    const spread = (cx, cz, w, d, b) => {
      for (let z = cz - 3; z < cz + d + 3; z++) for (let x = cx - 3; x < cx + w + 3; x++) {
        if (!inMap(x, z)) continue;
        const dx = Math.max(cx - x, 0, x - (cx + w - 1)), dz = Math.max(cz - z, 0, z - (cz + d - 1));
        const dist = Math.max(dx, dz);
        if (dist <= 3) this.beauty[idx(x, z)] += b * (1 - dist / 4);
      }
    };
    for (const o of this.objects.values()) if (o.type === 'scenery') spread(o.x, o.z, o.w, o.d, SCENERY[o.kind].beauty);
    for (let i = 0; i < N; i++) if (this.addon[i] === ADDONS.lamp.id) spread(tx(i), tz(i), 1, 1, ADDONS.lamp.beauty);
    this.rev.land++;
  }

  // Steps along paths from the given tiles to every path tile (-1: can't get there).
  bfs(sources, limit = 9999) {
    const f = new Int16Array(N).fill(-1), q = new Int32Array(N);
    let h = 0, t = 0;
    for (const s of sources) if (this.path[s] && f[s] < 0) { f[s] = 0; q[t++] = s; }
    while (h < t) {
      const c = q[h++], x = tx(c), z = tz(c);
      if (f[c] >= limit) continue;
      for (const [dx, dz] of NB) {
        const nx = x + dx, nz = z + dz;
        if (!inMap(nx, nz)) continue;
        const n = idx(nx, nz);
        if (this.path[n] && f[n] < 0) { f[n] = f[c] + 1; q[t++] = n; }
      }
    }
    return f;
  }

  // ---------- what guests think a ride is worth ----------
  rideValue(o) {
    let v = 1 + o.exc * 1.3;
    if (o.type === 'coaster') v *= 1.15;
    v *= Math.max(0.7, 1 - (o.age || 0) * 0.005);
    if (this.entryFee > 0) v *= 0.65;
    return Math.round(v * 2) / 2;
  }
  shopValue(o) { return SHOPS[o.kind].worth; }
  rides() { return [...this.objects.values()].filter((o) => o.type === 'ride' || o.type === 'coaster'); }
  shops() { return [...this.objects.values()].filter((o) => o.type === 'shop'); }
  guestById(id) {
    if (!this.guestIndex || this.guestIndexRev !== this.guests.length) {
      this.guestIndex = new Map(this.guests.map((g) => [g.id, g]));
      this.guestIndexRev = this.guests.length;
    }
    return this.guestIndex.get(id);
  }

  // How many guests the park can hold right now, from what it offers.
  capacity() {
    let a = 20;
    for (const o of this.objects.values()) {
      if (o.type === 'ride' && o.open) a += 14 + o.exc * 4;
      if (o.type === 'coaster' && o.open && o.tested) a += 28 + o.exc * 9;
      if (o.type === 'shop') a += 4;
    }
    if (this.t < this.marketingUntil) a *= 1.2;
    return Math.min(MAX_GUESTS, Math.round(a));
  }
  entryWorth() {
    let v = 3;
    for (const o of this.rides()) if (o.open) v += o.exc * (o.type === 'coaster' ? 2 : 1);
    return v;
  }
  arrivalRate() {
    const open = this.rides().filter((o) => o.open && (o.type !== 'coaster' || o.tested)).length;
    const cap = this.capacity(), n = this.guests.length;
    if (n >= cap) return 0;
    let r = open ? 0.08 + 1.1 * Math.max(0.15, this.rating / 1000) ** 1.4 : 0.015;
    r *= Math.sqrt(1 - n / cap);
    if (this.t < this.marketingUntil) r *= MARKETING.boost;
    const worth = this.entryWorth();
    if (this.entryFee > worth) r *= Math.max(0.05, 1 - ((this.entryFee - worth) / worth) * 1.5);
    return r;
  }

  // ---------- the clock ----------
  tick(dt) {
    if (this.needDerive) this.derive();
    const m0 = this.month;
    this.t += dt;
    // arrivals
    this.spawnAcc += this.arrivalRate() * dt;
    while (this.spawnAcc >= 1) { this.spawnAcc -= 1; if (this.guests.length < MAX_GUESTS) spawnGuest(this); }
    // rides
    for (const o of this.objects.values()) if (o.queue) this.stepRide(o, dt);
    // people
    for (const g of this.guests) stepGuest(this, g, dt);
    if (this.guests.some((g) => g.state === 'gone')) { this.guests = this.guests.filter((g) => g.state !== 'gone'); this.guestIndex = null; }
    for (const s of this.staff) stepStaff(this, s, dt);
    // running costs, paid as time passes
    let upkeep = 0;
    for (const o of this.objects.values()) {
      if (o.type === 'ride' || o.type === 'shop') upkeep += this.defOf(o.type, o.kind).upkeep;
      if (o.type === 'coaster') upkeep += COASTER.upkeepBase + o.pieces.length * COASTER.upkeepPerPiece;
    }
    this.spend((upkeep * dt) / MONTH, 'upkeep');
    this.spend((this.wages() * dt) / MONTH, 'wages');
    this.spend((this.loan * INTEREST * dt) / MONTH, 'interest');
    // the rating, once a second
    this.slow += dt;
    if (this.slow >= 1) { this.slow -= 1; this.rate(); }
    if (this.month !== m0) this.newMonth();
  }

  stepRide(o, dt) {
    const def = o.type === 'ride' ? RIDES[o.kind] : null;
    const cap = def ? def.cap : COASTER.cars * COASTER.seats;
    switch (o.phase) {
      case 'idle':
        if (!o.open || o.broken || (o.type === 'coaster' && !o.tested)) break;
        if (o.queue.length) { o.phase = 'load'; o.timer = 3; }
        break;
      case 'load':
        o.timer -= dt;
        if (o.timer > 0) break;
        o.riders = [];
        while (o.riders.length < cap && o.queue.length) {
          const g = this.guestById(o.queue.shift());
          if (!g) continue;
          if (g.money < o.price) { g.state = 'walk'; g.goal = null; g.nxt = -1; this.thought(g, 'poor'); continue; }
          g.money = money(g.money - o.price); g.spent += o.price;
          this.earn(o.price, 'rides'); o.monthIncome += o.price; o.totalIncome += o.price;
          g.state = 'ride';
          o.riders.push(g.id);
        }
        if (!o.riders.length) { o.phase = 'idle'; break; }
        o.phase = 'run'; o.timer = o.type === 'coaster' ? o.run.duration : def.cycle;
        o.runs++; o.totalRiders += o.riders.length;
        o.rel = Math.max(0.3, o.rel - 0.006 - o.age * 0.0004);
        break;
      case 'run':
        o.timer -= dt;
        if (o.timer > 0) break;
        this.unload(o);
        if (this.rand() < Math.max(0, 0.9 - o.rel) * 0.6 + 0.003) {
          o.broken = true; o.brokeAt = this.t;
          this.emit('broken', `${o.name} התקלקל. צריך מכונאי`, { id: o.id });
        }
        o.phase = 'idle';
        break;
    }
    // a broken or closed ride sends its line home, a few at a time
    if ((o.broken || !o.open) && o.queue.length && this.rand() < dt * 0.5) {
      const g = this.guestById(o.queue.shift());
      if (g) { g.state = 'walk'; g.goal = null; g.nxt = -1; g.happy = Math.max(0, g.happy - 3); this.thought(g, 'broken', o.id); }
    }
  }

  unload(o) {
    const acc = this.access.get(o.id) || [];
    for (const gid of o.riders) {
      const g = this.guestById(gid);
      if (!g) continue;
      g.state = 'walk'; g.goal = null; g.nxt = -1; g.p = 0;
      if (acc.length) g.cur = this.pick(acc);
      // how it felt
      const over = Math.max(0, o.int - g.maxInt);
      g.happy = Math.min(100, Math.max(0, g.happy + 2 + o.exc * 1.5 - over * 6));
      g.nausea = Math.min(100, g.nausea + o.nau * 7 * (1.3 - g.nauTol / 10));
      g.energy = Math.max(0, g.energy - 3 - o.int * 0.4);
      g.ridden[o.id] = (g.ridden[o.id] || 0) + 1;
      g.rides++; g.lastRide = this.t;
      if (over > 1.5) this.thought(g, 'too-intense', o.id);
      else if (o.exc >= 5.5) this.thought(g, 'ride-great', o.id);
      else if (o.exc >= 3) this.thought(g, 'ride-good', o.id);
      else this.thought(g, 'ride-meh', o.id);
    }
    o.riders = [];
  }

  thought(g, k, id) {
    const last = g.thoughts[0];
    if (last && last.k === k && last.id === id && this.t - last.t < 40) return;
    g.thoughts.unshift({ k, id, t: this.t });
    if (g.thoughts.length > 6) g.thoughts.pop();
  }

  rate() {
    const n = this.guests.length;
    let happy = 0;
    for (const g of this.guests) happy += g.happy;
    const avg = n ? happy / n : 60;
    let dirty = 0, vom = 0;
    for (let i = 0; i < N; i++) if (this.path[i]) { if (this.dirt[i] >= 2) dirty++; if (this.vomit[i]) vom++; }
    let rides = 0, coasters = 0, broken = 0, beauty = 0;
    for (const o of this.objects.values()) {
      if (o.type === 'ride' && o.open) rides++;
      if (o.type === 'coaster' && o.open && o.tested) coasters++;
      if (o.broken) broken++;
      if (o.type === 'scenery') beauty += SCENERY[o.kind].beauty;
    }
    let target = 200 + avg * 4
      + Math.min(200, rides * 25 + coasters * 45)
      + Math.min(100, n * 0.4)
      + Math.min(80, beauty * 0.25)
      - Math.min(220, dirty * 5 + vom * 9)
      - broken * 35;
    target = Math.max(0, Math.min(999, target));
    this.ratingTarget = target;
    this.rating += (target - this.rating) * 0.04;
    this.avgHappy = avg;
    this.turnedRecent = (this.turnedRecent || 0) * 0.98;
    this.dirtyTiles = dirty + vom;
    if (Math.floor(this.t) % 3 === 0) this.thoughtSummary = thinkCounts(this);
  }

  newMonth() {
    const d = this.date();
    let inc = 0, out = 0;
    for (const v of Object.values(this.ledger.in)) inc += v;
    for (const v of Object.values(this.ledger.out)) out += v;
    this.history.push({ m: this.month - 1, in: { ...this.ledger.in }, out: { ...this.ledger.out }, income: money(inc), expense: money(out), net: money(inc - out), guests: this.guests.length, rating: Math.round(this.rating) });
    if (this.history.length > 24) this.history.shift();
    this.ledger = this.newLedger();
    for (const o of this.objects.values()) if (o.queue) { o.age++; o.monthIncome = 0; }
    for (const o of this.objects.values()) if (o.type === 'shop') o.monthIncome = 0;
    this.emit('month', `${d.monthName}, שנה ${d.year}. החודש שעבר: ${inc - out >= 0 ? 'רווח' : 'הפסד'} של ₪${Math.abs(Math.round(inc - out)).toLocaleString('he-IL')}`);
    if (!this.won && this.guests.length >= GOAL.guests && this.rating >= GOAL.rating) {
      this.won = true;
      this.emit('won', `ניצחת! ${this.guests.length} אורחים ודירוג ${Math.round(this.rating)}. הפארק שלך הצליח`);
    } else if (!this.won && !this.goalMissed && this.month >= GOAL.months) {
      this.goalMissed = true;
      this.emit('missed', 'הזמן ליעד עבר. אפשר להמשיך לבנות כמה שרוצים');
    }
    if (this.t >= this.marketingUntil && this.marketingUntil > 0 && this.marketingUntil > this.t - MONTH) this.emit('info', 'הקמפיין הסתיים');
  }

  // ---------- saving ----------
  toJSON() {
    const objs = [...this.objects.values()].map((o) => {
      const { curve, run, ...rest } = o;
      return rest;
    });
    const enc = (a) => btoa(String.fromCharCode(...a));
    return {
      v: 1, seed: this.seed, t: this.t, name: this.name, cash: this.cash, loan: this.loan, entryFee: this.entryFee,
      marketingUntil: this.marketingUntil, rating: this.rating, nextId: this.nextId, ledger: this.ledger, history: this.history,
      totals: this.totals, won: this.won, goalMissed: this.goalMissed, spawnAcc: this.spawnAcc,
      path: enc(this.path), addon: enc(this.addon), dirt: enc(this.dirt), vomit: enc(this.vomit),
      objects: objs, guests: this.guests, staff: this.staff,
    };
  }
  static fromJSON(j) {
    const p = new Park(j.seed);
    const dec = (s, T) => {
      const bin = atob(s);
      const u = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
      return new T(u.buffer);
    };
    Object.assign(p, {
      seed: j.seed, t: j.t, name: j.name, cash: j.cash, loan: j.loan, entryFee: j.entryFee, marketingUntil: j.marketingUntil,
      rating: j.rating, nextId: j.nextId, ledger: j.ledger, history: j.history, totals: j.totals, won: j.won, goalMissed: j.goalMissed,
      spawnAcc: j.spawnAcc || 0, guests: j.guests, staff: j.staff,
    });
    p.path = dec(j.path, Uint8Array); p.addon = dec(j.addon, Uint8Array); p.dirt = dec(j.dirt, Uint8Array); p.vomit = dec(j.vomit, Uint8Array);
    p.objects = new Map();
    p.owner = new Int32Array(N);
    p.trackOcc = new Map();
    for (const o of j.objects) {
      p.objects.set(o.id, o);
      if (o.type === 'coaster') p.retrack(o);
      else for (const i of p.tilesOf(o.x, o.z, o.w, o.d) || []) p.owner[i] = o.id;
    }
    p.derive();
    return p;
  }
}

export { isComplete, endState };
