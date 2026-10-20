// Everything on the screen that isn't the 3D park: the money and date bar,
// the toolbar, the build tools, the coaster builder and the panels for rides,
// stalls, guests, staff, money and the park itself. Hebrew, right to left.
import {
  RIDES, RIDE_ORDER, SHOPS, SHOP_ORDER, SCENERY, SCENERY_ORDER, ADDONS, STAFF, STAFF_ORDER, PIECES, PIECE_ORDER,
  PATH_COST, GOAL, MARKETING, MAX_LOAN, COASTER, STEP, ADDON_BY_ID, MONTH, GATE,
} from '../sim/catalog.js';
import { footprint, idx } from '../sim/park.js';
import { thoughtText, GOOD_THOUGHTS } from '../sim/guests.js';
import { endState, isComplete, stationPieces, nextState, DX, DZ, METERS } from '../sim/track.js';

const $ = (id) => document.getElementById(id);
const fmt = (n) => (n < 0 ? '−' : '') + '₪' + Math.abs(Math.round(n)).toLocaleString('he-IL');
const pct = (v) => Math.round(v) + '%';
const n = (x) => `<span class="num">${x}</span>`; // a number inside Hebrew text
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const BAD_THOUGHTS = new Set(['expensive', 'scary', 'queue-long', 'broken', 'no-food', 'no-drink', 'no-toilet', 'no-bench', 'sick', 'dirty', 'nothing', 'lost', 'poor', 'leave-unhappy', 'too-intense', 'entry-expensive', 'tired']);

const TOOLS = [
  { k: 'path', ic: '🛤️', he: 'שביל' },
  { k: 'coaster', ic: '🎢', he: 'רכבת הרים' },
  { k: 'rides', ic: '🎠', he: 'מתקנים' },
  { k: 'shops', ic: '🍔', he: 'דוכנים' },
  { k: 'scenery', ic: '🌳', he: 'נוי' },
  { k: 'addons', ic: '🪑', he: 'לשביל' },
  { k: 'staff', ic: '👷', he: 'צוות' },
  { k: 'finance', ic: '💰', he: 'כספים' },
  { k: 'park', ic: '🏞️', he: 'הפארק' },
  { k: 'demolish', ic: '🚜', he: 'הריסה' },
  { k: 'menu', ic: '☰', he: 'תפריט' },
];

const rateWord = (v, kind) => {
  if (kind === 'int') return v < 2 ? 'רגוע' : v < 4.5 ? 'נעים' : v < 7 ? 'חזק' : v < 9 ? 'חזק מאוד' : 'קיצוני';
  if (kind === 'nau') return v < 2 ? 'לא מסחרר' : v < 4 ? 'קצת מסחרר' : v < 6.5 ? 'מסחרר' : 'מבחיל';
  return v < 2.5 ? 'משעמם' : v < 4 ? 'נחמד' : v < 5.5 ? 'מהנה' : v < 7 ? 'מרגש' : 'מדהים';
};
const meter = (v, max, cls = '') => `<span class="meter ${cls}"><i style="width:${Math.max(2, Math.min(100, (v / max) * 100))}%"></i></span>`;

export class UI {
  constructor(game) {
    this.g = game;
    this.tool = null;
    this.panel = null;
    this.paint = null;
    this.toolbar();
    $('sh-x').onclick = () => this.closePanel();
    $('sh-body').addEventListener('click', (e) => this.act(e));
    $('act').addEventListener('click', (e) => this.act(e));
    $('coaster').addEventListener('click', (e) => this.act(e));
    $('modal').addEventListener('click', (e) => this.act(e));
    $('hint').addEventListener('click', () => this.hintTap && this.hintTap());
    for (const b of document.querySelectorAll('#speed button')) b.onclick = () => this.g.setSpeed(+b.dataset.s);
    this.slow = 0; this.panelT = 0; this.hintT = 0;
  }
  get P() { return this.g.park; }
  get W() { return this.g.world; }

  // ------------------------------------------------------------ top bar
  hud() {
    const P = this.P, d = P.date();
    $('cash').textContent = fmt(P.cash);
    $('c-cash').classList.toggle('neg', P.cash < 0);
    $('guests').textContent = P.guests.length;
    $('rating').textContent = Math.round(P.rating);
    $('date').textContent = `${d.day} ב${d.monthName}, שנה ${d.year}`;
    for (const b of document.querySelectorAll('#speed button')) b.classList.toggle('on', +b.dataset.s === this.g.speed);
  }

  toolbar() {
    $('tools').innerHTML = TOOLS.map((t) => `<button class="tool" data-tool="${t.k}"><span class="ic">${t.ic}</span>${t.he}</button>`).join('');
    $('tools').onclick = (e) => {
      const b = e.target.closest('[data-tool]');
      if (!b) return;
      this.toolButton(b.dataset.tool);
    };
  }
  markTool(k) { for (const b of document.querySelectorAll('.tool')) b.classList.toggle('on', b.dataset.tool === k); }

  toolButton(k) {
    if (this.openCat === k && !$('sheet').classList.contains('hidden')) { this.closePanel(); return; }
    this.setTool(null);
    this.openCat = k;
    if (k === 'path') { this.setTool({ k: 'path' }); this.markTool('path'); return; }
    if (k === 'demolish') { this.setTool({ k: 'demolish' }); this.markTool('demolish'); return; }
    this.markTool(k);
    this.openPanel({ k: k === 'rides' || k === 'shops' || k === 'scenery' || k === 'addons' || k === 'coaster' ? 'pick' : k, cat: k });
  }

  // ------------------------------------------------------------ tools
  setTool(t) {
    this.tool = t;
    this.paint = null;
    this.W.clearGhost();
    this.W.grid.visible = !!t && t.k !== 'coaster';
    if (!t) this.markTool(null);
    if (!t || t.k !== 'coaster') { this.W.showEnd(null); $('coaster').classList.add('hidden'); $('bar').classList.remove('hidden'); }
    if (t && t.k === 'coaster') { this.closePanel(true); $('bar').classList.add('hidden'); this.coasterBar(); }
    this.actBar();
  }
  paints() { const t = this.tool; return !!t && (t.k === 'path' || t.k === 'scenery' || t.k === 'addon'); }

  tileAt(cx, cy) {
    const p = this.W.groundAt(cx, cy);
    return p ? { x: Math.floor(p.x), z: Math.floor(p.z), px: p.x, pz: p.z } : null;
  }

