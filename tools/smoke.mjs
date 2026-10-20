// The game in a real browser, the way a player meets it: the front door, a
// new park, paths, rides, stalls, a roller coaster, guests walking about and
// the panels — on a phone held upright and on a computer. Screenshots go to
// shots/, and no page errors are allowed. `npm run test:browser`
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const PORT = 4100 + Math.floor(Math.random() * 300);
const URL = `http://127.0.0.1:${PORT}/`;
const OUT = process.env.SHOTS || 'shots';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
fs.mkdirSync(OUT, { recursive: true });
let pass = 0, fail = 0;
const ok = (name, cond, info) => {
  if (cond) { pass++; console.log('  ok  ', name); } else { fail++; console.log('  FAIL', name, info === undefined ? '' : JSON.stringify(info).slice(0, 300)); }
};

const srv = spawn(process.execPath, ['tools/serve.mjs'], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'pipe'] });
let log = '';
srv.stdout.on('data', (d) => (log += d));
for (let i = 0; i < 50 && !log.includes('listening'); i++) await wait(100);

const CHROME = ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome', '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'].find((p) => fs.existsSync(p));
const browser = await chromium.launch({ executablePath: CHROME, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });

// builds a small park through the same calls the buttons make
function buildPark() {
  const g = window.__game, P = g.park, gx = 24;
  const must = (r, w) => { if (r && (typeof r === 'string' || r.error)) throw new Error(w + ': ' + (r.error || r)); };
  P.cash += 30000;
  const pp = (x, z) => { const r = P.placePath(x, z); if (r && r !== 'כבר יש שביל') throw new Error(`path ${x},${z}: ${r}`); };
  for (let z = 40; z >= 26; z--) pp(gx, z);
  for (let x = 16; x <= 34; x++) pp(x, 34);
  for (let z = 26; z <= 33; z++) { pp(16, z); pp(34, z); }
  for (let x = 17; x <= 33; x++) pp(x, 26);
  must(P.place('ride', 'carousel', 20, 35, 0), 'carousel');
  must(P.place('ride', 'ferris', 26, 35, 0), 'ferris');
  must(P.place('ride', 'teacups', 17, 30, 0), 'teacups');
  must(P.place('ride', 'ship', 29, 30, 0), 'ship');
  must(P.place('ride', 'tower', 25, 24, 0), 'tower');
  must(P.place('ride', 'bumper', 18, 22, 0), 'bumper');
  must(P.place('shop', 'burger', 23, 38, 0), 'burger');
  must(P.place('shop', 'drinks', 25, 38, 0), 'drinks');
  must(P.place('shop', 'icecream', 23, 31, 0), 'ice');
  must(P.place('shop', 'toilets', 25, 31, 0), 'wc');
  must(P.place('shop', 'balloons', 23, 28, 0), 'balloons');
  for (let z = 27; z <= 39; z += 3) { must(P.placeAddon('bench', gx, z), 'bench'); must(P.placeAddon('lamp', gx, z + 1), 'lamp'); }
  must(P.placeAddon('bin', 20, 34), 'bin');
  for (let k = 0; k < 6; k++) P.place('scenery', ['oak', 'pine', 'palm', 'bush', 'flowers', 'statue'][k], 27 + k, 28, 0);
  must(P.place('scenery', 'fountain', 20, 28, 0), 'fountain');
  for (let k = 0; k < 8; k++) P.place('scenery', k % 2 ? 'oak' : 'pine', 12 + (k % 4), 36 + Math.floor(k / 4), 0);
  P.hire('cleaner'); P.hire('mechanic'); P.hire('entertainer');
  // a coaster east of the park
  const r = P.startCoaster(30, 20, 1); must(r, 'station');
  for (const t of ['straight', 'lift', 'lift', 'lift', 'lift', 'lift', 'lift', 'straight', 'left', 'straight', 'steepDown', 'steepDown', 'steepDown', 'down', 'straight', 'loop', 'straight', 'left', 'up', 'down', 'straight', 'left']) must(P.addPiece(r.id, t), 'piece ' + t);
  must(P.finishTrack(r.id), 'finish');
  const run = P.testCoaster(r.id); if (!run.ok) throw new Error(run.reason);
  P.editCoaster(r.id, false); must(P.setOpen(r.id, true), 'open');
  for (let z = 21; z <= 25; z++) pp(31, z);
  // let a few months pass
  for (let k = 0; k < 1800; k++) P.tick(0.1);
  return { guests: P.guests.length, cash: P.cash, coaster: r.id, rides: P.rides().length, exc: run.exc };
}

