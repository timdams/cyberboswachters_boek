# Wifi security



Alhoewel dit hoofdstuk integraal na het crypto hoofdstuk komt, is het toch interessant om dit hoofdstuk geschrankt met het crypto hoofdstuk door te nemen als volgt:

* "Crypto" tot en met "Symmetric stream ciphers".
* "Wifi security" tot en met "WEP en waarom het faalde".
* De rest van "Crypto".
* De rest van "Wifi security"


## De problemen van Wifi

We kunnen draadloze netwerken, specifiek wifi-netwerken, niet meer uit ons leven inbeelden. De opkomst van de IEEE 802.11b standaard in 1999 veroorzaakte een kleine revolutie in de manier waarop bedrijven en privégebruikers konden werken. Plots kon je met een laptop van overal in het gebouw - en zelfs er buiten- op het netwerk geraken. Die vrijheid voor de gebruikers betekende wel een nachtmerrie voor de cyberboswachters. Een netwerkkabel heeft een intrinsieke extra beveiliging: enkel daar waar de kabel ligt kunnen gebruikers aan het netwerk geraken. Zolang je dus geen netwerkkabel bijvoorbeeld naar de publieke parking brengt kan niemand van daar illegaal het netwerk benaderen. Met wifi leek het alsof plotseling het hele netwerk in een straal van tientallen meters rond het gebouw beschikbaar was, met alle gevolgen van dien.

![](wifi/afstand.jpg){ width=60% }

Al gauw werd een nieuwe sport uitgevonden door hobbyist hackers en professionele cybercriminelen: **wardriving**. De idee is eenvoudig: rijdt rond in de stad en laat de laptop naast je in de auto scannen naar alle netwerken, met extra aandacht voor die netwerken die geen of zwakke beveiliging hadden.

::: note

![](wifi/wargames.png){ width=10% }

De term wardriving komt van de term *wardialing* die op zijn beurt gebaseerd is op de  klassieke cyber-cult film "Wargames" uit 1983. Voor de geschiedkundigen onder ons, wardialing was het opbellen van willekeurige telefoonnummers met je modem in de hoop een zogenaamd *bulletin board system* oftewel **BBS** (een pre-internet forum zeg maar) te vinden.
:::

Draadloze netwerken die gevonden worden hebben dan ook een schare aan problemen:

* **Eavesdropping**: iedereen kan "meeluisteren" wat er door de lucht vliegt. Dit heb je niet met een bedrade kabel. 
* **Invasion**: je kan eenvoudig verbinden met het netwerk indien er geen beveiliging voorzien werd. Iets dat je dus bij een bedraad netwerk enkel kunt als je fysiek toegang hebt tot een netwerkkabel.
* **Man-in-the-middle aanvallen**: hier gaan we zo meteen dieper op in.
* **Backdoor**: een veelvoorkomend probleem zijn zogenaamde **rogue access points** die worden bijgeplaatst op het netwerk door goedbedoelde werknemers die zou het het bereik van het netwerk wat willen uitbreiden. Vaak zijn echter de beveilingsinstellingen van zo'n (meestal goedkoop) access point niet zo sterk als die van het bedrijf. Bijgevolg is dit de ideale backdoor voor malafide gebruikers die het netwerk aan het surveileren zijn. Wanneer ze een netwerkscan doen zullen ze tientalle goed beveiligde access points zien en 1 zwak beveiligd.

![Een rogue access point is de ideale manier om binnen te geraken voor hacker.](wifi/rogue.png){ width=70% }

* **Denial-of-service op fysiek niveau**: om een gebruiker toegang tot een bedraad netwerk te ontzeggen op fysiek niveau dien je de kabel door te knippen. Bij wifi is dit nog eenvoudiger: de "kabel" bij wifi zijn de frequentiebanden in de lucht waarbinnen de apparaten mogen werken (circa 2.4 Ghz bij de oudere wifi apparaten, nu meestal rond de 5 Ghz band). De wifi-apparaten kunnen enkel met elkaar communiceren indien zij een signaal naar elkaar over die frequentieband kunnen sturen op een moment dat niemand anders in de buurt die band gebruikt (zie note hierna). Als een malafide gebruiker dus die frequentieband vult met andere signalen, dan zullen de legale gebruikers nooit iets kunnen uitsturen. Wil je dus een wifi netwerk *Dos'n*, koop dan een signaalgenerator die op de juiste frequentieband de nodige ruist uitzend en klaar is kees.

::: note
Bedrade netwerk apparaten werken volgens het CSMA/CD (Carrier Sense Multiple Access / Collision Detection) om met elkaar over de draad te communiceren, hierbij detecteren ze wanneer er 'botsingen' tussen pakketen voordoen en de informatie dus opnieuw moet uitgestuurd worden. Bij draadloze netwerken is het echter onmogelijk om *botsingen in de lucht* te detecteren, daarom werken ze met een variant: **CSMA/CA** , oftewel CSMA/ **Collision Avoidance**. Een wifi-apparaat dat iets wil uitsturen zal eerst controleren of de frequentieband waarop ze werken vrij is, enkel dan zal er vervolgens een pakketje de lucht worden ingestuurd.
:::

::: tip
Sommige gebruikers schakelen het broadcasten van hun netwerknaam (het zogenaamde **SSID**) uit in de hoop dat zo dat buren, voorbijgangers en wardrivers hun netwerk niet kunnen zien. Helaas is dit zogenaamde *snake's oil*: het geeft een vals gevoel van veiligheid. Je kan weliswaar SSID-broadcasting uitzetten (dit is een pakketje dat je access point elke paar seconden uitstuurt om aan iedereen die luistert te zeggen *"Hallo, hier is het netwerk met naam X, en dit zijn de parameters die je nodig hebt om met mij te verbinden"*) maar het SSID wordt ook in een hoop andere pakketjes de lucht in gestuurd. Een beetje wifi hacker kan dus het SSID ogenblikkelijk uit de lucht plukken, ongeacht dat broadcasting werd uitgeschakeld of niet.
:::

::: note
Om de huidige, en betere, beveiliging van wifi te appreciëren gaan we wederom even terug in de tijd om te kijken hoe de originele IEEE wifi standaard de beveiliging beschreef. Het zal een ietwat horror-achtige tocht worden waarin we gaan ontdekken dat enkele stevige hiaten ervoor gezorgd hebben dat illegale toegang tot bijna ieder wifi netwerk rond de eeuwwisseling binnen enkele minuten kon gebeuren. Lees verder en huiver mee.

:::
### Onbeveiligde managementframes 

Veel keuzes die in de IEEE standaard werden gemaakt zijn vermoedelijk het gevolg dat men leentje buur is gaan spelen bij de reeds bestaande IEEE standaarden voor bedrade netwerken. Echter, bij bedrade netwerken had je niet de inherente onveilige omgeving van het draadloze aspect, waardoor op gebied van beveiliging hier weinig tot geen aandacht aan werd besteed. 

Management frames in wifi zijn frames die ervoor zorgen dat alle aanwezigen op het netwerk op een ordentelijke manier met elkaar kunnen communiceren. Deze frames zorgen bijvoorbeeld voor:

* Om een client verbinding te laten maken met een netwerk.
* Om SSIDs te broadcasten.
* Clients de opdracht te geven het netwerk te verlaten.
* Om te verbinden met een ander access point van hetzelfde netwerk (*handover*).