  actBar() {
    const t = this.tool, el = $('act');
    if (!t || t.k === 'coaster') { el.classList.add('hidden'); return; }
    let lbl = '', btns = '';
    const touch = matchMedia('(pointer: coarse)').matches;
    if (t.k === 'path') lbl = `${touch ? 'גרור באצבע' : 'גרור עם העכבר'} כדי לסלול · ${fmt(PATH_COST)} לאריח${touch ? '<br><span style="font-weight:500;color:#5d6b82">שתי אצבעות להזזת המפה</span>' : ''}`;
    else if (t.k === 'demolish') lbl = 'הקש על מה שרוצים להרוס';
    else if (t.k === 'scenery' || t.k === 'addon') {
      const d = t.k === 'scenery' ? SCENERY[t.kind] : ADDONS[t.kind];
      lbl = `${d.icon} ${d.he} · ${fmt(d.cost)} · ${t.k === 'addon' ? 'על שביל' : 'הקש או גרור'}`;
    } else if (t.k === 'place' || t.k === 'station') {
      const d = t.k === 'station' ? { icon: '🎢', he: 'תחנה', cost: this.P.coasterBaseCost() } : this.P.defOf(t.type, t.kind);
      lbl = `${d.icon} ${d.he} · ${fmt(d.cost)}`;
      btns += `<button class="btn" data-act="rotate">↻ סובב</button>`;
      if (t.at) btns += `<button class="btn go" data-act="build" ${t.ok ? '' : 'disabled'}>✓ בנה</button>`;
      else lbl += `<br><span style="font-weight:500;color:#5d6b82">${t.k === 'station' ? 'הקש איפה לשים את התחנה' : 'הקש ליד שביל'}</span>`;
    }
    el.innerHTML = `<div class="lbl">${lbl}</div>${btns}<button class="btn x2" data-act="tool-off">✕</button>`;
    el.classList.remove('hidden');
  }

  // where a footprint goes so the tapped tile is in its middle
  footAt(tile, w, d) { return { x: tile.x - Math.floor((w - 1) / 2), z: tile.z - Math.floor((d - 1) / 2) }; }

  placeAt(tile) {
    const t = this.tool;
    if (t.k === 'station') {
      const d = t.rot;
      const x = tile.x - DX[d], z = tile.z - DZ[d]; // the tapped tile is the second of four
      t.at = { x, z };
      const r = this.P.coasterReason(x, z, d);
      t.ok = !r; t.why = r;
      const tiles = stationPieces(x, z, d).map((p) => ({ x: p.x, z: p.z, ok: t.ok }));
      this.W.clearGhost(); this.W.showTiles(tiles);
      // show which way the track leaves
      this.W.showEnd({ pieces: stationPieces(x, z, d) });
    } else {
      const def = this.P.defOf(t.type, t.kind), { w, d } = footprint(def, t.rot);
      const at = this.footAt(tile, w, d);
      t.at = at;
      const r = this.P.placeReason(t.type, t.kind, at.x, at.z, t.rot);
      t.ok = !r; t.why = r;
      this.W.ghostModel(t.kind, t.type, at.x, at.z, w, d, t.rot, t.ok);
    }
    this.actBar();
  }

  build() {
    const t = this.tool;
    if (!t || !t.at) return;
    if (t.k === 'station') {
      const r = this.P.startCoaster(t.at.x, t.at.z, t.rot);
      if (r.error) return this.toast(r.error, 'bad');
      this.setTool({ k: 'coaster', id: r.id });
      this.focusEnd();
      return;
    }
    const r = this.P.place(t.type, t.kind, t.at.x, t.at.z, t.rot);
    if (r.error) return this.toast(r.error, 'bad');
    const o = this.P.objects.get(r.id);
    if (t.type !== 'scenery' && !(this.P.access.get(r.id) || []).length && !this.P.needDerive) this.toast(`${o.name} לא נוגע בשביל. אורחים לא יגיעו אליו`, 'warn');
    else if (t.type !== 'scenery') this.toast(`${o.name} נבנה`, 'good');
    t.at = null; this.W.clearGhost(); this.actBar();
  }

  rotate() {
    const t = this.tool;
    if (!t || (t.k !== 'place' && t.k !== 'station')) return;
    t.rot = (t.rot + 1) % 4;
    if (t.at) {
      if (t.k === 'station') this.placeAt({ x: t.at.x + DX[(t.rot + 3) % 4], z: t.at.z + DZ[(t.rot + 3) % 4] });
      else {
        const def = this.P.defOf(t.type, t.kind), f0 = footprint(def, (t.rot + 3) % 4);
        this.placeAt({ x: t.at.x + Math.floor((f0.w - 1) / 2), z: t.at.z + Math.floor((f0.d - 1) / 2) });
      }
    }
  }

  hover(cx, cy) {
    const t = this.tool;
    if (!t || (t.k !== 'place' && t.k !== 'station')) {
      if (t && (t.k === 'path' || t.k === 'scenery' || t.k === 'addon') && !this.paint) {
        const tile = this.tileAt(cx, cy);
        if (tile) this.W.showTiles([{ ...tile, ok: this.canPaint(tile) }]);
      }
      return;
    }
    const tile = this.tileAt(cx, cy);
    if (tile) this.placeAt(tile);
  }

  tap(cx, cy, type) {
    const t = this.tool;
    if (t && (t.k === 'place' || t.k === 'station')) {
      const tile = this.tileAt(cx, cy);
      if (!tile) return;
      if (type === 'mouse') { this.placeAt(tile); if (t.ok) this.build(); else if (t.why) this.toast(t.why, 'bad'); }
      else this.placeAt(tile);
      return;
    }
    if (t && t.k === 'demolish') return this.demolishAt(cx, cy);
    if (t && t.k === 'coaster') return;
    this.select(cx, cy);
  }

