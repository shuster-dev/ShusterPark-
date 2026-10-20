// Every model in the park, built from boxes, cylinders and cones in code:
// nothing to download. Each part carries its own colour in the geometry, so
// a whole ride is a handful of meshes sharing one material.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const MAT = new THREE.MeshLambertMaterial({ vertexColors: true });
export const GHOST = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.55, depthWrite: false });

export const C = {
  red: 0xe63946, yellow: 0xffd166, teal: 0x06d6a0, blue: 0x118ab2, navy: 0x1d3557, pink: 0xef476f, orange: 0xf78c40,
  purple: 0x8e7dbe, white: 0xf8f4ec, wood: 0xa0703c, darkwood: 0x6b4423, metal: 0xaab4be, dark: 0x3d4650, gold: 0xe9c46a,
  stone: 0xc9c2b4, leaf: 0x4caf50, leaf2: 0x63c06a, pine: 0x2e7d4f, trunk: 0x7a5233, water: 0x4fc3f7, sky: 0x9fd7ff, black: 0x222222,
};

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3();

// A piece of geometry in one colour, moved into place.
export function part(geo, color, o = {}) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  g.deleteAttribute('uv');
  if (g.attributes.uv1) g.deleteAttribute('uv1');
  const n = g.attributes.position.count, col = new Float32Array(n * 3), c = new THREE.Color(color);
  for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  place(g, o);
  return g;
}
function place(g, o) {
  tmpE.set(o.rx || 0, o.ry || 0, o.rz || 0, o.order || 'XYZ');
  tmpQ.setFromEuler(tmpE);
  tmpS.set(o.sx ?? o.s ?? 1, o.sy ?? o.s ?? 1, o.sz ?? o.s ?? 1);
  tmpP.set(o.x || 0, o.y || 0, o.z || 0);
  tmpM.compose(tmpP, tmpQ, tmpS);
  g.applyMatrix4(tmpM);
  g.computeVertexNormals();
}
// Colour faces in stripes around the y axis (canopies, awnings).
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
export const cyl = (rt, rb, h, color, o, seg = 8) => part(new THREE.CylinderGeometry(rt, rb, h, seg), color, o);
export const ball = (r, color, o, detail = 0) => part(new THREE.IcosahedronGeometry(r, detail), color, o);
export const cone = (r, h, color, o, seg = 8) => part(new THREE.ConeGeometry(r, h, seg), color, o);

// A beam from a to b (both [x,y,z]), square section t.
export function beam(a, b, t, color) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], len = Math.hypot(dx, dy, dz);
  const g = part(new THREE.BoxGeometry(t, len, t), color);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize());
  g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), q, new THREE.Vector3(1, 1, 1)));
  g.computeVertexNormals();
  return g;
}
const mesh = (geo, mat = MAT) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; return m; };

// ---------------------------------------------------------------- rides
// Each builder returns { group, animate(state, t, dt) }. The group's origin
// is the footprint's centre on the ground; rotation 0 is w along x, d along z.

