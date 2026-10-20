// Tile arithmetic shared by the whole sim.
import { MAP } from './catalog.js';

export const N = MAP * MAP;
export const idx = (x, z) => z * MAP + x;
export const tx = (i) => i % MAP;
export const tz = (i) => (i / MAP) | 0;
export const inMap = (x, z) => x >= 0 && z >= 0 && x < MAP && z < MAP;
export const NB = [[0, -1], [1, 0], [0, 1], [-1, 0]];
export const clamp = (v, a = 0, b = 100) => (v < a ? a : v > b ? b : v);

// Path tiles next to tile i.
export function pathNeighbors(P, i, out = []) {
  out.length = 0;
  const x = tx(i), z = tz(i);
  for (const [dx, dz] of NB) {
    const nx = x + dx, nz = z + dz;
    if (inMap(nx, nz) && P.path[idx(nx, nz)]) out.push(idx(nx, nz));
  }
  return out;
}

// Where a walker stands: between two tile centers, a little to one side.
export function placeWalker(w) {
  const ax = tx(w.cur) + 0.5, az = tz(w.cur) + 0.5;
  if (w.nxt < 0) { w.x = ax + w.off * 0.3; w.z = az + w.off * 0.3; return; }
  const bx = tx(w.nxt) + 0.5, bz = tz(w.nxt) + 0.5;
  const dx = bx - ax, dz = bz - az;
  w.x = ax + dx * w.p - dz * w.off;
  w.z = az + dz * w.p + dx * w.off;
  w.dir = Math.atan2(dx, dz);
}
