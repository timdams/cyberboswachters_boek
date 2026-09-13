#!/usr/bin/env bash
# slidebeelden_wordtheterger - genereert de 9 AI-beelden voor slides/wordtheterger.qmd via OpenRouter
# Kost: 9 x ~$0.12 = ~$1.10 (GPT-5.4 Image 2, 16:9)
# Draaien vanuit de repo-root (NWSecBook):  bash cyberboswachters/imagegen/slidebeelden_wordtheterger.sh [naam ...]
# Zonder argumenten worden alle 9 beelden gegenereerd, anders enkel de opgegeven namen.
# Stijl: licht, zelfde basis als slidebeelden_basicsec.sh en hoofdstukcovers.sh. De eerste versie
# (donker, cinematisch) was te dramatisch; dezelfde scènes, maar nieuwsgierig in plaats van onheilspellend.
set -u

G=~/.claude/plugins/cache/timdams/timdams-skills/1.0.0/skills/imagen/scripts/generate-image.mjs
OUT=cyberboswachters/slides/assets
M=openai/gpt-5.4-image-2
BASIS=" Flat-shaded digital editorial illustration, clearly drawn and not photorealistic, with clean shapes and simplified details, soft daylight. Off-white and light grey tones with muted slate blue, and a single small accent in red (#e11d2a) that draws the eye to the key detail. No lettering, no words, no numbers, no logos."
TOON=" Slightly tense, intriguing mood that makes the viewer curious about what is going on, but not dramatic: daylight, no darkness, no horror, no fire, no glowing eyes."

declare -A P
P[plc_wereld]="A wide, sunny aerial view of a modern city and its countryside: a power plant, a water treatment plant with round basins, a hydroelectric dam, a hospital, railway signals, a factory with robot arms, traffic lights and elevators in glass towers. At every installation stands a small grey industrial control box, and all of them are linked by thin network lines that converge across the landscape like a nervous system. The network lines are the red accent. Everything runs smoothly, and the viewer slowly realises how much depends on these tiny boxes."
P[veil_lifted]="A theatre stage where a heavy red velvet curtain is being raised. Behind the curtain, in a bright and tidy control room with screens full of chat bubbles, video calls and map pins, a few people in ordinary office clothes wear headphones and study the screens. In the foreground, seen from behind, an ordinary person sits with a laptop and a smartphone, unaware of what is behind the curtain. The curtain is the red accent. Keep a calm, empty area along the top for a slide title."
P[megaexploits]="A stylised globe seen from space against a light background, wrapped in a network of thin lines between cities, servers, routers, laptops and phones. From one single small cracked node, a chain reaction of red lines spreads to neighbouring systems like falling dominoes, turning them red one by one, while the rest of the network stays calm blue-grey. The spreading red lines are the red accent. Strong sense of speed and chain reaction, no fire and no explosions."
P[iot_horrors]="A cutaway illustration of a bright family home on a sunny afternoon, every room full of connected devices: a smart thermostat, a doorbell camera, a baby monitor, a smart speaker, a smart TV, a fridge with a screen, a robot vacuum, smart light bulbs, and a fitness watch on a person relaxing on the couch with a smartphone. Thin wireless lines link every device and leave through the roof towards the internet. A few devices show a small red light and their connection lines are red, hinting that they are compromised. Playful, slightly uneasy mood."
P[big_data]="A large, bright archive hall with tall shelves of neatly stacked data cubes containing fragments of personal lives: photos, messages, medical files, credit cards, location pins and dating profiles. A crack in one wall lets red cubes slip out, starting as a small trickle on the left and growing into a stream on the right that pours down towards a small crowd of people who look up in surprise. The escaping red cubes are the red accent."
P[social_engineering]="A split-screen editorial illustration. On the left, a friendly helpdesk employee with a headset in a bright office happily performs a password reset. On the right, at the other end of the phone line, a grinning teenager in a hoodie sits in a messy but sunlit bedroom full of monitors, talking into a phone. Between them stands a huge corporate firewall wall with padlocks and shields, completely useless, because the phone cable simply runs around it. The phone cable is the red accent. Humorous but pointed."
P[ransomware]="A bright hospital corridor and nursing station during the day. Every computer screen and a medical monitor shows the same large, simple padlock shape and a countdown made of simple bars. A few doctors and nurses stand puzzled around a workstation, one of them holding a phone. A small chain with a padlock hangs around a server cabinet in an open side room. The padlocks on the screens are the red accent. Confusion and curiosity rather than horror."
P[scattered_spider]="A large stylised spider made of phone cables and network wires sits in a web spun across the image in daylight. One strand of the web leads down to a helpdesk on the left, where an employee on the phone resets a password. On the right, a casino resort shows the consequences: slot machines with blank screens, hotel key cards with a small cross, and guests waiting in front of a stuck elevator. The spider is the red accent. Composition flows from the helpdesk on the left to the paralysed casino on the right."
P[ai_hell]="Earth seen from low orbit against a light sky. Swarms of small red geometric AI agents, like tiny drones, trace attack paths between cities across the continents, and a few city grids flicker as if something is wrong. Above the planet hovers a large abstract artificial intelligence presence made of lines and nodes, looking down on the world. The swarms are the red accent. Sense of scale and unease, but no fire and no destruction. Keep a calm, empty band along the top for a slide title."

NAMEN=("$@")
[ ${#NAMEN[@]} -eq 0 ] && NAMEN=(plc_wereld veil_lifted megaexploits iot_horrors big_data social_engineering ransomware scattered_spider ai_hell)

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
