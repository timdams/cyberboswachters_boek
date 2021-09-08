# IoT Security

We spraken in het eerste hoofdstuk al over de problemen die inherent zijn bij Internet-of-Things (IoT) apparaten en netwerken. Zo had je in 2016 het Mirai-botnet dat aantoonde hoe krachtig een botnet van IoT-apparaten kan zijn, puur door de grote hoeveelheid potentiëhle zombies.

Het is niet toevallig dat we dit boek afsluiten met het hoofdstuk omtrent IoT Security: alles (en meer) wat je in de voorgaande hoofdstukken hebt geleerd heb je namelijk nodig om IoT-netwerken te beveiligen. Er zijn zoveel potentiele manier voor digitale stropers om misbruik te maken van een slecht beveiligd IoT apparaat of netwerk dat het complexe probleem van netwerken beveiligen nog ingewikkelder is geworden door de eigenschappen van IoT apparaten, namelijk:

* Van nature zijn ze **low-power**, daar ze vele dagen of weken moeten voortkunnen zonder te veel verbruik. Ingebouwde security protocols mogen dus geen grote percentages van het vermogen opsouperen, zeker niet als dat ten koste is van de hoofdbestaansreden van het apparaat.
* Meestal, ook weer om een laag energieverbruik te behouden, hebben ze ook een **beperkte bandbreedte** ter beschikking (daarbij: beeld je de miserie op een wifi-netwerk in wanneer honderden kleine sensoren aan hoge bandbreedtes het netwek mee gebruiken).
* Zowel de fysieke dimensies, en bovenstaande 2 eigenschappen, zorgen er ook voor dat IoT-apparaten meestal maar een beperkt aantal zaken *kan*. Het heeft niet altijd de netwerkverbindingsmogelijkheden die je nodig hebt (meestal heeft een apparaat of bluetooth, of wifi, of een bedrade aansluiting, maar zelden alle drie) en ook qua opslag en processormogelijkheden zijn de apparaten uiteraard vaak veel beperkter dan de kracht van computers en mobiele telefoons. Het grootste probleem echter hiervan is dat IoT-apparaten *by nature* vaak **niet evident zijn om te updaten**. Sommige apparaten kunnen bijvoorbeeld enkel geüpdate worden door fysiek aan het apparaat te zijn (en dan door de firmware te flashen bijvoorbeeld). Vanuit een fysieke beveiligingsconcept is dat goed, maar niet als je apparaten een kritieke beveiligingslek hebben die dringend gepatch'd moet worden.

::: note
We gaan nogal liberaal om met de term IoT-apparaat, waarbij we ook negeren dat er grote verschillen zijn tussen "Enterprise IoT" en "huis-tuin-en-keuken IoT". Die eerste heeft meestal bijvoorbeeld wel zeer doordachte updatestrategieën en dergelijke, terwijl de slimme koelkast in je huis dat vermoedelijk niet zal hebben
:::

![Bron Juniper Research](iot/overview.jpg){ width=100% }

## OWASP IoT Top 10

::: note
Het Open Web Application Security Project (OWASP) is een open source-project rond computerbeveiliging. Individuen, scholen en bedrijven delen via dit platform informatie en technieken. (bron Wikipedia). Ook de Belgische tak van OWASP is erg actief en een interessante organisatie indien je van plan bent om een carrière binnen de cybersecurity wereld op te bouwen. Ze organiseren geregeld (meestal gratis) workshops en evenementen.
:::

Het OWASP heeft tal van erg interessante "Top 10" overzichten zoals de meest voorkomende webapp zwakheden, etc. Deze projecten bestaan meestal uit een hele reeks tools, *best practices* en gidsen en zijn dus de ideale manier om je te verdiepen binnen een specifiek cybersecurity domein. Eén van de actieve projecten is het "OWASP Internet of Things
" project (beschikbaar via (https://owasp.org/www-project-internet-of-things/)[https://owasp.org/www-project-internet-of-things/]) waarvan we de Top 10 hier zullen bespreken. 

::: tip
Bekijk zeker ook eens het IoT Goat project via (https://github.com/OWASP/IoTGoat/)[https://github.com/OWASP/IoTGoat/] dat is een *"insecure firmware based on OpenWrt and maintained by OWASP as a platform to educate software developers and security professionals with testing commonly found vulnerabilities in IoT devices. The vulnerability challenges are based on the OWASP IoT Top 10, as well as "easter eggs" from project contributors."*
:::

![Versie 2018, bron owasp.org)](iot/top10.jpg)