// Overschrijft de standaard typst-show van het orange-book-formaat van Quarto.
// Enige reden: de cover. Standaard krijg je een roze blok (main-color.lighten(70%))
// met de titel erin. Hier geven we onze eigen getekende cover mee (cover.typ) plus
// een colofon op de pagina erna. De rest van dit bestand is de template van Quarto zelf.
//
// Twee dingen om te weten als je hieraan sleutelt:
//  - orange-book zet de titel in een tekstblok van 25pt; een grotere titel steekt
//    daardoor boven zijn regel uit. Vandaar het block() errond.
//  - de auteursnaam van orange-book moet een string zijn en krijgt daardoor het
//    standaard (serif) lettertype. We laten die slot leeg en zetten de naam zelf
//    in de subtitel, zodat de hele balk in dezelfde letter staat.
#import "@preview/orange-book:0.7.1": book, part, chapter, appendices, update-heading-image
#import "cover.typ": *

#show: book.with(
$if(title)$
  title: {
    v(0.75cm)
    block(above: 0pt, below: 0pt,
      text(size: 42pt, font: cover-titelfont, weight: 900, fill: c-titel)[$title$])
  },
$endif$
  subtitle: {
    v(-0.15cm)
    block(above: 0pt, below: 0pt, line(length: 4.5cm, stroke: 3pt + c-accent))
    v(0.45cm)
    block(above: 0pt, below: 0pt,
      text(size: 13.5pt, font: cover-tekstfont, fill: c-titel)[
        De beste digitale stropers zijn ook de beste cyberboswachters
      ])
$if(by-author)$
    v(0.8cm)
    block(above: 0pt, below: 0pt,
      text(size: 17pt, font: cover-tekstfont, weight: "bold", fill: c-titel)[$for(by-author)$$it.name.literal$$sep$, $endfor$])
$endif$
    v(0.28cm)
    block(above: 0pt, below: 0pt,
      text(size: 10pt, font: cover-tekstfont, fill: rgb("#4C6B58"), tracking: 0.16em)[AP HOGESCHOOL])
  },
  author: "",
$if(date)$
  date: "$date$",
$endif$
$if(lang)$
  lang: "$lang$",
$endif$
  main-color: brand-color.at("primary", default: blue),
  cover: cover-art,
  cover-background: c-band,
  copyright: [
    #set text(size: 9.5pt, font: cover-tekstfont)
    #set par(spacing: 0.9em, justify: false, first-line-indent: 0em)
    #text(weight: "bold")[$title$] \
    $for(by-author)$$it.name.literal$$sep$, $endfor$, AP Hogeschool

    Handboek bij de cursus cybersecurity voor de opleidingen toegepaste informatica en
    elektronica-ict. De online versie, met de slides bij elk hoofdstuk, staat op
    #box(link("https://timdams.github.io/cyberboswachters_boek/")[timdams.github.io/cyberboswachters_boek]).

    Alles in dit boek is bedoeld om te leren verdedigen. Probeer de technieken enkel uit op je
    eigen systemen of met expliciete toestemming van de eigenaar.
  ],
  logo: {
    let logo-info = brand-logo.at("medium", default: none)
    if logo-info != none { image(logo-info.path, alt: logo-info.at("alt", default: none)) }
  },
$if(toc-depth)$
  outline-depth: $toc-depth$,
$endif$
$if(lof)$
  list-of-figure-title: "$if(crossref.lof-title)$$crossref.lof-title$$else$$crossref-lof-title$$endif$",
$endif$
$if(lot)$
  list-of-table-title: "$if(crossref.lot-title)$$crossref.lot-title$$else$$crossref-lot-title$$endif$",
$endif$
$if(margin-geometry)$
  padded-heading-number: false,
$endif$
)

$if(margin-geometry)$
// Configure marginalia page geometry for book context
// Geometry computed by Quarto's meta.lua filter (typstGeometryFromPaperWidth)
// IMPORTANT: This must come AFTER book.with() to override the book format's margin settings
#import "@preview/marginalia:0.3.1" as marginalia

#show: marginalia.setup.with(
  inner: (
    far: $margin-geometry.inner.far$,
    width: $margin-geometry.inner.width$,
    sep: $margin-geometry.inner.separation$,
  ),
  outer: (
    far: $margin-geometry.outer.far$,
    width: $margin-geometry.outer.width$,
    sep: $margin-geometry.outer.separation$,
  ),
  top: $if(margin.top)$$margin.top$$else$1.25in$endif$,
  bottom: $if(margin.bottom)$$margin.bottom$$else$1.25in$endif$,
  // CRITICAL: Enable book mode for recto/verso awareness
  book: true,
  clearance: $margin-geometry.clearance$,
)
$endif$

// Hoofdstukcovers: afbeelding bovenaan de eerste pagina van een hoofdstuk, met de
// titel erover (heading-style 0 van orange-book). De sleutel is het label dat Quarto
// aan de hoofdstuktitel hangt. Hoofdstukken zonder sleutel krijgen geen afbeelding.
// De afbeelding moet vóór de titel gezet worden: een raw typst-blok in het .md-bestand
// kan dat niet, want Quarto zet de H1 van een hoofdstuk altijd bovenaan.
#let hoofdstukcovers = (
  "wordt-het-erger": "content/0_het_security_landschap/assets/cover_wordtheterger.png",
  "cybersecurity-fundamenten": "content/0_het_security_landschap/assets/stropers.png",
  "cryptografie": "content/1_cryptografie/assets/cover_crypto.png",
  "wifi-security": "content/3_netwerk_security/assets/cover_wifi.png",
  // Quarto maakt hier "authenticatie-1" van, omdat het label "authenticatie" al elders bestaat
  "authenticatie-1": "content/1_cryptografie/assets/cover_authenticatie.png",
  "iot-security": "content/5_iot/assets/cover_iot.png",
)
#show heading.where(level: 1): it => {
  let pad = if it.has("label") { hoofdstukcovers.at(str(it.label), default: none) } else { none }
  update-heading-image(image: if pad == none { none } else { image(pad) })
  it
}
