#!/usr/bin/env bash
# slidebeelden_basicsec - genereert de 6 AI-beelden voor slides/basicsec.qmd via OpenRouter
# Kost: 6 x ~$0.212 = ~$1.27 (GPT-5.4 Image 2, 16:9)
# Draaien vanuit de repo-root (NWSecBook):  bash cyberboswachters/imagegen/slidebeelden_basicsec.sh [naam ...]
# Zonder argumenten worden alle 6 beelden gegenereerd, anders enkel de opgegeven namen.
# Stijl: licht en nieuwsgierig makend (het moment vóór het verhaal), bewust NIET donker/dramatisch zoals wordtheterger.
set -u

G=~/.claude/plugins/cache/timdams/timdams-skills/1.0.0/skills/imagen/scripts/generate-image.mjs
OUT=cyberboswachters/slides/assets
M=openai/gpt-5.4-image-2
STYLE=" Flat-shaded digital editorial illustration, clearly drawn and not photorealistic, with clean shapes and simplified details, soft daylight. Off-white and light grey tones with muted slate blue, and a single small accent in red (#e11d2a) that draws the eye to the key detail. Calm, intriguing, slightly playful mood that makes the viewer curious about what happens next. No horror, no fire, no glowing eyes, no dark shadows. No lettering, no words, no logos."

declare -A P
P[stropers]="A sunny, peaceful forest path in the morning. In the foreground a forest ranger crouches down, curiously examining a trail of fresh footprints on the path. Further back, half hidden between the tree trunks and slightly out of focus, stand a few very different silhouettes watching: a teenager holding a laptop, a person in a business suit, an office worker wearing an ID badge on a lanyard, and a figure in a plain jacket. It is unclear which of them left the footprints. The footprints carry the red accent."
P[kabul_usb]="A sunlit outdoor market stall in a dusty Central Asian city street. On a simple wooden table, dozens of cheap USB flash drives are neatly laid out in rows next to phone chargers and cables. A hand with a sand-coloured military uniform sleeve reaches in and picks up one single USB stick, which is the red accent. In the soft-focus background, a concrete compound wall with a watchtower and a few parked sand-coloured vehicles. Ordinary, everyday atmosphere, nothing seems wrong yet."
P[akhter_meeting]="A calm kitchen table in daylight. An open laptop shows a video meeting that has just ended: a grid of empty grey tiles. Next to the laptop stands a half-full coffee mug and a closed notebook. Two hands hover just above the keyboard, fingers ready, as if the person is about to type something. The cursor on a blank terminal window on the laptop screen blinks as the red accent. Quiet, suspenseful moment of hesitation."
P[xp_wekker]="A tidy early-2000s home office desk in daylight. A brand new beige desktop computer with a CRT monitor sits on the desk, its box still standing next to it. A hand is just plugging a network cable into the back of the computer. Right beside the monitor stands an old-fashioned mechanical kitchen timer, which is the red accent, set to twenty minutes. Nostalgic, curious, slightly comic mood."
P[mirai_woonkamer]="A cosy, bright modern living room on a sunny afternoon: a sofa with cushions, plants, a wooden sideboard. On the sideboard stand a baby monitor camera, a home Wi-Fi router and a small smart security camera. Everything looks perfectly normal, except that one tiny status light on the baby monitor is red and its camera is turned just slightly too far towards the viewer. Peaceful, homely scene with a subtle feeling that something is watching."
P[poweroff_nachtkastje]="A calm bedside table in soft morning light, with a pair of glasses, a paperback book and a glass of water. A smartphone lies face down on the table, apparently switched off for the night. At the very edge of the phone, one tiny indicator light is still on, which is the red accent. Serene bedroom atmosphere with a small detail that invites a second look."

NAMEN=("$@")
[ ${#NAMEN[@]} -eq 0 ] && NAMEN=(stropers kabul_usb akhter_meeting xp_wekker mirai_woonkamer poweroff_nachtkastje)

gen() {
  local naam=$1 pad
  pad=$(node "$G" --model "$M" --aspect 16:9 --out "$OUT" --name "$naam" --prompt "${P[$naam]}$STYLE" \
        | tee /dev/stderr | awk '/^SAVED/{print $2; exit}')
  if [ -z "$pad" ]; then echo "MISLUKT: $naam" >&2; return 1; fi
  # vaste bestandsnaam, want de slides verwijzen naar assets/<naam>.png
  mv -f "$pad" "$OUT/$naam.${pad##*.}"
  [ "${pad##*.}" = "png" ] || echo "LET OP: $naam is .${pad##*.}, pas de verwijzing in de slides aan" >&2
}

for n in "${NAMEN[@]}"; do gen "$n" & done
wait
