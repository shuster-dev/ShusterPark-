// The rules, checked without a browser: track pieces and the test ride,
// building and demolishing, money, guests, staff and saving. `npm run qa`
import { Park, idx } from '../src/sim/park.js';
import { RIDES, RIDE_ORDER, SHOPS, SCENERY, PIECES, PIECE_ORDER, GATE, MONTH, PATH_COST, MAX_LOAN, START_CASH, COASTER, REFUND, UNDO_WINDOW } from '../src/sim/catalog.js';
import { nextState, stationPieces, endState, isComplete, autoComplete, testRun, checkPiece, buildCurve, DX, DZ } from '../src/sim/track.js';
import { thoughtText } from '../src/sim/guests.js';

let pass = 0, fail = 0;
const ok = (name, cond, info) => {
  if (cond) { pass++; console.log('  ok  ', name); } else { fail++; console.log('  FAIL', name, info === undefined ? '' : JSON.stringify(info)); }
};
const free = () => true;
const coasterFrom = (list, x = 10, z = 34, d = 0) => {
  const p = stationPieces(x, z, d);
  for (const t of list) p.push({ t, ...endState(p) });
  return p;
};
const run = (P, secs) => { const end = P.t + secs; while (P.t < end) P.tick(0.1); };
// every park needs its ticket booth before anyone comes in
const openPark = (P) => { const s = P.boothSpot(); const r = P.place('booth', 'booth', s.x, s.z, s.rot); if (r.error) throw new Error('booth: ' + r.error); P.derive(); return r.id; };

console.log('\ncatalog');
ok('six rides, each with a Hebrew name, a price and a footprint', RIDE_ORDER.length === 6 && RIDE_ORDER.every((k) => RIDES[k].he && RIDES[k].cost > 0 && RIDES[k].w && RIDES[k].d));
ok('rides get more thrilling the more they cost, roughly', RIDES.tower.exc > RIDES.carousel.exc && RIDES.tower.cost > RIDES.carousel.cost);
ok('every stall has a kind', Object.values(SHOPS).every((s) => ['food', 'drink', 'gift', 'toilet'].includes(s.kind)));
ok('every track piece has a name, a cost and an icon (but the station)', PIECE_ORDER.every((k) => PIECES[k].he && PIECES[k].cost > 0 && PIECES[k].icon));

console.log('\ntrack pieces');
{
  const s = { x: 10, z: 10, h: 4, d: 0 };
  ok('straight goes one tile forward, same height', JSON.stringify(nextState('straight', s).next) === JSON.stringify({ x: 10, z: 9, h: 4, d: 0 }));
  ok('right turns east, left turns west', nextState('right', s).next.d === 1 && nextState('left', s).next.d === 3 && nextState('right', s).next.x === 11);
  ok('up climbs a step, steep climbs two, lift climbs two', nextState('up', s).next.h === 5 && nextState('steepUp', s).next.h === 6 && nextState('lift', s).next.h === 6);
  ok('a loop takes two tiles and comes out level', nextState('loop', s).occ.length === 2 && nextState('loop', s).next.z === 8 && nextState('loop', s).next.h === 4);
  const st = stationPieces(10, 34, 0);
  ok('a station is four pieces in a row', st.length === 4 && st[3].z === 31 && st.every((p) => p.t === 'station'));
  ok('a station alone is not a circuit', !isComplete(st));
  ok('a loop needs flat track before it', checkPiece(coasterFrom(['up']), 'loop', free) !== null && checkPiece(coasterFrom(['straight']), 'loop', free) === null);
  ok('no track below the ground', checkPiece(coasterFrom([]), 'down', free) !== null);
}

