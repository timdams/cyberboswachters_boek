# Introductie

Dit handboek ( wordt gebruikt als basis-cursus binnen de opleidingen elektronica-ict en toegepaste informatica van de AP Hogeschool. Het heeft als doel een breed overzicht te geven van de *wereld van de cybersecurity*. Het doel is niet alomvattend te zijn, maar vooral om mensen zin te geven om meer te weten te komen over deze belangrijke én boeiende wereld. Dit boek gaat ervan uit dat de lezer minimale voorkennis heeft inzake ICT, toch wordt verwacht dat een basiskenis netwerk-technologie aanwezig is (denk aan termen zoals IP-adressering, routering en firewalls).


## Boswachters en stropers

De subtitel,*"De beste digitale stropers zijn ook de beste cyberboswachters"*, van dit handboek verdient een extra woordje uitleg. Dit boek zal zeker niet de obscure wereld van de hackers en cybercriminelen verheerlijken, integendeel. We willen echter wel tonen hoe de stropers, de slechterikken in dit boek, te werk gaan, opdat het ons zo een beter beeld geeft waar we ons tegen moeten beschermen als goede cyberboswachters. 

## Dankwoord

Een oprechte dank aan Stefaan Somerling (RealDolmen) voor de feedback op het hoofdstuk omtrent GDPR. Geef gerust een sein als u, conform de GDPR wetgeving, liever uw naam niet in dit document ziet staan ;)

Dank aan eerstejaars Ernie de Magtige,  Dimitriy Vassilchenko & Jasper Van Meel om als externe spellingcheckers aardig wat (gênante) typos te ontdekken!

Uiteraard ook een dikke merci aan de collega's die feedback op dit document hebben gegeven, en dan zeker aan Michael Boeynaems en Serge Horsmans!

# Waarschuwingen

Dit brengt ons automatisch bij een belangrijke waarschuwing: je zal in dit handboek geregeld technieken en tools tegenkomen die verregaande gevolgen voor derden én jezelf kunnen hebben indien ze misbruikt worden. We tonen deze zaken enkel vanuit het standpunt dat zonet werd besproken: digitale stropers zijn de beste cyberboswacters. Het is belangrijk dat je begrijpt dat je deze tools en technieken NOOIT of te NIMMER voor kwade doeleinden mag gebruiken. Het is zelfs zo dat het gebruik van veel van deze zaken strafrechtelijke gevolgen kunnen hebben, inclusief boetes tot zelfs jarenlange opsluiting.

Indien je dus deze tools of technieken wenst te gebruiken dan mag dit enkel onder volgende voorwaarden:

* Op doelwitten (denk aan servers, webpagina's, gebruikers, etc.) waar jij de eigenaar van bent.
* Op doelwitten waar je geen eigenaar van bent, maar waar je wel expliciete toestemming voor hebt gekregen.


## Opletten met experimenten

Indien je van plan bent om met bepaalde tools te experimenteren hou dan rekening met volgende tips:

* Werk zoveel mogelijk met virtuele machines. En test nooit op een *live systeem* indien daar geen erge goede reden voor is.
* Hou er rekening mee dat bepaalde tools permanente "gaten" slagen in je systemen. Deze kunnen dus na (of tijdens!) je experimenten door digitale stropers misbruikt worden. 




## Changelog

**Dit is versie 0.6.0** (22/12/22)

* 0.6.0
  * Voorbereiden voor volgende semester. Aardig wat verbeteringen en aanvullingen overal aangebracht.
  * Printversie nagekeken.
  * Meerdere issues afgesloten.
* 0.5.1
  * Zoek niet naar de logica in deze versioning.
  * [Closed issue 5: Basic security: Software based attacks](https://github.com/timdams/cyberboswachters_boek/issues/5)
  * [Closed issue 16: Certs: waar OS cert bewaard](https://github.com/timdams/cyberboswachters_boek/issues/16)
  * [Closed issue 21: ALGEMEEN: Typo feedback Jasper](https://github.com/timdams/cyberboswachters_boek/issues/21)
  * Hoop typos (bedankt Ernie De Magtige)
* 0.4.3
  * Dit is de finale editie van academiejaar 2021-2022.
  * [Closed issue 8: XOR'n uniformiteit](https://github.com/timdams/cyberboswachters_boek/issues/8)
  * [Closed issue 9: Noot omtrent quantum computers](https://github.com/timdams/cyberboswachters_boek/issues/8): toegevoegd in hoofdstuk 3, vlak voor symmetrische encryptie.
  * [Closed issue 10: cryptanalytic attacks vs bruteforce Bruteforce vs dictattack](https://github.com/timdams/cyberboswachters_boek/issues/10)
  * Typos (bedankt Jasper Van Meel)
* 0.4.2.2
  * Typos 
* 0.4.2.1
  * Modulo-operator uitleg in H2 verbeterd.
* 0.4.2
  * Secties in hoofdstuk 1 ("Wie zijn de stropers?", "Je verdediging ontwerpen", "Social engineering", etc.) uitgeschreven
  * Mimikatz in hoofdstuk Authenticatie
  * Issue/todo lijst aangemaakt [github](https://github.com/timdams/cyberboswachters_boek/issues)
* 0.4.1
  * Eerste batch remarks collega Boeynaems verwerkt
  * "Nuttige links" appendix toegevoegd
* 0.4.0
  * Iot Sectie vervolledigd
  * Spellingcheck eens opgezet
* 0.3.0
  * Eerste deel IoT security
* 0.2.0
  * Opmerkingen collega Horsmans verwerkt
* 0.1.3
  * Verdere aanvullingen "Fundamenten van cybersec"
  * Dit is de finale editie van academiejaar 2020-2021.
* 0.1.2
  * Hoofdstuk "Fundamenten van cybersec" gestart. Verre van klaar.
* 0.1.1
  * Hoofdstuk Authenticatie klaar.
  * Eerste deel sectie "cryptanalyse" geschreven.
  * Sectie HTTPS/TLS beschreven in hoofdstuk public crypto.
* 0.0.9
  * Hoofdstuk Wifi volledig vertaald
  * Eerste helft van hoofdstuk "Authenticatie" beschreven
* 0.0.8
  * Uitleg en tekeningen certificaten toegevoegd. Hiermee kan hoofdstuk crypto (voorlopig) als afgerond beschouwd worden.
* 0.0.7
  * Aantal tekeningen omgezet 
* 0.0.6
  * Wifi hoofdstuk vervolledigd (deels Engelstalig). Afbeeldingen moeten nog goed gezet worden.
* 0.0.5
  * Hoofdstuk 1 en 2 aangevuld en op schrijffouten verbeterd.

