// oldsmar - aanval op de waterzuivering van Oldsmar (2021) en de 2 sensoren die ze tegenhielden
// Draaien vanuit de map waar excal.js staat:  node oldsmar.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1700, 540);

const Y = 330, H = 150, MID = Y + H / 2;
const flow = { stroke: C.GRAY, strokeWidth: 2.4, head: 15 };

// ---------- hacker ----------
c.rect(40, Y, 240, H, { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY });
c.txt(160, MID + 14, 'hacker', 42, C.WHITE, 700);
c.arrow(290, MID, 415, MID, { stroke: C.RED, strokeWidth: 2.6, head: 15 });

// ---------- bedieningsscherm ----------
c.rect(430, Y, 320, H);
c.txt(590, Y + 48, 'bedieningsscherm', 34, C.GRAY, 700);
c.txt(590, Y + 92, 'natriumhydroxide', 30, C.GRAY);
c.txt(590, Y + 128, 'op dodelijk niveau', 30, C.RED_DARK, 700);
c.arrow(760, MID, 885, MID, flow);

// ---------- waterzuivering ----------
c.rect(900, Y, 300, H);
c.lines(1050, MID - 6, ['waterzuivering', 'Oldsmar'], 34, C.GRAY, 700, 'middle', 1.15);

// ---------- leiding naar drinkwater ----------
c.arrow(1210, MID, 1395, MID, flow);
c.rect(1410, Y, 250, H, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6,
  fillWeight: 1.5, stroke: C.GRAY, strokeWidth: 2.4 });
c.txt(1535, MID + 12, 'drinkwater', 38, C.GRAY, 700);

// ---------- de 2 sensoren ----------
const sensor = (cx, nr, kop, uitleg, tot) => {
  c.txt(cx, 62, kop, 34, C.RED_DARK, 700);
  c.txt(cx, 102, uitleg, 28, C.GRAY);
  c.circle(cx, 180, 70, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5,
    stroke: C.RED, strokeWidth: 2.6 });
  c.txt(cx, 180 + 14, String(nr), 40, C.RED_DARK, 700);
  c.line(cx, 222, cx, tot, { stroke: C.RED, strokeWidth: 2, strokeLineDash: [10, 8] });
};
sensor(590, 1, 'sensor 1: de operator', 'ziet zijn muis bewegen en zet de waarde terug', Y - 10);
sensor(1302, 2, 'sensor 2: detectoren verderop', 'hadden het vergiftigde water gedetecteerd', MID - 12);

c.save('oldsmar');
