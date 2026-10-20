// Every model in the park, built in code: nothing to download. Each part
// carries its own colour in the geometry, so a whole ride is a handful of
// meshes sharing one material. Round things are smooth-shaded, boxes keep
// their crisp edges, and the bulbs blink.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const MAT = new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 28, specular: 0x262626 });
export const MATTE = new THREE.MeshLambertMaterial({ vertexColors: true });
export const GHOST = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.55, depthWrite: false });
// two sets of bulbs that take turns lighting up
export const BULB_A = new THREE.MeshBasicMaterial({ color: 0xfff6c2 });
export const BULB_B = new THREE.MeshBasicMaterial({ color: 0xd9a63a });
export const GLOW = new THREE.MeshBasicMaterial({ color: 0xfff1a8 });

export const C = {
  red: 0xe63946, yellow: 0xffc93c, teal: 0x14c9a0, blue: 0x1789c4, navy: 0x1d3557, pink: 0xff5d8f, orange: 0xff8a3d,
  purple: 0x8f5fd8, white: 0xfbf7ef, cream: 0xfff1d6, wood: 0xb07a45, darkwood: 0x6b4423, metal: 0xb8c2cc, dark: 0x39424e, gold: 0xf2c14e,
  stone: 0xd4cdbf, leaf: 0x4caf50, leaf2: 0x6cc56a, leaf3: 0x3d9142, pine: 0x2e7d4f, trunk: 0x7a5233, water: 0x4fc3f7, sky: 0x9fd7ff, black: 0x252525,
  mint: 0x9be7c4, lilac: 0xc6a7ff, brass: 0xd8b25a,
};
export const RAINBOW = [C.red, C.orange, C.yellow, C.teal, C.blue, C.purple, C.pink];

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3();
function matrixOf(o) {
  tmpE.set(o.rx || 0, o.ry || 0, o.rz || 0, o.order || 'XYZ');
  tmpQ.setFromEuler(tmpE);
  tmpS.set(o.sx ?? o.s ?? 1, o.sy ?? o.s ?? 1, o.sz ?? o.s ?? 1);
  tmpP.set(o.x || 0, o.y || 0, o.z || 0);
  return tmpM.compose(tmpP, tmpQ, tmpS);
}

// A piece of geometry in one colour, moved into place. smooth: true keeps
// round surfaces round; otherwise every face is flat.
export function part(geo, color, o = {}) {
  let g = geo;
  if (o.smooth && g.index) {
    g.computeVertexNormals();
    g.applyMatrix4(matrixOf(o));
    g = g.toNonIndexed();
  } else {
    if (g.index) g = g.toNonIndexed();
    g.applyMatrix4(matrixOf(o));
    g.computeVertexNormals();
  }
  for (const k of ['uv', 'uv1', 'uv2']) if (g.attributes[k]) g.deleteAttribute(k);
  const n = g.attributes.position.count, col = new Float32Array(n * 3), c = new THREE.Color(color);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.clearGroups();
  return g;
}
// Colour faces in stripes around the y axis (canopies, awnings, domes).
export function stripes(geo, colors, n, o = {}) {
  const g = part(geo, colors[0], o);
  const p = g.attributes.position, col = g.attributes.color, c = colors.map((x) => new THREE.Color(x));
  const cx = o.x || 0, cz = o.z || 0;
  for (let f = 0; f < p.count; f += 3) {
    const ax = (p.getX(f) + p.getX(f + 1) + p.getX(f + 2)) / 3 - cx, az = (p.getZ(f) + p.getZ(f + 1) + p.getZ(f + 2)) / 3 - cz;
    const k = Math.floor(((Math.atan2(az, ax) + Math.PI) / (2 * Math.PI)) * n) % c.length;
    for (let v = 0; v < 3; v++) col.setXYZ(f + v, c[k].r, c[k].g, c[k].b);
  }
  return g;
}
export function merge(parts) { return mergeGeometries(parts.filter(Boolean)); }
export const box = (w, h, d, color, o) => part(new THREE.BoxGeometry(w, h, d), color, o);
export const cyl = (rt, rb, h, color, o, seg = 10) => part(new THREE.CylinderGeometry(rt, rb, h, seg), color, o);
export const cylS = (rt, rb, h, color, o = {}, seg = 20) => part(new THREE.CylinderGeometry(rt, rb, h, seg), color, { ...o, smooth: true });
export const tube = (rt, rb, h, color, o = {}, seg = 20) => part(new THREE.CylinderGeometry(rt, rb, h, seg, 1, true), color, { ...o, smooth: true });
export const ball = (r, color, o = {}, detail = 1) => part(new THREE.IcosahedronGeometry(r, detail), color, o);
export const ballS = (r, color, o = {}, w = 14, h = 10) => part(new THREE.SphereGeometry(r, w, h), color, { ...o, smooth: true });
export const dome = (r, color, o = {}, w = 16) => part(new THREE.SphereGeometry(r, w, 8, 0, Math.PI * 2, 0, Math.PI / 2), color, { ...o, smooth: true });
export const cone = (r, h, color, o, seg = 10) => part(new THREE.ConeGeometry(r, h, seg), color, o);
export const capsule = (r, len, color, o = {}, seg = 10, cap = 4) => part(new THREE.CapsuleGeometry(r, len, cap, seg), color, { ...o, smooth: true });
export const torus = (R, r, color, o = {}, seg = 32, rs = 6) => part(new THREE.TorusGeometry(R, r, rs, seg), color, { ...o, smooth: true });
export const lathe = (pts, color, o = {}, seg = 20) => part(new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg), color, { ...o, smooth: true });

// A beam from a to b (both [x,y,z]), square section t (round with seg).
export function beam(a, b, t, color, seg = 0) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], len = Math.hypot(dx, dy, dz);
  const raw = seg ? new THREE.CylinderGeometry(t / 2, t / 2, len, seg) : new THREE.BoxGeometry(t, len, t);
  if (seg) raw.computeVertexNormals();
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize());
  raw.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), q, new THREE.Vector3(1, 1, 1)));
  return part(raw, color, seg ? { smooth: true } : {});
}
export const rod = (a, b, d, color) => beam(a, b, d, color, 6);

export const mesh = (geo, mat = MAT) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; return m; };

// Bulbs around a circle (or along any list of points), split in two so they can chase.
export function bulbs(points, r = 0.03) {
  const a = [], b = [];
  points.forEach(([x, y, z], i) => (i % 2 ? b : a).push(part(new THREE.IcosahedronGeometry(r, 0), 0xffffff, { x, y, z })));
  const g = new THREE.Group();
  if (a.length) { const m = new THREE.Mesh(merge(a), BULB_A); g.add(m); }
  if (b.length) { const m = new THREE.Mesh(merge(b), BULB_B); g.add(m); }
  return g;
}
const ring = (n, R, y, a0 = 0) => Array.from({ length: n }, (_, k) => { const a = a0 + (k / n) * Math.PI * 2; return [Math.cos(a) * R, y, Math.sin(a) * R]; });

