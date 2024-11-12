# Wordt het erger?

Het laatste decennium jaar is de (cyber)security wereld erg veranderd. Ze doet dit niet omdat ze daar zin in heeft, maar wel als antwoord op wat er gebeurt in de wereld omtrent cyberaanvallen, geopolitieke situaties, etc. 

Het is altijd een kat en muisspel, waarbij de boswachters helaas bijna altijd zullen achterlopen op de stropers. De kwaadwillige hackers hoeven maar één klein gaatje te vinden in je peperdure beveiliging en ze zijn binnen. Terwijl jij als boswachter wel aan alles moet (proberen te) denken. Dat het erger wordt, is eigenlijk daarom bijna automatisch een evidentie. De wereld van de beveiliging gebeurt per opbod en hoe beter de boswachters het bos kunnen verdedigen, hoe complexer de technieken zullen worden die de stropers hanteren.

In de volgende secties geven we een klein historisch overzicht van enkele belangrijke, interessante of spectaculaire gebeurtenissen die hebben plaatsgevonden in de cyberwereld de voorbije jaren. Dit laat ons toe om enerzijds enkele begrippen te duiden, anders om de vraag "wordt het erger?" te beantwoorden.

::: note
We gebruiken de term cyber om alles aan te duiden dat zich afspeelt op de digitale snelweg, namelijk het Internet, de *cloud*, het www, en alle synoniemen en aanverwanten.
:::

## Het voorbije decennium

We zullen geregeld terug in de tijd gaan om te bekijken hoe bepaalde cyberverdedigings- en aanvalstechnieken zijn ontstaan, maar in dit hoofdstuk gaan we enkel terug tot 2010. Het jaar waarin Mark Zuckerberg, CEO van Facebook, door Time Magazine tot persoon van het jaar werd uitgeroepen en ook waarin Apple de eerste IPad tablet aan het publiek toonde. Het was helaas ook het jaar waarin het boorplatform, Deepwater Horizon, voor één van de ergste milieurampen ooit zorgde, alsook het jaar dat 33 mijnwerkers anderhalve maand lang 700 meter diep opgesloten zaten in een mijn. Voor ons, als toekomstige cyberboswachters, is echter de meest cruciale gebeurtenis het ontdekken van **Stuxnet**.

### Voor 2010

!["Het aardse paradijs met de zondeval van Adam en Eva" door Peter Paul Rubens en Jan Brueghel (de Oude). Duidelijk gebaseerd op een wereld van voor 2010.](intro/eden.jpg)

Voor het ontdekken van Stuxnet in 2010 leek de cyberbeveiligingswereld wel een wereld van (relatieve) peis en vree. Het ergste dat kon gebeuren was dat je computer een virusje opdeed waardoor je mogelijk wat data, en vooral veel werkuren, kwijt raakte. Virussen, wormen en spam waren alomtegenwoordig maar waren eigenlijk niet meer dan luizen in de pels van de eindgebruikers. Tuurlijk, er werd een grondig gevloekt als een virus je foto's verwijderde of wanneer een worm zichzelf verspreidde naar je contacten - denk maar aan het *ILOVEYOU* virus dat als een soort *social engineer* mensen deed geloven dat ze een potentiële liefdesmatch hadden waarop ze vol spanning de bijlage openden en zo de worm *in huis haalden*. Of wat te denken van de *Conficker* worm die in 2008 meer dan 3 miljoen systemen kon besmetten en telkens de update-services van het Windows toestel uitschakelde. Uiteraard, dat was irritant, maar menig mens zou maar al te graag terug naar die tijd willen gaan als daarmee ransomware, botnets en door overheden gesponsorde cyberaanvallen onbestaande zouden zijn.


:::note
De termen worm, virus en malware zullen geregeld door elkaar worden gebruikt in deze cursus. Alle drie betekenen net niet hetzelfde, maar  toch:

* Een **virus** is een kwaadaardig programma dat, eens het op een computer of apparaat staat, digitale schade kan aanbrengen.
* Een **worm** daarentegen is ook een virus, maar eentje dat zichzelf kan *voortplanten* naar andere systemen, iets wat een virus niet kan. Een worm kan zichzelf dus verspreiden zonder menselijke hulp.
* **Malware** is een overkoepelende term voor alle programma's en code die digitale schade aan een systeem of netwerk brengen. Virussen en wormen behoren dus tot deze groep.

Naast deze drie termen zullen we ook nog enkele andere malware types tegenkomen zoals Adware, spyware, spam, trojans, backdoors en rootkit. Wanneer nodig zullen we deze termen toelichten. Onthoud nu alvast dat malware de algemene naam is voor alle malafide software.
:::

### 2010: En dan verscheen Stuxnet

Virussen konden computers (tijdelijk) onbruikbaar maken. OK, lastig, maar niet het einde van de wereld. De Stuxnet worm die in 2010 plots op de radar verscheen kon dat potentieel wel: de wereld beëindigen! Het was een worm die op maat was gemaakt om zogenaamde **PLCs** (*Programmable Logic Controllers*) te controleren. Héél veel van onze kritische infrastructuur is geautomatiseerd met behulp van deze PLCs , krachtige apparaten die machines kunnen aansturen zoals liften, robotarmen aan assemblagelijnen, zuiveringsinstallaties en zelfs kernreactors. PLCs vormen de interface tussen machines (hardware) en de computers (met software op) die de operatoren gebruiken om deze machines opdrachten te geven. Operators kunnen op hun systemen de machines bedienen en te allen tijde controleren of deze naar behoren werken. 