function carousel() {
  const group = new THREE.Group();
  group.add(mesh(merge([
    cyl(1.38, 1.42, 0.18, C.white, { y: 0.09 }, 16),
    cyl(1.43, 1.43, 0.06, C.red, { y: 0.17 }, 16),
    box(0.5, 0.05, 0.3, C.wood, { y: 0.03, z: 1.55 }),
  ])));
  const spin = new THREE.Group();
  spin.add(mesh(merge([
    cyl(1.28, 1.28, 0.06, C.gold, { y: 0.23 }, 16),
    cyl(0.2, 0.2, 1.3, C.gold, { y: 0.85 }, 10),
    stripes(new THREE.ConeGeometry(1.52, 0.6, 16), [C.red, C.white], 16, { y: 1.75 }),
    stripes(new THREE.CylinderGeometry(1.52, 1.52, 0.16, 16, 1, true), [C.white, C.red], 16, { y: 1.38 }),
    ball(0.1, C.gold, { y: 2.12 }),
    cyl(0.01, 0.01, 0.3, C.dark, { y: 2.3 }),
    box(0.16, 0.1, 0.01, C.red, { y: 2.4, x: 0.08 }),
  ])));
  const bob = [new THREE.Group(), new THREE.Group()];
  const horse = [C.white, C.wood, C.black, C.gold];
  const parts = [[], []];
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2, x = Math.cos(a) * 0.95, z = Math.sin(a) * 0.95, ry = -a;
    const col = horse[k % 4], L = parts[k % 2];
    L.push(cyl(0.015, 0.015, 1.1, C.gold, { x, z, y: 0.8 }, 5));
    L.push(box(0.12, 0.13, 0.34, col, { x, z, y: 0.62, ry }));
    L.push(box(0.08, 0.16, 0.09, col, { x: x + Math.cos(a + Math.PI / 2) * 0.17, z: z + Math.sin(a + Math.PI / 2) * 0.17, y: 0.72, ry }));
    for (const s of [-1, 1]) for (const f of [-1, 1]) L.push(box(0.03, 0.16, 0.03, col, { x: x + Math.cos(a + Math.PI / 2) * 0.12 * f + Math.cos(a) * 0.04 * s, z: z + Math.sin(a + Math.PI / 2) * 0.12 * f + Math.sin(a) * 0.04 * s, y: 0.5 }));
  }
  bob.forEach((b, i) => { b.add(mesh(merge(parts[i]))); spin.add(b); });
  group.add(spin);
  let ang = 0, v = 0;
  return {
    group, animate(o, t, dt) {
      const want = o.phase === 'run' ? 1.1 : 0;
      v += (want - v) * Math.min(1, dt * 1.2); ang += v * dt; spin.rotation.y = ang;
      const h = v > 0.05 ? Math.sin(t * 3) * 0.08 * (v / 1.1) : 0;
      bob[0].position.y = h; bob[1].position.y = -h;
    },
  };
}

function ferris() {
  const group = new THREE.Group(), cy = 2.35, R = 1.75;
  const base = [box(3.8, 0.1, 1.7, C.white, { y: 0.05 }), box(0.6, 0.1, 0.4, C.wood, { y: 0.05, z: 1.0 })];
  for (const z of [-0.55, 0.55]) {
    base.push(beam([-1.25, 0.1, z], [0, cy, z * 0.65], 0.09, C.blue));
    base.push(beam([1.25, 0.1, z], [0, cy, z * 0.65], 0.09, C.blue));
  }
  base.push(cyl(0.07, 0.07, 0.9, C.metal, { y: cy, rx: Math.PI / 2 }, 8));
  group.add(mesh(merge(base)));
  const wheel = new THREE.Group();
  wheel.position.y = cy;
  const w = [];
  for (const z of [-0.26, 0.26]) {
    w.push(part(new THREE.TorusGeometry(R, 0.045, 5, 28), C.white, { z }));
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      w.push(beam([0, 0, z], [Math.cos(a) * R, Math.sin(a) * R, z], 0.03, C.white));
    }
  }
  w.push(cyl(0.13, 0.13, 0.62, C.red, { rx: Math.PI / 2 }, 10));
  wheel.add(mesh(merge(w)));
  const cabs = [], cols = [C.red, C.yellow, C.teal, C.blue, C.pink, C.orange];
  for (let k = 0; k < 12; k++) {
    const g = new THREE.Group(), a = (k / 12) * Math.PI * 2;
    g.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
    g.add(mesh(merge([
      box(0.02, 0.2, 0.02, C.dark, { y: -0.1 }),
      box(0.32, 0.24, 0.34, cols[k % cols.length], { y: -0.3 }),
      box(0.36, 0.04, 0.38, C.white, { y: -0.16 }),
      box(0.33, 0.1, 0.35, C.sky, { y: -0.24 }),
    ])));
    wheel.add(g); cabs.push(g);
  }
  group.add(wheel);
  let ang = 0, v = 0;
  return {
    group, animate(o, t, dt) {
      const want = o.phase === 'run' ? 0.35 : 0;
      v += (want - v) * Math.min(1, dt * 0.8); ang += v * dt;
      wheel.rotation.z = ang;
      for (const c of cabs) c.rotation.z = -ang;
    },
  };
}

