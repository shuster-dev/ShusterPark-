// Roller coaster track: ready-made pieces that snap tile to tile like a toy
// train set. The shape is worked out once when the track changes, the train
// rides it once when the player tests it, and from then on the train just
// replays that run. Nothing here is computed every frame.
import { MAP, STEP, MAX_H, PIECES, COASTER } from './catalog.js';

export const DX = [0, 1, 0, -1];   // 0 north (-z), 1 east, 2 south, 3 west
export const DZ = [-1, 0, 1, 0];
export const G = 9.81 / 3;          // gravity in tiles/s² (a tile is ~3 m)
export const KMH = 10.8;            // tiles/s -> km/h
export const METERS = 3;
export const DS = 0.1;              // spacing of the smoothed curve, tiles
export const TRAJ_DT = 0.1;         // a run is stored every 0.1 s

export const F_CHAIN = 1, F_BRAKE = 2, F_STATION = 4, F_LOOP = 8, F_TURN = 16;

// Where a piece goes: the tiles it takes (with the height band it fills) and
// the state the next piece starts from.
export function nextState(type, s) {
  const p = PIECES[type];
  if (p.turn) {
    const nd = (s.d + p.turn) % 4;
    return { occ: [{ x: s.x, z: s.z, lo: s.h, hi: s.h + 1 }], next: { x: s.x + DX[nd], z: s.z + DZ[nd], h: s.h, d: nd } };
  }
  if (type === 'loop') {
    const x2 = s.x + DX[s.d], z2 = s.z + DZ[s.d];
    return { occ: [{ x: s.x, z: s.z, lo: s.h, hi: s.h + 7 }, { x: x2, z: z2, lo: s.h, hi: s.h + 7 }], next: { x: x2 + DX[s.d], z: z2 + DZ[s.d], h: s.h, d: s.d } };
  }
  const nh = s.h + p.dh;
  return { occ: [{ x: s.x, z: s.z, lo: Math.min(s.h, nh), hi: Math.max(s.h, nh) + 1 }], next: { x: s.x + DX[s.d], z: s.z + DZ[s.d], h: nh, d: s.d } };
}

export const sameState = (a, b) => a.x === b.x && a.z === b.z && a.h === b.h && a.d === b.d;
export const inMap = (x, z) => x >= 0 && z >= 0 && x < MAP && z < MAP;

// The four station pieces a new coaster starts with.
export function stationPieces(x, z, d) {
  const out = [];
  let s = { x, z, h: 0, d };
  for (let i = 0; i < COASTER.stationLen; i++) {
    out.push({ t: 'station', ...s });
    s = nextState('station', s).next;
  }
  return out;
}

export function endState(pieces) {
  const last = pieces[pieces.length - 1];
  return nextState(last.t, last).next;
}

export const isComplete = (pieces) => pieces.length > COASTER.stationLen && sameState(endState(pieces), pieces[0]);

// Raw points of one piece, from its entry edge up to (not including) its exit edge.
function piecePoints(p, idx, out) {
  const d = p.d, fx = DX[d], fz = DZ[d], rx = DX[(d + 1) % 4], rz = DZ[(d + 1) % 4];
  const ex = p.x + 0.5 - fx * 0.5, ez = p.z + 0.5 - fz * 0.5, ey = p.h * STEP;
  const def = PIECES[p.t];
  const push = (x, y, z, fl) => { out.x.push(x); out.y.push(y); out.z.push(z); out.f.push(fl); out.p.push(idx); };
  if (def.turn) {
    const side = def.turn === 1 ? 1 : -1, N = 10;
    const cx = ex + rx * side * 0.5, cz = ez + rz * side * 0.5;
    for (let i = 0; i < N; i++) {
      const th = (i / N) * Math.PI / 2, c = Math.cos(th) * 0.5, sn = Math.sin(th) * 0.5;
      push(cx - rx * side * c + fx * sn, ey, cz - rz * side * c + fz * sn, F_TURN);
    }
    return;
  }
  if (p.t === 'loop') {
    // a circle drifting forward: round at the bottom, tighter at the top, like the real ones
    const N = 64, R = 1.45;
    for (let i = 0; i < N; i++) {
      const t = i / N, fw = 2 * t + R * Math.sin(2 * Math.PI * t), y = R * (1 - Math.cos(2 * Math.PI * t));
      const lat = 0.5 * (t - 0.5) * Math.sin(Math.PI * t);
      push(ex + fx * fw + rx * lat, ey + y, ez + fz * fw + rz * lat, F_LOOP);
    }
    return;
  }
  const fl = (def.chain ? F_CHAIN : 0) | (def.brake ? F_BRAKE : 0) | (p.t === 'station' ? F_STATION : 0);
  const N = 8;
  for (let i = 0; i < N; i++) {
    const f = i / N;
    push(ex + fx * f, ey + def.dh * STEP * f, ez + fz * f, fl);
  }
}

