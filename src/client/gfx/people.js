// Guests and staff: jointed people with swinging arms and legs, five
// hairstyles, kids and grown-ups, uniforms for the staff (a cleaner with a
// broom, a mechanic with a hard hat and toolbox, an entertainer in a bear
// suit). Each body part is one instanced mesh, so hundreds of people cost a
// handful of draws. Riders sitting on rides are drawn here too.
import * as THREE from 'three';
import { MAT, merge, capsule, ballS, dome, box, cylS, rod, torus, cone, SHIRTS, SKINS, PANTS, HAIR, STAFF_COLORS, C } from './models.js';

const MAXP = 640, MAXS = 420;
const PATH_Y = 0.06;
const HIP = 0.29, SHOULDER = 0.49, SH_X = 0.093;
const W = 0xffffff, SHOE = 0x3a3a3a, EYE = 0x262626;

// ------------------------------------------------------------ the parts (adult size, facing +z, feet at y 0)
const lo = (r, len, o, seg = 6) => capsule(r, len, W, o, seg, 2); // light capsules: there are hundreds of people
const G = {
  leg: merge([lo(0.034, 0.19, { y: -0.13 }), box(0.068, 0.04, 0.11, SHOE, { y: -0.272, z: 0.022 })]),
  hips: merge([lo(0.068, 0.05, { y: HIP + 0.01, rz: Math.PI / 2, sz: 0.72 }, 8)]),
  torso: merge([
    lo(0.074, 0.12, { y: 0.405, sz: 0.68 }, 9),
    lo(0.034, 0.03, { x: SH_X - 0.005, y: SHOULDER - 0.02, rz: 0.35 }, 5),
    lo(0.034, 0.03, { x: -SH_X + 0.005, y: SHOULDER - 0.02, rz: -0.35 }, 5),
  ]),
  head: merge([
    cylS(0.026, 0.03, 0.06, W, { y: 0.545 }, 6),
    ballS(0.068, W, { y: 0.605 }, 11, 8),
    ballS(0.014, W, { y: 0.597, z: 0.066 }, 4, 3),
    ballS(0.016, W, { x: 0.066, y: 0.6 }, 4, 3), ballS(0.016, W, { x: -0.066, y: 0.6 }, 4, 3),
    ballS(0.009, EYE, { x: 0.024, y: 0.615, z: 0.061 }, 4, 3), ballS(0.009, EYE, { x: -0.024, y: 0.615, z: 0.061 }, 4, 3),
  ]),
  arm: merge([lo(0.025, 0.15, { y: -0.1 }, 5), ballS(0.028, W, { y: -0.2 }, 5, 4)]),
};
const shortHair = () => [dome(0.075, W, { y: 0.607, sy: 0.92 }, 11), ballS(0.071, W, { y: 0.592, z: -0.013, sy: 0.92 }, 11, 7)];
const HAIRS = [
  merge(shortHair()),
  merge([...shortHair(), lo(0.058, 0.11, { y: 0.53, z: -0.042, sz: 0.55 }, 8)]),
  merge([...shortHair(), ballS(0.036, W, { y: 0.64, z: -0.085 }, 7, 5), lo(0.02, 0.07, { y: 0.575, z: -0.098 }, 5)]),
  merge([dome(0.077, W, { y: 0.615 }, 11), box(0.11, 0.012, 0.085, W, { y: 0.623, z: 0.075 })]),
];
const HARDHAT = merge([dome(0.082, C.yellow, { y: 0.625 }, 12), torus(0.083, 0.01, C.yellow, { y: 0.627, rx: Math.PI / 2 }, 14, 3), box(0.014, 0.03, 0.15, 0xe0b020, { y: 0.69 })]);
const MASCOT = merge([
  ballS(0.13, 0x9b6b43, { y: 0.66 }, 14, 10), ballS(0.045, 0x9b6b43, { x: 0.1, y: 0.77 }, 8, 6), ballS(0.045, 0x9b6b43, { x: -0.1, y: 0.77 }, 8, 6),
  ballS(0.025, C.pink, { x: 0.1, y: 0.775, z: 0.02 }, 6, 4), ballS(0.025, C.pink, { x: -0.1, y: 0.775, z: 0.02 }, 6, 4),
  ballS(0.055, C.cream, { y: 0.62, z: 0.1, sz: 0.7 }, 10, 6), ballS(0.018, EYE, { y: 0.64, z: 0.145 }, 5, 4),
  ballS(0.016, EYE, { x: 0.045, y: 0.7, z: 0.11 }, 5, 4), ballS(0.016, EYE, { x: -0.045, y: 0.7, z: 0.11 }, 5, 4),
  torus(0.06, 0.015, C.red, { y: 0.53, rx: Math.PI / 2 }, 12, 3),
]);
// carried things, hung from the right (broom, balloon) or left hand (toolbox)
const BROOM = merge([rod([0, 0, 0], [0, -0.22, 0.17], 0.016, C.wood), box(0.12, 0.05, 0.03, C.yellow, { y: -0.24, z: 0.19, rx: 0.8 })]);
const TOOLBOX = merge([box(0.1, 0.06, 0.05, C.red, { y: -0.05 }), torus(0.025, 0.006, C.dark, { y: -0.015 }, 8, 3)]);
const BALLOON = merge([ballS(0.075, W, { y: 0.42, sy: 1.15 }, 9, 7), cone(0.012, 0.02, W, { y: 0.335, rx: Math.PI }, 5), rod([0, 0, 0], [0, 0.33, 0], 0.004, 0xeeeeee)]);

