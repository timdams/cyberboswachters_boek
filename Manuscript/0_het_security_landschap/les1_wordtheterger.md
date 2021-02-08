## Wordt het erger?

*De laatste 10 jaar is de (cyber)security wereld erg veranderd. Ze doet dit niet omdat ze daar zin in heeft, maar wel als antwoord op wat er gebeurt in de wereld in zake cyberaanvallen, geopolitieke situaties, etc. Het is altijd een kat en muisspel, waarbij de boswachters helaas *by definition* steeds zullen achterlopen op de stropers. De kwaadwillige hackers hoeven maar 1 klein gaatje te vinden in je peperdure beveiliging en ze zijn binnen. Terwijl jij wel aan alles moet (proberen te denken). 
Dat het erger wordt is eigenlijk daarom bijna automatisch een evidentie. De wereld van de beveiliging gebeurt bij opbod en hoe beter de boswachters het bos kunnen verdedigen, hoe complexer de technieken zullen worden die de stropers hanteren.*


We gaan geregeld terug in de tijd gaan om te bekijken hoe bepaalde verdedigings-en aanvalstechnieken zijn ontstaan, maar in dit hoofdstuk gaan we enkel terug tot 2010. Het jaar waarin Mack Zuckerberg, CEO van Facebook, door Time Magazine tot persoon van het jaar werd uitgeroepen en ook waarin Apple de eerste IPad table aan het publiek toonde. Het was helaas ook het jaar waarin het boorplatform, Deepwater Horizon, voor één van de ergste milieurampen ooit zorgde, alsook het jaar dat 33 mijnwerkers anderhalve maand lang 700 meter diep opgesloten zaten in een mijn. Voor ons was echter de meest cruciale gebeurtenis het ontdekken van **Stuxnet**.

### Voor 2010

Voor het ontdekken van Stuxnet in 2010 leek de cyberbeveiligingswereld wel een wereld van (relatieve) peis en vree. Het ergste dat kon gebeuren was dat je computer een virusje opdeed waardoor je mogelijk wat data, en vooral veel werkuren, kwijt raakte. Virussen, wormen en spam waren alomtegenwoordig maar eigenlijk niet meer dan luizen in de pels van de eindgebruikers. Tuurlijk, er werd een grondig gevloekt als een virus je foto's verwijderde of wanneer een worm zichzelf verspreidde naar je contacten - denk maar aan het *ILOVEYOU* virus dat als een soort *social engineer* mensen deed geloven dat ze een potentiele liefdesmatch hadden waarop ze vol spanning de bijlage openden en zo de worm *in huis haalden*. Of wat te denken van de *Conficker* worm die in 2008 meer dan 3 miljoen systemen kon besmetten en telkens de update-services van het Windows toestel uitschakelde. Tuurlijk, dat was irritant, maar menig mens zou maar al te graag terug naar die tijd willen gaan als daarmee ransomware, botnets en door overheden gesponsorde cyberaanvallen onbestaande zouden zijn.

### 2010: En dan verscheen Stuxnet

Virussen konden computers (tijdelijk) onbruikbaar maken. OK, lastig, maar niet het einde van de wereld. De Stuxnet worm die in 2010 plots op de radar verscheen kon dat potentieel wel, de wereld eindigen. Het was een worm die op maat was gemaakt om zogenaamde PLC systemen te controleren. Héél veel van onze kritische systemen zijn geautomatiseerd met behulp van zogenaamde *Programmable Logic Computers*, krachtige apparaten die machines kunnen aansturen zoals liften, robotarmen aan assemblagelijnen, zuiveringsinstallaties en zelfs kernreactors. PLCs vormen de de interface tussen machines (hardware) en de computers (met software op) die de operatoren gebruiken om deze machines opdrachten te geven. Operators kunnen op hun systemen de machines bedienen en ten allen tijde controleren of deze naar behoren werken. 
Wat Stuxnet deed was zich tussen de hardware en de software nestelen. Als een virus besmette het laptops en computers en zocht het of er PLC-bedieningssoftware aanwezig was op het toestel. Als dat het geval was dan plaatste het zichzelf er tussen in zodat het:

1. de machines opdrachten kon geven zonder dat de operator dit wist.
2. aan de operator kon vertellen dat alles in orde was, terwijk in realiteit de PLC mogelijk desastreuze opdrachten aan de hardware gaf.