// A seat a rider can sit in: an empty marker that moves with the ride.
function seat(parent, x, y, z, ry = 0) {
  const s = new THREE.Object3D();
  s.position.set(x, y, z); s.rotation.y = ry;
  parent.add(s);
  return s;
}
// Spread riders evenly over the seats instead of filling one side first.
function spread(seats) {
  const n = seats.length, out = [], used = new Set();
  for (let step = n; out.length < n; step = Math.max(1, Math.floor(step / 2))) {
    for (let k = 0; k < n; k += step) if (!used.has(k)) { used.add(k); out.push(seats[k]); }
  }
  return out;
}

// A small flight of steps up to a platform, on the +z side.
function steps(z, w, h, color = C.wood) {
  const out = [], n = Math.max(1, Math.round(h / 0.05));
  for (let k = 0; k < n; k++) out.push(box(w, 0.05, 0.12, color, { y: 0.025 + k * 0.05, z: z - k * 0.1 }));
  return out;
}

// ---------------------------------------------------------------- rides
// Each builder returns { group, animate(state, t, dt), seats }. The group's
// origin is the footprint's centre on the ground; rotation 0 is w along x,
// d along z. Seats face +z in their own frame.

function horse(col, saddle) {
  const p = [
    capsule(0.055, 0.15, col, { rx: Math.PI / 2 }),
    capsule(0.032, 0.08, col, { y: 0.06, z: 0.1, rx: -0.55 }),
    capsule(0.03, 0.06, col, { y: 0.12, z: 0.16, rx: 1.1 }),
    cone(0.012, 0.035, col, { x: 0.018, y: 0.16, z: 0.135 }, 4), cone(0.012, 0.035, col, { x: -0.018, y: 0.16, z: 0.135 }, 4),
    box(0.012, 0.09, 0.05, C.darkwood, { y: 0.095, z: 0.085, rx: -0.55 }),
    rod([0, 0.02, -0.11], [0, -0.07, -0.19], 0.025, C.darkwood),
    box(0.1, 0.025, 0.1, saddle, { y: 0.055 }),
  ];
  for (const [x, z, a] of [[0.032, 0.08, -0.6], [-0.032, 0.08, -0.3], [0.032, -0.08, 0.5], [-0.032, -0.08, 0.3]]) p.push(rod([x, -0.02, z], [x, -0.14, z + Math.sin(a) * 0.08], 0.022, col));
  return merge(p);
}

function carousel() {
  const group = new THREE.Group(), R = 1.42;
  group.add(mesh(merge([
    cylS(R, R + 0.05, 0.16, C.white, { y: 0.08 }, 36),
    cylS(R + 0.06, R + 0.06, 0.05, C.red, { y: 0.15 }, 36),
    ...steps(R + 0.2, 0.6, 0.15),
  ])));
  group.add(bulbs(ring(28, R + 0.07, 0.15), 0.022));
  const spin = new THREE.Group(); group.add(spin);
  const deck = [
    stripes(new THREE.CylinderGeometry(1.33, 1.33, 0.05, 32), [C.gold, C.cream], 16, { y: 0.2 }),
    cylS(0.27, 0.32, 1.3, C.white, { y: 0.87 }, 24),
    cylS(0.36, 0.36, 0.12, C.red, { y: 0.26 }, 24),
    stripes(new THREE.ConeGeometry(1.6, 0.62, 32, 1), [C.red, C.white], 16, { y: 1.85 }),
    stripes(new THREE.CylinderGeometry(1.6, 1.6, 0.16, 32, 1, true), [C.white, C.red], 16, { y: 1.47 }),
    dome(0.24, C.gold, { y: 2.12 }), ballS(0.06, C.gold, { y: 2.42 }), cyl(0.012, 0.012, 0.35, C.dark, { y: 2.55 }),
    box(0.2, 0.1, 0.01, C.red, { y: 2.66, x: 0.1 }),
  ];
  for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; deck.push(box(0.16, 0.5, 0.02, k % 2 ? C.sky : C.lilac, { x: Math.cos(a) * 0.3, z: Math.sin(a) * 0.3, y: 0.9, ry: -a + Math.PI / 2 })); }
  for (let k = 0; k < 32; k++) { const a = (k / 32) * Math.PI * 2; deck.push(cone(0.06, 0.11, k % 2 ? C.yellow : C.red, { x: Math.cos(a) * 1.6, z: Math.sin(a) * 1.6, y: 1.33, rx: Math.PI }, 6)); }
  spin.add(mesh(merge(deck)));
  spin.add(bulbs(ring(32, 1.62, 1.47), 0.026));
  const bob = [new THREE.Group(), new THREE.Group()], parts = [[], []], poles = [], seats = [];
  bob.forEach((b) => spin.add(b));
  const colors = [C.white, C.wood, C.black, C.cream, 0x9b6b43], saddles = [C.red, C.blue, C.purple, C.teal, C.pink];
  let n = 0;
  for (const [count, r] of [[12, 1.08], [8, 0.7]]) {
    for (let k = 0; k < count; k++, n++) {
      const a = (k / count) * Math.PI * 2 + (r < 1 ? 0.2 : 0), x = Math.cos(a) * r, z = Math.sin(a) * r;
      const ry = Math.atan2(Math.sin(a), -Math.cos(a));
      const h = horse(colors[n % colors.length], saddles[n % saddles.length]);
      h.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(x, 0.62, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry), new THREE.Vector3(1, 1, 1)));
      parts[n % 2].push(h);
      poles.push(cylS(0.012, 0.012, 1.18, C.brass, { x, z, y: 0.84 }, 6));
      seats.push(seat(bob[n % 2], x, 0.69, z, ry));
    }
  }
  bob.forEach((b, i) => b.add(mesh(merge(parts[i]))));
  spin.add(mesh(merge(poles)));
  let ang = 0, v = 0;
  return {
    group, seats: spread(seats),
    animate(o, t, dt) {
      const want = o.phase === 'run' ? 1.0 : 0;
      v += (want - v) * Math.min(1, dt * 1.2); ang += v * dt; spin.rotation.y = ang;
      const h = v > 0.05 ? Math.sin(t * 3) * 0.08 * (v / 1.0) : 0;
      bob[0].position.y = h; bob[1].position.y = -h;
    },
  };
}