Wat Stuxnet deed was zich tussen de hardware en de software nestelen. Als een worm besmette het laptops en computers en zocht het of er PLC-bedieningssoftware aanwezig was op het toestel. Als dat het geval was dan plaatste het zichzelf er tussen in zodat het:

1. de machines opdrachten kon geven zonder dat de operator dit wist.
2. aan de operator kon vertellen dat alles in orde was, terwijl in realiteit de PLC mogelijk desastreuze opdrachten aan de hardware gaf.

![Werking stuxnet.](intro/stuxnet.png)

We moeten er geen tekeningetje bij maken wat de effecten kunnen zijn indien een Stuxnet variant bewust werd ingezet om bijvoorbeeld de machinerie in een kerncentrale of waterdam te saboteren. Zonder in details van Stuxnet in te gaan is het duidelijk dat het verschijnen van dit virus een ommekeer betekende qua potentiële gevolgen van een cyberaanval: mensenlevens stonden plots op het spel, niet enkel onze dierbare e-mails en digitale vakantiefoto's.

::: note
Stuxnet bleek een worm te zijn die probeerde een specifiek soort centrifuge te saboteren: namelijk de centrifuges die Iran gebruikte om uranium te verrijken. De inlichtingendiensten van de Verenigde Staten en Israël zouden klaarblijkelijk Stuxnet hebben ontworpen om zo dit verrijkkingsproces van uranium in Iran te dwarsbomen. 
:::

::: tip
Wens je meer te weten over Stuxnet? Dan raden we je de uitstekende, in 2016 verschenen, documentaire "Zero Days" door Alex Gibney aan. Deze documentaire geeft een zeer ontluisterend én boeiend beeld over de zoektocht naar de oorsprong van het Stuxnet virus.
:::

### 2013: Onze privacy te grabbel gegooid

Surfen op het Internet was altijd een risico. We wisten in 2013 al lang dat onze datapakketjes over tientallen apparaten doorheen het Internet worden getransporteerd om zo tot bij hun doel te geraken. Cookies volgden al geregeld onze stappen en ook de aanbevelingen van Amazon waren soms akelig accuraat. Dat was de prijs die we moesten betalen om de ontelbare bronnen van het Internet te kunnen gebruiken. En als je echt wat meer privacy nodig had, dan schakelde je de "incognito" modus in van je browser. Maar ook dan was je je ervan bewust dat zelfs je ISP (*Internet service provider*) en je doel konden meekijken. Hoe erg kan dat zijn?

Die gedachte leefde bij veel mensen tot dan: het Internet was een nuttige tool en je wist dat er kon meegekeken worden door *derden* als ze dat echt wilden. Maar zou dit nu echt consequent en op grote schaal gebeuren? Neen toch?!

Dat glazen huisje werd in 2013 hardhandig aan diggelen geslagen door twee belangrijke personen:

* **Edward Snowden**: als (contractueel ingehuurde) systeembeheerder bij de NSA, de Amerikaanse inlichtingendienst gericht op elektronische spionage, had hij toegang tot het doen en laten van de dienst. Snowden lekte een grote hoeveelheid top-secret documenten naar de bevolking die onder andere het *PRISM*-programma uit de doeken deed. Hieruit bleek dat de NSA een complexe samenwerking had met enkele grote Amerikaanse Internetbedrijven (o.a. Microsoft, Google, Facebook, Apple, etc.) die zogenaamde *taps* op hun systemen hebben staan zodat de NSA "kan meeluisteren" op de netwerken.
* **Julian Assange**: er zijn altijd klokkenluiders (*whistleblowers*) geweest die om persoonlijke overtuigingen vonden dat bepaalde informatie met het publiek moesten worden gedeeld. Zeker in dictatoriale middens kan dit levensgevaarlijk zijn. Aan het eind van de 20e eeuw kregen deze klokkenluiders echter een krachtig apparaat om hun nieuws veilig te verspreiden: het Internet.  Julian Assange besefte dit en richtte daarom in 2006 Wikileaks op. Een site waar klokkenluiders op een anonieme manier documenten konden *lekken*. Tot 2010 zijn zo enkele erg controversiële documenten met de wereld gedeeld die soms verregaande diplomatieke of geopolitieke gevolgen hadden. Het lot van Assange is nog steeds onduidelijk: momenteel wordt hij in het Verenigd Koninkrijk in hechtenis gehouden en voert hij hevig strijd (via de rechtbank) om niet uitgeleverd te worden aan de Verenigde Staten.

::: caution
Het is niet evident om over mensen als Assange en Snowden te praten zonder in een controversiële modderpoel te geraken. Voor de één is Snowden een held, voor de ander een verrader. In dit boek trachten we een objectief beeld, zonder waardeoordelen, te geven. Wat wel buiten kijf staat is dat zowel Snowden als Assange de wereld getoond hebben dat er in de duistere wandelgangen van de veiligheidsdiensten zaken gebeuren waar "normale stervelingen" zelden weet van hebben.
:::