We moeten er geen tekeningetje bij maken wat de effecten kunnen zijn indien een Stuxnet variant bewust werd ingezet om bijvoorbeeld de machinerie in een kerncentrale of waterdam te saboteren. Zonder in details van Stuxnet in te gaan - daarvoor verwijzen we graag naar de uitstekende in 2006 verschenen documentaire "Zero Days" door Alex Gibney die een zeer ontluisterend én boeiend beeld over de zoektocht naar de oorsprong van het Stuxnet virus- is het duidelijk dat het verschijnen van dit virus een ommekeer betekende in wat de gevolgen van cyberterrorisme konden betekenen: mensenlevens stonden plots op het spel, niet enkel onze dierbare emails en digitale vakantiefoto's.

{aside}
Stuxnet bleek een bewust ontworpen virus te zijn dat probeerde een specifiek soort centrifuge te saboteren. Namelijk de centrifuges die onder andere Iran gebruikt om uranium te verrijken. De inlichtingendiensten van de Verenigde Staten en Israël zouden klaarblijkelijk Stuxnet hebben ontworpen om zo dit uraniumverrijkkingsproces van Iran te dwarsbomen. 
{/aside}


### 2013 : Onze privacy te grabbel gegooid

Surfen op het internet was altijd een risico. We wisten dat onze datapakketjes over tientalle apparaten doorheen het internet wordt getransporteerd om zo tot bij hun doel te geraken. Cookies volgden al geregeld onze stappen en ook de recommendations van Amazon waren soms akelig accuraat. Dat was de prijs die we moesten betalen om de ontelbare bronnen van het internet te kunnen gebruiken. En als je echt wat meer privacy nodig had, dan schakelde je de "incognito" modus in van je browser. Maar ook dan was je je ervan bewust dat zelfs je ISP (*internet service provider*) en je doel konden meekijken. Hoe erg kan dat zijn?

Die gedachte leefde bij veel mensen tot dan. Internet was een nuttige tool en je wist dat er kon meegekeken worden door *derden* als ze dat echt wilden. Maar zou dit nu echt consequent en op grote schaal gebeuren? Neen toch.

Dat glazen huisje werd in 2013 hardhandig aan diggelen geslagen door twee belangrijke personen:
* Edward Snowden: als systeembeheerder bij de NSA, de Amerikaanse inlichtingendienst gericht op elektronische spionage, had hij toegang tot het doen en laten van de dienst. Snowden lekte een grote hoeveelheid documenten naar de bevolking die onder andere het *PRISM*-programma uit de doeken deed. Hieruit bleek dat de NSA complexe samenwerking heeft met enkele grote Amerikaanse internetbedrijven die zogenaamde *taps* op hun systemen hebben staan zodat de NSA "kan meeluisteren" op de netwerken.
* Julian Assange: rond 2013 waren er geregeld zogenaamde klokkenluiders (*whistleblowers*) die om persoonlijke overtuigingen vonden dat bepaalde informatie met het publiek moesten worden gedeeld. Zeker in dictatoriale middens kan dit levensgevaarlijk zijn. Julian Assange besefte dit en richtte daarom in 2006 Wikileaks op. Een site waar klokkenluiders op een anonieme manier documenten konden *lekken*. Tot 2010 zijn zo enkele erg controversiële documenten met de wereld gedeeld die soms verregaande diplomatieke of geopolitieke gevolgen had.

{% hint style='warning' %}
Het is niet evident om over mensen als Assange en Snowden te praten zonder in een controversiële modderpoel te geraken. Voor de één is Snowden een held, voor de ander een verrader. In dit boek trachten we een objectief beeld te geven, zonder waardeoordelen te geven. Wat wel buiten kijf staat is dat zowel Snowden als Assange de wereld getoond hebben dat er in de duistere wandelgangen van de veiligheidsdiensten zaken gebeuren waar "normale stervelingen" zelden weet van hebben.
{% endhint %}


Het waren uiteraard vooral de onthullingen van Snowden die bij velen de oogkleppen deed afvallen. Op het Internet ben je hoegenaamd niét anoniem. Grote (en kleine) mogendheden en privéfirma's kunnen ons doen en laten op het internet bekijken en bewaren. Privacy en het internet zijn een oxymoron - een contradictorische term zoals zwarte sneeuw). Wanneer je je op het internet begeeft, op welke manier ook, gooi je een deel van je privacy te grabbel. En dat is iets dat helaas de voorbije 10 jaar er niet op verbeterd is. 

