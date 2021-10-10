# H2: De fundamenten van cybersecurity

"Iedere goede film begint met een zwart scherm", dixit Batman in de "The Lego Batman Movie" &trade; film. Wel, en iedere goed hoofdstuk begint met een definitie, dixit Tim Dams.

Laten we daarom eerst eens een definitie van cyber security neerpennen die het *Cisco* gebruikt: 

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

de cyberboswachters van de 21e eeuw hebben geen eenvoudige job. Ze was in de vorige eeuw al pittig, de laatste is de wapenwedloop er helaas alleen maar grimmigier op geworden.

* De aanvallers kunnen aan bijna supersonische **snelheid** aanvallen op duizenden, of zelfs miljoenen, systemen starten. 
* De gemiddelde aanval is duizenden keren **complexer** dan de aanvallen die we circa 20 jaar geleden te verduren kregen. 
* De tools die aanvallers, van welke aard ook, ter hun beschikking hebben is vaak ongelooflijk **eenvoudig** geworden. Gedaan is de tijd dat een ietwat stevige aanval kon gedaan worden door experts met 10 jaar script- en netwerkervaring. Sommige vreeswekkende aanvallen vereisen niet meer dan het IP-adres van het slachtoffer in een invulveld invullen en vervolgens een klik op een grote rode knop "Start attack".
* Aanvallers schuimen *underground* fora af, op zoek naar de nieuwste *zero-day* die ze in hun arsenaal kunnen opnemen. Fabrikanten van besturingssystemen en software kunnen de **snelheid waarmee nieuwe zwakheden** in hun systeem worden gevonden niet volgen. 
* Door voorgaande snelheid van nieuwe zwakheden, duurt het ook langer en langer voor alles kan **gepatcht** worden door de ontwikkelaars van de software.
* Aanvallers kunnen **gigantische legers van computers en botnets** gebruiken om een ijzingwekkende hoeveelheid aan simultane aanvallen op één enkel slachtoffer uit te voeren.
* **Gebruikers** zijn een nog kleiner radertje in dit alles geworden en zullen nog sneller fouten maken (klikken op een link in een phishing email bijvoorbeeld) dan voorheen, met alle gevolgen van dien.

### Zero days en patching

Aanvallers hebben voor zero days aardig wat geld over. Een zero day kopen is een aanval kopen die gegarandeerd zal werken daar deze een zwakte misbruikt die nog niet bij de maker van de software gekend is.

Een zero day zal quasi gegarandeerd blijven werken tot de ontwikkelaars een nieuwe patch ervoor maken. Maar zelfs dan blijven zero days nuttig: het is niet omdat er een patch bestaat, dat de slachtoffers deze patch ook effectief reeds geïnstalleerd hebben. Veel bedrijven hebben nu erg strenge *patching policies* maar toch blijft het dweilen met de kraan open: er moet maar 1 systeem niet gepatcht zijn tegen de zero day van de aanvallers en het gaatje in de verdedigingslinie is gevonden en kan misbruikt worden.

De meeste fabrikanten van besturingssystemen (Apple, Microsoft, etc.) en veelgebruikte softwarepaketten (Adobe, Microsoft, etc.) brengen patches op welbepaalde dagen uit. Dit zorgt er bijvoorbeeld voor dat systeembeheerders hier rekening mee kunnen houden in hun wekelijkse planning. Voor gebruikers van zero days is dit ook nuttig: er ontstaat een zogenaamde **window of vulnerability**. Dit is de periode tussen het "ontdekken en in gebruik nemen van een zero day" en de moment waarop de patch tegen de zero day wordt verspreid. In dit *window* heeft de aanvaller vrij spel daar geen enkel systeem al kan gepatcht zijn. 

::: tip
Dit verklaart ook waarom bijvoorbeeld veel zero days die Microsoft Windows besturingssystemen als doelwit hebben verschijnen op maandag of dinsdag. Microsoft brengt niet-kritische patches uit op *patch tuesday*. Wil een zero days gebruiker dus maximaal profiteren (een grotere *window of vulnerability* hebben) dan neemt hij de zero day rond *patch tuesday* in gebruikt. Zo voorkomt hij dat z'n zero day al na enkele dagen, op *patch tuesday*, onbruikbaar wordt gemaakt.

