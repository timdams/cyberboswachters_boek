# H2: De fundamenten van cybersecurity

"Iedere goede film begint met een zwart scherm", dixit Batman in de "The Lego Batman Movie" &trade; film. Wel, en iedere goed hoofdstuk begint met een definitie, dixit Tim Dams.

Laten we daarom eerst eens een definitie van cybersecurity neerpennen dat netwerkbedrijf *Cisco* gebruikt: 

*"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.*

*Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative."*

Alles draait met andere woorden rond het beschermen van informatie, dat die nu op een server, in een document of in iemand hoofd zit.

## CIA en het security model

Data (of informatie), in welke vorm dan ook (berichten over een netwerk, bestanden op een harde schijf, tekst in een database), moet beschermd worden, dat beseffen we nu. Het doel van onze data is dat deze voldoet aan het acroniem **C.I.A** wat staat voor:

* **C** voor "**confidentiality**": vertrouwelijkheid. De data kan enkel door zij die er recht toe hebben gebruikt worden. We gaan dit onder andere oplossen met behulp van encryptie en paswoorden.
* **I** voor "**integrity**": integriteit. We moeten weten of onze data onbeschadigd is en niet werd aangepast door derden (of storingen). Bij bestanden gaan we bijvoorbeeld werken met zogenaamde (secure) hashes.
* **A** voor "**availability**": beschikbaarheid. Data die niet door rechtmatige gebruikers kan bereikt worden is onbestaande data. Zogenaamde "denial-of-service" (dos) aanvallen hebben als doel deze pijler van CIA aan te vallen. availability is een breed veld en wordt onder andere opgelost door backups, redundante servers enerzijds, en preventieve maatregelen anderzijds zoals firewalls, load balancers, etc.

De zogenaamde McCumber kubus, ontwikkeld door John McCumber in 1991, geeft een goed beeld weer waarom het steeds belangrijk is goed te beseffen binnen welke context we praten. Deze kubus stelt een model voor dat kan gebruikt worden om je ervan te vergewissen dat je aan alles denkt wanneer je je informatie wilt beschermen. De kubus bestaat uit 3 dimensies en iedere dimensie bestaat uit een aantal aspecten. **Enkel wanneer we alle aspecten van alle dimensies in onze beveiligingsaanpak voorzien kunnen we hopen dat we onze C.I.A. doelen hebben bereikt.** 

Om ons doel te bereiken (C.I.A.) moeten we ervoor zorgen dat we dit toepassen op alle vormen die onze data kan hebben (opslag, verzenden, verwerken). Dit kunnen we tewerkstellingen door technologische oplossingen (zoals encryptie wat in het volgende hoofdstuk wordt uitgespit), maar een niet onbelangrijke factor zijn ook de mensen die met de data moeten werken. Als zij zich niet aan de afspraken (procedures) houden en hun paswoorden gewoon op post-its aan hun scherm hangen, dan mag je een nog zo'n dure firewall hebben, het zal niet baten. 

![De McCumber kubus](crypto/secmodel.png){ width=70% }

## Waarom cyberboswachters het zo moeilijk hebben

De McCumber kubus is een mooi concept, maar het is ook niet meer dan dat: een theoretisch framework. Het is ideaal om vanuit een high-level perspectief je ervan te vergewissen dat je aan alles hebt gedacht, maar in de praktijk komt er uiteraard bij alle aspecten van deze kubus aardig wat kijken.

De cyberboswachters van de 21e eeuw hebben geen eenvoudige job. Ze was in de vorige eeuw al pittig, de laatste is de wapenwedloop er helaas alleen maar grimmiger op geworden.