function teacups() {
  const group = new THREE.Group();
  group.add(mesh(merge([cyl(1.4, 1.45, 0.12, C.white, { y: 0.06 }, 16), cyl(1.46, 1.46, 0.04, C.pink, { y: 0.12 }, 16)])));
  const plate = new THREE.Group();
  plate.add(mesh(merge([
    cyl(1.3, 1.3, 0.05, C.purple, { y: 0.15 }, 16),
    ball(0.28, C.white, { y: 0.42, sy: 0.8 }, 1),
    cyl(0.04, 0.07, 0.3, C.white, { x: 0.3, y: 0.45, rz: -0.9 }),
    ball(0.08, C.pink, { y: 0.66 }),
  ])));
  const cups = [], cols = [C.pink, C.teal, C.yellow, C.blue];
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * Math.PI * 2, g = new THREE.Group();
    g.position.set(Math.cos(a) * 0.78, 0.18, Math.sin(a) * 0.78);
    g.add(mesh(merge([
      cyl(0.36, 0.36, 0.04, C.white, { y: 0.02 }, 12),
      part(new THREE.CylinderGeometry(0.32, 0.22, 0.3, 12, 1, true), cols[k], { y: 0.2 }),
      cyl(0.22, 0.22, 0.03, cols[k], { y: 0.06 }, 12),
      part(new THREE.TorusGeometry(0.08, 0.025, 4, 8), C.white, { x: 0.34, y: 0.22 }),
      cyl(0.04, 0.04, 0.12, C.white, { y: 0.12 }),
      cyl(0.12, 0.12, 0.02, C.dark, { y: 0.32 }, 8),
    ])));
    plate.add(g); cups.push(g);
  }
  group.add(plate);
  let ang = 0, v = 0;
  return {
    group, animate(o, t, dt) {
      const want = o.phase === 'run' ? 0.8 : 0;
      v += (want - v) * Math.min(1, dt * 1.5); ang += v * dt;
      plate.rotation.y = ang;
      cups.forEach((c, i) => { c.rotation.y = -ang * (2.5 + i * 0.6); });
    },
  };
}

function bumper() {
  const group = new THREE.Group();
  const p = [box(3.8, 0.08, 2.8, C.dark, { y: 0.04 })];
  for (const [x, z, w, d] of [[0, 1.38, 3.8, 0.06], [0, -1.38, 3.8, 0.06], [1.88, 0, 0.06, 2.8], [-1.88, 0, 0.06, 2.8]]) p.push(box(w, 0.16, d, C.yellow, { x, z, y: 0.12 }));
  for (const x of [-1.85, 1.85]) for (const z of [-1.35, 1.35]) p.push(cyl(0.05, 0.05, 1.3, C.metal, { x, z, y: 0.7 }));
  p.push(stripes(new THREE.BoxGeometry(3.95, 0.1, 2.95), [C.red, C.white, C.red, C.white], 8, { y: 1.38 }));
  p.push(box(3.7, 0.02, 2.7, C.metal, { y: 1.3 }));
  p.push(box(0.5, 0.05, 0.3, C.wood, { y: 0.03, z: 1.6 }));
  group.add(mesh(merge(p)));
  const cars = [], cols = [C.red, C.blue, C.yellow, C.teal, C.pink, C.orange, C.purple];
  for (let k = 0; k < 7; k++) {
    const g = new THREE.Group();
    g.add(mesh(merge([
      box(0.34, 0.12, 0.46, cols[k], { y: 0.16 }),
      part(new THREE.TorusGeometry(0.26, 0.04, 4, 10), C.black, { y: 0.12, rx: Math.PI / 2, sz: 1.3 }),
      box(0.26, 0.14, 0.06, C.dark, { y: 0.25, z: -0.15 }),
      cyl(0.01, 0.01, 1.0, C.metal, { y: 0.75, z: -0.18 }),
    ])));
    group.add(g); cars.push(g);
  }
  let tt = 0, v = 0;
  return {
    group, animate(o, t, dt) {
      const want = o.phase === 'run' ? 1 : 0;
      v += (want - v) * Math.min(1, dt * 2); tt += v * dt;
      cars.forEach((c, i) => {
        const a = tt * (0.7 + i * 0.09) + i * 1.7, b = tt * (0.53 + i * 0.07) + i;
        const x = Math.sin(a) * 1.45, z = Math.sin(b * 1.3) * 0.95;
        const nx = Math.sin(a + 0.05) * 1.45, nz = Math.sin((b + 0.05) * 1.3) * 0.95;
        c.position.set(x, 0, z);
        if (v > 0.05) c.rotation.y = Math.atan2(nx - x, nz - z);
      });
    },
  };
}

