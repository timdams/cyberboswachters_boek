REM To use this script. Install:
REM 0.Pandoc: https://pandoc.org/installing.html
REM 1.Python: https://www.python.org/downloads/release/python-396/
REM 2.Then:  pip install pandoc-latex-environment 
REM 3.MikTex: https://miktex.org/download
REM 4. Make sure to update all packages using "miktex console" once before running
REM Eisvogel manual at https://repo.telematika.org/project/wandmalfarbe_pandoc-latex-template/
REM Actual usefull (aka the script) stuff starts now:
pandoc ^
 metadata.yaml^
 intro.md^
 0_het_security_landschap/les1_wordtheterger.md^
 0_het_security_landschap/2_basicsec.md^
 1_cryptografie/basics.md^
 1_cryptografie/publiccrypto.md^
 3_netwerk_security/wifi.md^
 1_cryptografie/authenticatie.md^
 5_iot/iotintro.md^
 0_het_security_landschap/3_gdpr.md^
 appendix/meerweten.md^
 bronnen.md^
  appendix/darkweb.md^
 appendix/awareness.md^
 --variable toc-own-page=true^
 --variable book=true^
 --top-level-division=chapter^
 --filter pandoc-latex-environment^
 --self-contained^
 --toc-depth=2^
 --resource-path=assets^
 -s --toc --verbose --template templates/eisvogel  --number-sections -o book.pdf 

 REM HTTPS://learnbyexample.github.io/customizing-pandoc/
 REM HTTPS://github.com/Wandmalfarbe/pandoc-latex-template
 REM HTTPS://stackoverflow.com/questions/30880200/pandoc-what-are-the-available-syntax-highlighters
 REM --include-before-body cover.tex
 REM   

 REM  
 REM 