console.log('\nthe circuit and the test ride');
{
  const p = coasterFrom(['straight', 'lift', 'lift', 'lift', 'lift', 'straight', 'right', 'straight', 'steepDown', 'down', 'down', 'straight', 'right']);
  const rest = autoComplete(p, free);
  ok('finishing finds a way back to the station', !!rest && rest.length > 3);
  p.push(...rest);
  ok('and the circuit is closed', isComplete(p));
  const c = buildCurve(p);
  ok('the curve is closed and evenly spaced', c.closed && c.n > 100 && Math.abs(c.L - c.n * c.ds) < 1e-6);
  const r = testRun(p);
  ok('a coaster with a lift makes it round', r.ok, r.reason);
  ok('the run ends where it started: back in the station', r.ok && r.traj[r.traj.length - 1] > c.L);
  ok('family coaster: some thrill, not too much', r.exc > 3.5 && r.exc < 7 && r.int > 2 && r.int < 7, { exc: r.exc, int: r.int, nau: r.nau });
  ok('sensible speed and height', r.maxSpeed > 30 && r.maxSpeed < 90 && r.maxHeight > 5, { v: r.maxSpeed, h: r.maxHeight });
  const big = coasterFrom(['straight', ...Array(8).fill('lift'), 'straight', 'right', 'straight', 'steepDown', 'steepDown', 'steepDown', 'steepDown', 'down', 'down', 'down', 'straight', 'up', 'up', 'down', 'down', 'straight', 'loop', 'straight', 'right', 'straight', 'up', 'down', 'straight']);
  big.push(...autoComplete(big, free));
  const rb = testRun(big);
  ok('a big coaster with a loop: more thrill and more intensity', rb.ok && rb.exc > r.exc && rb.int > r.int && rb.inversions === 1, { exc: rb.exc, int: rb.int });
  ok('G forces stay believable', rb.maxG < 6 && rb.minG > -2.5, { g: rb.maxG, min: rb.minG });
  const stall = coasterFrom(['straight', 'straight', 'up', 'up', 'up', 'up']);
  stall.push(...autoComplete(stall, free));
  const rs = testRun(stall);
  ok('a hill with no lift: the train stops and the test says so', !rs.ok && /שרשרת/.test(rs.reason));
  ok('an open track can\'t be tested', !testRun(coasterFrom(['straight'])).ok);
}

console.log('\nbuilding');
{
  const P = new Park(1);
  ok('a new park: money, a loan and a short path from the gate', P.cash === START_CASH && P.loan > 0 && P.path[idx(GATE.x, GATE.z)] === 1);
  const c0 = P.cash;
  ok('a path tile costs what it says', !P.placePath(GATE.x, GATE.z - 7) && P.cash === c0 - PATH_COST);
  ok('no path on a path', P.placePath(GATE.x, GATE.z - 7) !== null);
  const r = P.place('ride', 'carousel', GATE.x + 1, GATE.z - 5, 0);
  ok('a carousel next to the path', !r.error && P.objects.get(r.id).w === 3);
  P.derive();
  ok('it can be reached from the path', (P.access.get(r.id) || []).length > 0);
  ok('nothing else can go where it stands', P.place('shop', 'burger', GATE.x + 2, GATE.z - 4, 0).error && P.pathReason(GATE.x + 2, GATE.z - 4));
  const ferris = P.place('ride', 'ferris', 30, 10, 1);
  ok('turning a ride swaps its footprint', P.objects.get(ferris.id).w === 2 && P.objects.get(ferris.id).d === 4);
  const before = P.cash;
  P.demolish(ferris.id);
  ok('demolishing a mistake right away gives everything back', P.cash === before + RIDES.ferris.cost);
  const t = P.place('ride', 'tower', 30, 10, 0);
  run(P, UNDO_WINDOW + 1);
  const b2 = P.cash;
  P.demolish(t.id);
  ok('demolishing later gives back part', Math.abs(P.cash - (b2 + RIDES.tower.cost * REFUND)) < 0.01);
  ok('can\'t afford it: says so', (() => { const Q = new Park(2); Q.cash = 10; return Q.place('ride', 'tower', 5, 5, 0).error === 'אין מספיק כסף'; })());
  ok('a bench goes only on a path', P.placeAddon('bench', 2, 2) && !P.placeAddon('bench', GATE.x, GATE.z - 1));
  ok('scenery spreads beauty around it', (() => { P.place('scenery', 'fountain', 3, 3, 0); P.derive(); return P.beauty[idx(4, 4)] > 10 && P.beauty[idx(6, 6)] > 0 && P.beauty[idx(20, 20)] === 0; })());
}

