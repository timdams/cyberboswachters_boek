# Cryptografie


## Waarom cryptografie?


### CIA en het security model

Data (of informatie), in welke vorm dan ook (berichten over een netwerk, bestanden op een harde schijf, tekst in een database), moet beschermd worden, dat beseffen we nu. Het doel van onze data is dat deze voldoet aan het acroniem **C.I.A** wat staat voor:

* **C** voor "**confidentiality**": vertrouwelijkheid. De data kan enkel door zij die er recht toe hebben gebruikt worden. We gaan dit onder andere oplossen met behulp van encryptie en paswoorden.
* **I** voor "**integrity**": integriteit. We moeten weten of onze data onbeschadigd is en niet werd aangepast door derden (of storingen). Bij bestanden gaan we bijvoorbeeld werken met zogenaamde (secure) hashes.
* **A** voor "**availability**": beschikbaarheid. Data die niet door rechtmatige gebruikers kan bereikt worden is onbestaande data. Zogenaamde "denial-of-service" (dos) aanvallen hebben als doel deze pijler van CIA aan te vallen. availability is een breed veld en wordt onder andere opgelost door backups, redundante servers enerzijds, en preventieve maatregelen anderzijds zoals firewalls, load balancers, etc.

De zogenaamde McCumber kubus, ontwikkeld door John McCumber in 1991, geeft een goed beeld weer waarom het steeds belangrijk is goed te beseffen binnen welke context we praten. Deze kubus stelt een model voor dat kan gebruikt worden om je ervan te vergewissen dat je aan alles denkt wanneer je je informatie wilt beschermen. De kubus bestaat uit 3 dimensies en iedere dimensie bestaat uit een aantal aspecten. **Enkel wanneer we alle aspecten van alle dimensies in onze beveiligingsaanpak voorzien kunnen we hopen dat we onze C.I.A. doelen hebben bereikt.** 

Om ons doel te bereiken (C.I.A.) moeten we ervoor zorgen dat we dit toepassen op alle vormen die onze data kan hebben (opslag, verzenden, verwerken). Dit kunnen we tewerkstellingen door technologische oplossingen (zoals encryptie wat zo meteen wordt uitgespit), maar een niet onbelangrijke factor zijn ook de mensen die met de data moeten werken. Als zij zich niet aan de afspraken (procedures) houden en hun paswoorden gewoon op post-its aan hun scherm hangen, dan mag je een nog zo'n dure firewall hebben, het zal niet baten. 

![De McCumber kubus](crypto/secmodel.png){ width=70% }


### Encryptie

Een grote pijler van CIA, confidentiality, wordt opgelost met behulp van encryptie, namelijk het versleutelen van onze data met behulp van een geheime sleutel. Door deze te versleutelen wordt deze onleesbaar voor personen die de geheime sleutel niet hebben (en bijgevolg niet geautoriseerd zijn om de data te mogen lezen). De moeilijkheid van een goed cryptografisch systeem is dat de data op een zodanig manier met versleuteld worden dat het quasi onmogelijk is om zonder sleutel de originele data terug te vinden. We spreken hierbij over de originele data als de *plaintext* en de geëncrypteerde data als *ciphertext*. De ontvanger van een ciphertext moet deze, als hij de juiste sleutel heeft, terug kunnen omzetten naar de originele plaintext.

Er zijn al veel encryptie algoritmes de revue gepasseerd doorheen de geschiedenis van de mens. Al van in de tijd van de Romeinen werd er aan cryptografie gedaan. Mensen hebben altijd gevoelige data gehad waar vertrouwelijk mee moest om gesprongen worden. Naarmate de **cryptanalyse** (dat is het proberen ontcijferen van een ciphertext zonder dat je de geheime sleutel hebt) evolueerde moesten ook de cryptografische algoritmes verbeteren. Ook hier zien we weer diezelfde wedloop tussen digitale stropers en cyberboswachters. Hoe sterker onze computers worden (met dank aan de wet van Moore) hoe krachtiger onze algoritmes moeten worden. De eenvoudigste vorm van cryptanalyse, bruteforcing, is rechtstreeks afhankelijk van de snelheid van de computer. Hoe meer sleutels per seconde een computer kan testen, hoe sneller de originele sleutel kan gevonden worden. 


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

Het doel van ieder encryptie-algoritme is dus om data zodanig te versleutelen zodat enkel eigenaars van de gebruikte sleutel de originele tekst kunnen terugvinden. We vertelden net dat encryptiealgoritmes kunnen onderverdeeld volgens de actie die ze uitvoeren: substitutie, transpositie of een combinatie. We tonen van iedere variant nu een historisch voorbeeld.


### Substitutie: Caesar encryptie

De Caesar encryptie (naar Julius Caesar) bestaat uit een eenvoudige substitutie algoritme. De sleutel is een getal tussen 1 en 25 en geeft aan door welk element uit het alfabet een teken wordt aangepast, als volgt:

