// window_vuln - het window of vulnerability op een tijdlijn, met Patch Tuesday en Exploit Wednesday
// Draaien vanuit deze map:  node window_vuln.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1700, 440);

const Y = 210;                 // tijdas
const ZD = 260, PATCH = 900, EXPL = 1010, KLAAR = 1400;

// ---------- zones ----------
c.rect(ZD, Y - 80, PATCH - ZD, 80, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
  stroke: C.RED, strokeWidth: 2.6 });
c.txt((ZD + PATCH) / 2, Y - 118, 'window of vulnerability', 40, C.RED_DARK, 700);
c.txt((ZD + PATCH) / 2, Y - 28, 'aanvaller heeft vrij spel', 32, C.GRAY, 700);

c.rect(PATCH, Y - 60, KLAAR - PATCH, 60, { strokeLineDash: [12, 9], strokeWidth: 2.2 });
c.txt((PATCH + KLAAR) / 2, Y - 90, 'niet-gepatchte systemen blijven kwetsbaar', 28, C.GRAY, 700);

// ---------- tijdas ----------
c.arrow(80, Y, 1640, Y, { strokeWidth: 2.6, head: 16 });
c.txt(1640, Y + 50, 'tijd', 30, C.GRAY, 700, 'end');

// ---------- momenten ----------
[ZD, PATCH, KLAAR].forEach(x => c.line(x, Y - 6, x, Y + 34, { strokeWidth: 2.6, roughness: 1 }));
c.txt(ZD, Y + 75, 'zero day ontdekt', 30, C.GRAY, 700);
c.txt(PATCH - 12, Y + 75, 'patch verschijnt', 30, C.GRAY, 700, 'end');
c.txt(PATCH - 12, Y + 112, 'Patch Tuesday', 30, C.RED_DARK, 700, 'end');
c.txt(KLAAR, Y + 75, 'systeem gepatcht', 30, C.GRAY, 700);

c.line(EXPL, Y + 4, EXPL, Y + 130, { stroke: C.RED, strokeWidth: 2, strokeLineDash: [8, 7] });
c.lines(EXPL + 20, Y + 160, ['Exploit Wednesday:', 'aanvallers ontleden de patch'], 30, C.RED_DARK, 700, 'start', 1.15);

c.save('window_vuln');
plaats('window_vuln', '../content/0_het_security_landschap/assets', '../slides/assets');
