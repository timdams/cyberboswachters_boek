// cert_verificatie - de CA ondertekent een certificaat (hash van de inhoud, versleuteld met de
// private sleutel van de CA) en de browser controleert door twee hashes te vergelijken.
// Draaien vanuit deze map:  node cert_verificatie.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1800, 690);

const kader = { fill: 'none', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1.2, strokeLineDash: [12, 10] };
const accent = { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 };
const pijl = { strokeWidth: 2.2, head: 14 };

// ---------- links: de CA ondertekent ----------
c.rect(30, 30, 760, 630, kader);
c.txt(410, 85, 'CA ondertekent (eenmalig)', 36, C.RED_DARK, 700);

c.rect(90, 130, 300, 200);
c.txt(240, 172, 'certificaat', 32, C.GRAY, 700);
c.lines(240, 222, ['Bob', 'Bobs publieke sleutel', 'info over de CA'], 27, C.GRAY, 400, 'middle', 1.3);

c.arrow(240, 335, 240, 390, pijl);
c.rect(160, 395, 160, 70);
c.txt(240, 440, 'hash', 30, C.GRAY, 700);
c.arrow(240, 470, 240, 525, pijl);
c.rect(100, 530, 280, 96, accent);
c.lines(240, 568, ['versleutelen met', 'private sleutel CA'], 28, C.GRAY, 700, 'middle', 1.1);

c.arrow(385, 578, 470, 578, pijl);
c.rect(475, 553, 230, 52, accent);
c.txt(590, 588, 'handtekening', 28, C.GRAY, 700);
// handtekening gaat mee in het certificaat
c.line(590, 548, 590, 250, { strokeWidth: 2.2, strokeLineDash: [10, 8] });
c.arrow(590, 250, 396, 250, { ...pijl, strokeLineDash: [10, 8] });
c.lines(575, 390, ['mee in het', 'certificaat'], 26, C.GRAY, 400, 'end', 1.1);

// ---------- rechts: de browser controleert ----------
c.rect(840, 30, 930, 630, kader);
c.txt(1305, 85, 'browser controleert', 36, C.RED_DARK, 700);

// pad A: zelf hashen
c.rect(880, 140, 290, 80);
c.txt(1025, 190, 'inhoud certificaat', 28, C.GRAY, 700);
c.arrow(1175, 180, 1245, 180, pijl);
c.rect(1250, 140, 150, 80);
c.txt(1325, 190, 'hash', 30, C.GRAY, 700);

// pad B: handtekening ontsleutelen
c.rect(880, 380, 290, 80, accent);
c.txt(1025, 430, 'handtekening', 28, C.GRAY, 700);
c.arrow(1175, 420, 1245, 420, pijl);
c.rect(1250, 370, 260, 100);
c.lines(1380, 410, ['ontsleutelen met', 'publieke sleutel CA'], 26, C.GRAY, 700, 'middle', 1.1);

// vergelijken
const DX = 1640, DY = 300;
c.poly([[DX - 95, DY], [DX, DY - 85], [DX + 95, DY], [DX, DY + 85]], { strokeWidth: 2.4 });
c.txt(DX, DY + 11, 'gelijk?', 32, C.GRAY, 700);
c.line(1404, 180, DX, 180, { strokeWidth: 2.2 });
c.arrow(DX, 180, DX, DY - 90, pijl);
c.line(1514, 420, DX, 420, { strokeWidth: 2.2 });
c.arrow(DX, 420, DX, DY + 90, pijl);

c.txt(1305, 545, 'ja: certificaat in orde', 32, C.GRAY, 700);
c.txt(1305, 595, 'nee: niet vertrouwen', 32, C.RED_DARK, 700);

c.save('cert_verificatie');
plaats('cert_verificatie', '../slides/crypto_assets');