function ferris() {
  const group = new THREE.Group(), cy = 2.45, R = 1.8;
  const base = [box(3.9, 0.1, 1.9, C.white, { y: 0.05 }), box(3.95, 0.04, 1.95, C.red, { y: 0.1 }), ...steps(1.1, 0.7, 0.1)];
  for (const z of [-0.66, 0.66]) {
    base.push(beam([-1.35, 0.1, z], [0, cy, z * 0.52], 0.11, C.blue), beam([1.35, 0.1, z], [0, cy, z * 0.52], 0.11, C.blue));
    base.push(beam([-0.85, 1.0, z * 0.85], [0.85, 1.0, z * 0.85], 0.06, C.blue));
  }
  base.push(cylS(0.08, 0.08, 1.0, C.metal, { y: cy, rx: Math.PI / 2 }, 12));
  group.add(mesh(merge(base)));
  const wheel = new THREE.Group(); wheel.position.y = cy; group.add(wheel);
  const w = [];
  for (const z of [-0.3, 0.3]) {
    w.push(torus(R, 0.04, C.white, { z }, 64), torus(0.75, 0.03, C.white, { z }, 32));
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      w.push(rod([Math.cos(a) * 0.12, Math.sin(a) * 0.12, z], [Math.cos(a) * R, Math.sin(a) * R, z], 0.025, C.white));
    }
  }
  for (let k = 0; k < 12; k++) { const a = (k / 12) * Math.PI * 2; w.push(rod([Math.cos(a) * R, Math.sin(a) * R, -0.3], [Math.cos(a) * R, Math.sin(a) * R, 0.3], 0.03, C.metal)); }
  w.push(cylS(0.16, 0.16, 0.7, C.red, { rx: Math.PI / 2 }, 16), cylS(0.22, 0.22, 0.05, C.gold, { rx: Math.PI / 2, z: 0.33 }, 16), cylS(0.22, 0.22, 0.05, C.gold, { rx: Math.PI / 2, z: -0.33 }, 16));
  wheel.add(mesh(merge(w)));
  for (const z of [-0.33, 0.33]) wheel.add(bulbs(Array.from({ length: 36 }, (_, i) => { const a = (i / 36) * Math.PI * 2; return [Math.cos(a) * R, Math.sin(a) * R, z]; }), 0.028));
  const cabs = [], seats = [];
  for (let k = 0; k < 12; k++) {
    const g = new THREE.Group(), a = (k / 12) * Math.PI * 2, col = RAINBOW[k % RAINBOW.length];
    g.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
    g.add(mesh(merge([
      rod([0, 0, 0], [0, -0.16, 0], 0.025, C.dark),
      lathe([[0, -0.42], [0.17, -0.42], [0.2, -0.36], [0.2, -0.28], [0.18, -0.28], [0.17, -0.38], [0, -0.38]], col, {}, 18),
      box(0.3, 0.03, 0.12, C.wood, { y: -0.34 }),
      rod([0.15, -0.3, 0], [0.12, -0.14, 0], 0.016, C.white), rod([-0.15, -0.3, 0], [-0.12, -0.14, 0], 0.016, C.white),
      cone(0.22, 0.1, col, { y: -0.1 }, 16), ballS(0.025, C.gold, { y: -0.04 }),
    ])));
    wheel.add(g); cabs.push(g);
    seats.push(seat(g, -0.07, -0.33, 0), seat(g, 0.07, -0.33, 0));
  }
  let ang = 0, v = 0;
  return {
    group, seats: spread(seats),
    animate(o, t, dt) {
      const want = o.phase === 'run' ? 0.33 : 0;
      v += (want - v) * Math.min(1, dt * 0.8); ang += v * dt;
      wheel.rotation.z = ang;
      for (const c of cabs) c.rotation.z = -ang + Math.sin(t * 1.3 + c.position.x) * 0.04 * (v / 0.33);
    },
  };
}

function teacup(col) {
  return merge([
    cylS(0.37, 0.39, 0.03, C.white, { y: 0.015 }, 24),
    lathe([[0, 0.05], [0.18, 0.04], [0.26, 0.09], [0.31, 0.2], [0.33, 0.33], [0.305, 0.33], [0.285, 0.21], [0.23, 0.12], [0, 0.11]], col, {}, 28),
    torus(0.33, 0.012, C.white, { y: 0.33, rx: Math.PI / 2 }, 28, 4),
    torus(0.08, 0.022, col, { x: 0.36, y: 0.2 }, 14),
    cylS(0.04, 0.05, 0.14, C.white, { y: 0.17 }, 10),
    torus(0.08, 0.014, C.dark, { y: 0.25, rx: Math.PI / 2 }, 16, 4),
  ]);
}

function teacups() {
  const group = new THREE.Group();
  group.add(mesh(merge([cylS(1.42, 1.47, 0.12, C.white, { y: 0.06 }, 36), cylS(1.48, 1.48, 0.04, C.pink, { y: 0.12 }, 36), ...steps(1.6, 0.6, 0.1)])));
  group.add(bulbs(ring(30, 1.49, 0.12), 0.02));
  const plate = new THREE.Group(); group.add(plate);
  plate.add(mesh(merge([
    stripes(new THREE.CylinderGeometry(1.32, 1.32, 0.05, 32), [C.purple, C.lilac], 12, { y: 0.15 }),
    lathe([[0, 0.17], [0.22, 0.18], [0.3, 0.3], [0.28, 0.45], [0.16, 0.54], [0, 0.55]], C.white, {}, 24),
    rod([0.25, 0.32, 0], [0.45, 0.48, 0], 0.06, C.white),
    torus(0.1, 0.025, C.white, { x: -0.3, y: 0.38 }, 14),
    ballS(0.07, C.pink, { y: 0.6 }),
  ])));
  const cups = [], seats = [];
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * Math.PI * 2, g = new THREE.Group();
    g.position.set(Math.cos(a) * 0.8, 0.18, Math.sin(a) * 0.8);
    g.add(mesh(teacup([C.pink, C.teal, C.yellow, C.blue][k])));
    plate.add(g); cups.push(g);
    for (let s = 0; s < 4; s++) { const b = (s / 4) * Math.PI * 2 + 0.4; seats.push(seat(g, Math.cos(b) * 0.2, 0.11, Math.sin(b) * 0.2, Math.atan2(-Math.cos(b), -Math.sin(b)))); }
  }
  let ang = 0, v = 0;
  return {
    group, seats: spread(seats),
    animate(o, t, dt) {
      const want = o.phase === 'run' ? 0.8 : 0;
      v += (want - v) * Math.min(1, dt * 1.5); ang += v * dt;
      plate.rotation.y = ang;
      cups.forEach((c, i) => { c.rotation.y = -ang * (2.5 + i * 0.6); });
    },
  };
}

function bumperCar(col) {
  return merge([
    capsule(0.12, 0.16, col, { y: 0.15, rx: Math.PI / 2, sx: 1.25, sy: 1, sz: 0.55 }),
    torus(0.2, 0.035, C.black, { y: 0.1, rx: Math.PI / 2, sx: 1.05, sy: 1.35 }, 24, 6),
    box(0.22, 0.12, 0.05, C.dark, { y: 0.24, z: -0.12 }),
    torus(0.03, 0.008, C.dark, { y: 0.24, z: 0.08, rx: -0.6 }, 10, 3),
    cyl(0.008, 0.008, 1.0, C.metal, { y: 0.72, z: -0.15 }, 4),
    ballS(0.025, C.yellow, { y: 1.22, z: -0.15 }, 8, 6),
  ]);
}