Net zoals bij bedrade netwerken, koos men bij de IEEE wifi standaard om deze managementframes **zonder enige vorm van beveiliging** te gebruiken (er werd geen *CIA* voorzien). Dit zorgde ervoor dat niet legale gebruikers zelfs management frames konden uitsturen op een netwerk, zonder dat de ontvangers ervan konden controleren of de bron wel een legaal access point of client was.

Dit resulteerde in onder andere volgende scenario's:

* Een hacker kan legale gebruikers DoS'n door constant zogenaamde *disassociation* naar hen te sturen. Dit frame, gebruikt door access points, geeft aan clients de opdracht dat ze het netwerk moeten verlaten. De hacker kan zo'n frame uitsturen en daarbij het "source" veld instellen op het MAC-adres van het access points. Dit spoofing kan ongecontroleerd, waardoor legale gebruikers dit frame altijd zullen aanvaarden én vervolgens uitvoeren: de gebruiker kan niet meer verbinden met het netwerk zolang de disassociation frames blijven verstuurd worden (**disassociation flooding**)
* **Identity spoofing** was ook eenvoudig daar de hacker eender welk veld in de frames kan aanpassen. Van zodra hij een legale gebruiker met voorgaande techniek van het netwerk heeft geschopt, kan hij vervolgens zichzelf voordoen als deze gebruiker. Hiervoor moet hij gewoon het MAC-adres spoofing van de legale gebruikers tijdens de communicatie met het access point.

![](wifi/spoofwifi.png){ width=60% }

* En *last but not least* laten de onbeveiligde management frames toe dat we eenvoudig een  access point kunt nabootsen (**impersonation**). Vervolgens kunnen we een  **man-in-the-middle aanval** uitvoeren daar een hacker zich kan plaatsen tussen de gebruiker en het internet en zo informatie kan ontfutselen. 
  

![](wifi/mitmwifi.png){ width=60% }

::: tip
De linux tool *AirSnarf* laat toe om fake hotspots (publiek wifi netwerk) op te zetten. Hierbij maakt het gebruikt van de onbeveiligde management frames. Een scenario in België dat gegarandeerd success heeft (vanuit het standpunt van de hacker) is een fake Telenet Wifree hotspot op te zetten. Hierbij zal je eerst de login pagina van Telenet  Wifree kopieren en via een lokale webserver aanbieden aan de gebruikers die op jouw access point met de naam "Telenet Wi-Free" verbinden. Je kan nu van iedere gebruiker de gebruikersnaam en paswoord stelen telkens deze die informatie op jouw fake pagina invoert.
:::




## De 802.11 standaard qua beveiliging

De originele "ANSI/IEEE Std. 802.11" die de wifi specificaties beschrijft werd geschreven in 1999. Het had als doel *"to develop a medium access control (MAC) and physical layer (PHY) specification for wireless connectivity for fixed, portable, and moving station within a local area."* Hoofdstuk 8 van deze standaard had als titel "Authentication and privacy" en was maar 10 miezerige pagina's lang, in vergelijking de totale grootte van het document (528 pagina's) was dit misschien wel een voorbode hoe weinig aandacht er aan beveiliging zou worden gegeven. 

::: tip
Vanaf nu zullen we geregeld het woord access point afkorten naar **AP**. In deze tekst kan een AP zowel een eenvoudig access point zijn als een complexe draadloze router of modem.
:::

Voor we dat kleine hoofdstuk gaan openbreken -en ontdekken hoe WEP in de eerste generatie wifi-apparaten een navenante beveiliging aanbood- zullen we eerst bekijken hoe gebruikers met een draadloos netwerk effectief kunnen verbinden. Zoals reeds vermeld gebeurt dit gebruik makende van de onbeveiligde management frames.

### Verbinden met een netwerk

Voor aanvallers actieve aanvallen kunnen starten op een netwerk dienen ze verbinding te maken met het netwerk. Dit proces bestaat uit 4 stappen die doorloppen moeten worden voor legale en illegale gebruiker effectief gebruik kunnen maken van het netwerk en *higher-layer* datatraffiek kunnen verwerken.

1.	**Scannen**: Passief of actief zoeken naar de netwerken in de buurt.
2.	**Verbinden (*joining*)**: Kiezen met welk netwerk zal verbonden worden.
3.	**Authenticatie**: Bewijzen dat de gebruiker toegang heeft tot het netwerk. 
4.	**Associatie (*association*)**: Bijhouden met welk AP de gebruiker verbonden is van het netwerk. Pas vanaf deze stap kan het netwerk gebruikt en misbruikt worden.


#### Scannen

In deze stap zal de client ontdekken welke netwerk er in de omgeving zijn. Oftewel zoekt de client specifiek naar een netwerk, oftewel wil hij gewoon een oplijsting van alle aanwezige netwerken. Ieder draadloze netwerk heeft een netwerknaam, de **SSID** (*service set identifier*) die bestaat uit een 32 byte ASCII character string, en zal deze op geregeld tijdstip broadcasten voor iedereen die hier nood aan heeft (we merkten al eerder op dat dit broadcasten kan uitgezet worden, maar dat dat een vals gevoel van veiligheid zal geven). Naast het SSID zal ieder netwerk ook meerdere fysische parameters uitsturen die de client in de volgende stap zal nodig hebben. 

Er zijn meerdere kanalen beschikbaar in het spectrum waar binnen een netwerk mag werken. De client zal bij het scannen daarom steeds enkele milliseconden op een bepaald kanaal luisteren om potentiële SSID boradcasts op te vangen, om dan naar het volgende kanaal hetzelfde te doen. 

#### Verbinden

Wanneer de gebruiker gekozen heeft met welk SSID er moet verbonden worden zal in deze stap de wifi-netwerkkaart ingesteld worden op de juiste fysische parameters (frequentie kanaal, snelheid, etc.) zodat als het ware AP en client synchroon lopen (en dus op de juiste moment iets tegen elkaar kunnen zeggen zonder elkaars signalen te storen). In de scan-stap keken we als het waren goed rond, in deze stap richten we onze blik nu op een bepaald netwerk.

#### Authenticatie

::: note
Deze en de voorgaande stappen gebeurt volledig automatisch indien de gebruiker eerder heeft geopteerd om automatisch met een netwerk te verbinden.
:::

In een bedraad netwerk zit authenticatie impliciet vervat in het fysisch aspect: wanneer je de kabel in je laptop kan steken dan is de kans groot dat je een legale gebruiker bent in het gebouw en dus is er geen extra authenticatie nodig (kort door de bocht gezien, weliswaar). Dat is niet zo met draadloze netwerken die voorbije de grenzen van het gebouw hun signaal uitsturen. Er is daarom een extra stap nodig voor we het netwerk kunnen betreden.

In de 802.11 standaard staan 2 mogelijke authenticatie-methoden beschreven (die we verderop zullen toelichten):

* **Open-system authentication** 
* **Shared-key authentication** 

Origineel was deze authenticatie een enkelrichtingsstraat. Enkel de client dient zich te authenticeren. Hierdoor bestaat dus de kans dat de gebruiker verbind met een rogue of fake AP. 

::: tip
Naast voorgaande 2 methoden is er nog een derde die niet in de standaard staat beschreven maar die wel door veel fabrikanten werd aangeboden in hun wifi-apparaten:

* **MAC Address Authentication gebruik makend van een MAC-ACL**: hierbij kan de beheerder van een AP een *access control list* (ACL) aanleggen waarin alle MAC-adressen staan van toegelaten apparaten. 
:::


**Open-system authentication**