// Gaussian smoothing of one array, leaving locked points as they are.
function smooth(arr, lock, sigma, closed) {
  const n = arr.length, r = Math.ceil(sigma * 3), w = [];
  for (let k = -r; k <= r; k++) w.push(Math.exp(-(k * k) / (2 * sigma * sigma)));
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    if (lock[i]) { out[i] = arr[i]; continue; }
    let s = 0, ws = 0;
    for (let k = -r; k <= r; k++) {
      let j = i + k;
      if (closed) j = ((j % n) + n) % n; else if (j < 0 || j >= n) continue;
      s += arr[j] * w[k + r]; ws += w[k + r];
    }
    out[i] = s / ws;
  }
  return out;
}

// The smooth curve the train rides: evenly spaced points, each with its
// flags and the piece it belongs to. Closed when the circuit is complete.
export function buildCurve(pieces, closed = isComplete(pieces)) {
  const raw = { x: [], y: [], z: [], f: [], p: [] };
  pieces.forEach((p, i) => piecePoints(p, i, raw));
  if (!closed) { // the open end: one last point at the exit edge
    const e = endState(pieces), fx = DX[e.d], fz = DZ[e.d];
    raw.x.push(e.x + 0.5 - fx * 0.5); raw.y.push(e.h * STEP); raw.z.push(e.z + 0.5 - fz * 0.5); raw.f.push(0); raw.p.push(pieces.length - 1);
  }
  // resample evenly by length
  const n0 = raw.x.length, cum = [0];
  const seg = closed ? n0 : n0 - 1;
  for (let i = 0; i < seg; i++) {
    const j = (i + 1) % n0;
    cum.push(cum[i] + Math.hypot(raw.x[j] - raw.x[i], raw.y[j] - raw.y[i], raw.z[j] - raw.z[i]));
  }
  const L = cum[seg], n = Math.max(2, Math.round(L / DS)), ds = L / (closed ? n : n - 1);
  const X = new Float32Array(n), Y = new Float32Array(n), Z = new Float32Array(n), FL = new Uint8Array(n), PI_ = new Int16Array(n);
  let k = 0;
  for (let i = 0; i < n; i++) {
    const s = i * ds;
    while (k < seg - 1 && cum[k + 1] < s) k++;
    const j = (k + 1) % n0, u = Math.min(1, Math.max(0, (s - cum[k]) / ((cum[k + 1] - cum[k]) || 1)));
    X[i] = raw.x[k] + (raw.x[j] - raw.x[k]) * u;
    Y[i] = raw.y[k] + (raw.y[j] - raw.y[k]) * u;
    Z[i] = raw.z[k] + (raw.z[j] - raw.z[k]) * u;
    FL[i] = raw.f[u < 0.5 ? k : j]; PI_[i] = raw.p[u < 0.5 ? k : j];
  }
  // smooth: heights a lot (slopes ease in and out), plan a little; loops are already smooth
  const lockY = new Uint8Array(n), lockXZ = new Uint8Array(n);
  for (let i = 0; i < n; i++) { lockY[i] = FL[i] & (F_LOOP | F_STATION) ? 1 : 0; lockXZ[i] = FL[i] & F_LOOP ? 1 : 0; }
  if (!closed) { lockY[0] = lockY[n - 1] = lockXZ[0] = lockXZ[n - 1] = 1; }
  let Ys = smooth(Y, lockY, 9, closed);
  Ys = smooth(Ys, lockY, 5, closed);
  const Xs = smooth(X, lockXZ, 1.6, closed), Zs = smooth(Z, lockXZ, 1.6, closed);
  // tangents, curvature
  const T = new Float32Array(n * 3), K = new Float32Array(n * 3);
  const at = (i) => (closed ? ((i % n) + n) % n : Math.min(n - 1, Math.max(0, i)));
  for (let i = 0; i < n; i++) {
    const a = at(i - 2), b = at(i + 2);
    let tx = Xs[b] - Xs[a], ty = Ys[b] - Ys[a], tz = Zs[b] - Zs[a];
    const l = Math.hypot(tx, ty, tz) || 1;
    T[i * 3] = tx / l; T[i * 3 + 1] = ty / l; T[i * 3 + 2] = tz / l;
  }
  for (let i = 0; i < n; i++) {
    // dT/ds over a few points is steadier than a raw second difference
    const a = at(i - 3), b = at(i + 3);
    const span = closed ? 6 * ds : Math.max(ds, (b - a) * ds);
    K[i * 3] = (T[b * 3] - T[a * 3]) / span; K[i * 3 + 1] = (T[b * 3 + 1] - T[a * 3 + 1]) / span; K[i * 3 + 2] = (T[b * 3 + 2] - T[a * 3 + 2]) / span;
  }
  return { n, ds, L: closed ? n * ds : (n - 1) * ds, closed, X: Xs, Y: Ys, Z: Zs, T, K, FL, P: PI_, pieces, bank: null };
}