function bumper() {
  const group = new THREE.Group();
  const p = [box(3.9, 0.06, 2.9, C.dark, { y: 0.03 })];
  for (let i = 0; i < 8; i++) for (let j = 0; j < 6; j++) p.push(box(0.46, 0.012, 0.44, (i + j) % 2 ? 0x4c5562 : 0x3c434e, { x: -1.73 + i * 0.47, z: -1.15 + j * 0.46, y: 0.066 }));
  for (const [x, z, w, d] of [[0, 1.4, 3.9, 0.1], [0, -1.4, 3.9, 0.1], [1.9, 0, 0.1, 2.9], [-1.9, 0, 0.1, 2.9]]) {
    const n = Math.round(Math.max(w, d) / 0.25);
    for (let k = 0; k < n; k++) {
      const along = -Math.max(w, d) / 2 + (k + 0.5) * (Math.max(w, d) / n);
      p.push(box(w > d ? Math.max(w, d) / n : w, 0.16, w > d ? d : Math.max(w, d) / n, k % 2 ? C.yellow : C.black, { x: w > d ? along : x, z: w > d ? z : along, y: 0.12 }));
    }
  }
  for (const x of [-1.9, 0, 1.9]) for (const z of [-1.4, 1.4]) p.push(cylS(0.05, 0.06, 1.35, C.white, { x, z, y: 0.72 }, 10));
  const roof = [];
  for (let k = 0; k < 10; k++) roof.push(box(0.4, 0.1, 3.0, k % 2 ? C.white : C.red, { x: -1.8 + k * 0.4, y: 1.42 }));
  for (let k = 0; k < 40; k++) { const x = -1.95 + (k % 20) * 0.205, z = k < 20 ? 1.5 : -1.5; roof.push(cone(0.05, 0.1, k % 2 ? C.yellow : C.red, { x, z, y: 1.32, rx: Math.PI }, 4)); }
  for (let k = 0; k < 9; k++) roof.push(box(0.015, 0.015, 2.8, C.metal, { x: -1.8 + k * 0.45, y: 1.3 }));
  for (let k = 0; k < 7; k++) roof.push(box(3.8, 0.015, 0.015, C.metal, { z: -1.35 + k * 0.45, y: 1.3 }));
  p.push(...roof, ...steps(1.62, 0.6, 0.1));
  group.add(mesh(merge(p)));
  const edge = [];
  for (let k = 0; k < 20; k++) { const x = -1.95 + k * 0.205; edge.push([x, 1.48, 1.51], [x, 1.48, -1.51]); }
  group.add(bulbs(edge, 0.025));
  const cars = [], seats = [];
  for (let k = 0; k < 10; k++) {
    const g = new THREE.Group();
    g.add(mesh(bumperCar(RAINBOW[k % RAINBOW.length])));
    group.add(g); cars.push(g);
    seats.push(seat(g, 0, 0.17, -0.02));
  }
  let tt = 0, v = 0;
  return {
    group, seats,
    animate(o, t, dt) {
      const want = o.phase === 'run' ? 1 : 0;
      v += (want - v) * Math.min(1, dt * 2); tt += v * dt;
      cars.forEach((c, i) => {
        const a = tt * (0.7 + i * 0.07) + i * 1.7, b = tt * (0.53 + i * 0.06) + i * 2.1;
        const x = Math.sin(a) * 1.5, z = Math.sin(b * 1.3) * 1.0;
        const nx = Math.sin(a + 0.05) * 1.5, nz = Math.sin((b + 0.05) * 1.3) * 1.0;
        c.position.set(x, 0, z);
        if (v > 0.05) c.rotation.y = Math.atan2(nx - x, nz - z);
      });
    },
  };
}

function ship() {
  const group = new THREE.Group(), py = 2.8;
  const p = [box(3.7, 0.08, 2.7, C.stone, { y: 0.04 }), ...steps(1.5, 0.6, 0.08)];
  for (const z of [-1.05, 1.05]) {
    p.push(beam([-1.4, 0, z], [0, py, z], 0.13, 0x7b2d26), beam([1.4, 0, z], [0, py, z], 0.13, 0x7b2d26));
    p.push(beam([-0.7, 1.4, z], [0.7, 1.4, z], 0.07, 0x7b2d26), ballS(0.09, C.gold, { y: py, z }));
  }
  p.push(cylS(0.07, 0.07, 2.2, C.metal, { y: py, rx: Math.PI / 2 }, 12));
  group.add(mesh(merge(p)));
  const swing = new THREE.Group(); swing.position.y = py; group.add(swing);
  const sh = new THREE.Shape();
  sh.moveTo(-1.62, 0.5); sh.quadraticCurveTo(-1.35, 0.02, -0.9, 0); sh.lineTo(0.9, 0); sh.quadraticCurveTo(1.35, 0.02, 1.62, 0.5);
  sh.lineTo(1.7, 0.66); sh.lineTo(-1.7, 0.66); sh.closePath();
  const hull = new THREE.ExtrudeGeometry(sh, { depth: 0.84, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 2, curveSegments: 10 });
  const s = [
    part(hull, 0x8a5a33, { y: -2.5, z: -0.42 }),
    box(3.2, 0.05, 0.94, C.gold, { y: -2.14 }), box(3.0, 0.05, 0.94, C.red, { y: -2.32 }),
    box(3.1, 0.04, 0.82, C.wood, { y: -1.85 }),
    cylS(0.04, 0.05, 1.5, C.darkwood, { y: -1.1 }, 8), cylS(0.1, 0.08, 0.08, C.darkwood, { y: -0.5 }, 10),
    part(new THREE.CylinderGeometry(0.5, 0.5, 0.6, 12, 1, true, -0.5, 1.0), C.white, { y: -1.15, x: -0.42, ry: Math.PI / 2, smooth: true }),
    box(0.02, 0.18, 0.28, C.black, { y: -0.3, z: 0.14 }), ballS(0.035, C.white, { y: -0.28, z: 0.15, x: 0.012 }, 8, 6),
    rod([1.65, -1.95, 0], [2.0, -1.75, 0], 0.04, C.darkwood), ballS(0.08, C.gold, { x: 1.68, y: -2.0 }),
    beam([-0.9, -1.85, 0.44], [0, 0, 0.44], 0.07, C.metal), beam([0.9, -1.85, 0.44], [0, 0, 0.44], 0.07, C.metal),
    beam([-0.9, -1.85, -0.44], [0, 0, -0.44], 0.07, C.metal), beam([0.9, -1.85, -0.44], [0, 0, -0.44], 0.07, C.metal),
  ];
  for (let k = 0; k < 6; k++) s.push(ballS(0.03, C.gold, { x: -1.2 + k * 0.48, y: -2.0, z: 0.47 }, 8, 6), ballS(0.03, C.gold, { x: -1.2 + k * 0.48, y: -2.0, z: -0.47 }, 8, 6));
  const seats = [];
  for (let k = -3; k <= 3; k++) {
    const x = k * 0.42, face = k < 0 ? Math.PI / 2 : -Math.PI / 2;
    s.push(box(0.1, 0.07, 0.74, C.red, { x, y: -1.8 }), box(0.03, 0.12, 0.74, C.red, { x: x + (k < 0 ? -0.06 : 0.06), y: -1.72 }));
    for (const z of [-0.27, -0.09, 0.09, 0.27]) seats.push(seat(swing, x, -1.76, z, k === 0 ? Math.PI / 2 : face));
  }
  swing.add(mesh(merge(s)));
  let ph = 0, amp = 0;
  return {
    group, seats: spread(seats),
    animate(o, t, dt) {
      const run = o.phase === 'run';
      const want = run ? (o.timer > 4 ? 1.05 : 0.12) : 0;
      amp += (want - amp) * Math.min(1, dt * 0.35); ph += dt * 1.25;
      swing.rotation.z = Math.sin(ph) * amp;
    },
  };
}