* Ieder element wordt voorgesteld als een cijfer. A krijgt de waarde 1, B wordt 2,... Z wordt 26.
* Als de sleutel het getal 3 is, dan zal nu iedere letter A in de tekst vervangen worden door het teken 1+3, dus D. Iedere B wordt een E, enzovoort.
* Indien er een "overflow" is achteraan komen we uiteraard terug naar voor in het alfabet. Iedere Z wordt dus een C, iedere Y een B, enzovoort.

::: tip
De modulo operator (%) is erg nuttig bij substitutie-algoritmes zoals bij Caesar encryptie. De modulo operator geeft de rest weer wanneer de linkse door de rechtse operator zouden delen. 19%5 geeft dus 4 als resultaat.
Je kan de operator gebruiken om snel te weten wat de waarde van een teken wordt bij Caesar-encryptie als volgt:


``teken % sleutel => nieuw teken``


Als je dus een sleutel hebt met waarde 7 en je wilt weten wat de waarde van ``Y`` (element 25) wordt dan schrijf je:


``25 % 7``


Dit zal dus 4 worden, oftewel een ``D``.
:::

Het Caesercipher wordt ook wel kortweg *Rot* genoemd, naar het woord *rotatie*. Een cijfer erachter geeft dan aan welk de te gebruiken sleutel is. Rot4 wil dus zeggen dat alle elementen 4 plaatsen opgeschoven moeten worden.

:::tip
Merk op dat Rot13 (ook wel *Caesaralfabet genoemd) een speciale sleutel is. Als je namelijk 2 maal na elkaar Rot13 toepast op een tekst (eerst op de plaintext, dan op de resulterende cipertext) dan verkrijgt men terug de originele tekst.
:::

Uiteraard kan iedere weldenkende mens in de 21e eeuw een Caesar-encryptie bruteforcen. Het aantal mogelijk sleutels beperkt zich tot 25 mogelijkheden (sleutel 26 zal resulteren in géén encryptie: je plaintext en ciphertext zullen identiek zijn) en je kan dit dus snel testen.  

Door **frequentieanalyse** op de ciphertext toe te passen kan men ook de plaintext terugvinden zonder te moeten bruteforcen. Indien de plaintext een tekst in ,bijvoorbeeld, het Nederlands is, dan kunnen we gebruik maken van de statistische eigenschappen van een taal. Zo weten we dat bepaalde letters in een standaard Nederlandstalige tekst meer of minder vaak voorkomen. De letter `e` komt bijvoorbeeld veel vaker voor dan de `v`. Daar iedere letter in de encryptie door een andere wordt vervangen, is het dus voldoende om te ontdekken (a.d.h.v. frequentieanalyse) welke letter(s) het meest of minst voorkomen om je zo een vermoeden te geven van de originele letter. 

:::tip
Dit verklaart ook waarom je best je te encrypteren berichten zo kort mogelijk houdt. Hoe minder tekens, hoe minder goed je frequentieanalyse zal werken. Een andere veelgebruikte fout (in klassiekere encryptie) was dat de verzender bijvoorbeeld voorspelbare tekst ging encrypteren. Als je weet dat de verzender altijd begint met "Geachte" in z'n berichten, dan is de kans groot dat de eerste 7 tekens in de ciphertext deze plaintext voorstellen.
:::

Het principe van Caesar-encryptie, de substitutie, blijft echter overeind staan en zal je nog zien terugkomen in de komende algoritmes. 


### Transpositie: scytale encryptie

Bij transpositie-algoritmen gaan we de positie van de karakters veranderen. De sleutel kan hierbij bepalen op welke manier dit moet gebeuren. De Oude Grieken gebruikten een zogenaamde scytale om aan transpositie-encryptie te doen. Een scytale was een lange stok bestaande uit 3 of meerdere lange zijden. De boodschap werd op een lang lint geschreven en dit lint werd dan over de skytale gedraaid. De sleutel gaf aan uit hoeveel vlakken de te gebruiken scytale moest bestaan. Ieder karakter van de plaintext (het lint) kwam op een andere zijde te liggen. Vervolgens werden alle letters op 1 zijde achter elkaar gezet, en dit werd herhaald voor iedere zijde: dit werd de ciphertext die werd doorgestuurd.

Om de nu de cipertext decrypteren werd een onbeschreven lint over de juiste scytale gelegd. Vervolgens werd de verkregen op dit lint, zijde per zijde, beschreven. Als de ontvanger dan het lint ontrolde kreeg hij terug de originele tekst te zien.

::: tip
Het voordeel van een transpositiecipher is natuurlijk dat een zogenaamde "known plaintext" aanval iets moeilijker wordt. Een veel gebruikte manier die cryptanalisten vroeger gebruikten is de kennis die ze hadden van delen van de plaintext. Als geweten was dat het bericht altijd begon met "Beste dokter" dan was dit al een goede aanzet om van hieruit verder te werken. 
:::

Uiteraard zijn er tal van varianten mogelijk om transpositie te doen. Eerst kan je beslissen om je plaintext in een bepaalde vorm te plaatsen: bijvoorbeeld in 10 kolommen. Vervolgens kan je dan, gebaseerd op de sleutel, beslissen in welke volgorde je de kolommen achter elkaar plaatst om de originele tekst te krijgen. Dit is een zogenaamd *route cipher* wat onder andere werd gebruikt tijdens de Amerikaanse Burgeroorlog. 