console.log('\ncoaster in the park');
{
  const P = new Park(3);
  P.cash = 50000;
  const r = P.startCoaster(10, 30, 0);
  ok('a station is placed', !r.error);
  ok('the ground under the station is taken', P.pathReason(10, 29) !== null);
  for (const t of ['straight', 'lift', 'lift', 'lift', 'lift', 'straight', 'right', 'straight', 'steepDown', 'down', 'straight']) P.addPiece(r.id, t);
  const o = P.objects.get(r.id);
  ok('pieces add on and cost money', o.pieces.length === 15 && o.spent > P.coasterBaseCost());
  const high = o.pieces.find((p) => p.h >= 8);
  ok('a path can run under high track', !P.pathReason(high.x, high.z), { high, why: P.pathReason(high.x, high.z) });
  const spent = o.spent;
  P.removePiece(r.id);
  ok('taking a piece off gives its cost back', o.spent < spent && o.pieces.length === 14);
  ok('can\'t open it before it is tested', P.setOpen(r.id, true) !== null);
  ok('finishing closes the circuit', !P.finishTrack(r.id) && isComplete(o.pieces));
  const t = P.testCoaster(r.id);
  ok('the test passes and gives it numbers', t.ok && o.tested && o.exc > 0);
  ok('now it opens', !P.setOpen(r.id, true) && o.open);
  P.addPiece(r.id, 'straight');
  ok('a closed circuit takes no more pieces', P.pieceReason(r.id, 'straight') !== null);
  ok('another coaster can\'t cross its low track', P.startCoaster(o.pieces[2].x, o.pieces[2].z, 1).error);
}

console.log('\nthe ticket booth');
{
  const P = new Park(8);
  for (let z = GATE.z - 7; z >= 30; z--) P.placePath(GATE.x, z);
  P.place('ride', 'carousel', GATE.x + 1, 34, 0);
  run(P, 60);
  ok('no booth: the park is closed and nobody comes', !P.isOpen() && P.guests.length === 0);
  const spot = P.boothSpot();
  ok('there is a spot for the booth by the gate path', !!spot && Math.abs(spot.z - GATE.z) <= 3, spot);
  const b = openPark(P);
  ok('only one booth', P.placeReason('booth', 'booth', 5, 5, 0) === 'יש כבר קופה');
  run(P, 90);
  ok('with a booth by the path the park opens and guests come in', P.isOpen() && P.guests.length > 0);
  ok('the booth counts the tickets it sold', P.objects.get(b).sold > 0);
  P.demolish(b);
  ok('pull the booth down and the park closes', !P.isOpen() && P.arrivalRate() === 0);
}

console.log('\nguests');
{
  const P = new Park(4);
  for (let z = GATE.z - 7; z >= 30; z--) P.placePath(GATE.x, z);
  const car = P.place('ride', 'carousel', GATE.x + 1, 34, 0).id;
  const burger = P.place('shop', 'burger', GATE.x - 1, 38, 0).id;
  openPark(P);
  run(P, MONTH * 2);
  ok('guests come when there is something to do', P.guests.length > 10, P.guests.length);
  ok('they ride and pay for it', P.objects.get(car).totalRiders > 0 && P.ledger.in.rides + (P.history[0]?.in.rides || 0) > 0);
  ok('and eat', P.objects.get(burger).sales > 0);
  ok('every guest is on a path tile or at the gate', P.guests.every((g) => g.state === 'in' || g.state === 'out' || P.path[g.cur]));
  P.setPrice(car, 20);
  for (const g of P.guests) g.thoughts = [];
  run(P, 60);
  const exp = P.guests.filter((g) => g.thoughts.some((t) => t.k === 'expensive' && t.id === car)).length;
  ok('a ride priced far too high: guests say so', exp > 0, exp);
  ok('thoughts read as Hebrew', thoughtText(P, { k: 'expensive', id: car }).includes('יקר'));
  P.setPrice(car, 3);
  P.setEntryFee(80);
  const away = P.totals.turnedAway;
  run(P, 120);
  ok('an entry fee far above what the park is worth turns people back', P.totals.turnedAway > away);
  P.setEntryFee(0);
  // everyone leaves eventually
  run(P, 900);
  ok('guests go home after a while', P.totals.guestsOut > 10);
}