async function run(label, viewport, mobile) {
  console.log(`\n${label}`);
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  page.setDefaultTimeout(30000);
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|ERR_|net::/.test(m.text())) errors.push(m.text()); });
  const snap = (n) => page.screenshot({ path: `${OUT}/${label}-${n}.png` });
  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForSelector('#btn-new');
  await wait(800);
  await snap('1-door');
  ok('the front door shows', await page.isVisible('#start'));
  await page.click('#btn-new');
  await wait(1200);
  await snap('2-empty');
  ok('a new park: the gate path is there', await page.evaluate(() => window.__game.park.path.reduce((a, b) => a + b, 0) === 7));
  ok('the hint says to start with a path', (await page.textContent('#hint')).includes('שביל'));
  // the path tool by touch/mouse: drag north from the gate path
  await page.click('[data-tool="path"]');
  const box = await page.evaluate(() => {
    const W = window.__game.world, v = new (W.camera.position.constructor)(24.5, 0, 40.5).project(W.camera), r = W.canvas.getBoundingClientRect();
    const v2 = new (W.camera.position.constructor)(24.5, 0, 37.5).project(W.camera);
    return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height, x2: r.left + (v2.x + 1) / 2 * r.width, y2: r.top + (1 - v2.y) / 2 * r.height };
  });
  if (mobile) {
    // a synthetic drag through CDP touch events
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x, y: box.y }] });
    for (let k = 1; k <= 6; k++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + (box.x2 - box.x) * k / 6, y: box.y + (box.y2 - box.y) * k / 6 }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  } else {
    await page.mouse.move(box.x, box.y); await page.mouse.down();
    for (let k = 1; k <= 6; k++) await page.mouse.move(box.x + (box.x2 - box.x) * k / 6, box.y + (box.y2 - box.y) * k / 6);
    await page.mouse.up();
  }
  await wait(400);
  const paths = await page.evaluate(() => window.__game.park.path.reduce((a, b) => a + b, 0));
  ok('dragging the path tool lays path', paths > 7, paths);
  await snap('3-path');
  await page.click('[data-tool="path"]');
  await page.click('#act [data-act="tool-off"]').catch(() => {});
  // the ride picker
  await page.click('[data-tool="rides"]');
  await wait(300);
  await snap('4-rides-picker');
  ok('the ride picker lists six rides', (await page.$$('#sh-body .card')).length === 6);
  await page.click('#sh-x');
  // a whole park
  const built = await page.evaluate(buildPark);
  ok('built a park and ran it', built.guests > 20 && built.rides === 7, built);
  await page.evaluate((d) => { const W = window.__game.world; W.target.set(28, 0, 31); W.dist = d; W.yaw = 0.5; }, mobile ? 34 : 28);
  await wait(1500);
  await snap('5-park');
  // tap a ride for its panel
  await page.evaluate(() => { const g = window.__game; const o = g.park.rides().find((r) => r.kind === 'carousel'); g.ui.openPanel({ k: 'obj', id: o.id }); });
  await wait(400);
  await snap('6-ride-panel');
  ok('the ride panel shows a price', (await page.textContent('#sh-body')).includes('מחיר'));
  // the coaster panel
  await page.evaluate((id) => window.__game.ui.openPanel({ k: 'obj', id }), built.coaster);
  await wait(300);
  await snap('7-coaster-panel');
  ok('the coaster panel shows its speed', (await page.textContent('#sh-body')).includes('קמ״ש'));
  // a guest
  await page.evaluate(() => { const g = window.__game; const gu = g.park.guests.find((x) => x.state === 'walk'); g.ui.openPanel({ k: 'guest', id: gu.id }); });
  await wait(300);
  await snap('8-guest');
  ok('a guest panel', (await page.textContent('#sh-body')).includes('שמחה'));
  // money and the park
  await page.evaluate(() => window.__game.ui.toolButton('finance'));
  await wait(300); await snap('9-finance');
  await page.evaluate(() => window.__game.ui.toolButton('park'));
  await wait(300); await snap('10-parkpanel');
  await page.evaluate(() => window.__game.ui.toolButton('staff'));
  await wait(300); await snap('11-staff');
  // the coaster builder
  await page.evaluate((id) => { const g = window.__game; g.ui.closePanel(); const b = document.createElement('button'); b.dataset.act = 'edit-coaster'; b.dataset.arg = String(id); g.ui.act({ target: b }); }, built.coaster);
  await wait(800);
  await snap('12-builder');
  ok('the builder bar is up', await page.isVisible('#coaster'));
  await page.evaluate(() => window.__game.ui.finishBuilder());
  // a new coaster: station placement ghost
  await page.evaluate(() => { const g = window.__game; g.ui.toolButton('coaster'); });
  await wait(300); await snap('13-coaster-picker');
  await page.evaluate(() => { window.__game.park.cash += 20000; });
  await page.click('#sh-body [data-act="new-coaster"]');
  await page.evaluate(() => { const W = window.__game.world; W.target.set(10, 0, 20); W.dist = 22; });
  await wait(200);
  const sp = await page.evaluate(() => {
    const W = window.__game.world; W.updateCamera();
    const v = new (W.camera.position.constructor)(10.5, 0, 20.5).project(W.camera), r = W.canvas.getBoundingClientRect();
    return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height };
  });
  if (mobile) await page.touchscreen.tap(sp.x, sp.y); else await page.mouse.move(sp.x, sp.y);
  await wait(500);
  await snap('14-station-ghost');
  if (mobile) { await page.click('#act [data-act="build"]'); } else await page.mouse.click(sp.x, sp.y);
  await wait(500);
  ok('placing a station opens the builder', await page.isVisible('#coaster'));
  for (const t of ['straight', 'lift', 'lift', 'lift', 'straight', 'right']) await page.click(`#coaster [data-arg="${t}"]`);
  await page.click('#coaster [data-act="finish-track"]');
  await wait(300);
  const closed = await page.evaluate(() => { const g = window.__game, o = g.park.objects.get(g.ui.tool?.id); return { done: !!o && o.pieces.length > 4 && !document.querySelector('#coaster [data-act="test"]').disabled, at: o && o.pieces[0], n: o && o.pieces.length, toast: document.getElementById('toasts').textContent }; });
  ok('the builder closes the circuit by itself', closed.done, closed);
  await page.click('#coaster [data-act="test"]');
  await wait(1200);
  await snap('15-test-result');
  ok('the test result shows', (await page.textContent('#sh-title')).includes('בדיקה'));
  // save and reload: the park comes back
  await page.evaluate(() => window.__game.save());
  const before = await page.evaluate(() => ({ g: window.__game.park.guests.length, o: window.__game.park.objects.size }));
  await page.reload({ waitUntil: 'load' });
  await page.waitForSelector('#btn-continue:not(.hidden)');
  await page.click('#btn-continue');
  await wait(1000);
  const after = await page.evaluate(() => ({ g: window.__game.park.guests.length, o: window.__game.park.objects.size }));
  ok('saved and loaded the same park', before.o === after.o && Math.abs(before.g - after.g) <= 3, { before, after });
  await snap('16-reloaded');
  ok('no page errors', errors.length === 0, errors);
  await ctx.close();
}

try {
  await run('phone', { width: 390, height: 844 }, true);
  await run('desktop', { width: 1280, height: 800 }, false);
} catch (e) { fail++; console.log('  FAIL', e.message); }
await browser.close();
srv.kill();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