  canPaint(tile) {
    const t = this.tool, P = this.P;
    if (t.k === 'path') return !P.pathReason(tile.x, tile.z);
    if (t.k === 'scenery') return !P.placeReason('scenery', t.kind, tile.x, tile.z, 0);
    if (t.k === 'addon') return P.path[idx(tile.x, tile.z)] === 1 && P.addon[idx(tile.x, tile.z)] !== ADDONS[t.kind].id;
    return false;
  }
  paintStart(cx, cy) {
    const tile = this.tileAt(cx, cy);
    if (!tile) return;
    this.paint = { start: tile, tiles: [tile], seen: new Set([tile.x + ',' + tile.z]) };
    this.paintShow();
  }
  paintMove(cx, cy) {
    const p = this.paint, tile = this.tileAt(cx, cy);
    if (!p || !tile) return;
    if (this.tool.k === 'path') {
      // a straight line from where the drag started, along the longer axis
      const dx = tile.x - p.start.x, dz = tile.z - p.start.z, list = [];
      if (Math.abs(dx) >= Math.abs(dz)) for (let k = 0; k <= Math.abs(dx); k++) list.push({ x: p.start.x + Math.sign(dx) * k, z: p.start.z });
      else for (let k = 0; k <= Math.abs(dz); k++) list.push({ x: p.start.x, z: p.start.z + Math.sign(dz) * k });
      p.tiles = list;
    } else if (!p.seen.has(tile.x + ',' + tile.z)) { p.seen.add(tile.x + ',' + tile.z); p.tiles.push(tile); }
    this.paintShow();
  }
  paintShow() { this.W.showTiles(this.paint.tiles.map((t) => ({ ...t, ok: this.canPaint(t) }))); }
  paintCancel() { this.paint = null; this.W.clearGhost(); }
  paintEnd() {
    const p = this.paint, t = this.tool;
    this.paint = null; this.W.clearGhost();
    if (!p || !t) return;
    let n = 0, err = null, spent = 0;
    const c0 = this.P.cash;
    for (const tile of p.tiles) {
      let r;
      if (t.k === 'path') r = this.P.placePath(tile.x, tile.z);
      else if (t.k === 'scenery') { r = this.P.place('scenery', t.kind, tile.x, tile.z, 0); r = r.error || null; }
      else r = this.P.placeAddon(t.kind, tile.x, tile.z);
      if (!r) n++; else err = err || r;
    }
    spent = c0 - this.P.cash;
    if (err && (!n || p.tiles.length === 1)) this.toast(err, 'bad');
    else if (n > 1) this.toast(`נבנו ${n} · ${fmt(spent)}`, 'good');
  }

  demolishAt(cx, cy) {
    const P = this.P, cid = this.W.pickCoaster(cx, cy);
    const tile = this.tileAt(cx, cy);
    const o = cid ? P.objects.get(cid) : tile ? P.objAt(tile.x, tile.z) : null;
    if (o) {
      if (o.type === 'scenery') { P.demolish(o.id); return; }
      return this.confirm(`להרוס את ${esc(o.name)}?`, `יחזרו ${fmt(P.demolishValue(o.id))}`, 'demolish-yes', o.id);
    }
    if (!tile) return;
    const i = idx(tile.x, tile.z);
    if (P.addon[i]) { P.removeAddon(tile.x, tile.z); return; }
    if (P.path[i]) { const r = P.removePath(tile.x, tile.z); if (r) this.toast(r, 'bad'); }
  }

  select(cx, cy) {
    const P = this.P, tile = this.tileAt(cx, cy);
    if (tile) {
      const w = this.W.people.nearest(P, tile.px, tile.pz, 0.5);
      if (w) {
        if (w.role) return this.openPanel({ k: 'worker', id: w.id });
        return this.openPanel({ k: 'guest', id: w.id });
      }
    }
    const cid = this.W.pickCoaster(cx, cy);
    if (cid) return this.openPanel({ k: 'obj', id: cid });
    const o = tile && P.objAt(tile.x, tile.z);
    if (o && o.type !== 'scenery') return this.openPanel({ k: 'obj', id: o.id });
    this.closePanel();
  }

  escape() {
    if (this.tool && this.tool.k === 'coaster') return this.finishBuilder();
    if (this.tool) return this.setTool(null);
    this.closePanel();
  }

  // ------------------------------------------------------------ panels
  openPanel(p) {
    this.panel = p;
    $('sheet').classList.remove('hidden');
    $('sheet').classList.toggle('wide', p.k !== 'pick');
    this.W.select(p.k === 'guest' || p.k === 'worker' ? { kind: 'person', id: p.id } : p.k === 'obj' ? { kind: 'object', id: p.id } : null);
    this.renderPanel(true);
  }
  closePanel(keepTool) {
    this.panel = null; this.openCat = null;
    $('sheet').classList.add('hidden');
    this.W.select(null);
    if (!keepTool && !this.tool) this.markTool(null);
  }
  renderPanel(fresh) {
    const p = this.panel;
    if (!p) return;
    const body = $('sh-body'), top = body.scrollTop;
    let title = '', html = '';
    const P = this.P;
    switch (p.k) {
      case 'pick': [title, html] = this.pickPanel(p.cat); break;
      case 'obj': {
        const o = P.objects.get(p.id);
        if (!o) return this.closePanel();
        [title, html] = o.type === 'shop' ? this.shopPanel(o) : this.ridePanel(o);
        break;
      }
      case 'guest': {
        const g = P.guests.find((x) => x.id === p.id);
        if (!g) return this.closePanel();
        [title, html] = this.guestPanel(g);
        break;
      }
      case 'worker': {
        const s = P.staff.find((x) => x.id === p.id);
        if (!s) return this.closePanel();
        [title, html] = this.workerPanel(s);
        break;
      }
      case 'staff': [title, html] = this.staffPanel(); break;
      case 'finance': [title, html] = this.financePanel(); break;
      case 'park': [title, html] = this.parkPanel(); break;
      case 'menu': [title, html] = this.menuPanel(); break;
      case 'test': [title, html] = this.testPanel(p.id); break;
      default: return;
    }
    $('sh-title').textContent = title;
    body.innerHTML = html;
    if (!fresh) body.scrollTop = top; else body.scrollTop = 0;
  }

  pickPanel(cat) {
    const P = this.P, card = (act, arg, ic, nm, pr, ds, st, ok = true, on = false) =>
      `<button class="card ${ok ? '' : 'off'} ${on ? 'on' : ''}" data-act="${act}" data-arg="${arg}"><span class="ic">${ic}</span><span class="nm">${nm}</span>${pr ? `<span class="pr num">${pr}</span>` : ''}${ds ? `<span class="ds">${ds}</span>` : ''}${st ? `<span class="st">${st}</span>` : ''}</button>`;
    let html = '<div class="cards">', title = '';
    if (cat === 'rides') {
      title = 'מתקנים';
      for (const k of RIDE_ORDER) {
        const d = RIDES[k], f = footprint(d, 0);
        html += card('pick-ride', k, d.icon, d.he, fmt(d.cost), d.desc, `ריגוש ${d.exc} · עוצמה ${d.int} · ${f.w}×${f.d}`, P.cash >= d.cost);
      }
    } else if (cat === 'shops') {
      title = 'דוכנים ושירותים';
      for (const k of SHOP_ORDER) { const d = SHOPS[k]; html += card('pick-shop', k, d.icon, d.he, fmt(d.cost), d.price ? `מחיר מומלץ ${fmt(d.price)}` : 'חינם לאורחים', '', P.cash >= d.cost); }
    } else if (cat === 'scenery') {
      title = 'נוי';
      for (const k of SCENERY_ORDER) { const d = SCENERY[k]; html += card('pick-scenery', k, d.icon, d.he, fmt(d.cost), 'יופי ' + d.beauty, '', P.cash >= d.cost); }
    } else if (cat === 'addons') {
      title = 'תוספות לשביל';
      for (const k of Object.keys(ADDONS)) { const d = ADDONS[k]; html += card('pick-addon', k, d.icon, d.he, fmt(d.cost), d.desc, '', P.cash >= d.cost); }
    } else if (cat === 'coaster') {
      title = 'רכבות הרים';
      html += card('new-coaster', '', '🎢', 'רכבת הרים חדשה', 'מ־' + fmt(P.coasterBaseCost()), 'מציבים תחנה ומחברים חלקי מסילה עד שחוזרים אליה', '', P.cash >= P.coasterBaseCost());
      for (const o of P.objects.values()) if (o.type === 'coaster') html += card('open-obj', o.id, '🎢', esc(o.name), '', o.tested ? `ריגוש ${o.exc.toFixed(1)} · עוצמה ${o.int.toFixed(1)}` : 'עוד בבנייה', o.open ? 'פתוחה' : 'סגורה');
    }
    return [title, html + '</div>'];
  }

