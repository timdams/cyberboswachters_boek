
# Cryptografie

TODODODO

## Basics van cryptografie

### CIA

Data, in welke vorm dan ook (berichten over een netwerk, bestanden op een harde schijf, tekst in een database), moet beschermd worden, dat beseffen we nu. Om dit te doen passen we het zogenaamde **C.I.A.** acroniem toe:

* **C** voor "**confidentiality**": vertrouwelijkheid. De data kan enkel door zij die er recht toe hebben gebruikt worden. We gaan dit onder andere oplossen met behulp van encryptie en paswoorden.
* **I** voor "**integrity**": integriteit. We moeten weten of onze data onbeschadigd is en niet werd aangepast door derden (of storingen). Bij bestanden gaan we bijvoorbeeld werken met zogenaamde (secure) hashes.
* **A** voor "**availability**": beschikbaarheid. Data die niet door rechtmatige gebruikers kan bereikt worden is onbestaande data. Zogenaamde "denial-of-service" (dos) aanvallen hebben als doel deze peiler van CIA aan te vallen. availability is een breed veld en wordt onder andere opgelost door backups, redundante servers enerzijds, en preventieve maatregelen anderzijds zoals firewalls, load balancers, etc.

### Encryptie

Een grote pijler van CIA, confidentiality, wordt opgelost met behulp van encryptie, namelijk het versleutelen van onze data met behulp van een geheime sleutel. Door deze te versleutelen wordt deze onleesbaar voor personen die de geheime sleutel niet hebben (en bijgevolg niet geautoriseerd zijn om de data te mogen lezen). De moeilijkheid van een goed cryptografisch systeem is dat de data op een zodanig manier met versleuteld worden dat het quasi onmogelijk is om zonder sleutel de originele data terug te vinden. We spreken hierbij over de originele data als de *plaintext* en de geëncrypteerde data als *ciphertext*. De ontvanger van een ciphertext moet deze, als hij de juiste sleutel heeft, terug kunnen omzetten naar de originele plaintext.

Er zijn al veel encryptie algoritmes de revue gepasseerd doorheen de geschiedenis van de mens. Al van in de tijd van de Romeinen werd er aan cryptografie gedaan. Mensen hebben altijd gevoelige data gehad waar vertrouwelijk mee moest om gesprongen worden. Naarmate de cryptanalyse (dat is het proberen ontcijferen van een ciphertext zonder dat je de geheime sleutel hebt) evolueerde moesten ook de cryptografische algoritmes verbeteren. Ook hier zien we weer diezelfde wedloop tussen digitale stropers en cyberboswachters. Hoe sterker onze computers worden (met dank aan de wet van Moore) hoe krachtiger onze algoritmes moeten worden. De eenvoudigste vorm van cryptanalyse, bruteforcing, is rechtstreeks afhankelijk van de snelheid van de computer. Hoe meer sleutels per seconde een computer kan testen, hoe sneller de originele sleutel kan gevonden worden. 


::: tip
De volledige geschiedenis van de cryptografie hier vertellen zou ongeveer 1200 pagina's vereisen. Het briljante boek "The Codebreakers" van David Kahn is een aanrader voor eenieder die meer willen weten over deze boeiende geschiedenis. Laat de 1200 pagina's je niet afschrikken, het boek leest als een echte thriller.
:::

Alle bestaande cryptografische systemen kunnen op verschillende manieren gekarakteriseerd worden (bron Network Security Essentials, door William Stallings):

* De **acties** die op de data wordt uitgevoerd om deze te encrypteren:
  * Substitutie: een teken door een ander teken vervangen.
  * Transpositie: een teken naar op een andere plek in de tekst zetten.
  * Product: een combinatie van meerdere substituties en transposities.
* Het **aantal sleutels** dat nodig is:
  * 1 sleutel, ook wel "private encryption" genoemd.
  * 2 sleutels, ook wel "public encryption" genoemd.
* De **manier** waarop de data wordt verwerkt:
  * Als een blok data, blok per blok.
  * Als een stream, teken per teken.
  
### Kerckhoffs principe

We gaan zo meteen bekijken hoe encryptie effectief gebeurt, maar we willen al even een mythe onderuit halen. Binnen encryptie heb je de *principes van Kerckhoff*, 6 regels die in de 19e eeuw werden vastgelegd waarin encryptie-algoritmes moeten voldoen om als veilig beschouwd te worden. Sommige principes zijn, onder ander door onze steeds krachtige computers, niet meer relevant, meer 1 blijft ongelooflijk belangrijk: " het kennen van het gebruikte encryptiealgoritme door de *tegenstander* is geen probleem, het is enkel de geheime sleutel die ten allen tijde uit de handen van de tegenstander moet blijven.".