Het waren vooral de onthullingen van Snowden die bij velen de oogkleppen deed afvallen. Op het Internet ben je hoegenaamd niét anoniem. Grote (en kleine) mogendheden en privéfirma's kunnen ons doen en laten op het Internet bekijken, bewaren en analyseren. Privacy en het Internet zijn een *oxymoron*: een contradictorische term zoals zwarte sneeuw. Wanneer je je op het Internet begeeft, op welke manier ook, gooi je een deel van je privacy te grabbel. En dat is iets dat helaas de voorbije tien jaar er niet op verbeterd is (alhoewel het **Tor** netwerk met z'n *onion routing* toch wel een stevige extra privacy laag kan aanbieden).

::: tip
Een interessant debat dat altijd opduikt bij deze problematiek is de "Ik heb toch niets te verbergen"-houding. In het kleine maar fijne boekje "Je hebt wél iets te verbergen" van onderzoeksjournalisten Maurits Martijn en Dimitri Tokmetzis (ISBN 9789082821611) wordt onherroepelijk brandhout gemaakt met deze stelling. Finaal zijn we volledig afhankelijk van de online diensten die we gebruiken en wat ze met onze data nu én belangrijker, in de toekomst zullen doen. Privé-informatie over jou die nu ogenschijnlijk ongevaarlijk lijkt, kan dat potentieel in de toekomst wel zijn wanneer normen, waarden of wetten veranderen. 
:::

### 2014: Hoe veilig is *the cloud* ?

In 2014 vond er een controverse plaats die vooral de puberende tiener zich zal herinneren: *"The fappening"*. Deze naam laat weinig aan de verbeelding over en dekt de lading goed. In het jaar dat Oekraïne Russische legers zag binnenrollen om de Krim (terug) in te palmen, verschenen er duizenden privéfoto's van een honderdtal *celebrities* op het Internet. Deze,vaak weinig verhullende, privéfoto's hadden kwaadwillige hackers van de Apple iCloud accounts van de slachtoffers gestolen en vervolgens gepubliceerd via Reddit, 4chan, etc. De foto's verspreidden zich als een lopend vuurtje en de slachtoffers konden enkel toezien hoe hun in de privésfeer opgenomen beelden door miljoenen mensen werden gedownload. 

De beroemdheden hadden hun foto's in de cloud-opslag van Apple bewaard zoals op dat moment duizenden gebruikers ook al deden. Deze dienst zorgt ervoor dat je je als eindgebruiker van eender waar aan je foto's kan, daar ze "in the cloud" staan, wat door de spectaculaire groei van de smartphones (en iPhones in dit geval) een populair concept was geworden. Ook diensten zoals Dropbox, Onedrive (toen nog SkyDrive) toonden aan dat er een grote vraag was naar online opslag van (privé-)informatie. 

Om dergelijke diensten te gebruiken dien je natuurlijk een veilig paswoord te hebben, daar eender wie, van eender waar, kan proberen zich een weg naar je data te verkrijgen door jouw paswoord te raden. In 2014 waren concepten zoals 2-factor-authentication (2FA) en biometrische beveiliging (meer daarover in hoofdstuk 5) nog niet zo populair en dus was je geheime paswoord je enige bescherming tegen onrechtmatige toegang tot je data.

De diefstal van de foto's werd echter vergemakkelijkt door twee redenen:

* Sommige slachtoffers gebruikten makkelijk te raden, of snel te bruteforcen paswoorden.
* Anderen hadden de beveiligingsvragen ter goeder trouw ingediend. Veel diensten stellen een extra beveiligingsvraag (zoals "Wat is de naam van je eerste huisdier?" of "Op welke school zat je vader?") die ze kunnen gebruiken om jouw identiteit te verifiëren indien je je eigen paswoord vergeten bent en je dit wenst te resetten. Wanneer jij of ik dit soort vragen invullen dan is dit 90% van de tijd informatie die nergens te vinden valt, enkel in de grijze massa in je hoofd en misschien in een gênant dagboekje uit je jeugd. Bij de Amerikaanse beroemdheden wiens iCloud werd gehackt, is dat niet zo. Hun leven kan volledig gereconstrueerd worden aan de hand van de ontelbare interviews die ze al hebben gegeven. Gegarandeerd dat ooit een interviewer al heeft gevraagd wat de kleur van zijn of haar eerste auto was, of in welk dorp hij of zij is opgegroeid. 

::: warning 
Het is een verkeerde reflex om in dit soort zaken ogenblikkelijk aan *victim shaming* te doen (kijk maar naar het recentere voorval waarbij enkele Bekende Vlamingen het slachtoffer waren van catfishing). Ieder doet en laat wat hij wenst in z'n privésfeer - daarom heet het ook privé - maar het is belangrijk te beseffen dat als je zaken *in the cloud* bewaard, de kans bestaande is dat iets of iemand er ooit onrechtmatige toegang tot zal krijgen. U weze gewaarschuwd.
:::

::: tip
Niemand verplicht je om op de beveiligingsvragen een eerlijk antwoord te geven. Er bestaat geen leugendetector in die systemen of een mama die op je vingers komt tikken. Lieg er dus op los, maar onthoud uiteraard je antwoord. Dankzij die beveiligingsvragen hou je echter een stok achter de hand moest je je paswoord vergeten zijn. 
:::

### Ook in 2014: als landen vechten

Het was te verwachten dat ook op cyberniveau er ooit een cyber-wapenwedloop zou starten zoals, helaas, ook in de echte wereld plaatsvindt. Daar waar landen voorheen nog vooral defensieve cybermogelijkheden hadden, begon halverwege het vorige decennium dit arsenaal meer en meer uitgebreid te worden met offensieve cyberwapens. Het was met andere woorden wachten op de eerste cyberaanvallen door een soevereine staat op een andere staat. 