  priceRow(o, value) {
    return `<div class="row"><span class="k">מחיר ${o.type === 'shop' ? 'למוצר' : 'לכרטיס'}<br><span style="font-size:12px">שווה לאורחים בערך ${fmt(value)}</span></span>
      <div class="stepper"><button data-act="price" data-arg="-0.5">−</button><span class="val num">₪${o.price % 1 ? o.price.toFixed(2) : o.price}</span><button data-act="price" data-arg="0.5">+</button></div></div>`;
  }

  ridePanel(o) {
    const P = this.P, coaster = o.type === 'coaster';
    const status = o.broken ? '<span class="pill bad">מקולקל</span>' : coaster && o.editing ? '<span class="pill mid">בבנייה</span>' : o.open ? '<span class="pill">פתוח</span>' : '<span class="pill gray">סגור</span>';
    let h = `<div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">${status}<span class="note">${o.queue.length} בתור · ${o.riders.length} על המתקן</span></div>`;
    if (!coaster || o.tested) {
      h += this.priceRow(o, P.rideValue(o) * (P.entryFee ? 1 : 1));
      h += `<div class="row"><span class="k">ריגוש</span>${meter(o.exc, 10)}<span class="v">${o.exc.toFixed(1)} · ${rateWord(o.exc)}</span></div>`;
      h += `<div class="row"><span class="k">עוצמה</span>${meter(o.int, 10, o.int > 8 ? 'bad' : o.int > 6 ? 'warn' : '')}<span class="v">${o.int.toFixed(1)} · ${rateWord(o.int, 'int')}</span></div>`;
      h += `<div class="row"><span class="k">סחרחורת</span>${meter(o.nau, 10, o.nau > 6 ? 'bad' : o.nau > 4 ? 'warn' : '')}<span class="v">${o.nau.toFixed(1)} · ${rateWord(o.nau, 'nau')}</span></div>`;
    }
    if (coaster && o.stats) {
      const s = o.stats;
      h += `<div class="sec">הנסיעה</div>`;
      h += `<div class="row"><span class="k">מהירות מרבית</span><span class="v">${n(Math.round(s.maxSpeed))} קמ״ש</span></div>`;
      h += `<div class="row"><span class="k">גובה · הנפילה הגדולה</span><span class="v">${n(Math.round(s.maxHeight))} מ׳ · ${n(Math.round(s.maxDrop))} מ׳</span></div>`;
      h += `<div class="row"><span class="k">כוחות G</span><span class="v">${n(s.maxG.toFixed(1) + ' / ' + s.minG.toFixed(1))} · צד ${n(s.maxLat.toFixed(1))}</span></div>`;
      h += `<div class="row"><span class="k">ריחוף · היפוכים</span><span class="v">${n(s.airtime.toFixed(1))} ש׳ · ${n(s.inversions)}</span></div>`;
      h += `<div class="row"><span class="k">אורך · משך</span><span class="v">${n(Math.round(s.length))} מ׳ · ${n(Math.round(s.duration))} ש׳</span></div>`;
    }
    if (coaster && !o.tested) {
      const done = isComplete(o.pieces);
      h += `<div class="note" style="margin:8px 0">${o.fail ? '⚠️ ' + esc(o.fail.reason) : done ? 'המסלול סגור. צריך לבדוק אותו לפני שפותחים.' : 'המסלול עוד לא חוזר לתחנה.'}</div>`;
    }
    h += `<div class="sec">החודש</div>`;
    h += `<div class="row"><span class="k">הכנסה החודש · סה״כ</span><span class="v">${n(fmt(o.monthIncome))} · ${n(fmt(o.totalIncome))}</span></div>`;
    h += `<div class="row"><span class="k">רוכבים עד היום</span><span class="v num">${o.totalRiders.toLocaleString('he-IL')}</span></div>`;
    h += `<div class="row"><span class="k">אמינות</span>${meter(o.rel * 100, 100, o.rel < 0.75 ? 'bad' : o.rel < 0.88 ? 'warn' : '')}<span class="v num">${pct(o.rel * 100)}</span></div>`;
    const acc = (P.access.get(o.id) || []).length;
    if (!acc) h += `<div class="note" style="color:#b91c1c;margin-top:6px">⚠️ ${coaster ? 'התחנה' : 'המתקן'} לא נוגע בשביל. אורחים לא יכולים להגיע.</div>`;
    h += '<div class="btns">';
    if (coaster) {
      h += `<button class="btn main" data-act="edit-coaster" data-arg="${o.id}">✏️ ${o.tested ? 'ערוך מסלול' : 'המשך לבנות'}</button>`;
      if (o.tested) h += `<button class="btn" data-act="ride-view" data-arg="${o.id}">👀 צפה בנסיעה</button>`;
    }
    if (!coaster || o.tested) h += `<button class="btn ${o.open ? '' : 'go'}" data-act="toggle-open" data-arg="${o.id}">${o.open ? 'סגור' : 'פתח לקהל'}</button>`;
    h += `<button class="btn danger" data-act="demolish" data-arg="${o.id}">🚜 הרוס (${fmt(P.demolishValue(o.id))})</button></div>`;
    return [o.name, h];
  }

  shopPanel(o) {
    const P = this.P, d = SHOPS[o.kind];
    let h = `<div style="margin-bottom:4px">${o.open ? '<span class="pill">פתוח</span>' : '<span class="pill gray">סגור</span>'}</div>`;
    if (d.kind !== 'toilet') h += this.priceRow(o, P.shopValue(o));
    h += `<div class="row"><span class="k">${d.kind === 'toilet' ? 'ביקורים' : 'מכירות'} עד היום</span><span class="v num">${o.sales.toLocaleString('he-IL')}</span></div>`;
    if (d.kind !== 'toilet') {
      h += `<div class="row"><span class="k">הכנסה החודש · סה״כ</span><span class="v">${n(fmt(o.monthIncome))} · ${n(fmt(o.totalIncome))}</span></div>`;
      h += `<div class="row"><span class="k">עלות מוצר</span><span class="v num">₪${d.unit.toFixed(2)}</span></div>`;
    }
    if (!(P.access.get(o.id) || []).length) h += `<div class="note" style="color:#b91c1c;margin-top:6px">⚠️ הדוכן לא נוגע בשביל.</div>`;
    h += `<div class="btns"><button class="btn" data-act="toggle-open" data-arg="${o.id}">${o.open ? 'סגור' : 'פתח'}</button><button class="btn danger" data-act="demolish" data-arg="${o.id}">🚜 הרוס (${fmt(P.demolishValue(o.id))})</button></div>`;
    return [o.name, h];
  }