// sitting on a seat: origin on the seat, facing +z
const SEAT = {
  pants: merge([lo(0.034, 0.12, { x: 0.04, y: 0.03, z: 0.07, rx: Math.PI / 2 }), lo(0.034, 0.12, { x: -0.04, y: 0.03, z: 0.07, rx: Math.PI / 2 }),
    lo(0.03, 0.1, { x: 0.04, y: -0.06, z: 0.16 }), lo(0.03, 0.1, { x: -0.04, y: -0.06, z: 0.16 }), lo(0.066, 0.04, { y: 0.03, rz: Math.PI / 2, sz: 0.72 }, 8)]),
  torso: merge([lo(0.072, 0.11, { y: 0.15, sz: 0.68 }, 9)]),
  skin: merge([cylS(0.026, 0.03, 0.05, W, { y: 0.255 }, 6), ballS(0.066, W, { y: 0.32 }, 11, 8),
    lo(0.024, 0.13, { x: 0.09, y: 0.17, z: 0.07, rx: -1.0 }, 5), lo(0.024, 0.13, { x: -0.09, y: 0.17, z: 0.07, rx: -1.0 }, 5)]),
  hair: merge([dome(0.072, W, { y: 0.322, sy: 0.92 }, 11), ballS(0.068, W, { y: 0.308, z: -0.013, sy: 0.92 }, 11, 6)]),
};

const STAFF_HAIR = { cleaner: 3, mechanic: -1, entertainer: -2 };

export class People {
  constructor(scene) {
    const mk = (geo, n = MAXP) => {
      const m = new THREE.InstancedMesh(geo, MAT, n);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.count = 0; m.castShadow = true; m.frustumCulled = false;
      m.setColorAt(0, new THREE.Color(1, 1, 1));
      scene.add(m);
      return m;
    };
    this.legs = mk(G.leg, MAXP * 2); this.arms = mk(G.arm, MAXP * 2);
    this.hips = mk(G.hips); this.torso = mk(G.torso); this.head = mk(G.head);
    this.hair = HAIRS.map((h) => mk(h));
    this.hardhat = mk(HARDHAT, 80); this.mascot = mk(MASCOT, 80); this.broom = mk(BROOM, 80); this.toolbox = mk(TOOLBOX, 80);
    this.balloon = mk(BALLOON);
    this.seat = { pants: mk(SEAT.pants, MAXS), torso: mk(SEAT.torso, MAXS), skin: mk(SEAT.skin, MAXS), hair: mk(SEAT.hair, MAXS) };
    this.all = [this.legs, this.arms, this.hips, this.torso, this.head, ...this.hair, this.hardhat, this.mascot, this.broom, this.toolbox, this.balloon];
    this.M = new THREE.Matrix4(); this.L = new THREE.Matrix4(); this.R = new THREE.Matrix4(); this.out = new THREE.Matrix4();
    this.q = new THREE.Quaternion(); this.p = new THREE.Vector3(); this.s = new THREE.Vector3(); this.up = new THREE.Vector3(0, 1, 0);
    const col = (list) => list.map((x) => new THREE.Color(x));
    this.shirt = col(SHIRTS); this.skin = col(SKINS); this.pants = col(PANTS); this.hairC = col(HAIR);
    this.staffC = Object.fromEntries(Object.entries(STAFF_COLORS).map(([k, v]) => [k, new THREE.Color(v)]));
    this.capC = col([C.red, C.blue, C.yellow, C.teal, C.purple, C.white]);
    this.balloonC = col([C.red, C.yellow, C.teal, C.blue, C.pink, C.purple, C.orange]);
    this.white = new THREE.Color(1, 1, 1);
    this.navy = new THREE.Color(0x1e5bb0);
    this.walk = new Map();
    this.n = {};
  }

