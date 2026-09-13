// ui_layering - layering en diversity: verschillende lagen als een ui rond wat je beschermt
// Draaien vanuit deze map:  node ui_layering.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1500, 900);

const M = [520, 470];

// ---------- de lagen, elk anders getekend ----------
c.circle(...M, 720, { strokeWidth: 3.2 });
c.circle(...M, 560, { strokeWidth: 2.6, strokeLineDash: [16, 11] });
c.circle(...M, 400, { strokeWidth: 3, strokeLineDash: [3, 9] });
c.circle(...M, 240, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
  stroke: C.RED, strokeWidth: 2.6 });
c.lines(M[0], M[1] - 26, ['data', 'gebruikers', 'services'], 32, C.GRAY, 700, 'middle', 1.05);

// ---------- de aanvaller geraakt door de buitenste laag, niet verder ----------
const dir = [0.766, 0.642];
const op = r => [M[0] - r * dir[0], M[1] - r * dir[1]];
const [sx, sy] = op(480), [ex, ey] = op(300), [bx, by] = op(360);
c.arrow(sx, sy, ex, ey, { stroke: C.RED, strokeWidth: 3, head: 18 });
// barst in de buitenste laag
c.path(`M ${bx - 26} ${by + 22} L ${bx - 6} ${by + 4} L ${bx - 16} ${by - 6} L ${bx + 8} ${by - 26}`,
  { stroke: C.RED, strokeWidth: 3, roughness: 0.8 });
c.txt(40, 60, 'aanvaller kraakt de buitenste laag', 32, C.RED_DARK, 700, 'start');

// ---------- uitleg ----------
const TX = 960;
c.txt(TX, 300, 'layering', 40, C.GRAY, 700, 'start');
c.txt(TX, 342, 'meerdere lagen rond wat je beschermt', 30, C.GRAY, 400, 'start');
c.txt(TX, 460, 'diversity', 40, C.GRAY, 700, 'start');
c.txt(TX, 502, 'elke laag is anders', 30, C.GRAY, 400, 'start');
c.txt(TX, 620, 'één laag gekraakt?', 40, C.RED_DARK, 700, 'start');
c.txt(TX, 662, 'de andere lagen verdedigen nog', 30, C.GRAY, 400, 'start');

c.save('ui_layering');
plaats('ui_layering', '../content/0_het_security_landschap/assets', '../slides/assets');
