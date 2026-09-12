// wormprop - het worm propagation model: hoe snel een worm zich verspreidt, en wat
// vroege detectie met die curve doet.
// Draaien vanuit deze map:  node wormprop.js
const { createCanvas, C } = require('./excal');
const plaats = require('./plaats');

const c = createCanvas(1500, 950);

const X0 = 200, X1 = 1400;     // plotgebied horizontaal
const Y0 = 840, YTOP = 150;    // basislijn en bovenkant

// ---------- helpers ----------
// smooth: catmull-rom door een reeks punten, uitgeschreven als bezierpad
function smooth(pts) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i];
    const p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
  }
  return d;
}
// accolade die naar beneden wijst, met label erboven
function accolade(x1, x2, y, label) {
  const m = (x1 + x2) / 2;
  c.path(`M ${x1} ${y + 16} Q ${x1} ${y} ${x1 + 18} ${y} L ${m - 12} ${y} ` +
    `Q ${m} ${y} ${m} ${y - 16} Q ${m} ${y} ${m + 12} ${y} L ${x2 - 18} ${y} ` +
    `Q ${x2} ${y} ${x2} ${y + 16}`, { strokeWidth: 2.2, roughness: 1.2 });
  c.txt(m, y - 36, label, 30, C.RED_DARK, 700);
}

// ---------- assen ----------
c.arrow(X0, Y0, 1445, Y0, { strokeWidth: 2.4, head: 15 });
c.arrow(X0, Y0, X0, YTOP - 20, { strokeWidth: 2.4, head: 15 });
c.txt(820, 905, 'tijd', 32, C.GRAY, 700);
const yl = c.txt(148, 520, 'aantal besmette systemen', 32, C.GRAY, 700);
yl.setAttribute('transform', 'rotate(-90 148 520)');

// ---------- periodes en fases ----------
accolade(X0, 750, 140, 'voorbereidende periode (proactief)');
accolade(770, X1, 140, 'herstelperiode (reactief)');

[500, 760, 1010].forEach(x =>
  c.line(x, YTOP + 10, x, Y0, { strokeWidth: 1.8, roughness: 1, strokeLineDash: [10, 9] }));

c.txt(350, 212, 'vroege detectie', 26, C.GRAY, 700);
c.txt(630, 212, 'kritieke detectie', 26, C.GRAY, 700);
c.txt(885, 212, 'snelle groei', 26, C.GRAY, 700);
c.txt(1205, 212, 'verzadiging', 26, C.GRAY, 700);

// ---------- de drie curves ----------
const NORMAAL = [[200, 838], [350, 836], [500, 833], [620, 826], [700, 806], [760, 760],
  [820, 660], [880, 530], [940, 420], [1000, 350], [1060, 318], [1160, 304], [1280, 300], [1400, 299]];
const VERTRAAGD = [[200, 839], [450, 838], [650, 836], [800, 830], [900, 810], [980, 766],
  [1060, 700], [1140, 616], [1220, 536], [1300, 482], [1400, 452]];
const ONDERSCHEPT = [[200, 839], [500, 838], [700, 835], [850, 828], [950, 812],
  [1060, 788], [1180, 762], [1290, 742], [1400, 730]];

c.path(smooth(ONDERSCHEPT), { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1, strokeLineDash: [5, 9] });
c.path(smooth(VERTRAAGD), { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1, strokeLineDash: [15, 10] });
c.path(smooth(NORMAAL), { stroke: C.RED, strokeWidth: 3.4, roughness: 1 });

c.txt(1390, 275, 'normale verspreiding', 26, C.RED_DARK, 700, 'end');
c.txt(1390, 425, 'vertraagde verspreiding', 26, C.GRAY, 700, 'end');
c.txt(1390, 700, 'onderschepte verspreiding', 26, C.GRAY, 700, 'end');

// ---------- diagnostische varianten ----------
[250, 320, 390].forEach(x =>
  c.path(`M ${x - 16} ${Y0} Q ${x} ${Y0 - 62} ${x + 16} ${Y0}`,
    { stroke: C.RED, strokeWidth: 2.6, roughness: 0.9 }));
c.txt(330, 726, 'diagnostische varianten', 24, C.RED_DARK, 700);

c.save('wormprop');
plaats('wormprop', '../content/0_het_security_landschap/assets', '../slides/assets');