Het probleem met cyberaanvallen is dat het als aangevallen mogendheid ongelooflijk moeilijk is om juist te reageren:

1. De bron van de aanval identificeren is soms onmogelijk. Wie weet lijkt de aanval te komen vanuit land X, terwijl het eigenlijk land Y is dat gewoon de aanval via land X routeert. En het laatste dat je natuurlijk wil doen is het verkeerde land beschuldigen (of aanvallen).
2. Wat als een hacker, zonder staatsinmengingen, beslist om op eigen houtje een cyberaanval te initiëren. Is het land van herkomst van die aanvaller dan verantwoordelijk voor de geleden schade?
3. De "schade" van een cyberaanval is niet altijd duidelijk. Wanneer een raket op een stad wordt afgestuurd is dat een duidelijk *act of aggression* en is er grote kans op een militair conflict (indien de diplomatieke weg geen soelaas brengt). Maar is een cyberaanval, zoals een denial-of-service (DoS, zie later), genoeg reden om de oorlog buiten het cyberdomein te escaleren? Zijn er eigenlijk *rules of engagement*? Is er een conventie van Genève? Neen op dit alles. Daar cyberaanvallen zo moeilijk te traceren en identificeren zijn, blijft het allemaal het betere nattevingerwerk.

Een bewuste cyberaanval op een soevereine staat is al een enkele keren gebeurd (denk maar aan de cyberaanvallen in 2007 van Rusland op Estland) maar in 2014 was er helaas een nieuwe primeur (Stuxnet krijgt eigenlijk die primeur, maar dat werd pas veel later bevestigd). Ook nu gaan we naar Hollywood, niet om de beroemdheden en hun privé-kiekjes, maar omwille van een film waar een andere staat niet om kon lachen.

In 2014 zou Sony een nieuwe film uitbrengen, getiteld "The Interview", met James Franco en Seth Rogan. In deze komedie worden twee journalisten gevraagd om tijdens hun interview van een *fictieve* Noord-Koreaanse dictator hem te doden. De vergelijkingen met de Noord-Koreaanse leider Kim Jong-un waren voor iedereen duidelijk. Dat Noord-Korea op de tenen zou zijn getrapt, stond dan ook in de sterren geschreven.

De daaropvolgende gebeurtenissen zijn nog steeds niet uitgeklaard, maar vast staat wel dat een selecte groep hackers toegang had gekregen tot confidentiële data op de servers van Sony en deze vervolgens op het Internet lekte. De financiële schade voor Sony was enorm. De daders wisten onuitgebrachte films, e-mails, salarissen en andere privé-informatie te stelen. Heel lang werd gedacht dat de groeperingen die achter de aanval stonden door Noord-Korea waren aangestuurd. Echter, tot op de dag van vandaag heeft men dat niet kunnen bevestigen. Zo zijn er ook experts die denken in het bewijsmateriaal de hand van Rusland en/of China te zien. Kortom, zoals eerder gezegd, cyberaanvallen zijn verdomd lastig om in kaart te brengen.

Als het toch Noord-Korea zou zijn geweest - wat nog steeds meer dan mogelijk is - dan hebben ze hiermee dus een dubieuze primeur: een soeverein land voert een cyberaanval uit op een bedrijf in een ander land. En de vraag die vervolgens veel experten zich stelden was: "Vanaf wanneer is dit een *act of aggression*?", en ook: "Moet een land op dit soort aanval reageren namens het bedrijf, of namens de hele natie waar het bedrijf zich bevindt?" Wie zal het zeggen. Dit boekje helaas niet, maar het geeft wel voer voor discussie.

### 2015: Stuxnet bewaarheid

Keer op keer zullen we dit moeten herhalen: we kunnen nooit met 100% zekerheid de origine van een cyberaanval vaststellen. Heel af en toe, met dank aan klokkenluiders zoals Snowden, of verregaand (al dan niet journalistiek) onderzoek worden specifiek aanvallen volledig uit de doeken gedaan (maar helaas vaak jaren na datum).

In 2015, iets meer dan een jaar na de Sony aanval, werd dat waar we voor vreesden bewaarheid: hackers waren er in geslaagd om de elektriciteitsinfrastructuur van Oekraïne deels plat te leggen op 23 december, vlak voor kerstavond. Een groepering slaagde er zo in om bijna een kwart miljoen mensen gedurende meerdere uren zonder stroom te zetten. Iedereen keek uiteraard ogenblikkelijk in de richting van Rusland - Oekraïne maakte vroeger deel uit van de voormalige Sovjetrepubliek - daar de aanvallen kwamen van IP-adressen die waren toegewezen aan Rusland. Maar zelfs als dat zou zijn, zonder harde bewijzen dat de hackers ook handelden in naam van de Russische overheid blijft het koffiedik kijken wie *op de vingers getikt* moet worden voor de aanval.

Wie het ook waren, één ding staat wel vast: in 2015 waren hackers er voor het eerst in geslaagd om met één welgemikte aanval honderdduizenden mensen in problemen te brengen, problemen die verder gingen dan het verwijderen van enkele bestanden.