function ship() {
  const group = new THREE.Group(), py = 2.7;
  const p = [box(3.6, 0.08, 2.6, C.stone, { y: 0.04 }), box(0.5, 0.05, 0.3, C.wood, { y: 0.06, z: 1.45 })];
  for (const z of [-1.0, 1.0]) {
    p.push(beam([-1.3, 0, z], [0, py, z], 0.11, C.dark));
    p.push(beam([1.3, 0, z], [0, py, z], 0.11, C.dark));
  }
  p.push(cyl(0.06, 0.06, 2.1, C.metal, { y: py, rx: Math.PI / 2 }));
  group.add(mesh(merge(p)));
  const swing = new THREE.Group();
  swing.position.y = py;
  const sh = new THREE.Shape();
  sh.moveTo(-1.55, 0.45); sh.lineTo(-1.1, 0); sh.lineTo(1.1, 0); sh.lineTo(1.55, 0.45); sh.lineTo(1.6, 0.6); sh.lineTo(-1.6, 0.6);
  const hull = new THREE.ExtrudeGeometry(sh, { depth: 0.8, bevelEnabled: false });
  const s = [
    part(hull, C.darkwood, { y: -2.45, z: -0.4 }),
    box(3.0, 0.04, 0.78, C.wood, { y: -1.9 }),
    box(3.2, 0.06, 0.06, C.gold, { y: -1.85, z: 0.4 }), box(3.2, 0.06, 0.06, C.gold, { y: -1.85, z: -0.4 }),
    cyl(0.04, 0.04, 1.3, C.darkwood, { y: -1.25 }),
    box(0.03, 0.6, 0.7, C.white, { x: 0.05, y: -1.15 }),
    box(0.02, 0.15, 0.25, C.black, { y: -0.55, z: 0.12 }),
    beam([-0.9, -1.9, 0.42], [0, 0, 0.42], 0.06, C.metal), beam([0.9, -1.9, 0.42], [0, 0, 0.42], 0.06, C.metal),
    beam([-0.9, -1.9, -0.42], [0, 0, -0.42], 0.06, C.metal), beam([0.9, -1.9, -0.42], [0, 0, -0.42], 0.06, C.metal),
  ];
  for (let k = -3; k <= 3; k++) s.push(box(0.12, 0.08, 0.6, C.red, { x: k * 0.38, y: -1.84 }));
  swing.add(mesh(merge(s)));
  group.add(swing);
  let ph = 0, amp = 0;
  return {
    group, animate(o, t, dt) {
      const run = o.phase === 'run';
      const want = run ? (o.timer > 4 ? 1.05 : 0.15) : 0;
      amp += (want - amp) * Math.min(1, dt * 0.35); ph += dt * 1.25;
      swing.rotation.z = Math.sin(ph) * amp;
    },
  };
}

