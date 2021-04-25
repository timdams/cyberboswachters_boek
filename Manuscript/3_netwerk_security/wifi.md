# Wifi security

:::tip
Alhoewel dit hoofdstuk integraal na het crypto hoofdstuk komt, is het toch interessant om dit hoofdstuk geschrankt met het crypto hoofdstuk door te nemen als volgt:
* "Crypto" tot en met "Symmetric stream ciphers".
* "Wifi security" tot en met "WEP en waarom het faalde".
* De rest van "Crypto".
* De rest van "Wifi security"
:::

## De problemen van Wifi

We kunnen draadloze netwerken, specifiek wifi-netwerken, niet meer uit ons leven inbeelden. De opkomst van de IEEE 802.11b standaard in 1999 veroorzaakte een kleine revolutie in de manier waarop bedrijven en privégebruikers konden werken. Plots kon je met een laptop van overal in het gebouw - en zelfs er buiten- op het netwerk geraken. Die vrijheid voor de gebruikers betekende wel een nachtmerrie voor de cyberboswachters. Een netwerkkabel heeft een intrinsieke extra beveiliging: enkel daar waar de kabel ligt kunnen gebruikers aan het netwerk geraken. Zolang je dus geen netwerkkabel bijvoorbeeld naar de publieke parking brengt kan niemand van daar illegaal het netwerk benaderen. Met wifi leek het alsof plotseling het hele netwerk in een straal van tientallen meters rond het gebouw beschikbaar was, met alle gevolgen van dien.

![](wifi/afstand.jpg)

Al gauw werd een nieuwe sport uitgevonden door hobbyist hackers en professionele cybercriminelen: **wardriving**. De idee is eenvoudig: rijdt rond in de stad en laat de laptop naast je in de auto scannen naar alle netwerken, met extra aandacht voor die netwerken die geen of zwakke beveiliging hadden.

::: note

![](wifi/wargames.png)

De term wardriving komt van de term *wardialing* die op zijn beurt gebaseerd is op de  klassieke cyber-cult film "Wargames" uit 1983. Voor de geschiedkundigen onder ons, wardialing was het opbellen van willekeurige telefoonnummers met je modem in de hoop een zogenaamd *bulletin board system oftewel **BBS** (een pre-internet forum zeg maar) te vinden.
:::

Draadloze netwerken die gevonden worden hebben dan ook een schare aan problemen:

* **Eavesdropping**: iedereen kan "meeluisteren" wat er door de lucht vliegt. Dit heb je niet met een bedrade kabel. 
* **Invasion**: je kan eenvoudig verbinden met het netwerk indien er geen beveiliging voorzien werd. Iets dat je dus bij een bedraad netwerk enkel kunt als je fysiek toegang hebt tot een netwerkkabel.
* **Man-in-the-middle aanvallen**: hier gaan we zo meteen dieper op in.
* **Backdoor**: een veelvoorkomend probleem zijn zogenaamde **rogue access points** die worden bijgeplaatst op het netwerk door goedbedoelde werknemers die zou het het bereik van het netwerk wat willen uitbreiden. Vaak zijn echter de beveilingsinstelling van zo'n (meestal goedkoop) access point niet zo sterk als die van het bedrijf. Bijgevolg is dit de ideale backdoor voor malafide gebruikers die het netwerk aan het surveileren zijn. Wanneer ze een netwerkscan doen zullen ze tientalle goed beveiligde access points zien en 1 zwak beveiligd.

![Een rogue access point is de ideale manier om binnen te geraken voor hacker.](wifi/rogue.png)

