// kist_metafoor - publieke crypto als kist: de publieke sleutel is een openstaande kist die
// iedereen kan dichtklikken, enkel de eigenaar opent hem met de private sleutel.
// De drie kisten komen uit het imagegen-bronbeeld kist_drieluik.png (zie slidebeelden_crypto.sh)
// en worden hier uitgeknipt via een geneste SVG met viewBox; tekst en pijlen komen uit excal.js.
// Draaien vanuit deze map:  node kist_metafoor.js
const fs = require('fs');
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1700, 580);
const SVGNS = 'http://www.w3.org/2000/svg';
// achtergrond gelijk aan die van het bronbeeld (gesampled: #f7f7f7), zodat de uitsnedes niet als rechthoeken opvallen
c.svg.querySelector('rect').setAttribute('fill', '#f7f7f7');
const BRON = 'data:image/png;base64,' + fs.readFileSync('kist_drieluik.png').toString('base64');

// knip het gebied (sx, sy, sw, sh) uit het bronbeeld (1280x720) en zet het op (x, y) met schaal s
function uitsnede(x, y, s, sx, sy, sw, sh) {
  const nest = c.document.createElementNS(SVGNS, 'svg');
  nest.setAttribute('x', x); nest.setAttribute('y', y);
  nest.setAttribute('width', sw * s); nest.setAttribute('height', sh * s);
  nest.setAttribute('viewBox', `${sx} ${sy} ${sw} ${sh}`);
  const img = c.document.createElementNS(SVGNS, 'image');
  img.setAttribute('width', 1280); img.setAttribute('height', 720);
  img.setAttribute('href', BRON);
  nest.appendChild(img);
  c.svg.appendChild(nest);
}

const S = 0.95, TOP = 40, SY = 95, SH = 430;
uitsnede(40, TOP, S, 0, SY, 380, SH);      // open kist, hand legt brief erin
uitsnede(660, TOP, S, 440, SY, 340, SH);   // kist op slot met rood hangslot
uitsnede(1240, TOP, S, 840, SY, 440, SH);  // eigenaar opent met sleutel

// pijlen met uitleg in de tussenruimtes
const PY = 320;
c.lines(530, 232, ['iedereen legt een', 'boodschap erin en', 'klikt het slot dicht'], 24, C.GRAY, 400, 'middle', 1.15);
c.arrow(420, PY, 640, PY, { strokeWidth: 2.6, head: 16 });
c.lines(1112, 232, ['enkel de eigenaar', 'opent het slot met', 'de private sleutel'], 24, C.RED_DARK, 700, 'middle', 1.15);
c.arrow(1002, PY, 1222, PY, { stroke: C.RED, strokeWidth: 2.8, head: 16 });

// onderschriften
const LY = TOP + SH * S + 42;
c.lines(220, LY, ['publieke sleutel:', 'openstaande kist'], 30, C.GRAY, 700, 'middle', 1.1);
c.lines(821, LY, ['op slot geklikt', '(geëncrypteerd)'], 30, C.GRAY, 700, 'middle', 1.1);
c.lines(1449, LY, ['private sleutel:', 'enkel de eigenaar opent'], 30, C.RED_DARK, 700, 'middle', 1.1);

c.save('kist_metafoor');
plaats('kist_metafoor', '../content/1_cryptografie/assets', '../slides/crypto_assets');
