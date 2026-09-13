// handtekening - digitale handtekening als concept: Bob ondertekent met zijn private sleutel,
// Alice controleert met Bobs publieke sleutel. Het bericht zelf blijft leesbaar.
// Draaien vanuit deze map:  node handtekening.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1880, 440);

const Y = 220;
const accent = { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 };
const pijl = { strokeWidth: 2.4, head: 15 };

// Bob en zijn bericht
c.txt(80, Y + 14, 'Bob', 42, C.GRAY, 700);
c.rect(150, Y - 50, 180, 100);
c.txt(240, Y + 11, 'bericht', 32, C.GRAY, 700);
c.arrow(336, Y, 424, Y, pijl);

// ondertekenen met private sleutel
c.rect(430, Y - 55, 260, 110, accent);
c.txt(560, Y + 11, 'ondertekenen', 32, C.GRAY, 700);
c.txt(560, Y - 150, 'Bobs private sleutel', 30, C.RED_DARK, 700);
c.arrow(560, Y - 135, 560, Y - 62, { stroke: C.RED_DARK, strokeWidth: 2.4, head: 15 });
c.arrow(696, Y, 774, Y, pijl);

// bericht + handtekening
c.rect(780, Y - 50, 180, 100);
c.txt(870, Y + 11, 'bericht', 32, C.GRAY, 700);
c.rect(962, Y - 28, 200, 56, accent);
c.txt(1062, Y + 9, 'handtekening', 28, C.GRAY, 700);
c.txt(970, Y + 100, 'bericht blijft leesbaar', 28, C.GRAY, 400);
c.arrow(1168, Y, 1246, Y, pijl);

// controle met publieke sleutel
c.txt(1370, Y - 110, 'Alice', 42, C.GRAY, 700);
c.rect(1252, Y - 55, 240, 110);
c.txt(1372, Y + 11, 'controle', 32, C.GRAY, 700);
c.txt(1372, Y + 170, 'Bobs publieke sleutel', 30, C.GRAY, 700);
c.arrow(1372, Y + 140, 1372, Y + 62, pijl);
c.arrow(1498, Y, 1570, Y, pijl);

// resultaat
c.lines(1590, Y - 8, ['komt van Bob en', 'is niet aangepast'], 32, C.RED_DARK, 700, 'start', 1.15);

c.save('handtekening');
plaats('handtekening', '../content/1_cryptografie/assets', '../slides/crypto_assets');