* **Denian-of-service op fysiek niveau**: om een gebruiker toegang tot een bedraad netwerk te ontzeggen op fysiek niveau dien je de kabel door te knippen. Bij wifi is dit nog eenvoudiger: de "kabel" bij wifi zijn de frequentiebanden in de lucht waarbinnen de apparaten mogen werken (circa 2.4 Ghz bij de oudere wifi apparaten, nu meestal rond de 5 Ghz band). De wifi-apparaten kunnen enkel met elkaar communiceren indien zij een signaal naar elkaar over die frequentieband kunnen sturen op een moment dat niemand anders in de buurt die band gebruikt (zie note hierna). Als een malafide gebruiker dus die frequentieband vult met andere signalen, dan zullen de legale gebruikers nooit iets kunnen uitsturen. Wil je dus een wifi netwerk *Dos'n*, koop dan een signaalgenerator die op de juiste frequentieband de nodige ruist uitzend en klaar is kees.

::: note
Bedrade netwerk apparaten werken volgens het CSMA/CD (Carrier Sense Multiple Access / Collision Detection) om met elkaar over de draad te communiceren, hierbij detecteren ze wanneer er 'botsingen' tussen pakketen voordoen en de informatie dus opnieuw moet uitgestuurd worden. Bij draadloze netwerken is het echter onmogelijk om *botsingen in de lucht* te detecteren, daarom werken ze met een variant: **CSMA/CA** , oftewel CSMA/ **Collision Avoidance**. Een wifi-apparaat dat iets wil uitsturen zal eerst controleren of de frequentieband waarop ze werken vrij is, enkel dan zal er vervolgens een pakketje de lucht worden ingestuurd.
:::

::: tip
Sommige gebruikers schakelen het broadcasten van hun netwerknaam (het zogenaamde **SSID**) uit in de hoop dat zo dat buren, voorbijgangers en wardrivers hun netwerk niet kunnen zien. Helaas is dit zogenaamde *snake's oil*: het geeft een vals gevoel van veiligheid. Je kan weliswaar SSID-broadcasting uitzetten (dit is een pakketje dat je access point elke paar seconden uitstuurt om aan iedereen die luistert te zeggen *"Hallo, hier is het netwerk met naam X, en dit zijn de parameters die je nodig hebt om met mij te verbinden"*) maar het SSID wordt ook in een hoop andere pakketjes de lucht in gestuurd. Een beetje wifi hacker kan dus het SSID ogenblikkelijk uit de lucht plukken, ongeacht dat broadcasting werd uitgeschakeld of niet.
:::

## De originele wifi beveiliging

Om de huidige, en betere, beveiliging van wifi te appreciëren gaan we wederom even terug in de tijd om te kijken hoe de originele IEEE wifi standaard de beveiliging beschreef. Het zal een ietwat horror-achtige tocht worden waarin we gaan ontdekken dat enkele stevige hiaten ervoor gezorgd hebben dat illegale toegang tot bijna ieder wifi netwerk rond de eeuwwisseling binnen enkele minuten kon gebeuren. Lees verder en huiver mee.

### Onbeveiligde managementframes 

Veel keuzes die in de IEEE standaard werden gemaakt zijn vermoedelijk het gevolg dat men leentje buur is gaan spelen bij de reeds bestaande IEEE standaarden voor bedrade netwerken. Echter, bij bedrade netwerken had je niet de inherente onveilige omgeving van het draadloze aspect, waardoor op gebied van beveiliging hier weinig tot geen aandacht aan werd besteed. 

Management frames in wifi zijn frames die ervoor zorgen dat alle aanwezigen op het netwerk op een ordentelijke manier met elkaar kunnen communiceren. Deze frames zorgen bijvoorbeeld voor:

* Om een client verbinding te laten maken met een netwerk.
* Om SSIDs te broadcasten.
* Clients de opdracht te geven het netwerk te verlaten.
* Om te verbinden met een ander access point van hetzelfde netwerk (*handover*).

Net zoals bij bedrade netwerken, koos men bij de IEEE wifi standaard om deze managementframes **zonder enige vorm van beveiliging** te gebruiken (er werd geen *CIA* voorzien). Dit zorgde ervoor dat niet legale gebruikers zelfs management frames konden uitsturen op een netwerk, zonder dat de ontvangers ervan konden controleren of de bron wel een legaal access point of client was.

