Deze folder bevat het handboek omtrent cybersecurity voor de opleiding toegepaste informatica. Het geeft een duidelijk overzicht van de basics van cyber security.

We gebruiken het quarto framework om het handboek als site én pdf aan te bieden.


In de folder \content staat het handboek. In de folder \slides staan de bijhorende slides.

Wanneer er zaken in het handboek worden aangepast, moeten we ook steeds nakijken of de slides nog up-to-date zijn. Indien niet, moeten we deze ook aanpassen. De slides moeten altijd een samenvatting zijn van de inhoud van het handboek, en mogen geen nieuwe informatie bevatten die niet in het handboek staat. De slides moeten ook niet alle details bevatten, maar wel de belangrijkste punten en concepten. De slides moeten ook visueel aantrekkelijk zijn, met duidelijke titels, bullet points, afbeeldingen en diagrammen waar nodig. De slides moeten ook consistent zijn in stijl en opmaak, en moeten gemakkelijk te begrijpen zijn voor het publiek. 

Nieuwe teksten moeten altijd zoveel mogelijk in de vorm/schrijftstijl als voorgaande teksten van mij zijn.

## Repo

- Lokale folder heet `NWSecBook`, maar de GitHub repo is `timdams/cyberboswachters_boek`. Gebruik die naam bij `gh` commands.
- Issue-labels voor grootte zijn `small` / `medium` / `big` (geen `large`). Topical labels: `idea`, `bug`, `spelling`, `documentation`, `enhancement`, `question`.

## Quarto structuur

- Twee Quarto-projecten:
  - Boek: `cyberboswachters/_quarto.yml` (type: book) → output `cyberboswachters/build/`
  - Slides: `cyberboswachters/slides/_quarto.yml` (type: website, nested in book) → output `cyberboswachters/build/slides/`
- **Build-volgorde**: altijd eerst het boek renderen, dan de slides. Het boek cleant build-subdirs, dus omgekeerde volgorde wist de slide-output. De CI-workflow ([.github/workflows/publish.yml](.github/workflows/publish.yml)) volgt deze volgorde.
- De WARN over `site_libs` bij slides-render is bekend en pre-existing (gevolg van `output-dir: ../build/slides` buiten het slides-project). Niet "fixen".
- PDF's van slides worden in CI gegenereerd via decktape, met cache op SHA. De cache-stap gebruikt rsync zodat geneste folders (zoals `en/`) bewaard blijven.

## Tweetaligheid (NL default, EN incrementeel)

- NL is en blijft de default taal van de site.
- EN-slides leven in `cyberboswachters/slides/en/`, **nooit** gemengd met NL-slides in dezelfde folder.
- `slides/en/index.qmd` is een gewone HTML-pagina (rendert via het boek als appendix), `slides/en/*.qmd` daarbuiten zijn revealjs decks (renderen via de slides-website). De render-list in `slides/_quarto.yml` regelt deze splitsing.
- Voor de volledige migratie naar een tweetalige site (boek + slides via Quarto profiles) bestaat een trackingsissue op GitHub. Volg die fasering — geen bestanden mixen, geen parallel project, geen branch-per-taal.