  guestPanel(g) {
    const P = this.P;
    const need = (k, v, bad) => `<div class="row"><span class="k">${k}</span>${meter(v, 100, bad ? (v > 80 ? 'bad' : v > 60 ? 'warn' : '') : (v < 20 ? 'bad' : v < 40 ? 'warn' : ''))}<span class="v num">${Math.round(v)}</span></div>`;
    const where = g.state === 'ride' ? `על ${esc(P.objects.get(g.at)?.name || 'מתקן')}` : g.state === 'queue' ? `בתור ל${esc(P.objects.get(g.at)?.name || 'מתקן')}` : g.state === 'sit' ? 'יושב על ספסל' : g.state === 'shop' ? 'קונה משהו' : g.leaving ? 'בדרך הביתה' : 'מסתובב בפארק';
    let h = `<div class="note" style="margin-bottom:6px">${where} · ${Math.max(1, Math.round((g.timeIn / MONTH) * 30))} ימים בפארק · ${g.rides} מתקנים</div>`;
    h += need('😊 שמחה', g.happy) + need('💵 כסף', Math.min(100, g.money), false).replace(/>\d+</, `>${fmt(g.money)}<`);
    h += need('🍔 רעב', g.hunger, true) + need('🥤 צמא', g.thirst, true) + need('🚻 שירותים', g.toilet, true) + need('⚡ אנרגיה', g.energy) + need('🤢 בחילה', g.nausea, true);
    h += `<div class="row"><span class="k">אוהב מתקנים בעוצמה עד</span><span class="v num">${g.maxInt.toFixed(1)}</span></div>`;
    h += `<div class="sec">מה עובר לו בראש</div>`;
    if (!g.thoughts.length) h += '<div class="note">שום דבר מיוחד</div>';
    for (const th of g.thoughts) h += `<div class="thought ${GOOD_THOUGHTS.has(th.k) ? 'good' : BAD_THOUGHTS.has(th.k) ? 'bad' : ''}">💭 ${esc(thoughtText(P, th))}</div>`;
    return [g.name, h];
  }

  workerPanel(s) {
    const d = STAFF[s.role];
    const did = s.role === 'cleaner' ? 'ניקה' : s.role === 'mechanic' ? 'תיקן ובדק' : 'שימח';
    let h = `<div class="note">${d.desc}</div>`;
    h += `<div class="row"><span class="k">משכורת</span><span class="v">${n(fmt(d.wage))} לחודש</span></div>`;
    if (s.role !== 'entertainer') h += `<div class="row"><span class="k">${did}</span><span class="v num">${s.done}</span></div>`;
    h += `<div class="row"><span class="k">עכשיו</span><span class="v">${s.state === 'work' ? (s.task?.k === 'clean' ? 'מנקה' : s.task?.k === 'fix' ? 'מתקן' : 'בודק מתקן') : s.task ? 'בדרך לעבודה' : 'מסייר'}</span></div>`;
    h += `<div class="btns"><button class="btn danger" data-act="fire" data-arg="${s.id}">פטר</button></div>`;
    return [`${d.icon} ${s.name}`, h];
  }

  staffPanel() {
    const P = this.P;
    let h = '<div class="cards">';
    for (const k of STAFF_ORDER) {
      const d = STAFF[k], n = P.staff.filter((s) => s.role === k).length;
      h += `<button class="card" data-act="hire" data-arg="${k}"><span class="ic">${d.icon}</span><span class="nm">שכור ${d.he}</span><span class="pr">${n(fmt(d.wage))} לחודש</span><span class="ds">${d.desc}</span><span class="st">עובדים עכשיו: ${n}</span></button>`;
    }
    h += '</div>';
    h += `<div class="sec">הצוות (${P.staff.length}) · ${fmt(P.wages())} לחודש</div>`;
    for (const s of P.staff) h += `<div class="row" data-act="open-worker" data-arg="${s.id}" style="cursor:pointer"><span>${STAFF[s.role].icon}</span><span class="k">${esc(s.name)}</span><span class="v num">${s.role === 'entertainer' ? '' : s.done}</span></div>`;
    if (!P.staff.length) h += '<div class="note">עוד אין עובדים. בלי מנקים השבילים מתלכלכים, ובלי מכונאי מתקנים מתקלקלים ונשארים מקולקלים.</div>';
    return ['צוות', h];
  }

  financePanel() {
    const P = this.P, L = P.ledger;
    const inc = Object.values(L.in).reduce((a, b) => a + b, 0), out = Object.values(L.out).reduce((a, b) => a + b, 0);
    let h = `<div class="row"><span class="k">בקופה</span><span class="v num" style="color:${P.cash < 0 ? '#dc2626' : '#16a34a'}">${fmt(P.cash)}</span></div>`;
    h += `<div class="row"><span class="k">הלוואה (ריבית ${P.loan ? '1%' : '0%'} לחודש)</span><div class="stepper"><button data-act="repay">−</button><span class="val num">${fmt(P.loan)}</span><button data-act="borrow">+</button></div></div>`;
    h += `<div class="note">אפשר ללוות עד ${fmt(MAX_LOAN)}, באלף שקל כל פעם.</div>`;
    h += `<div class="sec">החודש עד עכשיו</div>`;
    const line = (k, v, s = 1) => (Math.round(v) ? `<div class="row"><span class="k">${k}</span><span class="v num" style="color:${s > 0 ? '#16a34a' : '#b91c1c'}">${s > 0 ? '+' : '−'}${fmt(v)}</span></div>` : '');
    h += line('כניסה לפארק', L.in.entry) + line('כרטיסים למתקנים', L.in.rides) + line('אוכל ושתייה', L.in.food) + line('מתנות', L.in.shops);
    h += line('בנייה', L.out.build, -1) + line('תחזוקת מתקנים', L.out.upkeep, -1) + line('משכורות', L.out.wages, -1) + line('ריבית', L.out.interest, -1) + line('פרסום', L.out.marketing, -1) + line('סחורה לדוכנים', L.out.stock, -1);
    h += `<div class="row"><span class="k"><b>רווח החודש</b></span><span class="v num" style="color:${inc - out >= 0 ? '#16a34a' : '#b91c1c'}">${fmt(inc - out)}</span></div>`;
    const hist = P.history.slice(-12);
    if (hist.length) {
      const max = Math.max(1, ...hist.map((m) => Math.abs(m.net)));
      h += `<div class="sec">רווח בחודשים האחרונים</div><div class="bars">${hist.map((m) => `<div title="${fmt(m.net)}" style="height:${(Math.abs(m.net) / max) * 100}%;background:${m.net >= 0 ? '#16a34a' : '#dc2626'}"></div>`).join('')}</div>`;
    }
    const camp = P.t < P.marketingUntil;
    h += `<div class="sec">פרסום</div><div class="note">קמפיין מביא יותר אורחים לחודש שלם.</div>`;
    h += `<div class="btns"><button class="btn ${camp ? '' : 'main'}" data-act="marketing" ${camp ? 'disabled' : ''}>📣 ${camp ? 'קמפיין פעיל' : 'קמפיין פרסום · ' + fmt(MARKETING.cost)}</button></div>`;
    return ['כספים', h];
  }

