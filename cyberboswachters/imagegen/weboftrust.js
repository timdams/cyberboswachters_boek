// weboftrust - Web of Trust: Alice ondertekent Bobs sleutel, Carol vertrouwt Alice
// en aanvaardt zo via een vertrouwenspad ook de sleutel van Bob.
// Draaien vanuit deze map:  node weboftrust.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1500, 800);

const persoon = (x, y, naam) => {
  c.rect(x, y, 220, 90, { strokeWidth: 2.4 });
  c.txt(x + 110, y + 57, naam, 40, C.GRAY, 700);
};

persoon(640, 70, 'Alice');
persoon(1120, 520, 'Bob');
persoon(160, 520, 'Carol');

// Alice ondertekent Bobs sleutel
c.arrow(860, 145, 1150, 512, { stroke: C.RED, strokeWidth: 2.8, head: 18 });
c.lines(1040, 250, ['ondertekent', 'Bobs publieke sleutel'], 30, C.RED_DARK, 700, 'start', 1.15);
c.txt(1060, 335, '(fingerprint persoonlijk gecontroleerd)', 24, C.GRAY, 400, 'start');

// Carol vertrouwt Alice
c.arrow(330, 512, 640, 150, { strokeWidth: 2.6, head: 17 });
c.lines(470, 280, ['vertrouwt', 'Alice'], 30, C.GRAY, 700, 'end', 1.15);

// vertrouwenspad van Carol naar Bob
c.carrow(385, 612, 750, 800, 1112, 612, { stroke: C.RED, strokeWidth: 2.6, strokeLineDash: [14, 10], head: 17 });
c.txt(750, 770, 'vertrouwenspad: Carol aanvaardt Bobs sleutel', 30, C.RED_DARK, 700);

c.save('weboftrust');
plaats('weboftrust', '../slides/crypto_assets');
