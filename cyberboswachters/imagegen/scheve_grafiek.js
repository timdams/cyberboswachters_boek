// scheve_grafiek - aanvalstools worden krachtiger terwijl de vereiste kennis van de aanvaller daalt
// Draaien vanuit deze map:  node scheve_grafiek.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1500, 880);

const X0 = 180, Y0 = 780, YTOP = 110;

// catmull-rom door een reeks punten (zelfde helper als wormprop.js)
function smooth(pts) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i];
    const p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

// ---------- assen ----------
c.arrow(X0, Y0, 1450, Y0, { strokeWidth: 2.4, head: 15 });
c.arrow(X0, Y0, X0, YTOP, { strokeWidth: 2.4, head: 15 });
c.txt(160, 160, 'hoog', 30, C.GRAY, 700, 'end');
c.txt(160, 770, 'laag', 30, C.GRAY, 700, 'end');

const JAREN = [1980, 1990, 2000, 2010, 2020];
const xj = i => 260 + i * 270;
JAREN.forEach((j, i) => {
  c.line(xj(i), Y0 - 8, xj(i), Y0 + 8, { strokeWidth: 2.2, roughness: 1 });
  c.txt(xj(i), 830, String(j), 30, C.GRAY, 700);
});

// ---------- de twee lijnen ----------
const KRACHT = [[260, 700], [530, 640], [800, 520], [1070, 340], [1340, 170]];
const KENNIS = [[260, 200], [530, 300], [800, 470], [1070, 620], [1340, 690]];
c.path(smooth(KENNIS), { stroke: C.GRAY, strokeWidth: 3.2, roughness: 1 });
c.path(smooth(KRACHT), { stroke: C.RED, strokeWidth: 3.4, roughness: 1 });

c.txt(1340, 135, 'kracht van aanvalstools', 34, C.RED_DARK, 700, 'end');
c.txt(1380, 740, 'vereiste kennis van de aanvaller', 34, C.GRAY, 700, 'end');

// ---------- voorbeelden langs de rode lijn ----------
c.txt(300, 745, 'password guessing', 26, C.GRAY);
c.txt(560, 690, 'sniffers', 26, C.GRAY);
c.txt(830, 575, 'DoS', 26, C.GRAY);
c.txt(1120, 400, 'botnets', 26, C.GRAY);
c.txt(1180, 215, 'ransomware-as-a-service', 26, C.GRAY, 400, 'end');

c.save('scheve_grafiek');
plaats('scheve_grafiek', '../content/0_het_security_landschap/assets', '../slides/assets');