![Bron Wikipedia](crypto/skytale.png){ width=50% }

### Combinatie

Het spreekt voor zich dat een combinatie van een transpositiecipher en een substitutiecipher je encryptie nog versterkt. Veel moderne algoritmen kunnen nog steeds herleid worden tot een sequentie van meerdere basisvormen na elkaar. 

De **Advanced Encryption Standard (AES)** is in de 21e eeuw zo'n beetje de de facto standaard als het aankomt op symmetrische encryptie (d.w.z. encryptie waar maar 1 sleutel voor nodig is, verder meer hierover). Als we echter eens het algoritme opengooien en een enkele *encryption round* bekijken (AES bestaat uit een sequentie van deze rondes) dan zien we dat de bits die bovenaan binnenkomen (*state*) vervolgens een combinatie van substituties (*sub*) en transposities (*mixcolumns* en *shiftrows*) ondergaat.

![Bron Wikipedia](crypto/aesprev.png)

We gaan AES nog terugzien opduiken wanneer we gaan bekijken hoe draadloze netwerken worden beveiligd. Als Belg mogen we trouwens erg fier zijn op deze wereldwijd gebruikte Amerikaanse standaard. Je zal later ontdekken waarom dat zo is!

::: tip
Doel van dit hoofdstuk is ook aantonen dat je geen wiskundig wondertalent moet zijn om de basisconcepten van cryptografie te begrijpen. Hier en daar neem ik wat vrijheden om bepaalde stappen te vereenvoudigen, maar de essentie van de algoritmen blijft wel bewaard en daarmee, hopelijk, ook de eenvoudigheid (en dus elegantie) ervan.
:::

## Cryptanalyse

**TODO:**

* Sleutel lengte en permutaties berekenen afh van alfabetgrootte
* Tijd om te bruteforcen tabel
* cryptanalytics attack
* cryptanalytic attacks vs bruteforce
* Bruteforce vs dictattack
* Noot omtrent quantum computers

## Symmetrische encryptie

Er zijn 2 soorten encryptiesystemen als we kijken naar het aantal sleutels. Symmetrische systemen zijn systemen waarbij maar 1 sleutel nodig is: zowel ontvanger als verzender gebruiken dezelfde sleutel.  De term symmetrisch verwijst naar het feit dat het algoritme exact hetzelfde doet aan beide zijden. Het enige verschil is dat bij de verzender de plaintext in het systeem wordt gestoken, wat resulteert in een ciphertext. Terwijl de ontvanger de ciphertext in het systeem plaatst om een plaintext te krijgen.

![](crypto/basicencrypt.png)

* De symmetrische encryptiesystemen zijn de oudste vorm: alle klassieke algoritmes waren van dit principe. Asymmetrische systemen zijn pas in de 20e eeuw ontwikkeld (circa 1970).

* Voorbeelden van bestaande symmetrische encryptiesystemen zijn: AES, DES, IDEA, RC4, Blowfish, etc.

Dit type encryptie is nog steeds het meest gebruikt en wordt overal gebruikt waar data op een veilige  (confidentiality) moet bewaard, verstuurd of verwerkt worden.

### Sleuteloverdracht

De moeilijkheid bij symmetrische systemen is de sleuteloverdracht. Daar ontvanger en verzender dezelfde sleutel hanteren is het natuurlijk belangrijk dat deze de sleutel op een veilige manier kunnen uitwisselen. Dit probleem wordt niet opgelost door symmetrische cryptosystemen. Afhankelijk van de context kan deze uitwisseling op verschillende manieren gebeuren:

* Via een asymmetrisch encryptiesysteem dat wél sleutels op een veilige manier kan uitwisselen (zie verder).
* Via een beveiligd kanaal, in eender welke vorm (bijvoorbeeld fysiek de sleutel aan de andere persoon geven of zeggen, deze opsturen via een reeds bestand opgezet symmetrisch encryptiekanaal, etc.)

### Block en Stream cipers

Er zijn 2 soorten symmetrische encryptieciphers als we kijken naar de manier waarop ze de te encrypteren data verwerken:

* **Streamciphers**: hierbij wordt de data letterlijk als een stream van tekens, teken per teken geëncrypteerd (RC4, etc.). Voor ieder teken dat verwerkt wordt zal er exact één geëncrypteerd teken gegenereerd worden. Dit soort algoritmes zijn over het algemeen sneller dan de blockciphers.
* **Blockciphers**: de data wordt in blokken (van bijvoorbeeld 128 tekens) verwerkt (AES, DES, 3DES, etc.) Deze vorm komt heden ten dage vaker voor. 

### Streamciphers

De werking van een symmetrisch stream cipher is verrassend eenvoudig en bestaat uit 2 delen:

* Een pseudorandom keystream generator: deze zal de sleutel als het ware expanderen naar een sleutel met de zelfde lengte als de stream, genaamd een **keystream**. Daar we met een stream werken zal deze generator teken per teken genereren. Hoe dit gebeurt leggen we verderop uit.
* De **xor** of "exclusieve of" functie: deze zal de plaintext naar een ciphertext omzetten door de plaintext met de keystream samen te voegen.