  parkPanel() {
    const P = this.P, gd = P.goalDate();
    let h = `<div class="row"><span class="k">דירוג הפארק</span>${meter(P.rating, 1000, P.rating < 400 ? 'bad' : P.rating < 600 ? 'warn' : '')}<span class="v num">${Math.round(P.rating)}</span></div>`;
    h += `<div class="row"><span class="k">אורחים · כמה הפארק מושך</span><span class="v num">${P.guests.length} / ${P.capacity()}</span></div>`;
    h += `<div class="row"><span class="k">שמחה ממוצעת</span>${meter(P.avgHappy || 0, 100)}<span class="v num">${Math.round(P.avgHappy || 0)}</span></div>`;
    h += `<div class="row"><span class="k">אריחים מלוכלכים</span><span class="v num">${P.dirtyTiles || 0}</span></div>`;
    h += `<div class="row"><span class="k">דמי כניסה<br><span style="font-size:12px">הפארק שווה בערך ${fmt(P.entryWorth())}</span></span><div class="stepper"><button data-act="fee" data-arg="-1">−</button><span class="val num">${fmt(P.entryFee)}</span><button data-act="fee" data-arg="1">+</button></div></div>`;
    h += `<div class="note">כשגובים כניסה, אורחים מוכנים לשלם פחות על כל מתקן.</div>`;
    h += `<div class="sec">היעד</div><div class="note">${GOAL.guests} אורחים ודירוג ${GOAL.rating} עד ${gd.monthName}, שנה ${gd.year}. ${P.won ? '<b style="color:#16a34a">הושג! 🏆</b>' : `עכשיו: ${P.guests.length} אורחים, דירוג ${Math.round(P.rating)}.`}</div>`;
    h += `<div class="sec">מה האורחים חושבים</div>`;
    const th = P.thoughtSummary || [];
    if (!th.length) h += '<div class="note">עוד אין מספיק אורחים.</div>';
    for (const t of th) h += `<div class="thought ${GOOD_THOUGHTS.has(t.k) ? 'good' : BAD_THOUGHTS.has(t.k) ? 'bad' : ''}"><span class="n num">${t.n}</span>${esc(thoughtText(P, t))}</div>`;
    return [P.name, h];
  }

  menuPanel() {
    const q = this.W.quality;
    let h = `<div class="btns"><button class="btn main" data-act="save">💾 שמור עכשיו</button><button class="btn danger" data-act="new-park">פארק חדש</button></div>`;
    h += `<div class="sec">גרפיקה</div><div class="btns">${[['auto', 'אוטומטי'], ['high', 'גבוהה'], ['medium', 'בינונית'], ['low', 'נמוכה']].map(([k, n]) => `<button class="btn ${q === k ? 'main' : ''}" data-act="quality" data-arg="${k}">${n}</button>`).join('')}</div>`;
    h += `<div class="sec">איך משחקים</div><div class="note">
      • אצבע אחת מזיזה את המפה, שתי אצבעות לזום ולסיבוב. במחשב: גרירה, גלגלת, וכפתור ימני לסיבוב.<br>
      • 🛤️ שבילים: גוררים מהכניסה. כל מתקן ודוכן צריך לגעת בשביל.<br>
      • 🎢 רכבת הרים: מציבים תחנה, מוסיפים חלקים עד שחוזרים אליה (או "השלם"), בודקים ופותחים לקהל. צריך מעלית שרשרת כדי לעלות גבוה.<br>
      • מחירים: אורח לא ישלם יותר ממה שהמתקן שווה בעיניו. מתקן ישן שווה פחות.<br>
      • 🧹 מנקים שומרים על השבילים, 🔧 מכונאים מתקנים תקלות, 🤡 בדרנים משמחים.<br>
      • הדירוג עולה כשהאורחים שמחים, הפארק נקי ויש מה לעשות. דירוג גבוה מביא עוד אורחים.<br>
      • הפארק נשמר לבד בדפדפן הזה.</div>`;
    return ['תפריט', h];
  }

  testPanel(id) {
    const o = this.P.objects.get(id);
    if (!o) return ['', ''];
    if (!o.tested) return ['הבדיקה נכשלה', `<div class="note" style="font-size:15px">⚠️ ${esc(o.fail?.reason || '')}</div><div class="btns"><button class="btn main" data-act="close">חזרה לבנייה</button></div>`];
    const s = o.stats;
    let h = `<div class="row"><span class="k">ריגוש</span>${meter(s.exc, 10)}<span class="v">${s.exc.toFixed(1)} · ${rateWord(s.exc)}</span></div>`;
    h += `<div class="row"><span class="k">עוצמה</span>${meter(s.int, 10, s.int > 8 ? 'bad' : s.int > 6 ? 'warn' : '')}<span class="v">${s.int.toFixed(1)} · ${rateWord(s.int, 'int')}</span></div>`;
    h += `<div class="row"><span class="k">סחרחורת</span>${meter(s.nau, 10, s.nau > 6 ? 'bad' : s.nau > 4 ? 'warn' : '')}<span class="v">${s.nau.toFixed(1)} · ${rateWord(s.nau, 'nau')}</span></div>`;
    h += `<div class="row"><span class="k">מהירות מרבית · גובה</span><span class="v">${n(Math.round(s.maxSpeed))} קמ״ש · ${n(Math.round(s.maxHeight))} מ׳</span></div>`;
    h += `<div class="row"><span class="k">כוחות G</span><span class="v">${n(s.maxG.toFixed(1) + ' / ' + s.minG.toFixed(1))} · צד ${n(s.maxLat.toFixed(1))}</span></div>`;
    h += `<div class="row"><span class="k">משך הנסיעה</span><span class="v">${n(Math.round(s.duration))} ש׳</span></div>`;
    if (s.int > 8.5) h += `<div class="note" style="color:#b91c1c">חזק מדי לרוב האורחים. אפשר להוסיף בלמים לפני פניות או להנמיך את הנפילה.</div>`;
    else if (s.exc < 4) h += `<div class="note">קצת משעמם. גבעות, נפילות גדולות ולופים מוסיפים ריגוש.</div>`;
    h += `<div class="btns"><button class="btn go" data-act="open-coaster" data-arg="${id}">✓ פתח לקהל</button><button class="btn" data-act="close">המשך לערוך</button></div>`;
    return [`${o.name}: תוצאות הבדיקה`, h];
  }