Enkele jaren later, in februari 2021, zou het trouwens weer bijna prijs zijn. Een hacker kreeg toegang tot de systemen die de waterzuiveringsinstallaties van Oldsmar (Florida, VS) bediende. Een operator zag op tijd dat z'n muis plots bewoog en de maximum toegelaten hoeveelheid natriumhydroxide waarde van de filters op een dodelijk niveau zette. Er werd gelukkig tijdig ingegrepen (en detectoren verderop in het systeem hadden het vergiftigde water sowieso gedetecteerd), maar het deed wederom de vraag rijzen of onze kritische systemen wel voldoende beveiligd zijn tegen dit soort *lone wolves*.

### 2015: Scheidingen en zelfmoord

In 2015 wordt de schaal van cyberaanvallen steeds groter. De hoeveelheden informatie die hackers van bedrijven kunnen bemachtigen kunnen al lang niet meer op één A4'tje afgedrukt worden. Wanneer hackers toegang krijgen tot de privé-servers van hun doelwit kunnen ze vlotjes ettelijke gigabytes, tot zelfs terabytes, aan privé informatie stelen. Tegenwoordig hebben we in Europa de GDPR wetgeving die probeert bedrijven duidelijk te maken dat zij verantwoordelijk zijn om onze data op een veilige manier te bewaren (zie appendix) en hen ook te straffen indien ze dit niet doen. In 2015 was dat veel minder. De datalekken in die tijd spraken boekdelen: van zodra cybercriminelen toegang hadden tot de privéservers konden ze de data zonder problemen lezen. Paswoorden, kredietkaartgegeven, rijksregisternummers, alles stond vaak onbeveiligd (*ongeëncrypteerd*) op de systemen.

De Ashley Madison website was Tinder voor mensen die een relatie wilden naast hun "officiële relatie". Kortom, de site hielp mensen aan een affaire. Hun leuze, *"Life is short. Have an affair"*, wond er geen doekjes rond. En met hun meer dan 20 miljoen "klanten" was het duidelijk dat ze een lucratief idee hadden. Dat ze tegenwind zouden krijgen was te verwachten...

In juli 2015 plaatste een groep hackers een ultimatum op een website aan het adres van de eigenaars van Ashley Madison: *"Haal jullie moreel dubieuze website van het Internet, of wij plaatsen meer dan 60 gigabyte aan gestolen data online"*. De site werd niet offline gehaald en de hackers "hielden woord." De gevolgen waren immens, niet zo zeer voor Ashley Madison zelf, wel voor de klanten. Plotsklaps kreeg de wereld een lijst te zien waarin honderdduizenden klanten open en bloot aan de schandpaal werden genageld. Mensen werden publiekelijk vernederd. Er is sprake van minstens twee zelfmoorden rechtstreeks als gevolg van het lek. Mensen werden ontslagen. Kortom, het lekken van wat uiteindelijk maar een hoop binaire data was, had gevolgen op relaties, mensenlevens en carrières. 

Als positieve noot in dit verhaal halen we hier uit dat dit soort gigantische lekken mensen heeft doen inzien dat ze tweemaal moeten nadenken voor ze hun persoonlijke informatie weggeven aan één of andere Internet-gigant (het is helaas een les die we jaarlijks lijken te vergeten, kijk maar naar de populariteit van Tik Tok, Facebook, etc.). 

::: caution
Een stelregel die bedrijven nu hanteren is de volgende: vraag je niet af **of** je gaat gehackt worden maar vraag je af **wanneer** je zal gehackt worden. Dit is een heel andere manier van tegen je beveiligingsprobleem aankijken. Vergelijk het met het in huis halen van een koffer met daarin 10 miljoen euro aan diamanten. Als je je afvraagt of er ooit inbrekers zullen binnen geraken en daar naar beveiligt - waakhonden, videocamera's rond het huis, dubbel slot - dan heb je daar niets aan als ze vervolgens toch binnen geraken en je koffertje stelen. Veel beter kan je én je huis beveiligen, én ervan uitgaan dat ze de koffer gaan bemachtigen: en je dus maar beter ook ervoor zorgt dat de dieven niets met de diamanten kunnen doen (door bijvoorbeeld je naam er in te graveren).

Kortom: bedrijven moéten data die ze van ons opslaan minstens encrypteren en systemen inbouwen die de data onbruikbaar maken als ze toch gelekt zou worden.
:::

### 2016: Internet-of-horrors

In onze huizen verschenen steeds meer apparaatjes die via het, meestal draadloze,  netwerk met elkaar en het Internet konden communiceren. Internet-of-Things (IoT) bracht een weelde aan nieuwe oplossingen in onze levens. Domotica, wearables, slimme thermostaten, beveiligingssystemen, weegschalen, alles werd én slimmer gemaakt én aan het Internet gehangen.

Een inherent probleem met veel van deze, meestal kleine, toestellen is dat ze op het gebied van beveiliging ondermaats presteren. Dergelijke IoT-apparaten werken vaak op batterijen en de makers willen natuurlijk de batterijduur zo lang mogelijk houden. Iedere extra feature die de designers in het apparaat willen steken heeft een kost op die levensduur. Een aspect zoals beveiliging werd dan ook vaak achteraan de lijst van potentiële features geplaatst. Komt daarbij dat IoT-apparaten updaten (met bijvoorbeeld nieuwe security patches) soms onmogelijk of tenminste omslachtig is. Als er dus een beveiligingslek wordt gevonden in een apparaat, dan is de kans bestaande dat dit lek voor altijd aanwezig zal blijven én dus ook kan misbruikt worden. 

