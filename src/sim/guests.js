// Guests: they come in through the gate with some money and a taste for
// thrills, walk the paths, get hungry and thirsty and tired, ride what they
// like at a price they think is fair, and go home when they've had enough.
// They walk by distance maps the park keeps, not by searching every step.
import { MAP, GATE, SHOPS, ADDONS, NAMES, LETTERS } from './catalog.js';
import { idx, tx, tz, clamp, pathNeighbors, placeWalker } from './grid.js';

const GATE_I = idx(GATE.x, GATE.z);
const OUTSIDE = { x: GATE.x + 0.5, z: MAP + 3 };
const nb = [];

export function spawnGuest(P) {
  const r = () => P.rand();
  const g = {
    id: P.nextId++, name: `${P.pick(NAMES)} ${P.pick([...LETTERS])}.`,
    state: 'in', cur: -1, nxt: -1, p: 0, from: -1,
    x: OUTSIDE.x + (r() - 0.5) * 0.8, z: OUTSIDE.z + r() * 1.5, dir: Math.PI,
    goal: null, happy: 62 + r() * 20, hunger: 8 + r() * 30, thirst: 8 + r() * 30, toilet: r() * 20, energy: 82 + r() * 18, nausea: 0,
    money: Math.round(35 + r() * 85), spent: 0,
    maxInt: 3 + r() * 3.6 + r() * 3.6, nauTol: 2 + r() * 7, gen: 0.8 + r() * 0.5,
    ridden: {}, rides: 0, timeIn: 0, visit: 300 + r() * 320, lastRide: P.t, thoughts: [],
    eat: 0, trash: 0, timer: 0, think: 0, qt: 0, item: 0,
    shirt: Math.floor(r() * 12), skin: Math.floor(r() * 4), off: (r() - 0.5) * 0.46, speed: 0.95 + r() * 0.35,
  };
  P.guests.push(g);
  P.totals.guestsIn++;
  return g;
}

const leave = (P, g, k) => { if (k) P.thought(g, k); g.goal = { k: 'exit' }; g.leaving = true; };

export function stepGuest(P, g, dt) {
  if (g.cur >= 0) g.timeIn += dt;
  switch (g.state) {
    case 'in': {
      if (walkTo(g, GATE.x + 0.5, GATE.z + 0.5, dt)) {
        if (P.entryFee > 0) {
          const worth = P.entryWorth() * g.gen * 1.5;
          if (P.entryFee > g.money * 0.6 || P.entryFee > worth) { g.state = 'out'; P.totals.turnedAway++; P.turnedRecent = (P.turnedRecent || 0) + 1; return; }
          g.money -= P.entryFee; g.spent += P.entryFee; P.earn(P.entryFee, 'entry');
        }
        const b = P.booth(); if (b) b.sold = (b.sold || 0) + 1;
        g.state = 'walk'; g.cur = GATE_I; g.nxt = -1; g.p = 0;
      }
      return;
    }
    case 'out':
      if (walkTo(g, OUTSIDE.x, OUTSIDE.z + 2, dt)) {
        g.state = 'gone'; P.totals.guestsOut++; P.totals.happyOut += g.happy; P.totals.spentOut = (P.totals.spentOut || 0) + g.spent; P.totals.moneyLeft = (P.totals.moneyLeft || 0) + g.money;
      }
      return;
    case 'ride':
      return;
    case 'queue':
      needs(P, g, dt * 0.6);
      g.qt += dt;
      if (g.qt > 75 + g.gen * 40) {
        const o = P.objects.get(g.at);
        if (o) { const k = o.queue.indexOf(g.id); if (k >= 0) o.queue.splice(k, 1); P.layoutQueue(o); }
        g.state = 'walk'; g.nxt = -1; g.goal = null;
        g.happy = clamp(g.happy - 7);
        P.thought(g, 'queue-long', g.at);
      }
      return;
    case 'shop':
    case 'sit':
      needs(P, g, dt);
      if (g.state === 'sit') g.energy = clamp(g.energy + 2.6 * dt);
      g.timer -= dt;
      if (g.timer <= 0) { g.state = 'walk'; g.nxt = -1; }
      return;
    case 'walk':
      needs(P, g, dt);
      walk(P, g, dt);
  }
}

