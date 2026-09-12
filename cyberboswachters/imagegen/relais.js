// relais - TOR onion routing: je verkeer gaat via guard, middle en exit relais naar de
// server. Het aantal lijnen per stuk is het aantal versleutelingslagen dat er nog op zit.
// Draaien vanuit deze map:  node relais.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1460, 720);

// ---------- helpers ----------
// bundel: n evenwijdige lijnen tussen twee punten, met een pijlpunt op het einde
function bundel(x1, y1, x2, y2, n, o = {}) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
  const ux = dx / L, uy = dy / L, px = -uy, py = ux, gap = 9;
  for (let i = 0; i < n; i++) {
    const d = (i - (n - 1) / 2) * gap;
    c.line(x1 + px * d, y1 + py * d, x2 + px * d, y2 + py * d, o);
  }
  c.arrow(x2 - ux * 0.5, y2 - uy * 0.5, x2, y2, { ...o, head: 16 });
}
// trim: kort een lijnstuk aan beide kanten in, zodat hij niet in een cirkel eindigt
function trim(p, t1, t2) {
  const [x1, y1, x2, y2] = p;
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
  return [x1 + ux * t1, y1 + uy * t1, x2 - ux * t2, y2 - uy * t2];
}

const PAD = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.3 };
const R = 40;

// ---------- het relais-raster ----------
const GX = [500, 720, 940], GY = [190, 380, 570];
const guard = [500, 190], middle = [720, 570], exit = [940, 380];
const opPad = ([x, y]) => (x === guard[0] && y === guard[1]) ||
  (x === middle[0] && y === middle[1]) || (x === exit[0] && y === exit[1]);

// accolade met "relais" erboven
c.path('M 455 128 Q 455 112 472 112 L 708 112 Q 720 112 720 98 Q 720 112 732 112 ' +
  'L 968 112 Q 985 112 985 128', { strokeWidth: 2.2, roughness: 1.3 });
c.txt(720, 84, 'relais', 38, C.GRAY, 700);

GY.forEach(y => GX.forEach(x => {
  const hot = opPad([x, y]);
  c.circle(x, y, R * 2, hot
    ? { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.6 }
    : { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
}));

// ---------- jij, links ----------
c.rect(70, 295, 130, 220, { strokeWidth: 2.4 });
c.rect(84, 320, 102, 155, { fill: C.OFFWHITE, fillStyle: 'solid', strokeWidth: 1.8, roughness: 1.2 });
c.line(118, 495, 152, 495, { strokeWidth: 2, roughness: 1.2 });
c.txt(135, 560, 'jij (TOR-browser)', 30, C.GRAY, 700);

// ---------- server, rechts ----------
c.rect(1240, 295, 140, 220, { strokeWidth: 2.4 });
[350, 405, 460].forEach(y => {
  c.line(1240, y, 1380, y, { strokeWidth: 1.8, roughness: 1.2 });
  c.circle(1263, y - 27, 13, { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.4 });
});
c.txt(1310, 560, 'server', 30, C.GRAY, 700);

// ---------- het circuit ----------
bundel(...trim([200, 405, ...guard], 6, R + 6), 3, PAD);
bundel(...trim([...guard, ...middle], R + 6, R + 6), 2, PAD);
bundel(...trim([...middle, ...exit], R + 6, R + 6), 1, PAD);
bundel(...trim([...exit, 1240, 405], R + 6, 6), 1, { ...PAD, strokeLineDash: [13, 10] });

// ---------- labels bij de drie relais ----------
c.txt(452, 168, 'guard', 32, C.RED_DARK, 700, 'end');
c.txt(720, 655, 'middle', 32, C.RED_DARK, 700);
c.txt(940, 312, 'exit', 32, C.RED_DARK, 700);

c.save('relais');
plaats('relais', '../content/appendix/darkweb', '../slides/darkweb');