function tower() {
  const group = new THREE.Group(), H = 9;
  const p = [box(1.8, 0.2, 1.8, C.stone, { y: 0.1 }), box(0.5, 0.05, 0.3, C.wood, { y: 0.03, z: 1.1 })];
  for (let k = 0; k < H; k++) p.push(box(0.36, 1, 0.36, k % 2 ? C.white : C.red, { y: 0.7 + k }));
  p.push(box(0.6, 0.3, 0.6, C.dark, { y: H + 0.35 }), ball(0.12, C.yellow, { y: H + 0.6 }));
  group.add(mesh(merge(p)));
  const ring = new THREE.Group();
  const r = [part(new THREE.CylinderGeometry(0.6, 0.6, 0.22, 12, 1, true), C.yellow, {}), cyl(0.6, 0.6, 0.03, C.dark, { y: -0.1 }, 12)];
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    r.push(box(0.16, 0.24, 0.12, C.blue, { x: Math.cos(a) * 0.68, z: Math.sin(a) * 0.68, y: -0.05, ry: -a }));
  }
  ring.add(mesh(merge(r)));
  group.add(ring);
  return {
    group, animate(o) {
      let y = 0.55;
      if (o.phase === 'run') {
        const c = 20, e = c - o.timer; // climb, wait at the top, drop, settle
        if (e < 10) y = 0.55 + (e / 10) * 7.8;
        else if (e < 13) y = 8.35;
        else if (e < 14) y = 8.35 - ((e - 13) ** 2) * 7.8;
        else y = 0.55;
      }
      ring.position.y = Math.max(0.55, y);
    },
  };
}

const RIDE_BUILDERS = { carousel, ferris, teacups, bumper, ship, tower };
export function rideModel(kind) { return RIDE_BUILDERS[kind](); }