Het was dus wachten tot de eerste aanvallen, specifiek gericht op IoT-apparaten, zouden plaatsvinden. De meest opvallende aanval gebeurde eind 2016. Malware, genaamd Mirai, verspreide zich als een lopend vuurtje over IoT-apparaten waarvan de malware het standaard paswoord en username kende. Gebruikers die vergeten waren het paswoord aan te passen, dat het apparaat heeft wanneer je het uit de doos, haalde zaten zo plotseling met een ogenschijnlijk perfect werkend, maar besmet apparaat. Echter, de malware nestelde zich onzichtbaar op het apparaat en wachtte op commando's van de Mirai makers. De malware creëerde met andere woorden een zogenaamde *botnet*, een groot netwerk van besmette apparaten die allemaal commando's kunnen uitvoeren van de *botnet herder* (i.e. degene die de malware in de eerste plaats is beginnen verspreiden). De Mirai-makers hadden zo een leger minicomputers onder hun bevel die ze konden zeggen "surf nu allemaal naar die website". Een website die plots tienduizenden gebruikers onverwacht extra te verwerken krijgt zal vaak onder de druk bezwijken en crashen. Kortom, dit Mirai botnet kon zo grote distributed denial-of-service (*DDOS*) aanvullen uitvoeren, allemaal omdat gebruikers de paswoorden van hun gloednieuwe apparaatjes niet hadden aangepast. In hun verdediging, het is vaak een erg omslachtig, technisch, proces om het paswoord van een IoT-apparaat aan te passen.

::: tip
De wildgroei van Internet-of-Things apparaten heeft ervoor gezorgd dat hackers een grote hoeveelheid extra mogelijkheden hebben bijgekregen om op huis en bedrijfsnetwerken te infiltreren. Of om het in hacker-termen te zeggen: dankzij de weelde aan IoT-apparaten is de *attack surface* voor aanvallers exponentieel vergroot.
:::

:::warning
Een dubieuze (deels betalende) site, **shodan.io**,  heeft als enige doel alle Internet-of-Things apparaten in kaart te brengen die zichtbaar zijn vanop het Internet. Deze "Google voor IoT" toont zelfs om wat voor apparaten het gaat en welke bijvoorbeeld nog steeds het standaard (default) paswoord hebben.
:::

### 2017: Ransomware wordt gemeengoed

De virussen in de vorige eeuw durfden al eens je data te verwijderen. Lastig, maar erg duidelijk: je data was je kwijt, tenzij je ergens een back-up had liggen. De nieuwe virussen gingen echter een stapje verder: ze versleutelden al je data (vaak ook je back-ups als je zo dom was geweest deze op het zelfde apparaat te hebben) én vroegen vervolgens losgeld in ruil voor je data. De naam *ransomware* kon, helaas, niet beter gekozen zijn. Menig particulier betaalde ogenblikkelijk om de eenvoudige reden dat de ransomware de gebruiker nog een uitweg aanbood daar ransomware vaak werd "binnengehaald" door een gênante actie (bv illegale software downloaden, op reclame voor vage pornosites klikken, etc.). 

Voor particulieren was ransomware vooralsnog irritant. Maar wat als de ransomware bedrijfskritische data begon te encrypteren? Dit is exact wat er gebeurde in 2017 met de WannaCry en Petya ransomwares. Deze malwares sloegen er in om banken, hospitalen, havenbedrijven en menig ander groot (en klein) bedrijf te besmetten. De economische schade werd geschat op bijna 4 miljard dollar vanwege het lamleggen van de productie (of in het geval van enkele ziekenhuizen: het redden van mensenlevens).

De schade én de losgeldbedragen werden ook steeds groter. Zo was er het voorval met Garmin in de zomer van 2020 dat niet alleen de populaire sport-tracking diensten gedurende meerdere dagen uit de lucht haalde, maar er ook voor zorgde dat menig vliegtuig niet mocht vliegen omdat de Garmin Pilot apps niet werkten waardoor de piloten geen up-to-date aeronautische plannen voorhanden hadden. Het is nooit geweten of Garmin het losgeld (10 miljoen dollar!) wel of niet heeft betaald, vast staat wel dat ransomware tegenwoordig een, helaas, erg lucratieve handel is geworden voor cybercriminelen. 

::: note
In december 2022 was Digipolis, de IT-backbone van de stad Antwerpen, het slachtoffer van een zeer impacterende ransomware aanval door hackercollectief Play (een soort spin-off van Conti, een Russische hackersgroep). Quasi alle online-diensten van de stad Antwerpen zijn meerdere dagen onklaar gemaakt, inclusief politie, brandweer, bibliotheken, zwembaden, stadsloketten, stedelijke scholen, etc. Quasi iedere burger heeft in meer of mindere mate last ondervonden van deze gigantische aanval. Het toont vooral ook weer aan hoe gevoelig ons digitale leven is en dat er altijd een keerzijde is de digitalisering.
:::

## 2020:  De macht van sociale media