function tower() {
  const group = new THREE.Group(), H = 9.2;
  const p = [box(1.9, 0.18, 1.9, C.stone, { y: 0.09 }), box(1.95, 0.04, 1.95, C.red, { y: 0.19 }), ...steps(1.12, 0.5, 0.15)];
  const c = 0.17;
  for (const [x, z] of [[c, c], [-c, c], [c, -c], [-c, -c]]) p.push(box(0.06, H, 0.06, C.white, { x, z, y: H / 2 + 0.2 }));
  for (let y = 0.2, k = 0; y < H; y += 0.6, k++) {
    const col = k % 2 ? C.red : C.yellow;
    p.push(beam([-c, y, c], [c, y + 0.6, c], 0.03, col), beam([c, y, -c], [-c, y + 0.6, -c], 0.03, col), beam([c, y, c], [c, y + 0.6, -c], 0.03, col), beam([-c, y, -c], [-c, y + 0.6, c], 0.03, col));
  }
  p.push(cylS(0.42, 0.3, 0.3, C.red, { y: H + 0.35 }, 16), dome(0.3, C.white, { y: H + 0.5 }), cyl(0.015, 0.015, 0.5, C.dark, { y: H + 1.0 }));
  group.add(mesh(merge(p)));
  group.add(bulbs([...ring(12, 0.43, H + 0.42), [0, H + 1.28, 0]], 0.04));
  const car = new THREE.Group(); group.add(car);
  const r = [tube(0.62, 0.62, 0.24, C.yellow, {}, 28), cylS(0.62, 0.62, 0.03, C.dark, { y: -0.12 }, 28), torus(0.62, 0.025, C.white, { y: 0.12, rx: Math.PI / 2 }, 32, 4)];
  const seats = [];
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2, x = Math.cos(a) * 0.7, z = Math.sin(a) * 0.7, out = Math.atan2(Math.cos(a), Math.sin(a));
    r.push(box(0.15, 0.04, 0.12, C.blue, { x, z, y: -0.11, ry: out }), box(0.15, 0.26, 0.03, C.blue, { x: Math.cos(a) * 0.64, z: Math.sin(a) * 0.64, y: 0.02, ry: out }));
    r.push(torus(0.06, 0.012, C.dark, { x: Math.cos(a) * 0.72, z: Math.sin(a) * 0.72, y: 0.04, ry: out, rx: 0.3 }, 10, 4));
    seats.push(seat(car, x, -0.09, z, out));
  }
  car.add(mesh(merge(r)));
  return {
    group, seats: spread(seats),
    animate(o) {
      let y = 0.62;
      if (o.phase === 'run') {
        const cyc = 20, e = cyc - o.timer; // climb, hang at the top, drop, settle
        if (e < 10) y = 0.62 + (e / 10) * 7.9;
        else if (e < 13) y = 8.52;
        else if (e < 14) y = 8.52 - ((e - 13) ** 2) * 7.9;
        else y = 0.62;
      }
      car.position.y = Math.max(0.62, y);
    },
  };
}

const RIDE_BUILDERS = { carousel, ferris, teacups, bumper, ship, tower };
export function rideModel(kind) { return RIDE_BUILDERS[kind](); }

// ---------------------------------------------------------------- signs & text
const emojiTex = new Map();
export function emojiTexture(ch) {
  if (emojiTex.has(ch)) return emojiTex.get(ch);
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = '#ffffff'; x.beginPath(); x.arc(64, 64, 60, 0, Math.PI * 2); x.fill();
  x.lineWidth = 6; x.strokeStyle = '#e63946'; x.stroke();
  x.font = '76px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(ch, 64, 70);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  emojiTex.set(ch, t);
  return t;
}
export function sign(ch, size = 0.62) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTexture(ch), depthWrite: false }));
  s.scale.set(size, size, size);
  return s;
}
export function textTexture(text, w = 1024, h = 256, bg = '#1d3557', fg = '#ffc93c', font = 'Fredoka') {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const x = cv.getContext('2d');
  const draw = () => {
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    x.strokeStyle = fg; x.lineWidth = 10; x.strokeRect(12, 12, w - 24, h - 24);
    for (let k = 0; k < 18; k++) { x.fillStyle = k % 2 ? '#fff6c2' : '#ff5d8f'; x.beginPath(); x.arc(30 + k * ((w - 60) / 17), 30, 7, 0, Math.PI * 2); x.arc(30 + k * ((w - 60) / 17), h - 30, 7, 0, Math.PI * 2); x.fill(); }
    x.fillStyle = fg; x.font = `700 ${Math.round(h * 0.5)}px ${font}, Rubik, "Arial Hebrew", Arial, sans-serif`;
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.direction = 'rtl';
    x.fillText(text, w / 2, h / 2 + 6);
  };
  draw();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (document.fonts) document.fonts.ready.then(() => { draw(); t.needsUpdate = true; });
  return t;
}
function board(text, w, h, bg, fg) {
  const m = new THREE.MeshBasicMaterial({ map: textTexture(text, 512, Math.round((512 * h) / w), bg, fg) });
  const g = new THREE.Group();
  const front = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); front.position.z = 0.011;
  const back = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); back.rotation.y = Math.PI; back.position.z = -0.011;
  g.add(front, back);
  return g;
}

