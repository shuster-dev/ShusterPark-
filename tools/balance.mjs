// A park built the way a player would build it, left to run for two years
// with nobody touching it: does it make money, do guests come and stay
// happy, does the goal look reachable? `npm run balance`
import { Park, idx } from '../src/sim/park.js';
import { GATE, MONTH, GOAL } from '../src/sim/catalog.js';
import { thoughtText } from '../src/sim/guests.js';

export function buildDemo(P, opts = {}) {
  const gx = GATE.x;
  const must = (r, what) => { if (r && (typeof r === 'string' || r.error)) throw new Error(`${what}: ${r.error || r}`); return r; };
  // main street north from the gate, a loop around a plaza
  for (let z = GATE.z - 7; z >= 18; z--) must(P.placePath(gx, z), 'path ' + z);
  for (let x = 12; x <= 36; x++) if (x !== gx) must(P.placePath(x, 30), 'path x ' + x);
  for (let x = 12; x <= 36; x++) if (x !== gx) must(P.placePath(x, 18), 'path x18 ' + x);
  for (let z = 19; z <= 29; z++) { must(P.placePath(12, z), 'w ' + z); must(P.placePath(36, z), 'e ' + z); }
  // rides along the streets
  must(P.place('ride', 'carousel', 20, 31, 0), 'carousel');
  must(P.place('ride', 'teacups', 27, 31, 0), 'teacups');
  must(P.place('ride', 'ferris', 13, 26, 0), 'ferris');
  if (!opts.lean) {
    must(P.place('ride', 'ship', 30, 26, 0), 'ship');
    must(P.place('ride', 'bumper', 17, 14, 0), 'bumper');
  }
  // stalls and toilets
  must(P.place('shop', 'burger', 23, 37, 0), 'burger');
  must(P.place('shop', 'drinks', 25, 37, 0), 'drinks');
  must(P.place('shop', 'toilets', 23, 33, 0), 'toilets');
  must(P.place('shop', 'icecream', 25, 22, 0), 'ice');
  must(P.place('shop', 'pizza', 33, 19, 0), 'pizza');
  must(P.place('shop', 'drinks', 13, 19, 0), 'drinks2');
  // benches and bins along the main street
  for (let z = 20; z <= 44; z += 4) { must(P.placeAddon('bench', gx, z), 'bench'); must(P.placeAddon('bin', gx, z + 2), 'bin'); }
  for (let x = 14; x <= 34; x += 5) if (x !== gx) must(P.placeAddon('bin', x, 30), 'bin x');
  // a few trees
  for (let k = 0; k < 10; k++) P.place('scenery', k % 2 ? 'oak' : 'pine', 26 + (k % 5), 23 + Math.floor(k / 5), 0);
  P.place('scenery', 'fountain', 26, 27, 0);
  // the ticket booth by the gate
  const spot = P.boothSpot(); must(P.place('booth', 'booth', spot.x, spot.z, spot.rot), 'booth');
  // staff
  must(P.hire('cleaner'), 'c1'); must(P.hire('mechanic'), 'm1');
  return P;
}

export function buildCoaster(P) {
  // station east of the park, heading north, track around to the north-east
  const r = P.startCoaster(40, 32, 0);
  if (r.error) throw new Error('coaster: ' + r.error);
  const id = r.id;
  const seq = ['straight', 'lift', 'lift', 'lift', 'lift', 'lift', 'lift', 'straight', 'right', 'straight', 'steepDown', 'steepDown', 'steepDown', 'down', 'straight', 'right', 'up', 'down', 'straight', 'right'];
  for (const t of seq) { const e = P.addPiece(id, t); if (e) throw new Error(`piece ${t}: ${e}`); }
  const f = P.finishTrack(id); if (f) throw new Error('finish: ' + f);
  const run = P.testCoaster(id); if (!run.ok) throw new Error('test: ' + run.reason);
  P.editCoaster(id, false); P.setOpen(id, true);
  // a path to its station
  for (let x = 37; x <= 39; x++) P.placePath(x, 30);
  return { id, run };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const P = new Park(12345);
  buildDemo(P, { lean: true });
  console.log(`after the first build: cash ₪${Math.round(P.cash)}`);
  const c = buildCoaster(P);
  console.log(`built. cash ₪${Math.round(P.cash)}  coaster exc ${c.run.exc} int ${c.run.int} nau ${c.run.nau}  ${Math.round(c.run.duration)}s`);
  const t0 = performance.now();
  for (let m = 1; m <= GOAL.months; m++) {
    while (P.month < m) P.tick(0.1);
    const h = P.history.at(-1);
    // a player adds rides as money allows
    if (m >= 4 && !P.rides().some((o) => o.kind === 'ship') && P.cash > 3000) { P.place('ride', 'ship', 32, 27, 0); console.log('  + pirate ship'); }
    if (m >= 7 && !P.rides().some((o) => o.kind === 'bumper') && P.cash > 2600) { P.place('ride', 'bumper', 17, 14, 0); for (let x = 17; x <= 20; x++) P.placePath(x, 17); console.log('  + bumper cars'); }
    if (m >= 9 && !P.rides().some((o) => o.kind === 'tower') && P.cash > 4200) { P.place('ride', 'tower', 13, 31, 0); P.hire('mechanic'); P.hire('cleaner'); P.hire('entertainer'); console.log('  + drop tower, staff'); }
    if (m % 3 === 0 || m <= 2) {
      const broken = P.rides().filter((o) => o.broken).length;
      console.log(`month ${String(m).padStart(2)}  guests ${String(P.guests.length).padStart(3)} / cap ${P.capacity()}  rating ${Math.round(P.rating)}  happy ${Math.round(P.avgHappy)}  cash ₪${Math.round(P.cash)}  net ₪${Math.round(h.net)} (in ${Math.round(h.income)} out ${Math.round(h.expense)})  dirty ${P.dirtyTiles}  broken ${broken}`);
    }
  }
  const ms = performance.now() - t0;
  console.log(`\n${GOAL.months} months in ${Math.round(ms)} ms (${(ms / (GOAL.months * MONTH * 10)).toFixed(3)} ms/tick)`);
  const out = Math.max(1, P.totals.guestsOut);
  console.log('won:', P.won, ' guests in total', P.totals.guestsIn, ' left', P.totals.guestsOut, ' turned away', P.totals.turnedAway, ' on leaving: happy', Math.round(P.totals.happyOut / out), ' spent ₪' + Math.round(P.totals.spentOut / out), ' left with ₪' + Math.round(P.totals.moneyLeft / out));
  console.log('\nthoughts:'); for (const t of P.thoughtSummary || []) console.log(`  ${t.n}  ${thoughtText(P, t)}`);
  console.log('\nrides:'); for (const o of P.rides()) console.log(`  ${o.name.padEnd(18)} riders ${String(o.totalRiders).padStart(5)}  income ₪${Math.round(o.totalIncome)}  rel ${o.rel.toFixed(2)}  queue ${o.queue.length}`);
  console.log('\nshops:'); for (const o of P.shops()) console.log(`  ${o.name.padEnd(18)} sales ${String(o.sales).padStart(5)}  income ₪${Math.round(o.totalIncome)}`);
  const last = P.history.at(-1);
  console.log('\nlast month in:', last.in, 'out:', Object.fromEntries(Object.entries(last.out).map(([k, v]) => [k, Math.round(v)])));
}