Deze vorm van authenticatie werd eerst gezien als de "er is geen authenticatie nodig op dit netwerk"-versie van authenticatie. Echter, de problemen met WEP op gebied van beveiliging hebben er voor gezorgd dat sinds de WEP-opvolger WPA, deze vorm de veiligere van de twee modes is. 

In netwerken met deze modus om te authenticeren worden er exact 2 frames tussen client en AP uitgewisseld:

1. Eerst vraagt de de client aan het AP toegang.
2. Vervolgens stuurt het AP naar de client een "Welkom" frame.

Meer gebeurt er niet in deze modus.

Als er in dit soort netwerk geen encryptie wordt toegepast dan kan dus eender welk apparaat in de omgeving verbinding maken met dit netwerk. Als er wél WEP encryptie wordt gebruikt dan zal het bezit van de WEP-sleutel als een soort toegangscontrole werken: je kan namelijk wel authenticeren (daar het AP iedereen toelaat in deze authenticatie-fase) maar vervolgens kan je geen data lezen en versturen tenzij je een geldige WEP-sleutel hebt.

**Shared-key authentication**

In deze modus moet je bewijzen dat je in het bezit bent van een geldige WEP-sleutel voor dit netwerk. Het AP zal daarom een **challenge-response** authenticatie opstarten bestaande uit volgende sequentie van frames:

1. Het AP maakt een random string aan, de *challenge*, en stuurt deze in plaintext naar de client.
2. De client encrypteert deze string met z'n WEP-sleutel en stuurt dit terug naar het AP (de *response*).
3. Het AP zal nu de response decrypteren met z'n eigen WEP-sleutel en het resultaat vergelijken met de challenge-string. Als beide gelijk zijn weet het AP dat de client een geldige WEP-sleutel heeft en dus toegelaten mag worden op het netwerk.

![](wifi/sharedkey.png)

::: tip
Merk op dat stap 1 en 2 ervoor zorgen dat aanvallers die deze *handshake* sniffen 2 interessante frames zien passeren. Eerst zien ze een plaintext, ogenblikkelijk gevolgd door de bijhorende ciphertext ervan (indien ze een gebruiker sniffen met een geldige WEP-sleutel). Dit zal interessante informatie blijken verderop in dit horror-verhaal waarin we zullen tonen waarom WEP niet zo veilig bleek te zijn als gehoopt.
:::

#### Associatie

Na een succesvolle authenticatie krijgt de client een *association ID* toegewezen. Dit ID gebruikt het netwerk om te weten waar in het netwerk de client zich bevind. Veel draadloze netwerken bestaan namelijk uit meerdere AP's en via dit id weet het netwerk met welk AP de client momenteel verbonden is en zal alle data voor de client dan naar dat AP sturen.

Vanaf dit punt kan de gebruiker dus de bronnen van het netwerk beginnen gebruiken en wordt het tijd om deze communicatie te beveiligen (tenzij het om een publieke hotspot gaat waar iedereen alles van elkaar kan zien). 

### WEP

Om potentiële aanvallers ervan te weerhouden dat ze traffiek kunnen sniffen (of zelf op het netewrk zetten) voorziet de 802.11 vanaf de associatie de optie om encryptie te voorzien. Dit gebeurt aan de hand van **WEP**, wat staat voor *wired equivalent privacy*. Een naam die veel beloofde maar niet zo goed was: de idee was dat WEP even veilig zou zijn als een bedraad netwerk. 

::: note

WEP is optioneel en bevindt zich vlak voor frames naar de fysische laag (*PHY*) worden gestuurd die de frames "in de lucht" zal sturen. Het IEEE werkt met lagen die ongeveer overeen komen met de OSI-lagen maar met iets andere namen. In volgende figuur zie je waar WEP, optioneel, zich bevindt ten opzichte van de onderliggen en bovenliggende lagen.

![](wifi/osimac.png){ width=60% }

:::


#### Hoe werkt WEP?

