# H5: Authenticatie

Bewijzen wie je bent om toegang te krijgen tot een website of applicatie heet **authenticatie**. Vervolgens, afhankelijk van wie je bent, zal je bepaalde rechten toegewezen krijgen die bepalen wat je wel en niet kunt doen op de website of applicatie, dit heet **autorisatie**. In dit hoofdstuk gaan we ons toespitsen op het eerste deel van dit proces: de authenticatie. Hierbij gaan we vooral kijken hoe we op een veilige manier moeten omgaan als web-of applicatiebeheerders met de login-informatie van gebruikers.

We weten al dat je geheime sleutel een belangrijk onderdeel is in heel veel aspecten van cybersecurity. Het **weten van de geheime sleutel** is een eerste vorm van authenticatie (maar uiteraard niet de beste). Je logingegevens die je gebruikt om toegang te krijgen tot een website bestaan in primaire vorm meestal uit een combinatie van gebruikersnaam en paswoord. Het paswoord in dit verhaal is kortom gewoon een ander woord voor je geheime sleutel. Als beheerder is het dan ook essentieel dat we uitermate veilig omgaan met de paswoorden van gebruiker. We zouden niet willen dat alle login gegevens van onze gebruikers in verkeerde handen vallen.

## Veilige paswoorden
Ongeacht de veiligheden die we inbouwen als cyberboswachter, veel blijft afhangen van de manier waarop eindgebruikers omgaan met hun paswoorden. Volgende regels worden continue niét gehanteerd, met alle gevolgen van dien:

* Hergebruik nooit een wachtwoord. In principe heb je één wachtwoord pér service (applicatie, website, etc.).
* Gebruik geen wachtwoorden die in *dictionaries* staan. Maar overweeg volledig random gegenereerde wachtwoorden.
* Zorg ervoor dat je wachtwoorden lang genoeg zijn (minimum 12 tekens).
* Zorg ervoor dat je wachtwoorden steeds een combinatie van cijfers, letters (grote én kleine) en leestekens zijn.


Trouwens, herinner je de McCumber kubus waarin we benadrukten dat technologie maar één aspect is om C.I.A. toe te passen op je data in z'n 3 primaire vormen? Het zal je niet verbazen dat cybercriminelen niet altijd gaan proberen databanken aan te vallen om paswoorden van gebruikers te pakken te krijgen. Als zij een specifiek doelwit hebben dan gaan we vaak op andere manieren te werk:

* **Password spraying**: hierbij gaat de hacker een (beperkte) lijst van veelgebruikte paswoorden testen op een grote groep *useraccounts* van een bepaalde website, in de hoop een *hit* te hebben (*"spray and pray"*).
* **(Spear) phishing**: bij phishing hanteert de aanvaller de goedgelovigheid of onoplettendheid van de gebruiker om een ogenschijnlijk betrouwbare mail of bericht te sturen met daarin een link naar een pagina die malware installeert of een fake login scherm toont. Bij spear phishing gebruikt de aanvaller geen massmail, maar gaat hij juist gericht één specifiek doelwit een op maat gemaakte mail of bericht sturen. Spear phishing is heden ten dage een van dé **social engineering** aanval bij uitstek.
* **Key loggers**: als de aanvaller toegang heeft tot de computer (wat uiteraard van over het netwerk kan) dan kan hij een permanente key logger installeren die continue alle toetsaanslagen op het systeem opneemt. Nadien kan de aanvallers deze logs dan analyseren in de hoop zo ook het paswoord of andere gevoelige informatie terug te vinden.


## Hoe paswoorden opslaan

Hoe moet je nu als cyberboswachter de login-informatie van je gebruikers bewaren? We gaan een soort *bottom-up* aanpak hanteren, waarbij we beginnen met de meest naïeve oplossing en telkens verbeteringen zullen aanbrengen.

### Paswoorden als plaintext bewaren

In het prille begin van het internet gebeurde dit quasi overal: de login-databank had 2 kolommen:

1. gebruikersnaam
2. gebruikerspaswoord

De paswoorden in kolom 2 stonden er zoals ze waren. Als een gebruiker wilde inloggen op dit soort websites dan moest hij z'n paswoord verzenden en dan ging de *backend* controleren of het ingezonden paswoord overeen kwam met het paswoord in de database. Het spreekt voor zich dat dit soort databanken van gigantische waarden zijn voor aanvallers: van zodra ze de databank hebben te pakken hebben ze alle paswoorden van alle gebruikers! Profit!

