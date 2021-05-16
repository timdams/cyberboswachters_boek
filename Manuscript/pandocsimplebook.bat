pandoc ^
 metadata.yaml^
 0_het_security_landschap/2_basicsec.md^
 dank.md^
 --variable toc-own-page=true^
 --variable book=true^
 --top-level-division=chapter^
 --top-level-division=chapter^
 --filter pandoc-latex-environment^
 --self-contained^
 --resource-path=assets^
 --verbose^
 -s  --template eisvogel -o booktest.pdf

 REM HTTPS://learnbyexample.github.io/customizing-pandoc/
 REM HTTPS://github.com/Wandmalfarbe/pandoc-latex-template
 REM HTTPS://stackoverflow.com/questions/30880200/pandoc-what-are-the-available-syntax-highlighters
 REM --include-before-body cover.tex
    

 REM  
 REM 