// ---------------------------------------------------------------- stalls
const emojiTex = new Map();
export function emojiTexture(ch) {
  if (emojiTex.has(ch)) return emojiTex.get(ch);
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = '#ffffff'; x.beginPath(); x.arc(64, 64, 60, 0, Math.PI * 2); x.fill();
  x.lineWidth = 6; x.strokeStyle = '#1d3557'; x.stroke();
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

const SHOP_COLORS = { burger: C.red, pizza: C.orange, drinks: C.blue, icecream: C.pink, balloons: C.purple, toilets: C.stone };
export function shopModel(kind, icon) {
  const group = new THREE.Group(), col = SHOP_COLORS[kind] || C.red;
  // front faces +z; the screen turns it toward the path
  let p;
  if (kind === 'toilets') {
    p = [box(0.86, 0.66, 0.7, C.white, { y: 0.33 }), box(0.94, 0.06, 0.78, C.navy, { y: 0.69 }),
      box(0.22, 0.42, 0.02, C.blue, { x: -0.2, y: 0.24, z: 0.36 }), box(0.22, 0.42, 0.02, C.pink, { x: 0.2, y: 0.24, z: 0.36 })];
  } else {
    p = [
      box(0.74, 0.56, 0.6, col, { y: 0.28 }),
      box(0.8, 0.06, 0.18, C.white, { y: 0.42, z: 0.34 }),
      box(0.6, 0.2, 0.02, C.dark, { y: 0.6, z: 0.31 }),
      box(0.84, 0.05, 0.66, C.white, { y: 0.6 }),
      stripes(new THREE.BoxGeometry(0.86, 0.03, 0.34), [col, C.white], 10, { y: 0.72, z: 0.32, rx: 0.45 }),
      box(0.05, 0.18, 0.05, C.white, { x: -0.36, y: 0.75 }), box(0.05, 0.18, 0.05, C.white, { x: 0.36, y: 0.75 }),
    ];
    if (kind === 'balloons') for (let k = 0; k < 5; k++) p.push(ball(0.08, [C.red, C.yellow, C.teal, C.pink, C.blue][k], { x: -0.3 + k * 0.15, y: 1.05 + (k % 2) * 0.1, z: -0.1 }, 1));
  }
  group.add(mesh(merge(p)));
  const s = sign(icon); s.position.set(0, kind === 'toilets' ? 1.15 : 1.22, 0); group.add(s);
  return { group, animate() {} };
}

// ---------------------------------------------------------------- scenery
export function sceneryGeometry(kind) {
  switch (kind) {
    case 'oak': return merge([cyl(0.06, 0.08, 0.42, C.trunk, { y: 0.21 }), ball(0.36, C.leaf, { y: 0.66 }), ball(0.25, C.leaf2, { x: 0.15, y: 0.82, z: 0.08 })]);
    case 'pine': return merge([cyl(0.05, 0.07, 0.3, C.trunk, { y: 0.15 }), cone(0.38, 0.55, C.pine, { y: 0.52 }), cone(0.3, 0.48, C.pine, { y: 0.82 }), cone(0.2, 0.4, C.pine, { y: 1.08 })]);
    case 'palm': {
      const p = [];
      let x = 0, y = 0;
      for (let k = 0; k < 5; k++) { const nx = x + 0.035 * k, ny = y + 0.22; p.push(beam([x, y, 0], [nx, ny, 0], 0.07 - k * 0.006, C.trunk)); x = nx; y = ny; }
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2;
        p.push(beam([x, y, 0], [x + Math.cos(a) * 0.45, y - 0.12, Math.sin(a) * 0.45], 0.06, C.leaf2));
      }
      p.push(ball(0.05, C.darkwood, { x, y: y - 0.04, z: 0.05 }), ball(0.05, C.darkwood, { x: x - 0.04, y: y - 0.05 }));
      return merge(p);
    }
    case 'bush': return merge([ball(0.24, C.leaf, { y: 0.16, sy: 0.75 }), ball(0.16, C.leaf2, { x: 0.15, y: 0.14, z: 0.05 })]);
    case 'flowers': {
      const p = [box(0.8, 0.05, 0.8, C.darkwood, { y: 0.025 })], cols = [C.red, C.yellow, C.pink, C.purple, C.white, C.orange];
      for (let i = 0; i < 16; i++) {
        const x = ((i % 4) - 1.5) * 0.18, z = (Math.floor(i / 4) - 1.5) * 0.18;
        p.push(cyl(0.01, 0.01, 0.1, C.leaf, { x, z, y: 0.09 }, 4), ball(0.045, cols[i % cols.length], { x, z, y: 0.15 }));
      }
      return merge(p);
    }
    case 'statue': return merge([box(0.46, 0.36, 0.46, C.stone, { y: 0.18 }), box(0.52, 0.05, 0.52, C.stone, { y: 0.38 }),
      cyl(0.07, 0.1, 0.4, 0xb08d57, { y: 0.6 }), ball(0.09, 0xb08d57, { y: 0.88 }),
      beam([0, 0.72, 0], [0.2, 0.95, 0], 0.05, 0xb08d57), beam([0, 0.72, 0], [-0.18, 0.62, 0.05], 0.05, 0xb08d57)]);
    case 'fountain': return merge([cyl(0.92, 0.95, 0.22, C.stone, { y: 0.11 }, 16), cyl(0.8, 0.8, 0.04, C.water, { y: 0.2 }, 16),
      cyl(0.12, 0.16, 0.5, C.stone, { y: 0.4 }, 8), cyl(0.3, 0.12, 0.08, C.stone, { y: 0.66 }, 10), cyl(0.25, 0.25, 0.02, C.water, { y: 0.7 }, 10)]);
    default: return box(0.3, 0.3, 0.3, C.red);
  }
}
export const WATER_JET = new THREE.MeshLambertMaterial({ color: 0xbfeaff, transparent: true, opacity: 0.7 });

export function addonGeometry(kind) {
  switch (kind) {
    case 'bench': return merge([box(0.5, 0.04, 0.15, C.wood, { y: 0.17 }), box(0.5, 0.13, 0.03, C.wood, { y: 0.28, z: -0.07 }),
      box(0.04, 0.17, 0.12, C.dark, { x: -0.2, y: 0.085 }), box(0.04, 0.17, 0.12, C.dark, { x: 0.2, y: 0.085 })]);
    case 'bin': return merge([cyl(0.075, 0.065, 0.22, 0x2f8f4e, { y: 0.11 }), cyl(0.085, 0.085, 0.03, C.dark, { y: 0.235 })]);
    case 'lamp': return merge([cyl(0.022, 0.03, 0.8, C.dark, { y: 0.4 }), ball(0.08, 0xfff2b0, { y: 0.84 }, 1), cyl(0.06, 0.04, 0.04, C.dark, { y: 0.92 })]);
    default: return box(0.1, 0.1, 0.1, C.red);
  }
}

