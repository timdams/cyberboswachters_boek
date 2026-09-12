// skypre - de plaintext gewikkeld rond een scytale: elke volgende letter komt op een
// andere zijde terecht. Per zijde lees je de letters van boven naar beneden.
// Draaien vanuit deze map:  node skypre.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');
const { ZIJDEN, zijden } = require('./scytale');

const KOLOMMEN = zijden();
const RIJEN = KOLOMMEN[0].length;

const CEL = 84, BREED = 110, PITCH = 120, TOP = 170, SCHUIN = 21;
const X0 = 300 - (ZIJDEN - 1) * PITCH / 2;

const c = createCanvas(600, 760);

KOLOMMEN.forEach((letters, i) => {
  const cx = X0 + i * PITCH;
  // De strook staat telkens wat hoger: zo zie je dat het lint schuin rond de stok draait.
  const top = TOP - SCHUIN * i;
  c.rect(cx - BREED / 2, top, BREED, RIJEN * CEL + SCHUIN * (ZIJDEN - 1), { strokeWidth: 2.4 });
  letters.forEach((l, r) => c.txt(cx, TOP + r * CEL + 58, l, 50, C.GRAY, 600));
  c.txt(cx, 706, 'zijde ' + (i + 1), 30, C.RED_DARK, 700);
});

c.save('skypre');
plaats('skypre', '../content/1_cryptografie/assets', '../slides/crypto_assets');
