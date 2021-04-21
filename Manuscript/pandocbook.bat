pandoc ^
 metadata.yaml^
 intro.md^
 0_het_security_landschap/les1_wordtheterger.md^
 0_het_security_landschap/3_gdpr.md^
 1_cryptografie/basics.md^
 1_cryptografie/publiccrypto.md^
 2_social_engineering/README.md^
 3_netwerk_security/README.md^
 3_netwerk_security/wifi.md^
 4_internet_security/README.md^
 dank.md^
 --variable toc-own-page=true^
 --variable book=true^
 --top-level-division=chapter^
 --top-level-division=chapter^
 --filter pandoc-latex-environment^
 --self-contained^
 --resource-path=assets^
 -s --toc  --template eisvogel -o book.pdf

 REM https://learnbyexample.github.io/customizing-pandoc/
 REM https://github.com/Wandmalfarbe/pandoc-latex-template
 REM https://stackoverflow.com/questions/30880200/pandoc-what-are-the-available-syntax-highlighters
 REM --include-before-body cover.tex
 REM    --verbose 

 REM  
 REM 