![](crypto/stream.png)

Aan de ontvanger zijde gebeurt exact hetzelfde. **Enkel indien de ontvanger dezelfde sleutel gebruikt, zal deze dezelfde keystream kunnen genereren, en bijgevolg enkel dan de originele plaintext verkrijgen.**

Het hart van een symmetrisch streamcipher is dus enerzijds de xor-functie én, belangrijker, de manier waarop de keystream wordt gemaakt. 

#### De XOR functie

De waarheidstabel van de XOR-functie is de volgende:

| Plaintext input | Keystream input | Ciphertext output |
| --------------- | --------------- | ----------------- |
| 1               | 0               | 1                 |
| 0               | 1               | 1                 |
| 0               | 0               | 0                 |
| 1               | 1               | 0                 |

De xor-functie wordt in schema's aangeduid door een cirkel met een plusje in: ![](crypto/xor.png){ width=20px }

De XOR-functie heeft de fijne eigenschap dat je deze dus voor encryptie kan gebruiken. 

Beeld je in dat we het bericht `1010` willen versleutelen, en we hebben een gegenereerde keystream `1101`. Als we deze *XOR'n* dan geeft dit `0111`. Dit is dus de ciphertext. Als de ontvanger dezelfde keystream kan genereren en deze xor'd met de verkregen ciphertext, dan krijgt deze terug de originele plaintext.



#### De keystream generator

De keystream generator heeft dus als doel om voor iedere karakter dat moet geëncrypteerd worden een bijhorend keystream karakter te maken. Deze karaktergeneratie moet onvoorspelbaar zijn (*random*) tegenover de sleutel die wordt gebruikt en het voorgaande karakter dat werd gemaakt. Echter, dit moet wel PSEUDO (*schijn*)-willekeurig zijn: dezelfde sleutel als begintpunt (*seed*) moet dezelfde reeks genereren. 

De kracht (en zwakte) van een symmetrisch streamcipher ligt in de implementatie van de manier waarom deze keystream generator werkt. Mogelijke zwakheden kunnen bijvoorbeeld zijn dat de gegenereerde stroom informatie van de sleutel "lekt" naar de keystream (wat desastreuze gevolgen bleek te hebben bij de originele wifi-security (WEP) waarover later meer) of een voorspelbare "randomiteit" van de keystream?

::: note

Om aan encryptie te kunnen doen hebben we systemen nodig die onvoorspelbaar zijn. Als de aanvaller kan voorspellen wat de uitvoer van een onderdeel van de encryptie zal zijn, dan kunnen we geen confidentiality en/integrity voorzien. Kortom, we hebben algoritmes nodig die willekeurige getallen kunnen generen die 100% onvoorspelbaar zijn. Net zoals het werpen van een dobbelsteen niet voorspeld kan worden, zo ook moeten onze algoritmes een (digitale) dobbelsteen hebben.

Digitale systemen die perfect willekeurige getallen genereren noemt men **random number generator** (RNG). Uiteraard moet een RNG geprogrammeerd kunnen worden: dat behelst dus een algoritme. Een algoritme is per definitie "voorspelbaar". Alles hangt daarom af van de invoer die het algoritme gebruikt om random getallen te beginnen genereren. We spreken dan van een **pseudo random number generator** (PRNG), pseudo (**schijnbaar**) omdat de uitvoer afhankelijk is van het startgetal, de zogenaamde **seed**. Die seed kan bijvoorbeeld de encryptiesleutel zijn: enkel met dié sleutel zal het algoritme dezelfde reeks getallen generen. Er zijn echt ook systemen die bijvoorbeeld de staat van een flipflop als startpunt gebruiken: wanneer je een flipflop aanzet kan je niet voorspellen of deze op 1 of 0 zal staan (daar deze staat beïnvloed wordt door de elektromagnetische straling). Uiteraard is een dergelijke seed voor een keystreamgenerator nutteloos, daar zowel verzender én ontvanger dezelfde reeks getallen moeten kunnen genereren.

:::

#### RC4 tot op het bot

Laten we eens één van de meest gebruikte streamciphers bekijken, het RC4 cipher. Dit algoritme, ontwikkeld Ron Rivest (de afkorting staat trouwens voor *Rons Cipher 4*), wordt gebruikt onder andere om een beveiligde SSL-tunnel (zie later)op te zetten en zit in het hart van veel geëncrypteerde communicatiekanalen. Het heeft weliswaar enkele zwakheden, maar mits juist toegepast kunnen die grotendeels omzeild worden.

RC4 werkt zoals we eerder verklaarden hoe een stream cipher werkt: het heeft een keystreamgenerator en zal de keystream vervolgens XO'r met de plaintext. Eerst zal de ingevoerde sleutel (die 40 tot 2048 bits lang mag zijn) omgezet worden naar een compatibele werksleutel met behulp van een **Key scheduling algorithm** (KSA). Deze werksleutel zal dan als seed gebruikt worden om een keystream in het **Pseudo-random generator algorithm** (PRGA) te maken.

