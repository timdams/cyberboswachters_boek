# Migratieplan: Docs-as-Code met Quarto

## Project 1: Cyber Security (De Proeftuin)
**Huidige status:** Markdown/Pandoc (PDF) + PowerPoint.
**Doel:** Quarto (Web/PDF) + Quarto Slides (Clean Theme) + Gedeelde definities.

### Fase 1: De Basis (Handboek)
- [ ] Installeer Quarto lokaal.
- [ ] Creëer een nieuw Quarto-project in een nieuwe Git-repo (`quarto create-project cyber-security --type book`).
- [ ] Kopieer de bestaande Markdown-bestanden van het handboek naar deze nieuwe map.
- [ ] Vertaal het oude Pandoc-commando naar een `_quarto.yml` configuratiebestand (met behoud van het Eisvogel template voor de PDF).
- [ ] Test de build: `quarto render` (Kijk of de PDF succesvol genereert).

### Fase 2: De Slides (Van scratch)
- [ ] Maak een map `slides/` aan in de repository.
- [ ] Installeer het Clean Theme: `quarto install extension grantmcdermott/quarto-revealjs-clean`.
- [ ] Bouw de slides voor **één aankomende les** in Quarto.
- [ ] Geef de les en evalueer de workflow.

### Fase 3: De Koppeling (Single Source of Truth)
- [ ] Maak een map `_includes/` aan.
- [ ] Verplaats een definitie (bijv. XSS) uit het handboek naar `_includes/_xss.md`.
- [ ] Gebruik `{{< include _includes/_xss.md >}}` in zowel het handboek als de slide.
- [ ] Bouw alles en verifieer dat de tekst in beide opduikt.

### Fase 4: Automatisatie
- [ ] Zet een GitHub Action op die bij elke `git push` de PDF, de website en de HTML-slides bouwt en publiceert op GitHub Pages.

---

## Project 2: Zie Scherp Scherper (De Grote Samenvoeging)
**Huidige status:** Gitbook (Handboek) + Gitbook (Oefeningen) + Gitbook (Oplossingen) + PowerPoint.
**Doel:** Eén Quarto-project (Web/PDF) met geïntegreerde `<details>` oplossingen + Quarto Slides.

### Fase 1: Consolidatie van de Structuur
- [ ] Creëer een nieuw Quarto-project: `quarto create-project zie-scherp-scherper --type book`.
- [ ] Breng de structuur van het handboek (de hoofdstukken) over vanuit GitBook naar Quarto `.qmd` bestanden.
- [ ] Zorg dat het handboek succesvol rendert naar HTML en PDF.

### Fase 2: Oefeningen & Oplossingen Samenvoegen (De Callout methode)
*Focus eerst op Hoofdstuk 1.*
- [ ] Kopieer de markdown van de oefeningen van Hoofdstuk 1 naar het einde van het theorie-bestand (of een apart `01-oefeningen.qmd` bestand).
- [ ] Kopieer de oplossingen uit de derde repo en plak ze direct onder de bijbehorende oefening.
- [ ] Verpak de oplossingen in een Quarto Callout block dat standaard is ingeklapt:

```markdown
::: {.callout-note collapse="true" title="Bekijk de oplossing"}
Hier komt de C# code van de oplossing.
:::
```

- [ ] Test de render. Studenten zien nu de oefening en kunnen zelf klikken om de oplossing uit te klappen.
- [ ] Herhaal dit iteratief voor de overige hoofdstukken.

### Fase 3: Slides & Automatisatie
- [ ] Vertaal de eerste PowerPoint naar Reveal.js (C# codeblokken werken fantastisch met de oplichtende regels in Quarto!).
- [ ] Implementeer GitHub Actions voor automatische publicatie.
- [ ] Archiveer de oude GitBook repo's en zet ze op 'Read Only'.

# Ideeen Todo

* Clean theme: https://github.com/grantmcdermott/quarto-revealjs-clean