// Point and frame on the curve at length s (wraps when closed).
export function sampleAt(c, s, out = {}) {
  let u = s / c.ds;
  if (c.closed) u = ((u % c.n) + c.n) % c.n; else u = Math.min(c.n - 1.001, Math.max(0, u));
  const i = Math.floor(u), j = c.closed ? (i + 1) % c.n : Math.min(c.n - 1, i + 1), f = u - i;
  out.x = c.X[i] + (c.X[j] - c.X[i]) * f;
  out.y = c.Y[i] + (c.Y[j] - c.Y[i]) * f;
  out.z = c.Z[i] + (c.Z[j] - c.Z[i]) * f;
  out.i = f < 0.5 ? i : j;
  return out;
}

const LAT_SCALE = 0.2, VERT_SCALE = 0.33; // the pieces are toy-sized; the riders feel a full-size ride

// Up vector of the riders at sample i, given the bank angle there.
export function upAt(c, i, bank, out = [0, 1, 0]) {
  const tx = c.T[i * 3], ty = c.T[i * 3 + 1], tz = c.T[i * 3 + 2];
  if (c.FL[i] & F_LOOP) {
    // inside a loop the riders' heads point at the loop's middle: side x tangent
    const p = c.P[i], d = c.pieces ? c.pieces[p].d : 0;
    const rx = DX[(d + 1) % 4], rz = DZ[(d + 1) % 4];
    // r x T
    let ux = 0 * tz - rz * ty, uy = rz * tx - rx * tz, uz = rx * ty - 0 * tx;
    const l = Math.hypot(ux, uy, uz) || 1;
    out[0] = ux / l; out[1] = uy / l; out[2] = uz / l;
    return out;
  }
  // world up made square to the track, then rolled by the bank
  let ux = -ty * tx, uy = 1 - ty * ty, uz = -ty * tz;
  const l = Math.hypot(ux, uy, uz) || 1; ux /= l; uy /= l; uz /= l;
  if (bank) {
    // side = T x U
    const sx = ty * uz - tz * uy, sy = tz * ux - tx * uz, sz = tx * uy - ty * ux;
    const cb = Math.cos(bank), sb = Math.sin(bank);
    ux = ux * cb + sx * sb; uy = uy * cb + sy * sb; uz = uz * cb + sz * sb;
  }
  out[0] = ux; out[1] = uy; out[2] = uz;
  return out;
}

