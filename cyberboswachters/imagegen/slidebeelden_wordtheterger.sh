#!/usr/bin/env bash
# slidebeelden_wordtheterger - genereert de 9 AI-beelden voor slides/wordtheterger.qmd via OpenRouter
# Kost: 9 x ~$0.212 = ~$1.91 (GPT-5.4 Image 2, 16:9)
# Draaien vanuit de repo-root (NWSecBook):  bash cyberboswachters/imagegen/slidebeelden_wordtheterger.sh [naam ...]
# Zonder argumenten worden alle 9 beelden gegenereerd, anders enkel de opgegeven namen.
set -u

G=~/.claude/plugins/cache/timdams/timdams-skills/1.0.0/skills/imagen/scripts/generate-image.mjs
OUT=cyberboswachters/slides/assets
M=openai/gpt-5.4-image-2
STYLE=" Cinematic digital illustration in a dark palette of charcoal and deep slate blue, with vivid red (#e11d2a) as the accent colour. No lettering, no words, no logos."

declare -A P
P[plc_wereld]="A sweeping wide establishing shot from above, slightly tilted, of a modern city and its surrounding countryside that runs entirely on industrial programmable logic controllers: a nuclear power plant, a water treatment plant with basins, a hydroelectric dam, a hospital, railway signals, factory assembly lines with robot arms, traffic lights and elevators in glass skyscrapers. Small grey industrial control boxes with blinking status LEDs sit at every installation, all linked by thin glowing network cables that converge across the landscape like a nervous system. Dusk lighting, the connecting lines glowing red and warm white. Slightly ominous mood: the whole world depends on these tiny boxes."
P[veil_lifted]="A dramatic theatrical scene: a heavy dark-red velvet stage curtain is being raised upward, revealing what was hidden behind it. Behind the curtain, in a dim room full of server racks and glowing monitors, stand shadowy figures in dark suits and hoodies wearing headphones, eavesdropping and watching screens full of chat bubbles, video calls and location pins. In the foreground, seen from behind, an ordinary person sits with a laptop and smartphone, unaware. Wide low-angle composition, cold blue monitor light on the eavesdroppers, warm spotlight on the rising curtain edge, noir atmosphere. Keep a calm dark area along the top for a slide title."
P[megaexploits]="A glowing Earth seen from space, wrapped in a dense web of internet connections between cities, servers, routers, laptops and phones. From one single small cracked node a red fire spreads along the network lines like a wildfire, jumping from system to system and turning server racks and devices dark or burning. Along the burning paths, small hooded silhouettes of attackers slip in through opened doorways of light. The untouched parts of the network glow cool white-blue. Strong sense of speed and chain reaction."
P[iot_horrors]="A cutaway illustration of a modern family home at night, every room full of connected smart devices: a smart thermostat, doorbell camera, baby monitor, smart speaker, smart TV, fridge, robot vacuum, smart light bulbs and a fitness watch on a person sitting on the couch with a smartphone. Thin glowing wireless lines link every device to each other and to the person, converging out through the roof towards the internet. A few devices glow sinister red, with shadowy tendrils creeping along their connections, hinting they are compromised. Horror-movie mood with a playful edge, cool blue night tones."
P[big_data]="A vast dark data warehouse hall filled with towering shelves of glowing data cubes containing fragments of personal lives: photos, messages, medical files, credit cards, location pins and dating profiles. A crack in the wall widens and a flood of glowing red data cubes pours out, cascading onto a small crowd of anonymous people below. The composition shows escalation: a small trickle leaking in the distance on the left growing into a huge torrent on the right."
P[social_engineering]="A split-screen editorial illustration in a clean semi-flat style. On the left, a friendly helpdesk employee with a headset in a bright office happily performs a password reset. On the right, at the other end of the phone line, a hooded teenager in a dark bedroom full of monitors grins while talking into a phone. Between them stands a huge corporate firewall wall with padlocks and shields, completely useless, because the phone cable simply runs around it. Humorous but pointed, warm office light versus dark blue bedroom, red accent on the phone line."
P[ransomware]="A hospital corridor and office at night where every screen, from computers to medical monitors, glows red with a large padlock icon and a countdown clock made of simple shapes. Heavy chains wrap around server racks and filing cabinets. A giant shadowy hand reaches out of a monitor with an open palm, demanding payment, a few golden coins hovering above it. Staff in scrubs stand confused in the red glow. Dramatic tense lighting dominated by red."
P[scattered_spider]="A large stylised spider made of phone cables and network wires sits in a web spun across a glittering casino resort skyline at night. One strand of the web leads down to a helpdesk desk on the left, where an employee on the phone resets a password. On the right, the consequences: rows of slot machines gone black, hotel key cards showing red crosses, and a stuck elevator with confused guests. Composition flows from the helpdesk on the left to the paralysed casino on the right, dimmed neon colours."
P[ai_hell]="An apocalyptic vision of Earth seen from low orbit, burning: cities glow with fires, power grids flicker out in dark patches, and swarms of small glowing red drone-like AI agents and geometric neural-network shapes descend like locusts, tracing attack paths across the continents. Above the planet looms a colossal abstract artificial intelligence presence made of circuitry and red light, like a storm cloud. Epic scale and dread, fiery orange and red against black. Keep a dark empty band along the top for a slide title."

NAMEN=("$@")
[ ${#NAMEN[@]} -eq 0 ] && NAMEN=(plc_wereld veil_lifted megaexploits iot_horrors big_data social_engineering ransomware scattered_spider ai_hell)

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