  // ------------------------------------------------------------ coaster builder
  coasterBar() {
    const t = this.tool, P = this.P, o = P.objects.get(t.id);
    if (!o) return this.setTool(null);
    this.W.showEnd(isComplete(o.pieces) ? null : o);
    const done = isComplete(o.pieces), end = endState(o.pieces);
    let h = `<div class="cb-info"><b>🎢 ${esc(o.name)}</b><span>${o.pieces.length} חלקים</span><span>גובה <span class="num">${Math.round(end.h * STEP * METERS)}</span> מ׳</span><span>עלות <span class="num">${fmt(o.spent)}</span></span>${done ? '<span class="pill">המסלול סגור!</span>' : ''}</div>`;
    h += '<div class="cb-pieces">';
    for (const k of PIECE_ORDER) {
      const d = PIECES[k], why = done ? 'המסלול סגור' : P.pieceReason(o.id, k);
      h += `<button class="pc ${why ? 'no' : ''}" data-act="piece" data-arg="${k}"><span class="ic">${d.icon}</span>${d.he}<span class="pr num">${fmt(d.cost + Math.max(0, end.h) * 4)}</span></button>`;
    }
    h += '</div><div class="cb-act">';
    h += `<button class="btn" data-act="unpiece">↩ בטל</button>`;
    h += `<button class="btn" data-act="finish-track" ${done ? 'disabled' : ''}>🔁 השלם</button>`;
    h += `<button class="btn ${done ? 'go' : ''}" data-act="test" ${done ? '' : 'disabled'}>▶ בדוק</button>`;
    h += `<button class="btn main" data-act="builder-done">✓ סיום</button>`;
    h += '</div>';
    $('coaster').innerHTML = h;
    $('coaster').classList.remove('hidden');
  }
  focusEnd() {
    const o = this.P.objects.get(this.tool?.id);
    if (!o) return;
    const s = endState(o.pieces);
    this.camGoal = { x: s.x + 0.5, z: s.z + 0.5 + 3, h: s.h * STEP };
  }
  finishBuilder() {
    const id = this.tool?.id;
    this.P.editCoaster(id, false);
    this.setTool(null);
    if (id) this.openPanel({ k: 'obj', id });
  }

  // ------------------------------------------------------------ buttons
  act(e) {
    const b = e.target.closest('[data-act]');
    if (!b || b.disabled) return;
    const a = b.dataset.act, arg = b.dataset.arg, P = this.P;
    const T = (r) => { if (r) this.toast(r, 'bad'); };
    switch (a) {
      case 'close': this.closePanel(true); break;
      case 'tool-off': this.setTool(null); break;
      case 'rotate': this.rotate(); break;
      case 'build': this.build(); break;
      case 'pick-ride': this.closePanel(true); this.setTool({ k: 'place', type: 'ride', kind: arg, rot: 0 }); this.markTool('rides'); break;
      case 'pick-shop': this.closePanel(true); this.setTool({ k: 'place', type: 'shop', kind: arg, rot: 0 }); this.markTool('shops'); break;
      case 'pick-scenery': {
        const big = (SCENERY[arg].w || 1) > 1;
        this.closePanel(true);
        this.setTool(big ? { k: 'place', type: 'scenery', kind: arg, rot: 0 } : { k: 'scenery', kind: arg });
        this.markTool('scenery');
        break;
      }
      case 'pick-addon': this.closePanel(true); this.setTool({ k: 'addon', kind: arg }); this.markTool('addons'); break;
      case 'new-coaster': this.closePanel(true); this.setTool({ k: 'station', rot: 0 }); this.markTool('coaster'); break;
      case 'open-obj': this.openPanel({ k: 'obj', id: +arg }); break;
      case 'open-worker': this.openPanel({ k: 'worker', id: +arg }); break;
      case 'price': { const o = P.objects.get(this.panel.id); P.setPrice(o.id, o.price + +arg); this.renderPanel(); break; }
      case 'toggle-open': { const o = P.objects.get(+arg); T(P.setOpen(+arg, !o.open)); this.renderPanel(); break; }
      case 'demolish': { const o = P.objects.get(+arg); this.confirm(`להרוס את ${esc(o.name)}?`, `יחזרו ${fmt(P.demolishValue(o.id))}`, 'demolish-yes', o.id); break; }
      case 'demolish-yes': T(P.demolish(+arg)); this.modal(null); if (this.panel && this.panel.id === +arg) this.closePanel(); break;
      case 'no': this.modal(null); break;
      case 'edit-coaster': this.closePanel(true); P.editCoaster(+arg, true); this.setTool({ k: 'coaster', id: +arg }); this.focusEnd(); break;
      case 'ride-view': { this.W.previewTrain(+arg, this.g.now); this.closePanel(true); const o = P.objects.get(+arg); const p = o.pieces[0]; this.camGoal = { x: p.x + 0.5, z: p.z + 4, h: 0 }; break; }
      case 'piece': {
        const r = P.addPiece(this.tool.id, arg);
        if (r) this.toast(r, 'bad'); else { this.focusEnd(); const o = P.objects.get(this.tool.id); if (isComplete(o.pieces)) this.toast('המסלול סגור! עכשיו בודקים', 'good'); }
        this.coasterBar(); break;
      }
      case 'unpiece': T(P.removePiece(this.tool.id)); this.focusEnd(); this.coasterBar(); break;
      case 'finish-track': {
        const r = P.finishTrack(this.tool.id);
        if (r) this.toast(r, 'bad'); else this.toast('המסלול הושלם עד התחנה', 'good');
        this.coasterBar(); break;
      }
      case 'test': {
        const r = P.testCoaster(this.tool.id);
        if (r.ok) this.W.previewTrain(this.tool.id, this.g.now);
        this.openPanel({ k: 'test', id: this.tool.id });
        this.coasterBar(); break;
      }
      case 'open-coaster': { P.editCoaster(+arg, false); T(P.setOpen(+arg, true)); this.setTool(null); this.toast('הרכבת פתוחה לקהל! 🎢', 'good'); this.openPanel({ k: 'obj', id: +arg }); break; }
      case 'builder-done': this.finishBuilder(); break;
      case 'hire': T(P.hire(arg)); this.renderPanel(); break;
      case 'fire': T(P.fire(+arg)); this.closePanel(); break;
      case 'borrow': T(P.takeLoan()); this.renderPanel(); break;
      case 'repay': T(P.repayLoan()); this.renderPanel(); break;
      case 'marketing': T(P.startMarketing()); this.renderPanel(); break;
      case 'fee': P.setEntryFee(P.entryFee + +arg); this.renderPanel(); break;
      case 'save': this.g.save(); this.toast('הפארק נשמר', 'good'); break;
      case 'new-park': this.confirm('להתחיל פארק חדש?', 'הפארק הנוכחי יימחק', 'new-yes'); break;
      case 'new-yes': this.modal(null); this.closePanel(); this.setTool(null); this.g.newPark(); break;
      case 'quality': this.W.setQuality(arg); this.g.saveSettings(); this.renderPanel(); break;
      case 'modal-ok': this.modal(null); break;
    }
    this.hud();
  }