// ---------------------------------------------------------------- stalls
// A kiosk with a striped awning and the thing it sells, giant, on the roof.
const SHOP_COLORS = { burger: C.red, pizza: C.orange, drinks: C.blue, icecream: C.pink, balloons: C.purple };
function roofProp(kind) {
  switch (kind) {
    case 'burger': {
      const p = [cylS(0.2, 0.18, 0.06, 0xd99a4e, { y: 0.03 }), cylS(0.2, 0.2, 0.04, 0x6b3a1f, { y: 0.08 }),
        box(0.3, 0.012, 0.3, C.yellow, { y: 0.106, ry: 0.78 }), cylS(0.23, 0.23, 0.014, C.leaf2, { y: 0.115 }, 16),
        cylS(0.17, 0.17, 0.02, C.red, { y: 0.13 }), dome(0.2, 0xe0a556, { y: 0.14, sy: 0.75 })];
      for (let k = 0; k < 9; k++) { const a = k * 2.4, r = 0.06 + (k % 3) * 0.04; p.push(ballS(0.012, C.cream, { x: Math.cos(a) * r, y: 0.14 + 0.15 * Math.cos(r * 6) * 0.75, z: Math.sin(a) * r, sy: 0.6 }, 6, 4)); }
      return merge(p);
    }
    case 'pizza': {
      const sh = new THREE.Shape(); sh.moveTo(0, -0.22); sh.lineTo(0.2, 0.18); sh.quadraticCurveTo(0, 0.24, -0.2, 0.18); sh.closePath();
      const p = [part(new THREE.ExtrudeGeometry(sh, { depth: 0.04, bevelEnabled: false }), C.yellow, { y: 0.16, rx: -0.35 }),
        torus(0.2, 0.03, 0xc8873d, { y: 0.24, z: 0.07, rx: Math.PI / 2 - 0.35, sy: 0.25 }, 16, 6)];
      for (const [x, y] of [[0, 0.02], [-0.07, 0.1], [0.08, 0.1], [0, -0.1]]) p.push(cylS(0.035, 0.035, 0.012, C.red, { x, y: 0.16 + y * Math.cos(0.35), z: 0.045 - y * Math.sin(0.35), rx: Math.PI / 2 - 0.35 }, 10));
      return merge(p);
    }
    case 'drinks': return merge([cylS(0.13, 0.1, 0.32, C.red, { y: 0.16 }, 16), tube(0.135, 0.12, 0.08, C.white, { y: 0.18 }, 16), cylS(0.14, 0.14, 0.03, C.white, { y: 0.33 }, 16), rod([0.03, 0.3, 0], [0.07, 0.5, 0.02], 0.02, C.teal)]);
    case 'icecream': return merge([part(new THREE.ConeGeometry(0.1, 0.28, 12), 0xd9a25e, { y: 0.14, rx: Math.PI }), ballS(0.11, C.pink, { y: 0.3 }), ballS(0.09, C.cream, { y: 0.42 }), ballS(0.03, C.red, { y: 0.52 }, 8, 6)]);
    case 'balloons': {
      const p = [];
      [[0, 0.5, 0, C.red], [0.14, 0.42, 0.04, C.yellow], [-0.13, 0.44, 0.02, C.blue], [0.05, 0.38, -0.12, C.teal], [-0.04, 0.4, 0.13, C.pink]].forEach(([x, y, z, c]) => {
        p.push(ballS(0.08, c, { x, y, z, sy: 1.15 }, 10, 8), rod([0, 0, 0], [x, y - 0.09, z], 0.006, C.white));
      });
      return merge(p);
    }
    default: return null;
  }
}

export function shopModel(kind) {
  const group = new THREE.Group();
  // the front faces +z; the screen turns it toward the path
  if (kind === 'toilets') {
    group.add(mesh(merge([
      box(0.86, 0.04, 0.72, C.stone, { y: 0.02 }),
      box(0.8, 0.6, 0.62, C.white, { y: 0.32 }), box(0.82, 0.08, 0.64, C.mint, { y: 0.06 }),
      part(new THREE.ConeGeometry(0.62, 0.26, 4), C.blue, { y: 0.75, ry: Math.PI / 4, sz: 0.85 }),
      box(0.2, 0.4, 0.02, C.blue, { x: -0.19, y: 0.26, z: 0.32 }), box(0.2, 0.4, 0.02, C.pink, { x: 0.19, y: 0.26, z: 0.32 }),
      ballS(0.03, C.white, { x: -0.19, y: 0.42, z: 0.335 }, 8, 6), ballS(0.03, C.white, { x: 0.19, y: 0.42, z: 0.335 }, 8, 6),
      ballS(0.12, C.leaf, { x: 0.38, y: 0.1, z: 0.3 }), ballS(0.1, C.leaf2, { x: -0.4, y: 0.09, z: 0.3 }),
    ])));
    return { group, animate() {} };
  }
  const col = SHOP_COLORS[kind] || C.red;
  const p = [
    box(0.86, 0.04, 0.74, C.stone, { y: 0.02 }),
    box(0.72, 0.5, 0.56, col, { y: 0.29 }), box(0.74, 0.08, 0.58, C.white, { y: 0.08 }),
    box(0.6, 0.2, 0.02, 0x2b2f36, { y: 0.48, z: 0.285 }),
    box(0.8, 0.05, 0.18, C.white, { y: 0.4, z: 0.36 }), box(0.78, 0.3, 0.04, col, { y: 0.24, z: 0.3 }),
    box(0.8, 0.05, 0.64, C.white, { y: 0.565 }),
  ];
  for (let k = 0; k < 8; k++) p.push(box(0.105, 0.02, 0.34, k % 2 ? C.white : col, { x: -0.367 + k * 0.105, y: 0.65, z: 0.4, rx: 0.42 }));
  for (let k = 0; k < 8; k++) p.push(part(new THREE.CylinderGeometry(0.052, 0.052, 0.02, 8, 1, false, 0, Math.PI), k % 2 ? C.white : col, { x: -0.367 + k * 0.105, y: 0.58, z: 0.56, rx: Math.PI / 2, rz: Math.PI / 2 }));
  p.push(box(0.04, 0.2, 0.04, C.white, { x: -0.37, y: 0.68, z: -0.25 }), box(0.04, 0.2, 0.04, C.white, { x: 0.37, y: 0.68, z: -0.25 }));
  const prop = roofProp(kind);
  if (prop) { prop.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.6, -0.06)); p.push(prop); }
  // a table with an umbrella beside the food stalls
  if (kind === 'burger' || kind === 'pizza' || kind === 'icecream') {
    p.push(cylS(0.11, 0.11, 0.02, C.white, { x: 0.36, y: 0.2, z: 0.62 }, 12), cyl(0.012, 0.012, 0.2, C.dark, { x: 0.36, y: 0.1, z: 0.62 }, 4));
    p.push(stripes(new THREE.ConeGeometry(0.2, 0.08, 12), [col, C.white], 12, { x: 0.36, y: 0.46, z: 0.62 }), cyl(0.008, 0.008, 0.28, C.white, { x: 0.36, y: 0.32, z: 0.62 }, 4));
  }
  group.add(mesh(merge(p)));
  return { group, animate() {} };
}