2016 ging er een schokgolf doorheen de wereld. Tegen alle verwachtingen in won Donald J. Trump de presidentsverkiezingen na een bitsige strijd tegen Hillary Clinton. Dat social media een belangrijke rol zouden spelen dit decennium was al lang voorspeld. Facebook, Twitter, Google en konsoorten hadden miljarden gebruikers die met plezier hun privacy te grabbel  gooiden in ruil voor dagelijkse dopamine-shots dankzij *likes* en *retweets*. Met dank aan gigantische *troll farms* (organisaties die duizenden fake social media accounts aanmaken en zo mee de social media algoritmes beïnvloeden om bepaalde informatie te *nudgen* in de gewenste politieke richting) kon Trump honderdduizenden potentiële twijfelaars doen inzien dat hij het juiste antwoord was tijdens de verkiezingen. 

De inmenging van Rusland in een buitenlandse verkiezing (een daad waar menig land zich reeds schuldig aan heeft gemaakt) was ontluisterend vanwege de schaal waarop het gebeurde. Het toonde de almacht van de grote Silicon Valley bedrijven en hoe zij op geopolitiek niveau een belangrijke speler zijn geworden. Iets dat vervolgens nogmaals bevestigd werd door het simultaan plaatsgevonden Cambridge Analytica schandaal, dat niet alleen mede ervoor gezorgd heeft dat Trump president werd, maar dat hoogstwaarschijnlijk ook een grote groep twijfelaars heeft kunnen overhalen om een pro-Brexit stem uit te brengen. 

Drie jaar later zagen onderzoekers een soortgelijk fenomeen tijdens de verkiezingen van de Europese Unie in 2019. Een rapport toonde aan dat Rusland actieve misinformatie campagnes organiseerde om zo de verkiezingen te beïnvloeden. Ze gebruiken hierbij zogenaamde *bad actors*: fake social media accounts die (al dan niet fake) nieuws verspreiden dat "in de winkel van Rusland past". Uit het onderzoek bleek dat de toenmalige belangrijkste EU-mandatarissen (Juncker, King, Tajani, etc.) soms tot 20% volgers op Twitter hadden die eigenlijk *bad actors* waren. 

::: note
Wat is het nut van *bad actors* die bekende mandatarissen volgen? Deze trolls posten hun "anti-boodschappen" als reacties op posts van diegene dat ze volgden. Vervolgens zorgden ze ervoor (via bijvoorbeeld likes en retweets door mede trolls) dat hun boodschap bovenaan de lijst van reacties kwam. Hierdoor kreeg iedereen die de mandataris volgde vaak ook de troll-reactie(s) ogenblikkelijk te zien.
:::

De voorbije jaren is er een (lichte) kentering bezig inzake de macht van de social media bedrijven, maar het blijft een feit dat momenteel wij allen grotendeels afhankelijk zijn van door artificiële intelligentie aangedreven algoritmes die bepalen welke informatie wij willen/zouden/moeten consumeren, ieder uur van de dag. Zolang echter data het nieuwe goud is en bedrijven dit vrij kunnen bewaren (GDPR poogt dit in te perken) zullen zij hun algoritmes kunnen blijven voeden en trainen om nog griezeliger/knapper te maken. 

Het gevolg van die *datahoarding* is echter ook dat datalekken ook steeds nefastere gevolgen hebben. Daar waar het bij Ashley Madison nog ging om een dikke 20 miljoen user accounts, medio 2021 zijn het aantal accounts dat bij een datalek betrokken zijn soms vertienvoudigd - de MGM Grand Hotels keten zag in de zomer van 2020 plots 142 miljoen van z'n gast-accounts te koop staan voor een schamele 3000 dollar in bitcoin.

::: tip
Twee boeken, die lezen als rasechte thrillers, gaan dieper in op de zonet beschreven gebeurtenissen: "Sandworm -  A New Era of Cyberwar and the Hunt for the Kremlin's Most Dangerous Hackers" van Andy Greenberg en "How they tell me the world ends" van Nicole Perlroth..
::: 

### 2021: Oude bibliotheken, nieuwe problemen

De opmerkelijkste gebeurtenis in 2021 was de lek in de **Log4J** Java-bibliotheek. Deze ogenschijnlijk onschuldige bibliotheek wordt al bijna twee decennia  in miljoenen Java-applicaties én servers (waaronder de Apache webservers!) gebruikt om loginformatie weg te schrijven. Tot in November 2021 onderzoekers een kritische bug ontdekten waardoor al deze servers en applicaties plots erg kwetsbaar werden. Het voorval toonde nog maar eens aan hoe afhankelijk we zijn geworden van onze code én netwerkinfrastructuur die vaak al jaren oud is en zo goed als zeker nog ongekende bugs bevatten die misbruikt kunnen worden. In 2012 zagen we al eens wat de gevolgen kunnen zijn van "een kleine bug" in een veel gebruikte bibliotheek. OpenSSL werd toen al door ontelbare websites en routers gebruikt om een beveiligde TLS tunnel (zie hoofdstuk 3) op te zetten wanneer HTTPS werd gebruikt. De bug resulteerde in de **Heartbleed**-lek die aanvallers konden gebruiken om data van servers te stelen die de OpenSSL-bibliotheek gebruikten.

::: note
De Log4j-episode heeft veel bedrijven doen inzien dat ze kritischer moeten nadenken over hoe ze omgaan met het gebruik van open-source bibliotheken. De updates van dergelijke bibliotheken worden vaak zonder nadenken gedownload en geïntegreerd in de eigen software. Veel bedrijven beginnen daarom nu *policies* op te stellen omtrent het gebruik van publiekelijk beschikbare stukken software.
:::