  // ------------------------------------------------------------ messages
  toast(text, kind = '', onTap) {
    const t = document.createElement('div');
    t.className = 'toast ' + kind; t.textContent = text;
    if (onTap) t.onclick = () => { onTap(); t.remove(); };
    $('toasts').prepend(t);
    while ($('toasts').children.length > 3) $('toasts').lastChild.remove();
    setTimeout(() => t.remove(), kind === 'bad' ? 3200 : 4200);
  }
  modal(html) {
    if (!html) { $('modal').classList.add('hidden'); return; }
    $('modal-box').innerHTML = html; $('modal').classList.remove('hidden');
  }
  confirm(title, note, act, arg = '') {
    this.modal(`<h2>${title}</h2><div class="tag">${note}</div><button class="btn danger" data-act="${act}" data-arg="${arg}">כן</button><button class="btn" data-act="no">ביטול</button>`);
  }

  events() {
    const P = this.P;
    while (P.events.length) {
      const e = P.events.shift();
      if (e.kind === 'broken') this.toast('⚠️ ' + e.text, 'bad', () => this.openPanel({ k: 'obj', id: e.id }));
      else if (e.kind === 'fixed') this.toast('🔧 ' + e.text, 'good');
      else if (e.kind === 'won') this.modal(`<div class="big-ic">🏆</div><h2>ניצחת!</h2><div class="tag">${esc(e.text)}</div><button class="btn main" data-act="modal-ok">ממשיכים לבנות</button>`);
      else if (e.kind === 'missed') this.toast('⏰ ' + e.text, 'warn');
      else this.toast(e.text);
    }
  }

  // The next thing worth doing, for someone new.
  coach() {
    const P = this.P, objs = [...P.objects.values()];
    const has = (f) => objs.some(f);
    let paths = 0; for (let i = 0; i < P.path.length; i++) paths += P.path[i];
    const rides = objs.filter((o) => o.type === 'ride' || (o.type === 'coaster' && o.tested && o.open));
    let tip = null, tap = null;
    if (!rides.length && paths <= 8) { tip = '👋 ברוכים הבאים! התחילו ב<b>🛤️ שביל</b>: גוררים מהכניסה פנימה.'; tap = () => this.toolButton('path'); }
    else if (!rides.length) { tip = 'עכשיו מתקן ראשון: <b>🎠 מתקנים</b>, ומציבים אותו צמוד לשביל.'; tap = () => this.toolButton('rides'); }
    else if (!has((o) => o.type === 'shop' && SHOPS[o.kind].kind === 'food')) { tip = 'האורחים יהיו רעבים: <b>🍔 דוכנים</b> ליד השביל.'; tap = () => this.toolButton('shops'); }
    else if (!has((o) => o.type === 'shop' && o.kind === 'drinks')) { tip = 'וגם צמאים: דוכן <b>🥤 שתייה</b>.'; tap = () => this.toolButton('shops'); }
    else if (!has((o) => o.type === 'shop' && o.kind === 'toilets') && P.guests.length > 10) { tip = 'אורחים מחפשים <b>🚻 שירותים</b>.'; tap = () => this.toolButton('shops'); }
    else if (!P.staff.some((s) => s.role === 'cleaner') && P.guests.length > 15) { tip = 'השבילים מתלכלכים. שכרו <b>🧹 מנקה</b> ב<b>👷 צוות</b>.'; tap = () => this.toolButton('staff'); }
    else if (!P.staff.some((s) => s.role === 'mechanic') && rides.length >= 2) { tip = 'מתקנים מתקלקלים. שכרו <b>🔧 מכונאי</b>.'; tap = () => this.toolButton('staff'); }
    else if (!has((o) => o.type === 'coaster')) { tip = 'הגיע הזמן ל<b>🎢 רכבת הרים</b> משלכם!'; tap = () => this.toolButton('coaster'); }
    else if (!P.won) {
      const gd = P.goalDate();
      tip = `🎯 יעד: <b>${GOAL.guests}</b> אורחים ודירוג <b>${GOAL.rating}</b> עד ${gd.monthName} שנה ${gd.year} · עכשיו ${P.guests.length} / ${Math.round(P.rating)}`;
      tap = () => this.toolButton('park');
    }
    const el = $('hint');
    if (!tip || (this.tool && this.tool.k === 'coaster')) { el.classList.add('hidden'); return; }
    if (el.innerHTML !== tip) el.innerHTML = tip;
    el.classList.remove('hidden');
    this.hintTap = tap;
  }

  // ------------------------------------------------------------ every frame
  frame(dt) {
    this.events();
    this.slow += dt; this.panelT += dt; this.hintT += dt;
    if (this.slow > 0.25) { this.slow = 0; this.hud(); }
    if (this.panelT > 0.6 && this.panel && this.panel.k !== 'pick' && this.panel.k !== 'test' && this.panel.k !== 'menu') { this.panelT = 0; this.renderPanel(); }
    if (this.hintT > 1) { this.hintT = 0; this.coach(); }
    // ease the camera toward where the builder is working
    if (this.camGoal) {
      const W = this.W, k = Math.min(1, dt * 3);
      W.target.x += (this.camGoal.x - W.target.x) * k; W.target.z += (this.camGoal.z - W.target.z) * k;
      W.target.y += (this.camGoal.h * 0.5 - W.target.y) * k;
      if (Math.abs(this.camGoal.x - W.target.x) < 0.05 && Math.abs(this.camGoal.z - W.target.z) < 0.05) this.camGoal = null;
    }
    if (!this.tool || this.tool.k !== 'coaster') this.W.target.y += (0 - this.W.target.y) * Math.min(1, dt * 2);
  }
}