// The ticket booth: two windows under striped domes, a sign and turnstiles.
export function boothModel() {
  const group = new THREE.Group();
  const p = [box(1.9, 0.05, 0.9, C.stone, { y: 0.025 })];
  for (const x of [-0.45, 0.45]) {
    p.push(box(0.72, 0.56, 0.6, C.white, { x, y: 0.33 }), box(0.74, 0.1, 0.62, C.red, { x, y: 0.1 }));
    for (let k = 0; k < 6; k++) p.push(box(0.12, 0.44, 0.012, k % 2 ? C.red : C.white, { x: x - 0.3 + k * 0.12, y: 0.37, z: 0.305 }));
    p.push(box(0.36, 0.22, 0.03, 0x2b2f36, { x, y: 0.47, z: 0.31 }), box(0.46, 0.04, 0.12, C.gold, { x, y: 0.36, z: 0.36 }));
    p.push(stripes(new THREE.SphereGeometry(0.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), [C.red, C.white], 16, { x, y: 0.6, sy: 0.7 }));
    p.push(ballS(0.05, C.gold, { x, y: 0.92 }), cyl(0.01, 0.01, 0.25, C.dark, { x, y: 1.05 }, 4), box(0.12, 0.07, 0.008, k2(x), { x: x + 0.06, y: 1.14 }));
    // the seller in the window
    p.push(ballS(0.06, 0xe8b88a, { x, y: 0.5, z: 0.18 }), capsule(0.06, 0.06, C.blue, { x, y: 0.36, z: 0.18 }));
  }
  for (const x of [-0.75, -0.15, 0.15, 0.75]) {
    p.push(cylS(0.05, 0.06, 0.22, C.metal, { x, y: 0.13, z: 0.62 }, 10));
    for (let k = 0; k < 3; k++) { const a = (k / 3) * Math.PI * 2; p.push(rod([x, 0.2, 0.62], [x + Math.cos(a) * 0.14, 0.2, 0.62 + Math.sin(a) * 0.14], 0.012, C.metal)); }
  }
  p.push(rod([-0.06, 0.6, -0.1], [-0.06, 1.0, -0.1], 0.03, C.dark), rod([0.06, 0.6, -0.1], [0.06, 1.0, -0.1], 0.03, C.dark));
  group.add(mesh(merge(p)));
  const b = board('🎟️ קופה', 0.9, 0.32, '#e63946', '#fff6c2');
  b.position.set(0, 1.1, -0.1);
  group.add(b);
  group.add(bulbs([[-0.47, 1.1, -0.08], [0.47, 1.1, -0.08], ...Array.from({ length: 8 }, (_, k) => [-0.42 + k * 0.12, 1.28, -0.08])], 0.022));
  return { group, animate() {} };
}
function k2(x) { return x < 0 ? C.yellow : C.teal; }

// ---------------------------------------------------------------- scenery
export function sceneryGeometry(kind) {
  switch (kind) {
    case 'oak': return merge([
      cylS(0.05, 0.085, 0.45, C.trunk, { y: 0.22 }, 8), rod([0, 0.35, 0], [0.12, 0.5, 0.05], 0.04, C.trunk),
      ballS(0.34, C.leaf, { y: 0.7 }, 12, 9), ballS(0.26, C.leaf2, { x: 0.17, y: 0.86, z: 0.08 }, 12, 9),
      ballS(0.24, C.leaf3, { x: -0.16, y: 0.8, z: -0.06 }, 12, 9), ballS(0.2, C.leaf2, { x: 0.02, y: 0.98, z: -0.12 }, 10, 8),
    ]);
    case 'pine': return merge([cylS(0.05, 0.07, 0.3, C.trunk, { y: 0.15 }, 8), part(new THREE.ConeGeometry(0.4, 0.5, 12), C.pine, { y: 0.5, smooth: true }),
      part(new THREE.ConeGeometry(0.32, 0.45, 12), 0x358a59, { y: 0.78, smooth: true }), part(new THREE.ConeGeometry(0.22, 0.4, 12), 0x3d9a64, { y: 1.04, smooth: true }),
      part(new THREE.ConeGeometry(0.12, 0.25, 10), 0x45a96d, { y: 1.25, smooth: true })]);
    case 'palm': {
      const p = [];
      let x = 0, y = 0;
      for (let k = 0; k < 6; k++) { const nx = x + 0.03 * k, ny = y + 0.2; p.push(part(new THREE.CylinderGeometry(0.06 - k * 0.006, 0.07 - k * 0.006, 0.21, 8), k % 2 ? C.trunk : 0x8b6440, { x: (x + nx) / 2, y: (y + ny) / 2, rz: -0.15 * (k / 6), smooth: true })); x = nx; y = ny; }
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * Math.PI * 2;
        const mid = [x + Math.cos(a) * 0.28, y + 0.06, Math.sin(a) * 0.28], end = [x + Math.cos(a) * 0.52, y - 0.16, Math.sin(a) * 0.52];
        p.push(beam([x, y, 0], mid, 0.07, C.leaf2), beam(mid, end, 0.06, C.leaf));
      }
      p.push(ballS(0.045, C.darkwood, { x, y: y - 0.05, z: 0.05 }, 8, 6), ballS(0.045, C.darkwood, { x: x - 0.05, y: y - 0.06 }, 8, 6), ballS(0.045, C.darkwood, { x: x + 0.03, y: y - 0.06, z: -0.04 }, 8, 6));
      return merge(p);
    }
    case 'bush': return merge([ballS(0.22, C.leaf, { y: 0.16, sy: 0.8 }, 12, 8), ballS(0.16, C.leaf2, { x: 0.15, y: 0.14, z: 0.06 }, 10, 8), ballS(0.14, C.leaf3, { x: -0.13, y: 0.12, z: -0.04 }, 10, 8),
      ballS(0.025, C.pink, { x: 0.08, y: 0.31, z: 0.08 }, 6, 4), ballS(0.025, C.pink, { x: -0.1, y: 0.26, z: 0.1 }, 6, 4)]);
    case 'flowers': {
      const p = [box(0.86, 0.1, 0.86, C.wood, { y: 0.05 }), box(0.78, 0.04, 0.78, C.darkwood, { y: 0.09 })], cols = [C.red, C.yellow, C.pink, C.purple, C.white, C.orange];
      for (let i = 0; i < 25; i++) {
        const x = ((i % 5) - 2) * 0.15, z = (Math.floor(i / 5) - 2) * 0.15, h = 0.12 + ((i * 7) % 5) * 0.015;
        p.push(cyl(0.008, 0.008, h, C.leaf, { x, z, y: 0.11 + h / 2 }, 4), ballS(0.035, cols[i % cols.length], { x, z, y: 0.12 + h, sy: 0.7 }, 8, 5), ballS(0.012, C.yellow, { x, z, y: 0.14 + h }, 5, 4));
      }
      return merge(p);
    }
    case 'statue': return merge([box(0.48, 0.36, 0.48, C.stone, { y: 0.18 }), box(0.54, 0.05, 0.54, 0xbdb5a5, { y: 0.38 }), box(0.54, 0.05, 0.54, 0xbdb5a5, { y: 0.02 }),
      capsule(0.07, 0.22, 0xb08d57, { y: 0.62 }), ballS(0.08, 0xb08d57, { y: 0.86 }),
      rod([0.05, 0.72, 0], [0.22, 0.95, 0.03], 0.045, 0xb08d57), rod([-0.05, 0.7, 0], [-0.2, 0.6, 0.08], 0.045, 0xb08d57),
      ballS(0.05, C.gold, { x: 0.24, y: 0.99, z: 0.03 }, 10, 8)]);
    case 'fountain': return merge([
      lathe([[0, 0.02], [0.95, 0.02], [0.98, 0.26], [0.86, 0.26], [0.84, 0.12], [0, 0.12]], C.stone, {}, 32),
      cylS(0.84, 0.84, 0.02, C.water, { y: 0.21 }, 32),
      cylS(0.12, 0.16, 0.55, C.stone, { y: 0.45 }, 12),
      lathe([[0, 0.66], [0.38, 0.66], [0.4, 0.76], [0.34, 0.76], [0, 0.72]], C.stone, {}, 24), cylS(0.33, 0.33, 0.015, C.water, { y: 0.745 }, 24),
      cylS(0.05, 0.07, 0.25, C.stone, { y: 0.88 }, 10), ballS(0.07, C.gold, { y: 1.04 }),
    ]);
    default: return box(0.3, 0.3, 0.3, C.red);
  }
}
export const WATER_JET = new THREE.MeshLambertMaterial({ color: 0xc7efff, transparent: true, opacity: 0.65 });

