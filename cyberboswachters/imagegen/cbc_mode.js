// cbc_mode - CBC (Cipher Block Chaining): de ciphertext van het vorige blok (of de IV bij
// het eerste blok) wordt met de plaintext ge-XOR'd vóór de encryptie.
// Zelfde stijl als ctr.js. Draaien vanuit deze map:  node cbc_mode.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const W = 1700;
const c = createCanvas(W, 660);

const CX = [480, 980, 1480];
const XY = 240; // hoogte van de XOR

const xor = (cx, cy) => {
  c.circle(cx, cy, 64, { strokeWidth: 2.2 });
  c.line(cx - 20, cy, cx + 20, cy, { strokeWidth: 2.2, roughness: 1.1 });
  c.line(cx, cy - 20, cx, cy + 20, { strokeWidth: 2.2, roughness: 1.1 });
};

// IV
c.rect(60, XY - 35, 200, 70, { stroke: C.RED, strokeWidth: 2.6 });
c.txt(160, XY + 11, 'IV', 34, C.RED_DARK, 700);
c.arrow(264, XY, CX[0] - 36, XY, { stroke: C.RED, strokeWidth: 2.4, head: 14 });

CX.forEach((cx, i) => {
  // plaintext
  c.rect(cx - 120, 30, 240, 70);
  c.txt(cx, 76, `Plaintext ${i + 1}`, 28, C.GRAY, 600);
  c.arrow(cx, 102, cx, XY - 36, { strokeWidth: 2.2 });

  xor(cx, XY);
  c.arrow(cx, XY + 33, cx, 326, { strokeWidth: 2.2 });

  // blockcipher
  c.rect(cx - 150, 330, 300, 100, {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
    stroke: C.RED, strokeWidth: 2.4
  });
  c.lines(cx, 375, ['Blockcipher', 'encryptie'], 28, C.GRAY, 700);
  c.txt(cx - 215, 392, 'K', 36, C.RED_DARK, 700);
  c.arrow(cx - 190, 380, cx - 155, 380, { stroke: C.RED_DARK, strokeWidth: 2.2, head: 12 });

  c.arrow(cx, 432, cx, 496, { strokeWidth: 2.2 });

  // ciphertext
  c.rect(cx - 120, 500, 240, 70);
  c.txt(cx, 546, `Ciphertext ${i + 1}`, 28, C.GRAY, 600);

  // ketting naar de XOR van het volgende blok
  if (i < CX.length - 1) {
    const mx = (cx + CX[i + 1]) / 2 - 20;
    const o = { stroke: C.RED, strokeWidth: 2.4 };
    c.line(cx + 122, 535, mx, 535, o);
    c.line(mx, 535, mx, XY, o);
    c.arrow(mx, XY, CX[i + 1] - 36, XY, { ...o, head: 14 });
  }
});

c.txt(W / 2, 630, 'de ciphertext van het vorige blok gaat mee in de XOR', 34, C.RED_DARK, 700);

c.save('cbc_mode');
plaats('cbc_mode', '../slides/crypto_assets');
