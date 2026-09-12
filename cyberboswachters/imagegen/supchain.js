// supchain - supply chain attack: de aanvaller manipuleert de software ergens vroeg in
// de keten en komt zo binnen bij het doelwit achteraan.
// Draaien vanuit deze map:  node supchain.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1700, 870);

const KOL = [70, 620, 1170], BREED = 460;

const SCHAKELS = [
  { kop: 'softwareleverancier', body: ['ontwikkelt en bundelt', 'de software'] },
  { kop: 'hosting-infrastructuur', body: ['softwarepakketten staan', 'klaar om te downloaden'] },
  { kop: 'infrastructuur van het doelwit', body: ['downloadt en installeert', 'het gemanipuleerde pakket'] }
];

// ---------- de drie schakels in de keten ----------
SCHAKELS.forEach((s, i) => {
  const x = KOL[i], cx = x + BREED / 2;
  c.rect(x, 70, BREED, 76, {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
    stroke: C.RED, strokeWidth: 2.4
  });
  c.txt(cx, 121, s.kop, 32, C.GRAY, 700);
  c.rect(x, 180, BREED, 150, { strokeWidth: 2.4 });
  c.lines(cx, 240, s.body, 30, C.GRAY, 500, 'middle', 1.45);
});

// ---------- de keten zelf ----------
c.arrow(535, 255, 615, 255, { stroke: C.GRAY, strokeWidth: 3, head: 18 });
c.arrow(1085, 255, 1165, 255, { stroke: C.GRAY, strokeWidth: 3, head: 18 });

// ---------- de aanvaller ----------
c.rect(300, 720, 1000, 80, { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4 });
c.txt(800, 774, 'aanvaller', 44, C.WHITE, 700);

// ---------- aanvalsvectoren ----------
const VECTOR = { stroke: C.RED, strokeWidth: 2.6, head: 17 };
c.arrow(420, 718, 300, 342, VECTOR);
c.arrow(620, 718, 500, 342, VECTOR);
c.arrow(820, 718, 850, 342, VECTOR);
c.arrow(1020, 718, 1122, 290, VECTOR);

c.lines(700, 490, ['mogelijke', 'aanvalsvectoren', 'om de software', 'te manipuleren'],
  28, C.RED_DARK, 700, 'middle', 1.28);

// ---------- data terug naar de aanvaller ----------
c.arrow(1400, 335, 1270, 712, { stroke: C.RED, strokeWidth: 2.6, head: 17, strokeLineDash: [14, 10] });
c.txt(1450, 520, 'data-exfiltratie', 30, C.RED_DARK, 700, 'start');

c.save('supchain');
plaats('supchain', '../content/5_iot/assets', '../slides/iot_assets');