function walkTo(g, x, z, dt) {
  const dx = x - g.x, dz = z - g.z, d = Math.hypot(dx, dz), s = g.speed * dt;
  if (d <= s) { g.x = x; g.z = z; return true; }
  g.x += (dx / d) * s; g.z += (dz / d) * s; g.dir = Math.atan2(dx, dz);
  return false;
}

function needs(P, g, dt) {
  g.hunger = clamp(g.hunger + 0.22 * dt);
  g.thirst = clamp(g.thirst + 0.28 * dt);
  g.toilet = clamp(g.toilet + 0.05 * dt);
  g.energy = clamp(g.energy - 0.055 * dt);
  g.nausea = clamp(g.nausea - 0.35 * dt);
  let dh = 0;
  if (g.hunger > 80) dh -= 0.12;
  if (g.thirst > 80) dh -= 0.12;
  if (g.toilet > 85) dh -= 0.22;
  if (g.energy < 15) dh -= 0.1;
  if (g.nausea > 50) dh -= 0.1;
  if (P.t - g.lastRide > 120) dh -= 0.06;
  dh -= 0.02; // the day wears on
  g.happy = clamp(g.happy + dh * dt);
  // done eating: now holding the wrapper, looking for a bin
  if (g.eat > 0 && (g.eat -= dt) <= 0) g.trash = 14;
  if (g.trash > 0 && (g.trash -= dt) <= 0 && g.state === 'walk' && P.path[g.cur]) dropLitter(P, g.cur);
  if (g.nausea > 72 && g.state === 'walk' && P.rand() < dt * 0.08 && P.path[g.cur]) {
    P.vomit[g.cur] = Math.min(9, P.vomit[g.cur] + 1); P.rev.dirt++;
    g.nausea -= 35; g.happy = clamp(g.happy - 8);
    P.thought(g, 'sick');
  }
}

function dropLitter(P, i) { P.dirt[i] = Math.min(9, P.dirt[i] + 1); P.rev.dirt++; }

function binNear(P, i) {
  if (P.addon[i] === ADDONS.bin.id) return true;
  for (const n of pathNeighbors(P, i, nb)) if (P.addon[n] === ADDONS.bin.id) return true;
  return false;
}

function walk(P, g, dt) {
  if (g.nxt < 0) {
    chooseNext(P, g);
    if (g.state !== 'walk' || g.nxt < 0) { placeWalker(g); return; }
  }
  g.p += g.speed * dt;
  if (g.p >= 1) {
    g.from = g.cur; g.cur = g.nxt; g.nxt = -1; g.p = 0;
    arrive(P, g);
    if (g.state === 'walk' && g.nxt < 0) chooseNext(P, g);
  }
  if (g.state === 'walk') placeWalker(g);
}

function arrive(P, g) {
  const i = g.cur;
  if (!P.path[i]) return;
  const filth = P.dirt[i] + P.vomit[i] * 3;
  if (filth >= 3) { g.happy = clamp(g.happy - 1.1); if (P.rand() < 0.25) P.thought(g, 'dirty'); }
  if (P.beauty[i] > 7) { g.happy = clamp(g.happy + 0.5); if (P.rand() < 0.02) P.thought(g, 'beautiful'); }
  if (g.trash > 0 && binNear(P, i)) g.trash = 0;
  else if (g.state === 'walk' && P.rand() < 0.0015) dropLitter(P, i);
  if (g.goal && g.goal.k !== 'exit') {
    const f = fieldOf(P, g.goal);
    if (f && f[i] === 0) { interact(P, g); return; }
  }
  const here = P.accessAt.get(i);
  if (here && !g.leaving && (!g.goal || g.goal.k === 'wander')) impulse(P, g, here);
}

