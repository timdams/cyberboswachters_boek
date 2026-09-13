// demant - ransomware-kost als ijsberg: het losgeld is maar het topje, de indirecte schade zit eronder
// Draaien vanuit de map waar excal.js staat:  node demant.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1400, 820);

const WATER = 230;

// ---------- ijsberg ----------
c.poly([[700, 110], [620, WATER], [780, WATER]], { fill: C.WHITE, fillStyle: 'solid',
  stroke: C.GRAY, strokeWidth: 2.4 });
c.poly([[620, WATER], [560, 330], [480, 520], [530, 700], [700, 780], [870, 700], [930, 500],
  [840, 320], [780, WATER]], { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6,
  fillWeight: 1.5, stroke: C.GRAY, strokeWidth: 2.4 });

// ---------- waterlijn ----------
let d = `M 40 ${WATER}`;
for (let x = 40; x < 1360; x += 70) d += ` q 17.5 -12 35 0 q 17.5 12 35 0`;
c.path(d, { stroke: C.GRAY, strokeWidth: 2.4, fill: 'none' });

// ---------- boven water ----------
c.txt(80, 140, 'losgeld', 44, C.RED_DARK, 700, 'start');
c.txt(80, 190, 'niet eens betaald', 32, C.GRAY, 400, 'start');

// ---------- onder water ----------
c.txt(80, 370, 'indirecte kosten', 44, C.RED_DARK, 700, 'start');
c.lines(80, 430, ['productieverlies', 'herstel', 'verzekeringen'], 32, C.GRAY, 400, 'start', 1.35);

// ---------- totaal ----------
c.line(980, WATER + 20, 980, 770, { stroke: C.RED, strokeWidth: 2.4 });
c.line(980, WATER + 20, 1000, WATER + 20, { stroke: C.RED, strokeWidth: 2.4 });
c.line(980, 770, 1000, 770, { stroke: C.RED, strokeWidth: 2.4 });
c.txt(1030, 500, '95 miljoen', 52, C.RED_DARK, 700, 'start');
c.txt(1030, 555, 'dollar', 52, C.RED_DARK, 700, 'start');

c.save('demant');