**Paswoorden mogen nooit in leesbare vorm in een databank staan!** Wanneer dit wel zo is dan kan je beter ogenblikkelijk je account bij die service deleten. Want alhoewel deze aanpak al lang bestaat en al bijna even lang van geweten is dat deze erg onveilig is, toch zijn er nog steeds ontelbare websites en applicaties die hieraan zondigen. Als ze dus jouw paswoord zo behandelen, dan is de kans reëel dat ook hun andere veiligheidsdiensten niet om over naar huis te schrijven zijn. 

Een goede manier om te weten of een service op deze manier werkt is gebruik maken van de *"Ik ben m'n wachtwoord vergeten"*-knop. Als je deze knop gebruikt en je krijgt een email met daarin jouw originele paswoord, dan kan je er zeker van zijn dat de service jouw paswoord op deze manier bewaard. In principe zou een service NOOIT jouw wachtwoord moeten kunnen zien. We gaan zelfs zien dat **jouw wachtwoord nooit je computer mag verlaten**, laat staan dat deze beschikbaar is in een plaintext database.

### Paswoord hashing

Door een paswoord te hashen kunnen we de paswoorden al iets veiliger bewaarden. Door een secure hash van een paswoord te genereren creëren we een stuk tekst die niet terug naar het originele paswoord kan omgezet worden. In praktijk zal ieder paswoord een andere hash creëren uiteraard kunnen er toch 2 zaken zich voordoen:

1. Twee totaal verschillende paswoorden genereren dezelfde hash, een zogenaamde *collision*.
2. Twee mensen kiezen hetzelfde paswoord en zullen dus ook dezelfde hash genereren.

Een gebruiker die zich wenst aan te melden bij een systeem dat met paswoord hashes werkt zal nu op zijn lokale systeem z'n hash moeten genereren en dit over het netwerk doorsturen. De service zal deze ontvangen hash vergelijken met de waarde die in de database staan, en indien deze gelijk is dan wordt veronderstelt dat de gebruiker het juiste paswoord kende.

We versturen dus niet meer het paswoord over het netwerk, maar we zijn nu wel vatbaar voor een **pass-the-hash** aanval. Het volstaat om een geldige combinatie van gebruikersnaam en hash te capteren en deze vervolgens te gebruiken om ergens in te loggen. De aanvaller heeft hierbij geen kennis nodig van het originele paswoord.

::: warning
Veel websites genereren wel degelijk de hash aan serverzijde. Het verschil hier is echter dat ze eerst een beveiligde TLS-tunnel hebben opgezet waarover het paswoord werd verstuurd. Het laat echter de website/service toe om meer controle te hebben over de hash-generatie.
:::

### Rainbow table attack

Als de database door aanvallers gestolen wordt dan zitten we ook een tikkeltje veiliger als voorheen (de pass-the-hash aanval zal uiteraard nu zeker werken) indien de aanvaller de paswoorden van gebruiker nodig heeft (om bijvoorbeeld vervolgens op een ander systeem te gebruiken). De aanvaller zal een brute-force of dictionary attack moeten uitvoeren om te ontdekken welk paswoord resulteert in welke hash. Dit kan een erg tijdrovend proces zijn want enkel veelgebruikte hashing algoritmen (onder andere *scrypt* en *bcrypt*) zijn *by design* zodanig geschreven dat deze erg traag werken. Dit zorgt ervoor dat de tijd om 1 hash te genereren geen voelbaar verschil geeft, maar wanneer een aanvaller er duizenden per seconden wil kunnen testen, dan zal het algoritme als een stevige **timebottleneck** optreden. De aanvaller zou dan in de plaats vooraf alle hashen kunnen *precomputen* als alternatief. Dit heeft dan weer voor gevolg dat zo'n lijst gigantisch groot is en er dus een **memorybottleneck** optreedt. 

De aanvaller zit dus met het dillema tussen hashen berekenen ter plekke, wat erg traag zal gaan, oftewel alle mogelijke hashes op voorhand berekenen, wat veel geheugenplek vereist. Via een **rainbow table attack** krijgt de aanvaller echter een handig instrument in handen dat een soort compromis tussen beide bottlenecks aanbiedt. Een rainbow table is een tabel van precomputed hashes, maar waarvan we ze niet allemaal moeten bewaren om toch een grotere set dan die dat in de tabel bewaard worden, te hebben.