function fieldOf(P, goal) {
  if (!goal) return null;
  if (goal.k === 'exit') return P.exitField;
  if (goal.k === 'bench') return P.benchField;
  return P.fields.get(goal.id) || null;
}

function chooseNext(P, g) {
  if (!P.path[g.cur]) { // the path went away under them
    const n = pathNeighbors(P, g.cur, nb);
    if (n.length) { g.nxt = n[0]; return; }
    g.cur = GATE_I; g.from = -1;
    if (!P.path[GATE_I]) return;
  }
  if (g.goal && g.goal.k === 'exit' && g.cur === GATE_I) { g.state = 'out'; g.x = tx(GATE_I) + 0.5; g.z = tz(GATE_I) + 0.5; return; }
  if (!g.goal || (g.goal.k === 'wander' && P.t >= g.think)) decide(P, g);
  if (g.state !== 'walk') return;
  let f = fieldOf(P, g.goal);
  if (g.goal && g.goal.k !== 'wander') {
    if (!f || f[g.cur] < 0) {
      if (g.goal.k === 'exit') { g.state = 'out'; return; } // cut off from the gate: they find their own way
      P.thought(g, 'lost');
      g.goal = null; f = null;
    } else if (f[g.cur] === 0) { interact(P, g); return; }
  }
  const n = pathNeighbors(P, g.cur, nb);
  if (!n.length) return;
  if (f && g.goal && g.goal.k !== 'wander') {
    const want = f[g.cur] - 1, ok = n.filter((k) => f[k] === want);
    g.nxt = ok.length ? ok[Math.floor(P.rand() * ok.length)] : n[0];
    return;
  }
  // wandering: keep going, rarely turn back
  const fwd = n.filter((k) => k !== g.from);
  const opts = fwd.length ? fwd : n;
  const straight = g.from >= 0 ? g.cur * 2 - g.from : -1;
  g.nxt = opts.includes(straight) && P.rand() < 0.55 ? straight : opts[Math.floor(P.rand() * opts.length)];
}

function nearestShop(P, g, kind) {
  let best = null, bd = 1e9, pricey = null;
  for (const o of P.shops()) {
    const def = SHOPS[o.kind];
    if (def.kind !== kind || !o.open) continue;
    const f = P.fields.get(o.id);
    if (!f || f[g.cur] < 0) continue;
    if (o.price > def.worth * g.gen) { pricey = o; continue; }
    if (o.price > g.money) continue;
    if (f[g.cur] < bd) { bd = f[g.cur]; best = o; }
  }
  if (!best && pricey && P.rand() < 0.5) P.thought(g, 'expensive', pricey.id);
  return best;
}

const QMAX = (o) => (o.type === 'coaster' ? 40 : 28);