  // who someone is, drawn from their id: hair, size and colours stay the same all visit
  look(w) {
    const id = w.id, kid = !w.role && id % 5 === 0;
    const style = w.role ? STAFF_HAIR[w.role] : [0, 1, 2, 3, 0, 1, -1, 2][id % 8];
    return {
      s: kid ? 0.72 : 0.96 + ((id * 7) % 9) / 100,
      shirt: w.role ? this.staffC[w.role] : this.shirt[(w.shirt ?? id) % this.shirt.length],
      pants: w.role === 'cleaner' || w.role === 'entertainer' ? this.staffC[w.role] : w.role === 'mechanic' ? this.navy : this.pants[id % this.pants.length],
      skin: this.skin[(w.skin ?? id) % this.skin.length],
      style,
      hair: style === 3 ? (w.role === 'cleaner' ? this.navy : this.capC[id % this.capC.length]) : this.hairC[(id * 3) % this.hairC.length],
    };
  }

  push(mesh, key, m, color) {
    const i = this.n[key]++;
    mesh.setMatrixAt(i, m);
    if (color) mesh.setColorAt(i, color);
    return i;
  }
  limb(mesh, key, px, py, angle, color) {
    this.L.makeRotationX(angle); this.L.setPosition(px, py, 0);
    this.out.multiplyMatrices(this.M, this.L);
    this.push(mesh, key, this.out, color);
    return this.out;
  }

  // one standing (or walking, or sitting on a bench) person
  person(w, x, y, z, dir, pose, t) {
    if (this.n.legs >= MAXP * 2) return;
    const L = this.look(w);
    // stride from how far they really moved since the last frame
    let st = this.walk.get(w.id);
    if (!st) { st = { x, z, ph: (w.id * 1.7) % 6.28, amt: 0 }; this.walk.set(w.id, st); }
    const d = Math.hypot(x - st.x, z - st.z);
    st.x = x; st.z = z; st.seen = t;
    const moving = d > 0.0005 && d < 0.5 && pose === 'walk';
    if (moving) st.ph += (d / L.s) * 21;
    st.amt += ((moving ? 1 : 0) - st.amt) * 0.2;
    let swing = Math.sin(st.ph) * 0.62 * st.amt, legA = swing, armA = swing * 0.75, lift = Math.abs(Math.sin(st.ph)) * 0.012 * st.amt;
    let legL = legA, legR = -legA, armL = -armA, armR = armA;
    if (pose === 'sit') { legL = legR = -1.45; armL = armR = -0.35; y += 0.17 - HIP * L.s * 0.92; }
    if (pose === 'idle') { const b = Math.sin(t * 1.3 + w.id) * 0.06; armL = b; armR = -b; }
    if (w.role === 'cleaner' && pose !== 'sit') armR = -0.25 + Math.sin(t * 6 + w.id) * (w.state === 'work' ? 0.35 : 0.05);
    if (w.role === 'mechanic' && pose !== 'sit') armL = 0.05;
    if (w.item && pose !== 'sit') armR = -0.15;
    this.q.setFromAxisAngle(this.up, dir);
    this.p.set(x, y + lift, z);
    this.s.setScalar(L.s);
    this.M.compose(this.p, this.q, this.s);
    this.limb(this.legs, 'legs', 0.04, HIP, legL, L.pants);
    this.limb(this.legs, 'legs', -0.04, HIP, legR, L.pants);
    this.push(this.hips, 'hips', this.M, L.pants);
    this.push(this.torso, 'torso', this.M, L.shirt);
    this.limb(this.arms, 'arms', -SH_X, SHOULDER, armL, L.skin);
    if (w.role === 'mechanic') { this.L.makeRotationX(armL); this.L.setPosition(-SH_X, SHOULDER - 0.2, 0); this.out.multiplyMatrices(this.M, this.L); this.push(this.toolbox, 'toolbox', this.out, this.white); }
    const right = this.limb(this.arms, 'arms', SH_X, SHOULDER, armR, L.skin);
    if (w.role === 'cleaner' || w.item) {
      this.L.makeTranslation(0, -0.2, 0);
      const hand = new THREE.Matrix4().multiplyMatrices(right, this.L);
      if (w.role === 'cleaner') this.push(this.broom, 'broom', hand, this.white);
      else {
        // a balloon floats straight up from the hand whatever the arm does
        const e = hand.elements;
        this.p.set(e[12], e[13], e[14]);
        this.q.setFromAxisAngle(this.up, Math.sin(t * 1.5 + w.id) * 0.3);
        this.out.compose(this.p, this.q, this.s.setScalar(L.s));
        this.push(this.balloon, 'balloon', this.out, this.balloonC[w.id % this.balloonC.length]);
      }
    }
    if (L.style === -2) { this.push(this.mascot, 'mascot', this.M, this.white); return; }
    this.push(this.head, 'head', this.M, L.skin);
    if (L.style === -1) this.push(this.hardhat, 'hardhat', this.M, this.white);
    else if (L.style >= 0) this.push(this.hair[L.style], 'hair' + L.style, this.M, L.hair);
  }

