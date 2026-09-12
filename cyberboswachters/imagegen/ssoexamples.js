// ssoexamples - typische SSO-knoppen zoals je ze vandaag tegenkomt. De vakjes links
// staan voor het logo van de provider; we tekenen de merklogo's zelf niet na.
// Draaien vanuit deze map:  node ssoexamples.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(700, 736);

const PROVIDERS = [
  ['G', 'Google'], ['M', 'Microsoft'], ['A', 'Apple'],
  ['GH', 'GitHub'], ['f', 'Facebook'], ['i', 'itsme']
];

const X = 70, BREED = 560, HOOG = 86, STAP = 106, SLOT = 90;

PROVIDERS.forEach(([merk, naam], i) => {
  const y = 60 + i * STAP;
  c.rect(X, y, BREED, HOOG, { strokeWidth: 2.4 });
  c.rect(X, y, SLOT, HOOG, {
    fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
    stroke: C.RED, strokeWidth: 2.4
  });
  c.txt(X + SLOT / 2, y + 58, merk, 44, C.RED_DARK, 700);
  c.txt(X + SLOT + 30, y + 54, 'Aanmelden met ' + naam, 32, C.GRAY, 600, 'start');
});

c.save('ssoexamples');
plaats('ssoexamples', '../content/1_cryptografie/assets', '../slides/crypto_assets');
