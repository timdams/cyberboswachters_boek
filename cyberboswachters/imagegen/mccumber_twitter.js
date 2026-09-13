// mccumber_twitter - de McCumber kubus met de Twitter hash-bug (2018): opslag was in orde,
// maar de status "verwerken" werd vergeten.
// Draaien vanuit deze map:  node mccumber_twitter.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1600, 790);

// isometrische kubus van 3x3x3: a = informatiestatus (naar links), b = maatregel (naar rechts), v = doel (omlaag)
const P = [800, 400];
const L = [-95, -55], R = [95, -55], V = [0, 110];
const pt = (a, b, v) => [P[0] + a * L[0] + b * R[0] + v * V[0], P[1] + a * L[1] + b * R[1] + v * V[1]];
const accent = { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.6 };
const grid = { strokeWidth: 1.8, roughness: 1.1 };

// ---------- vlakken ----------
c.poly([pt(0, 0, 0), pt(3, 0, 0), pt(3, 0, 3), pt(0, 0, 3)], { strokeWidth: 2.6 });   // links
c.poly([pt(0, 0, 0), pt(0, 3, 0), pt(0, 3, 3), pt(0, 0, 3)], { strokeWidth: 2.6 });   // rechts
c.poly([pt(0, 0, 0), pt(3, 0, 0), pt(3, 3, 0), pt(0, 3, 0)], { strokeWidth: 2.6 });   // boven

// ---------- de vergeten schijf: verwerken ----------
c.poly([pt(2, 0, 0), pt(3, 0, 0), pt(3, 0, 3), pt(2, 0, 3)], accent);
c.poly([pt(2, 0, 0), pt(3, 0, 0), pt(3, 3, 0), pt(2, 3, 0)], accent);

// ---------- rasterlijnen ----------
[1, 2].forEach(i => {
  c.line(...pt(i, 0, 0), ...pt(i, 0, 3), grid);
  c.line(...pt(0, 0, i), ...pt(3, 0, i), grid);
  c.line(...pt(0, i, 0), ...pt(0, i, 3), grid);
  c.line(...pt(0, 0, i), ...pt(0, 3, i), grid);
  c.line(...pt(i, 0, 0), ...pt(i, 3, 0), grid);
  c.line(...pt(0, i, 0), ...pt(3, i, 0), grid);
});

// ---------- labels van de assen ----------
['opslag', 'verzenden', 'verwerken'].forEach((s, a) => {
  const [x, y] = pt(a + 0.5, 0, 3);
  const rood = a === 2;
  c.txt(x - 30, y + 50, s, 30, rood ? C.RED_DARK : C.GRAY, 700, 'end');
});
['technologie', 'beleid', 'mensen'].forEach((s, b) => {
  const [x, y] = pt(0, b + 0.5, 3);
  c.txt(x + 30, y + 50, s, 30, C.GRAY, 700, 'start');
});
['confidentiality', 'integrity', 'availability'].forEach((s, v) => {
  const [x, y] = pt(3, 0, v + 0.5);
  c.txt(x - 24, y + 10, s, 30, C.GRAY, 700, 'end');
});
c.txt(470, 700, 'informatiestatus', 32, C.GRAY, 400, 'end');
c.txt(1180, 700, 'beveiligingsmaatregel', 32, C.GRAY, 400, 'start');
c.txt(330, 250, 'doel', 32, C.GRAY, 400);

// ---------- wat Twitter deed ----------
const [vx, vy] = pt(2.5, 1.5, 0);
c.lines(330, 70, ['verwerken: wachtwoord vóór het hashen', 'in een interne log geschreven'], 32, C.RED_DARK, 700, 'middle', 1.15);
c.line(560, 130, vx - 14, vy - 6, { stroke: C.RED, strokeWidth: 2, strokeLineDash: [10, 8] });

const [ox, oy] = pt(0.5, 1.5, 0);
c.lines(1310, 150, ['opslag: bcrypt-hash in de database', 'in orde'], 32, C.GRAY, 700, 'middle', 1.15);
c.line(1100, 210, ox + 16, oy - 8, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [10, 8] });

c.save('mccumber_twitter');
plaats('mccumber_twitter', '../content/0_het_security_landschap/assets', '../slides/assets');