Uiteraard houden fabrikanten zich niet aan hun vaste patch-momenten indien er een kritisch patch sneller moet verspreid worden.
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

## Wie zijn de aanvallers?

Waar moeten we ons tegen beschermen als cyberboswachter? Het zou verleidelijk zijn om ons te richten op 1 specifieke doelgroep en ons daar volledig tegen te wapenen. Helaas is het niet te voorspellen van wie je last zal hebben. Iedere groep aanvallers heeft eigen motivaties en middelen en het is niet altijd evident om tegen ieder iets te doen. Het kan natuurlijk geen kwaad om tenminste te weten met welke groepen je mogelijk zal geconfronteerd worden:

* Hackers
* Scriptkiddies
* Spionnen
* Werknemers
* Cybercriminelen
* Cyberterroristen
* Overheden (of door overheden gesponsord)

::: note
In een volgende editie van deze cursus zullen we deze groepen allemaal onder de microscoop leggen en bespreken.
:::

## Hoe vallen ze aan

Alhoewel voorgaande groepen van aanvallers allemaal erg specifieke redenen hebben, kunnen we toch hun aanvallen generaliseren in 5 duidelijke stappen:

1. Verkennen (*reconnaissance*).
2. Scannen.
3. Toegang verkrijgen.
4. Toegang bestendigen.
5. Sporen wissen.

::: note
Ook deze sectie zal grondiger ontleed worden in een volgende editie.
:::

## Hoe verdedigen

Wat en wie je wilt verdedigen in de cyberwereld kan erg gevarieerd zijn. Toch kunnen we alles herleiden tot 5 fundamentele principes die je best hanteert indien je een systeem van welke vorm ook wenst te beschermen tegen cyberstropers. Deze zijn:

* *Layering*: bouw je beveiliging zoals de lagen van een ui rondom je te beschermen data, gebruikers en services. Hoe meer lagen hoe beter, op voorwaarde dat ze natuurlijk verschillend zijn. Het nadeel van met meerdere lagen werken is evident: indien 1 laag om welke reden dan ook gecompromitteerd raakt, zijn er nog steeds de andere lagen die als verdediging werken. 
* *Limiting*: beperkt steeds maximaal wat iedereen binnen je systeem kan. Zorg ervoor dat gebruikers en services enkel die zaken kunnen doen waartoe ze recht hebben volgens hun rol. Geef dus niet iedereen admin-rechten, zet je firewall niet op *allow all*, etc.
* *Diversity*: Zorg ervoor dat je een verscheidenheid aan beveiligingen hebt. Op die manier voorkomen we, net als bij layering, dat het falen van één systeem niet je hele verdediging neerhaalt.
* *Obscurity*: dit is een subtiele. Ga niet aan de grote klok hangen hoe jouw verdediging is opgebouwd. Echter, let op met deze leuze. Obscurity wil niet zeggen dat je zelf een of ander vaag crypto-algoritme zelf gaat ontwikkelen en angstvallig gaat geheim houden. Gebruik standaarden en vertrouwde producten in je beveiliging. Eén van de eerste regels in security is "ga niet zelf het wiel heruitvinden"!
* *Simplicity*: *keep it simple, stupid*. Al het voorgaande lijkt te doen uitschijnen dat je complexe systemen moet bouwen die als het ware een doolhof voor de aanvallers maken. Op zich is daar iets van aan, maar zorg er wel voor dat je niet zelf in je doolhof verdwaalt en daardoor fouten introduceert zonder het te beseffen. Soms is *less more* en dat geldt ook bij beveiliging. 

::: tip

Soms zal je digitale stropers horen spreken over "Ik heb dat systeem gepwnd", uitgesproken als *gepowned*. De term "to pwn" is hackerslang voor "to own" om aan te geven dat je in een systeem bent binnengeraakt en nu controle over het systeem hebt. Volgens de [urbandictionary.com](https://www.urbandictionary.com/define.php?term=pwnd) is de enige reden dat de o een p werd het gevolg van een typfout, daar beide letter vlak naast elkaar staan op een toetsenbord.

:::