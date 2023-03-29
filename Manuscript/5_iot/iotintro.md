# H6: IoT Security

## Introductie

We spraken in het eerste hoofdstuk al over de problemen die inherent zijn bij Internet-of-Things (IoT) apparaten en netwerken. Zo had je in 2016 het Mirai-botnet dat aantoonde hoe krachtig een botnet van IoT-apparaten kan zijn, puur door de grote hoeveelheid potentiële zombies.

Het is niet toevallig dat we dit boek afsluiten met het hoofdstuk omtrent IoT Security: alles (en meer) wat je in de voorgaande hoofdstukken hebt geleerd heb je namelijk nodig om IoT-netwerken te beveiligen. Er zijn zoveel manieren voor digitale stropers om misbruik te maken van een slecht beveiligd IoT apparaat of netwerk dat het complexe probleem van netwerken beveiligen nog ingewikkelder is geworden, namelijk:

* Van nature werken IoT apparaten op **low-power**, daar ze vele dagen of weken moeten voortkunnen zonder te veel verbruik. Ingebouwde security protocols mogen dus geen grote percentages van het vermogen opsouperen, zeker niet als dat ten koste is van de hoofdbestaansreden van het apparaat.
* Meestal, ook weer om een laag energieverbruik te behouden, hebben ze ook een **beperkte bandbreedte** ter beschikking (daarbij: beeld je de miserie op een wifi-netwerk in wanneer honderden kleine sensoren aan hoge bandbreedtes het netwek mee gebruiken).
* Zowel de fysieke dimensies, en bovenstaande twee eigenschappen, zorgen er ook voor dat IoT-apparaten meestal maar een **beperkt aantal zaken kunnen**. Het heeft niet altijd de netwerkverbindingsmogelijkheden die je nodig hebt (meestal heeft een apparaat een draadloze -Wifi, Zigbee,LoRaWAN,etc.- of bedrade aansluiting, maar zelden beide) en ook qua opslag en processormogelijkheden zijn de apparaten uiteraard vaak veel beperkter dan de kracht van computers en mobiele telefoons. Het grootste probleem echter hiervan is dat IoT-apparaten *by nature* vaak **niet evident zijn om te updaten**. Sommige apparaten kunnen bijvoorbeeld enkel geüpdatet worden door fysiek met het apparaat te zijn verbonden (en dan door de firmware te flashen bijvoorbeeld). Vanuit een fysieke beveiligingsconcept is dat goed, maar niet als je honderden apparaten een kritieke beveiligingslek hebben die dringend gepatcht moet worden.
* Vaak bevinden IoT-apparaten zich op de koop toe op **onbeschermde locaties** die maar moeilijk fysiek te beveiligen zijn. Hierdoor kunnen digitale stropers, zonder schrik om betrapt te worden, ongezien aan de apparaten knoeien (*tamperen*).

::: note
We gaan nogal vrij om met de term IoT-apparaat, waarbij we ook negeren dat er grote verschillen zijn tussen "Enterprise IoT" en "huis-tuin-en-keuken IoT". Die eerste heeft meestal bijvoorbeeld wel zeer doordachte updatestrategieën en dergelijke, terwijl de slimme koelkast in je huis dat vermoedelijk niet zal hebben
:::

## OWASP IoT Top 10

Het Open Web Application Security Project (**OWASP**) is een open source-project rond computerbeveiliging. Individuen, scholen en bedrijven delen via dit platform informatie en technieken. Ook de Belgische tak van OWASP is erg actief en een interessante organisatie indien je van plan bent om een carrière binnen de cybersecurity wereld op te bouwen. Ze organiseren geregeld (meestal gratis) workshops en evenementen.


Het OWASP heeft tal van erg interessante "Top 10" overzichten zoals de meest voorkomende webapp zwakheden, etc. Deze projecten bestaan meestal uit een reeks tools, *best practices* en gidsen en zijn dus de ideale manier om je te verdiepen binnen een specifiek cybersecurity domein. Eén van de actieve projecten is het "OWASP Internet of Things
" project (beschikbaar via [owasp.org/www-project-internet-of-things/](https://owasp.org/www-project-internet-of-things/)) waarvan we de Top 10 hier zullen bespreken, gerangschikt van meest voorkomend (en dus belangrijkste om aan te pakken) naar minder.