![WEP in z'n geheel](wifi/wepencr.png)

Het hart van WEP is het RC4-algoritme dat we reeds zagen in het crypto-hoofdstuk. De WEP-sleutel zal dienst doen als de seed voor de keystream generatie. Deze keystream zal op zijn beurt ge-XOR'd worden met het te encrypteren frame. 


![Integrity check](wifi/crc.png) 


Confidentiality en integriteit worden tegelijkertijd afgehandeld in WEP. Vlak voor dat het frame via de XOR-operatie wordt geëncrypteerd zal het frame eerst door een *integrity check algoritme* gestuurd worden. Deze integrity check gebeurt met behulp van CRC-32, een oude getrouwe op dit gebied. CRC-32 zal een hash genereren die de ontvanger bij ontvangst kan gebruiken om te zien of het frame werd aangepast na verzenden (bewust door een aanvaller, of door bijvoorbeeld ruis in het netwerk). Deze hash, de **Integrity Check VALUE (ICV**), zal mee worden geëncrypteerd door RC4 voor hij verstuurd wordt. Op deze manier kunnen ordinaire aanvallers het frame niet aanpassen zonder dat ze daarmee ook de ICV ongeldig maken.


Finaal verkrijgen we dus volgende WEP-frame dat kan verstuurd worden:

![WEP frame layout](wifi/wepframe.png){ width=60% }

::: note 
In de originele standaard zat de mogelijkheid om tot 4 WEP-sleutels in een netwerk te gebruiken. Via de *keyid* kon een client of AP dan aangeven met welk van de geïnstalleerde sleutels een frame werd geëncrypteerd. 
:::

#### Sleutellengte en de IV

Origineel ondersteunde WEP enkel 40-bit WEP sleutels. Ondertussen is dat opgetrokken maar toen de standaard werd geschreven besefte men al dat er sowieso een probleem met de sleutel zou zijn als die zo zou gebruikt worden: ieder frame dat met dezelfde sleutel wordt geëncrypteerd zal dezelfde keystream hebben gebruikt. Dat was natuurlijk geen optie. Om die reden werd gekozen om te werken met een **initialisatie vector (IV)** van 24-bit. Deze IV werd mee als seed aan RC4 gegeven. Door ieder frame een andere IV te kiezen zorgden men er zo voor dat ieder frame een andere keystream gebruikte (WEP-sleutel+IV werd de nieuwe seed per frame).In de originele standaard werd echter niet beschreven hoe deze IV moest veranderen wat nefaste gevolgen zal hebben verderop. 

Omdat ook de ontvanger dezelfde keystream moet kunnen genereren tijdens decryptie is het natuurlijk belangrijk dat de IV ook bij de ontvanger gekend is. De enige manier om dit op te lossen is door de IV mee in de header van het frame te plaatsen en door te sturen. Uiteraard moet deze IV als plaintext door het leven gaan. 

::: tip
Dit concept van een sleutel verlengen met een arbitrair getal heet *salting* en zullen we in het hoofdstuk omtrent paswoorden en authenticatie verderop in de cursus nog zien terugkomen.
:::

Finaal krijgen we dus de volgende werking, encryptie en decryptie, als volgt:

![WEP encryptie](wifi/wepfull.png) 

![WEP decryptie](wifi/wepdec.png) 

##  How WEP failed

Het leek een verbonden vat: hoe populairde wifi werd over de hele wereld, hoe meer papers er verschenen die fouten identificeerden in WEP. Al vrij snel werd duidelijk dat WEP hoegenaamd géén CIA kon aanbieden. De meeste fouten die werden gevonden kunnen gegroepeerd worden in volgende 4 zaken:

1. Het **RC4 algorithme** is helemaal niet gemaakt voor een datagramnetwerk zoals wifi.
2. De manier waarop de **IV** in de standaard is beschreven is ontoerijkend en verhoogd de kans op foute implementaties door fabrikanten.
3. **CRC-32** kan omzeilt worden en kan dus geen integriteit van frames garanderen.
4. Er is **geen sleutel-management systeem**. 


Er is echter nog een vijfde fout die de voorgaande 4 als het ware nog versterkt:

5. Er is geen **replay protection**.

Hierdoor heeft de aanvaller dus vrij spel en kan hij draadloze netwerk als een soort experimenteertuin gebruiken en duizenden pakketjes te pas en te pas onpas heruitzenden. We zullen nu de eerste 4 grote problemen beschrijven. De *replay proection* behandelen we niet apart maar zullen we geregeld bij de andere problemen zien opduiken.

#### Probleem 1: RC4

De meeste problemen met WEP komen van een verkeerd gebruik van het RC4 algoritme. RC4 wordt in erg veel moderne beveiligingsappaten toegepast omdat het een sterk én efficient algoritme is (het verbruikt weinig energie omdat er geen dure vermenigvuldiginsoperaties in voorkomen). Echter, stream ciphers in het algemeen, RC4 specifiek, zijn eigenlijk geen goede keuze voor datagram netwerken waarin transmissies onbetrouwbaar zijn. 

In een datagram netwerk worden pakketjes vaak opnieuw verstuurd wanneer er een fout optrad en de ontvanger voor een *retransmission* vraagt (dit gebeurt voor ongeveer 20% van de verstuurde data). Dit is volledig normaal gedrag in zowel bedrade als draadloze netwerken, echter voor een stream cipher is dit nefast. Specifiek 2 eigenschappen van stream ciphers (en dus ook RC4) zorgen voor stevige gebreken in het WEP-protocol inzake confidentiality:

1. RC4 heeft **geen *random access* mogelijkheden**.
2. RC4 staat **geen sleutel hergebruik** toe.

Laten we die 2 eigenschappen eens bekijken en welke cascade van problemen ze met zich meebrengen.

##### RC4 heeft geen random access mogelijkheden

Deze eigenschap is niet zo zeer een probleem vanuit beveiligingsperspectief, maar wel vanuit performantieperspectief. RC4 had eigenlijk nooit gekozen mogen worden door het IEEE om in WEP gebruikt te worden. Het verlies van één bit van de datastroom zalervoor zorgen dat alle bits erna met RC4 ook verloren zijn, daar we met een stream cipher werken waarbij de synchronisatie van de stroom bits tussen verzender (encryptie) en ontvanger (decryptie) gelijk moet blijven. Bij het minste dataverlies moeten beide zijden hun *RC4-motortje* resetten en opnieuw beginnen.

AES bijvoorbeeld heeft wél die random access mogelijkheid: hierdoor kan steeds herbegonnen worden aan het punt van dataverlies en niet helemaal opnieuw, wat natuurlijk veel efficiënter is (daar we werken in een datagram omgeving waar bitverlies bijna continue voorkomt). 


##### RC4 staat geen sleutel hergebruik toe

Stream ciphers hebben een tweede erg belangrijke eigenschappen: **het is uiterst onveilig om een zelfde sleutel twee keer te gebruiken!**

Stel dat je volgende 2 plaintext byte squenties hebt:  $p_1,p_2,p_3,…$ en $q_1,q_2,q_3,…$. Beide worden met dezelfde keystream $k_1,k_2,k_3,…$ geëncrypteerd. Dit geeft ons vervolgens volgende 2 ciphertext sequenties:

$p_1 \oplus k_1, p_2 \oplus k_2, p_3 \oplus k_3$ 

$q_1 \oplus k_1, q_2 \oplus k_2, q_3 \oplus k_3$

Als we nu veronderstellen dat een aanvaller deze 2 ciphertexts capteert, wat dan volgt is een grove schending van de confidentialiteit die RC4 zou moeten garanderen: 

$(p_i \oplus k_i) \oplus (q_i \oplus k_i) = p_i \oplus q_i$

Of in andere woorden, wanneer we de beide ciphertexts met elkaar XOR'n krijgen we een sequentie die **niet afhankelijk is van de gebruikte sleutel**! Een stevige hoeveelheid informatie over beide plaintext wordt zo onthult. Als 1 van beide plaintexts gekend is dan volstaat een eenvoudige XOR-operatie om ook de andere plaintext te kunnen zonder dat hierbij de gebruikte sleutel moet gekend zijn. Deze fout zullen we verderop misbruiken.

Kortom, stream ciphers zijn niet veilig in een datagram omgeving indien er geen vorm van sleutelmanagement bestaat die de sleutels kan vervangen voor ze herbruikt worden.  WEP probeert dit gebrek aan sleutelmanagement te omzeilen door met een IV te werken zodat er geen collisions zoals eerder beschreven kunnen optreden...maar ook dat zal een resem problemen met zich meebrengen. 

#### Problem 2: IV

Het IEEE had dus weet van voorgaand probleem met RC4 en introduceerde daarom het IV. Vanuit cryptografisch standpunt is dit een solide oplossing. Echter, door het gebrek aan replay protection krijgen we helaas een hoop fouten met de IV.

##### De IV veroorzaakt weak keys

In een paper van 2001 door Scott Fluhrer, Itsik Mantin en Adi Shamir werd aangetoond dat het key scheduling algoritme (KSA) van RC4 een hiaat bevat: 

1. Wanneer een deel van de gebruikte RC4 keystream gekend is dan kan een groep *RC4 weak keys* gevonden worden. 
2. Wanneer deze weak keys gebruikt worden om een keystream te genereren dan zal er informatie van de gebruikte WEP sleutel in deze keystream gelekt worden. 

**Of anders gezegd: sommige IV's zorgen voor een sleutel-lekkage naar de keystream, wat natuurlijk nefast is voor eender welk cryptografisch cipher.**

Een gevolg van die weak keys is dat, indien de eerste 2 bytes van genoeg keystreams (ongeveer 60) geweten is, men de gebruikte WEP sleutel kan achterhalen door middel van een FMS aanval (de afkorting staat voor de eerste letters van de 3 onderzoekers uit de paper).

De FMS aanval werkt indien:

1. We ongeveer 60 keystreams kunnen capteren waarvan geweten is dat ze *weak* zijn.
2. We de eerste 2 bytes van de plaintext van de bijhorende frames kennen die met deze weak keystreams zijn geencrypteerd.

Dat tweede is geen probleem, met dank aan de netwerkspecificaties:  de payload van een met WEP geëncrypteerd pakket bevat de LLC header (de header van de logical link layer). Volgens de standaard (RFC 2684) moeten *"IP datagram pakketten altijd zichzelf in de header identificeren via de SNAP header"* En laten de eerste 2 bytes van die header toch wel niet altijd starten met 0xAA. Kortom, quasi alle frames die over een WEP-netwerk vliegen zullen altijd met de hexadecimale waarde AA starten. Nu volstaat het om de bijhorende keystream te achterhalen aangezien we de plaintext kennen, kunnen we ook de eerste 2 bytes van de keystream kennen daar we weten dat:

$c_i = k_i \oplus p_i$

(waarbij $p_i$ AA is)

En dus:

$c_i = k_i \oplus p_i \Leftrightarrow k_i = c_i \oplus p_i$

We hebben zo ook deel 1 van de FMS in onze handen en kunnen nu het algoritme de gebruikte WEP-sleutel laten berekenen (de manier waarop dat gebeurt zou ons te ver brengen)/

::: tip
De FMS aanval is geïmplmenteerd in volgende 2 erg populaire Linux tools: Airsnort & WEPCrack. Beide kunnen dus gebruikt worden om de WEP-sleutel van een draadloos netwerk te achterhalen.
:::

##### IV collisions treden op

Op zich is de FMS aanval al dramatisch, maar helaas stopt het hier niet. Doordat de IV maar 24 bit groot is treden er veel sneller collisions op dan intuïtief wordt verwacht. Van zodra 2 pakketjes met dezelfde IV zijn verstuurd treedt er een collision op, en die zijn erg interessant voor aanvallers. Pakketjes met dezelfde IV zijn pakketjes waarvan de payload met dezelfde keystream werd geëncrypteerd.

Een 24-bit IV kan $2^{24}$ oftewel 16 777 216 mogelijke waarden hebben. Een kleine berekening toont hoe snel collisions optreden:


*Gegeven: een eerste generatie AP die aan een miezerige 11 Mbps werkt en cotinue 1.500-byte pakketjes in de lucht stuur:*

* $\frac{11\;Mbps}{(1500\; bytes/pakket)* 8\;bits/byte} =  916.67\;pakketjes/seconde$
* $\frac{16.777.216\;IVs}{916.67\;pakketjes/seconde} \approx  18302 \;seconden$
 
Dat wil dus zeggen dat na ongeveer 5uur alle IV's opgebruikt zijn en er dan ten laatste collisions optreden.

Deze fout kunnen aanvallers op 2 manieren misbruiken: met een passieve of met een actieve aanval.

**Passieve IV aanval**

Een aanvaller kan passief meeluisteren (*eavesdropping*) en stilletjes alle traffiek onderscheppen tot er een IV collision optreedt. Door twee pakketjes met eenzelfde IV te XOR'n verkrijgt de aanvaller een pakket dat bestaat uit de XOR van beide plaintext'n van de gecapteerde pakketten. Als dus één van beide plaintexten gekend is, is de inhoud van het andere pakket ook gekend.

IP traffiek is vaak erg voorspelbaar en bevat aardig wat redundantie (om fouten op te vangen). Hierdoor wordt het makkelijker voor een aanvaller om via cryptanalysis te achterhalen wat de inhoud, of een deel, van het pakket bevat. Een voorbeeld hiervan toonden we bij de FMS aanval waarbij steeds de LLC header gekend was van de meeste pakketten.

Omdat colissions redelijk snel optreden (vergeet niet dat het voorbeeld hierboven maar sprak over één client en één AP. Als er dus meerdere clients acitef zijn in een netwerk treden colissions véél sneller op) is het voor een aanvaller dus maar een kwestie van lang genoeg te sniffen om zo een grote hoeveelheid pakketten met gelijke IV's op te vangen, waardoor de cryptanalys ongelooflijk vereenvoudigd wordt.

::: note
In al deze voorbeelden gaan we er vanuit dat de gebruiker geen encryptie toepast op de hogere lagen waar z'n data vandaan komt. Uiteraard wordt cryptanalyse een pak moeilijker als de payload van gecapteerde pakketten geëncrypteerd blijkt te zijn.
:::


**Actieve IV aanval**

De passieve aanval heeft als nadeel dat we als aanvaller:

1. moeten wachten op colissions, en dus bijgevolg op traffiek over het netwerk.
2. we enkel door weloverwogen gokken (cryptanalyse) kunnen proberen te weten te komen wat de originele plaintext juist is.

Beide problemen kunnen we als aanvaller echter te niet doen door een actieve rol te gaan spelen. Doordat een AP braaf alle traffiek encrypteerdt dat het van het bedrade netwerk krijgt om naar een client te sturen, is het voor een aanvaller een kwestie van "gekende" plaintext van buitenuit naar het slachtoffer te sturen. Als volgt:

1. Een gekende plaintext boodschap (bijvoorbeeld een emailbericht of ping) wordt naar het AP gestuurd (via het internet bijvoorbeeld), dat vervolgens door de aanvaller in het oog wordt gehouden. Noot: als de aanvaller enkel het draadloze netwerk ter beschikking heeft (en niet het internet) dan zal een bitflip-aanval moeten gebruikt worden, wat we verderop zullen uitleggen.
2. De aanvaller blijft sniffen tot het de ciphertext ziet passeren waarin (vermoedelijk) z'n gestuurde plaintext zit.
3. Vervolgens kan de aanvaller een keystream te pakken krijgen door z'n plaintext te XOR'n met de gecapteerde ciperhtext: $c_i = k_i \oplus p_i \Leftrightarrow k_i = c_i \oplus p_i$.


![](wifi/inject.png)

##### Keystreams groeien

Wanneer een aanvaller met voorgaande IV colissions keystreams kan capteren kan hij in principe data op het netwerk beginnen plaatsen (aangezien het netwerk ervan uitgaat dat het gebruiken van geldige keystreams, wil zeggen dat de gebruiker geauthenticeerd is omdat hij de bijhorende WEP-sleutel heeft). De aanvaller kan nu plaintext XOR'n met deze gevonden keystream en op het netwerk zetten. Echter, hij is beperkt tot pakketten die even lang zijn als de keystream die gevangen werd. Het zou véél nuttiger zijn als de aanvaller als het ware een bibliotheekje heeft van geldige keystreams van allerlei lengtes.

Omdat er geen replay protection aanwezig is, kan de aanvaller heel eenvoudig z'n gecapteerde keystreams doen *groeien* en zo byte per byte een langere keystream genereren. Dit gaat als volgt te werk:

1. De aanvaller maakt een plaintext pakketje aan dat 1 byte langer is dan de keytstream die hij al heeft. Het ping-commando (ICMP) kan je met de "-l" optie bijvoorbeeld een ping van eender welke bytesize laten genereren. Het voordeel van het ping-commando gebruiken is ook dat we exact weten wat voor response er kan verwacht worden.
2.	De aanvaller plakt nu 1 byte achter de gecapteerde keystream. Hij kiest hierbij een willekeurige waarde en heeft dus 1 kans op 256 om de juiste te kiezen. 
3. De aanvaller XOR'r deze keystream met het commando uit stap 1 en stuurt dit op het netwerk. 
4. Indien de aanvaller in stap 2 de juiste byte gekozen heeft dan zal er een reactie op de ping volgen (daar het pakket werd gedecrypteerd door het AP en dan hoger in de OSI-stack door het netwerk werd gestuurd). Als de keystream fout is zal er geen reactie komen daar het AP het pakketje als foutief heeft weggegooid en dus heeft genegeerd.
5. Als een verkeerde byte werd gekozen in stap 2 dan zal de gebruiker dit proces onieuw starten en nu een andere byte-waarde kiezen. Hij zal dit blijven herhalen tot hij in stap 4 reactie krijgt en dus weet dat hij nu z'n keystream met succes heeft doen groeien met 1 byte.

![](wifi/grow.png)

##### IV selectie 

De vierde fout met de Initialisatie Vectoren is de manier waarop de selectie ervan moet gebeuren in de hardware. De 802.11 gaf enkel aan dat het IV *"geregeld moest geupdate"* worden. Dat is uiteraard te vaag en heeft ervoor gezorgd dat fabrikanten zelf moesten bepalen welke IV selectie strategie ze in hun hardware zouden implementeren. Hierdoor waren er 3 strategiën die hun weg in de verschillende apparaten vonden:

* **Vast IV**: Sommige fabrikanten hadden geen flauw benul wat het doel van de IV was vanuit cryptografisch standpunt en kozen daarom zelfs gewoon om alle pakketten steeds met het zelfde IV te versturen. 
* **Willekeurig IV**: Andere fabrikanten verkozen het om hun hardware bij ieder pakketje een willekeurig IV te laten selecteren. Alhoewel dit uiteraard veel veiliger is dan een "vaste IV"-strategie, treden er toch veel sneller collisions op dan verwacht. Dit valt te verklaren door het zogenaamde **verjaardagenparadox** (zie kader verder) dat verklaart waarom er reeds 50% kans op een colissions is na 4823 pakketjes. Dat wil dus zeggen dat al na enkele seconden er meestal collisions optreden.
* **Incrementele IV**: In deze strategie wordt een circulaire teller gebruikt waarbij het IV telkens met 1 wordt verhoogd wanneer een pakket moet worden verstuurd. Meestal begint deze teller op een vaste waarde. Dit zal er dan ook voor zorgen dat er een collisions optreedt van zodra een tweede apparaat zich op het netwerk begeeft en dus begint uit te zenden met het IV gelijk aan het IV van het allereerste pakketje dat het eerste apparaat gebruikte.

Kortom, een 24-bit *salt* is véél te klein in een omgeving met erg hoge data-rates zoals een draadloos netwerk. Dit probleem zou nog beperkt kunnen worden indien de originele WEP geregeld sleutels kon verversen, maar door het gebrek aan enig key management was dat dus uit den boze (want herinner je: de enige reden dat we IV's nodig hadden was omdat anders steeds dezelfde WEP-sleutel als seed werd gebruikt en dus alle keystreams gelijk zouden zijn. Door geregeld een andere sleutel te gebruiken zou onze kleine IV-lengte minder precair zijn, als we maar tijdig de sleutels verversen).

::: note
Volgende tekst uit Wikipedia legt de **verjaardagenparadox** uit: "De verjaardagenparadox is een paradox uit de kansrekening, die een resultaat toont dat tegen de verwachting ingaat. Het gaat om de vraag hoe groot de kans is dat in een groep willekeurig gekozen mensen er (minstens) twee dezelfde verjaardag hebben. Het blijkt dat, onder enkele lichte veronderstellingen, deze kans al meer dan 50% is voor een groep van maar 23 mensen. Bij 57 mensen is de kans zelfs meer dan 99%."

Beeld je nu in dat in plaats van mensen, je honderden pakketten hebt, niet met een verjaardag maar met een eigen IV: de kans op colissions, ook al is de IV 24 bit, wordt dus 50% bij reeds een 5000 tal pakketten.
:::


#### Probleem 3: CRC

WEP gebruikt een *integrity checksum field* om te voorkomen dat een pakket wordt aangepast tijdens tranmissie, namelijk een CRC-32 checksum.

WEP uses an integrity checksum field to prevent a packet from being modified during transmission, using a CRC-32 checksum. This wasn’t the best choice: CRCs in general are designed to detect random errors in a message (such as sudden line interference, noise, etc), not to detect planned forgeries.

This, and the fact that a stream cipher is used to encrypt the payload, gives raise to 1 more group of vulnerabilities in WEP. 

The WEP checksum is a linear function of the message, as is with all CRCs. Meaning that the CRC of one message XOR'd with the CRC of another message, is the same as the CRC of two XOR'd messages:

$CRC (message_1) \oplus CRC (message_2) = CRC (message_1 \oplus message_2)$

As a consequence it becomes possible to make a controlled forgery without disrupting the checksum. To do this, an attacker employs a 'bit-flip attack'. 

##### Bit-flip attack
A bit-flip attacks enables an attacker to inject his own messages without the receiver being able to detect that it is not the original message.



Firstly the attacker captures a valid WEP frame (without needing to known the plaintext context). He then XOR's this frame with a self created stream of bits, where the 1 bits cause the bit to flip (0 to 1, 1 to 0), the so-called bitmask. Usually this stream of bits is randomly. As will be shown, the attacker just needs a valid frame, whatever the data it caries. 
Lastly the attacker, to have a valid ICV, XOR’s both ICVs of the new and original frame. Since XOR’ing is commute (the order of the operations is not relevant) a new valid hash is created.

![](wifi/bitflip.png)

The attacker can now send a forged frame that is considered genuine by the receiver. The receiver (AP) dutifully decapsulates the bit flipped data and the LLC discovers that the data is 'gibberish'. Yet, since the ICV was valid, the receiver simply thinks some higher layer CRC error has occurred and thus sends an encrypted error-message to the attacker.


![](wifi/respat.png)

It is this error-message that the attacker knows he will receive, so encrypted or not, the attacker can now recreate the key stream by XOR'ing the encrypted error-message with the original error-message as shown as explained before:
$c = k \oplus p \Leftrightarrow k = c \oplus p$

Once this key stream $k$ is derived, the attacker can have a key stream of any size by 'growing' one, as described earlier.  By doing this, the hacker can create a dictionary of keystreams of all sizes. From then on, the attacker can transmt any message of any size, since he has valid keystreams 

::: note
Note that the attacker in this scenario doesn't need to have the WEP-key. He simply uses the keystreams to mimick being a valid user.
:::


#### Problem 4: Keying

A problem, where most symmetric systems suffer from, is the key distribution. The default keys need to be distributed to all the stations that want to participate in the service set secured by WEP. There is, however, no key distribution specified in the 802.11 standard. And so, vendors haven’t done anything: most devices just have you type the keys manually in to the device drivers or APs. (Some provide a way of distributing the keys on a small disk with an executable).

It is clear that this manual entry is entirely dependent of the users and system manager, not of the protocols, creating a very insecure key environment:

Keys cannot be considered secret: all keys need to be manually entered, and any local user, with a minor knowledge of his system, can extract the keys (e.g. in Windows OS through the device manager).

Whenever someone, a staff member for example, leaves the organization, all keys should be changed. Knowledge of WEP keys allows a user to setup a station and passively monitor and decrypt traffic using the secret key. WEP thus cannot protect against authorized insiders who also have the key.
Organizations with a large number of authorized users must publish the key to this group when needed, which, of course, prevents the keys from being secret.

## WPA 1

::: note
Bart Preneel van de KUL/Cosic, één van Belgiës meest vooraanstaande crypto-experts, zei ooit over WEP dat het het perfecte schoolvoorbeeld is van wat er allemaal kan fout lopen wanneer je beslist om zelf een nieuw crypto-algoritme te ontwikkelen. 
:::

By 2001, it was clear that an urgent solution was needed. Wifi was booming everywhere, both in private homes as in companies. A task group was created to create a new standard. However, they couldn't just simply start writing a new security standard for the IEEE 802.11 specifications; some constraints existed:

* Already millions of WEP-based devices have been sold. WEP patches operating on already-deployed hardware therefore will have to rely entirely on a firmware upgrade.
* Most AP’s are equipped with a cheap, slower processor (i486, ARM7 or PowerPC running at 40 or even 25MHz). The load however generated by normal WLAN traffic consumes 90% or more of this microprocessor. And so there aren’t many spare cycles left making that the solutions need to have a limited amount of instructions.
* To support RC4 encryption without consuming too many cycles, additional hardware is installed to take care of the encryption functions. However, these are basically ASICs and these hardwired encryptions thus create a third constraint. Some functions of the WEP/RC4 combination will always be performed, no matter what. And so WEP will never really leave the security business.


As a result of these constraints, the taskgroup started working on two solutions, one that will work with these constraints, the other one won’t.
One solution will be entirely new, based on AES and will be used for future devices called "counter with CBC-MAC mode AES protocol" (CCMP, WPA2). To allow existing devices to be upgraded, a lightweight protocol called Temporal Key Integrity Protocol (TKIP, WPA1) is being developed. TKIP can be implemented on existing hardware platforms while still providing acceptable security in the short-term future.

Another standard that is being discussed is IEEE 802.1X standard, which enables authentication and key management for LANs.  802.1X will be used together with CCMP and/or TKIP, the latter two providing the data encapsulation and integrity, the former, 802.1X, providing the key management and authentication.

#### 802.1X

Where TKIP and CCMP provide integrity and encryption, it is 802.1X that provides the following:

* Provide (mutual) **authentication**.
* Have a **central user management** system.
* Have a secure way to **distribute secret keys**.

::: note
As noted, 802.1X is only used in the enterprise modes of WPA1 and WPA2. If you are a home user, you will probably use WPA-Personal, which is without 802.1X. In personal mode, you simply will have a secret passphrase that is only known by the access points and the legal user. 
:::

There are several methods to have one authenticated but the most important thing to remember is that usually the access point won’t do the actual authentication (some access points actually do). This is done by a RADIUS server; the access point (authenticator) merely relays the authentication message exchanges between the user (supplicant) and RADIUS (authentication server). While the user isn’t authenticated the access point will only allow 802.1x/EAP-based traffic. Once the user is authenticated the access point will open the port for normal traffic.


![](wifi/port.png)

Make note that 802.1X is not an authentication/authorization algorithm itself; it merely translates messages to and from an authentication/authorization algorithm, using the appropriate frame formats. 802.1X leaves the choices of authentication/authorization algorithm, key management method and accounting profiles up to each EAP authentication type.


![](wifi/8021x.png){ width=60% }

**EAP** (Extensible Authentication Protocol) is extensible meaning that several different authentication methods can be used, depending on the user friendliness and grade of security.

It is important to understand that you have to make sure that both your client and server are compatible with the chosen EAP method. From a customer point-of-view this means that you have to check not only whether the AP is 802.1X-, EAP- or WPA-compatible but that it also supports the wanted EAP method(s).

The most important and usually most-supported EAP (described later on) methods are:

* EAP-TLS
* PEAP
* LEAP
* EAP-TTLS

And to a lesser extent:

1.	EAP-SIM

For an 802.1X port-controlled environment to work it is of utmost importance that your access points are connected to a switch (and not to a hub) and more importantly that the switch is 802.1X-compatible. Most switches from the last 10 years will probably be 802.1X-compatible, with older ones this might not be case.

When integrating your wireless network in your wired LAN it is important that you isolate the traffic of the access points in the network (just as you would isolate Internet traffic using a firewall). Using a firewall would give a large management overhead and is not recommended. A good option is to have a Virtual LAN for isolating your wireless network traffic.

![](wifi/8021X2.png){ width=60% }

The previous figure shows what general steps are performed using 802.1X:

1.	Both the client and the access point will exchange messages to discover which EAP-methods are possible to use (being a method they both thus should have).
2.	Once a mutual agreement on the EAP-method is reached, the AP will act as a relay between the client and the authentication server. Client and server will then commence the authentication exchange.
3.	If the server has enough evidence to authenticate the client it will generate the necessary keys (explained here-after) and relay them to the access point.
4.	The access point will further distribute the needed keys and make sure they are updated often.
5.	Once the keys are correctly distributed the actual data can be started, which will be encrypted using CCMP or TKIP, depending on the chosen encryption type.

In 802.1X-enabled WLANs, two sets of keys are generated, session keys (also referred to as pairwise keys) and group keys (also referred to as groupwise keys). Group keys are shared amongst all the clients connected to the same AP and are used for multi-cast traffic. Session keys are unique to each association between an individual client and the AP and create a private virtual port between a client and the AP.

If configured to implement dynamic key exchange, the 802.1X authentication server can return session keys to the access point along with the accept message. The access point uses the session keys to build, sign and encrypt an EAP key message that is sent to the client immediately after sending the success message. The client can then use contents of the key message to define applicable encryption keys. In typical 802.1X implementations, the client can automatically change encryption keys as often as necessary to minimize the possibility of eavesdroppers having enough time to crack the key in current use. 

### TKIP

Having obtained the needed keys through the 802.1X framework, it is time to encrypt the data. The **Temporal Key Integrity Protoco**l (TKIP) is a suite of algorithms wrapping the WEP protocol on old hardware to enhance security, minimizing the threats that exist when using WEP. 

TKIP surrounds WEP with new algorithms, namely:

1.	A cryptographic message integrity code (MIC), called Michael, to defeat forgeries.
2.	A new IV sequencing discipline, to prevent replay attacks.
3.	A per-packet key mixing algorithm, to solve the weak keys issue in RC4.
4.	A re-keying mechanism, which changes the integrity keys every 10,000 packets or so.


Because an adversary can compromise the TKIP MIC with relatively few messages (it isn't the most secure thing, explained in the next chapter), TKIP also implements countermeasures. In the original WEP specifications, no countermeasures were undertaken when an attack was detected; taken into account that WEP itself could actually not detect a lot. 

In TKIP, these countermeasures have the following consequences:
1.	They force key updates to be rate limited. 
2.	They limit the probability of a successful forgery and the amount of information an attacker can learn about a key before it is renewed.

Firstly, we will describe how these 4 algorithms work on their own, afterwards shall be described they all work together under TKIP.

#### Michael the Mic

A message integrity check (MIC) is a cryptographic device to detect any tampering with data.

::: note
 The literature calls these MICs usually ‘message authentication codes’ or MACs. However, IEEE 802 already used this acronym for “media access control” and so MIC was chosen instead. A typical MIC is the HMAC used in the IPSec protocol suite.
:::

"Michael" computes a MIC of the payload but it also includes the authentication key, the sender address and the receiver address (in comparison to CRC-32 which only included the payload itself).  

![](wifi/michael.png){ width=60% }

When a TKIP implementation detects two failed forgeries in a second, it is assumed there’s an ongoing attack and performs the following steps:
1.	The station deletes its keys
2.	Disassociates from the AP
3.	Waits for a minute and then reassociates

Although this disrupts the communications, it is the only way of thwarting the active attack. 


#### IV Sequence enforcement

WEP did not provide protection against replay attacks since any packet resend later, with a valid key, was considered secure. A simple, yet robust method to prevent replaying packets is to introduce a sequencing number for each packet send. This sequence number is associated with a MIC key (a MIC on its own doesn’t provide detection of replay attacks). 

Only a packet which has the next number of the previously send packet is allowed. Of course, this would mean that an infinite sequencing is necessary. Otherwise, in a finite sequencing loop, once all numbers are used replay attacks are possible. The choices available for the transmitter to prevent this sequence number exhaustion are:
1.	Halt communication altogether
2.	Rekey the MIC with a fresh key
3.	Keep sending, but with no protection against replay.

TKIP closely follows this design. To defeat replays, TKIP uses an extended 48-bit IV called the TKIP sequence counter (TSC). The TSC is constructed from the first and second bytes from the original WEP IV and the 4 bytes provided in the extended IV. TKIP extends the length of a WEP encrypted frame by 12 bytes; 4 bytes for the extended IV information and 8 bytes for the MIC.

#### Key mixing

WEP misuses the RC4 algorithm as described earlier. TKIP’s per-packet key construction is a feature therefore necessary to correct this flaw. The new per-packet construction, the **TKIP key mixing function, uses a temporal key or per-packet key, which is substituted for the WEP base key.** This key is called temporal because they have a short lifetime and are replaced frequently.

The key mixing works as follows. A key mixing function transforms a temporal key and packet sequence number into a per-packet key and IV.

This is done in two phases, each phase compensating for a particular WEP design flaw:

* Phase 1 eliminates the same key from use by all links by mixing the transmitter address (TA) with the IV and the base key. 
* Phase 2 eliminates knowing the per-packet key by viewing the public IV.

![](wifi/mixing.png)

**Phase 1 mixing**

Phase 1 combines the MAC address of the local wireless interface and the temporal key by iteratively XOR'ing each of their bytes to index into an S-Box, producing an intermediate key. 

By doing so, using the local MAC address, a different key is generated, even if they begin from the same temporal key (a common situation in ad hoc deployments). And so the stream of generated per-packet encryption keys generated is different at every station. The intermediate keys needs only to be computed when the temporal key is updates, so most implementations cache this key (to improve performance)

**Phase 2 mixing**

A tiny cipher, a Feistel structure (see crypto chapter), is used in phase 2 to encrypt the packet sequence number, using the intermediate key. A 128-bit per-packet key is produced. 

The first 3 bytes of the phase 2 output correspond exactly to the WEP IV, the last 13 to the WEP base key, as existing WEP hardware expects. (Since it uses the base key and IV to form the per-packet key).

Phase 2 assigns the 8most significant bits of this counter to the first and second bytes of the WEP IV, the least significant counter bots to the third IV byte. The most significant bit of the second IV byte is then masked; ultimately preventing any RC4 weak keys attacks.

### Putting it all together

And so finally we have all the pieces ready, which we now can wrap around the broken WEP hardware:

![](wifi/wpa1.png)

Even though this solution was a nice interim solution, at its core, WEP was still used. In 2009 WPA1-Personal was ready to be retired as several new vulnrabilities were found that allowed attacker to retrieve the WPA passphrase by capturing the handshake client and access point perform when they start communicating. 

::: tip
Check out coWPAtty and Aircrack. Also, have a look at Asleap and THC-LEAPcracker which can hack parts of 802.1X.
:::

##  WPA 2

The final solution that would ignore the constraints was built around AES.

AES based encryption can be used in a number of different modes or algorithms. The mode that has been chosen for 802.11 is the counter mode with CBC-MAC (CCM). The counter mode delivers data privacy while the CBC-MAC delivers data integrity and authentication. This was named: **"counter with CBC-mode AES protocol"**(**CCMP**).

CBC-MAC, short for "Cipher Block Chaining – Message Authentication Code", as it name implies will create a hash of the data being encrypted in AES.

As noted, 802.1X is used for key distribution and user authentication.

### Encryption and MIC creation

Like TKIP, CCMP also uses a 48-bit IV called a packet number (PN). The packet number is used along with other information to initialize the AES cipher, which is a block cipher, for both the MIC calculation and the frame encryption. 

::: note
Remember that MAC was already reserved and thus CBC-MAC could actually be CBC-MIC.
:::

The AES encryption blocks in both the MIC calculation and the packet encryption use the same temporal encryption key (K in the figure). As with TKIP, the temporal key is derived from the master key that was derived as part of the 802.1X exchange. 

![](wifi/ccmp.png)

The MIC calculation and encryption proceed along parallel paths as shown the figure. The MIC calculation is seeded with an IV formed by a flag value, the PN, and other data pulled from the header of the frame. This IV is fed into an AES block and its output is XOR'd with select elements from the frame header, which is then fed into the next AES block. This process continues over the remainder of the frame header and down the length of the packet data to compute a final 128-bit CBC-MAC value. The upper 64 bits of this MAC are extracted and used in the final MIC appended to the encrypted frame. 
The encryption process is seeded by a counter preload also formed from the PN, a flag value, data from the frame header, and a counter value which is initialized to 1. 

This preload value is fed to the AES block and it's output is XOR'd with 128 bits of clear text from the unencrypted frame. The counter value is incremented by one and this process is repeated for the next block of 128 bits of clear text. This process continues down the length of the frame until the entire frame has been encrypted. The final counter value is set to 0 and input to an AES block whose output is XOR'd with the MIC value computed previously before appending to the end of the encrypted frame for transmission. 

### There goes the neighbourhood

Until 2017 all seemed well. WPA2 was a a well-spoken of standard and everyone was happy with the security provided. However, in may 2017 Belgian researcher Mathy Vanhoef published a paper describing it as follows:

>  We discovered serious weaknesses in WPA2, a protocol that secures all modern protected Wi-Fi networks. An attacker within range of a victim can exploit these weaknesses using key reinstallation attacks (KRACKs). Concretely, attackers can use this novel attack technique to read information that was previously assumed to be safely encrypted. This can be abused to steal sensitive information such as credit card numbers, passwords, chat messages, emails, photos, and so on. The attack works against all modern protected Wi-Fi networks. Depending on the network configuration, it is also possible to inject and manipulate data. For example, an attacker might be able to inject ransomware or other malware into websites.

::: note
We will not go into detail on how this attacks works. Check out [krackattacks.com](https://www.krackattacks.com/) to learn more about it.
:::

As a result, IEEE needed to go back to the drawing board and design a *final final solution*, called WPA3.

##  WPA 3 ("Wifi 6")

In 2018 the Wifi Alliance announced the release of WPA3 (also called Wifi 6). The standard provides much improved security, and also copes with the way wireless networks are used nowadays. Modern networks are populated by a plethora of devices, not only laptops. 21th century wireless networks, at workd and at home, have mobiles phones, internet-of-thing devices, printers, and whatnot.

As with WPA1 and 2, version 3 also both a personal and enterprise mode. Additionally, it provides several improvements:

* Simultaneous Authentication of Equals (SAE): this crptographic concept makes the personal passphrase-based authentication much more secure. 
* It replaces the passphrase in WPA2-personal with a more secure implementation.
* It is resistant to offline dictionary attacks 
* Forward secrecy: even if hacker the finds the wifi key of old captures, they can’t be decrypted.
* Wifi Easy connect: a user-friendly, and secure, methode to connect internet-of-thing devices to the network.
* Wifi Enhanced open: a secure way of connecting to public hotspots. Gone are the days of sniffing a public network for juicy details, now every user will have a secure, encrypted channel with the access point.

It also replaces 802.1X in WP3-Enterprise with more advanced features:

* Authenticated encryption: 256-bit Galois/Counter Mode Protocol (GCMP-256)
* Key derivation and confirmation: 384-bit Hashed Message Authentication Mode (HMAC) with Secure Hash Algorithm (HMAC-SHA384)
* Key establishment and authentication: Elliptic Curve Diffie-Hellman (ECDH) exchange and Elliptic Curve Digital Signature Algorithm (ECDSA) using a 384-bit elliptic curve
* Robust management frame protection: 256-bit Broadcast/Multicast Integrity Protocol Galois Message Authentication Code (BIP-GMAC-256)

::: tip
We did not discuss these advanced cryptographic features, but it is safe to say that they are state-of-the-art and very secure.
:::