![Ieder paswoord mapt naar exact 1 hash](auth/rainbow0.png){ width=70% }

Een rainbow table stel je als volgt op:

* Je kiest een startpunt, zijnde 1 van de mogelijk paswoorden uit de set van paswoorden waarvoor je een rainbow table wil opstellen (zie figuur hier voor)
* Je genereert de hash van dit gekozen paswoord.
* Je pas nu op deze hash een *reduction* functie toe. Dit is een zelfgekozen mapping van de verkregen hash terug naar een paswoord uit de set van mogelijk paswoorden.

![Van de hash via de reductie functie terug naar een ander paswoord](auth/rainbow1.png){ width=70% }

* Van dit nieuwe paswoord genereert je weer en hash en pas je weer de reduction functie toe.
* Die combinatie hash+reductie blijf je X aantal keer herhalen tot je een lekker lange lijst hebt.
* Finaal hou je nu van deze lijst enkel het startpunt bij (het gekozen paswoord uit de set) en de allerlaatste gegenereerde hash.

![Voorbeeld van een lijst opeenvolgende paswoorden en hun hashes](auth/rainbow2.png){ width=70% }


Wanneer de aanvaller nu van een gestolen hash terug het paswoord te pakken wil krijgen dan zal hij deze hash als startpunt gebruiken en hier telkens weer de combinatie reductie+hash op toepassen **totdat** een hash wordt gevonden die als eindpunt voor een van de lijsten werd ingesteld. De aanvaller zal vervolgens het startpunt van deze lijst nemen (een paswoord) en weer de combinatie hash+reductie toepassen hierop (als het ware terug een rainbow table generen) en op gegeven zal hij terug op de gestolen hash uitkomen, als hij dan één stapje terug kijkt dan zal hij daar het paswoord zien die bij deze gestolen hash hoort.

![Ieder paswoord mapt naar exact 1 hash](auth/rainbow3.png){ width=70% }

::: note

