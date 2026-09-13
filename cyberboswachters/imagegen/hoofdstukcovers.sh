#!/usr/bin/env bash
# hoofdstukcovers - genereert de hoofdstukcovers (boek + openingsslide) via OpenRouter
# Kost: 5 x ~$0.12 = ~$0.60 (GPT-5.4 Image 2, 16:9)
# Draaien vanuit de repo-root (NWSecBook):  bash cyberboswachters/imagegen/hoofdstukcovers.sh [naam ...]
# Zonder argumenten worden alle covers gegenereerd, anders enkel de opgegeven namen.
# Hoofdstuk 2 gebruikt stropers.png uit slidebeelden_basicsec.sh, dus die staat hier niet bij.
# Appendices krijgen geen cover.
# Rode draad: dezelfde boswachter in het digitale bos, met wat spanning (storm op komst).
# Hoofdstuk 1 gebruikt stropers.png als referentie voor het personage; de andere hoofdstukken
# gebruiken cover_wordtheterger.png, zodat personage én stijl gelijk blijven.
set -u

G=~/.claude/plugins/cache/timdams/timdams-skills/1.0.0/skills/imagen/scripts/generate-image.mjs
OUT=cyberboswachters/slides/assets
M=openai/gpt-5.4-image-2
BASIS=" Flat-shaded digital editorial illustration, clearly drawn and not photorealistic, with clean shapes and simplified details, soft daylight. Off-white and light grey tones with muted slate blue, and a single small accent in red (#e11d2a) that draws the eye to the key detail. No lettering, no words, no numbers, no logos."
TOON=" Tense, dramatic but not scary mood, like the moment just before a storm breaks, still in daylight. No horror, no fire, no glowing eyes."
RANGER="The same female forest ranger as in the reference image, in the same grey ranger uniform and hat."

declare -A P R
P[cover_wordtheterger]="$RANGER She stands on top of a wooden lookout tower above a vast forest, holding binoculars and scanning the landscape with a concerned look. Below her, trails of red footprints enter the forest from every direction, far more than a single poacher could leave, crossing and multiplying. Towards the horizon some of the trails dissolve into small red square pixels, hinting that these poachers are digital. In the distance a huge bank of storm clouds rolls in over the forest, wind bends the treetops and a flock of birds flies away. The red footprints are the red accent. Wide composition with the ranger and tower on the left and the storm and trails spreading towards the right."
R[cover_wordtheterger]=cyberboswachters/slides/assets/stropers.png

P[cover_crypto]="$RANGER On a swaying rope bridge over a deep forest ravine, she carefully hands a small locked iron box to a second ranger waiting on the other side. The small key hangs on a cord around her neck and is the red accent. Down in the ravine, half hidden among the rocks and ferns, a poacher in a hooded jacket looks up through a spyglass at the box, waiting for a chance. Storm clouds gather above the forest and the wind makes the bridge sway. Wide composition with the bridge across the image."
R[cover_crypto]=cyberboswachters/slides/assets/cover_wordtheterger.png

P[cover_wifi]="$RANGER In a forest clearing she stands next to a wooden ranger post with a tall radio antenna and talks into a handheld radio. Faint concentric rings of radio waves spread from the antenna through the whole forest, passing between the trees in every direction. At the edge of the clearing, crouched behind bushes, a poacher holds up a homemade antenna and headphones, catching the waves. The rings that reach the poacher are the red accent. Storm clouds gather and the wind moves the treetops. Wide composition with the ranger on the left and the hidden poacher on the right."
R[cover_wifi]=cyberboswachters/slides/assets/cover_wordtheterger.png

P[cover_authenticatie]="$RANGER She stands at the large wooden entrance gate of the forest reserve, checking the ID badge of a hiker. Behind the hiker waits a short queue of visitors. One of them is a poacher who wears a slightly too large ranger hat and holds up a clumsily copied ranger badge, which is the red accent, trying to blend in with a confident smile. Heavy locks hang on the gate. Storm clouds gather over the forest behind the gate. Wide composition with the gate and the ranger on the left and the queue towards the right."
R[cover_authenticatie]=cyberboswachters/slides/assets/cover_wordtheterger.png

P[cover_iot]="$RANGER Deep in a forest full of small smart devices, trail cameras strapped to tree trunks, sensor posts, a smart birdhouse and a small hovering drone, she kneels to check one trail camera on a tree. Behind her back, several of the other cameras have silently turned their lenses towards her, each with one tiny red status light, which are the red accent. Thin cables and wireless signals connect the devices through the trees. Storm clouds gather above the canopy. Wide composition with the ranger on the left and the watching devices spread through the forest."
R[cover_iot]=cyberboswachters/slides/assets/cover_wordtheterger.png

NAMEN=("$@")
[ ${#NAMEN[@]} -eq 0 ] && NAMEN=(cover_wordtheterger cover_crypto cover_wifi cover_authenticatie cover_iot)

gen() {
  local naam=$1 pad ref=()
  [ -n "${R[$naam]:-}" ] && ref=(--ref "${R[$naam]}")
  pad=$(node "$G" --model "$M" --aspect 16:9 --out "$OUT" --name "$naam" "${ref[@]}" \
        --prompt "${P[$naam]}$BASIS$TOON" \
        | tee /dev/stderr | awk '/^SAVED/{print $2; exit}')
  if [ -z "$pad" ]; then echo "MISLUKT: $naam" >&2; return 1; fi
  # vaste bestandsnaam, want boek en slides verwijzen naar <naam>.png
  mv -f "$pad" "$OUT/$naam.${pad##*.}"
  [ "${pad##*.}" = "png" ] || echo "LET OP: $naam is .${pad##*.}, pas de verwijzingen aan" >&2
}

for n in "${NAMEN[@]}"; do gen "$n" & done
wait
