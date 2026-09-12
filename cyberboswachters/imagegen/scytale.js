// Gedeelde data voor skypre.js en skyna.js, zodat het rooster en de ciphertext
// niet uit elkaar kunnen lopen.
//
// LET OP: de cursustekst zegt "een scytale met vier zijden". De oude figuren
// skypre.png en skyna.png gebruikten er in werkelijkheid vijf (hun ciphertext was
// "dzmneeeupnnaekearorn"). Hieronder staat vier, conform de tekst. Wil je toch de
// oude ciphertext terug, zet ZIJDEN op 5 en draai beide scripts opnieuw.
const ZIJDEN = 4;
const PLAIN = 'deperzenkomenernuaan';   // "De perzen komen er nu aan"

// Elke zijde krijgt om beurt een letter van het lint.
const zijden = () => Array.from({ length: ZIJDEN }, (_, z) =>
  [...PLAIN].filter((_, i) => i % ZIJDEN === z));

// De ciphertext: zijde per zijde achter elkaar.
const cipher = () => zijden().map(z => z.join('')).join('');

module.exports = { ZIJDEN, PLAIN, zijden, cipher };