function decide(P, g) {
  g.think = P.t + 4 + P.rand() * 5;
  if (g.leaving) { g.goal = { k: 'exit' }; return; }
  if (g.happy < 12) return leave(P, g, 'leave-unhappy');
  if (g.energy < 6) return leave(P, g, 'tired');
  if (g.timeIn > g.visit) return leave(P, g, g.happy > 70 ? 'leave-happy' : null);
  const rides = P.rides();
  const cheapest = Math.min(99, ...rides.filter((o) => o.open && !o.broken).map((o) => o.price));
  if (g.money < 1 || (g.money < cheapest && g.rides > 0)) return leave(P, g, 'poor');

  const want = (kind, need, none) => {
    const s = nearestShop(P, g, kind);
    if (s) { g.goal = { k: 'shop', id: s.id }; return true; }
    if (P.rand() < 0.4) P.thought(g, none);
    void need;
    return false;
  };
  if (g.toilet > 65 && want('toilet', g.toilet, 'no-toilet')) return;
  if (g.thirst > 60 && want('drink', g.thirst, 'no-drink')) return;
  if (g.hunger > 60 && want('food', g.hunger, 'no-food')) return;
  if (g.energy < 30) {
    if (P.benchField && P.benchField[g.cur] >= 0) { g.goal = { k: 'bench' }; return; }
    if (P.rand() < 0.4) P.thought(g, 'no-bench');
  }
  if (g.nausea > 55) { g.goal = { k: 'wander' }; return; }

  let best = null, bs = -3;
  for (const o of rides) {
    if (!o.open || o.broken || (o.type === 'coaster' && !o.tested)) continue;
    const f = P.fields.get(o.id);
    if (!f || f[g.cur] < 0) continue;
    if (o.int > g.maxInt + 0.8) { if (P.rand() < 0.1) P.thought(g, 'scary', o.id); continue; }
    if (o.nau > 5 && g.nausea > 35) continue;
    if (o.price > P.rideValue(o) * g.gen) { if (P.rand() < 0.3) P.thought(g, 'expensive', o.id); continue; }
    if (o.price > g.money) continue;
    if (o.queue.length >= QMAX(o)) continue;
    const score = o.exc * 1.6 + P.rand() * 3 - o.queue.length * 0.12 - f[g.cur] * 0.04
      - (g.ridden[o.id] || 0) * 2.2 + (o.int > g.maxInt - 2.5 ? 0.8 : 0) + (o.type === 'coaster' ? 1 : 0);
    if (score > bs) { bs = score; best = o; }
  }
  if (best) { g.goal = { k: 'ride', id: best.id }; return; }
  const open = rides.filter((o) => o.open).length;
  if (open < 3 && P.rand() < 0.25) P.thought(g, 'nothing');
  g.goal = { k: 'wander' };
}

function interact(P, g) {
  const goal = g.goal;
  g.goal = null;
  if (!goal) return;
  if (goal.k === 'bench') {
    if (P.addon[g.cur] !== ADDONS.bench.id) return;
    g.state = 'sit'; g.timer = 10 + P.rand() * 8; g.nxt = -1;
    g.x = tx(g.cur) + 0.5 + g.off * 0.6; g.z = tz(g.cur) + 0.5 + 0.28;
    return;
  }
  const o = P.objects.get(goal.id);
  if (!o) return;
  if (o.type === 'shop') { buy(P, g, o); return; }
  joinQueue(P, g, o);
}

function joinQueue(P, g, o) {
  if (!o.open || o.broken) { P.thought(g, 'broken', o.id); return; }
  if (o.queue.length >= QMAX(o)) { P.thought(g, 'queue-long', o.id); return; }
  o.queue.push(g.id);
  g.state = 'queue'; g.qt = 0; g.at = o.id; g.nxt = -1;
  P.layoutQueue(o);
  if (o.price < P.rideValue(o) * 0.45 && o.price > 0) { g.happy = clamp(g.happy + 3); P.thought(g, 'bargain', o.id); }
}

function buy(P, g, o) {
  const def = SHOPS[o.kind];
  if (!o.open) return;
  if (o.price > def.worth * g.gen) { P.thought(g, 'expensive', o.id); return; }
  if (o.price > g.money) { P.thought(g, 'poor'); return; }
  g.money = Math.round((g.money - o.price) * 100) / 100; g.spent += o.price;
  P.earn(o.price, def.kind === 'food' || def.kind === 'drink' ? 'food' : 'shops');
  if (def.unit) P.spend(def.unit, 'stock');
  o.sales++; o.monthIncome += o.price; o.totalIncome += o.price;
  if (def.hunger) g.hunger = clamp(g.hunger + def.hunger);
  if (def.thirst) g.thirst = clamp(g.thirst + def.thirst);
  if (def.toilet) g.toilet = clamp(g.toilet + def.toilet);
  if (def.happy) g.happy = clamp(g.happy + def.happy);
  if (def.litter) g.eat = 14 + P.rand() * 10;
  if (def.kind === 'gift') g.item = 1;
  g.state = 'shop'; g.timer = def.kind === 'toilet' ? 5 : 2; g.nxt = -1;
}

