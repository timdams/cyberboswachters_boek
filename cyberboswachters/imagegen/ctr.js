// ctr - CTR (Counter) mode: de teller wordt geëncrypteerd en het resultaat ge-XOR'd
// met de plaintext. Decryptie gebruikt exact dezelfde encryptie-operatie.
// Draaien vanuit deze map:  node ctr.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const W = 1650;
const c = createCanvas(W, 1330);

const CX = [400, 920, 1440];
const TELLERS = ['Teller 1 (IV)', 'Teller 2 (IV+1)', 'Teller N (IV+N-1)'];

// Eén helft van de figuur: dy schuift alles naar beneden, in/uit wisselen
// plaintext en ciphertext van plaats.
function helft(dy, invoer, uitvoer, onderschrift) {
  // gestippeld kader rond het deel dat bij encryptie en decryptie identiek is
  c.rect(25, 25 + dy, W - 50, 285, {
    fill: 'none', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1.2,
    strokeLineDash: [12, 10]
  });

  CX.forEach((cx, i) => {
    // teller
    c.rect(cx - 160, 45 + dy, 320, 76);
    c.txt(cx, 93 + dy, TELLERS[i], 30, C.GRAY, 600);
    c.arrow(cx, 123 + dy, cx, 186 + dy, { strokeWidth: 2.2 });

    // blockcipher
    c.rect(cx - 150, 190 + dy, 300, 100, {
      fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
      stroke: C.RED, strokeWidth: 2.4
    });
    c.lines(cx, 235 + dy, ['Blockcipher', 'encryptie'], 28, C.GRAY, 700);

    // sleutel
    c.txt(cx - 215, 252 + dy, 'K', 36, C.RED_DARK, 700);
    c.arrow(cx - 190, 240 + dy, cx - 155, 240 + dy, { stroke: C.RED_DARK, strokeWidth: 2.2, head: 12 });

    c.arrow(cx, 292 + dy, cx, 364 + dy, { strokeWidth: 2.2 });

    // XOR
    c.circle(cx, 400 + dy, 64, { strokeWidth: 2.2 });
    c.line(cx - 20, 400 + dy, cx + 20, 400 + dy, { strokeWidth: 2.2, roughness: 1.1 });
    c.line(cx, 380 + dy, cx, 420 + dy, { strokeWidth: 2.2, roughness: 1.1 });

    // invoerblok links van de XOR
    c.rect(cx - 360, 365 + dy, 240, 70);
    c.txt(cx - 240, 410 + dy, invoer[i], 28, C.GRAY, 600);
    c.arrow(cx - 118, 400 + dy, cx - 40, 400 + dy, { strokeWidth: 2.2, head: 13 });

    // uitvoerblok onder de XOR
    c.arrow(cx, 434 + dy, cx, 496 + dy, { strokeWidth: 2.2 });
    c.rect(cx - 120, 500 + dy, 240, 70);
    c.txt(cx, 545 + dy, uitvoer[i], 28, C.GRAY, 600);
  });

  // beletselteken tussen blok 2 en blok N
  c.txt(1150, 258 + dy, '...', 52, C.GRAY, 700);

  c.txt(W / 2, 625 + dy, onderschrift, 38, C.RED_DARK, 700);
}

const P = ['Plaintext 1', 'Plaintext 2', 'Plaintext N'];
const CT = ['Ciphertext 1', 'Ciphertext 2', 'Ciphertext N'];

helft(0, P, CT, '(a) Encryptie');
helft(660, CT, P, '(b) Decryptie');

c.save('ctr');
plaats('ctr', '../content/1_cryptografie/assets', '../slides/crypto_assets');
