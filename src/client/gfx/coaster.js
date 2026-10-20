// A coaster on screen: the track (rails, spine, ties, supports, station)
// built once from the smoothed curve, and a train that replays the test run.
import * as THREE from 'three';
import { upAt, DX, DZ, F_CHAIN, F_LOOP, F_STATION, TRAJ_DT } from '../../sim/track.js';
import { COASTER } from '../../sim/catalog.js';
import { MAT, mesh, box, merge, part, ball, C } from './models.js';

export const TRACK_Y = 0.22; // track sits on short legs even at ground level
const RAIL = 0.14;

function frameAt(c, i, out) {
  const bank = c.bank ? c.bank[i] : 0;
  const U = upAt(c, i, bank, out.U);
  const tx = c.T[i * 3], ty = c.T[i * 3 + 1], tz = c.T[i * 3 + 2];
  // S = U x T
  out.S[0] = U[1] * tz - U[2] * ty; out.S[1] = U[2] * tx - U[0] * tz; out.S[2] = U[0] * ty - U[1] * tx;
  const l = Math.hypot(out.S[0], out.S[1], out.S[2]) || 1;
  out.S[0] /= l; out.S[1] /= l; out.S[2] /= l;
  out.T[0] = tx; out.T[1] = ty; out.T[2] = tz;
  out.P[0] = c.X[i]; out.P[1] = c.Y[i] + TRACK_Y; out.P[2] = c.Z[i];
  return out;
}
const newFrame = () => ({ P: [0, 0, 0], T: [0, 0, 1], U: [0, 1, 0], S: [1, 0, 0] });

// One tube following the track, offset in the track's own frame.
function tube(c, idxs, closed, offS, offU, r, seg, color, pos, nor, col) {
  const F = newFrame(), cc = new THREE.Color(color), rings = [];
  for (const i of idxs) {
    frameAt(c, i, F);
    const cx = F.P[0] + F.S[0] * offS + F.U[0] * offU, cy = F.P[1] + F.S[1] * offS + F.U[1] * offU, cz = F.P[2] + F.S[2] * offS + F.U[2] * offU;
    const ring = [];
    for (let k = 0; k < seg; k++) {
      const a = (k / seg) * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      const nx = F.S[0] * ca + F.U[0] * sa, ny = F.S[1] * ca + F.U[1] * sa, nz = F.S[2] * ca + F.U[2] * sa;
      ring.push([cx + nx * r, cy + ny * r, cz + nz * r, nx, ny, nz]);
    }
    rings.push(ring);
  }
  const n = rings.length, last = closed ? n : n - 1;
  for (let j = 0; j < last; j++) {
    const A = rings[j], B = rings[(j + 1) % n];
    for (let k = 0; k < seg; k++) {
      const k2 = (k + 1) % seg;
      for (const v of [A[k], B[k], B[k2], A[k], B[k2], A[k2]]) {
        pos.push(v[0], v[1], v[2]); nor.push(v[3], v[4], v[5]); col.push(cc.r, cc.g, cc.b);
      }
    }
  }
}

function basisBox(w, h, d, color, F, du = 0) {
  const g = part(new THREE.BoxGeometry(w, h, d), color);
  const m = new THREE.Matrix4().makeBasis(new THREE.Vector3(...F.S), new THREE.Vector3(...F.U), new THREE.Vector3(...F.T));
  m.setPosition(F.P[0] + F.U[0] * du, F.P[1] + F.U[1] * du, F.P[2] + F.U[2] * du);
  g.applyMatrix4(m);
  g.computeVertexNormals();
  return g;
}

export function trackMesh(o, isPath) {
  const c = o.curve, group = new THREE.Group();
  const step = 2, idxs = [];
  for (let i = 0; i < c.n; i += step) idxs.push(i);
  if (!c.closed && idxs[idxs.length - 1] !== c.n - 1) idxs.push(c.n - 1);
  const pos = [], nor = [], col = [];
  const railCol = o.color, spineCol = 0xd9dde2;
  tube(c, idxs, c.closed, RAIL, 0.035, 0.026, 6, railCol, pos, nor, col);
  tube(c, idxs, c.closed, -RAIL, 0.035, 0.026, 6, railCol, pos, nor, col);
  tube(c, idxs, c.closed, 0, -0.07, 0.045, 6, spineCol, pos, nor, col);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  group.add(mesh(g));

  // ties, chain, supports
  const parts = [], F = newFrame();
  let lastSup = -9, sAcc = 0;
  for (let i = 0; i < c.n; i += 3) {
    frameAt(c, i, F);
    const fl = c.FL[i];
    parts.push(basisBox(RAIL * 2 + 0.06, 0.03, 0.05, fl & F_CHAIN ? C.dark : 0x9aa4ae, F, 0.0));
    if (fl & F_CHAIN) parts.push(basisBox(0.05, 0.02, c.ds * 3.05, 0x2b2b2b, F, 0.05));
    sAcc = i * c.ds;
    // a support under the track every so often, where it's above the ground the right way up
    if (sAcc - lastSup >= 1.15 && F.U[1] > 0.55 && !(fl & F_STATION)) {
      const x = F.P[0], z = F.P[2], top = F.P[1] - 0.1;
      if (top > 0.2 && !isPath(Math.floor(x), Math.floor(z))) {
        parts.push(part(new THREE.CylinderGeometry(0.035, 0.045, top, 6), 0xd9dde2, { x, y: top / 2, z }));
        parts.push(box(0.16, 0.05, 0.16, C.stone, { x, y: 0.025, z }));
        lastSup = sAcc;
      }
    }
  }
  // the station: platforms and a roof over the first pieces
  for (let k = 0; k < COASTER.stationLen; k++) {
    const p = o.pieces[k], fx = DX[p.d], fz = DZ[p.d], sx = DX[(p.d + 1) % 4], sz = DZ[(p.d + 1) % 4];
    const cx = p.x + 0.5, cz = p.z + 0.5, along = p.d % 2 === 0;
    for (const side of [-1, 1]) {
      parts.push(box(along ? 0.3 : 1, 0.16, along ? 1 : 0.3, C.stone, { x: cx + sx * side * 0.36, y: 0.08, z: cz + sz * side * 0.36 }));
      parts.push(box(0.05, 1.1, 0.05, C.white, { x: cx + sx * side * 0.45 - fx * 0.4, y: 0.6, z: cz + sz * side * 0.45 - fz * 0.4 }));
    }
    parts.push(box(along ? 1.05 : 1.02, 0.06, along ? 1.02 : 1.05, o.color, { x: cx, y: 1.17, z: cz }));
  }
  group.add(mesh(merge(parts)));
  return group;
}