::: tip
Bekijk zeker ook eens het IoT Goat project via [github.com/OWASP/IoTGoat/](https://github.com/OWASP/IoTGoat/) dat is een *"insecure firmware based on OpenWrt and maintained by OWASP as a platform to educate software developers and security professionals with testing commonly found vulnerabilities in IoT devices. The vulnerability challenges are based on the OWASP IoT Top 10, as well as 'easter eggs' from project contributors."*
:::

::: warning
Om de wel erg algemene term "IoT" wat duidelijker te maken, zullen er hier en daar merknamen en producten worden vermeld. Dit is hoegenaamd geen verdoken reclame (of kritiek) voor deze producten, maar gewoon een poging om de lezer een duidelijkere context te geven.
:::

![Versie 2018, bron (owasp.org))](iot/top10.jpg)

### Paswoorden

Ook bij IoT begint veiligheid  bij het hebben van goede, complexe, moeilijk te raden wachtwoorden. Bij IoT-apparaten komt echter een stevige drempel, zeker voor huis-tuin-en-keuken gebruikers: het aanpassen van sommige IoT-apparaten is soms erg omslachtig. Niet alle apparaten hebben een webpagina waarlangs de gebruiker paswoorden kan aanpassen en moet dit via ofwel omslachtige, vreemde tools, oftewel (gruwel) door fysiek het apparaat te bedienen. Deze apparaten zijn natuurlijk niet gemaakt om complexe paswoorden eenvoudig in te voeren. Denk maar aan een digitale weegschaal: die heeft vaak een eenvoudig LED-scherm waarop je gewicht wordt getoond. Sommige weegschalen kan je vervolgens "bedienen" door links of rechts op de schaal te klikken, afhankelijk van wat je wilt doen. De auteur kan je garanderen: je paswoord zal niet lang zijn, als je een goed paswoord wilt invoeren zal je na enkele minuten in het zweet staan van de tapdans die je moet uitvoeren op je weegschaal. 

Omdat het aanpassen van die paswoorden vaak omslachtig is, zullen gebruikers meestal opteren om het *default paswoord* te gebruiken. Ze redeneren dat **toch niemand dit simpele IoT apparaat zal willen hacken**. "Wat kan een hacker nu doen met toegang tot mijn digitale thermometer." Wat echter vergeten wordt is dat cyberstropers altijd op zoek gaan naar de *weakest link*, om die vervolgens te misbruiken om tot het eigenlijk doel te geraken. Kortom, ieder IoT-apparaat in je omgeving is een potentiële toegangspoort tot de rest van je netwerk!

### Ongebruikte of onveilige netwerservices

Als je anno 2023 een printer koopt dan zal dit apparaat bijna altijd een IoT-apparaat zijn dat je toelaat om vanop afstand te printen. Echter, dergelijke apparaten hebben vaak tal van netwerkservices draaien waarvan de gewone huis-tuin-en-keuken gebruiker weinig of niets van afweet. 

::: tip
Vergelijk dit bijvoorbeeld met je Microsoft Windows besturingssysteem: heb je al eens gekeken welke services allemaal permanent op je systeem draaien (Start -> uitvoeren -> ``services.msc``) ?
:::

Dit soort diensten uitzetten behelst ook weer dat de gebruiker weet heeft van een webpagina met  administrator-instellingen. Soms zijn die diensten op de koop toe essentieel voor de goede werking van het apparaat en ze uitzetten is dan geen optie. Maar wat als die service op zich inherent onveilig is ?! Zo zijn er apparaten die enkel *telnet*-sessies gebruiken om het apparaat in te stellen. Een telnet-sessie geeft je een remote shell die echter **onversleuteld** met het apparaat communiceert (in tegenstelling tot bijvoorbeeld SSH, Secure Shell, dat wél veilige communicatie aanbiedt). 

Kortom, het is aangeraden om altijd te controleren welke services nu eigenlijk actief zijn op je apparaat.

::: note
In 2017 was er een grayhat hacker die vermoedelijk 150.000 printers vanop afstand in Nederland kon benaderen. Vervolgens printte hij "ludieke" berichten op de printers om de gebruikers er op te wijzen dat ze een onveilig apparaat gebruiken. In dit geval gebruikte hij poort 9100 van de printer die in veel merken wordt gebruikt om vanop afstand print-opdrachten door te sturen.