{% hint style='tip' %}
Een interessant debat dat altijd opduikt bij deze problematiek is de "Ik heb toch niets te verbergen"-houding. In het kleine maar fijne boekje "Je hebt wél iets te verbergen" van onderzoeksjournalisten Maurits Martijn en Dimitri Tokmetzis (ISBN 9789082821611) wordt onherroepelijk brandhout gemaakt met deze stelling. Finaal zijn we volledig afhankelijk van de diensten die we gebruiken wat ze met onze data nu én belangrijker, in de toekomst zullen doen. Privé-informatie over jou die nu ogenschijnlijk ongevaarlijk lijkt, kan dat potentiëel in de toekomst wel zijn wanneer onze normen, waarden of wetten veranderen. 
{% endhint %}

#### 2014: hoe veilig is *the cloud* ?

In 2014 vond er een controverse plaats die vooral de puberende tiener zich zal herinneren: *the fappening*. Deze naam laat weinig aan de verbeelding over en dekt helaas de lading goed. In het jaar dat Oekraïne Russische legers zag binnenrollen om de Krim (terug) in te palmen, verschenen er duizenden privéfoto's van een honderdtal *celebrities* op het internet. Deze privéfoto's hadden kwaadwillige hackers van de iCloud accounts van de slachtoffers gestolen en vervolgens gepubliceerd via Reddit, 4chan, etc. De foto's verpreiden zich als een lopend vuurtje en de slachtoffers konden enkel toezien hoe hun in de privésfeer opgenomen beelden door miljoenen mensen werden gedownload. 

De beroemdheden hadden hun foto's in de cloud-opslag van Apple bewaard, iApple, zoals op dat moment duizenden gebruikers ook al deden. Deze dienst zorgt ervoor dat je je als eindgebruiker van eender waar aan je foto's kan, daar ze "in the cloud" staan, wat door de spectaculaire groei van de smartphones (en iPhones in dit geval) een populair concept was geworden. Ook diensten zoals Dropbox, Onedrive (toen nog SkyDrive) toonden aan dat er een grote vraag was naar online opslag van informatie. 

Om dergelijke diensten te gebruiken dien je natuurlijk een veilig paswoord te hebben, daar eender wie, van eender waar, kan proberen zich een weg naar je data te verkrijgen door jouw paswoord te raden. In 2014 waren concepten zoals 2-factor-authentication (2FA) en biometrische beveiliging (meer daarover later) nog niet zo populair en dus was je geheime paswoord je enige bescherming tegen onrechtmatige toegang tot je data.

De diefstal van de foto's werd echter vergemakkelijkt om 2 redenen:
* Sommige slachtoffers gebruikten makkelijk te raden, of snel te bruteforcen paswoorden.
* Andere hadden de beveiligingsvragen ter goeder trouw ingediend. Veel diensten stellen een extra beveiligingsvraag (zoals "Wat is de naam van je eerste huisdier" of "Op welke school zat je vader") die ze kunnen gebruiken om jouw identiteit te verifiëren indien je je paswoord vergeten bent en je dit wenst te resetten. Wanneer jij of ik dit soort vragen invullen dan is dit 90% van de tijd informatie die nergens te vinden valt, enkel in de grijze massa in je hoofd en misschien in een genant dagboekje uit je jeugd. Bij de Amerikaanse beroemdheden wiens iCloud werd gehackt, is dat niet zo. Hun leven kan volledig gereconcstrueerd worden aan de hand van de ontelbare interviews die ze al hebben gegeven. Gegarandeerd dat ooit een interviewer al heeft gevraagd wat de kleur van zijn of haar eerste auto was, of in welk dorp hij of zij is opgegroeid. 

{% hint style='warning' %}
Het is een verkeerde reflex om in dit soort zaken ogenblikkelijk aan *victim shaming* te doen (kijk maar naar het recentere voorval waarbij enkele Bekende Vlamingen het slachtoffer waren van catfishing). Ieder doet en laat wat hij wenst in z'n privésfeer - daarom heet het ook privé- maar het is belangrijk te beseffen dat als je zaken *in the cloud* bewaard, de kans erg bestaande is dat iets of iemand er ooit onrechtmatige toegang tot zal krijgen. U weze gewaarschuwd.
{% endhint %}

{% hint style='tip' %}
Niemand verplicht je om op de beveiligingsvragen een eerlijk antwoord te geven. Er bestaat geen leugendetector in die systemen of een mama die op je vingers komt tikken. Lieg er dus op los, maar onthoudt uiteraard je antwoord. Dankzij die beveiligingsvragen hou je echter een stok achter de hand moest je je paswoord vergeten zijn. 
{% endhint %}





