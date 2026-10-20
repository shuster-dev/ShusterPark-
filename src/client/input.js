// Fingers and mouse on the park. One finger drags the map (or paints paths
// when the path tool is on), two fingers move, pinch-zoom and twist it, a
// short touch is a tap. On a computer: drag to move, right-drag to turn,
// wheel to zoom, and the keyboard.
import * as THREE from 'three';

export class Input {
  constructor(canvas, world, h) {
    this.c = canvas; this.w = world; this.h = h;
    this.pts = new Map();
    this.paint = false;
    this.gesture = null;
    canvas.addEventListener('pointerdown', (e) => this.down(e));
    addEventListener('pointermove', (e) => this.move(e));
    addEventListener('pointerup', (e) => this.up(e));
    addEventListener('pointercancel', (e) => this.up(e, true));
    canvas.addEventListener('wheel', (e) => { e.preventDefault(); this.w.dist *= Math.exp(e.deltaY * 0.0012); this.w.clampTarget(); }, { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('keydown', (e) => this.key(e));
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    this.keys = new Set();
  }

  down(e) {
    this.c.setPointerCapture?.(e.pointerId);
    const p = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), type: e.pointerType, btn: e.button, moved: 0 };
    this.pts.set(e.pointerId, p);
    if (this.pts.size === 1) {
      const left = e.pointerType !== 'mouse' || e.button === 0;
      if (left && this.h.paints()) { this.paint = true; this.h.paintStart(e.clientX, e.clientY); }
    } else if (this.pts.size === 2) {
      if (this.paint) { this.paint = false; this.h.paintCancel(); }
      this.gesture = this.twoState();
    }
  }

  twoState() {
    const [a, b] = [...this.pts.values()];
    return { mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, d: Math.hypot(a.x - b.x, a.y - b.y), ang: Math.atan2(b.y - a.y, b.x - a.x) };
  }

  grab(x0, y0, x1, y1) {
    const p0 = this.w.groundAt(x0, y0), p1 = this.w.groundAt(x1, y1);
    if (!p0 || !p1) return;
    this.w.target.x += p0.x - p1.x; this.w.target.z += p0.z - p1.z;
    this.w.clampTarget();
    this.w.updateCamera();
  }

  move(e) {
    const p = this.pts.get(e.pointerId);
    if (!p) { if (e.pointerType === 'mouse' && e.target === this.c) this.h.hover(e.clientX, e.clientY); return; }
    const px = p.x, py = p.y;
    p.x = e.clientX; p.y = e.clientY;
    p.moved = Math.max(p.moved, Math.hypot(p.x - p.sx, p.y - p.sy));
    if (this.pts.size === 2) {
      const g = this.twoState(), o = this.gesture;
      if (o) {
        if (g.d > 10 && o.d > 10) this.w.dist *= o.d / g.d;
        let da = g.ang - o.ang;
        if (da > Math.PI) da -= Math.PI * 2; if (da < -Math.PI) da += Math.PI * 2;
        this.w.yaw += da;
        this.w.clampTarget(); this.w.updateCamera();
        this.grab(o.mx, o.my, g.mx, g.my);
      }
      this.gesture = g;
      return;
    }
    if (this.paint) { this.h.paintMove(e.clientX, e.clientY); return; }
    if (p.type === 'mouse' && (p.btn === 2 || p.btn === 1)) {
      this.w.yaw -= (p.x - px) * 0.008;
      this.w.pitch += (p.y - py) * 0.004;
      this.w.clampTarget();
      return;
    }
    if (p.moved > 6) this.grab(px, py, p.x, p.y);
    if (p.type === 'mouse') this.h.hover(e.clientX, e.clientY);
  }

  up(e, cancel) {
    const p = this.pts.get(e.pointerId);
    if (!p) return;
    this.pts.delete(e.pointerId);
    if (this.pts.size < 2) this.gesture = null;
    if (this.paint && this.pts.size === 0) {
      this.paint = false;
      if (cancel) this.h.paintCancel(); else this.h.paintEnd(p.moved < 8 ? { x: e.clientX, y: e.clientY } : null);
      return;
    }
    if (!cancel && p.moved < 8 && performance.now() - p.t < 600 && (p.type !== 'mouse' || p.btn === 0) && this.pts.size === 0) this.h.tap(e.clientX, e.clientY, p.type);
  }

  key(e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    this.keys.add(e.code);
    const k = e.code;
    if (k === 'KeyQ') this.w.yaw += Math.PI / 4;
    else if (k === 'KeyE') this.w.yaw -= Math.PI / 4;
    else if (k === 'KeyR') this.h.rotate();
    else if (k === 'Escape') this.h.escape();
    else if (k === 'Space') { e.preventDefault(); this.h.togglePause(); }
    else if (k === 'Digit1') this.h.speed(1);
    else if (k === 'Digit2') this.h.speed(2);
    else if (k === 'Digit3') this.h.speed(4);
    else if (k === 'Equal' || k === 'NumpadAdd') this.w.dist *= 0.85;
    else if (k === 'Minus' || k === 'NumpadSubtract') this.w.dist *= 1.18;
    this.w.clampTarget();
  }

  // held arrow keys / WASD scroll the map
  step(dt) {
    let fx = 0, fz = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) fz -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) fz += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) fx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) fx += 1;
    if (!fx && !fz) return;
    const s = this.w.dist * 0.9 * dt, y = this.w.yaw;
    const f = new THREE.Vector3(-Math.sin(y), 0, -Math.cos(y)), r = new THREE.Vector3(Math.cos(y), 0, -Math.sin(y));
    this.w.target.addScaledVector(f, -fz * s).addScaledVector(r, fx * s);
    this.w.clampTarget();
  }
}
