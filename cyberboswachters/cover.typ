// cover.typ - het voorblad van het PDF-handboek.
// Alles is vector getekend (geen foto's), dus de cover blijft scherp op elk formaat
// en er komt geen binair bestand bij in de repo.
// Wordt ingeladen door typst-show.typ, zie template-partials in _quarto.yml.

// ---------- kleuren ----------
#let c-lucht-top = rgb("#03110A") // nachtlucht bovenaan
#let c-lucht-mid = rgb("#082314")
#let c-horizon = rgb("#1A5D3B") // gloed net onder de titelbalk
#let c-grond = rgb("#08200F")
#let c-bos-ver = rgb("#246B45")
#let c-bos-mid = rgb("#11402A")
#let c-bos-dicht = rgb("#03130B")
#let c-maan = rgb("#F2ECD2")
#let c-ster = rgb("#7FD6A4")
#let c-band = rgb("#F4F0E1") // crème titelbalk, zoals op de poster
#let c-titel = rgb("#0E3B22")
#let c-accent = rgb("#FF0000") // AP-rood

// Arial Black staat niet op de Linux-runner van de CI; de rest van de lijst vangt dat op.
#let cover-titelfont = ("Arial Black", "Arial", "Liberation Sans", "DejaVu Sans")
#let cover-tekstfont = ("Arial", "Liberation Sans", "DejaVu Sans")

// ---------- deterministische ruis, zodat elke build dezelfde cover geeft ----------
#let ruis(n) = {
  let x = calc.rem(n * 2654435761, 4294967296)
  calc.rem(x * 1103515245 + 12345, 2147483648) / 2147483648.0
}

// ---------- een den: vier lagen takken, als silhouet zonder stam ----------
#let den(b, h, kleur) = {
  let cx = b / 2
  polygon(
    fill: kleur,
    stroke: none,
    (cx, 0pt),
    (cx + 0.13 * b, 0.28 * h),
    (cx + 0.07 * b, 0.28 * h),
    (cx + 0.27 * b, 0.56 * h),
    (cx + 0.16 * b, 0.56 * h),
    (cx + 0.38 * b, 0.80 * h),
    (cx + 0.26 * b, 0.80 * h),
    (cx + 0.50 * b, h),
    (cx - 0.50 * b, h),
    (cx - 0.26 * b, 0.80 * h),
    (cx - 0.38 * b, 0.80 * h),
    (cx - 0.16 * b, 0.56 * h),
    (cx - 0.27 * b, 0.56 * h),
    (cx - 0.07 * b, 0.28 * h),
    (cx - 0.13 * b, 0.28 * h),
  )
}

// een rij dennen met hun voet op `basis`; hoe donkerder de kleur, hoe dichterbij
#let bomenrij(basis, min-h, max-h, stap, kleur, zaad) = {
  let x = -2cm
  let i = 0
  while x < 21.5cm {
    let h = min-h + (max-h - min-h) * ruis(zaad + i * 7)
    place(top + left, dx: x, dy: basis - h, den(h * 0.66, h, kleur))
    x = x + stap * (0.70 + 0.60 * ruis(zaad + i * 13 + 3))
    i = i + 1
  }
}

// ---------- het netwerk aan de hemel: sterren die met elkaar verbonden zijn ----------
#let knopen = (
  (2.4, 2.2), (4.9, 3.6), (3.1, 5.9), (6.6, 5.3),
  (5.4, 8.2), (8.6, 7.4), (2.0, 8.9), (7.9, 2.6),
)
#let verbindingen = ((0, 1), (1, 2), (1, 3), (2, 4), (3, 4), (3, 5), (4, 6), (1, 7), (5, 7))

#let netwerk = {
  for (a, b) in verbindingen {
    let (x1, y1) = knopen.at(a)
    let (x2, y2) = knopen.at(b)
    place(
      top + left,
      dx: x1 * 1cm,
      dy: y1 * 1cm,
      line(end: ((x2 - x1) * 1cm, (y2 - y1) * 1cm), stroke: 0.5pt + rgb(127, 214, 164, 75)),
    )
  }
  for (x, y) in knopen {
    place(top + left, dx: x * 1cm - 1.7pt, dy: y * 1cm - 1.7pt, circle(radius: 1.7pt, fill: c-ster, stroke: none))
  }
}

// ---------- losse sterretjes ----------
#let sterren = {
  for i in range(70) {
    let x = 0.4cm + 20.2cm * ruis(i * 3 + 1)
    let y = 0.5cm + 10.2cm * ruis(i * 5 + 11)
    let r = (0.3 + 0.9 * ruis(i * 11 + 7)) * 1pt
    let a = int(35 + 120 * ruis(i * 17 + 5))
    place(top + left, dx: x, dy: y, circle(radius: r, fill: rgb(200, 255, 220, a), stroke: none))
  }
}

// ---------- de maan als hangslot ----------
#let maan = {
  // De gloed is opgebouwd uit dertig doorschijnende ringen in plaats van uit een
  // radiale gradient. Dat exporteert als gewone vormen, en die tekent elke pdf-viewer
  // hetzelfde; gradients gaan als shading naar buiten en dat loopt niet overal gelijk.
  for i in range(30) {
    let r = 4.8cm - i * 0.10cm
    place(top + left, dx: 16cm - r, dy: 4.6cm - r, circle(radius: r, fill: rgb(242, 236, 210, 2), stroke: none))
  }
  place(top + left, dx: 14.2cm, dy: 2.8cm, circle(radius: 1.8cm, fill: c-maan, stroke: none))
  // sleutelgat
  place(top + left, dx: 15.60cm, dy: 3.90cm, circle(radius: 0.40cm, fill: c-lucht-mid, stroke: none))
  place(
    top + left,
    dx: 15.64cm,
    dy: 4.30cm,
    polygon(fill: c-lucht-mid, stroke: none, (0.15cm, 0cm), (0.57cm, 0cm), (0.72cm, 1.00cm), (0cm, 1.00cm)),
  )
}

// ---------- alles samen ----------
#let cover-art = block(width: 100%, height: 100%, {
  // nachtlucht met een gloed net onder de titelbalk
  place(
    top + left,
    rect(
      width: 100%,
      height: 100%,
      stroke: none,
      fill: gradient.linear(
        (c-lucht-top, 0%),
        (c-lucht-mid, 42%),
        (rgb("#134028"), 66%),
        (c-horizon, 76%),
        (c-grond, 100%),
        angle: 90deg,
      ),
    ),
  )

  sterren
  netwerk
  maan

  // vier boomlagen: van vage nevel in de verte tot bijna zwart vooraan
  bomenrij(22.0cm, 1.4cm, 2.6cm, 0.85cm, rgb(46, 122, 82, 120), 53)
  bomenrij(24.2cm, 2.2cm, 3.6cm, 1.10cm, c-bos-ver, 101)
  bomenrij(27.0cm, 3.2cm, 5.2cm, 1.60cm, c-bos-mid, 307)
  bomenrij(30.8cm, 5.0cm, 8.2cm, 2.30cm, c-bos-dicht, 911)
})
