#!/bin/bash
set -e

# Change to the script's directory
cd "$(dirname "$0")"

echo "Building PDF..."
pandoc \
 metadata.yaml \
 intro.md \
 0_het_security_landschap/les1_wordtheterger.md \
 0_het_security_landschap/2_basicsec.md \
 1_cryptografie/basics.md \
 1_cryptografie/publiccrypto.md \
 3_netwerk_security/wifi.md \
 1_cryptografie/authenticatie.md \
 5_iot/iotintro.md \
 0_het_security_landschap/3_gdpr.md \
 appendix/meerweten.md \
 appendix/darkweb.md \
 appendix/awareness.md \
 bronnen.md \
 --variable toc-own-page=true \
 --variable book=true \
 --top-level-division=chapter \
 --filter pandoc-latex-environment \
 --self-contained \
 --toc-depth=2 \
 --resource-path=assets \
 -s --toc --verbose --template templates/eisvogel --number-sections -o book.pdf

echo "Building HTML..."
pandoc \
 metadata.yaml \
 intro.md \
 0_het_security_landschap/les1_wordtheterger.md \
 0_het_security_landschap/2_basicsec.md \
 1_cryptografie/basics.md \
 1_cryptografie/publiccrypto.md \
 3_netwerk_security/wifi.md \
 1_cryptografie/authenticatie.md \
 5_iot/iotintro.md \
 0_het_security_landschap/3_gdpr.md \
 appendix/meerweten.md \
 appendix/darkweb.md \
 appendix/awareness.md \
 bronnen.md \
 --variable toc-own-page=true \
 --variable book=true \
 --top-level-division=chapter \
 --self-contained \
 --toc-depth=2 \
 --resource-path=assets \
 -s --toc --verbose --number-sections -o index.html