// The train: cars that follow the curve, with heads for riders.
export class Train {
  constructor(o) {
    this.group = new THREE.Group();
    this.cars = [];
    this.heads = [];
    const body = merge([
      box(0.34, 0.1, 0.5, o.color, { y: 0.08 }),
      box(0.3, 0.14, 0.04, 0x1d3557, { y: 0.18, z: -0.06 }),
      box(0.3, 0.14, 0.04, 0x1d3557, { y: 0.18, z: 0.18 }),
      box(0.04, 0.08, 0.5, o.color, { x: 0.17, y: 0.16 }), box(0.04, 0.08, 0.5, o.color, { x: -0.17, y: 0.16 }),
      box(0.36, 0.03, 0.06, 0x333333, { y: 0.02, z: 0.2 }), box(0.36, 0.03, 0.06, 0x333333, { y: 0.02, z: -0.2 }),
    ]);
    const nose = merge([part(new THREE.ConeGeometry(0.18, 0.28, 4), o.color, { y: 0.1, z: 0.36, rx: Math.PI / 2, ry: Math.PI / 4, sy: 1 }), box(0.3, 0.06, 0.04, 0xffd166, { y: 0.16, z: 0.28 })]);
    const head = ball(0.055, 0xf1c27d, {}, 1);
    const headMat = MAT;
    for (let k = 0; k < COASTER.cars; k++) {
      const car = new THREE.Group();
      car.matrixAutoUpdate = false;
      car.add(mesh(body));
      if (k === 0) car.add(mesh(nose));
      for (const z of [0.05, -0.17]) for (const x of [-0.08, 0.08]) {
        const h = new THREE.Mesh(head, headMat);
        h.position.set(x, 0.26, z);
        car.add(h); this.heads.push(h);
      }
      this.group.add(car); this.cars.push(car);
    }
    this.F = newFrame();
    this.m = new THREE.Matrix4();
    this.v = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
    this.preview = null;
  }
  // Where the middle of the train is along the curve right now.
  trainS(o, now) {
    const run = o.run;
    const rest = COASTER.stationLen - (COASTER.cars * COASTER.carLen) / 2 - 0.15;
    if (!run) return rest;
    let e = -1;
    if (o.phase === 'run') e = run.duration - o.timer;
    else if (this.preview !== null) { e = now - this.preview; if (e > run.duration) { this.preview = null; e = -1; } }
    if (e < 0) return run.traj[0];
    const u = e / TRAJ_DT, i = Math.min(run.traj.length - 2, Math.floor(u)), f = Math.min(1, u - i);
    return run.traj[i] + (run.traj[i + 1] - run.traj[i]) * f;
  }
  update(o, now) {
    const c = o.curve;
    if (!c || !c.n) return;
    const s0 = this.trainS(o, now), half = ((COASTER.cars - 1) * COASTER.carLen) / 2;
    const riders = o.phase === 'run' ? o.riders.length : o.phase === 'load' ? Math.min(o.queue.length, 12) : 0;
    this.cars.forEach((car, k) => {
      let s = s0 + half - k * COASTER.carLen;
      let u = s / c.ds;
      if (c.closed) u = ((u % c.n) + c.n) % c.n; else u = Math.max(0, Math.min(c.n - 1, u));
      const i = Math.min(c.n - 1, Math.round(u) % c.n);
      frameAt(c, i, this.F);
      const [S, U, T] = this.v;
      S.set(...this.F.S); U.set(...this.F.U); T.set(...this.F.T);
      this.m.makeBasis(S, U, T);
      this.m.setPosition(this.F.P[0] + this.F.U[0] * 0.06, this.F.P[1] + this.F.U[1] * 0.06, this.F.P[2] + this.F.U[2] * 0.06);
      car.matrix.copy(this.m);
      car.matrixWorldNeedsUpdate = true;
    });
    this.heads.forEach((h, k) => { h.visible = k < riders; });
  }
}

// Where the open end of the track is, for the arrow the builder shows.
export function endMarker() {
  const g = new THREE.Group();
  const m = new THREE.MeshBasicMaterial({ color: 0xffd166 });
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.45, 12), m);
  arrow.rotation.x = Math.PI / 2; arrow.position.y = 0.3;
  g.add(arrow);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.04, 6, 24), m);
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.3;
  g.add(ring);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1, 4), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }));
  g.add(pole);
  g.userData = { arrow, pole };
  return g;
}

export { F_LOOP };