Dit resulteerde in onder andere volgende scenario's:

* Een hacker kan legale gebruikers DoS'n door constant zogenaamde *disassociation* naar hen te sturen. Dit frame, gebruikt door access points, geeft aan clients de opdracht dat ze het netwerk moeten verlaten. De hacker kan zo'n frame uitsturen en daarbij het "source" veld instellen op het MAC-adres van het access points. Dit spoofing kan ongecontroleerd, waardoor legale gebruikers dit frame altijd zullen aanvaarden én vervolgens uitvoeren: de gebruiker kan niet meer verbinden met het netwerk zolang de disassociation frames blijven verstuurd worden (** disassociation flooding**)
* **Identity spoofing** was ook eenvoudig daar de hacker eender welk veld in de frames kan aanpassen. Van zodra hij een legale gebruiker met voorgaande techniek van het netwerk heeft geschopt, kan hij vervolgens zichzelf voordoen als deze gebruiker. Hiervoor moet hij gewoon het MAC-adres spoofing van de legale gebruikers tijdens de communicatie met het access point.

![](wifi/spoofwifi.png)

* En last but not least laten de onbeveiligde management frames toe dat we eenvoudig een  access point kunt nabootsen (**impersonation**). Vervolgens kunnen we een  **man-in-the-middle aanval** uitvoeren daar een hacker zich kan plaatsen tussen de gebruiker en het internet en zo informatie kan ontfutselen. 
  

![](wifi/mitmwifi.png)

::: tip
De linux tool *AirSnarf* laat toe om fake hotspots (publiek wifi netwerk) op te zetten. Hierbij maakt het gebruikt van de onbeveiligde management frames. Een scenario in België dat gegarandeerd success heeft (vanuit het standpunt van de hacker) is een fake Telenet Wifree hotspot op te zetten. Hierbij zal je eerst de login pagina van Telenet  Wifree kopieren en via een lokale webserver aanbieden aan de gebruikers die op jouw access point met de naam "Telenet Wi-Free" verbinden. Je kan nu van iedere gebruiker de gebruikersnaam en paswoord stelen telkens deze die informatie op jouw fake pagina invoert.
:::


::: alert
Volgende Engelstalige teksten koment uit een oudere cursus van dme en zullen (ooit) vertaald worden. Op deze manier kan ik echter focussen op jullie zoveel mogelijk leerstof in cursusvorm aan te bieden.
:::


### Phase 1 : WEP, the original security

The original “ANSI/IEEE Std. 802.11” was written in 1999 and had the purpose “to develop a medium access control (MAC) and physical layer (PHY) specification for wireless connectivity for fixed, portable, and moving station within a local area.”  
The security chapter in the standard (Chapter 8: “Authentication and Privacy”) was only a mere 10pages long, compared to the total number of pages (528) this might be seen as a forebode of how little security was originally conceived in the standard.

Before we dive into WEP, the original *security motor* of wifi, we will first have a look how clients actually join a wireless network. As previously noted, this prcoes includes the usage of unprotected management frames.


#### Joining a network
The moment there is any form of interaction between the attacker and his target he can begin his malicious acts. The same applies to wireless hacking: before being to hack a network the attacker first needs to find one and establish a 'link', in this case this can be nothing more but an antenna that captures all passing radio signals.
Yet, capturing data passively as described is one thing, actively attacking a network is a whole other business. To be able to do so, an attacker needs to actually join a network, one way or another. 

The IEEE 802.11 standard specifies how a wireless LAN can be joined. Several steps need to be undertaken before a user or attacker can be granted actual permission to the network and use it for higher-layer data traffic:
1.	**Scanning**: Searching for possible networks to join.
2.	**Joining**: Choosing a network you want to access.
3.	**Authentication**: Giving the right credentials to be allowed to use the network.
4.	**Association**: Making sure the system keeps track of your location in the network.
It is important to note that a user or attacker can only begin using a network’s resources when he is associated.



