pandoc ^
 metadata.yaml^
 1_cryptografie/authenticatie.md^
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

 REM https://learnbyexample.github.io/customizing-pandoc/
 REM https://github.com/Wandmalfarbe/pandoc-latex-template
 REM https://stackoverflow.com/questions/30880200/pandoc-what-are-the-available-syntax-highlighters
 REM --include-before-body cover.tex
    

 REM  
 REM 