Dit ogenschijnlijk eenvoudige zinnetje is veel zeggen: **je sleutel (of paswoord) is wat je het beste moet beschermen. Zonder kennis van de sleutel zou iemand nooit toegang mogen krijgen tot versleutelde data, ongeacht dat geweten is met welk systeem de data werd vercijferd.** 

*Security through obscurity* is al lang een dubbel snijdend zwaard binnen de security wereld. Enerzijds is het niet aangeraden om met veel tamtam aan te kondigen hoe jij je data beveiligd. Anderzijds geeft het je mogelijk een vals gevoel van veiligheid (*snake's oil*) daar het geheimhouden van je algoritme en systemen geen garantie is dat deze ook effectief veilig zijn. In de 21e eeuw zijn de meest gebruikte encryptie-algoritmes publiek gekende algoritmes die door duizenden experts aan de tand zijn gevoeld. De kans dat er dus (bewuste) fouten in dergelijke standaarden ziet is véél kleine dan wanneer je met een zogenaamd *proprietary* systeem werkt waarvan de werking angstvallig geheim wordt gehouden.

**Finaal draait alles op het geheimhouden van je sleutel, iets dat we telkens weer in dit boek zullen herhalen!**

::: caution
Let op encryptiesystemen die zichzelf verkopen met zinnen zoals *"10 jaar nodig op een gewone laptop om alle sleutels te testen"*. Dit zou kunnen doen vermoeden dat je dus voor minstens 10 jaar goed zit (we gaan er even vanuit dat de gemiddelde cryptanalist maar toegang heeft tot 1 laptop, wat uiteraard in de echte wereld niet zo is). De gemiddelde tijd van voorgaande systeem om te bruteforcen is 5 jaar, de helft.

Stel dat je een sleutel hebt die bestaat uit 8 karakters. Een karakter is een letter van a tot z (geen onderscheid tussen hoofd en kleine letters en geen getallen of speciale tekens). Er zijn 26^8 mogelijke sleutels (we gaan ervan uit dat de sleutel exact 8 karakters moet bevatten). Een computer kan 1 miljoen sleutels per seconde testen. De duur om alle mogelijke sleutels te testen is dus (26^8)/1 000 000, oftewel 208 827 seconden, pakweg 58 uur. Intuïtief zou je kunnen denken dat je dus meer dan 2 dagen "veilig" zit, wat niet zo is. De kans dat de eerste sleutel die je test reeds de juiste is, is even groot als dat het de laatste sleutel is. Kortom, gemiddeld gezien zal de sleutel in de helft van de maximum tijd gevonden was, oftewel 29 uur. 
:::

## De eerste algoritmes

Het doel van ieder encryptie-algoritme is dus om data zodanig te versleutelen zodat enkel eigenaars van de gebruikte sleutel de originele tekst kunnen terugvinden.

### Caesar encryptie

De Caesar encryptie (naar Julius Caesar) bestaat uit een eenvoudige substitutie algoritme. De sleutel is een getal tussen 1 en 25 en geeft aan door welk element uit het alfabet een teken wordt aangepast, als volgt:

* Ieder element wordt voorgesteld als een cijfer. A krijgt de waarde 1, B wordt 2,... Z wordt 26.
* Als de sleutel het getal 3 is, dan zal nu iedere letter A in de tekst vervangen worden door het teken 1+3, dus D. Iedere B wordt een E, enzovoort.
* Indien er een "overflow" is achteraan komen we uiteraard terug naar voor in het alfabet. Iedere Z wordt dus een C, iedere Y een B, enzovoort.


::: tip
De modulo operator (%) is erg nuttig bij substitutie-algoritmes zoals bij Caesar encryptie. De modulo operator geeft de rest weer wanneer de linkse door de rechtse operator zouden delen. 19%5 geeft dus 4 als resultaat.
Je kan de operator gebruiken om snel te weten wat de waarde van een teken wordt bij Caeser-encryptie als volgt:


``teken % sleutel => nieuw teken``
 

Als je dus een sleutel hebt met waarde 7 en je wilt weten wat de waarde van ``Y`` (element 25) wordt dan schrijf je:


``25 % 7``


Dit zal dus 4 worden, oftewel een ``D``.
:::


Uiteraard kan iedere weldenkende mens in de 21e eeuw een Caesar-encryptie bruteforcen. Het aantal mogelijk sleutels beperkt zich tot 25 mogelijkheden (sleutel 26 zal resulteren in géén encryptie: je plaintext en ciphertext zullen identiek zijn) en je kan dit dus snel testen. 

Het principe, de substitutie, blijft echter overeind staan en zal je nog zien terugkomen in de komende algoritmes.


### Symmetrische encryptie

![](crypto/basicencrypt.png)


