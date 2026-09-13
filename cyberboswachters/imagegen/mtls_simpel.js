// mtls_simpel - mutual TLS: niet enkel de server, ook de client toont een certificaat.
// Beide certificaten worden gecontroleerd bij dezelfde CA.
// Draaien vanuit deze map:  node mtls_simpel.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1600, 530);

const accent = { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 };

const partij = (x, naam) => {
  c.rect(x, 220, 300, 170, { strokeWidth: 2.4 });
  c.txt(x + 150, 280, naam, 40, C.GRAY, 700);
  c.rect(x + 30, 318, 240, 50, accent);
  c.txt(x + 150, 353, 'certificaat', 28, C.GRAY, 700);
};

partij(100, 'client');
partij(1200, 'server');

// CA bovenaan
c.txt(800, 40, 'beide certificaten worden gecontroleerd bij dezelfde CA', 26, C.GRAY, 400);
c.rect(700, 60, 200, 80, { strokeWidth: 2.4 });
c.txt(800, 112, 'CA', 38, C.GRAY, 700);
c.line(720, 144, 330, 214, { strokeWidth: 2, strokeLineDash: [10, 8] });
c.line(880, 144, 1270, 214, { strokeWidth: 2, strokeLineDash: [10, 8] });

// server toont certificaat
c.arrow(1192, 262, 408, 262, { strokeWidth: 2.4, head: 15 });
c.txt(800, 247, 'server toont zijn certificaat', 28, C.GRAY, 700);

// client toont certificaat (het extra deel van mTLS)
c.arrow(408, 345, 1192, 345, { stroke: C.RED, strokeWidth: 2.6, head: 15 });
c.txt(800, 390, 'client toont ook zijn certificaat', 30, C.RED_DARK, 700);

c.txt(800, 480, 'gewone HTTPS: enkel de server toont een certificaat', 28, C.GRAY, 400);

c.save('mtls_simpel');
plaats('mtls_simpel', '../slides/crypto_assets');
