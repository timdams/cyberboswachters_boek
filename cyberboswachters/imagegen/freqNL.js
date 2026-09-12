// freqNL - letterfrequentie in een typisch Nederlandstalige tekst.
// Percentages: Wikipedia "Letterfrequentie" (Nederlands).
// Draaien vanuit deze map:  node freqNL.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1560, 740);

const F = {
  a: 7.49, b: 1.58, c: 1.24, d: 5.93, e: 18.91, f: 0.81, g: 3.40, h: 2.38, i: 6.50,
  j: 1.46, k: 2.25, l: 3.57, m: 2.21, n: 10.03, o: 6.06, p: 1.57, q: 0.009, r: 6.41,
  s: 3.73, t: 6.79, u: 1.99, v: 2.85, w: 1.52, x: 0.04, y: 0.035, z: 1.39
};

const X0 = 150, X1 = 1500, BASIS = 640, TOP = 120;
const PER_PROCENT = (BASIS - TOP) / 20;   // schaal loopt tot 20%
const PITCH = (X1 - X0) / 26, BREEDTE = 34;

// ---------- rasterlijnen en schaal ----------
[0, 5, 10, 15, 20].forEach(p => {
  const y = BASIS - p * PER_PROCENT;
  if (p > 0) c.line(X0, y, X1, y, { strokeWidth: 1.5, roughness: 0.8, strokeLineDash: [7, 11] });
  c.txt(122, y + 11, p + '%', 30, C.GRAY, 600, 'end');
});

// ---------- assen ----------
c.line(X0, BASIS, X1, BASIS, { strokeWidth: 2.6, roughness: 1.2 });
c.line(X0, BASIS, X0, TOP - 10, { strokeWidth: 2.6, roughness: 1.2 });

// ---------- staven ----------
Object.entries(F).forEach(([letter, p], i) => {
  const cx = X0 + PITCH * (i + 0.5);
  const h = Math.max(p * PER_PROCENT, 4);
  c.rect(cx - BREEDTE / 2, BASIS - h, BREEDTE, h, {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5, fillWeight: 1.4,
    stroke: C.RED, strokeWidth: 2.2, roughness: 1.1
  });
  c.txt(cx, 692, letter, 34, C.GRAY, 700);
});

c.save('freqNL');
plaats('freqNL', '../content/1_cryptografie/assets', '../slides/crypto_assets');