// The test run: the train leaves the station, rides the whole circuit and
// stops back in the station. Returns the run (to replay) and the numbers
// guests judge the ride by — or why it failed.
export function testRun(pieces) {
  if (!isComplete(pieces)) return { ok: false, reason: 'המסלול לא סגור. צריך לחזור לתחנה' };
  const c = buildCurve(pieces, true);
  const n = c.n, ds = c.ds, L = c.L;
  const stationLen = COASTER.stationLen, trainLen = COASTER.cars * COASTER.carLen;
  const startS = stationLen - trainLen / 2 - 0.15, stopS = L + startS;
  const traj = [];
  let s = startS, v = 0, t = 0, acc = 0;
  const dt = 1 / 120, liftV = 1.7, brakeV = 2.4, stationV = 1.3;
  let maxV = 0, sumV = 0, steps = 0, maxY = 0, airtime = 0, maxG = 1, minG = 1, maxLat = 0;
  let drops = 0, maxDrop = 0, peak = 0, falling = false, lastY = 0;
  const vAt = new Float32Array(n); // speed seen at each sample (for banking)
  let fail = null;
  traj.push(s);
  while (t < 400) {
    const u = (((s / ds) % n) + n) % n, i = Math.floor(u);
    const fl = c.FL[i], ty = c.T[i * 3 + 1];
    const inStation = s >= L || (s < stationLen + 0.2);
    let a = -G * ty - 0.012 * G - 0.0045 * v * v;
    if (s >= L) { // home: brake to a stop at the platform
      const left = stopS - s;
      const vmax = left > 0 ? Math.sqrt(2 * 2.2 * left) : 0;
      a = 0; v = Math.min(v, vmax);
      if (left <= 0.01 || v < 0.02) break;
    } else if (inStation) {
      a = v < stationV ? 2.2 : -1.5;
    } else if (fl & F_CHAIN) {
      if (v < liftV) { v = liftV; a = Math.max(0, a); }
    } else if (fl & F_BRAKE) {
      if (v > brakeV) a = -7;
    }
    v += a * dt;
    if (!inStation && !(fl & F_CHAIN) && v <= 0.03) {
      fail = { reason: 'הרכבת נעצרה ולא הצליחה לעלות. צריך מעלית שרשרת או גבעה נמוכה יותר', piece: c.P[i] };
      break;
    }
    s += v * dt; t += dt; acc += dt;
    if (acc >= TRAJ_DT - 1e-9) { traj.push(s); acc -= TRAJ_DT; }
    vAt[i] = Math.max(vAt[i], v);
    if (!inStation) {
      maxV = Math.max(maxV, v); sumV += v; steps++;
      const y = c.Y[i];
      maxY = Math.max(maxY, y);
      if (y < lastY - 1e-4) { if (!falling) { falling = true; peak = lastY; } }
      else if (y > lastY + 1e-4 && falling) {
        falling = false;
        const drop = peak - lastY;
        if (drop > 1.0) { drops++; maxDrop = Math.max(maxDrop, drop); }
      }
      lastY = y;
    }
  }
  if (!fail && t >= 400) fail = { reason: 'הרכבת לא חזרה לתחנה', piece: 0 };
  if (fail) return { ok: false, ...fail };
  traj.push(stopS);

  // banking from the speed actually seen, then the forces
  const bank = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    if (c.FL[i] & (F_LOOP | F_STATION)) continue;
    const tx = c.T[i * 3], ty = c.T[i * 3 + 1], tz = c.T[i * 3 + 2];
    // horizontal part of curvature, as a signed turn to the right
    const kx = c.K[i * 3], kz = c.K[i * 3 + 2];
    const sx = -tz, sz = tx; // right of travel in the ground plane
    const sl = Math.hypot(sx, sz) || 1;
    const kRight = (kx * sx + kz * sz) / sl;
    bank[i] = 0.75 * Math.atan((vAt[i] * vAt[i] * kRight * LAT_SCALE) / G);
    void ty;
  }
  const bankS = smooth(bank, new Uint8Array(n), 4, true);
  c.bank = bankS;
  const U = [0, 1, 0];
  for (let k = 0; k < traj.length; k++) {
    const sk = traj[k];
    if (sk < stationLen + 0.3 || sk >= L) continue;
    const i = Math.floor((((sk / ds) % n) + n) % n);
    if (c.FL[i] & (F_STATION | F_BRAKE)) continue;
    const vv = k ? (traj[k] - traj[k - 1]) / TRAJ_DT : 0;
    const tx = c.T[i * 3], ty = c.T[i * 3 + 1], tz = c.T[i * 3 + 2];
    let kx = c.K[i * 3], ky = c.K[i * 3 + 1], kz = c.K[i * 3 + 2];
    // split curvature into the turn (ground plane) and the climb/dip parts
    const hx = kx - (kx * tx + kz * tz) * tx, hz = kz - (kx * tx + kz * tz) * tz;
    const horiz = c.FL[i] & F_LOOP ? 0 : 1;
    const ax = (hx * LAT_SCALE * horiz + (kx - hx * horiz) * VERT_SCALE) * vv * vv;
    const ay = ky * VERT_SCALE * vv * vv + G;
    const az = (hz * LAT_SCALE * horiz + (kz - hz * horiz) * VERT_SCALE) * vv * vv;
    upAt(c, i, bankS[i], U);
    const vert = (ax * U[0] + ay * U[1] + az * U[2]) / G;
    const sx = ty * U[2] - tz * U[1], sy = tz * U[0] - tx * U[2], sz = tx * U[1] - ty * U[0];
    const lat = Math.abs(ax * sx + ay * sy + az * sz) / G;
    maxG = Math.max(maxG, vert); minG = Math.min(minG, vert); maxLat = Math.max(maxLat, lat);
    if (vert < 0.25) airtime += TRAJ_DT;
  }
  let inversions = 0, turns = 0, chain = 0;
  for (const p of pieces) { if (p.t === 'loop') inversions++; if (PIECES[p.t].turn) turns++; if (p.t === 'lift') chain++; }
  const duration = (traj.length - 1) * TRAJ_DT;
  const st = {
    ok: true, traj: Float32Array.from(traj), duration,
    maxSpeed: maxV * KMH, avgSpeed: (steps ? sumV / steps : 0) * KMH,
    maxHeight: maxY * METERS, maxDrop: maxDrop * METERS, drops, airtime,
    maxG, minG, maxLat, inversions, turns, length: L * METERS,
  };
  Object.assign(st, rate(st));
  return st;
}

