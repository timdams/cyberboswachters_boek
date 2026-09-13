// hash_avalanche - twee inputs die maar 1 teken verschillen geven een totaal andere hash
// met vaste lengte. De hashes zijn echte SHA-256-waarden, berekend bij het renderen.
// Draaien vanuit deze map:  node hash_avalanche.js
const crypto = require('crypto');
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1640, 520);

const sha = s => crypto.createHash('sha256').update(s, 'utf8').digest('hex');
const kort = h => h.slice(0, 24) + '...';

const rij = (y, begin, laatste) => {
  const hash = sha(begin + laatste);
  c.rect(40, y - 45, 460, 90);
  c.txtSegs(270, y + 12, [
    { t: begin, color: C.GRAY, weight: 700 },
    { t: laatste, color: C.RED_DARK, weight: 700 }
  ], 36, 'middle');
  c.arrow(506, y, 584, y, { strokeWidth: 2.4, head: 15 });

  c.poly([[590, y - 55], [850, y - 55], [810, y + 55], [630, y + 55]], {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4
  });
  c.txt(720, y + 11, 'SHA-256', 30, C.GRAY, 700);
  c.arrow(856, y, 934, y, { strokeWidth: 2.4, head: 15 });

  c.rect(940, y - 45, 660, 90);
  c.txt(1270, y + 11, kort(hash), 32, C.GRAY, 700);
};

rij(120, 'Ik heb geen honger', '.');
rij(330, 'Ik heb geen honger', '!');

c.txt(820, 470, '1 teken verschil in de input: een totaal andere hash', 36, C.RED_DARK, 700);

c.save('hash_avalanche');
plaats('hash_avalanche', '../slides/crypto_assets');