![](crypto/rc4.png)

##### KSA

De **KSA** heeft al doel om, de ingevoerde 40 tot 2k-bit sleutel  om te zetten naar een compatibele sleutel  voor de PRGA . Het doet dit volgens een eenvoudig algoritme:

**Stap 1**: plaats de ingevoerde sleutel in een array (**T**) van 256 karakters. Herhaal de sleutel indien nodig.

**Stap 2**: Maak een array (**S**) aan, ook van 256 karakters, en plaats er de waarden 0 tot en met 255 in.

**Stap 3**: permuteer (*transpositie*) de elementen in de array T met behulp van de array S als volgt:

```pseudocode
j = 0
for i = 0 tot 255
{	
	j = (j + S[i] + T[i]) % 256
	Verwissel(S[i],S[j])
}
```

Deze stap zal dus de elementen in de sleutelarray S naar nieuwe posities in de T array plaatsen en deze ook de hele tijd van plek wisselen. De index j is afhankelijk van de sleutelwaarde en zorgt er dus voor dat iedere sleutel een unieke array T zal opleveren.

###### Uitgewerkt voorbeeld van KSA

Stel dat onze sleutel "ab" is. De decimale ASCII-waarden van a en b zijn 97 en 98 respectievelijk. Onze array T zal dus bestaan uit 128 keer de waarden 97 en 98 na elkaar aan de start:

| Index | Waarde |
| ----- | ------ |
| S[0]  | 97     |
| S[1]  | 98     |
| S[2]  | 97     |
| etc.  |        |

Stap 2 genereert de tabel T:

| Index | Waarde |
| ----- | ------ |
| T[0]  | 0      |
| T[1]  | 1      |
| T[2]  | 2      |
| etc.  |        |

Als we dan stap 3 toepassen dan krijgen we na de eerste iteratie van de loop (``i=0``):

``j = (0 + S[0] + T[0]) % 256``

oftewel

``j= (0 + 0 + 97) % 256  => j wordt 97``

De eerste wissel die in S zal plaatsvinden is dan ``Verwissel(S[0],S[97])``

S ziet er dan als volgt uit na de eerste iteratie:

| Index | Waarde |
| ----- | ------ |
| S[0]  | 97     |
| S[1]  | 1      |
| S[2]  | 2      |
| ...   |        |
| S[97] | 0      |
| etc.  |        |

En dit herhalen we nog 255 keer.

##### PRGA

Nu we een compatibele sleutel T hebben kan de keystream generatie van start gaan. Deze bestaat uit een loop die blijft doorgaan telkens een nieuw plaintext karakter binnenkomt, als volgt:

```pseudocode
i = 0
j = 0
Herhaal telkens keystream karakter nodig is
{
	i = (i+1) % 256
	j = (j +S[i]) % 256
	Verwissel(S[i],S[j])
	k = S[(S[i]+S[j]) % 256]
	output k naar keystream
}
```

Zoals je ziet zal dus de array S de hele tijd van "gedaante" veranderen (hij blijft bestaan uit de getallen 0 tot en 255 maar al lang niet meer in volgorde) en telkens zal het algoritme één specifieke waarden (tussen 0 en 255) uit de array teruggeven als keystream karakter.

##### Uitgewerkt voorbeeld van PRGA

Als we verder werken met de tabel K van het vorige uitgewerkte KSA voorbeeld, dan krijgen we dus bij iteratie 1 van de PRGA 

::: warning
We veronderstellen even dat we de KSA niet verder hebben uitgevoerd en de tabel S dus dezelfde is gebleven als op het einde van het voorbeeld wat in het echt niet zal zijn.
:::

```
i = (0+1) % 256  => 1
j = (0+97) % 256 => 97
Verwissel(S[1],S[97]) => Verwissel(1,0)
k = S[ (S[1]+S[97])%256 ] => k = S[ (1 + 0) % 256] 
we outputten de waarde die op S[1] staat
```

Finaal zal deze *geoutputte* waarde ``k`` ge-xor'd worden met het huidige karakter van de plaintext.

::: note
Zo, dat viel nog mee he? Zoals al gezegd, een belangrijke motivatie van dit boek is aantonen dat je niet bang hoeft te zijn van wat er achter de schermen van de cyberwereld gebeurt. De hoeveelheid wiskunde die we bijvoorbeeld nodig hadden is beperkt gebleven tot onze trouwe modulo (%)-operator en meer niet. Wanneer we zo meteen een block ciphers gaan uitkleden zal je ook daar ontdekken dat je best in staat bent schijnbaar complexe technologieën te begrijpen. Hop naar de blockciphers dus!
:::

### Blockciphers

Blockciphers, de naam zegt het al, zal eerst de plaintext in blokken karakters opdelen (bv 128 bits) en vervolgens blok per blok encrypteren. 