console.log('\nstaff');
{
  const P = new Park(5);
  for (let z = GATE.z - 7; z >= 30; z--) P.placePath(GATE.x, z);
  P.derive();
  P.dirt[idx(GATE.x, 35)] = 4; P.vomit[idx(GATE.x, 33)] = 1;
  P.hire('cleaner');
  run(P, 40);
  ok('a cleaner finds the mess and cleans it', P.dirt[idx(GATE.x, 35)] === 0 && P.vomit[idx(GATE.x, 33)] === 0);
  const r = P.place('ride', 'teacups', GATE.x + 1, 31, 0).id;
  P.derive();
  const o = P.objects.get(r);
  o.broken = true;
  P.hire('mechanic');
  run(P, 50);
  ok('a mechanic comes and fixes a broken ride', !o.broken && P.staff.find((s) => s.role === 'mechanic').done > 0);
  const w0 = P.ledger.out.wages, m0 = P.month;
  run(P, 5);
  ok('staff are paid as time passes', P.month !== m0 || P.ledger.out.wages > w0);
  ok('firing works', !P.fire(P.staff[0].id) && P.staff.length === 1);
}

console.log('\nmoney');
{
  const P = new Park(6);
  const c = P.cash, l = P.loan;
  ok('borrow a thousand', !P.takeLoan() && P.cash === c + 1000 && P.loan === l + 1000);
  ok('repay a thousand', !P.repayLoan() && P.loan === l);
  P.loan = MAX_LOAN;
  ok('no borrowing past the cap', P.takeLoan() !== null);
  P.loan = 10000;
  const c2 = P.cash;
  run(P, MONTH + 1);
  ok('a month passes: interest is paid and the month is recorded', P.history.length === 1 && P.cash < c2 && P.history[0].out.interest > 0);
  ok('a campaign costs money and runs for a month', !P.startMarketing() && P.t < P.marketingUntil && P.startMarketing() !== null);
}

console.log('\nsaving');
{
  const P = new Park(7);
  for (let z = GATE.z - 7; z >= 30; z--) P.placePath(GATE.x, z);
  P.place('ride', 'ship', GATE.x + 1, 33, 0);
  P.place('shop', 'drinks', GATE.x - 1, 36, 0);
  openPark(P);
  P.placeAddon('bin', GATE.x, 37);
  P.cash += 20000;
  const r = P.startCoaster(8, 30, 0);
  for (const t of ['straight', 'lift', 'lift', 'lift', 'straight', 'right', 'straight', 'down', 'down']) P.addPiece(r.id, t);
  P.finishTrack(r.id); P.testCoaster(r.id); P.setOpen(r.id, true);
  P.hire('cleaner');
  run(P, 200);
  const j = JSON.parse(JSON.stringify(P.toJSON()));
  const Q = Park.fromJSON(j);
  ok('everything comes back: money, guests, rides, staff, paths', Q.cash === P.cash && Q.guests.length === P.guests.length && Q.objects.size === P.objects.size && Q.staff.length === P.staff.length && Q.path.every((v, i) => v === P.path[i]));
  ok('the coaster comes back tested and ready to run', Q.objects.get(r.id).tested && Q.objects.get(r.id).run && Q.objects.get(r.id).curve.closed);
  ok('the booth comes back and the park stays open', !!Q.booth() && Q.isOpen());
  const old = JSON.parse(JSON.stringify(j)); old.v = 1; old.objects = old.objects.filter((o) => o.type !== 'booth');
  const R = Park.fromJSON(old);
  ok('a park saved before booths existed gets one for free and stays open', !!R.booth() && R.booth().spent === 0 && R.isOpen());
  run(P, 60); run(Q, 60);
  ok('and the two parks play on exactly the same', Math.abs(Q.cash - P.cash) < 1e-6 && Q.guests.length === P.guests.length, { a: P.cash, b: Q.cash });
  ok('a save is small enough for the browser', JSON.stringify(j).length < 600000, JSON.stringify(j).length);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