* De aanvallers kunnen aan bijna supersonische **snelheid** aanvallen op duizenden, of zelfs miljoenen, systemen starten. 
* "Alles is verbonden": onze huidige IT-netwerken zijn vele malen groter en complexer dan circa 20 jaar geleden. Hierdoor is ook de zogenaamde **attack surface** steeds groter. Gedaan zijn de tijden dat een middelgroot tot groot bedrijf genoeg had aan 1 cyberboswachters. Er zijn nu zelfs bedrijven die kunnen ingehuurd worden om bij problemen (of slimmer: vooraf als audit) te komen helpen om de boel te blussen.
* De tools die aanvallers, van welke aard ook, ter hun beschikking hebben is vaak ongelooflijk **eenvoudig** geworden. Gedaan is de tijd dat een ietwat stevige aanval kon gedaan worden door experts met 10 jaar script- en netwerkervaring. Sommige vreeswekkende aanvallen vereisen niet meer dan het IP-adres van het slachtoffer in een invulveld invullen en vervolgens een klik op een grote rode knop "Start attack".
* Aanvallers schuimen *underground* fora af, op zoek naar de nieuwste *zero-day* die ze in hun arsenaal kunnen opnemen. Fabrikanten van besturingssystemen en software kunnen de **snelheid waarmee nieuwe zwakheden** in hun systeem worden gevonden niet volgen. 
* Door voorgaande snelheid van nieuwe zwakheden, duurt het ook langer en langer voor alles kan **gepatcht** worden door de ontwikkelaars van de software.
* Aanvallers kunnen **gigantische legers van computers en botnets** gebruiken om een ijzingwekkende hoeveelheid aan simultane aanvallen op één enkel slachtoffer uit te voeren.
* **Gebruikers** zijn een nog kleiner radertje in dit alles geworden en zullen nog sneller fouten maken (klikken op een link in een phishing email bijvoorbeeld) dan voorheen, met alle gevolgen van dien.

### Zero days en patching

Aanvallers hebben voor zero days aardig wat geld over. Een zero day kopen is een aanval kopen die gegarandeerd zal werken daar deze een zwakte misbruikt die nog niet bij de maker van de software gekend is.

Een zero day zal quasi gegarandeerd blijven werken tot de ontwikkelaars een nieuwe patch ervoor maken. Maar zelfs dan blijven zero days nuttig: het is niet omdat er een patch bestaat, dat de slachtoffers deze patch ook effectief reeds geïnstalleerd hebben. Veel bedrijven hebben nu erg strenge *patching policies* maar toch blijft het dweilen met de kraan open: er moet maar 1 systeem niet gepatcht zijn tegen de zero day van de aanvallers en het gaatje in de verdedigingslinie is gevonden en kan misbruikt worden.

De meeste fabrikanten van besturingssystemen (Apple, Microsoft, etc.) en veelgebruikte softwarepakketten (Adobe, Microsoft, etc.) brengen patches op welbepaalde dagen uit. Dit zorgt er bijvoorbeeld voor dat systeembeheerders hier rekening mee kunnen houden in hun wekelijkse planning. Voor gebruikers van zero days is dit ook nuttig: er ontstaat een zogenaamde **window of vulnerability**. Dit is de periode tussen het "ontdekken en in gebruik nemen van een zero day" en de moment waarop de patch tegen de zero day wordt verspreid. In dit *window* heeft de aanvaller vrij spel daar geen enkel systeem al kan gepatcht zijn. 

