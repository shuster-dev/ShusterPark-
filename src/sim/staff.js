// Staff walk the same paths as guests. Cleaners head for the nearest mess,
// mechanics for the nearest broken ride (or one that's due a check), and
// entertainers just wander and cheer up whoever is near.
import { MONTH, GATE } from './catalog.js';
import { idx, tx, tz, inMap, NB, clamp, pathNeighbors, placeWalker, N } from './grid.js';

const GATE_I = idx(GATE.x, GATE.z);
const SPEED = 1.3;
const nb = [];
const q = new Int32Array(N), seen = new Int32Array(N), via = new Int32Array(N);
let stamp = 0;

export function stepStaff(P, s, dt) {
  if (s.off === undefined) s.off = 0;
  if (s.role === 'entertainer') cheer(P, s, dt);
  if (s.state === 'work') {
    s.timer -= dt;
    if (s.timer <= 0) finish(P, s);
    return;
  }
  if (s.nxt < 0) choose(P, s);
  if (s.nxt < 0) { placeWalker(s); return; }
  s.p += SPEED * dt;
  if (s.p >= 1) {
    s.from = s.cur; s.cur = s.nxt; s.nxt = -1; s.p = 0;
    if (arrive(P, s)) { placeWalker(s); return; }
    choose(P, s);
  }
  placeWalker(s);
}

function arrive(P, s) {
  const i = s.cur;
  if (s.role === 'cleaner' && (P.dirt[i] || P.vomit[i])) {
    s.state = 'work'; s.timer = 1.4 + P.vomit[i] * 0.4; s.task = { k: 'clean', tile: i };
    return true;
  }
  if (s.role === 'mechanic' && s.task && s.task.id) {
    const f = P.fields.get(s.task.id);
    if (f && f[i] === 0) {
      const o = P.objects.get(s.task.id);
      if (!o) { s.task = null; return false; }
      s.state = 'work'; s.timer = s.task.k === 'fix' ? 6 : 3;
      return true;
    }
  }
  return false;
}

function finish(P, s) {
  s.state = 'walk'; s.nxt = -1;
  const t = s.task; s.task = null;
  if (!t) return;
  if (t.k === 'clean') { P.dirt[t.tile] = 0; P.vomit[t.tile] = 0; P.rev.dirt++; s.done++; return; }
  const o = P.objects.get(t.id);
  if (!o) return;
  const best = 0.96 - Math.min(0.25, o.age * 0.006);
  if (t.k === 'fix') { o.broken = false; o.rel = best; P.emit('fixed', `${o.name} תוקן`, { id: o.id }); }
  else o.rel = Math.max(o.rel, best);
  o.lastInspect = P.t; o.mech = 0; s.done++;
  P.rev.objects++;
}

function choose(P, s) {
  if (!P.path[s.cur]) {
    const n = pathNeighbors(P, s.cur, nb);
    if (n.length) { s.nxt = n[0]; return; }
    s.cur = GATE_I; s.from = -1; if (!P.path[GATE_I]) return;
  }
  if (s.role === 'cleaner') { const step = towardMess(P, s.cur); if (step >= 0) { s.nxt = step; return; } }
  if (s.role === 'mechanic') {
    if (!s.task || !P.objects.get(s.task.id)) pickJob(P, s);
    if (s.task) {
      const f = P.fields.get(s.task.id);
      if (f && f[s.cur] > 0) {
        const ok = pathNeighbors(P, s.cur, nb).filter((k) => f[k] === f[s.cur] - 1);
        if (ok.length) { s.nxt = ok[Math.floor(P.rand() * ok.length)]; return; }
      } else if (f && f[s.cur] === 0) { if (arrive(P, s)) return; }
      else { const o = P.objects.get(s.task.id); if (o) o.mech = 0; s.task = null; }
    }
  }
  wander(P, s);
}

function wander(P, s) {
  const n = pathNeighbors(P, s.cur, nb);
  if (!n.length) return;
  const fwd = n.filter((k) => k !== s.from), opts = fwd.length ? fwd : n;
  s.nxt = opts[Math.floor(P.rand() * opts.length)];
}

// Breadth-first from where the cleaner stands to the closest dirty tile;
// returns the first step on the way there.
function towardMess(P, from) {
  stamp++;
  let h = 0, t = 0;
  q[t++] = from; seen[from] = stamp; via[from] = -1;
  while (h < t) {
    const c = q[h++];
    if (c !== from && (P.dirt[c] || P.vomit[c])) {
      let k = c;
      while (via[k] !== from) k = via[k];
      return k;
    }
    if (h > 500) break; // only look nearby
    const x = tx(c), z = tz(c);
    for (const [dx, dz] of NB) {
      const nx = x + dx, nz = z + dz;
      if (!inMap(nx, nz)) continue;
      const n = idx(nx, nz);
      if (P.path[n] && seen[n] !== stamp) { seen[n] = stamp; via[n] = c; q[t++] = n; }
    }
  }
  return -1;
}

function pickJob(P, s) {
  let best = null, bd = 1e9, kind = null;
  for (const o of P.rides()) {
    if (o.mech && P.staff.some((m) => m.id === o.mech && m.task && m.task.id === o.id)) continue;
    const f = P.fields.get(o.id);
    if (!f || f[s.cur] < 0) continue;
    const due = !o.broken && o.runs > 0 && P.t - o.lastInspect > MONTH * 1.2;
    if (!o.broken && !due) continue;
    const d = f[s.cur] - (o.broken ? 1000 : 0); // broken first
    if (d < bd) { bd = d; best = o; kind = o.broken ? 'fix' : 'inspect'; }
  }
  if (best) { s.task = { k: kind, id: best.id }; best.mech = s.id; }
}

function cheer(P, s, dt) {
  s.cheer = (s.cheer || 0) + dt;
  if (s.cheer < 1) return;
  s.cheer -= 1;
  for (const g of P.guests) {
    if (g.state !== 'walk' && g.state !== 'queue' && g.state !== 'sit') continue;
    const d = Math.abs(g.x - s.x) + Math.abs(g.z - s.z);
    if (d > 3) continue;
    g.happy = clamp(g.happy + 1.2);
    if (g.state === 'queue') g.qt = Math.max(0, g.qt - 2.5);
  }
}
