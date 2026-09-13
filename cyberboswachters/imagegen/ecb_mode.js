// ecb_mode - ECB (Electronic Codebook): elk blok apart encrypteren met dezelfde sleutel.
// Twee identieke plaintext-blokken geven twee identieke ciphertext-blokken.
// Zelfde stijl als ctr.js. Draaien vanuit deze map:  node ecb_mode.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const W = 1650;
const c = createCanvas(W, 580);

const CX = [400, 920, 1440];
const PT = ['0110', '1011', '0110'];
const CT = ['1100', '0101', '1100'];
const GELIJK = [true, false, true];

CX.forEach((cx, i) => {
  const accent = GELIJK[i] ? { stroke: C.RED, strokeWidth: 3 } : {};

  // plaintext-blok
  c.rect(cx - 130, 40, 260, 90, accent);
  c.txt(cx, 75, `Plaintext ${i + 1}`, 26, C.GRAY, 600);
  c.txt(cx, 115, PT[i], 32, GELIJK[i] ? C.RED_DARK : C.GRAY, 700);
  c.arrow(cx, 134, cx, 186, { strokeWidth: 2.2 });

  // blockcipher
  c.rect(cx - 150, 190, 300, 100, {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
    stroke: C.RED, strokeWidth: 2.4
  });
  c.lines(cx, 235, ['Blockcipher', 'encryptie'], 28, C.GRAY, 700);

  // sleutel
  c.txt(cx - 215, 252, 'K', 36, C.RED_DARK, 700);
  c.arrow(cx - 190, 240, cx - 155, 240, { stroke: C.RED_DARK, strokeWidth: 2.2, head: 12 });

  c.arrow(cx, 292, cx, 346, { strokeWidth: 2.2 });

  // ciphertext-blok
  c.rect(cx - 130, 350, 260, 90, accent);
  c.txt(cx, 385, `Ciphertext ${i + 1}`, 26, C.GRAY, 600);
  c.txt(cx, 425, CT[i], 32, GELIJK[i] ? C.RED_DARK : C.GRAY, 700);
});

c.txt(W / 2, 525, 'blok 1 en blok 3: zelfde plaintext geeft zelfde ciphertext', 36, C.RED_DARK, 700);

c.save('ecb_mode');
plaats('ecb_mode', '../slides/crypto_assets');