##### Scanning

Any device that wants to use a network first needs to find one, and so it scans the area to discover a compatible network to join. 
Several parameters are used in the scanning procedure and some of them can be specified by user; many implementations have default values for these parameters in the driver.
One of these parameters is the SSID, or Service Set Identifier, which contains the name of the network. With this parameter, the user can choose to scan for a specific network, or scan for any network in the area using the broadcast SSID. 

The SSID is a 32byte ASCII character string as described in the 802.11 specifications. In these specifications is also stated that any client setting this string to a ‘NULL’ string will associate to any access point regardless of the SSID setting on the access points. This is referred to as the broadcast SSID and is normally only used in Probe Request frames when a station attempts to discover all the 802.11 networks in its area.

##### Joining

After the scan report is made the station can choose to join one of the networks. This joining is not the same as associating; it is analogous to aiming a weapon, you are only planning to use the chosen network and its services, but first you have to be authenticated one way or the other and be associated.

What network is joined depends on whether the user chooses one or not. If the user lets the device choose, the station works with some criteria to make the decision like the power level and signal strength.** When chosen, the station has to synchronize its timing and also match the physical and MAC parameters.** It then tries to authenticate itself.

##### Authentication

When in a wired network, authentication is almost provided by the mere physical access; if you are close enough to plug in a cable, you most likely were allowed by, for example, the receptionist at the front desk and thus need no extra authentication to use the network.

This is certainly not the fact in a wireless LAN. Therefore authentication was added to the process of joining a network nonetheless. Two major approaches are specified by 802.11 to ensure that a station attempting to associate with a network is allowed to do so:

* **Open-system authentication** (might include WEP)
* **Shared-key authentication** (includes WEP)

802.11 authentication as originally specified as a one-way street. There is no mutual authentication whatsoever, thus allowing a malicious attacker to employ ‘man-in-the-middle’ attacks (see earlier) without the end user knowing it. A rogue access point could send Beacon frames for a network it is not part of and for example attempt to steal authentication credentials.

No other authentication algorithms are defined in the 802.11 standard but the two mentioned before; there exists however a third popular (but not yet standardized) method, 

* **MAC Address Authentication using a MAC-ACL**: this is simply a whitelist (ACL stands for **access control list**) containing all the MAC-addresses that are allowed on the network. However, as we've seen, this is useless snce MAC spoofing in wifi is peanuts (including sniffing the air for a legal MAC-address).

**Open-system authentication**

Originally the open-system authentication was seen as the ‘no-security’ method of authentication for wireless networks. History however has proven that this mode is now more secure when used in 802.1X since it does not leak any information on the used encryption etc (more about this later). Two frames are exchanged in this setup:

1. From client to access point, requesting access .
2. The other way around, with the access point  basically sending an "hello there" frame.

If no encryption is used in the network, any device knowing the SSID of the AP can gain access to the network. With WEP encryption enabled, the WEP key itself becomes a form of access control. If a device does not have the correct WEP key, even though authentication was successful, the device will be unable to transmit data through the AP. And neither can the device decrypt data it receives from the AP. This way however, there is no security against attackers that have stolen/cracked the WEP key; there is no form of real user authentication.

::: note
It may seem useless to have an authentication algorithm like this that provides no real security when no other encryption is used. However, there are many wireless devices that simply don’t have enough CPU resources to support more complex authentication algorithms. Hand-held devices like bar-code reader, network scanners etc just need quick access to a network without the extra hassle of authentication and therefore could use open-system authentication.

**Shared-key authentication**

Shared-key authentication, as its name implies, requires that a shared key is distributed to the stations before they attempt to authenticate. This is done using WEP and therefore can only be used with products that implement WEP. Proving that you own the correct WEP key is enough proof to be allowed on the network.

