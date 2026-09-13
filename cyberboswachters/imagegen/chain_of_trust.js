// chain_of_trust - de keten van CA's onder een root CA, en een breach of trust:
// wordt de private sleutel van een CA gestolen, dan wordt alles eronder ongeldig.
// Draaien vanuit deze map:  node chain_of_trust.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1500, 840);

const ok = {};
const kapot = { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.4,
  stroke: C.RED, strokeWidth: 2.4, strokeLineDash: [12, 8] };
const pijl = { strokeWidth: 2.2, head: 14 };
const rodePijl = { stroke: C.RED, strokeWidth: 2.2, head: 14, strokeLineDash: [10, 8] };

const blok = (x, y, w, tekst, stijl, kleur = C.GRAY) => {
  c.rect(x, y, w, 80, stijl);
  const regels = Array.isArray(tekst) ? tekst : [tekst];
  c.lines(x + w / 2, y + 48 - (regels.length - 1) * 15, regels, 30, kleur, 700, 'middle', 1.0);
};

// root
blok(650, 40, 220, ['Root CA', '(self-signed)'], ok);

// tweede niveau
blok(250, 250, 220, 'CA', ok);
blok(1030, 250, 220, 'CA', kapot, C.RED_DARK);
c.arrow(700, 124, 380, 244, pijl);
c.arrow(820, 124, 1120, 244, pijl);

// onder de gezonde CA
blok(70, 470, 220, 'certificaat', ok);
blok(430, 470, 220, 'certificaat', ok);
c.arrow(320, 334, 190, 464, pijl);
c.arrow(400, 334, 530, 464, pijl);
c.txt(360, 610, 'nog geldig', 30, C.GRAY, 700);

// onder de gehackte CA
blok(860, 470, 220, 'certificaat', kapot, C.RED_DARK);
blok(1210, 470, 220, 'sub-CA', kapot, C.RED_DARK);
blok(1210, 650, 220, 'certificaat', kapot, C.RED_DARK);
c.arrow(1100, 334, 980, 464, rodePijl);
c.arrow(1180, 334, 1310, 464, rodePijl);
c.arrow(1320, 554, 1320, 644, rodePijl);

c.lines(1010, 282, ['private sleutel', 'gestolen'], 30, C.RED_DARK, 700, 'end', 1.1);
c.lines(970, 690, ['alle certificaten onder', 'deze CA worden ongeldig'], 32, C.RED_DARK, 700, 'middle', 1.15);

c.save('chain_of_trust');
plaats('chain_of_trust', '../slides/crypto_assets');
