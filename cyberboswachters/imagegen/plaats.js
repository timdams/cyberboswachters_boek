// plaats.js - zet een gerenderde PNG op zijn plek: eerst bij het hoofdstuk in het
// boek, dan bij de slides. Het boek en de slides houden elk hun eigen kopie, dus
// een figuur die je hier opnieuw rendert komt meteen op beide plekken terecht.
const fs = require('fs');
const path = require('path');

module.exports = function plaats(naam, ...doelen) {
  const bron = naam + '.png';
  doelen.forEach(d => {
    fs.mkdirSync(d, { recursive: true });
    fs.copyFileSync(bron, path.join(d, bron));
  });
  console.log('  ->', doelen.map(d => path.join(d, bron)).join('\n  -> '));
};