#### Feistel structuren
Ook hier zullen we dezelfde soorten operaties (XOR, substituties en transposities) zien terugkomen. Echter, ook zogenaamde **Feistel**-structuren worden hier gebruikt: in deze operatie zal steeds de data in 2 helften worden gesplitst en wordt steeds een specifieke operatie (aangeduid met *F* van functie in de figuur), zoals een substitutie, op 1 helft uitgevoerd dat dan wordt ge-xor'd met de andere helft. Dit wordt meerdere keren herhaald, waarbij de linker (*L*) en rechterzijde (*R*) steeds afwisselend door de specifieke encryptie-operatie gaan. Net zoals bij RC4 zullen we ook vaak met een zogenaamd key scheduling algoritme werken zodat de sleutel niet constant doorheen het hele proces dezelfde is en we dus met **subkeys** werken (*K* in onderstaande figuur)

![Bron wikipedia](crypto/feistel.png){ width=60% }

#### DES tot op het bot

Een van de oudste block ciphers is **DES** oftewel **Data Encryption Standard**. Deze standaard werd in 1977 geboren en vereiste toen blokken van 64 bits data en gebruikte een 56bit sleutel. Ondertussen is dit cipher zeer outdated, maar we gaan hem toch bekijken omdat deze enerzijds erg belangrijk was voor de wereld - grote delen van het bankwezen beschermden er hun financiële transacties mee (en nadien met de opvolger 3DES, zie verder)- en de standaard is erg duidelijk om een goed inzicht in block ciphers te verkrijgen.

::: tip
Er was veel controverse rond deze standaard (gebaseerd op het door IBM ontwikkelde Lucifer cipher) omdat de originele versie (genaamd Lucifer) werkte met een dubbel zo grootte sleutel (128 bit) en bijgevolg dus veiliger was op lange(re) termijn. De Amerikaanse veiligheidsdienst, NSA, was niet zo happig om een dergelijk goed beveiligd algoritme commercieel te maken en zorgden er daarom voor dat de sleutellengte gehalveerd werd.
:::

Data met DES encrypteren (en bijgevolg ook decrypteren daar het een symmetrisch cipher is) bestaat uit 2 onderdelen:

1. Versleuteling: Een reeks feistel-structuren na elkaar (**16 rondes**) die de data block per block versleutelen.
2. Subkeys maken: Een key scheduling algoritme dat 16 subkeys genereert (1 voor iedere encryptieronde), gebaseerd op de 56 bit sleutel.