// ---------------------------------------------------------------- people
export const PERSON = {
  legs: merge([box(0.05, 0.2, 0.06, 0xffffff, { x: -0.035, y: 0.1 }), box(0.05, 0.2, 0.06, 0xffffff, { x: 0.035, y: 0.1 })]),
  body: merge([cyl(0.075, 0.085, 0.2, 0xffffff, { y: 0.3 }, 6), box(0.03, 0.15, 0.04, 0xffffff, { x: -0.1, y: 0.3 }), box(0.03, 0.15, 0.04, 0xffffff, { x: 0.1, y: 0.3 })]),
  head: merge([ball(0.065, 0xffffff, { y: 0.47 }, 1)]),
  balloon: merge([ball(0.09, 0xffffff, { y: 0.92, sy: 1.15 }, 1), cyl(0.004, 0.004, 0.45, 0xdddddd, { y: 0.6, x: 0.04 }, 3)]),
  hat: merge([cyl(0.075, 0.075, 0.04, 0xffffff, { y: 0.53 }, 8), box(0.07, 0.015, 0.06, 0xffffff, { y: 0.515, z: 0.07 })]),
};
export const SHIRTS = [0xe63946, 0x118ab2, 0xffd166, 0x06d6a0, 0xef476f, 0x8e7dbe, 0xf78c40, 0xffffff, 0x3a86ff, 0x8ac926, 0xff595e, 0x6a4c93];
export const SKINS = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524];
export const PANTS = [0x2b3a55, 0x4a4e69, 0x22223b, 0x6b705c];
export const STAFF_COLORS = { cleaner: 0x2a7de1, mechanic: 0xf59e0b, entertainer: 0xb14fd8 };

// ---------------------------------------------------------------- the gate
export function textTexture(text, w = 1024, h = 256, bg = '#1d3557', fg = '#ffd166') {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const x = cv.getContext('2d');
  const draw = () => {
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    x.strokeStyle = fg; x.lineWidth = 10; x.strokeRect(12, 12, w - 24, h - 24);
    x.fillStyle = fg; x.font = `900 ${Math.round(h * 0.52)}px Rubik, "Arial Hebrew", Arial, sans-serif`;
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.direction = 'rtl';
    x.fillText(text, w / 2, h / 2 + 6);
  };
  draw();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (document.fonts) document.fonts.ready.then(() => { draw(); t.needsUpdate = true; });
  return t;
}

export function gateModel(name) {
  const g = new THREE.Group();
  g.add(mesh(merge([
    box(0.5, 2.2, 0.5, C.red, { x: -1.45, y: 1.1 }), box(0.5, 2.2, 0.5, C.red, { x: 1.45, y: 1.1 }),
    cone(0.42, 0.5, C.gold, { x: -1.45, y: 2.45 }, 4), cone(0.42, 0.5, C.gold, { x: 1.45, y: 2.45 }, 4),
    box(3.4, 0.5, 0.3, C.navy, { y: 2.0 }),
    box(0.9, 0.9, 0.8, C.yellow, { x: -2.4, y: 0.45 }), box(1.0, 0.08, 0.9, C.red, { x: -2.4, y: 0.94 }),
    box(0.9, 0.9, 0.8, C.yellow, { x: 2.4, y: 0.45 }), box(1.0, 0.08, 0.9, C.red, { x: 2.4, y: 0.94 }),
    box(0.5, 0.3, 0.02, C.dark, { x: -2.4, y: 0.6, z: 0.41 }), box(0.5, 0.3, 0.02, C.dark, { x: 2.4, y: 0.6, z: 0.41 }),
  ])));
  const tex = textTexture(name);
  const m = new THREE.MeshBasicMaterial({ map: tex });
  for (const z of [0.16, -0.16]) {
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.8), m);
    pl.position.set(0, 2.0, z); if (z < 0) pl.rotation.y = Math.PI;
    g.add(pl);
  }
  return g;
}

export { mesh };