This proof is accomplesh through a  **challenge-response** system:
1. The access point creates a random string (*the challenge*) and sends this in plaintext to the client
2. The client encrypts this string and sends it back to the access point (*the reponse*)
3. The access point will try to decrypt the response using his own WEP key: if the original challenge text appears, the access point knows that the response was encrypted with the correct key and so will grant access to the client on the network.

![](wifi/sharedkey.jpg)

##### Association

Once authentication is completed, the station is allowed to associate and/or reassociate with any access points in the network, for which he is authenticated. 

Once associated, actual data transmissions (i.e. usage of the network) can start. Depending on the settings of the network, it is at this point that actual encryption of the data starts. This encryption is accomplished using WEP, as explained next.


#### WEP

After being associated to a wireless network, the eavesdropping problem (and others) become obvious. Therefore the 802.11 specifications described **WEP** or **"Wired Equivalent Privacy**", a protocol that was believed to create the same level of privacy experienced on a wired LAN. WEP is 802.11's optional encryption standard implemented in the MAC Layer that most wireless LAN-cards and access point vendors supported around the time Wifi become immensely poppular.

When WEP is enabled, all data is encrypted before being transmitted. Only with the right key can the receiver decrypt the data afterwards. And so, when a user is finally associated with a network, he can rely on WEP to have some form of privacy.

:::note
To be exact: the MAC layer receives packets from the LLC layer. If WEP is enabled this packet is sent to WEP where it is fragmented, if needed, into several frames. It is these frames that are encrypted and sent further down, to the PHY layer.

![The 802.11 layers have different names compared to the classic OSI layers, but there functions are basically the same.](wifi/osimac.png)

:::


##### How WEP works

![WEP in full](wifi/wepencr.png)

WEP uses RC4, a symmetric stream cipher and a WEP-key to create a pseudo random key stream. It is based on the principle of a one-time pad, which is the only known encryption scheme that is mathematically proven to protect against certain types of attacks. The RC4 algorithm is a set of rules used to expand the key into a key stream as a explained earlier. This generated stream is XOR’d with the plain text producing the cipher text. To read this text again, the receiver needs to have the same key. Using this key he then recreates the same pseudorandom stream and XOR’s the cipher text.


![Integrity check](wifi/crc.png) 

Confidentiality and integrity are handled simultaneously. Before the encryption, the frame is run through an integrity check algorithm (CRC-32), generating a hash called the integrity check value (ICV). This ICV protects the data from being forged during transmission. Both the frame and the ICV are encrypted making the ICV unavailable to casual attackers. 

The decapsulation (decryption) is basically the reverse procedure, with that respect that the receiver also makes a CRC-32 hash which is compared to the one received. If both received and self-made hash are equal the data is considered ‘clean’ (i.e. was not changed due to random noise, etc)

Shown in the following figure is a schematic overview of the resulting frame:

![WEP frame layout](wifi/wepframe.png) 

::: note 
To protect traffic from brute-force decryption attacks, a set of up to four default keys is used. 
The default keys, identified by a variable keyid (0 to 3), need to be shared among all stations in a service set. Once a station has obtained the default keys for its service set, it can communicate using WEP.
:::

WEP originally specified the use of a 40bit secret key; proprietary versions however also support longer keys (e.g. 104, 128, etc). The secret key is combined with a 24-bit initialisation vector (IV) to create a longer key (64 if 40-bit key was used). The IV is a random generated number; however this was not stated in the original specifications. This new key (WEP-key + IV) is used as the seed  for the RC4 key stream generator. The key stream is then XOR’d with the frame body and the ICV.


![Encryption](wifi/crc.png) 

To enable the receiver to generate the same random stream, thus enabling him to decrypt the frame, the IV and keyid is placed in the header of the frame.

![WEP encryption in full](wifi/wepfull.png) 

![WEP decryption in full](wifi/wepdec.png) 