// Passing by: a drink when thirsty, a ride they haven't tried.
function impulse(P, g, ids) {
  for (const id of ids) {
    const o = P.objects.get(id);
    if (!o || !o.open || o.type === 'booth') continue;
    if (o.type === 'shop') {
      const k = SHOPS[o.kind].kind;
      const want = (k === 'drink' && g.thirst > 32) || (k === 'food' && g.hunger > 38) || (k === 'toilet' && g.toilet > 40)
        || (o.kind === 'icecream' && g.hunger > 20 && P.rand() < 0.25) || (k === 'gift' && !g.item && P.rand() < 0.1);
      if (want && o.price <= SHOPS[o.kind].worth * g.gen && o.price <= g.money) { buy(P, g, o); return; }
    } else if (!o.broken && (o.type !== 'coaster' || o.tested) && !g.ridden[o.id] && o.int <= g.maxInt && g.nausea < 40
      && o.price <= P.rideValue(o) * g.gen && o.price <= g.money && o.queue.length < 12 && P.rand() < 0.3) {
      joinQueue(P, g, o); return;
    }
  }
}

// What's on guests' minds right now, most common first.
export function thinkCounts(P) {
  const m = new Map();
  for (const g of P.guests) for (const th of g.thoughts) {
    if (P.t - th.t > 60) continue;
    const key = th.k + ':' + (th.id || '');
    m.set(key, (m.get(key) || 0) + 1);
  }
  if (P.turnedRecent >= 1) m.set('entry-expensive:', Math.round(P.turnedRecent));
  return [...m.entries()].map(([key, n]) => { const [k, id] = key.split(':'); return { k, id: id ? +id : 0, n }; })
    .sort((a, b) => b.n - a.n).slice(0, 8);
}

// Thoughts in words. Good ones say so, so the screen can color them.
export const GOOD_THOUGHTS = new Set(['ride-great', 'ride-good', 'beautiful', 'bargain', 'leave-happy']);
export function thoughtText(P, th) {
  const o = th.id ? P.objects.get(th.id) : null, n = o ? o.name : '';
  switch (th.k) {
    case 'ride-great': return `${n} היה מדהים!`;
    case 'ride-good': return `${n} היה כיף`;
    case 'ride-meh': return `${n} היה קצת משעמם`;
    case 'too-intense': return `${n} היה חזק מדי בשבילי`;
    case 'expensive': return `${n || 'זה'} יקר מדי`;
    case 'bargain': return `${n} במחיר מציאה!`;
    case 'scary': return `${n} נראה מפחיד מדי`;
    case 'queue-long': return `התור ל${n || 'מתקן'} ארוך מדי`;
    case 'broken': return `${n || 'המתקן'} מקולקל`;
    case 'no-food': return 'אני רעב ואין איפה לאכול';
    case 'no-drink': return 'אני צמא ואין שתייה';
    case 'no-toilet': return 'אני חייב שירותים ואין!';
    case 'no-bench': return 'אני עייף ואין איפה לשבת';
    case 'tired': return 'אני עייף מדי, הולך הביתה';
    case 'sick': return 'לא מרגיש טוב...';
    case 'dirty': return 'השבילים מלוכלכים';
    case 'beautiful': return 'איזה פארק יפה';
    case 'nothing': return 'אין פה מספיק מתקנים';
    case 'lost': return 'לא מוצא את הדרך';
    case 'poor': return 'נגמר לי הכסף';
    case 'leave-unhappy': return 'נמאס לי, הולך הביתה';
    case 'leave-happy': return 'היה יום מושלם!';
    case 'entry-expensive': return 'הכניסה לפארק יקרה מדי';
    default: return '';
  }
}
