// ijsberg - surface web, deep web en dark web als een ijsberg: wat je ziet is het
// kleinste stuk. Hoe dieper, hoe dichter de arcering.
// Draaien vanuit deze map:  node ijsberg.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1700, 1190);

const TIP = 135, WATER = 270, DIEP = 640, BODEM = 1090;

// ---------- vorm van de ijsberg: per hoogte een linker- en rechterrand ----------
const CP = [
  [135, 780, 780], [200, 736, 826], [270, 692, 884], [390, 628, 962],
  [520, 596, 1010], [640, 584, 1022], [780, 606, 990], [900, 648, 944],
  [1010, 704, 884], [1070, 748, 820], [1090, 772, 788]
];
function rand(y) {
  for (let i = 0; i < CP.length - 1; i++) {
    const [ya, la, ra] = CP[i], [yb, lb, rb] = CP[i + 1];
    if (y >= ya && y <= yb) {
      const t = (y - ya) / (yb - ya);
      return [la + (lb - la) * t, ra + (rb - ra) * t];
    }
  }
  return [CP[CP.length - 1][1], CP[CP.length - 1][2]];
}
function schijf(yTop, yBot, o) {
  const pts = [], stap = 22;
  for (let y = yTop; y < yBot; y += stap) pts.push([rand(y)[1], y]);
  pts.push([rand(yBot)[1], yBot]);
  for (let y = yBot; y > yTop; y -= stap) pts.push([rand(y)[0], y]);
  pts.push([rand(yTop)[0], yTop]);
  c.poly(pts, { stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.1, bowing: 0.6, ...o });
}

// ---------- waterlijn en de grens deep/dark ----------
let d = 'M 60 ' + WATER;
for (let x = 60; x < 1640; x += 140) d += ` Q ${x + 35} ${WATER - 15} ${x + 70} ${WATER}` +
  ` Q ${x + 105} ${WATER + 15} ${x + 140} ${WATER}`;
c.path(d, { stroke: C.GRAY, strokeWidth: 3, roughness: 1 });
c.line(60, DIEP, 1640, DIEP, { strokeWidth: 2, roughness: 1, strokeLineDash: [16, 12] });

// ---------- de ijsberg ----------
schijf(TIP, WATER, { fill: C.WHITE, fillStyle: 'solid' });
schijf(WATER, DIEP, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 12, fillWeight: 1.6 });
schijf(DIEP, BODEM, { fill: C.RED_LIGHT, fillStyle: 'cross-hatch', hachureGap: 5, fillWeight: 1.6 });

// ---------- de drie lagen benoemen ----------
c.txt(80, 130, 'surface web', 48, C.RED_DARK, 700, 'start');
c.lines(80, 185, ['zoekmachines, nieuwssites', 'sociale media, webshops'],
  30, C.GRAY, 500, 'start', 1.35);

c.txt(80, 350, 'deep web', 48, C.RED_DARK, 700, 'start');
c.lines(80, 405, ['je e-mailbox en cloudopslag', 'online bankieren', 'medische dossiers',
  'academische databanken', 'alles achter een login of paywall'], 30, C.GRAY, 500, 'start', 1.4);

c.txt(80, 710, 'dark web', 48, C.RED_DARK, 700, 'start');
c.lines(80, 765, ['enkel bereikbaar via TOR (.onion)', 'illegale handel, rent-a-hacker',
  'journalisten en klokkenluiders', 'activisten in censuurlanden'], 30, C.GRAY, 500, 'start', 1.4);

// ---------- de 96% ----------
c.path(`M 1120 ${WATER + 10} L 1100 ${WATER + 10} L 1100 ${BODEM - 10} L 1120 ${BODEM - 10}`,
  { stroke: C.RED, strokeWidth: 2.6, roughness: 1.1 });
c.lines(1145, 470, ['96% van alle content', 'op het web (schatting)'],
  36, C.RED_DARK, 700, 'start', 1.35);

c.save('ijsberg');
plaats('ijsberg', '../content/appendix/darkweb', '../slides/darkweb');