// How guests judge a coaster, out of 10 like the flat rides.
export function rate(st) {
  let exc = 1.6
    + Math.min(3.2, st.maxSpeed / 22)
    + Math.min(1.2, st.drops * 0.2)
    + Math.min(1.4, st.maxDrop / 22)
    + Math.min(1.4, st.airtime * 0.35)
    + Math.min(1.8, st.inversions * 0.6)
    + Math.min(1.0, st.duration / 40)
    + Math.min(0.6, st.turns * 0.03);
  let int = Math.min(2.4, st.maxSpeed / 38)
    + Math.max(0, st.maxG - 1) * 1.15
    + Math.max(0, 0.4 - st.minG) * 1.6
    + st.maxLat * 1.4
    + st.inversions * 0.4;
  let nau = 0.3 + st.maxLat * 1.7 + st.inversions * 0.8 + Math.max(0, st.maxG - 2.5) * 0.9 + Math.max(0, -st.minG) * 1.2;
  if (int > 10) exc *= 0.55; // too much: people come off shaking, not smiling
  const r = (x) => Math.round(Math.max(0, x) * 100) / 100;
  return { exc: r(exc), int: r(int), nau: r(nau) };
}

// Finish the circuit for the player: the shortest run of simple pieces from
// the open end back into the station, around anything in the way.
export function autoComplete(pieces, isFree, maxNodes = 160000) {
  const start = endState(pieces), goal = pieces[0];
  const moves = ['straight', 'left', 'right', 'down', 'steepDown', 'up'];
  const extra = { straight: 0, left: 0.15, right: 0.15, down: 0.05, steepDown: 0.1, up: 0.6 };
  const key = (s) => ((s.x * MAP + s.z) * 64 + s.h) * 4 + s.d;
  const hfn = (s) => Math.max(Math.abs(s.x - goal.x) + Math.abs(s.z - goal.z), Math.ceil(s.h / 2)) + (s.d !== goal.d ? 0.15 : 0);
  // binary heap on f
  const heap = [], from = new Map(), gBest = new Map();
  const push = (n) => { heap.push(n); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p].f <= heap[i].f) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l].f < heap[m].f) m = l; if (r < heap.length && heap[r].f < heap[m].f) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  const k0 = key(start);
  gBest.set(k0, 0); push({ s: start, g: 0, f: hfn(start), k: k0 });
  let found = null, nodes = 0;
  while (heap.length && nodes < maxNodes) {
    const cur = pop(); nodes++;
    if (cur.g > (gBest.get(cur.k) ?? Infinity)) continue;
    if (sameState(cur.s, goal)) { found = cur.k; break; }
    for (const m of moves) {
      const { occ, next } = nextState(m, cur.s);
      if (next.h < 0 || next.h > MAX_H) continue;
      if (!occ.every((o) => inMap(o.x, o.z))) continue;
      if (!inMap(next.x, next.z)) continue;
      if (!isFree(occ)) continue;
      const g = cur.g + 1 + extra[m], k = key(next);
      if (g >= (gBest.get(k) ?? Infinity)) continue;
      gBest.set(k, g); from.set(k, { prev: cur.k, m, s: cur.s });
      push({ s: next, g, f: g + hfn(next), k });
    }
  }
  if (found === null) return null;
  const seq = [];
  for (let k = found; k !== k0;) { const st = from.get(k); seq.push({ t: st.m, ...st.s }); k = st.prev; }
  seq.reverse();
  // the search doesn't see its own new pieces; check the whole run against itself
  const used = [];
  for (const p of seq) {
    const { occ } = nextState(p.t, p);
    for (const o of occ) for (const u of used) if (u.x === o.x && u.z === o.z && o.lo < u.hi + 3 && u.lo < o.hi + 3) return null;
    used.push(...occ);
  }
  return seq;
}

export const piecesCost = (list) => list.reduce((a, p) => a + PIECES[p.t].cost + Math.max(0, p.h) * 4, 0);

// Can this piece go on the end of the track? Returns the reason it can't.
export function checkPiece(pieces, type, isFree) {
  if (isComplete(pieces)) return 'המסלול כבר סגור';
  if (pieces.length >= COASTER.maxPieces) return 'המסלול ארוך מדי';
  const s = endState(pieces), last = pieces[pieces.length - 1];
  if (type === 'loop' && PIECES[last.t].dh !== 0) return 'לופ צריך להתחיל ממסילה ישרה ושטוחה';
  if (type === 'loop' && s.h + 8 > MAX_H) return 'גבוה מדי ללופ';
  const { occ, next } = nextState(type, s);
  if (next.h < 0) return 'אי אפשר לרדת מתחת לקרקע';
  if (next.h > MAX_H) return 'גבוה מדי';
  if (!occ.every((o) => inMap(o.x, o.z))) return 'מחוץ לפארק';
  if (!isFree(occ)) return 'משהו חוסם את הדרך';
  return null;
}
