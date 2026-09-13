// dwelltime - aanvallers zijn in minuten binnen, maar worden pas na maanden ontdekt (Verizon DBIR)
// Draaien vanuit deze map:  node dwelltime.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1700, 420);

const Y = 300, START = 120, BINNEN = 260, ONTDEKT = 1420;

// ---------- de twee fases ----------
c.rect(START, 200, BINNEN - START, 70, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6,
  fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.6 });
c.lines(START, 112, ['aanval tot inbraak:', '75% binnen minuten'], 32, C.RED_DARK, 700, 'start', 1.15);

c.rect(BINNEN + 10, 200, ONTDEKT - BINNEN - 10, 70, { strokeLineDash: [12, 9], strokeWidth: 2.2 });
c.txt((BINNEN + ONTDEKT) / 2 + 60, 246, 'de aanvaller zit ongemerkt in je netwerk', 32, C.GRAY, 700);

c.line(ONTDEKT, 150, ONTDEKT, Y, { stroke: C.RED, strokeWidth: 3 });
c.lines(ONTDEKT - 20, 112, ['inbraak tot ontdekking:', '54% pas na maanden'], 32, C.RED_DARK, 700, 'end', 1.15);

// ---------- tijdas ----------
c.arrow(80, Y, 1640, Y, { strokeWidth: 2.6, head: 16 });
[['minuten', 260], ['uren', 480], ['dagen', 760], ['weken', 1080], ['maanden', 1420]].forEach(([s, x]) => {
  c.line(x, Y - 8, x, Y + 10, { strokeWidth: 2.2, roughness: 1 });
  c.txt(x, Y + 52, s, 30, C.GRAY, 700);
});

c.save('dwelltime');
plaats('dwelltime', '../content/0_het_security_landschap/assets', '../slides/assets');
