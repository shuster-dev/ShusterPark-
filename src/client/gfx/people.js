// Hundreds of guests and the staff, as a few instanced meshes: one draw per
// body part however many people there are.
import * as THREE from 'three';
import { MAT, PERSON, SHIRTS, SKINS, PANTS, STAFF_COLORS } from './models.js';

const MAXP = 640;
const PATH_Y = 0.06;

export class People {
  constructor(scene) {
    const mk = (geo) => {
      const m = new THREE.InstancedMesh(geo, MAT, MAXP);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.count = 0; m.castShadow = true; m.frustumCulled = false;
      m.setColorAt(0, new THREE.Color(1, 1, 1));
      scene.add(m);
      return m;
    };
    this.legs = mk(PERSON.legs);
    this.body = mk(PERSON.body);
    this.head = mk(PERSON.head);
    this.hat = mk(PERSON.hat);
    this.balloon = mk(PERSON.balloon);
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.p = new THREE.Vector3(); this.s = new THREE.Vector3(1, 1, 1);
    this.up = new THREE.Vector3(0, 1, 0); this.c = new THREE.Color();
    this.shirt = SHIRTS.map((x) => new THREE.Color(x));
    this.skin = SKINS.map((x) => new THREE.Color(x));
    this.pants = PANTS.map((x) => new THREE.Color(x));
    this.staffC = Object.fromEntries(Object.entries(STAFF_COLORS).map(([k, v]) => [k, new THREE.Color(v)]));
    this.balloonC = [0xe63946, 0xffd166, 0x06d6a0, 0x118ab2, 0xef476f, 0x8e7dbe].map((x) => new THREE.Color(x));
  }

  put(mesh, i, x, y, z, dir, color) {
    this.q.setFromAxisAngle(this.up, dir);
    this.p.set(x, y, z);
    this.m.compose(this.p, this.q, this.s);
    mesh.setMatrixAt(i, this.m);
    if (color) mesh.setColorAt(i, color);
  }

  update(P, t) {
    let n = 0, nh = 0, nb = 0;
    const draw = (w, y, dir, shirt, skin, pants) => {
      if (n >= MAXP) return;
      this.put(this.legs, n, w.x, y, w.z, dir, pants);
      this.put(this.body, n, w.x, y, w.z, dir, shirt);
      this.put(this.head, n, w.x, y, w.z, dir, skin);
      n++;
    };
    for (const g of P.guests) {
      if (g.state === 'ride' || g.state === 'gone') continue;
      let y = g.state === 'in' || g.state === 'out' ? 0 : PATH_Y;
      const walking = g.state === 'walk' || g.state === 'in' || g.state === 'out';
      if (walking) y += Math.abs(Math.sin(t * 9 + g.id)) * 0.025;
      if (g.state === 'sit') y += 0.05;
      const dir = g.state === 'queue' ? (g.id % 7) * 0.9 : g.dir;
      draw(g, y, dir, this.shirt[g.shirt % 12], this.skin[g.skin % 4], this.pants[g.id % 4]);
      if (g.item && nb < MAXP) {
        this.put(this.balloon, nb, g.x, y + Math.sin(t * 2 + g.id) * 0.02, g.z, dir, this.balloonC[g.id % 6]);
        nb++;
      }
    }
    for (const s of P.staff) {
      const y = PATH_Y + (s.state === 'walk' ? Math.abs(Math.sin(t * 9 + s.id)) * 0.025 : 0);
      const col = this.staffC[s.role];
      draw(s, y, s.dir || 0, col, this.skin[s.id % 4], this.pants[0]);
      if (nh < MAXP) { this.put(this.hat, nh, s.x, y, s.z, s.dir || 0, col); nh++; }
    }
    for (const [mesh, k] of [[this.legs, n], [this.body, n], [this.head, n], [this.hat, nh], [this.balloon, nb]]) {
      mesh.count = k;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
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