De uitleg, en vooral de manier van afbeeldingen, is gebaseerd op volgende uitstekende uitleg op het internet: [bron](http://kestas.kuliukas.com/RainbowTables/).

:::

### Salting

Om bestand te zijn tegen de rainbow attack dienen we de set van mogelijke paswoorden gevoelig te vergroten waardoor het niet meer realistisch is om voor die set rainbow tables te genereren. We kunnen helaas niet verwachten van de eindgebruiker dat zij met véél langere, meer willekeurige, paswoorden op de proppen komen en zullen dus een 'oude' truc moeten gebruiken die we ook al bij Wifi hebben gezien. Bij wifi hanteerden we een initialisatie vector (IV) om eigenlijk de WEP-sleutel met 24 bits te verlengen zodat zelfs bij dezelfde sleutel, iedere IV eigenlijk zorgt voor een unieke seed.

Wel nu, dit concept kan je ook toepassen bij wachtwoorden en heet **salting**. Een salt is een extra stuk dat je toevoegt aan het paswoord **voor je de hash** berekent. Dit extra stukje is een willekeurig getal dat je uiteraard zal mee moeten opslaan in de database. Wanneer twee gebruikers hetzelfde paswoorden zouden hebben, dan zouden ze , dankzij hun unieke salt, toch beide totaal verschillende hashes genereren. Niet alleen dat, maar de salt zorgt er dus ook voor dat de set van mogelijk paswoorden véél groter wordt. 

![](auth/salting.png){ width=70% }

In de database bewaren we dus nu volgende informatie:

* gebruikersnaam.
* gebruikte salt (minimum 32 bits).
* hash van het paswoord en de salt samen.

::: warning
Merk op dat ook nu we nog steeds niet beschermd zijn tegen pash-the-hash aanvallen.
:::

### Mimikatz   

Mimikatz werd origineel ontwikkeld als demo om aan te tonen dat de authenticatie protocols van Microsoft onveilig waren. Helaas is de totaal, uiteraard, erg snel opgenomen in het arsenaal van digitale stropers. De tool laat toe om *authentication tickets* te tonen en hergebruiken. Wanneer de tool wordt losgelaten op een Microsoft Windows OS zal het deze tickets op het systeem zoeken zodat de aanvaller vervolgens zonder login-gegevens toch kan inloggen door technieken zoals:

* Pass-the-hash: vroeger werden Windows paswoorden als hash (NTML) bewaard op het systeem waardoor deze techniek erg eenvoudig was.
* Pass-the-ticket: zoals zonet beschreven, maar dan met het Kerberos ticket (zie ook hierna)
* Kerberos Golden Ticket: **Kerberos** is een van de meest gebruikte authenticatieprotocols. Veel systemen die Kerberos gebruiken hebben echter een verborgen account (*KRBTGT* genaamd) wiens ticket domain admin rechten geeft én dat niet vervalt. Kortom, een gouden ticket!
* Kerberos Silver Ticket: soms zal Window een *TGS* ticket toewijzen aan gebruikers die willen inloggen op services op het netwerk. Echter: Microsoft controleert dit ticket niet altijd, waardoor het een handig ticket is om langs bepaalde security-mechanismen te glippen.
* Pass-the-Cashe: identiek aan pass-the-ticket maar deze aanval werkt ook met login data dat dat op zowel Mac, Unix én Linux wordt gevonden. Kortom, dit is natuurlijk de *motherload*, daar deze niet meer afhankelijk is van enkel Microsoft Windows operating systems.

Het nadeel van Mimikatz, voor ons als boswachters, is dat de tool erg goed werkt én kan geautomatiseerd worden. In 2017 onderging Oekraïne een stevige ransomware aanval van (zo goed als zeker) Russische makkelijke, genaamd **NotPetya** (een variant op de WannaCry ransomware). NotPetya gebruikte een aangepaste versie van Mimikatz zodat de ransomware zichzelf kon verspreiden over het netwerk en op andere systemen in het domein kon inloggen met hashes en tickets dat de Mimikatz variant aantrof.

::: info
De oorsprong van Petya en NotPetya werd getraceerd en is vermoedelijk het resultaat van een Russische hackinggroep genaamd *Sandworm* die onder de GRU werken, de Russische militaire inlichtingendienst.
:::

## CRAM en SCRAM

Om iemand te authenticeren spraken we totnogtoe enkel over een username/paswoord systeem. Echter,er zijn vele andere manieren om iemand te authenticeren. We spreken over "**challenge-response authentication (SCRAM)** wanneer de gebruiker een vraag gesteld krijgt (de *challenge*) en hij hierop een geldig antwoord (de *response*) moet geven voor hij wordt toegelaten. Authenticeren met een paswoord is dus een vorm van CRAM. Er zijn er echter nog vele andere denk maar aan de gehekelde CAPTCHAs -de ambetante vraag om te bewijzen dat je geen robot bent door alle boten in een afbeeldingen aan te duiden- of inloggen met behulp van je iris-scan.

![](auth/cram.png){}

Om het probleem van *pass-the-hash* op te lossen kan je gebruiken maken van een **SCRAM**, een *salted challenge response authentication mechanism*. We bespreken een vereenvoudigde versie (een echte SCRAM voorziet ook *mutual authentication*) waarbij we hoofdzakelijk willen uitleggen waarom een SCRAM systeem veiliger is dan een klassieke salted paswoord loging van daarnet. Met dit systeem zorgen we ervoor dat 

1. de salted hash van de gebruiker NOOIT moet verzonden worden.
2. geen replay aanval m.b.v. pass-the-hash mogelijk is.

Het mechanisme werkt als volgt:

1. De gebruiker stuurt z'n username met de vraag om in te loggen.
2. De server genereert een random challenge en stuurt deze terug.
3. Server en client creëren nu een hash van deze challenge met de hash van het paswoord (de server heeft dit bewaard, de client genereert de hash door z'n paswoord in te voeren)
4. De client stuurt deze hash, de response, terug naar de server.
5. De server vergelijkt of zijn gegenereerde response hash dezelfde is als die van de gebruiker.

![](auth/scram.png){}

::: tip
Merk op dat we ook hier nog steeds met een salted paswoord kunnen werken. Het enige dat dan verandert is dat de server naast de challenge, ook de te gebruiken salt doorstuurt die reeds in de database bewaard werd samen met de salted hash van de gebruiker.
:::

## Multifactor authentication

We hebben enkel nog maar over paswoorden gesproken in dit hoofdstuk, maar uiteraard zijn er ook andere zaken die je kan gebruiken om je te identificeren. Er zijn verschillende **factoren** die kunnen gebruikt worden om te controleren of een persoon wel degelijk toegang mag krijgen tot een systeem:

* Iets wat je **weet**: je paswoord, je pincode, je rijksregisternummer, etc.
* Iets wat je **bent**: een eigenschap die uniek is per persoon en onder de noemer "*biometrics*" valt, zoals je vingerafdruk, irisscan, etc.
* Iets wat je **hebt**: een stuk hardware zoals een smartphone, USBkey, etc.
* **Waar** of **wanneer** je bent: je IP-adres , het moment van de dag dat je probeert in te loggen.

![Multifactor authenticatie factoren](auth/mfa.png){}

We zien meer en meer systemen verschijnen die aan zogenaamde *multifactor authentication* (MFA) doen waarbij het systeem minstens 2 factoren (*2FA*) wil controleren voor het je toegang tot het systeem geeft. Hoe meer verschillende factoren er worden gebruikt bij de authenticatie hoe veiliger het systeem is, maar ook hoe minder gebruiksvriendelijk het wordt. Het blijft dus een afweging tussen die 2 eigenschappen om in te schatten wat de ideale hoeveelheid veiligheid en gebruiksvriendelijkheid je wenst te hebben.

Systemen die MFA aanbieden doen dit vaak op een gecontroleerde manier: afhankelijk van de gebeurtenissen zal het systeem beslissen of meerdere factoren moeten getest worden of niet. Als je bijvoorbeeld woont in België, maar Google zit plots dat iemand met jouw paswoord probeert in te loggen vanuit een IP-adres op de Azoren, dan zal Google beslissen dat "iets wat je weet" (het paswoord) niet genoeg controle is en extra informatie vragen.

### Iets wat je weet: paswoorden 

Deze factor hebben reeds uitvoerig behandeld doorheen deze cursus. Het grote probleem met dingen weten is dat

* Je ze kan vergeten en daardoor niet meer kan inloggen.
* Anderen die informatie kunnen te weten komen en dus zich als jou voordoen.

Kortom, alhoewel deze factor vaak vanuit technologisch standpunt het eenvoudigst te implementeren is, is dat ook de minst veilige vanuit een social engineering standpunt. Biometrics en hardware zijn moeilijker door een digitale stroper te stelen dan het paswoord en we hoeven niet bij een fingerprint niet te vrezen dat de gebruiker een "zwakke vingerafdruk" kiest, iets wat bij paswoorden vaak hét primaire probleem is.

### Iets wat je bent: biometrics

"We zijn allemaal uniek". Iedere mens heeft een hele hoop eigenschappen die uniek zijn per persoon. Zelfs als bepaalde van onze eigenschappen gelijkaardig zijn met andere personen dan zal zeker een combinatie van 2 of meerdere eigenschappen dat niet zijn. Door dus menselijke eigenschappen van je te gebruiken als authenticatie hebben we een factor gevonden die zeer moeilijk na te bootsen valt: op voorwaarde dat je een echt unieke eigenschap kiest én deze op deze juiste manier meet.

Enkel veel gebruikte biometrieken als authenticatievorm zijn:

* vingerafdruk
* iris
* stem
* gezicht (vaak met behulp van "stereo camera" voor 3D beeld)

Maar ook andere metrieken kunnen erg interessant zijn zoals de manier waarop je je paswoord invoert, de manier waarop je wandelt (*gait*) etc.

Om een biometriek in de paswoord database te bewaren hebben we een manier nodig om deze te digitaliseren op een zodanige manier dat de unieke aspecten ervan bewaard worden.

::: warning

Paswoorden van miljoenen mensen opslaan is één ding. De biometrische gegevens is een heel ander verhaal waarbij ook **privacy** plots een erg heikel punt wordt (beeld je even in dat Hitler en zijn trawanten 80 jaar geleden toegang hadden tot biometrische data waarmee met een bepaalde zekerheid kon vastgesteld worden of iemand van Joodse origine was of niet.)

In India is de Aadhaar (Indiaas voor "basis"), hun rijksregisternummer zeg maar, een unieke code die gebaseerd is op *onder andere de iris-scan en vingerafdrukken* (alle 10!) van de burger. Deze gigantische database werd in 2018 nog gehacked waardoor mogelijk de informatie van 1.1 miljard geregistreerde burgers werd gestolen. [Meer informatie kan je hier terug vinden.](https://www.moneylife.in/article/aadhaar-data-breach-largest-in-the-world-says-wefs-global-risk-report-and-avast/56384.html)

:::

Voorts moet er rekening mee gehouden worden dat het "registreren" van een biometrische eigenschap nooit 100% accuraat kan. Denk maar aan een tijdelijk krasje op je vinger, je baard die anders geschoren is, etc. De zogenaamde *feature points* van een biometrische eigenschap worden in de database bewaard: dit zijn de unieke waarden waarvan geweten is dat deze per persoon anders zijn. We gaan deze niet per biometrische eigenschap bespreken, het volstaat te begrijpen dat in de gebruikersdatabase meestal een korte sequentie van getallen (of letters, denk maar aan een DNA-sample)  wordt bewaard die als het ware jouw unieke paswoord voorstel voor die specifieke biometrische eigenschap van je. Enkel wanneer je bij het opnieuw inloggen (quasi) dezelfde feature points genereert bij de registratie zal deze factor aanvaardt wordt als correct.

::: tip
Biometrische eigenschappen kunnen niet alleen dienst doen als een extra factor bij het authenticeren,ze zijn uiteraard ook erg handig voor identificatie. In principe kan iemand nog steeds de gebruikersnaam van een ander persoon gebruiken (*impersonation*). Als de biometrische eigenschappen als identificatie dienen kunnen aanvallers dat niet meer doen: ze kunnen onmogelijk aan het systeem zeggen *"ik ben persoon x"* terwijl de vingerafdrukscanner duidelijk een vingerafdruk registreert van *persoon y*.
:::

### Iets wat je hebt: hardware 

Een fysiek object, zeker als het complex is, kan moeilijk nagemaakt worden en is dus een ideale factor. De elektronica van de 21e eeuw behoort tot de meest complexe dingen ooit die de mensheid heeft kunnen vervaardigen. Het is dan ook logisch dat we deze elektronica gebruiken als extra authenticatiefactor. In essentie zal dit stuk hardware nog steeds gewoon een paswoord bevatten, maar dit zal echter ongelooflijk veel langer (en dus sterker) zijn dan het gemiddelde paswoord dat een standaard gebruiker kan onthouden.

Er zijn twee grote families van hardware-gebaseerde authenticatie-vormen:

* Een smartphone, met daarop een *authenticator* app.
* Een USB sleutel

Een nadeel van deze groep is dat het om een fysiek object gaat dat je kan verliezen of dat stuk kan gaan.

## Federation en single-sign on (SSO)

Bij cryptografie wordt het ten stelligste afgeraden om zomaar op de *wilde boef* een eigen crypto-algoritme te ontwikkelen. De kans dat je fouten met verstrekkende gevolgen maakt is te groot. Ook bij het omgaan van login-data van gebruikers en hou je ze authenticeert is het aangeraden om even te bezinnen voor je er zelf aan begint. Dankzij het concept **federation** hoef je niet wakker te liggen hoe je je gebruikerspaswoorden gaat opslaan: gebruikers kunnen inloggen gebruik makend van hun bestaande Google, Facebook en andere accounts. Via federatie zal de gebruiker op jouw site (of app),de *service provider*, kunnen inloggen waarbij een *thirdparty* -die jij en je gebruiker vertrouwt- voor de eigenlijke authenticatie zorgt (*de identity provider*), gebruik makend van zogenaamde *single-sign on* (sso)authenticatie.

![](auth/sso.png){}

::: tip
Federation via sso is een onderdeel van *federated identity management*, een grote groep technologieën en concepten die ervoor zorgen dat de identiteit van een gebruiker over meerdere, onafhankelijke systemen wordt bewaard en gebruikt.
:::

![Enkele van de vele typische SSO knoppen die je geregeld zal tegenkomen.](auth/ssoexamples.png){}

::: tip
**OAuth** (*open authorization*) is een gestandaardiseerde manier om aan authenticatie te doen.
:::

::: warning
Je zal de termen **delegation** en **federation** soms door elkaar zien tegenkomen wanneer je meer informatie over SSO opzoekt.
Samengevat gaan we bij *delegation* een gebruiker verplichten in te loggen met een bepaalde third-party die dit ondersteunt (bv inloggen met je Facebook account). Bij *federation* gaat het breder: je website zal éénder welke third-party account aanvaarden, zolang deze maar compatibel is met het authenticatie systeem van je website (een voorbeeld hiervan is OpenID).
:::

::: warning
Uiteraard moeten we bij federatie benadrukken dat ook hier **privacy** een belangrijk aspect wordt. De vraag is dan ook in hoeverre je een bedrijf zoals Google of Facebook/Meta vertrouwt met jouw (login)data. 
:::