export function addonGeometry(kind) {
  switch (kind) {
    case 'bench': {
      const p = [];
      for (let k = 0; k < 3; k++) p.push(box(0.52, 0.02, 0.045, C.wood, { y: 0.17, z: -0.05 + k * 0.05 }));
      for (let k = 0; k < 2; k++) p.push(box(0.52, 0.04, 0.02, C.wood, { y: 0.24 + k * 0.06, z: -0.085, rx: -0.15 }));
      for (const x of [-0.22, 0.22]) p.push(box(0.025, 0.17, 0.13, C.dark, { x, y: 0.085 }), box(0.025, 0.16, 0.02, C.dark, { x, y: 0.26, z: -0.08 }));
      return merge(p);
    }
    case 'bin': return merge([cylS(0.075, 0.065, 0.22, 0x2f8f4e, { y: 0.11 }, 12), torus(0.074, 0.008, 0x247a40, { y: 0.16, rx: Math.PI / 2 }, 16, 4), dome(0.085, C.dark, { y: 0.22, sy: 0.4 }, 12)]);
    case 'lamp': return merge([cylS(0.045, 0.06, 0.06, C.dark, { y: 0.03 }, 8), cylS(0.018, 0.025, 0.85, C.dark, { y: 0.45 }, 8), torus(0.06, 0.01, C.dark, { y: 0.8, rx: Math.PI / 2 }, 12, 4),
      ballS(0.075, 0xfff3c0, { y: 0.9 }, 12, 8), cone(0.07, 0.07, C.dark, { y: 0.99 }, 8), ballS(0.015, C.dark, { y: 1.04 }, 6, 4)]);
    default: return box(0.1, 0.1, 0.1, C.red);
  }
}

// ---------------------------------------------------------------- cars in the car park
export function carGeometry(col) {
  return merge([
    box(0.5, 0.12, 0.24, col, { y: 0.1 }), box(0.28, 0.1, 0.22, col, { y: 0.21, x: -0.03 }),
    box(0.27, 0.08, 0.225, 0x2b3440, { y: 0.21, x: -0.03 }),
    ...[[-0.16, 0.12], [0.16, 0.12], [-0.16, -0.12], [0.16, -0.12]].map(([x, z]) => cylS(0.05, 0.05, 0.04, C.black, { x, z, y: 0.05, rx: Math.PI / 2 }, 10)),
    box(0.02, 0.03, 0.05, 0xfff2b0, { x: 0.25, y: 0.12, z: 0.07 }), box(0.02, 0.03, 0.05, 0xfff2b0, { x: 0.25, y: 0.12, z: -0.07 }),
  ]);
}

// ---------------------------------------------------------------- the gate
export function gateModel(name) {
  const g = new THREE.Group();
  const p = [];
  for (const x of [-1.55, 1.55]) {
    p.push(cylS(0.3, 0.34, 2.3, C.red, { x, y: 1.15 }, 16), torus(0.31, 0.04, C.gold, { x, y: 0.4, rx: Math.PI / 2 }, 20, 4), torus(0.31, 0.04, C.gold, { x, y: 2.2, rx: Math.PI / 2 }, 20, 4));
    p.push(stripes(new THREE.ConeGeometry(0.42, 0.7, 16), [C.yellow, C.red], 16, { x, y: 2.65 }), ballS(0.06, C.gold, { x, y: 3.05 }), cyl(0.012, 0.012, 0.4, C.dark, { x, y: 3.25 }, 4), box(0.22, 0.12, 0.01, C.teal, { x: x + 0.11, y: 3.38 }));
  }
  p.push(part(new THREE.TorusGeometry(1.55, 0.13, 8, 32, Math.PI), C.navy, { y: 2.0, smooth: true }));
  g.add(mesh(merge(p)));
  const arch = [];
  for (let k = 0; k <= 20; k++) { const a = (k / 20) * Math.PI; arch.push([Math.cos(a) * 1.55, 2.0 + Math.sin(a) * 1.55, 0.14], [Math.cos(a) * 1.55, 2.0 + Math.sin(a) * 1.55, -0.14]); }
  g.add(bulbs(arch, 0.04));
  const b = board(name, 2.6, 0.62, '#1d3557', '#ffc93c');
  b.position.set(0, 2.05, 0);
  g.add(b);
  return g;
}

export const SHIRTS = [0xe63946, 0x1789c4, 0xffc93c, 0x14c9a0, 0xff5d8f, 0x8f5fd8, 0xff8a3d, 0xfbf7ef, 0x3a86ff, 0x8ac926, 0x2b2f36, 0x6a4c93, 0xffffff, 0x9bd4e4];
export const SKINS = [0xf6d2b4, 0xe8b88a, 0xc98b5e, 0x8d5a3b, 0x5e3a26];
export const PANTS = [0x2c4a7a, 0x3a3f4b, 0x1f2229, 0x7a6a55, 0xd8cfc0, 0x4c6b8a, 0x5b3f2e];
export const HAIR = [0x1b1612, 0x3b2516, 0x6b4423, 0xc89f5d, 0xe0c27a, 0x9a3b1d, 0xb8b8b8];
export const STAFF_COLORS = { cleaner: 0x2a7de1, mechanic: 0xf28a1d, entertainer: 0xb14fd8 };
