// The park on screen. It reads the sim and keeps the scene in step: paths
// and scenery are rebuilt when the land changes, rides are added and removed
// as they're built, people and trains move every frame.
import * as THREE from 'three';
import { MAP, GATE, SCENERY, ADDON_BY_ID, ADDONS, RIDES, SHOPS, COASTER, STEP } from '../../sim/catalog.js';
import { idx, tx, tz, inMap, NB } from '../../sim/grid.js';
import { endState, nextState, DX, DZ } from '../../sim/track.js';
import { MAT, MATTE, GHOST, BULB_A, BULB_B, C, RAINBOW, mesh, merge, box, cylS, ballS, rideModel, shopModel, boothModel, sceneryGeometry, addonGeometry, gateModel, carGeometry, WATER_JET, sign } from './models.js';
import { trackMesh, Train, endMarker, TRACK_Y } from './coaster.js';
import { People } from './people.js';

const PATH_Y = 0.06;

// Grass with a little noise in it, and paving stones for the paths, drawn once.
function grassTexture(base, rep) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  const x = cv.getContext('2d');
  x.fillStyle = base; x.fillRect(0, 0, 256, 256);
  let seed = 3;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let k = 0; k < 2600; k++) {
    const l = r() < 0.5 ? 255 : 0;
    x.fillStyle = `rgba(${l},${l},${l},${0.03 + r() * 0.05})`;
    x.fillRect(r() * 256, r() * 256, 1 + r() * 3, 1 + r() * 5);
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function paverTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = '#c9ad84'; x.fillRect(0, 0, 128, 128);
  const tones = ['#ead3ad', '#e2c79c', '#f0dcba', '#dcc093'];
  for (let row = 0; row < 4; row++) for (let col = -1; col < 3; col++) {
    const off = row % 2 ? 21 : 0;
    x.fillStyle = tones[(row * 3 + col + 4) % tones.length];
    x.fillRect(col * 43 + off + 2, row * 32 + 2, 39, 28);
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export class World {
  constructor(canvas, quality = 'auto') {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9fd7ff);
    this.scene.fog = new THREE.Fog(0x9fd7ff, 70, 150);
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.3, 400);
    this.target = new THREE.Vector3(GATE.x + 0.5, 0, GATE.z - 8);
    this.yaw = 0; this.pitch = 0.92; this.dist = 26;

    const hemi = new THREE.HemisphereLight(0xdff1ff, 0x5d7f45, 1.15);
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xfff4e0, 1.9);
    this.sun.shadow.camera.left = -28; this.sun.shadow.camera.right = 28; this.sun.shadow.camera.top = 28; this.sun.shadow.camera.bottom = -28;
    this.sun.shadow.camera.near = 1; this.sun.shadow.camera.far = 120;
    this.sun.shadow.bias = -0.0008; this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.sun, this.sun.target);

    this.buildLand();
    this.people = new People(this.scene);
    this.views = new Map();
    this.layer = new THREE.Group(); this.scene.add(this.layer);
    this.dirtLayer = new THREE.Group(); this.scene.add(this.dirtLayer);
    this.ghost = new THREE.Group(); this.scene.add(this.ghost);
    this.marks = this.tileMarks(); this.scene.add(this.marks);
    this.end = endMarker(); this.end.visible = false; this.scene.add(this.end);
    this.sel = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 6, 32), new THREE.MeshBasicMaterial({ color: 0xffd166 }));
    this.sel.rotation.x = Math.PI / 2; this.sel.visible = false; this.scene.add(this.sel);
    this.grid = this.gridLines(); this.grid.visible = false; this.scene.add(this.grid);
    this.ray = new THREE.Raycaster();
    this.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.seen = { land: -1, objects: -1, dirt: -1 };
    this.jets = [];
    this.setQuality(quality);
    this.resize();
  }

  setQuality(q) {
    this.quality = q;
    const mobile = matchMedia('(pointer: coarse)').matches;
    const level = q === 'auto' ? (mobile ? 'medium' : 'high') : q;
    this.level = level;
    const dpr = window.devicePixelRatio || 1;
    this.renderer.setPixelRatio(Math.min(dpr, level === 'high' ? 2 : level === 'medium' ? 1.6 : 1));
    const shadows = level !== 'low';
    this.renderer.shadowMap.enabled = shadows;
    this.sun.castShadow = shadows;
    this.sun.shadow.mapSize.set(level === 'high' ? 2048 : 1024, level === 'high' ? 2048 : 1024);
    if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    // hundreds of people casting shadows is the one thing a phone feels
    if (this.people) for (const m of [...this.people.all, ...Object.values(this.people.seat)]) m.castShadow = level === 'high';
    this.scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; });
    this.resize();
  }

  resize() {
    const w = this.canvas.clientWidth || innerWidth, h = this.canvas.clientHeight || innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.fov = w < h ? 52 : 40;
    this.camera.updateProjectionMatrix();
  }

  // ------------------------------------------------------------ the land
  buildLand() {
    const outer = new THREE.Mesh(new THREE.PlaneGeometry(MAP + 160, MAP + 160), new THREE.MeshLambertMaterial({ map: grassTexture('#6aa84f', 52) }));
    outer.rotation.x = -Math.PI / 2; outer.position.set(MAP / 2, -0.02, MAP / 2); outer.receiveShadow = true;
    this.scene.add(outer);
    const inner = new THREE.Mesh(new THREE.PlaneGeometry(MAP, MAP), new THREE.MeshLambertMaterial({ map: grassTexture('#86c45e', 12) }));
    inner.rotation.x = -Math.PI / 2; inner.position.set(MAP / 2, 0, MAP / 2); inner.receiveShadow = true;
    this.scene.add(inner);
    // the road, a paved plaza in front of the gate, and car parks either side
    const gx = GATE.x + 0.5;
    const road = [box(MAP + 160, 0.02, 3, 0x4f5459, { x: MAP / 2, y: 0, z: MAP + 6.5 })];
    for (let x = -70; x < MAP + 70; x += 3) road.push(box(1.4, 0.022, 0.12, 0xf8f4ec, { x, y: 0.001, z: MAP + 6.5 }));
    road.push(box(6, 0.024, 4.8, 0xe8d3ae, { x: gx, y: 0.001, z: MAP + 2.5 }));
    for (let k = 0; k < 7; k++) road.push(box(0.12, 0.026, 4.8, 0xd65a5a, { x: gx - 2.7 + k * 0.9, y: 0.002, z: MAP + 2.5 }));
    for (const side of [-1, 1]) {
      const cx = gx + side * 9.5;
      road.push(box(12, 0.02, 4.4, 0x5d6268, { x: cx, y: 0.001, z: MAP + 2.6 }));
      for (let k = 0; k <= 12; k++) road.push(box(0.05, 0.023, 1.6, 0xf8f4ec, { x: cx - 6 + k, y: 0.002, z: MAP + 1.4 }), box(0.05, 0.023, 1.6, 0xf8f4ec, { x: cx - 6 + k, y: 0.002, z: MAP + 3.8 }));
    }
    const r = mesh(merge(road), MATTE); r.castShadow = false; this.scene.add(r);
    // parked cars, some gaps, in many colours
    let seed = 11;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const cars = [], palette = [...RAINBOW, 0xffffff, 0x2b2f36, 0x9aa4ae];
    for (const side of [-1, 1]) for (const row of [MAP + 1.4, MAP + 3.8]) for (let k = 0; k < 12; k++) {
      if (rnd() < 0.3) continue;
      const g = carGeometry(palette[Math.floor(rnd() * palette.length)]);
      g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(gx + side * 9.5 - 5.5 + k, 0, row), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2 + (rnd() - 0.5) * 0.1), new THREE.Vector3(1, 1, 1)));
      cars.push(g);
    }
    this.scene.add(mesh(merge(cars)));
    // a white picket fence with red posts every few tiles, a gap for the gate
    const f = [];
    const post = (x, z, big) => f.push(big ? cylS(0.06, 0.06, 0.62, C.red, { x, y: 0.31, z }, 8) : box(0.05, 0.42, 0.05, C.white, { x, y: 0.21, z }), ...(big ? [ballS(0.07, C.yellow, { x, y: 0.66, z }, 8, 6)] : []));
    for (let k = 0; k <= MAP; k++) {
      const big = k % 4 === 0;
      post(k, 0, big); post(0, k, big); post(MAP, k, big);
      if (Math.abs(k - gx) > 2.2) post(k, MAP, big);
    }
    f.push(box(MAP, 0.05, 0.035, C.white, { x: MAP / 2, y: 0.34, z: 0 }), box(MAP, 0.05, 0.035, C.white, { x: MAP / 2, y: 0.16, z: 0 }));
    for (const x of [0, MAP]) f.push(box(0.035, 0.05, MAP, C.white, { x, y: 0.34, z: MAP / 2 }), box(0.035, 0.05, MAP, C.white, { x, y: 0.16, z: MAP / 2 }));
    const gl = gx - 2.2, gr = gx + 2.2;
    for (const [a, b] of [[0, gl], [gr, MAP]]) f.push(box(b - a, 0.05, 0.035, C.white, { x: (a + b) / 2, y: 0.34, z: MAP }), box(b - a, 0.05, 0.035, C.white, { x: (a + b) / 2, y: 0.16, z: MAP }));
    const fence = mesh(merge(f)); fence.castShadow = false; this.scene.add(fence);
    const gate = gateModel('שוסטר פארק');
    gate.position.set(GATE.x + 0.5, 0, MAP + 0.1);
    gate.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.scene.add(gate);
    // a wood all around
    seed = 7;
    const trees = { oak: [], pine: [] };
    for (let k = 0; k < 420; k++) {
      const a = rnd() * Math.PI * 2, d = MAP / 2 + 3 + rnd() * 38;
      const x = MAP / 2 + Math.cos(a) * d * 1.05, z = MAP / 2 + Math.sin(a) * d * 1.05;
      if (x > -2 && x < MAP + 2 && z > -2 && z < MAP + 2) continue;
      if (z > MAP + 3 && z < MAP + 10) continue;
      trees[rnd() < 0.5 ? 'oak' : 'pine'].push([x, z, 0.9 + rnd() * 1.1, rnd() * 6]);
    }
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
    for (const [k, list] of Object.entries(trees)) {
      const im = new THREE.InstancedMesh(sceneryGeometry(k), MAT, list.length);
      list.forEach(([x, z, s, r], i) => { q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(s, s, s)); im.setMatrixAt(i, m); });
      im.castShadow = false; this.scene.add(im);
    }
  }

  gridLines() {
    const pts = [];
    for (let k = 0; k <= MAP; k++) { pts.push(k, 0.012, 0, k, 0.012, MAP, 0, 0.012, k, MAP, 0.012, k); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0x2f5d1e, transparent: true, opacity: 0.22 }));
  }

  tileMarks() {
    const g = new THREE.PlaneGeometry(0.94, 0.94); g.rotateX(-Math.PI / 2);
    const m = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.45, depthWrite: false }), 400);
    m.count = 0; m.frustumCulled = false; m.renderOrder = 2;
    m.setColorAt(0, new THREE.Color(1, 1, 1));
    return m;
  }

  // ------------------------------------------------------------ keeping up with the sim
  sync(P) {
    if (this.P !== P) { this.clearViews(); this.P = P; this.seen = { land: -1, objects: -1, dirt: -1 }; }
    if (this.seen.land !== P.rev.land || this.seen.objects !== P.rev.objects) {
      this.buildLayer(P);
      this.seen.land = P.rev.land;
    }
    if (this.seen.objects !== P.rev.objects) { this.syncObjects(P); this.seen.objects = P.rev.objects; }
    if (this.seen.dirt !== P.rev.dirt) { this.buildDirt(P); this.seen.dirt = P.rev.dirt; }
  }

  clearViews() {
    for (const v of this.views.values()) this.scene.remove(v.group);
    this.views.clear();
  }

  // paths, curbs, path furniture and scenery: all instanced, rebuilt together
  buildLayer(P) {
    for (const c of [...this.layer.children]) { this.layer.remove(c); if (c.geometry && c.userData.own) c.geometry.dispose(); }
    this.jets = [];
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3();
    const tiles = [];
    for (let i = 0; i < MAP * MAP; i++) if (P.path[i]) tiles.push(i);
    // path slabs
    const slab = new THREE.BoxGeometry(1, PATH_Y, 1); slab.translate(0, PATH_Y / 2, 0);
    this.paver ||= paverTexture();
    const paths = new THREE.InstancedMesh(slab, new THREE.MeshLambertMaterial({ color: 0xffffff, map: this.paver }), Math.max(1, tiles.length));
    const ca = new THREE.Color(0xffffff), cb = new THREE.Color(0xf4ecdf), cc = new THREE.Color();
    tiles.forEach((i, k) => {
      m.makeTranslation(tx(i) + 0.5, 0, tz(i) + 0.5); paths.setMatrixAt(k, m);
      cc.copy((tx(i) + tz(i)) % 2 ? ca : cb); paths.setColorAt(k, cc);
    });
    paths.count = tiles.length; paths.receiveShadow = true; paths.userData.own = true;
    this.layer.add(paths);
    // curbs on the open sides
    const curbs = [];
    for (const i of tiles) {
      const x = tx(i), z = tz(i);
      NB.forEach(([dx, dz], s) => {
        const nx = x + dx, nz = z + dz;
        if (inMap(nx, nz) && P.path[idx(nx, nz)]) return;
        if (x === GATE.x && z === GATE.z && s === 2) return;
        curbs.push([x + 0.5 + dx * 0.47, z + 0.5 + dz * 0.47, s % 2]);
      });
    }
    const cg = new THREE.BoxGeometry(1, 0.1, 0.06); cg.translate(0, 0.05, 0);
    const curb = new THREE.InstancedMesh(cg, new THREE.MeshLambertMaterial({ color: 0xb59a73 }), Math.max(1, curbs.length));
    curbs.forEach(([x, z, r], k) => { q.setFromAxisAngle(up, r ? Math.PI / 2 : 0); m.compose(v.set(x, 0, z), q, one); curb.setMatrixAt(k, m); });
    curb.count = curbs.length; curb.receiveShadow = true; curb.userData.own = true;
    this.layer.add(curb);
    // benches, bins, lamps: on an open side of the tile when there is one
    const add = { bench: [], bin: [], lamp: [] };
    for (const i of tiles) {
      const k = ADDON_BY_ID[P.addon[i]];
      if (!k) continue;
      const x = tx(i), z = tz(i);
      let side = 1;
      for (let s = 0; s < 4; s++) { const [dx, dz] = NB[s]; if (!inMap(x + dx, z + dz) || !P.path[idx(x + dx, z + dz)]) { side = s; break; } }
      const [dx, dz] = NB[side];
      const off = k === 'lamp' ? 0.42 : 0.36;
      add[k].push([x + 0.5 + dx * off + (k === 'bin' ? dz * 0.3 : 0), z + 0.5 + dz * off + (k === 'bin' ? dx * 0.3 : 0), Math.atan2(-dx, -dz)]);
    }
    for (const [k, list] of Object.entries(add)) {
      if (!list.length) continue;
      const im = new THREE.InstancedMesh(addonGeometry(k), MAT, list.length);
      list.forEach(([x, z, r], j) => { q.setFromAxisAngle(up, r); m.compose(v.set(x, PATH_Y, z), q, one); im.setMatrixAt(j, m); });
      im.castShadow = true; im.receiveShadow = true;
      this.layer.add(im);
    }
    // scenery
    const sc = {};
    for (const o of P.objects.values()) if (o.type === 'scenery') (sc[o.kind] ||= []).push(o);
    for (const [k, list] of Object.entries(sc)) {
      const im = new THREE.InstancedMesh(this.sceneryGeo(k), MAT, list.length);
      list.forEach((o, j) => {
        const s = 0.9 + ((o.id * 37) % 20) / 100;
        q.setFromAxisAngle(up, k === 'fountain' || k === 'flowers' ? 0 : (o.id * 1.3) % 6.28);
        m.compose(v.set(o.x + o.w / 2, 0, o.z + o.d / 2), q, k === 'fountain' || k === 'flowers' ? one : new THREE.Vector3(s, s, s));
        im.setMatrixAt(j, m);
        if (k === 'fountain') {
          const jet = new THREE.Mesh(new THREE.ConeGeometry(0.12, 1, 8, 1, true), WATER_JET);
          jet.position.set(o.x + 1, 0.7, o.z + 1); jet.userData.own = true;
          this.layer.add(jet); this.jets.push(jet);
        }
      });
      im.castShadow = true; im.receiveShadow = true;
      this.layer.add(im);
    }
  }
  sceneryGeo(k) { this.sgeo ||= {}; return (this.sgeo[k] ||= sceneryGeometry(k)); }

  buildDirt(P) {
    for (const c of [...this.dirtLayer.children]) this.dirtLayer.remove(c);
    const bits = [], puke = [];
    for (let i = 0; i < MAP * MAP; i++) {
      if (!P.path[i]) continue;
      for (let k = 0; k < Math.min(4, P.dirt[i]); k++) bits.push([i, k]);
      if (P.vomit[i]) puke.push(i);
    }
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    const h = (i, k, s) => (((i * 9301 + k * 49297 + s * 233) % 233280) / 233280);
    if (bits.length) {
      const g = new THREE.BoxGeometry(0.1, 0.015, 0.07);
      const im = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ color: 0xffffff }), bits.length);
      const cols = [0xffffff, 0xe63946, 0xffd166, 0x9aa4ae].map((x) => new THREE.Color(x));
      bits.forEach(([i, k], j) => {
        q.setFromAxisAngle(up, h(i, k, 1) * 6.28);
        m.compose(v.set(tx(i) + 0.15 + h(i, k, 2) * 0.7, PATH_Y + 0.008, tz(i) + 0.15 + h(i, k, 3) * 0.7), q, one);
        im.setMatrixAt(j, m); im.setColorAt(j, cols[(i + k) % 4]);
      });
      this.dirtLayer.add(im);
    }
    if (puke.length) {
      const g = new THREE.CylinderGeometry(0.16, 0.16, 0.012, 7);
      const im = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ color: 0xa8b52a }), puke.length);
      puke.forEach((i, j) => { m.compose(v.set(tx(i) + 0.3 + h(i, 0, 4) * 0.4, PATH_Y + 0.008, tz(i) + 0.3 + h(i, 0, 5) * 0.4), q.identity(), new THREE.Vector3(1, 1, 0.7 + h(i, 1, 6) * 0.5)); im.setMatrixAt(j, m); });
      this.dirtLayer.add(im);
    }
  }

  syncObjects(P) {
    for (const [id, v] of this.views) {
      if (!P.objects.has(id)) { this.scene.remove(v.group); this.views.delete(id); }
    }
    for (const o of P.objects.values()) {
      if (o.type === 'scenery') continue;
      let v = this.views.get(o.id);
      if (o.type === 'coaster') {
        const key = o.pieces.length + ':' + (o.tested ? 1 : 0) + ':' + o.pieces.at(-1).t;
        if (v && v.key !== key) { this.scene.remove(v.group); v = null; }
        if (!v) {
          const group = new THREE.Group();
          group.add(trackMesh(o, (x, z) => inMap(x, z) && P.path[idx(x, z)]));
          const train = new Train(o);
          group.add(train.group);
          v = { group, train, key, coaster: true };
          this.views.set(o.id, v); this.scene.add(group);
        }
        continue;
      }
      if (!v) {
        const model = o.type === 'ride' ? rideModel(o.kind) : o.type === 'booth' ? boothModel() : shopModel(o.kind);
        model.group.position.set(o.x + o.w / 2, 0, o.z + o.d / 2);
        model.group.rotation.y = -o.rot * Math.PI / 2;
        model.group.traverse((c) => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
        v = { group: model.group, model };
        this.views.set(o.id, v); this.scene.add(model.group);
      }
      if (o.type === 'shop') {
        // turn the counter toward the path
        const acc = P.access.get(o.id) || [];
        if (acc.length) {
          const a = acc[0], dx = tx(a) - o.x, dz = tz(a) - o.z;
          v.group.rotation.y = Math.atan2(dx, dz);
        }
      }
      if (o.type === 'booth') {
        // the windows face whichever long side the path runs along
        const acc = P.access.get(o.id) || [];
        let ax = 0, az = 0;
        for (const a of acc) { ax += tx(a) + 0.5 - (o.x + o.w / 2); az += tz(a) + 0.5 - (o.z + o.d / 2); }
        v.group.rotation.y = o.rot % 2 ? (ax >= 0 ? Math.PI / 2 : -Math.PI / 2) : (az >= 0 ? 0 : Math.PI);
      }
      // a broken ride shows a warning over it
      if (o.queue) {
        if (o.broken && !v.warn) { v.warn = sign('⚠️', 0.7); v.warn.position.y = (RIDES[o.kind]?.h || 6) * 0.25 + 1.4; v.group.add(v.warn); }
        if (!o.broken && v.warn) { v.group.remove(v.warn); v.warn = null; }
      }
    }
  }

  // ------------------------------------------------------------ ghosts & marks
  showTiles(list) {
    const m = new THREE.Matrix4(), c = new THREE.Color();
    const n = Math.min(400, list.length);
    for (let k = 0; k < n; k++) {
      const t = list[k];
      m.makeTranslation(t.x + 0.5, (t.y || 0) + 0.075, t.z + 0.5);
      this.marks.setMatrixAt(k, m);
      this.marks.setColorAt(k, c.set(t.ok ? 0x4ade80 : 0xff4d5e));
    }
    this.marks.count = n;
    this.marks.instanceMatrix.needsUpdate = true;
    if (this.marks.instanceColor) this.marks.instanceColor.needsUpdate = true;
  }
  clearGhost() {
    this.ghost.clear(); this.ghostKey = null; this.marks.count = 0;
  }
  ghostModel(kind, type, x, z, w, d, rot, ok) {
    const key = type + kind + rot;
    if (this.ghostKey !== key) {
      this.ghost.clear(); this.ghostKey = key;
      let g;
      if (type === 'ride') g = rideModel(kind).group;
      else if (type === 'shop') g = shopModel(kind).group;
      else if (type === 'booth') g = boothModel().group;
      else g = new THREE.Mesh(this.sceneryGeo(kind), GHOST);
      g.traverse((c) => { if (c.isMesh) { c.material = GHOST; c.castShadow = false; } });
      g.rotation.y = type === 'booth' ? (rot % 2 ? Math.PI / 2 : 0) : -rot * Math.PI / 2;
      this.ghost.add(g);
    }
    this.ghost.position.set(x + w / 2, 0, z + d / 2);
    const tiles = [];
    for (let dz = 0; dz < d; dz++) for (let dx = 0; dx < w; dx++) tiles.push({ x: x + dx, z: z + dz, ok });
    this.showTiles(tiles);
  }

  // the arrow at the open end of a coaster being built
  showEnd(o) {
    if (!o) { this.end.visible = false; return; }
    const s = endState(o.pieces);
    const y = s.h * STEP + TRACK_Y;
    this.end.visible = true;
    this.end.position.set(s.x + 0.5 - DX[s.d] * 0.5, 0, s.z + 0.5 - DZ[s.d] * 0.5);
    this.end.rotation.y = Math.atan2(DX[s.d], DZ[s.d]);
    this.end.userData.arrow.position.y = y + 0.25;
    this.end.userData.arrow.parent.children[1].position.y = y + 0.25;
    this.end.userData.pole.scale.y = Math.max(0.01, y);
    this.end.userData.pole.position.y = y / 2;
  }
  previewTrain(id, now) { const v = this.views.get(id); if (v && v.train) v.train.preview = now; }

  select(what) { this.selected = what; }

  // ------------------------------------------------------------ camera
  updateCamera() {
    const t = this.target, cp = Math.cos(this.pitch);
    this.camera.position.set(t.x + Math.sin(this.yaw) * cp * this.dist, t.y + Math.sin(this.pitch) * this.dist, t.z + Math.cos(this.yaw) * cp * this.dist);
    this.camera.lookAt(t);
    this.sun.position.set(t.x - 18, 34, t.z + 12);
    this.sun.target.position.copy(t);
    const span = Math.min(40, 12 + this.dist * 0.8);
    const sc = this.sun.shadow.camera;
    if (sc.right !== span) { sc.left = -span; sc.right = span; sc.top = span; sc.bottom = -span; sc.updateProjectionMatrix(); }
  }
  clampTarget() {
    this.target.x = Math.max(-6, Math.min(MAP + 6, this.target.x));
    this.target.z = Math.max(-6, Math.min(MAP + 8, this.target.z));
    this.dist = Math.max(6, Math.min(70, this.dist));
    this.pitch = Math.max(0.45, Math.min(1.35, this.pitch));
  }
  // where a screen point lands on the ground (or at a given height)
  groundAt(cx, cy, y = 0) {
    const r = this.canvas.getBoundingClientRect();
    const v = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(v, this.camera);
    this.plane.constant = -y;
    const p = new THREE.Vector3();
    return this.ray.ray.intersectPlane(this.plane, p) ? p : null;
  }
  // what's under a screen point: a coaster's track (even high up), else the ground tile
  pickCoaster(cx, cy) {
    const r = this.canvas.getBoundingClientRect();
    const v = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(v, this.camera);
    const meshes = [];
    for (const [id, w] of this.views) if (w.coaster) w.group.traverse((c) => { if (c.isMesh) { c.userData.cid = id; meshes.push(c); } });
    const hit = this.ray.intersectObjects(meshes, false)[0];
    return hit ? hit.object.userData.cid : 0;
  }

  // ------------------------------------------------------------ every frame
  frame(P, dt, now) {
    this.sync(P);
    for (const [id, v] of this.views) {
      const o = P.objects.get(id);
      if (!o) continue;
      if (v.train) v.train.update(o, now);
      else v.model.animate(o, now, dt);
      if (v.warn) v.warn.position.y += Math.sin(now * 4) * 0.002;
    }
    for (const j of this.jets) { const s = 0.85 + Math.sin(now * 5 + j.position.x) * 0.15; j.scale.set(1, s, 1); j.position.y = 0.85 + s * 0.4; }
    this.people.update(P, now);
    // riders sit in the seats of whatever is running
    const seated = [];
    for (const [id, v] of this.views) {
      const o = P.objects.get(id);
      if (!o || !o.riders || o.phase !== 'run') continue;
      const seats = v.train ? v.train.seats : v.model.seats;
      if (!seats) continue;
      const n = Math.min(seats.length, o.riders.length);
      for (let k = 0; k < n; k++) {
        const g = P.guestById(o.riders[k]);
        if (!g) continue;
        seats[k].updateWorldMatrix(true, false);
        seated.push({ m: seats[k].matrixWorld, g });
      }
    }
    this.people.seated(seated);
    // the bulbs chase each other
    const on = Math.floor(now * 2.4) % 2 === 0;
    BULB_A.color.setHex(on ? 0xfff6c2 : 0xd9a63a); BULB_B.color.setHex(on ? 0xd9a63a : 0xfff6c2);
    // selection ring
    const s = this.selected;
    if (s && s.kind === 'person') {
      const w = P.guests.find((g) => g.id === s.id) || P.staff.find((g) => g.id === s.id);
      if (w && w.state !== 'ride' && w.state !== 'gone') { this.sel.visible = true; this.sel.scale.setScalar(0.6); this.sel.position.set(w.x, PATH_Y + 0.02, w.z); }
      else this.sel.visible = false;
    } else if (s && s.kind === 'object') {
      const o = P.objects.get(s.id);
      if (o && o.type !== 'coaster') {
        this.sel.visible = true; this.sel.scale.setScalar(Math.max(o.w, o.d) * 1.25);
        this.sel.position.set(o.x + o.w / 2, 0.05, o.z + o.d / 2);
      } else if (o) {
        const p = o.pieces[1];
        this.sel.visible = true; this.sel.scale.setScalar(2.4); this.sel.position.set(p.x + 0.5 + DX[p.d] * 0.5, 0.05, p.z + 0.5 + DZ[p.d] * 0.5);
      } else this.sel.visible = false;
    } else this.sel.visible = false;
    if (this.sel.visible) this.sel.rotation.z = now;
    this.updateCamera();
    this.renderer.render(this.scene, this.camera);
  }
}

export { nextState };
