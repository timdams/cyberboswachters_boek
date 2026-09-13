// aiverdediger - AI (UBA) herkent afwijkend gedrag van een laptop en reageert automatisch
// Draaien vanuit de map waar excal.js staat:  node aiverdediger.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1700, 610);

const X0 = 100, BASE = 480, BW = 41.6;
// dataverkeer per uur: laag 's nachts, normaal tijdens de werkdag, piek om 3u
const hoogte = [8, 6, 8, 330, 8, 6, 8, 14, 70, 110, 95, 120, 60, 105, 115, 90, 100, 65, 16, 10, 8, 6, 8, 6];

hoogte.forEach((h, uur) => {
  const piek = uur === 3;
  c.rect(X0 + uur * BW + 5, BASE - h, BW - 10, h, piek
    ? { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 }
    : { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
});

// as + uurlabels
c.line(X0 - 10, BASE, X0 + 24 * BW + 10, BASE, { stroke: C.GRAY, strokeWidth: 2.4 });
[0, 3, 6, 12, 18, 24].forEach(u => c.txt(X0 + u * BW, BASE + 40, `${u}u`, 26, C.GRAY));
c.txt(X0 + 12 * BW, BASE + 100, 'dataverkeer van één laptop, per uur', 30, C.GRAY, 700);

// labels bij de balken
c.lines(X0 + 3.5 * BW, 70, ["3u 's nachts: gigabytes", 'naar een onbekend IP'], 30, C.RED_DARK, 700, 'middle', 1.1);
c.txt(X0 + 12.5 * BW, 320, 'normaal gedrag tijdens de werkdag', 30, C.GRAY);

// ---------- reactie ----------
c.txt(1195, 262, 'AI slaat alarm', 30, C.RED_DARK, 700);
c.arrow(1120, 300, 1262, 300, { stroke: C.RED, strokeWidth: 2.6, head: 15 });

c.rect(1280, 170, 380, 260, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7,
  fillWeight: 1.2, stroke: C.RED, strokeWidth: 2.4 });
c.lines(1470, 250, ['systeem isoleren', 'account blokkeren', 'back-ups activeren'], 34, C.GRAY, 700, 'middle', 1.75);

c.save('aiverdediger');