::: tip
In 2021 verscheen "How they tell me the world ends" van New York Times journaliste Nicole Perlroth. Dit boek is erg ontluisterend en geeft een griezelig inzicht in hoe het er momenteel aan toe gaat in de schimmige wereld van zero days, offensieve cybersecurity, etc. Bekijk bijvoorbeeld maar eens de twitter-account van Chaouki Bekrar ([twitter.com/cbekrar](https://twitter.com/cbekrar)), oprichter van Zerodium, een zero-days *broker* en huiver bij de gigantische prijzen die zero days waard kunnen zijn (soms meer dan 1 miljoen dollar...).

![Een bericht van Zerodium in 2021](intro/zerodium.png){ width=70% }

:::


## Classificatie van aanvallen

Dit hoofdstuk begon met een definitie, dan moeten we zeker ook eens enkele zaken classificeren. Alles (moet gedaan worden) om ietwat wetenschappelijk over te komen, niet waar. In dit geval gaan we eens kijken hoe we, algemeen gezien, de typische aanvallen kunnen classificeren die kunnen optreden in de cyber security wereld. Specifiek zullen we steeds met 3 personages werken:

* Alice en Bob: zij zijn de *goeie* en willen op een veilige manier met elkaar communiceren. 
* Eve: zij is de aanvaller/hacker/crimelord/snoodaard die het leven van Alice en Bob zuur wil maken in haar voordeel. Mogelijk wil ze te weten komen wat Alice en Bob met elkaar afspreken, misschien wil ze ervoor zorgen dat de berichten van Alice niet bij Bob aankomen, etc.

::: warning
Herinner je even aan de McCumber-kubus: Alice en Bob zijn eender welk start-en eindpunt van onze informatie, in welke vorm dan ook. Als je bijvoorbeeld C.I.A. vereist in een computer dan is Alice bijvoorbeeld je CPU en Bob het RAM-geheugen (om maar iets te zeggen).  Kortom, probeer altijd al deze informatie breed genoeg te plaatsen en niet aan het klassieke "netwerkcommunicatie"-systeem waarin Alice over een netwerk een boodschap naar Bob stuurt. 
:::

Eve kan op allerlei manieren *aanvallen* en in de eerste plaats kan dat **actief** of **passief** zijn: bij passieve aanvallen zal Eve enkel *luisteren* (en wachten) op de communicatie tussen Alice en Bob. Hierdoor zijn passieve aanvallen veel moeilijker om te detecteren(soms zelfs onmogelijk), maar uiteraard is Eve 100% afhankelijk van wat Bob en Eve doen, daar ze geen dwingende hand heeft in hun communicatie. Bij actieve aanvallen is dat omgekeerd: de pakkans is groter (en afhankelijk van het type aanval), maar ze kan ook mogelijk de communicatie tussen Bob en Alice sturen in de richting die zij nodig heeft om haar aanval uit te voeren.

![Passieve vs actieve aanvallen](intro/pasact.png){ width=70% }

### Passieve aanvallen

![Passieve aanval, type 1: sniffing](intro/sniffing.png){ width=70% }

![Passieve aanval, type 2: trafiek analyse](intro/trafanaly.png){ width=70% }

### Actieve aanvallen

![Actieve aanval, type 1: Masquerading](intro/maske.png){ width=70% }

![Actieve aanval, type 1:Replay attack](intro/replay.png){ width=70% }

![Actieve aanval, type 1: Man-in-the-middle aanval](intro/mitm.png){ width=70% }

![Actieve aanval, type 1: denial-of-service aanval](intro/dos.png){ width=70% }

## Wie zijn de stropers?

Waar moeten we ons tegen beschermen als cyberboswachter? Het zou verleidelijk zijn om ons te richten op 1 specifieke doelgroep en ons daar volledig tegen te wapenen. Helaas is het niet te voorspellen van wie je last zal hebben. Iedere groep aanvallers heeft eigen motivaties en middelen en het is niet altijd evident om tegen ieder iets te doen. Het kan natuurlijk geen kwaad om tenminste te weten met welke groepen je mogelijk zal geconfronteerd worden:

* Hackers: waarbij we een onderscheid moeten maken tussen white, black en grey hat hackers uiteraard.
* Scriptkiddies: een groep die soms te laat beseft dat ook zij dingen doen die erg strafbaar zijn.
* Werknemers: een vaak over het hoofd gekeken, maar oh zo veel voorkomende groep.
* Cybercriminelen: dé grootste plaag, nog steeds.
* Cyberterroristen: rebel, vrijheidsstrijders, *it's all in the eye of the beholder* uiteraard.
* Spionnen : *James Bond of the WWW*.
* Overheden (of door overheden gesponsord): een probleem dat steeds groter blijkt te worden.

### Hackers

Wanneer een digitale stroper niet onder 1 van de andere noemers kan gezet worden dan wordt hij "hacker" genoemd, een soort catch-all term die soms een positieve, soms een negatieve connotatie heeft. Om toch wat onderscheid mogelijk te maken kunnen we zeggen dat er 3 soorten hackers zijn:

* **Whitehat**: *"de goei"*. Dit zijn hackers die onder duidelijke afspraken met hun doelwit de sterktes en zwaktes van een systeem zullen testen door deze te proberen te omzeilen. Whitehat hackers werken volledig binnen de krijtlijnen van de wet en zullen enkel die zaken testen waartoe zij recht hebben. Denk bijvoorbeeld aan audit-bedrijven die de beveiliging van andere bedrijven zullen *pentesten* (penetration testing: trachten in een systeem te geraken) of bounty hunters die bijvoorbeeld via *intigrity.com* op zoek gaan naar nieuwe problemen bij een website of product.
* **Greyhat**: letterlijk een grijze zone. Grey hat hackers hebben meestal een positief doel maar zullen niet altijd volgens "de regels van de wet werken". Denk maar aan een hacker die ongevraagd een lek ontdekt in een bedrijf en dit ook rapporteert. De kans is bestaande (maar gelukkig kleiner dan vroeger) dat het bedrijf in kwestie hier niet mee opgezet is en dus de hacker zal aanklagen. Vergelijk grey hat hackers met een soort "goede dief": hij gebruikt zijn expertise om ongevraagd huizen binnen te breken om dan vervolgens, zonder iets te stelen, een briefje achter te laten met uitleg hoe de inbreker net is binnen geraakt.
* **Blackhat**: de "bad guys" van de hoop en ook wel *crackers* genoemd. Blackhat hackers zullen systemen aanvallen waar ze geen toestemming voor hebben en meestal met als doel om niet legale resultaten (lees: geld, kennis of macht) te bereiken ten koste van het doelwit. 

### Scriptkiddies

Iemand die weinig tot niets kent van cybersecurity maar toch bestaande tools uittest op slachtoffers, wordt ook wel een scriptkiddie genoemd. Deze groep mensen gebruikt tools die eenvoudig in gebruik zijn, zonder altijd goed te weten wat de tool doet én wat de gevolgen ervan zijn. Doordat tools steeds krachtiger worden, zijn ook de gevolgen van scriptkiddie-aanvallen steeds drastischer. Wat deze gebruikers vaak vergeten is dat hun acties strafbaar zijn. Ze vergeten dat ze het klikken op een knopje in een programma, vanuit hun gezellige bureaukamer thuis, erge gevolgen kan hebben voor hun doelwit. Het gebeurt dan ook geregeld dat een scriptie onzacht én snel in aanraking met het gerecht komt. De veiligheidsdiensten die op cyberaanvallen reageren kunnen natuurlijk niet zien wie er achter een aanval zit en zullen dus altijd op dezelfde manier reageren. Een inval van een team zwaar bewapende agenten omdat een bank of webshop al dagen wordt lamgelegd is een "ervaring" die een scriptkidie nog lang zal herinneren (en zien op z'n lege spaarboekje ten gevolge van de grote boetes die hij of zij nog jaren zal moeten afbetalen)

::: tip
Low Orbit Ion Cannon is zo'n typische scriptkiddie tool: eenvoudig in gebruik, met potentieel grote gevolgen voor het slachtoffer. Deze tool, wanneer meerdere gebruikers hem samen gebruiken, voert DDOS-aanvallen op het doelwit uit. In 2010 werd de tool bijvoorbeeld gebruikt om de servers van Visa, MasterCard en Paypal uren lang lam te leggen als wraak op het feit dat deze betalingsdiensten geen betalingen voor WikiLeaks meer aanvaardden. [Meer informatie](https://www.smh.com.au/technology/the-aussie-who-blitzed-visa-mastercard-and-paypal-with-the-low-orbit-ion-cannon-20101209-18qr1.html).

![Low Orbit Ion Cannon UI (Bron Wikipedia)](intro/ioncan.jpg){ width=70% }
:::


### Werknemers

Werknemers die niet tevreden zijn over hun baas of werkomgeving, of net zijn ontslagen, zijn een veelvoorkomend probleem (volgens sommige experts zelfs hét belangrijkste cybersecurity probleem). Ze zitten vaak letterlijk "aan de binnenkant" van de beveiligingssystemen en kunnen daardoor ook veel meer schade aanrichten als ze dat willen. Ontevreden werknemers die wraak nemen op hun werkgever is een veel voorkomend probleem. Zeker als die werknemer op de koop toe bijvoorbeeld de netwerk-administrator was. Er zijn verhalen van ex-admins die voor hun vertrek de IT-systemen van het bedrijf saboteerden en, als klap op de vuurpijl, dan ook nog eens losgeld eisten om de systemen terug up-and-running te brengen. HEt hoeft natuurlijk niet zo spectaculair zijn. Of wat te denken van werknemers die waardevolle documenten stelen en doorverkopen,of aanpassen zonder dat het bedrijf er erg op heeft.
Werknemers zijn ook vaak onbedoeld de oorzaak van veel problemen: ze gaan misschien slordig om met de manier waarop ze hun wachtwoord bewaren, waardoor anderen via hun account kunnen inbreken. Of ze installeren bijvoorbeeld een extra draadloos access point om een betere wifi-dekking op de bureau te hebben, waardoor dit AP plots een veel minder goed beveiligd doelwit is dat hackers kunnen misbruiken.  

::: tip
Veel van dit soort problemen kunnen voorkomen worden door een doordacht "identity management"-systeem dat er voor zorgt dat de accounts van recent ontslagen werknemers ogenblikkelijk worden verwijderd of dat tenminste de toegang tot bedrijfskritische systemen uitschakelt. Voorts moet personeel (op alle niveaus!) opgeleid en getraind worden zodat ook dit facet van de McCumber kubus gedekt wordt.
:::

### Cybercriminelen

*Money talks* zegt men wel eens, en dat geldt (geld, snap je'm ;) )  zeker voor deze groep. Cybercriminelen doen wat criminelen als millennia doen en dat is rijkdom die hen niet toebehoort proberen te pakken krijgen. Geld, geld, geld is de motivatie van deze groep mensen. Een onderzoek in 2021 ([bron](https://www.iii.org/fact-statistic/facts-statistics-identity-theft-and-cybercrime#:~:text=There%20were%204.8%20million%20identity,up%20from%20651%2C000%20in%202019.)) schat dat meer dan 700 miljard dollar verlies werd opgetekend ten gevolge van online criminaliteit. Doordat steeds meer mensen hun betalingen en identiteiten (denk maar aan de vele its-me phishing sms'jes dat je geregeld krijgt) online beheren wordt ook de groep potentiële slachtoffers steeds groter.

Cybercriminaliteit wordt soms wel eens de motor van de cybersecurity genoemd omdat steeds blijven innoveren en zoeken naar nog betere manieren om onschuldige slachtoffer hun centjes te stelen. Hierdoor moeten ook de boswachters steeds blijven vernieuwen. 

Cybercriminaliteit is nu zelfs zo ver geëvolueerd dat ze heuse moderne bedrijfsconcepten overnemen en hun zaakje als echte bedrijven runnen. Moderne ransomware criminelen hebben zelfs helpdesks die je kan bellen om je te helpen om de betaling (de ransom) te regelen. Of wat te denken van website die botnets verhuren als waren het legale services. Hier en daar zie je nu zelfs het "-as a service" zinnetje verschijnen waarbij bijvoorbeeld "ransomware as a service" ([RaaS](https://zvelo.com/raas-ransomware-as-a-service/)) of "spam as a service" kan gehuurd worden. Het doel hierbij is natuurlijk om de strafbare feiten zoveel mogelijk te verleggen naar de persoon die de services inhuurt, en niet naar de aanbieder ervan.

### Cyberterroristen, spionnen en Overheden

De laatste 3 groepen bespreken we samen, ook al omdat de termen soms overvloeien afhankelijk aan wie je vraagt om iets of iemand met dit label te bestempelen. Zoals reeds in het eerste hoofdstuk aangehaald is de cyberwereld tegenwoordig ook een belangrijk terrein waar geopolitieke ruzies op worden uitgevochten. Er bereiken ons steeds meer berichten van de exploten die hier doorgaan. De financiële en technische middelen die deze groep voorhanden heeft voor zowel offensieve als defensieve cyberacties is meestal immens groter dan van alle andere stropers in dit overzicht. We zagen ooit een presentatie (bron ontbreekt. Als je deze vindt, laat me iets weten aub) waarin een cybersecurity expert ietwat lachend sprak over het "Mossad / Non-Mossad verdedigingsprincipe" (Mossad is een Israëlische geheime dienst en staat in de top van *strafste* cybersecurity expertise). Het principe gaat uit van de manier waarop je je beveiliging opbouwt: ga er van uit dat de Mossad in je systemen zal geraken, ongeacht hoeveel geld en personeel je tegen het probleem aan gooit. Het is met andere woorden efficiënter dat je een realistische inschatting maakt van je tegenstanders (qua expertise en middelen) en daar specifiek je op richt, waarbij je natuurlijk het  *low hanging fruit* niet over het hoofd ziet. 

## Hoe vallen ze aan

Alhoewel voorgaande groepen van aanvallers allemaal erg specifieke redenen hebben, kunnen we toch hun aanvallen generaliseren in 5 duidelijke stappen:

1. Verkennen: passieve *reconnaissance*.
2. Scannen: actieve  *reconnaissance*.
3. Toegang verkrijgen.
4. Toegang bestendigen.
5. Sporen wissen.

::: note
Ook deze sectie zal grondiger ontleed worden in een volgende editie.
:::

## Hoe verdedigen

Wat en wie je wilt verdedigen in de cyberwereld kan erg gevarieerd zijn. Toch kunnen we alles herleiden tot 4 +1 fundamentele principes die je best hanteert indien je een systeem van welke vorm ook wenst te beschermen tegen cyberstropers. Deze zijn:

* *Layering*: bouw je beveiliging zoals de lagen van een ui rondom je te beschermen data, gebruikers en services. Hoe meer lagen hoe beter, op voorwaarde dat ze natuurlijk verschillend zijn. Het voordeel van met meerdere lagen werken is evident: indien 1 laag om welke reden dan ook gecompromitteerd raakt, zijn er nog steeds de andere lagen die als verdediging werken. 
* *Limiting*: beperk steeds maximaal wat iedereen binnen je systeem kan. Zorg ervoor dat gebruikers en services enkel die zaken kunnen doen waartoe ze recht hebben volgens hun rol. Geef dus niet iedereen admin-rechten, zet je firewall niet op *allow all*, etc.
* *Diversity*: Zorg ervoor dat je een verscheidenheid aan beveiligingen hebt. Op die manier voorkomen we, net als bij layering, dat het falen van één systeem niet je hele verdediging neerhaalt.
* *Simplicity*: *keep it simple, stupid*. Al het voorgaande lijkt te doen uitschijnen dat je complexe systemen moet bouwen die als het ware een doolhof voor de aanvallers maken. Op zich is daar iets van aan, maar zorg er wel voor dat je niet zelf in je doolhof verdwaalt en daardoor fouten introduceert zonder het te beseffen. Soms is *less more* en dat geldt ook bij beveiliging. 

::: caution
Het vijfde fundamentele principe krijgt een eigen kadertje omdat deze voor discussie vatbaar is én geregeld voor de nodige controverse kan zorgen. Als je dus, om welke reden dan ook, niet genoeg tijd of budget hebt om alle principes toe te passen, probeer dan de volgende als laatste "oplossing" te gebruiken:

* *Obscurity*: Ga niet aan de grote klok hangen hoe jouw verdediging is opgebouwd. Echter, let op met deze leuze. Obscurity wil niet zeggen dat je zelf een of ander vaag crypto-algoritme zelf gaat ontwikkelen en angstvallig gaat geheim houden. Gebruik standaarden en vertrouwde producten in je beveiliging. Eén van de eerste regels in security is "ga niet zelf het wiel heruitvinden"!
:::


::: tip
Soms zal je digitale stropers horen spreken over "Ik heb dat systeem gepwnd", uitgesproken als *ge-powned*. De term "to pwn" is *hacker-slang* voor "to own" om aan te geven dat je in een systeem bent binnen geraakt en nu controle over het systeem hebt. Volgens de [urbandictionary.com](https://www.urbandictionary.com/define.php?term=pwnd) is de enige reden dat de *o* een *p* werd het gevolg van een typfout, daar beide letters vlak naast elkaar staan op een toetsenbord.
:::

### Je verdediging ontwerpen

Er zijn tal van boeken en papers geschreven over hoe je je vervolgens moet verdedigen. De voorgaande 4 + 1 principes zijn een start, maar nog iets te algemeen. Omdat we niet alle design principes kunnen beschrijven bespreken we hier een *gouwe ouwe* de **Saltzer en Schroeder's design principes** naar twee Amerikaanse computerwetenschappers die in 1975 dit beschreven in een artikel getiteld  *The Protection of Information in Computer Systems*. Het artikel wordt ook wel eens het "meest geciteerde, maar minst gelezen artikel in het domein" genoemd.  

De principes houden nog steeds stand en zijn de volgende ([droog overgenomen van Wikipedia](https://en.wikipedia.org/wiki/Saltzer_and_Schroeder%27s_design_principles)...want ook wij hebben het originele artikel niet gelezen):

* **Economy of mechanism**: Keep the design as simple and small as possible.
* **Fail-safe defaults**: Base access decisions on permission rather than exclusion.
* **Complete mediation**: Every access to every object must be checked for authority.
* **Open design**: The design should not be secret.
* **Separation of privilege**: Where feasible, a protection mechanism that requires two keys to unlock it is more robust and flexible than one that allows access to the presenter of only a single key.
* **Least privilege**: Every program and every user of the system should operate using the least set of privileges necessary to complete the job.
* **Least common mechanism**: Minimize the amount of mechanism common to more than one user and depended on by all users.
* **Psychological acceptability**: It is essential that the human interface be designed for ease of use, so that users routinely and automatically apply the protection mechanisms correctly.
* **Work factor**: Compare the cost of circumventing the mechanism with the resources of a potential attacker.
* **Compromise recording**: It is sometimes suggested that mechanisms that reliably record that a compromise of information has occurred can be used in place of more elaborate mechanisms that completely prevent loss.


## Social Engineering

In het eerste hoofdstuk kwam de term "Social engineering" al enkele keren voor. We zagen ook bij de McCumber kubus dat we niet enkel op technologie mogen rekenen wanneer we onze verdediging opzetten, maar dat we ook een heel belangrijke schakel moeten trainen en opvolgen: de mensen. Mensen zijn meestal de zwakste schakel in ons securitymodel en dus daarom ook een interessante "aanvalsvector" voor digitale stropers. Social engineering wordt ook wel eens *het hacken van mensen* genoemd en is een erg laagdrempelig, maar oh zo effectieve aanvalstechniek die vaak over het hoofd wordt gezien. Bij social engineering zal de aanvaller *menselijke* interacties gebruiken om zijn slachtoffers onbewust zaken te laten doen of informatie geven dat niet zou mogen. Hierbij misbruikt de aanvaller onze aangeboren gewoonte om mensen te vertrouwen in plaats van te wantrouwen. We gaan meestal uit *van het goede van onze medemens* en zullen vaak meerdere goede redenen kunnen verzinnen waarom iemand iets van jou nodig heeft. Andere menselijke trekken die we kunnen gebruiken als social engineer zijn onder andere de nieuwsgierigheid van mensen, hun hebzucht, onwetendheid of angst. 

Enkele voorbeelden:

* Je verkleden als pizzakoerier en een grote stapel (lege) pizzadozen het bedrijf binnendragen. Werknemers zullen je willen helpen en de deur voor je openhouden, ook al moet je normaal gezien met je toegangsbadge het gebouw betreden.
* Bij de rokers aan de achterkant van het gebouw gaan staan, wat met hen keuvelen en hen sigaretje aanbieden. Wanneer ze terug binnengaan hen volgen (*piggybacking*).
* Bellen en je voordoen als een technieker van Telenet en vervolgens de login-gegevens vragen van het slachtoffer.

Uiteraard hoeveel social engineers zich niet te beperken tot *fysiek* contact. Ze hanteren ook erg vaak geschreven teksten (e-mail) om aan social engineering te doen. Hierbij onderscheiden we 2 soorten:

* Phishing: trachten zoveel mogelijk mensen naar een bepaalde website of document te lokken waar vervolgens de aanvaller informatie van het slachtoffer zal proberen te verkrijgen door een fake login scherm te tonen, malware ongezien te installeren, etc.
* Spear phishing: deze vorm van phishing heeft als doel één persoon of groep. De email zal dan ook opgesteld worden om specifiek voor het slachtoffer te werken, i.p.v. een generieke mail.

::: tip
De term *phishing* is afgeleid van *fishing* oftewel vissen/hengelen naar iets. Vroeger had je het concept *phreaking* dat werd toegepast door hackers om op telefooncentrales in te breken door de 2600 hertz fluittonen die telefoons gebruiken te imiteren.
:::

### SET

Een veel gebruikte tool die social engineers hanteren is de **Social Engineering Toolkit** (beschikbaar via Kali en [github](https://github.com/trustedsec/social-engineer-toolkit)) en zal je helpen om (spear) phishing attacks op te zetten, fake websites (door bestaande te clonen) te hosten, malware in afbeeldingen te injecteren, etc. Het kan op de koop toe geïntegreerd samenwerken met Metasploit waardoor stropers erg complexe aanvallen kunnen opzetten.

![Het SET startscherm](intro/set.jpg){ width=70% }

### OSINT

We zagen reeds de 5 fasen die een aanvaller doorlopen: verkennen, scannen, etc. Aangezien Social engineering ook een vorm van cyber-aanval, zullen ook hier deze fasen worden doorlopen. Zeker bij spear phishing wil de aanvaller zoveel mogelijk informatie over zijn slachtoffer(s) te weten komen om ze de meest doeltreffende mail op te stellen. OSINT, oftewel Open Source Intelligence, is de techniek waarbij een aanvaller open source bronnen gebruikt om zijn slachtoffers in kaart te brengen tijdens deze eerste verkennings- of reconnaissance fase. 

Enkele nuttige technieken die worden toegepast:

* Google en andere searchengines: besef dat je veel meer informatie kunt vinden indien je ook geavanceerde search-eigenschappen gebruikt (denk aan "site:" en de "+"-operator, etc in google).
* Reverse image searching: er zijn tegenwoordig erg krachtige tools om de oorsprong van een afbeelding te traceren, en met bijvoorbeeld Google Lens kan je zelfs objecten en locaties op een foto identificeren.
* Metadata van bestanden: media bestanden (docx, jpg, png, mp4, etc.) bevatten ook aardig wat onzichtbare informatie die soms onbedoeld meereist met het bestand (denk bijvoorbeeld aan de EXIF data in een afbeelding) en dus door kwaadwillige personen misbruikt worden.

Het **OSINT Framework** (via [osintframework.com/](https://osintframework.com/)) is ontwikkeld om mensen er op te wijzen hoeveel publieke informatie social engineers (en anderen) over iemand te weten kunnen. Het is een griezelig uitgebreide hoeveelheid online bronnen die mooi gecategoriseerd zijn. Hierbij is het op de koop toe belangrijk te beseffen dat enkel open source bronnen worden gebruikt. Social engineers zullen zich uiteraard niet beperken tot enkel opensource bronnen en ook vaak betaalde of illegaal verkregen bronnen raadplegen.

![Voorbeeld van het OSINT framework in actie](intro/osint.png){ width=70% }

::: warning
Dit hoofdstuk ontbreekt nog informatie over:

* Software-based attacks: types malware, virus, worm, rootkits, botnet, spam, keylogger, privilege escalation
* Hardware-based attacks
* Side-channel attacks
* Kort woordje over network-based attacks

:::