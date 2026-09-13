// kist_metafoor - publieke crypto als kist: de publieke sleutel is een openstaande kist die
// iedereen kan dichtklikken, enkel de eigenaar opent hem met de private sleutel.
// Draaien vanuit deze map:  node kist_metafoor.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1700, 440);

const Y0 = 150;           // bovenkant van de kist
const B = 220, H = 130;   // breedte en hoogte van de kist
const CX = [250, 850, 1450];

const lijf = cx => c.rect(cx - B / 2, Y0, B, H, { strokeWidth: 2.6 });
const openDeksel = cx => c.poly([[cx - B / 2, Y0], [cx + B / 2, Y0], [cx + B / 2 + 25, Y0 - 95], [cx - B / 2 + 25, Y0 - 95]],
  { fill: C.BOX_TOP, fillStyle: 'solid', strokeWidth: 2.4 });
// briefje dat boven de rand van de kist uitsteekt, zodat de tekst niet achter de kist verdwijnt
const boodschap = cx => {
  c.rect(cx - 70, Y0 - 62, 140, 52, { strokeWidth: 2 });
  c.txt(cx, Y0 - 27, 'boodschap', 26, C.GRAY, 700);
};

// 1. openstaande kist
openDeksel(CX[0]);
boodschap(CX[0]);
lijf(CX[0]);
c.lines(CX[0], Y0 + 180, ['publieke sleutel:', 'openstaande kist'], 30, C.GRAY, 700, 'middle', 1.1);

// 2. op slot geklikt
lijf(CX[1]);
c.rect(CX[1] - B / 2, Y0 - 40, B, 40, { fill: C.BOX_TOP, fillStyle: 'solid', strokeWidth: 2.4 });
c.path(`M ${CX[1] - 14} ${Y0 + 5} C ${CX[1] - 14} ${Y0 - 30} ${CX[1] + 14} ${Y0 - 30} ${CX[1] + 14} ${Y0 + 5}`,
  { stroke: C.RED, strokeWidth: 3 });
c.rect(CX[1] - 24, Y0 + 5, 48, 42, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5, stroke: C.RED, strokeWidth: 2.6 });
c.lines(CX[1], Y0 + 180, ['op slot geklikt', '(geëncrypteerd)'], 30, C.GRAY, 700, 'middle', 1.1);

// 3. geopend door de eigenaar
openDeksel(CX[2]);
boodschap(CX[2]);
lijf(CX[2]);
c.lines(CX[2], Y0 + 180, ['private sleutel:', 'enkel de eigenaar'], 30, C.RED_DARK, 700, 'middle', 1.1);

// pijlen met uitleg
c.arrow(385, Y0 + 65, 715, Y0 + 65, { strokeWidth: 2.4, head: 16 });
c.lines(550, Y0 + 115, ['iedereen: boodschap erin', 'en slot dicht'], 26, C.GRAY, 400, 'middle', 1.1);
c.arrow(985, Y0 + 65, 1315, Y0 + 65, { stroke: C.RED, strokeWidth: 2.6, head: 16 });
c.lines(1150, Y0 + 115, ['enkel de eigenaar opent', 'de kist weer'], 26, C.RED_DARK, 400, 'middle', 1.1);

c.save('kist_metafoor');
plaats('kist_metafoor', '../slides/crypto_assets');
