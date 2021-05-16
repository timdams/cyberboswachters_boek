pandoc ^
 metadata.yaml^
 intro.md^
 0_het_security_landschap/les1_wordtheterger.md^
 0_het_security_landschap/2_basicsec.md^
 0_het_security_landschap/3_gdpr.md^
 1_cryptografie/basics.md^
 1_cryptografie/publiccrypto.md^
 3_netwerk_security/wifi.md^
 1_cryptografie/authenticatie.md^
 dank.md^
 --variable toc-own-page=true^
 --variable book=true^
 --top-level-division=chapter^
 --top-level-division=chapter^
 --filter pandoc-latex-environment^
 --self-contained^
 --resource-path=assets^
 -s --toc --verbose --template eisvogel -o book.pdf 

 REM HTTPS://learnbyexample.github.io/customizing-pandoc/
 REM HTTPS://github.com/Wandmalfarbe/pandoc-latex-template
 REM HTTPS://stackoverflow.com/questions/30880200/pandoc-what-are-the-available-syntax-highlighters
 REM --include-before-body cover.tex
 REM   

 REM  
 REM 