::: tip
Om de kracht én het gevaar van open-source bibliotheken te bevatten, lees zeker eens [volgende artikel](https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/) waarin de maker van een populaire NPM bibliotheek (*colors*) het beu was dat grote bedrijven al jaren zijn bibliotheek(jes) gebruikten zonder hem er ooit voor te bedanken of betalen (merk op dat zij dit niet moesten doen: de bibliotheken waren als open-source met de juiste licentie verspreid). Van de één op de andere dag bracht de maker een update uit die de bibliotheken "willekeurige output" liet genereren in de host-applicatie. Wetende dat zijn bibliotheek wekelijks 20 miljoen keer gedownload wordt, kan je wel inbeelden dat aardig wat ontwikkelaars, groot en klein, plots met de handen in het haar zaten.
:::




## En de toekomst? 

Een glazen bol hebben we niet, maar vast staat dat het er niet op zal verbeteren. Zoals gezegd gaan bedrijven uit van *when* in plaats van *if* als het gaat over de vraag of ze al dan niet ooit gehackt zullen worden. Daarnaast zien we dat hoogtechnologische producten meer en meer ingeburgerd geraken in het cybercrime-milieu. Deep fakes video van bekenden zijn nu nog "grappig", maar de realistische beelden (afbeeldingen, video én nu zelfs ook spraak) die ze kunnen produceren zijn al even niet meer te onderscheiden van het echte en zullen dus meer en meer kunnen gebruikt worden voor sextortion en soortgelijke schandalen. Dit soort trends zullen nog jaren *fake news* hoogtij laten vieren waardoor ook toekomstige verkiezingen interessante doelen blijven voor andere mogendheden om hun stempel te drukken op geopolitieke tegenstanders.  

::: tip
Sinds de oorlog in Oekraïne is uitgebroken zien we ook terug verregaande cyberactiviteit vanuit Rusland. De eerste weken van de oorlog (februari 2022) was het opvallend stil en leek het alsof *de angst voor Russische cyberoorlog* ongegrond was. Ondertussen zijn we helaas meer dan een jaar verder en verschijnen er meer en meer verhalen, zoals verwacht, van Russische cyber-inmenging. [Volgende artikel geeft een heldere tijdslijn hiervan.](https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2022)733549)

![Een stuk van de zonet beschreven tijdslijn uit het door het Europese parlement gepubliceerde rapport.](intro/rusukr.jpg){ width=70% }
:::

::: note
Microsoft monitort al geruime tijd de vele fake news bronnen die Rusland rijk is. Er wordt zelfs een **Russian Propaganda Index** (RPI) bijgehouden die aangeeft hoe actief de Russische trolls momenteel zijn in het verspreiden van bewezen onwaarheden (o.a. over de oorlog in Oekraïne, binnenlands beleid van andere mogendheden, COVID-19 vaccins, etc.)

![Zoals verwacht zag de RPI-grafiek een stevige stijging aan de start van de illegitieme invasie van Oekraïne door Rusland. Bron: https://www.microsoft.com/en-us/security/business/microsoft-digital-defense-report-2022-cyber-influence-operations.](intro/rpi.jpg){ width=70% }
:::


Om nog maar te zwijgen over de opkomst van ongelooflijk krachtige AI systemen. Sinds de winter van 2022 worden we constant overspoeld met nieuwe AI toepassingen die zo krachtig zijn dat er zelfs in maart 2023 werd voorgesteld om alle AI onderzoek "even te pauzeren", zodat wij, als gemeenschap, kunnen reflecteren (én bijbenen) over hoe we onze toekomst met AI willen opbouwen. Onze glazen bol is niet perfect, maar wees er maar van overtuigd dat we de komende jaren onvoorspelbaar, bizarre, krachtige cyberaanvallen gaan tegenkomen die door AI worden ondersteund. Een eerste voorbeeld hiervan zagen we reeds recent in de zomer van 2023 genaamd **DarkBert**, een broertje van ChatGPT dat was getraind op DarkWeb data en dus de ideale chatpartner is voor conversaties die het daglicht niet mogen zien.


## Het is erger, maar...

Dus ja, het wordt helaas erger. De wapenwedloop in de cyberwereld gaat beangstigend snel vooruit en het wordt moeilijker en moeilijker om als "normale sterveling" er een antwoord op te geven. Als een IoT botnet van 10 miljoen apparaten morgen beslist om de infrastructuur van jouw KMO plat te leggen, dan zullen ze daar in slagen, ongeacht de vele euro's die je hebt geïnvesteerd in firewalls, intrusion detection systems, virusscanners en honeypots.

Aan de andere kant heeft de wapenwedloop er wel voor gezorgd dat onze infrastructuur ook steeds complexere aanvallen kan weerstaan. Hierdoor wordt het voor huis-tuin-en-keuken malware een pak moeilijker om nog computers van thuisgebruikers te besmetten. 

Maar laten we deze cyberstropers geen vrij spel geven! Laten we leren van hun technieken om zo zelf onze systemen en personeel te *hardenen* en te beschermen tegen wat niet anders dan het "wilde westen van het Internet" (dixit komiek Steven Wright) kan genoemd worden.

::: tip
In de appendix achteraan dit boek vind je tal van boeiende en nuttige bronnen om op de hoogte te blijven over het reilen en zeilen in de schimmige wereld van de defensieve én offensieve cybersecurity wereld.
:::