![Bron afbeelding en artikel: https://www.inktweb.nl/blog/hacker-neemt-150-000-printers-over/](iot/printer.jpg){ width=60% }
:::

### Onveilig ecosysteem

Een IoT-apparaat bestaat niet alleen: meestal maakt het deel uit van een verzameling apparaten en diensten die de gebruiker via online dashboards en apps kan bedienen. Denk maar aan de verschillende Google Nest producten (thermostaat, deurbel, maar ook de Hub, etc.) of lichten van Philips (*Hue*) die ook met behulp van andere toestellen kunnen bediend worden (bijvoorbeeld drukknoppen van Niko of Ikea). Kortom, IoT-apparaten maken meestal deel uit van een heus ecosysteem en dus de mate van veiligheid van die externe zaken bepaald ook die van het IoT-apparaat. Als bijvoorbeeld de dashboards van fitbit.com zouden gecompromitteerd worden bestaat de kans dat de digitale stropers ook toegang tot je gegevens of apparaten krijgen die gebruik maken van het fitbit-portaal.

Gebruikers vergeten ook met welke externe diensten ze hun apparaten hebben gekoppeld. Het gebeurt vaak dat een gebruiker "even iets wil testen" (denk maar de nuttige website ["If this then that" (ifttt.com)](https://ifttt.com/) dat toelaat om services en apparaten te koppelen die iets moeten doen gegeven zelfgekozen triggers en regels) maar nadien wel vergeet deze koppeling uit te zetten. Dit geldt ook voor de vele third-party websites en services die toegang tot uw google of facebook-accounts wensen. Gebruikers kijken dit zelden na en hebben mogelijk tien jaar geleden al toegang gegeven aan een service die ondertussen al door digitale stropers is gecompromitteerd. 

### Geen of onveilig updatemechanisme

Dit werd al in de introductie van dit hoofdstuk aangehaald. Het updaten van fysieke apparaten is niet evident, zeker niet als het gaat om kleine, low-power-apparaten die mogelijk op de koop toe op een moeilijk bereikbare plaats hangen en dus enkel praktisch geüpdatet kunnen worden als ze een remote update-mechanisme ondersteunen.

Daarnaast kan het ook gebeuren dat een update, om welke reden dan ook, mislukt waardoor het systeem potentieel *gebrickt* geraakt en de gebruiker of administrator dan alsnog een fysieke rollback moet doen (als het apparaat die mogelijkheid heeft). Er zijn ondertussen erg dikke boeken geschreven over de *wondere wereld van het updaten van IoT apparaten*. Weet dus dat het belangrijk is dat je als cyberboswachter van IoT-netwerken goed weet wat de update-strategieën van je IoT-apparaten zijn en wat je moet doen als er hier problemen optreden. Merk op dat die problemen zowel het gevolg van digitale stropers kunnen, maar ook door slechte updates van de fabrikant die op hun beurt mogelijk nieuwe beveiligingsproblemen in je apparaten introduceren. 

::: tip
Het is ook essentiëel dat je je als cyberboswachter abonneert op de juiste informatiekanalen (CVEs, fabrikant-RSS feeds, etc.)
:::


We zijn afhankelijk van de fabrikanten om beveiligingslekken te dichten in onze software en hardware. Uiteraard zijn er fabrikanten die maar *x* aantal jaren patches uitbrengen, en er zijn ook al tal van IoT-apparaten op de markt waarvan de fabrikant al jaren niet meer bestaat.

Of wat te denken als er een kritieke bug wordt gevonden in een chip die ontelbare apparaten gebruiken. Wie moet dan de patch voorzien: de fabrikant van het IoT-apparaat, of die van de chip?

::: tip

In september 2021 verscheen een nieuwe Bluetooth kwetsbaarheid, getiteld **BrakTooth** die mogelijk op miljoenen IoT-apparaten kan misbruikt worden. De bug zelf bevindt zich in de Bluetooth-chip van de apparaten. Aardig wat fabrikanten van dergelijke chips hebben al beloofd een patch uit te brengen, maar er zijn er ook die simpelweg zeggen "we zullen enkel patchen als er genoeg vraag naar is", nochtans kan de kwetsbaarheid eg veel schade aanbrengen (DoS-aanvallen en *arbitrary code execution (ACE)*)

![BrakTooth: de zoveelste Bluetooth kwetsbaarheid](iot/brak.jpg){ width=30% }
:::


### Oude of onveilige componenten

Het voorgaande voorbeeld i.v.m. BrakTooth kan ook in deze sectie gebruikt worden. Een IoT-apparaat is en blijft een combinatie van tientallen, soms honderden harware-onderdelen. De kans dat al deze onderdelen van de IoT-fabrikant zelf zijn is onbestaande. Gooi eender welke smartphone of digitale horloge open en je zal tal van onderdelen vinden van een andere fabrikant. De IoT-fabrikant moet er dus vanuit gaan dat deze componenten voldoen aan de veiligheidseisen die hij van z'n eigen product verwacht. Dat is geen evidentie. 

Een zelfde fenomeen zien we enkele lagen hoger in de OSI-stack: ook op software niveau gebeurt het zelden dat de IoT-ontwikkelaars alle bibliotheken en protocols  *van scratch* hebben ontwikkeld (en dus ook zelf kunnen instaan voor de robuustheid ervan inzake cyberveiligheid). Wanneer er een bug (of bewuste backdoor) wordt ontdekt in een protocol of bibliotheek, dan heeft dit gevolgen voor alles en iedereen die deze dingen in zijn of haar apparaten gebruikt (denk maar aan de Log4J en Heartbleed voorvallen die we in hoofdstuk 1 vernoemden). 

::: tip
In 2020 was er veel heisa omtrent de *SolarWinds-hack* bij SolarWinds. Duizenden grote bedrijven (en Amerikaanse overheidinstellingen) zoals Microsoft gebruiken het Orion Platform van dit bedrijf. Dit platform laat toe om enterprise netwerken te monitoren en managen, iets wat niet evident is op de schaal waarmee de klanten van SolarWinds werken. Deze tool moet natuurlijk waterdicht zijn, wat deze niet bleek te zijn: hackers sloegen er in om de FTP-server van SolarWinds te benaderen (het paswoord was *solarwinds123*...) en konden zo een backdoor in het Orion platform inbouwen. Vervolgens, wanneer de klanten van SolarWinds, hun Orion-installatie update'n, kregen ze onvrijwillig een versie met een bewust ingebouwde backdoor die de hackers vervolgens konden misbruiken.

Dit soort aanval heet een **supply chain attack**: de aanvallers richten zich op de *weakest link* binnen de supply chain om zo finaal tot bij de klant *achteraan* de keten te geraken. 


![Bron dynatrace.com](iot/supchain.png){ width=75% }

:::

### Onvoldoende privacy bescherming

Ook IoT-fabrikanten moeten natuurlijk op een veilige, GDPR-compliant, manier omgaan met de persoonlijke informatie van hun gebruikers. Helaas wordt dit geregeld over het hoofd gezien. Ook hier hebben we weer het probleem van de vele potentiële manieren waarmee een digitale stroper (of de fabrikant zelf!) een IoT-netwerk en apparaat kan misbruiken. De persoonlijke data staat mogelijk wel op een ultra-beveiligde database bij de fabrikant *on-premise*, maar wat baat dat als deze informatie ook als *plaintext* op het apparaat wordt bewaard. Wat ons ook automatisch bij het volgende punt brengt. 

### Onveilige datatransfer en opslag

Herinner je de McCumber kubus aan de start van dit handboek? Er werd toen benadrukt dat C.I.A. toepassen op je data geen nut heeft als je geen rekening houdt met alle vormen waarin de data zal voorkomen. Als je enkel encryptie gebruikt tijdens het versturen van data, maar niet tijdens het verwerken en bewaren ervan, dan kan je even goed ook de transmissie beter ongeëncrypteerd doen (zodat we geen *false sense of security* aan de gebruiker geven).

We vallen in herhaling, maar dus zeker bij IoT-systemen die binnen een groot ecosysteem werken, met tal van *thirdparty* modules en bibliotheken, is het uitermate belangrijk dat ten allen tijde de IoT-data in al z'n vormen, op alle momenten, aan *confidentialiteit, integriteit en beschikbaarheid* doet.

### Gebrek aan apparaat management

Spreken over IoT in een enterprise of industriële omgeving is spreken over IoT netweken met honderden tot duizenden apparaten die bediend moeten worden (denk maar aan remote upgrades, instellingen wijzigen, etc.). Er zijn vele factoren waarom een robuust *IoT device management* systeem vereist is:

* De hoeveelheid apparaten: te veel om manueel te bedienen.
* De locatie: mogelijk bevinden de apparaten zich op moeilijk te bereiken of gevaarlijke plekken.
* Alarmen benodigd: soms wil je op de hoogte gesteld worden wanneer een bepaalde IoT sensor iets meet of niet goed werkt.
* Nuttig gebruik van personeel: personeel enkel naar je IoT apparaten sturen als dat écht nodig is.
* Deel van *mission critical applicaties*: als je apparaten deel uitmaken van bedrijfskritische systemen is het uitermate belangrijk dat deze apparaten maximaal functioneren, daar iedere downtime of crash in winstverlies of boetes kan resulteren.

Een deftig apparaat management systeem moet natuurlijk zelf ook veilig en robuust zijn. Er zijn meerdere high-end oplossingen beschikbaar maar het spreekt voor zich dat dit soort systemen zelden goedkoop zijn.

### Onveilige standaard instellingen

Dit item komt nog steeds voor in alle "10 veiligheidsproblemen die het meeste voorkomen"-lijstjes. Wanneer een apparaat *uit de doos* wordt gehaald is deze ingeladen met een hele hoop standaard instellingen. Instellingen die digitale stropers kunnen opzoeken en misbruiken. Niet alleen het wachtwoord moet ogenblikkelijk aangepast worden, vaak staan ook bepaalde services open zonder dat de gebruiker deze ooit zal gebruiken. Kortom, het is een gezonde gewoonte om, zowel als professional als huis-tuin-en-keuken IoT-gebruiker, steeds alle instellingen van je vers geïnstalleerde apparaat te controleren.

::: note

Er gaat een *urban legend* de ronde dat je nooit je computer aan het internet mocht hangen wanneer je Windows XP aan het installeren was. Deed je dat wel dan bestond er de kans dat je computer *gepwnd* werd nog voor je goed en wel de hele installatie had doorlopen.

**Disclaimer:** dit is nooit bevestigd geweest. Lezers die een artikel vinden die deze legende kan staven mogen me altijd hierover contacteren.
:::

### Gebrek aan fysieke *hardening*

IoT apparaten liggen meestal verspreid over grote gebieden, ruimtes of gebouwen. De kans dat ze op publiek toegankelijk plekken operationeel zijn is groot, daardoor ook de kans dat digitale stropers toegang tot de apparaten krijgen. Het is daarom belangrijk dat de apparaat ook op fysiek niveau *gehardened* zijn zodat de apparaten niet als een open boek uitgelezen of aangepast kunnen worden. Het is natuurlijk niet evident om dit te voorkomen, net vanwege de aard van het beestje. IoT apparaten werken dagen, weken, maanden zonder dat er iemand naar om ziet. Computers en telefoons maken deel uit van onze dagelijkse aandacht en daar is het dus veel moeilijker voor aanvallers om ongezien, fysieke, toegang tot de krijgen.

Computers zijn tegenwoordig goed beschermd tegen aanvallers die een laptop stelen en trachten op in te breken: moderne beschermingen zoals Secure Boot (hoofdzakelijk om rootkits tegen te gaan) en *Trusted Platform Module* (TPM) voorkomen toegang door niet geautoriseerde gebruikers tot de data op het toestel. Dit soort systemen zitten zelden in kleine, goedkope, IoT apparaten waardoor inbreken op dit soort apparaten dus vaak eenvoudig is. Zeker als het apparaat op de koop toe een UART of andere onbeveiligde interface heeft die door de fabrikant worden gebruikt om problemen op te lossen. Ook aanvallers kunnen deze hardware interfaces natuurlijk gebruiken om bijvoorbeeld hun eigen firmware op het apparaat te plaatsen.

::: tip
Er is gelukkig een trend gaande waarbij de TPM-chip (of alternatief) steeds meer z'n weg vindt in nieuwe IoT apparaten. De initiële kost ervan vergaat meestal in het niets in vergelijking met de schade die kan opgelopen worden wanneer onbeveiligde toestellen (zonder TPM) worden gecompromitteerd. 
:::

De Mccumber kubus in gedachte nemende spreekt het natuurlijk voor zich dat ook de data geëncrypteerd op het IoT apparaat moet bewaard worden.

# Besluit

En zo hebben we het einde van het prille begin der cyberboswachters bereikt. Zoals je vermoedelijk ook zelf al aanvoelt, hebben we enkel maar het tipje van de ijsberg besproken. Als we er echter gezamenlijk in slagen om dit tipje alvast en zelf toe te passen én aan anderen aan te leren, dan maken we het de digitale stropers al een pak moeilijker. Beschouw dit een beetje als een toepassing van de wet van *diminishing returns.* De primaire, eenvoudige veiligheidstechnieken en gewoonten (goede paswoorden, geen default instellingen, kiss, etc.) gaan de grootste impact hebben op je algemene veiligheid. Alle daaropvolgende stappen, hoe belangrijk en nuttig ook, zullen steeds een kleiner stuk van de potentiële problemen voorkomen. 

*Wees veiligheid en verspreid het woord! ;)*
*Tim Dams*
*2023*

![](gotopolice.png)