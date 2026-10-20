// The game: a park, the 3D world that shows it, the screen around it, and
// the clock that runs them together. Saves to this browser by itself.
import { Park } from '../sim/park.js';
import { World } from './gfx/world.js';
import { Input } from './input.js';
import { UI } from './ui.js';

const SAVE = 'shusterpark-save-v1';
const SETTINGS = 'shusterpark-settings';
const $ = (id) => document.getElementById(id);

const settings = (() => { try { return JSON.parse(localStorage.getItem(SETTINGS)) || {}; } catch { return {}; } })();

const game = {
  park: null, world: null, ui: null, speed: 1, now: 0, lastSave: 0, settings,
  setSpeed(s) { this.speed = s; this.ui.hud(); },
  save() {
    try { localStorage.setItem(SAVE, JSON.stringify(this.park.toJSON())); this.lastSave = this.now; }
    catch (e) { console.warn('save failed', e); }
  },
  saveSettings() { try { localStorage.setItem(SETTINGS, JSON.stringify({ quality: this.world.quality, tutorial: settings.tutorial })); } catch {} },
  newPark() {
    this.park = new Park();
    this.world.target.set(24.5, 0, 39); this.world.yaw = 0; this.world.dist = 26; this.world.pitch = 0.92;
    this.speed = 1;
    this.save();
  },
};

function loadSaved() {
  try {
    const raw = localStorage.getItem(SAVE);
    if (!raw) return null;
    return Park.fromJSON(JSON.parse(raw));
  } catch (e) { console.warn('bad save', e); return null; }
}

const canvas = $('game');
game.world = new World(canvas, settings.quality || 'auto');
const saved = loadSaved();
game.park = saved || new Park();
game.ui = new UI(game);
game.input = new Input(canvas, game.world, {
  paints: () => game.ui.paints(),
  paintStart: (x, y) => game.ui.paintStart(x, y),
  paintMove: (x, y) => game.ui.paintMove(x, y),
  paintEnd: () => game.ui.paintEnd(),
  paintCancel: () => game.ui.paintCancel(),
  tap: (x, y, t) => game.ui.tap(x, y, t),
  hover: (x, y) => game.ui.hover(x, y),
  moved: () => { game.ui.camGoal = null; }, // the player took the camera
  rotate: () => game.ui.rotate(),
  escape: () => game.ui.escape(),
  togglePause: () => game.setSpeed(game.speed ? 0 : (game.prevSpeed || 1)),
  speed: (s) => game.setSpeed(s),
});
const setSpeed = game.setSpeed.bind(game);
game.setSpeed = (s) => { if (game.speed) game.prevSpeed = game.speed; setSpeed(s); };

// the front door
const paused = { on: true };
$('btn-continue').classList.toggle('hidden', !saved);
$('btn-new').textContent = saved ? 'פארק חדש' : 'בואו נבנה פארק!';
$('btn-new').classList.toggle('main', !saved);
$('start').classList.remove('hidden');
game.start = (fresh) => { if (fresh) game.newPark(); $('start').classList.add('hidden'); paused.on = false; };
$('btn-continue').onclick = () => game.start(false);
// asked on the page itself: some browsers and app views never show confirm()
$('btn-new').onclick = () => (saved ? game.ui.confirm('להתחיל פארק חדש?', 'הפארק השמור יימחק', 'start-new') : game.start(true));
if (new URLSearchParams(location.search).has('play')) { $('start').classList.add('hidden'); paused.on = false; }

addEventListener('resize', () => game.world.resize());
document.addEventListener('visibilitychange', () => { if (document.hidden) game.save(); });
addEventListener('pagehide', () => game.save());

// quality that steps down by itself when the phone struggles
let slowFor = 0;
function autoQuality(dt) {
  const W = game.world;
  if (W.quality !== 'auto') return;
  if (dt > 1 / 32) slowFor += dt; else slowFor = Math.max(0, slowFor - dt * 0.5);
  if (slowFor > 4 && W.level !== 'low') {
    slowFor = 0;
    const next = W.level === 'high' ? 'medium' : 'low';
    W.setQuality(next); W.quality = 'auto'; W.level = next;
    const dpr = Math.min(window.devicePixelRatio || 1, next === 'medium' ? 1.6 : 1);
    W.renderer.setPixelRatio(dpr); W.renderer.shadowMap.enabled = next !== 'low'; W.sun.castShadow = next !== 'low';
    W.resize();
  }
}

let last = performance.now();
function loop(ts) {
  const dt = Math.min(0.1, (ts - last) / 1000);
  last = ts;
  game.now += dt;
  const P = game.park;
  if (!paused.on && game.speed > 0) {
    let left = dt * game.speed;
    while (left > 1e-6) { const s = Math.min(0.1, left); P.tick(s); left -= s; }
  }
  game.input.step(dt);
  game.ui.frame(dt);
  game.world.frame(P, dt, game.now);
  if (!paused.on && game.now - game.lastSave > 30) game.save();
  autoQuality(dt);
  requestAnimationFrame(loop);
}
game.ui.hud();
requestAnimationFrame(loop);
window.__game = game; // for the browser tests