::: tip
Je kan de DES standaard [hier](https://web.archive.org/web/20040410171758/http://www.itl.nist.gov/fipspubs/fip46-2.htm) nalezen en ontdekken dat deze niet zo lang is zoals je zou verwachten van een wereldwijd geaddopteerde standaard.
:::

##### Versleuteling
Volgende schema toont de encryptie bestaande uit 16 rondes:

![](crypto/des1.png)

De data wordt blok per blok doorheen dit gedeelte gestuurd. Eerst gebeurt er een zogenaamde *Initiële permutatie* (*IP* in de figuur) waarbij iedere bit naar een andere plek wordt gestuurd volgens een vast patroon. Achteraan gebeurt dit nogmaals in een *Finale permutatie (*FP*).

![De Initiële permutatie (Bron wikipedia)](crypto/des2.png){ width=60% }

Na de *IP* gaat de data door 16 feistel structuren die telkens het zelfde doen. De data wordt in 2 helften gesplitst waarbij de rechterzijde door de F-operatie gaat (die we zo meteen toelichten), het resultaat hiervan wordt ge-xor'd met de linkerhelft van de data. Het resultaat van deze XOR, een 32 bit blok, wordt nu het rechterblok in de volgende ronde en omgekeerd.

![Binnenin de F-operatie (Bron wikipedia)](crypto/des3.png){ width=60% }

In het F-blok wordt eerst het 32-bit block uitgebreid (*E* in de figuur, van expansie) naar een 48 bit blok zodat deze even lang is als de subkey voor deze ronde. De expansie gebeurt, net als de initiële permutatie, volgens een vast patroon:

![De expansie van 32 naar 48 bits (Bron wikipedia)](crypto/des4.png){ width=60% }

Nu worden deze 48 bits ge-xor'd met de subkey. Het resultaat wordt in blokjes van 6 bits door een *S*-blok gestuurd (zogenaamde *Selection blocks*). In dit blokje wordt 6 bit omgezet naar 4 bit. In de figuur hieronder zien we bijvoorbeeld hoe de omzetting in blok *S5* gebeurt. Ieder blokje heeft een soortgelijke tabel, maar met andere resultaten.  De 6 bits bestaan uit de 2 outer bits, namelijk de eerste en de laatste bit, alsook de 4 innerbits. De figuur toont bijvoorbeeld dat de output `1001` zou zijn indien er `011011` in het blok wordt geplaatst. 

![Waarheidstabel van het S5-blok (Bron wikipedia)](crypto/des5.png){ width=60% }

Finaal krijgen we dus terug een 32 bit blok dat nog een laatste permutatie ondergaat die weer de bits van plaats verandert en de output hiervan is een geëncrypteerd blok data dat kan doorgestuurd worden naar de ontvanger.

##### Subkeys maken

Iedere ronde tijdens de versleuteling vereist een sleutel. Om te voorkomen dat steeds de hoofdsleutel wordt gebruikt (en er zo potentieel dezelfde keystreams worden gemaakt) wordt deze sleutel doorheen een *round-key generator* algoritme gestuurd. Dit algoritme bestaat uit 16 rondes waarbij de 56 bit sleutel (8 van de 64 bits in de originele sleutel zijn zogenaamde pariteits-bits, die dienen om te controleren of de sleutel geen fouten bevat) steeds in 2 helften van 28 bits wordt *geknipt*.

![De 16 rondes die telkens 1 subkey maken (Bron wikipedia)](crypto/des6.png){ width=60% }

Iedere ronde wordt iedere helft van de sleutel 2 bits *geshift* (in ronde 1,2, 9 en 16 maar 1 bit). Dat wil zeggen dat alle bits 2 plekjes opschuiven en de eerste (of laatste) bits komen dan achteraan (of vooraan) te staan. Deze 2 geshifte helften worden dan enerzijds doorgestuurd naar de volgende ronde, anders naar een *compressie P-box* waarvan het resultaat een 48 bits subkey zal zijn van die ronde.

De *compressie P-box* doet al vermoeden wat er gebeurt:
* Compressie: dus een aantal bits zullen wegvallen (er komt 56 bits in, maar we hebben maar 48 bits nodig)
* P-box: een permutatie oftewel transpositie dat alle bits van plek zal veranderen.

Er bestaan verschillende varianten hoe dit in z'n werk zal gaan, maar bij DES wordt volgende tabel gehanteerd:



|1  | 2 | 3|4|5|6|7|8|
| -  | - | -|-|-|-|-|-|
| 14  | 17 | 11|24|01|05|03|28|
| 15  | 06 | 21|10|23|19|12|04|
| 26  | 08 |16|07|27|20|13|02|
| 41  | 52 | 31|37|47|55|30|40|
| 51  | 45 |33|48|44|49|39|56|
| 34  | 53 |46|42|50|36|29|32|

Voor zij die graag puzzelen, welke getallen ontbreken? 

::: tip
De bits op locaties 9, 18, 22, 25, 35, 43 en 54 worden geblokkeerd. Daar de sleutel steeds geshift wordt wil dit zeggen dat steeds andere bits *achtergelaten* geworden.
:::

En zo hebben we het einde van de werking van DES bereikt. Dat viel al bij al nog mee, niet? Uiteraard hebben we nu vooral getoond *hoe* het werkt, maar niet *waarom* het werkt.

<!---#### DES problemen en 3DES

De ultieme encryptie-standaard maken is ijdele hoop. Naast het feit dat, dankzij *Moores law*, computers steeds krachtiger worden en dus ook de sleutellengte steeds moet vergroot worden, is er ook het feit dat hoe populairden een standaard is, hoe meer mensen op zoek gaan gaan naar mogelijk fouten in het systeem. Eén van de interessantere vaststellingen bij DES waren de zogenaamde **weak keys**. Dit zijn sleutels waarvan geweten is dat ze door malafide personen kunnen gebruikt worden om de originele plaintext of sleutel terug te vinden. In het geval van DES was dit zelfs niet zo moeilijk: er waren een aantal sleutels die, als je ze gebruikte, resulteerden in zogenaamde *self-inverting* keys. Het resultaat van je encryptie gaf een ciphertext...die gelijk was aan de plaintext! Over een knullige encryptie gesproken. --->

#### 3DES 

Al van bij de start gingen er stemmen op dat de originele sleutellengte voor DES (56 bits, 48 in effectiviteit vanwege de pariteitsbits) redelijk snel zou gebruteforced worden. Om die reden werd 3DES in het leven geroepen in 1995. De oplossing was een mooi staaltje compromis: het bood een verhoogde beveiliging doordat het een lange sleutel had (tot 168 bits lang) maar bleef tegelijkertijd compatibel met de bestaande DES hardware en software.

De werking van 3DES (*tripple DES*) verrassend eenvoudig: ieder blok data wordt 3 keer doorheen een DES-cipher gestuurd. Hierbij wordt steeds een andere sleutel gebruikt. Om de bestaande DES hardware te gebruiken wordt hierbij de data eerst door de encryptie gestuurd, dan doorheen de decryptie en terug door de encryptie. Daar we een andere sleutel gebruiken in iedere fase heeft dit (dankzij de eigenschappen van symmetrische ciphers) als effect dat we dus effectief 3 maal na elkaar encrypteren met steeds een andere sleutel. Aan de ontvanger zijde gebeurt dan het omgekeerde: decryptie, encryptie, decryptie én dit dus allemaal met de bestaande DES hardware!

![De 16 rondes die telkens 1 subkey maken (Bron wikipedia)](crypto/3des.png){ width=60% }

::: tip
3DES laat dus ook (single) DES encryptie toe. Het enige dat je hiervoor moet doen is de subsleutels K2 en K3 gelijkstellen waardoor de 2 en derde fase tijdens de encryptie (en decryptie) eigenlijk niets doet, daar het gewoon de data encrypteerd in ronde 2 en dan ogenblikkelijk in ronde 3 terug gecrypteerd.
:::

::: note
Het bankwezen gebruikt 3DES nog steeds (of varianten die erop gebaseerd) zijn om financiële transacties van onder andere Visa en Mastercard te beveiligen.
:::



#### Block cipher modes

Tot hiertoe gingen we steeds blok per blok in het encryptiecipher sturen en het resultaat ervan doorsturen. Klaar.  Oplettende mensen hebben hier mogelijk al een hiaat in gezien: wat als twee blokken exact dezelfde data bevatten? Beide zullen dezelfde ciphertext als resultaat genereren, daar we telkens dezelfde sleutel (en dus subkeys) gebruiken. Twee ciphertexts die identiek zijn willen we vermijden, daar het potentiële informatie over de plaintext zichtbaar maakt. Voorts laat dit soort werking ook replay attacks toe: de aanvaller kan een geëncrypteerd pakket bewaren en op een later moment terug opsturen, zonder dat hij moet weten wat de plaintext bevat.

::: tip
Door pakketten te sniffen zou de aanvaller kunnen achterhalen wat de mogelijk inhoud van een pakket is. Ieder netwerkprotocol volgt de standaarden die ervoor beschreven zijn en zo kan dus de aanvaller heel veel informatie ontdekken over een ciphertext gewoon ten opzichte van wanner een pakket wordt verstuurd tegenover de andere. Als het bijvoorbeeld het eerste pakket is dat verstuurd wordt, dan is de kans groot dat dit pakket de typische *"ik wi een verbinding opzetten"*-request is.
:::

Voorgaande modus, waarin we ieder blok onafhankelijk van het vorige encrypteren, noemen we de **Electronic Codebook (ECB)** modus. Alhoewel deze modus dus duidelijk een veiligheidsprobleem met zich mee draagt, heeft deze modus ook één voordeel:
* Ieder blok wordt onafhankelijk van andere blokken gedecrypteerd. Als er dus een blok door wat voor fout niet gedecrypteerd worden, dan heeft dat geen invloed op de daaropvolgende. Dit is dus voor streaming-situaties nuttig: beeld je in dat je decryptie faalt halverwege het binnenkrijgen van een film die je aan het bekijken bent. Je zou helemaal opnieuw moeten beginnen.

![Volgende voorbeeld toont een (overdreven) manier waarom ECB minder veilig is dan de modes die we nog gaan behandelen (Bron wikipedia)](crypto/ecbfail.png){ width=60% }

ECB is duidelijk een niet zo veilige manier om een block cipher toe te passen. Veel interessanter (veiliger) wordt het wanneer we extra informatie gebruiken om een blok te encrypteren. **Enkel het huidige blok en dezelfde sleutel gebruiken is namelijk niét veilig.** Er zijn verschillende modes om veiliger te encrypteren dan ECB:

* Cipher block chaining (CBC): de output van het vorige block (de ciphertext) wordt mee als input voor de encryptie van het volgende block gebruikt.
* Cipher feedback (CFB): ongeveer zelfde als CBC alleen wordt het vorige block iets later in de encryptie van het volgende block gebruikt.
* Output feedback (OFB): het block cipher wordt als een stream cipher gebruikt.
* Counter-mode (CTR): een extra teller wordt gebruikt als input bij de encryptie van een blok. Deze teller wordt steeds verhoogd. Eén van de meest gebruikte modes (in onder andere WPA2 en IPSEC).


![CBC encryptie (Bron wikipedia)](crypto/cbc.png){ width=80% }

Alle modes uit de doeken doen is hier niet aan de orde maar het moge duidelijk zijn dat ECB de minst veilige mode voorhande is en deze wordt dan ook best vermeden.

#### AES

Alhoewel 3DES een verbetering op DES was, was er toch nood aan een nieuwe encryptie-standaard die langere tijd kon bestaan. In 2001 werd daarom de **Advanced Encryption Standard (AES)** onder het doopvont gehouden als de nieuwe defactor encryptiestandaard wereldwijd. Deze Amerikaanse standaard is gebaseerd op het **Rijndeal** algorithme waar we als Belgen fier op mogen zijn: Rijndael is ontwikkeld door 2 Belgische KUL-cryptografen Vincent Rymen en Joan Daemen.

AES is een symmetrisch block cipher dat data in blocks van 128 bits zal opsplitsen en sleutel van tot 256 bits lang toelaat. De volledige werking van AES gaan we hier niet uit de doeken doen, het voldoet te begrijpen dat in grote lijnen hetzelfde soort stappen worden doorlopen als DES en andere symmetrische ciphers:

* Er is een *key expansie* stap om een unieke sleutel pér ronde te hebben.
* De data wordt doorheen meerdere rondes gestuurd.
* Iedere ronde gebeuren er zaken zoals substituties en transposities, zowel van bytes als van hele rijen of kolommen data.

![AES encryptie (Bron wikipedia)](crypto/aes.png){ width=80% }

## Asymmetrische encryptie

TODO

Voorbeelden: RSA, Diffie-Hellman, Knapsack, ElGamal, DSA, ECC, etc.
