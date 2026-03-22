# Cyberboswachters – Projectstructuur

## Wat is dit?

Dit project bevat het handboek **Cyberboswachters** (een cybersecurity cursus) én de bijhorende slideshows. Alles wordt automatisch gepubliceerd als website via GitHub Actions naar GitHub Pages.

Gepubliceerde website: `https://timdams.github.io/cyberboswachters_boek/`

---

## Mapstructuur

```
NWSecBook/
├── .github/workflows/publish.yml   ← GitHub Actions workflow (zie hieronder)
└── cyberboswachters/               ← ALLES wat gepubliceerd wordt zit hier
    ├── _quarto.yml                 ← Boek-config: hoofdstukken, formaat, output-dir
    ├── index.qmd                   ← Voorpagina van het boek
    ├── content/                    ← Inhoud van het boek (markdown per hoofdstuk)
    │   ├── 0_het_security_landschap/
    │   ├── 1_cryptografie/
    │   ├── 3_netwerk_security/
    │   ├── 5_iot/
    │   └── appendix/
    ├── slides/                     ← Revealjs slideshows (apart Quarto-project)
    │   ├── _quarto.yml             ← Slides-config: output naar ../build/slides
    │   ├── overzicht.qmd           ← Appendix in het boek met links naar slides
    │   ├── crypto_basics.qmd
    │   ├── wifi.qmd
    │   └── ...
    └── build/                      ← Gegenereerde output (niet in git)
        ├── index.html              ← Boek HTML
        ├── ...
        └── slides/                 ← Gegenereerde slides HTML
            ├── crypto_basics.html
            └── ...
```

---

## Hoe werkt de publicatie?

Bij elke push naar `main` voert de GitHub Action (`.github/workflows/publish.yml`) twee stappen uit:

1. **`quarto render cyberboswachters/`**
   Rendert het boek (inclusief `slides/overzicht.qmd` als appendix) naar `cyberboswachters/build/`.

2. **`quarto render cyberboswachters/slides/`**
   Rendert alle slideshows als revealjs naar `cyberboswachters/build/slides/`.

Daarna wordt de volledige `build/`-map als GitHub Pages artifact geüpload en gepubliceerd.

### Resulterende URL-structuur op de website

| Bestand | URL |
|---------|-----|
| `build/index.html` | `https://timdams.github.io/cyberboswachters_boek/` |
| `build/slides/overzicht.html` | `.../slides/overzicht.html` |
| `build/slides/crypto_basics.html` | `.../slides/crypto_basics.html` |

---

## Een nieuwe slideshow toevoegen

### Stap 1 – Maak het `.qmd`-bestand aan

Maak een nieuw bestand in `cyberboswachters/slides/`, bv. `wifi.qmd`.
Gebruik deze frontmatter (de globale `slides/_quarto.yml` regelt de rest):

```yaml
---
title: "Wifi-beveiliging"
subtitle: "Cyberboswachters"
author: "Tim Dams"
format:
  revealjs:
    theme: [default, _extensions/grantmcdermott/clean/clean.scss]
    lang: nl
    slide-number: true
    transition: slide
    logo: ../cover.png
---
```

### Stap 2 – Voeg een link toe in `slides/overzicht.qmd`

Open `cyberboswachters/slides/overzicht.qmd` en voeg een rij toe aan de tabel:

```markdown
| Wifi-beveiliging | [Bekijk slides](wifi.html){target="_blank"} |
```

> **Let op:** het pad is gewoon `naamvanbestand.html`, **zonder** `slides/` ervoor.
> Beide bestanden zitten immers in dezelfde outputmap (`build/slides/`).

### Stap 3 – Push naar `main`

De workflow bouwt en publiceert automatisch.

---

## Lokaal testen

Vereiste: [Quarto](https://quarto.org) geïnstalleerd.

```bash
# Boek renderen (inclusief de overzichtspagina van slides)
quarto render cyberboswachters/

# Slides renderen
quarto render cyberboswachters/slides/

# Preview van het boek (live reload)
quarto preview cyberboswachters/

# Preview van één specifieke slideshow
quarto preview cyberboswachters/slides/crypto_basics.qmd
```

De output komt in `cyberboswachters/build/`. Open `build/index.html` in een browser om het resultaat te bekijken.

---

## Twee Quarto-projecten in één repo

Er zijn twee aparte Quarto-projecten, elk met hun eigen `_quarto.yml`:

| Project | Map | Type | Output |
|---------|-----|------|--------|
| Boek | `cyberboswachters/` | `book` | `build/` |
| Slides | `cyberboswachters/slides/` | `website` (revealjs) | `build/slides/` |

`slides/overzicht.qmd` is een speciaal geval:
- Het boek-project neemt het op als **appendix** (HTML-pagina in het boek).
- Het slides-project **slaat het over** (uitgesloten via `!overzicht.qmd` in `slides/_quarto.yml`).
