Iso 27001 vermelden https://www.nen.nl/ict/digitale-ehtiek-en-veiligheid/cyber-privacy/informatiebeveiliging

netwerk security uitwerken

internet sec basics

iot security basics

basis security: hoe vallen ze aan.
basic security: hw/sw bassed attacks


todo: scytale remark "Ik vind dit stukje iets moeilijker om te volgen. Een figuur van een scytale (indien mogelijk) zou nuttig zijn. Ook wordt hier de 'known plain-text' aanval geintroduceerd. Ik veronderstel dat de andere aanvallen (chosen plaintext, etc.) dan verder nog aan bod komen?"

crypto: 
TODO cryptanalytic attacks vs bruteforce Bruteforce vs dictattack Noot omtrent quantum
computers  (vlak voor symm encr)

XOR'n uniformiteit

termen determnitische vs nondeterminitstische encryptie aanhalen en in uit IV verwerken

aanval rusland op ukraine januari 2022

bij diffie hellman sleutel uitwisseling: Public crypto kan gebruikt worden voor:
- asymmetrische encryptie
- digitale handtekening
- key exchange

De eerste twee haal je aan in de inleiding, maar de key exchange gebruik je nu om het concept verder uit te leggen. Dat leidde tot wat verwarring in mijn hoofd. 


bij "zowel bob als alice generen eerst een publiek/privaat sleutelpaar": Dit is correct, maar in DH worden deze 'geheime waardes' meestal geen sleutelparen genoemd. Het zijn simpelweg values die gebruikt worden tijdens de exchange die nadien kunnen worden weggegooid. Wat er wel nog gebeurt is dat de zaken die over en weer worden gestuurd soms nog gehandtekend worden met een RSA pair. Maar dat zit ver weg dus ik kan er naast zitten ;). 

"nij noot vlak voor "intermezzo hashes": Van RSA inderdaad. Ik dacht dat er twee grote groepen waren: 
- ontbinden in factoren
- discrete logaritmes
Maar ook dat zit ver weg


tekst bij iedere afbeelding 

bij certs: nuttig om web of trust uit te leggen (als alternatief op pki)

bij dig cert:
:::tip
In voorgaande uitleg impliceert de zin *"...en deze te vergelijken met het certificaat na decryptie met de publieke sleutel van de CA."* dat we toegang hebben tot die publieke sleutel. 

[16:28] Boeynaems Michael
Dams Tim ivm 📷 Image is dat verantwoordelijkheid meestal van OS-vendor om ervoor te zorgen dat die sleutel uptodate in os/browser aanwezig zijn? mijn kennis hierover gaat niet diep genoeg 🙂
Ja, zo begrijp ik het toch. Microsoft, Apple etc hebben een verificatieprogramma waarbij je kan vragen om op hun Root ca lijst te komen.

[16:28] Boeynaems Michael
En dan wordt die mee geïnstalleerd

[16:28] Dams Tim
top! thx


:::

ECC uitleggen



gdpr: Deze, en de volgende (recht op overdraagbaarheid) is IMO niet het belangrijkste van GDPR. Deze rechten zijn trouwens niet absoluut. De kern van GDPR is transparantie, fairness, en rechtmatigheid (en er zijn 6 rechtmatigheidsgronden). 


