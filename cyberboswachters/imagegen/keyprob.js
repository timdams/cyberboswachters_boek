// keyprob - het sleutelverdelingsprobleem bij symmetrische encryptie: elk paar
// gebruikers heeft een eigen sleutel nodig.
// Draaien vanuit deze map:  node keyprob.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1300, 820);

const CX = 500, CY = 410, STRAAL = 300, R = 50;

// zes gebruikers op een zeshoek, met de eerste bovenaan
const KNOPEN = [];
for (let i = 0; i < 6; i++) {
  const a = (-90 + i * 60) * Math.PI / 180;
  KNOPEN.push([CX + STRAAL * Math.cos(a), CY + STRAAL * Math.sin(a)]);
}

// ---------- een sleutel per paar: 15 lijnen ----------
for (let i = 0; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    const [x1, y1] = KNOPEN[i], [x2, y2] = KNOPEN[j];
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    const ux = dx / L, uy = dy / L, t = R + 6;
    c.line(x1 + ux * t, y1 + uy * t, x2 - ux * t, y2 - uy * t,
      { strokeWidth: 2, roughness: 1, strokeLineDash: [4, 9] });
  }
}

// ---------- de gebruikers ----------
KNOPEN.forEach(([x, y], i) => {
  c.circle(x, y, R * 2, {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
    stroke: C.RED, strokeWidth: 2.6
  });
  c.txt(x, y + 16, String(i + 1), 46, C.GRAY, 700);
});

// ---------- de rekensom ----------
c.lines(900, 380, ['6 gebruikers', 'n(n-1)/2 = 15 sleutels'], 36, C.RED_DARK, 700, 'start', 1.45);

c.save('keyprob');
plaats('keyprob', '../content/1_cryptografie/assets', '../slides/crypto_assets');
