#!/usr/bin/env bash
# slidebeelden_crypto - genereert de 4 teaserbeelden voor slides/crypto_basics.qmd en slides/publiccrypto.qmd
# Kost: 4 x ~$0.12 = ~$0.50 (GPT-5.4 Image 2, 16:9)
# Draaien vanuit de repo-root (NWSecBook):  bash cyberboswachters/imagegen/slidebeelden_crypto.sh [naam ...]
# Zonder argumenten worden alle beelden gegenereerd, anders enkel de opgegeven namen.
# Stijl: identiek aan slidebeelden_basicsec.sh (licht, nieuwsgierig makend, één rood accent).
set -u

G=~/.claude/plugins/cache/timdams/timdams-skills/1.0.0/skills/imagen/scripts/generate-image.mjs
# OUT kan overschreven worden, bv. OUT=cyberboswachters/imagegen voor bronbeelden die een excalidraw-script uitknipt
OUT=${OUT:-cyberboswachters/slides/assets}
M=openai/gpt-5.4-image-2
BASIS=" Flat-shaded digital editorial illustration, clearly drawn and not photorealistic, with clean shapes and simplified details, soft daylight. Off-white and light grey tones with muted slate blue, and a single small accent in red (#e11d2a) that draws the eye to the key detail. No lettering, no words, no numbers, no logos."
TOON=" Calm, intriguing, slightly playful mood that makes the viewer curious about what happens next. No horror, no fire, no glowing eyes, no dark shadows."

declare -A P
P[crypto_quantum]="A long, bright underground archive hall with rows of neatly stacked sealed safes and locked strongboxes on tall shelves. A few archivists in grey coats patiently carry more locked boxes onto the shelves, as if they are in no hurry at all. Through a large glass wall at the far end of the hall, a strange half-built futuristic machine with golden tubes and cooling rings is being assembled by engineers. The single core of that machine is the red accent. Patient, slightly unsettling mood: secrets are being stored today to be opened later."
P[crypto_diginotar]="A classic, tidy notary office with wooden desks, neat piles of official documents and a rack of rubber stamps and wax seals. The notary sits with his back turned, talking on the phone. At a side desk, a well-dressed person quietly presses a copied official wax seal onto a stack of certificates, glancing sideways to see if anyone notices. The copied red wax seal is the red accent. Quiet, suspicious mood."
P[crypto_backdoor]="A modern detached house in daylight with a very solid front door secured by several heavy locks. At the back of the same house, two officials in suits and hi-vis vests politely install a small extra door in the wall, one of them holding a blueprint. Hidden in the garden bushes, a burglar watches the new little door with great interest. The small new back door is the red accent. Slightly ironic, curious mood."
P[crypto_postit]="A clean, bright office with a massive, impressive bank vault door full of complex locks, dials and steel bolts on the back wall. In the foreground, on an ordinary desk next to a computer monitor, a single sticky note with a few abstract scribbles, not readable text, is stuck to the edge of the screen. The sticky note is the red accent. Calm, slightly comic mood with a detail that invites a second look."

# Bronbeeld voor kist_metafoor.js (niet rechtstreeks in de slides): draaien met
#   OUT=cyberboswachters/imagegen bash cyberboswachters/imagegen/slidebeelden_crypto.sh kist_drieluik
P[kist_drieluik]="Three separate small scenes side by side in one wide image, evenly spaced with clear empty space between them, on a plain flat off-white background (#f8f9fa) with no floor, no room and no scenery. All three scenes show the exact same sturdy wooden treasure chest with iron fittings, seen from the same slightly elevated front angle and at the same size. Left scene: the chest stands wide open with its lid up, and an anonymous hand drops a folded letter into it. Middle scene: the same chest is closed, with a clasped red padlock on the front, which is the red accent. Right scene: the same chest stands open again, and a person kneeling beside it holds a small brass key next to the opened red padlock, taking out the folded letter. No people other than the hand and the one kneeling person. Keep every scene fully inside its own third of the image."

NAMEN=("$@")
[ ${#NAMEN[@]} -eq 0 ] && NAMEN=(crypto_quantum crypto_diginotar crypto_backdoor crypto_postit)

gen() {
  local naam=$1 pad
  pad=$(node "$G" --model "$M" --aspect 16:9 --out "$OUT" --name "$naam" --prompt "${P[$naam]}$BASIS$TOON" \
        | tee /dev/stderr | awk '/^SAVED/{print $2; exit}')
  if [ -z "$pad" ]; then echo "MISLUKT: $naam" >&2; return 1; fi
  # vaste bestandsnaam, want de slides verwijzen naar assets/<naam>.png
  mv -f "$pad" "$OUT/$naam.${pad##*.}"
  [ "${pad##*.}" = "png" ] || echo "LET OP: $naam is .${pad##*.}, pas de verwijzing in de slides aan" >&2
}

for n in "${NAMEN[@]}"; do gen "$n" & done
wait
