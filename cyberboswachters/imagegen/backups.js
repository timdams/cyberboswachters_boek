// backups - 1 back-up naast je servers is niet genoeg: ook offsite en offline (cold) back-ups
// Draaien vanuit de map waar excal.js staat:  node backups.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1720, 700);

const dashed = { fill: 'none', stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10] };
const versleuteld = { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
  stroke: C.RED, strokeWidth: 2.6 };
const intact = { stroke: C.GRAY, strokeWidth: 2.6 };

const doos = (x, y, w, h, kop, sub, opts, subColor) => {
  c.rect(x, y, w, h, opts);
  c.txt(x + w / 2, y + h / 2 - 4, kop, 34, C.GRAY, 700);
  c.txt(x + w / 2, y + h / 2 + 34, sub, 28, subColor);
};

// ================= links: niet genoeg =================
c.txt(380, 62, '1 back-up: niet genoeg', 42, C.RED_DARK, 700);

c.rect(60, 110, 640, 300, dashed);
c.txt(90, 152, 'on-prem', 28, C.GRAY, 400, 'start');
doos(100, 190, 260, 150, 'servers', 'versleuteld', versleuteld, C.RED_DARK);
doos(400, 190, 260, 150, 'back-up', 'versleuteld', versleuteld, C.RED_DARK);

c.txt(380, 490, 'ransomware versleutelt alles', 36, C.GRAY, 700);
c.txt(380, 540, 'geen herstel mogelijk', 36, C.RED_DARK, 700);

// scheiding
c.line(800, 60, 800, 660, { stroke: C.GRAY, strokeWidth: 1.5, strokeLineDash: [6, 10] });

// ================= rechts: wel zo =================
c.txt(1280, 62, 'meerdere back-ups, niet alles on-prem', 40, C.RED_DARK, 700);

c.rect(900, 110, 760, 250, dashed);
c.txt(930, 152, 'on-prem', 28, C.GRAY, 400, 'start');
doos(940, 180, 320, 150, 'servers', 'versleuteld', versleuteld, C.RED_DARK);
doos(1300, 180, 320, 150, 'back-up 1', 'versleuteld', versleuteld, C.RED_DARK);

// verbinding naar offsite back-up (online) en cold back-up (losgekoppeld)
c.line(1080, 360, 1080, 450, { stroke: C.GRAY, strokeWidth: 2.4 });
c.line(1480, 360, 1480, 392, { stroke: C.GRAY, strokeWidth: 2.4 });
c.line(1480, 420, 1480, 450, { stroke: C.GRAY, strokeWidth: 2.4 });
c.txt(1500, 418, 'losgekoppeld', 26, C.RED_DARK, 700, 'start');

doos(900, 450, 360, 150, 'back-up 2', 'cloud of andere locatie', intact, C.GRAY);
doos(1300, 450, 360, 150, 'cold back-up', 'offline', intact, C.GRAY);

c.txt(1280, 660, 'herstel mogelijk', 36, C.RED_DARK, 700);

c.save('backups');