  update(P, t) {
    for (const k of ['legs', 'arms', 'hips', 'torso', 'head', 'hair0', 'hair1', 'hair2', 'hair3', 'hardhat', 'mascot', 'broom', 'toolbox', 'balloon']) this.n[k] = 0;
    for (const g of P.guests) {
      if (g.state === 'ride' || g.state === 'gone') continue;
      const y = g.state === 'in' || g.state === 'out' ? 0 : PATH_Y;
      const pose = g.state === 'sit' ? 'sit' : g.state === 'queue' || g.state === 'shop' ? 'idle' : 'walk';
      this.person(g, g.x, y, g.z, g.dir || 0, pose, t);
    }
    for (const s of P.staff) this.person(s, s.x, PATH_Y, s.z, s.dir || 0, s.state === 'work' ? 'idle' : 'walk', t);
    // forget people who left
    if (Math.floor(t) % 5 === 0 && this.walk.size > P.guests.length + P.staff.length + 50) for (const [id, st] of this.walk) if (t - st.seen > 2) this.walk.delete(id);
    const counts = { legs: this.legs, arms: this.arms, hips: this.hips, torso: this.torso, head: this.head, hardhat: this.hardhat, mascot: this.mascot, broom: this.broom, toolbox: this.toolbox, balloon: this.balloon };
    this.hair.forEach((m, i) => (counts['hair' + i] = m));
    for (const [k, m] of Object.entries(counts)) {
      m.count = this.n[k];
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    }
  }

  // riders in their seats: [{ m: seat's world matrix, g: the guest }]
  seated(list) {
    const S = this.seat;
    let n = 0;
    for (const { m, g } of list) {
      if (n >= MAXS) break;
      const L = this.look(g);
      this.s.setScalar(L.s);
      this.L.makeScale(L.s, L.s, L.s);
      this.out.multiplyMatrices(m, this.L);
      S.pants.setMatrixAt(n, this.out); S.pants.setColorAt(n, L.pants);
      S.torso.setMatrixAt(n, this.out); S.torso.setColorAt(n, L.shirt);
      S.skin.setMatrixAt(n, this.out); S.skin.setColorAt(n, L.skin);
      S.hair.setMatrixAt(n, this.out); S.hair.setColorAt(n, L.style === 3 || L.style === -1 ? L.hair : L.hair);
      n++;
    }
    for (const m of Object.values(S)) { m.count = n; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; }
  }

  // The guest or worker nearest a point on the ground, if one is close.
  nearest(P, x, z, r = 0.6) {
    let best = null, bd = r * r;
    for (const w of [...P.staff, ...P.guests]) {
      if (w.state === 'ride' || w.state === 'gone') continue;
      const d = (w.x - x) ** 2 + (w.z - z) ** 2;
      if (d < bd) { bd = d; best = w; }
    }
    return best;
  }
}
