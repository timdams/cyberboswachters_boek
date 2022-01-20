# Introductie

Dit handboek (in opbouw) wordt gebruikt als basis-cursus binnen de opleidingen elektronica-ict en toegepaste informatie van de AP Hogeschool. Het heeft als doel een breed overzicht te geven van de *wereld van de cybersecurity*. Het doel is niet alomvattend te zijn, maar vooral om mensen zin te geven om meer te weten te komen over de belangrijke én boeiende wereld. Dit boek tracht ervan uit te gaan dat de lezer minimale voorkennis heeft inzake ICT, toch wordt verwacht dat een basiscursus netwerk-technologie gekend is (zaken zoals IP-adressering, routering en switching dient gekend te zijn).

## Boswachters en stropers

De subtitel,*"De beste digitale stropers zijn ook de beste cyberboswachters"*, van dit handboek verdient een extra woordje uitleg. Dit boek zal zeker niet de obscure wereld van de hackers en cybercriminelen verheerlijken, integendeel. We willen echter wel tonen hoe de stropers, de slechterikken in dit boek, te werk gaan, opdat het zo ons een beter beeld geeft waar we ons tegen moeten beschermen als goede cyberboswachters. 

## Dankwoord

Een oprechte dank aan Stefaan Somerling (RealDolmen) voor de feedback op het hoofdstuk omtrent GDPR. Geef gerust een sein als u, conform de GDPR wetgeving, liever uw naam niet in dit document ziet staan ;)

Dank aan eerstejaars Dimitriy Vassilchenko om als externe spellingchecker aardig wat (genante) typos te ontdekken!

Uiteraard ook een dikke merci aan de collega's die feedback op dit document hebben gegeven, en dan zeker aan Michael Boeynaems en Serge Horsmans!

# Waarschuwingen

Dit brengt ons automatisch bij een erg belangrijke waarschuwing: je zal in dit handboek geregeld technieken en tools tegenkomen die erg verregaande gevolgen kunnen hebben indien ze misbruikt worden. We tonen deze zaken enkel vanuit het standpunt dat zonet werd besproken aangaande de beste cyberboswachters zijn de digitale stropers. Het is erg belangrijk dat je begrijpt dat je deze tools en technieken NOOIT of te NIMMER voor kwade doeleinden mag gebruiken. Het is zelfs zo dat het gebruik van veel van deze zaken strafrechterlijke gevolgen kunnen hebben, inclusief grote boetes tot jarenlange opsluiting.

Indien je dus deze tools of technieken wenst te gebruiken dan mag dit enkel onder volgende voorwaarden:

* Op doelwitten (denk aan servers, webpagina's, gebruikers, etc.) waar jij de eigenaar van bent.
* Op doelwitten waar je geen eigenaar van bent, maar waar je wel expliciete toestemming voor hebt gekregen.


## Opletten met experimenten

Indien je van plan bent om met bepaalde tools te experimenteren hou dan rekening met volgende tips:

* Werk zoveel mogelijk met virtuele machines.
* Hou er rekening mee dat bepaalde tools permanente "gaten" slagen in je systemen. Deze kunnen dus na (of tijdens!) je experimenten door digitale stropers misbruikt worden. 



## Waarschuwing over dit handboek

Deze cursus is nog erg in opbouw en is het resultaat van naarstig schrijven tijdens de laatste 2 lockdowns. Zo zal je zien dat:

* Sommige teksten nog niet zijn nagelezen qua inhoud én spelling.
* Sommige hoofdsukken nog niet compleet zijn, of gewoon onbestaande zijn.
* Enkele afbeeldingen nog niet gecleared zijn om gebruikt te worden qua rechten.


Alle feedback is in deze fase zéér welkom:

* Schrijffouten.
* Zinnen die onduidelijk zijn.
* Paragrafen die je niet begrijpt.
* Essentiële informatie/teksten die prioritair moet worden geschreven (in jouw opinie).
* Zaken die ZEKER niet meer aangepast mogen worden omdat ze geniaal zijn.


## Changelog

**Dit is versie 0.4.1** (20/1/22)

* 0.4.1
  * Remarks collega Boeynames verwerkt
  * Nuttige links appendix toegevoegd
* 0.4.0
  *  Iot Sectie vervolledigd
  *  Spellingcheck eens opgezet
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
  * Uitleg en tekeningen certificaten toegevoegd. Hiermee kan hoofdstuk crypto (voorlopig) als afgerond beschouw worden.
* 0.0.7
  * Aantal tekeningen omgezet 
* 0.0.6
  * Wifi hoofdstuk vervolledigd (deels Engelstalig) Afbeeldingen moeten nog goed gezet worden.
* 0.0.5
  * Hoofdstuk 1 en 2 aangevuld en op schrijffouten verbeterd.

