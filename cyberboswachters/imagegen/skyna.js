// skyna - het lint afgewikkeld: de letters staan nu in de volgorde van de ciphertext.
// Draaien vanuit deze map:  node skyna.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');
const { cipher } = require('./scytale');

const c = createCanvas(1200, 300);

const TEKST = cipher();
const MID = 150, AMP = 20, PERIODE = 560;
const golf = x => AMP * Math.sin(2 * Math.PI * x / PERIODE);

// ---------- het lint ----------
function rand(offset) {
  let d = `M 60 ${MID + offset + golf(60)}`;
  for (let x = 60; x < 1140; x += 36) {
    const nx = Math.min(x + 36, 1140);
    d += ` L ${nx} ${MID + offset + golf(nx)}`;
  }
  return d;
}
c.path(rand(-58), { strokeWidth: 2.6, roughness: 0.5, disableMultiStroke: true });
c.path(rand(58), { strokeWidth: 2.6, roughness: 0.5, disableMultiStroke: true });
c.line(60, MID - 58 + golf(60), 60, MID + 58 + golf(60), { strokeWidth: 2.6 });
c.line(1140, MID - 58 + golf(1140), 1140, MID + 58 + golf(1140), { strokeWidth: 2.6 });

// ---------- de letters op het lint ----------
const PITCH = 46, START = 600 - (TEKST.length - 1) * PITCH / 2;
[...TEKST].forEach((l, i) => {
  const x = START + i * PITCH;
  c.txt(x, MID + golf(x) + 20, l, 58, C.GRAY, 600);
});

c.save('skyna');
plaats('skyna', '../content/1_cryptografie/assets', '../slides/crypto_assets');
