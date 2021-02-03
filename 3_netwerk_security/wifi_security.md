1. Introduction

Wireless LANs have become one of the most interesting targets for hackers today. Organizations are deploying wireless technology at a rate faster than most IT departments can keep up with. This rapid deployment is due, in part, to the low cost of the devices, ease of deployment, and the large productivity gains. Because Wireless LAN (WLAN) devices ship with all security features disabled, this wide deployment attracted the attention of the hacker community. Although most casual hackers are using these wireless connections as a means to get free Internet access or to hide their identity, a smaller group sees this situation as an opportunity to break into networks that otherwise might have been difficult to attack from the Internet. Because, unlike a wired network, Wireless LANs send data over the air and usually extend beyond the physical boundary of an organization. In particular, when strong directional antennas are used, a WLAN can reach well outside the buildings that it is designed for. This scenario creates an environment where traditional physical security controls are ineffective because the packets can be viewed by anyone within radio frequency range.

It is also easy to interfere with wireless communications. A simple jamming transmitter can make communications impossible. For example, consistently hammering an access point with access requests, whether successful or not, will eventually exhaust its available radio frequency spectrum and knock it off the network. Or if no jamming transmitters are at hand, why not use a domestic microwave oven which operates on the same 2.4GHz band as wireless LAN does. Other wireless services in the same frequency range can reduce the range and usable bandwidth of wireless LAN technology such as Bluetooth and other popular technologies. These intentional, or unintentional, denial-of-service (DoS) attacks can render wireless LAN devices unusable. No one likes buying an expensive networking tool and afterwards having to discover it can not provide what it was meant for in the first place: provide an equivalent to a wired LAN, with that respect that you can now roam freely around. The IEEE 802.11 group therefore implemented the "Wired Equivalent Privacy" ,a group of algorithms that provides, like the name implies, security equivalent to a wired LAN.

This text will discuss WEP from its early birth until its, actually pretty young demise. And perhaps more important, this text will discuss the successor to the infamous WEP: the Robust Secure Network (RSN) or WPA as it is more commonly known nowadays.

1. Threats

The most obvious and fundamental difference between traditional and Wireless LANs is the transmission medium. A wired infrastructure, with its inherent structured cabling and the limits enforced by physical boundaries, provides a degree of basic access control that is simply not present in a WLAN. Most companies have some physical access controls in place to prevent an outsider from simply wandering in from the street and connecting computer equipment to corporate networks; they hire security agents, install locks on unused network terminals, etc.

1.
  1. 1Wardriving

Since the physical boundaries of a WLAN however are pretty fuzzy and not stopped by a simple office wall many attackers employ the 'art' of wardriving (a variant on the old and infamous war-dialing from the movie Wargames). Wardriving basically means an attacker goes driving or walking around, looking for unsecured or mal-secured WLANs which he can abuse.

The concept of "wardriving" is simple : One needs a device capable of receiving an 802.11a/b/g/etc. signal, a device capable of locating itself on a map (GPS mostly), and software that will log data from the network detected. A wardriver then move these devices from place to place, letting them do their job. Over time, they build up a database comprised of the network name, signal strength, location, and IP/name space in use. One may even log packet samples and probe the access point for data available via SNMP. All this gathered data can then later be analyzed to look for passwords, sensitive information, or simply for the sake of showing off or getting an adrenaline kick. A wardriver will afterwards usually drive back to those networks that seemed interesting to break and try to do so.

A less common, but more spectacular variant to war-driving is war-flying1; a small jet plane equipped with a strong antenna is all one needs to hack WLAN from half a kilometer distance.
Wardriving itself could be purely done for fun but when employed to deface a certain company, the results could be problematic.

1.
  1. 2Warchalking

Warchalking, often combined with wardriving, is the practice of marking a series of symbols on sidewalks and walls to indicate nearby wireless access. That way, other computer users can power up their laptops and connect to the Internet wirelessly using the network of the warchalked building.

The symbols are drawn in three simple designs : two semicircles back to back to indicate an open node; a circle to indicate a closed node; and a circle with a "W" inside it to indicate a WEP node, which will probably be inaccessible to the public because such nodes use encryption for security. Each symbol has a Service Set Identifier (SSID) at the top and sometimes extra information such as maximum bandwidth, email of the provider etc are also warchalked.

It should be clear that not everyone likes his house being chalked, let alone that some intruder used your ISP to surf the net. Make note however that there also people who, for the sake of friendliness, warchalk their own house to enable others to use their network resources.

1.
  1. 3Other threats

Of course war-driving isn't the only way to break in to a WLAN. More often, threats don't come from outside the building. As will be explained, when describing the threat that exists with rogue access points, most security intrusions actually come from inside; more then 80% of the intrusions a company endures come from an employee.

Although not always on purpose, unskilled employees actually form a big risk: fiddling with settings might just open that little gap an attacker needs. It is a common fact that even the best security system is still dependable on humans input and it is always these 'puny' humans who will most likely be the weakest link in any security infrastructure.

Make note that even if you don't have a wireless network at the time of reading this document, that this guide might still provide general tips that don't necessarily apply only to wireless networks.

1.
  1.
    1. 3.1General threats

These general threats are:

_Invasion_: A hacker accesses the network, even though he is unauthorized to do so. Usually copying/stealing of data is the main goal of the hacker.

_Eavesdropping_: Because of the wireless aspect, eavesdropping is a very easy thing for the hacker to perform. A hacker doing eavesdropping will not actively invade the network but just passively sniff it. Any data passing by can be copied then.



_Man-in-the-middle attack_: Several specific man-in-the-middle attacks allow a hacker to pretend to be a valid access point. Employees will unknowingly connect to this fake access point and perhaps send login credentials or other sensitive data to the hacker.

_Rogue access point/back door_: Rogue access points usually don't involve a hacker, but an authorized employee instead. Employees sometimes install their own access point to have, for example, coverage in areas were the firm's wired or wireless LAN does not. Usually this access point will not have the necessary security settings installed compared to those belonging to the company.

In other words: rogue access point are an easy way in for hackers.

_Denial-of-Service Attacks_: DoS-attacks come in different mutations. When such an attack is initiated it is the hacker's wish to disable the network to such an extent that no data at all can be transmitted. DoS-attacks can be performed in many different ways, from jamming the 2.4Ghz signal until using management frames on the MAC layer. It should be noted that some DoS-attacks aren't the cause of hackers. A simple microwave oven (that has no or bad shielding) could (un)willingly jam a wireless network since it also operates on the 2.4Ghz band.

Following figures shows the clean spectrum measured on one specific 2.4GHz Wireless Lan Channel. The second picture shows the spectrum when an unshielded microwave oven is started nearby.



1.
  1.
    1.
      1. 3.1.1Specific threats

Besides these general threats that are also some more specific threats that not everyone is aware of. Companies having a wired network might have the following problems too, they usually however are more present in wireless networks. These threats should not be taken lightly and include:

_Laptop users_:

Mobility: A profound problem with wireless networks is the fact that users are usually mobile. Users walk around with their laptop, take the laptop on their trips, to their homes etc.

If any virus, worm or Trojan is installed on the laptop while the user is not on the corporate network he might pose a problem when he does access the corporate network afterwards. Since many classic corporate networks have a security setup based on perimeter or edge defence (i.e. DMZ, firewalls etc) any user that logs in inside the network is, in the classic way of thinking, considered secure. In other words: the viruses and Trojans have free access to the network.

It should at this point be noted that mobility and security don't like each other. Making a user in the wireless network more secure will usually mean that his mobility will decrease and vice versa.

Laptop theft: Another problem is that laptops are still a prize item for thieves, including hackers and spies. When corporate security is purely dependant of a specific piece of software (e.g. certificate) on the laptop, any user that has the laptop will be able to log in onto the network. In a classic wired environment this kind of behaviour would be ok (though even then it isn't the most secure way of doing things). With a laptop however all corporate data and network knowledge could be easily stolen without even having to enter the building itself.

_RF Coverage_: With a wired network the network can be contained simple by deploying cabling only at the desired places. A wireless access point however transmits through walls, roofs, etc making it not so transparent as to what area is actually covered. Even if you measure the signal strength at a given point and discover that it is very low and not useable with the equipment your employees have, it is possible that a hacker will use a very sensitive gain antenna and will thus still be able to get in the network.

_Default settings_: Still too many companies leave their equipment as it comes out of the box. All the settings (like SSID, administrator password, etc) are left unchanged, which makes the network very vulnerable for hackers since the default settings are usually easy to guess. Wardrivers for example will usually have a database with the default settings of each specific device and will try them out nonetheless to see whether the access point is easily to hack.

1.
  1.
    1.
      1. 3.1.2Above the MAC layer

Like all standards of the IEEE group, the 802.11 standard only describes the specifications for the lowest OSI layers: the MAC- and the PHY-layer.

This does not mean that higher layers are attacker-proof; Denial-of-service attacks for example can happen almost everywhere, anytime. However, this text is focused on describing security specific to IEEE 802.11 security.

It is extremely important to remember however that being secured on them MAC layer does not mean one is entirely secured! It is good advice to consider security on every layer, from the PHY/MAC through all the layers until the people who interpret this data.

1.
  1.
    1. 3.2Conclusion

Don't be taken aback by the many security threats that exist. There is a solution for nearly every one of them (all but some DoS-attacks) and each one of them will be described in the following chapters.

1. IEEE 802.11 Security

The IEEE 802.11 group has implemented a security part in their standard and has also released an updated version (in the 802.11i standard).

The advantage is that security is included in the standard meaning that any 802.11-based product will have that security. The downside however is that the original 802.11 security (WEP, or Wired Equivalent Privacy) is so flawed that lots of vendors implemented their own 'solutions', resulting in a plethora of both more and less secure products.

This chapter, bearing the same name as the title of this text will provide insights in how the original security was implemented by the IEEE 802.11 group. The threats described in the previous chapter were mostly known the IEEE group and so they tried to ensure that wireless LANs were as equally secured as a wired LAN.

The original "ANSI/IEEE Std. 802.11" was written in 1999 and had the purpose "_to develop a medium access control (MAC) and physical layer (PHY) specification for wireless connectivity for fixed, portable, and moving station within a local area."__2_

The security chapter (Chapter 8: "Authentication and Privacy") was only a mere 10pages long, compared to the total number of pages (528) this might be seen as a forebode of how little security was originally conceived in the standard.

Several aspects of this standard are important to understand how the original security was implemented. From a user's perspective, 802.11 might just as well be Ethernet. On a much deeper level however, 802.11 provides MAC-layer mobility while following the path made by previous 802 standards. It therefore required a number of additional services and more complex framing.

These services define the wireless LAN technology, and they allow equipment vendors to implement those services in whatever way they see fit. There are nine services in 802.11 which are summarized in "IEEE 802.11 Architecture" by Sven Deruyter.

Six of the nine services are management operations that allow a network to keep track of the mobile nodes and deliver frames accordingly. One service that is the most interesting here is the 'privacy' service that includes the WEP described after having explained how a wireless LAN is actually joined.

1.
  1. 4Joining a network

The moment there is any form of interaction between the attacker and his target he can begin his malicious acts. The same applies to wireless hacking: before being to hack a network the attacker first needs to find one and establish a 'link', in this case this can be nothing more but an antenna that captures all passing radio signals (eavesdropping).

Yet, capturing data passively as described is one thing, actively attacking a network is a whole other business. To be able to do so, an attacker needs to actually join a network, one way or another.

The IEEE 802.11 standard specifies how a wireless LAN can be joined. Several steps need to be undertaken before a user or attacker can be granted actual permission to the network and use it for higher-layer data traffic:

1. Scanning: Searching for possible networks to join.
2. Joining: Choosing a network you want to access.
3. Authentication: Giving the right credentials to be allowed to use the network.
4. Association: Making sure the system keeps track of your location in the network.

It is important to note that a user or attacker can only begin using a network's resources when he is associated.

1.
  1.
    1. 4.1Scanning

Any device that wants to use a network first needs to find one, and so it scans the area to discover a compatible network to join.

Several parameters are used in the scanning procedure and some of them can be specified by user; many implementations have default values for these parameters in the driver.

One of these parameters is the SSID, or Service Set Identifier, which contains the name of the network. With this parameter, the user can choose to scan for a specific network, or scan for any network in the area using the broadcast SSID.

The SSID is a 32byte ASCII character string as described in the 802.11 specifications. In these specifications is also stated that any client setting this string to a 'NULL' string will associate to any access point regardless of the SSID setting on the access points. This is referred to as the broadcast SSID and is normally only used in Probe Request frames when a station attempts to discover all the 802.11 networks in its area.

Interesting note: Many people claim that changing the SSID is a good solution when one needs a secured network, with no trouble from attackers. It should be clear that relying on the SSID as a means of securing a network is nothing but snake's oil.

Several vendors allow the AP to disable the broadcasting of the SSID, thus making it more difficult for an attacker to discover the SSID. With a sniffer however, this SSID can still be found by sniffing the probe response frames from the AP. The SSID should not be seen as a security measure!

1.
  1.
    1.
      1. 4.1.1Passive scanning

When a station is using passive scanning, to save battery power, it moves to each channel on the channel list and waits for Beacon frames that contain information about the BSS that send them. These beacon frames announce the existence of a network and are transmitted at regular intervals; they include several parameters needed to be able to join the network.

1.
  1.
    1.
      1. 4.1.2Active scanning

Stations using active scanning take a more assertive role. On each channel, Probe requests are used to solicit responses from a network with a given name. The scanning station can even Probe request any network when the SSID is set to broadcast, NULL. The station basically shouts, "Can anybody hear me?!"(Broadcast) or be specific and call "Can network X hear me?!".

Networks generate probe response frames when they hear a Probe Request and so the station knows how many networks he could join.

The result of this scanning is described in a 'scan report' listing all the BSSs that were discovered and their parameters (mainly timing parameters, a Beacon interval, etc).

1.
  1.
    1. 4.2Joining

After the scan report is made the station can choose to join one of the BSSs (this can involve the user choosing a specific BSS). This joining is not the same as associating; it is analogous to aiming a weapon, you are only planning to use the chosen network and its services, but first you have to be authenticated one way or the other and be associated.

What BSS is joined depends on whether the user chooses one or not. If the user lets the device choose, the station works with some criteria to make the decision like the power level and signal strength.

When chosen, the station has to synchronize its timing and also match the physical and MAC parameters. It then tries to authenticate itself.

1.
  1.
    1. 4.3Authentication

When in a wired network, authentication is almost provided by the mere physical access; if you are close enough to plug in a cable, you most likely were allowed by, for example, the receptionist at the front desk and thus need no extra authentication to use the network.

This is certainly not the fact in a wireless LAN where war-driving and other threats are becoming more popular each day. Therefore authentication was added to the process of joining a network nonetheless.

Two major approaches are specified by 802.11 to ensure that a station attempting to associate with a network is allowed to do so:

- Open-system authentication (might include WEP)
- Shared-key authentication (includes WEP)

802.11 authentication as originally specified is a one-way street. There is no mutual authentication whatsoever, thus allowing a malicious attacker to employ 'man-in-the-middle' attacks without the end user knowing it. A rogue access point could send Beacon frames for a network it is not part of and for example attempt to steal authentication credentials.

No other authentication algorithms are defined in the 802.11 standard but the two mentioned before; there exists however a third popular (but not yet standardized) method, which we will also briefly discuss:

- MAC Address Authentication using a MAC-ACL

1.
  1.
    1.
      1. 4.3.1Open-system Authentication

Originally the open-system authentication was seen as the 'no-security' method of authentication for wireless networks. History however has proven that this mode is now more secure when used in 802.1X since it does not leak any information on the used encryption etc (more about this later).

There is a minor authentication exchange consisting of two frames:



1. From mobile station to access point: being a Management frame of subtype Authentication. It contains no actual data; the Authentication Algorithm Identification is set to 0 to indicate that the open-system method is in use. And the Authentication Transaction Sequence number is set to 1 to indicate that this is the first frame in the sequence. The access point uses the source address of the frame as the identity of the sender.
2. The access point then processes the request and returns its response, which is also a management frame, subtype authentication. This time the Sequence Number is set to 2 and also a Status Code is set to indicate the outcome of the authentication request. (Success or failure).

If no encryption is used in the network, any device knowing the SSID of the AP can gain access to the network. With WEP encryption enabled, the WEP key itself becomes a form of access control. If a device does not have the correct WEP key, even though authentication was successful, the device will be unable to transmit data through the AP. And neither can the device decrypt data it receives from the AP. This way however, there is no security against attackers that have stolen/cracked the WEP key; there is no form of real user authentication.

Note: It may seem useless to have an authentication algorithm like this that provides no real security when no other encryption is used. However, there are many wireless devices that simply don't have enough CPU resources to support more complex authentication algorithms. Hand-held devices like bar-code reader, network scanners etc just need quick access to a network without the extra hassle of authentication and therefore could use open-system authentication.

1.
  1.
    1.
      1. 4.3.2Shared-key Authentication

Shared-key authentication, as its name implies, requires that a shared key is distributed to the stations before they attempt to authenticate. This is done using WEP and therefore can only be used with products that implement WEP.

With shared-key authentication there is an exchange of 4 management frames, again of the Authentication subtype.

Like the open-system's first frame, this frame contains the information to identify the authentication algorithm (1 for shared-key) and the sequence number (1).

Yet, now the access point does not simply allow the user to use the network, it instead sends frame serving as a challenge. This frames can contain up to four elements:

1. Authentication Algorithm Identification (shared-key)
2. Sequence Number (2)
3. Status Code (0=success,1=fail)
4. Challenge Text: when the Status Code is successful, the frame includes the Challenge Text which is composed of 128 bytes generated using the WEP key stream generator with a random key and initialization vector (described hereafter in 'WEP').

The third frame is the mobile station's response to this challenge. Before transmitting the frame, the mobile station processes this frame with WEP. Only the header (that identifies the frame as an authentication frame) is preserved, the rest is encrypted by WEP. This management frame contains three information elements:

1. Authentication Algorithm Identifier
2. Sequence number(3)
3. Challenge text: same as was send in frame 2 but now encrypted (so are the other two information elements)

After receiving the third frame, the access point attempts to decrypt this frame and verify the WEP integrity check. If the frame decrypts to the original Challenge Text, and the integrity check is verified, the access point will respond with a status code of successful.

Decryption of the challenge text proves that the mobile station has been configured with the WEP key for this network and should be granted access. Yet, if any error occurred, the access point returns to an unsuccessful status code.

1. Preauthentication

Stations don not need to associate immediately with an access point after authentication, they can also preauthenticate with several other access point during the scanning process. This allows the station to reassociate with another access point immediately when moving into their coverage area, rather than having to wait for the authentication exchange.

A station capable of preauthentication thus loses less time when moving about and makes roaming itself a smoother operation (same as the handover with mobile phones).

A time-out exists in the AP that will prevent an attacker from flooding the network with unused preauthentication requests. Usually a preauthenticated station will be removed from the AP if no activity has occurred for 10 or more minutes (duration can vary).

1.
  1.
    1.
      1. 4.3.3MAC Address Authentication

Several vendors allow this non-standardized form of authentication. The AP has a list of allowed addresses (or a list of disallowed/banned addresses), which it compares with the clients MAC address. More and more APs also support the use of an external list located on a remote server which shall be discussed further on.

Note: In the 'old days', a MAC address was a unique, unalterable hardware address and thus considered safe. Modern software tools exists however that can forge the MAC-address, called MAC-spoofing3 and thus making this form of security unreliable

1.
  1.
    1. 4.4Association

Once authentication is completed, the station is allowed to associate and/or reassociate with any access points in the network, for which he is authenticated.

When the station associates, a recordkeeping procedure is started which allows the distribution system to track the location of each mobile station. Frames destined for a specific station can be forwarded to the correct AP. To make this recordkeeping work, the station needs to register itself on the network which can be done be sending an ARP4 request so the stations MAC address can be associated with the switch port connected to the AP.

There are no association points in an ad hoc network, restricting association to infrastructure networks and is the logical equivalent to physically plugging the cable into a wired network.

1.
  1.
    1.
      1. 4.4.1Association procedure

A basic association procedure is shown:

Unlike the message exchange for the authentication, no sequence numbering is required for the association procedure since only one message is exchanged per side:

1. The mobile station initiates the association procedure by sending a request to an AP, using an Association Request frame. If the station hasn't authenticated yet it receives a Deauthentication frame from the access point in response.

Otherwise the access point processes the request to see if the association should be granted, which can be done in several ways and depends on the access point implementation; one common consideration is the amount of space required for frame buffering5.

1. When the request is granted, the access point responds by sending a status code 1 (success) and an Association ID (AID) which is a numerical identifier.

Unsuccessful association requests only include a status code, ending the procedure

1. The access point now processes the frames for the mobile station and actual traffic is started.

Most commonly used products use Ethernet as the distribution system. If an access point receives a frame destined for a mobile station that is associated with him, it will bridge the frame from the Ethernet to the wireless medium (or buffer the frame if the mobile station is in power-saving mode).

In shared Ethernet, the frame will be send to all the AP's and only be bridged by the correct AP.

In switched Ethernet, the station's MAC address will be associated with a particular switch port. This switch port is, of course, connected to the access point currently providing the services for the station. Therefore a station may not be associated more then once to a station at the same time.

1.
  1.
    1.
      1. 4.4.2Reassociation procedure

The process of moving an association from an old access point to a new is called reassociation. Over the air, this is almost the same as the previously described association; on the backbone network, the access points may interact with each other to move frames. When a station moves from the coverage area of one access point to another, it uses the reassociation process to inform the 802.11 network of its new location. Reassociation is also used to rejoin a network if the station leaves the coverage area and return later to the same AP.

This procedure is shown in ..

The station monitors the overall signal strength it receives from the current associated AP, as well as the signal quality of the access points in the same Extended Service Set (ESS).

When the station detects that another access point would be a better choice, it initiates the reassociation procedure. Before the first step though, the station needs to authenticate to the new access point if it has not done so already.

1. The first step is issuing a Reassociation Request to the new AP. The data is similar to an Association Request; the only difference is that the Reassociation Request frame contains a field with the address of the old AP. This address is needed for the new access point to communicate with the old access point to determine that a previous association did exist. If this isn't the case, a Deauthentication frame is sent to end the procedure.
2. The access point then processes the request, which is again similar to the processing during an Association Request. If the request is granted, the access point responds by sending a Status Code of 0 (success) and the new AID.

Unsuccessful Reassociation request include a single Status Code, and the procedure ends.

1. The new access point contacts the old access point to finish the reassociation procedure (again done using IAPP).
2. The old access point sends any buffered frames for the mobile station to the new AP.
3. Any buffered frames are transferred so they can be delivered to the mobile station
4. The old access point ends the association with the mobile station. Mobile stations are allowed to associate with no more then one access point at any given time. The new access point begins the optional processing of the previously buffered frames and then starts any other traffic on request.

1.
  1.
    1. 4.5Spoofing management frames

A problem with all formerly discussed management frames (i.e. authentication, association, disassociation, …) is that they are always send unencrypted. Even with WEP enabled that is. Anyone can theoretically transmit these frames (spoofing) without the receiver knowing that he is receiving spoofed frames.

This results in several attacks which may cause the unavailability of the wireless network to a certain user, or group of users.

1.
  1.
    1.
      1. 4.5.1Denial-of-Service attack

This attack is relatively easy to perform and exist out of three steps:

1. The attackers changes his MAC-address to that of the access point the victim is using.
2. The attacker then constructs a Disassociation frame which he sends to the network broadcast address.
3. The attackers keeps on repeating step 2

The victim receiving the disassociation frame will dutifully disconnect each time it receives the frame making the network unusable to the user.

1.
  1.
    1.
      1. 4.5.2Session Hijacking Attack

For this attack to work, the attacker needs to perform 5 steps:

1. The attacker changes his MAC-address to that of the access point the victim is using.
2. The attacker then constructs a Disassociation frame which he sends to the network broadcast address.
3. The session the victim had with the AP still exists (from the AP points of view) which the attacker can now take over.
4. The attacker changes his MAC-address to that of the victim.
5. The attacker now has hijacked the session and can pretend to be the victim without the AP knowing this.

1.
  1.
    1.
      1. 4.5.3Man-in-middle attack

This attack enables an attacker to pretend being a legal AP. The victim will unknowingly send his data to the attacker's AP.

1. The attacker changes his MAC-address to that of the victim's AP.
2. A Disassociation Frame is constructed and transmitted to the victim.
3. The session can now again be hijacked by the attacker as explained previously.
4. The attacker then changes the MAC-address on a second wireless interface to that of the victim's AP.
5. The attackers sends an association conversation from this second interface to the victim (For this step to work it is important that the signal strength of the attacker is better then that of the victim's original AP)
6. The victim is know associated with the attacker's "fake AP".
7. All traffic between the interfaces is routed and the attacker can easily sniff the content.

1.
  1. 5WEP
    1. 5.1Situating WEP

After being associated to a wireless network, the eavesdropping problem (and others) become obvious problem. Therefore the 802.11 specifications described WEP or "Wired Equivalent Privacy", a protocol that was believed to create the same level of privacy experienced on a wired LAN. WEP is 802.11's optional encryption standard implemented in the MAC Layer that most wireless LAN-cards and access point vendors support.

When WEP is enabled, all data is encrypted before being transmitted. Only with the right key can the receiver decrypt the data afterwards. And so, when a user is finally associated with a network, he can rely on WEP to have some form of privacy.

WEP is a MAC-service, operating on the MAC-layer of an 802.11 network. When enabled, WEP will encrypt and decrypt data passing to and from the PHY layer.

To be exact: the MAC layer receives packets from the LLC layer. If WEP is enabled this packet is sent to WEP where it is fragmented, if needed, into several frames. It is these frames that are encrypted and sent further down, to the PHY layer.

Important note: the exact naming for frames and packets in an 802.11 standard is:

- MSDU or MAC Service Data Unit: is received from the LLC layer and will be named packet throughout this text for readability
- MPDU or MAC Protocol Data Unit: when the MAC-layer needs to send an MPDU to the PHY and discovers it's too large, it will fragment this MPDU in several (or one) smaller MSDUs. Throughout this text we will name these MSDUs frames, again for readability.

1.
  1.
    1. 5.2Encapsulation

WEP uses RC4, a symmetric stream cipher and a WEP-key to create a pseudo random key stream. It is based on the principle of one-time pad, which is the only known encryption scheme that is mathematically proven to protect against certain types of attacks. The RC4 algorithm is a set of rules used to expand the key into a key stream. This generated stream is XOR'd with the plain text producing the cipher text. To read this text again, the receiver needs to have the same key. Using this key he then recreates the same pseudorandom stream and XOR's the cipher text.

Confidentiality and integrity are handled simultaneously. Before the encryption (XOR: depicted by in ), the frame is run through an integrity check algorithm (CRC-32), generating a hash called the integrity check value (ICV). This ICV protects the data from being forged during transmission. Both the frame and the ICV are encrypted making the ICV unavailable to casual attackers.

The decapsulation (decryption) is basically the reverse procedure, with that respect that the receiver also makes a CRC-32 hash which is compared to the one received. If both received and self-made hash are equal the data is considered 'clean' (i.e. was not changed due to random noise, etc)

Shown in the following figure is a schematic overview of the resulting frame: a WEP-encrypted frame.

As was already noted, the MSDU is nothing more then the packet received from the LLC-layer. The rest of Fout! Verwijzingsbron niet gevonden. should be self-explanatory.

1.
  1.
    1. 5.3Keying

To protect traffic from brute-force decryption attacks, a set of up to four default keys is used.

The default keys, identified by a variable _keyid_ (0 to 3), need to be shared among all stations in a service set. Once a station has obtained the default keys for its service set, it can communicate using WEP.

WEP originally specified the use of a 40bit secret key; proprietary versions however also support longer keys (e.g. 104, 128, etc). The secret key is combined with a 24-bit initialisation vector (IV) to create a longer key (64 if 40-bit key was used). The IV is a random generated number; however this was not stated in the original specifications. This new key (WEP-key + IV) is used as the seed6 for the RC4 key stream generator. The key stream is then XOR'd with the frame body and the ICV.

To enable the receiver to generate the same random stream, thus enabling him to decrypt the frame, the IV and _keyid_ is placed in the header of the frame.

Key reuse is often a weakness in cryptographic protocols. Therefore, WEP has a second class of keys used for pairwise communications. These keys are shared only between the two stations communicating. The two stations sharing a key have a key mapping relationship: a unique pair of transmitter address and receiver address based on the MAC addresses. For each interface on the system, an arbitrary number of address and key pairs can be associated to that interface.

1.
  1.
    1. 5.4How WEP failed
      1. 5.4.1Overview

Throughout time, more and more papers were released, identifying flaws in the overall WEP security, the more important were:

- October 2000: Jesse Walker, network security architect for Intel, identified the first set of problems in WEP. He wrote these down in a paper to the 802.11 committee entitled "Unsafe at any key size: An analysis of the WEP encapsulation". (http://grouper.ieee.org/groups/802/11/Documents/DocumentHolder/0-362.zip)
- January 2001: Researcher at the University of California at Berkeley released a paper describing several attacks that were possible. (http://www.isaac.cs.berkeley.edu/isaac/wep-faq.html)
- March 2001: Jesse Walker also made a presentation to the 802.15.3 committee describing some of the problems with security in 802.11 entitled "Overview of the 802.11 security" (http://grouper.ieee.org/groups/802/15/pub/2001/Mar01/01154r0P802-15\_TG3-Overview-of-802-11-Security.ppt)
- March 2001: College Park, department of computer science, found several problems with the access control and authentication mechanisms used in the 802.11 standard. The paper was entitled "Your 802.11 network has no clothes". (http://www.cs.umd.edu/~waa/wireless.pdf)
- May 2001: College Park found a new cryptographic attack against both WEP and TKIP, what was then called WEP2 that works regardless of the IV size. Their findings were presented to the 802.11 subgroup on security at the May 2001 Orlando meeting. The presentation was called: "An inductive chosen plain text attack against WEP/WEP2". (http://www.cs.umd.edu/~waa/wepwep2-attack.html)
- June 2001: Tim Newsham found a problem in the algorithm that some vendors used to automatically generate WEP keys. He also built code to perform dictionary attacks against WEP intercepted traffic. (http://www.lava.net/~newsham/wlan/)
- August 2001: Scott Fluhrer, Itsik Mantin, and Adi Shamir find a flaw in the RC4 key setup algorithm which results in a total recovery of the secret key. Implementing the attack requires the collection of traffic passively. The paper was titled: "Weaknesses in the Key Scheduling Algorithm of RC4" (http://www.cs.umd.edu/~waa/class-pubs/rc4\_ksaproc.ps)
- February 2002: Arunesh Mishra and William A. Arbaugh, from College Park, describe several design flaws in the combination of the IEEE 802.1X and IEEE 802.11 protocols that permit man-in-the-middle and session hijacking attacks. The paper was entitled "An initial security analysis of the IEEE 802.1X protocol". (http://www.cs.umd.edu/~waa/1x.pdf)

All these papers and presentations led to the downfall of WEP, which was proven to be seriously flawed. The flaws described in these documents can be summarized to 4 large problems with WEP, each having their own problematic results:

- RC4 cipher was not meant for datagram environments
- The IV is badly implemented
- The CRC-32 is not secure enough.
- No real key distribution system
- There is no replay protection

The problem of having no replay protection will not be discussed separable since it is basically a flaw that 'helps' to make the four other mentioned problems even bigger7.

1.
  1.
    1.
      1. 5.4.2RC4

Most problems result from a misuse of the RC4 cipher. It is used in a large range of modern security devices, because it provides a high degree of privacy and that for a relatively low performance penalty (consumes very little power since it uses no multiplications).

However, stream ciphers in general, RC4 in particular, are questionable choices in an unreliable datagram environment like that of WEP. In a datagram environment, the same packet is often resent because of a transmission error, which happens as much as 20% of the transmissions. This is normal, but unwanted for a secure stream cipher. Because of this datagram environment, two properties of a stream cipher produce severe privacy gaps that, in conjunction with the IV and other flaws, can be abused by attackers.

**RC4 has no random access property**

Before we actually begin discussing the security related flaws, it should be noted on why RC4 actually was a bad choice by the IEEE 802.11 group when it comes to encryption and decryption speed on the MAC-layer.

The loss of a single bit of a data stream encrypted under RC4 causes the loss of all the data following the lost bit.

This is because a data loss desynchronizes the RC4 encryption and decryption engines. A full reset of both the engines is then the only real solution.

Since IEEE 802.11 MAC is neither reliable nor delivers-in order at the level of which WEP operates, WEP requires that the cipher support a random access, "seek" type capability, where it is wanted to instantly and efficiently switch the cipher to any selected point in the key stream and not having to begin from the start after an error.

Instead of selecting a stream cipher with characteristics needed for a datagram environment, the WEP architecture tries to accommodate itself by reinitializing the cipher key schedule on every data frame. Creating an overhead that could have been avoided when a cipher with random access was chosen (one such as AES).

**RC4 disallows key re-use**

Stream ciphers have a second property that is important: it is unsafe to use the same key twice, ever.

Presume you have two plain text byte sequences p

# 1
,p
# 2
,p
# 3
,… and q
# 1
,q
# 2
,q
# 3
,… both which you encrypt with the a key stream k
# 1
,k
# 2
,k
# 3
,….This encryption, as we have seen, is an XOR of the key and plain text. So we have two new cipher texts:

p

# 1
 k
# 1,
p
# 2
 k
# 2
, p
# 3
 k
# 3

q

# 1
 k
# 1,
q
# 2
 k
# 2
, q
# 3
 k
# 3

Now, presume an attacker captures these two cipher texts; what then follows is a failure of privacy, since:

(p

# i
 k
# i
)  (q
# i
 k
# i
) = p
# i
 q
# i

Or in other words, combining two cipher texts produces a stream, which is not dependant of the used key, and so a large deal of information about the plain texts is revealed. If one of the two plain texts is known, the other can be read, if it has the same length, without the need for a key, a property that will be abused in the following flaws.

As a result, stream ciphers are insecure in a datagram environment without some sort of key management to replace keys before they can be reused. The WEP design attempts to accommodate this lack of key management by introducing the IV. WEP combines the IV with the key to produce a new frame specific encryption key, preventing that any collisions of two or more frames with the same key occur (explained further on).

1.
  1.
    1.
      1. 5.4.3IV

The WEP designers had some knowledge of the first flaw concerning RC4 and therefore introduced a per-packet key (the IV). From a cryptographic view, this is a very good solution… if employed well. Which is not the case with WEP; it uses an IV that is send in the clear with no encryption whatsoever, to produce the per-packet key.

An IV that is send in the clear immediately gives rise to suspicion; one does not sent a part of the 'key' (remember that the IV + WEP-key generated the random RC4 key stream) unprotected and unhidden from attacker in plain air. This suspicion is fittingly. The flaws of the RC4 cipher in a datagram environment, together with the IV gave birth to some advanced tools that make attacking a wireless LAN child's play.

However a major flaw is the fact that no replay protection is implemented whatsoever which shall soon be explained.

**IV gives rise to weak keys**

The paper by Scott Fluhrer, Itsik Mantin, and Adi Shamir presented in August 2001 investigated the RC4 key schedule when a portion of the RC4 key stream is known. Explaining the paper and its consequences in depth requires some advanced mathematical knowledge, thus only a summary is provided8:

The paper showed when a part of the RC4 key stream is known, a class of RC4 weak keys could be identified. When these weak keys are used to generate a pseudo random stream there is a small, but not insignificant, correlation between the input(the WEP key) and the output (the key stream). In other words: weak IV are the cause of some key leakage to the key stream which, of course, is a very unwanted property of any type of cryptographic cipher. As a result of these so-called weak keys, if the first two bytes of enough key streams (around 60) can be observed, then the WEP key can be recovered through these weak keys using an FMS attack, named after the authors of the paper. The FMS attack utilizes the fact that, in some cases, knowledge of the IV and the first output byte leaks information about the key bytes.

This attack itself is already a problem but it is even made worse because of another implementation error by WEP: the first couple of bytes of encrypted WEP-data in every packet ARE known. The LLC/SNAP header encapsulating some higher layer protocol is always the first 8 bytes in the encrypted packet, namely 0xAA, in other words: we have a part of the original plain text.

How can this be used? Suppose a plain text p

# i
, where i denotes the number of blocks, which is encrypted with a key stream k
# i
. This produces the cipher text c
# i
:

_c_

# i
 = _k_
# i
_p_
# i

An interesting property of all one-time pad ciphers, like RC4, is the following:

_c_

# i
 = _k_
# i
_p_
# i
___ k_
# i
 = _c_
# i
_p_
# i

Suppose p

# i
 is the first 8 bytes of the known plain text. If these known bytes (the LLC/SNAP header) are XOR'd with the first 8 bytes of the cipher text, the first bytes of the key stream are reproduced. Which of course is exactly the part needed to start an FSM-attack. This part of the key stream can now be used to recover the rest of the RC4 key. An attacker now has all the ingredients to read any cipher text using this key, since both the IV and the PRNG are always known. Making it possible to create the needed key streams to decrypt any captured packet, or vice versa: encrypt any chosen data and sent it to anyone, pretending to be an authorized user.

Two very popular Linux programs utilize the FMS-attack:

- Airsnort:Airsnort is a very popular tool that has put this FSM-attack in practice. With this tool one is able to recover encryption keys from Wireless LANs that utilize WEP. It operates by passively monitoring transmissions (by placing the network card in promiscuous mode, i.e. recording ALL frames that air transmitted through the air, including those NOT addressed to the attacker), and gathers as many packets as possible.

Once enough have been gathered that were encrypted with a weak key it computes the encryption key. On average about 20000 packets are enough to recover the encryption key; which are acquired in less then 11 seconds of traffic under normal conditions.

For more information on the program, and the program itself, surf to [http://airsnort.shmoo.com](http://airsnort.shmoo.com).

- WEPCrack: A week before Airsnort was made public, WEPCrack was released which does the exact same thing: use the weak keys to recover the WEP key. Although it is theoretically the first and original, the first versions lacked documentation and user-friendliness, resulting in the popularity of Airsnort.

More information and downloads on the program can be found at: [http://wepcrack.sourceforge.net](http://wepcrack.sourceforge.net).

**IV collisions occur**

If the FMS itself is not disastrous enough on its own a whole other breed of flaws results from the fact that the IV is only 24 bit large. The use of a 24-bit IV is inadequate because the same IV, and therefore the same key stream, must be reused within a relative short period of time. A 24-bit field can contain 2

# 24
or 16.777.216 possible values. A short calculation demonstrates the short life of a 24-bit IV.

_Given: an access point running at 11 Mbps and constantly transmitting 1.500-byte packets
11 Mbps / (1.500 bytes per packet x 8 bits per byte) = 916.67 packets transmitted each second
16.777.216 IVs / 916.67 packets per second = 18.302,41745 seconds or 5,0840048 hours to use all IVs._

While 802.11b access points generate a theoretical maximum of 11 Mbps, its observed rates are usually much less due to overhead and packet collisions, which can increase the amount of time before an IV is reused. However, packets are usually not at the Ethernet maximum of 1500 bytes, which reduces the IV reuse. In any event, this small space of IVs guarantees that a key stream will be reused in less than one-half of one day. This flaw can be abused in two ways, by passively attacking the network, or actively flooding the network with data and retrieving the key streams because of the collisions.

1.
  1.
    1.
      1.
        1.
          1. a)Passive attack

A passive eavesdropper can quietly intercept all wireless traffic, until an IV collision occurs. By XOR'ing two packets that use the same IV, the attacker obtains the XOR of the two plaintext messages. The resulting XOR can be used to retrieve information about the contents of the two messages.

IP traffic is often very predictable and includes a lot of redundancy. This redundancy can be used to eliminate many possibilities for the contents of messages. Further educated guesses (through means of cryptanalysis; i.e. math statistics combined with cryptography) about the contents of one or both of the messages can be used to statistically reduce the space of possible messages, and in some cases it is possible to determine the exact contents, an example of this was given earlier where the LLC-header was used to launch an FMS attack.

When such statistical analysis is inconclusive based on only two messages, the attacker can look for more collisions of the same IV. With only a small factor in the amount of time necessary, it is possible to recover a modest number of messages encrypted with the same key stream, and the success rate of statistical analysis grows quickly. Once it is possible to recover the entire plaintext for one of the messages, the plaintext for all other messages with the same IV follows directly, since all the pairwise XOR's are known.

1.
  1.
    1.
      1.
        1.
          1. b)Active attack

An extension to this attack uses a host somewhere on the Internet to send traffic from the outside to a host on the WLAN installation. The contents of such traffic will be known to the attacker, yielding the known plaintext. When the attacker intercepts the encrypted version of his message sent over 802.11, he will be able to decrypt all packets that use the same initialization vector.

As is shown in the figure attacker could use the Internet for this type of attack:

1. A known plain-text message is sent to an observable wireless LAN client (an e-mail message). If the attacker is only capable of utilizing the WLAN he will have to use a bit-flip attack, explained later on.
2. The network attacker will then start sniffing the wireless LAN looking for the predicted cipher-text and eventually find it.
3. The network attacker will find the known frame and derive the key stream using the reverse XOR action: ci = kipiki = cipi. Where ki is the desired key stream.

**Growing key streams**

When the attacker has one key stream, the story does not end here. With this key stream, the attack can now create any key stream, of any desired length due to the fact that there is no replay protection. WEP doesn't check if a frame sent is authentic or not, if a frame is encrypted with the right key, WEP considers the user to be valid. Someone can capture a packet and resend it at any given time; it will not be checked and thus be used as if it were a valid packet. An attacker can thus use the WLAN as was it is own private laboratory where he can test as much as desired.

And so the attacker can grow his own key stream of any given length :

1. The network attacker can build a frame one byte larger than the known key stream size; an Internet Control Message Protocol (ICMP) echo frame is ideal because the access point solicits a known response.
2. The network attacker then augments the key stream by one byte.
3. The additional byte is guessed because only 256 possible values are possible and he can 'guess' as many times as he wants.
4. When the network attacker guesses the correct value, the expected response is received: in this example, the ICMP echo reply message. Otherwise he won't get anything since the packet was encrypted with an invalid key stream.
5. The process is repeated until the desired key stream length is obtained.

**IV Selection**

The fourth problem with the IV is how it needs to be selected. The 802.11 standard specifies no rules for IV selection, instead it merely recommends updating "frequently", a pretty undefined term. Each vendor implemented his or her own IV selection strategy, some being smarter then others.

- Fixed IV: Some implementations operate with a fixed IV, employing the same RC4 key to encrypt every packet. Making it necessary that the RC4 key needs to change after each packet, since a collision occurs afterwards with the second packet!
- Random IV: Other vendors selected the IV at random, seemingly the best solution but actually not much better then the former solution, all due to the infamous birthday paradox. Because this paradox it only takes 4823 packets to have a 50% chance of collision. And so a key change needs to occur about every three seconds.
- Incremental IV: A third option is to have a circular counter, incrementing the IV after each transmission, starting always from zero upon boot. This strategy guarantees a collision after two different stations transmit a single packet, since it is common to use only default keys (i.e. the same key on every device).

It is clear that 16.777.216 possible values are not enough in a high data-rate environment, such as in a WLAN, and so the IV is a severe weakness.

No matter what IV sequencing formula is used, a strong key management system is required, which is not available. This key management could solve the IV problem by including a system that would change the keys before all the IV possibilities are exhausted, thus creating new key streams.

1.
  1.
    1.
      1. 5.4.4CRC-32

WEP uses an integrity checksum field to prevent a packet from being modified during transmission, using a CRC-32 checksum. This wasn't the best choice: CRCs9 in general are designed to detect random errors in a message (such as sudden line interference, noise, etc) , not to detect planned forgeries.

This, and the fact that a stream cipher is used to encrypt the payload, gives raise to 1 more group of vulnerabilities in WEP.

The WEP checksum is a linear function of the message, as is with all CRCs. Meaning that the CRC of one message XOR'd with the CRC of another message, is the same as the CRC of two XOR'd messages:

CRC (message

# 1
)  CRC (message
# 2
) = CRC (message
# 1
 message
# 2
)

As a consequence it becomes possible to make a controlled forgery without disrupting the checksum. To do this, an attacker employs a 'bit-flip attack'.

**Bit-flip attack**

A bit-flip attacks enables an attacker to inject his own messages without the receiver being able to detect that it is not the original message.

Firstly the attacker captures a valid WEP frame. He then XOR's this frame with a self created stream of bits, where the 1 bits cause the bit to flip (0 to 1, 1 to 0). Usually this stream of bits is randomly. As will be shown, the attacker just needs a valid frame, whatever the data it caries.

Lastly the attacker, to have a valid ICV, XOR's both ICVs of the new and original frame. Since XOR'ing is commute (the order of the operations is not relevant) a new valid hash is created.

The attacker can now send a forged frame that is considered genuine by the receiver. The receiver (AP) dutifully decapsulates the bit flipped data and the LLC discovers that the data is 'gibberish'. Yet, since the ICV was valid, the receiver simply thinks some higher layer CRC error has occurred and thus sends an encrypted error-message to the attacker.

It is this message that the attacker knows he will receive, so encrypted or not, the attacker can now recreate the key stream by XOR'ing the encrypted error-message with the original error-message as shown as explained before:

_c_ = _k__p ____ k_ = _c_

#
_p_

Once this key stream _k_ is derived, the attacker can have a key stream of any size by 'growing' one, as described earlier.

**And some more flaws**

Another possible forgery is due to the fact that both the MAC source and the MAC receiver address aren't used to compute the ICV. This makes it possible to change one of these two without being detected. Since replays are allowed it is possible for an attacker to change the receiver address to his own chosen one. The AP will then dutifully decrypt the packets and forwards it to the wrong address (which will most likely be an authorized station, used/stolen by the attacker). And so the AP is abused to do the decrypting for the attacker.

And yet another result of using CRC-32 is that the attacker can change the source address and pretend to be another station. Unknowingly stations could then be sending classified information to a, in their eyes, legit user, which in fact is an illegal user.

Note: It is also clear that a checksum and authentication should never be implemented in one and the same thing: WEP supposes that any CRC'd packet is authentic because it has been encrypted by a valid WEP-key. A serious cryptographic fault was thus made: never combine both authentication and integrity in the saw algorithm.

1.
  1.
    1.
      1. 5.4.5Keying

A problem, where most symmetric systems suffer from, is the key distribution. The default keys need to be distributed to all the stations that want to participate in the service set secured by WEP. There is, however, no key distribution specified in the 802.11 standard. And so, vendors haven't done anything: most devices just have you type the keys manually in to the device drivers or APs. (Some provide a way of distributing the keys on a small disk with an executable).

It is clear that this manual entry is entirely dependent of the users and system manager, not of the protocols, creating a very insecure key environment:

Keys cannot be considered secret: all keys need to be manually entered, and any local user, with a minor knowledge of his system, can extract the keys (e.g. in Windows OS through the device manager).

Whenever someone, a staff member for example, leaves the organization, all keys should be changed. Knowledge of WEP keys allows a user to setup a station and passively monitor and decrypt traffic using the secret key. WEP thus cannot protect against authorized insiders who also have the key.

Organizations with a large number of authorized users must publish the key to this group when needed, which, of course, prevents the keys from being secret.

Note: Users are the weakest link in any security protocol: an experiment conducted in the London Waterloo-station showed that 90% of the office workers gave away their password in exchange of a nice pen.

1.
  1.
    1. 5.5Conclusion

WEP that originally was designed to provide a security protocol as strong as that on wired network; soon was proven it could not. To summarize the flaws in WEP:

WEP provides no forgery protection of the data. Even without knowing the key, an attacker can change packets without this being detected afterwards. An attacker can thus even masquerade as an authorized user, or even learn more about the encryption key.

WEP offers no protection against replays. An attacker can create forgeries without changing any data in an existing packet, simply by recording WEP packets and then retransmitting them later. This type of attack can be used to derive information about the encryption key and the data it protects.

WEP misuses the RC4 encryption algorithm in a way that exposes the protocol to weak key attacks (exploited by Airsnort). An attackers uses the WEP Initialization Vector (IV) to identify the RC4 weak keys, he can then retrieve the plain text from these packets and recover the encryption key.

By re-using the IV's, WEP enables an attacker to decrypt data without ever learning the encryption key. A patient attacker can compromise the encryption of an entire network after only a few hours of data collection (depending on the data traffic at hand).

Too many flaws undermine the purpose of the protocol: to provide data integrity, data privacy and user authentication. On all of these, WEP fell short. A new security protocol is needed. Luckily the IEEE group knew this fast enough and created a task group to address these flaws, which shall be discussed in the next chapter.

1.
  1. 611i: Robust Secure Network
    1. 6.1Introduction

After several reports, described in the previous chapter, about the weak security in 802.11 the 802.11i Task Group or TGi was formed to address the security flaws in WEP.

The 802.11 TGi took over over the security issues that were formerly considered by the 802.11e TG in May 2001 and had revised all the issues that were discovered in WEP and the related security flaws. The official purpose of the task group was stated as followed:

**"**** Enhance the 802.11 Medium Access Control (MAC) to enhance security and authentication mechanisms"**

The 802.11 TGi couldn't just simply start writing a new security standard for the IEEE 802.11 specifications; some constraints existed:

Already millions of WEP-based devices have been sold. WEP patches operating on already-deployed hardware therefore will have to rely entirely on a firmware upgrade.

Most AP's are equipped with a cheap, slower processor (i486, ARM7 or PowerPC running at 40 or even 25MHz). The load however generated by normal WLAN traffic consumes 90% or more of this microprocessor. And so there aren't many spare cycles left making that the solutions need to have a limited amount of instructions.

To support RC4 encryption without consuming too many cycles, additional hardware is installed to take care of the encryption functions. However, these are basically ASICs and these hardwired encryptions thus create a third constraint. Some functions of the WEP/RC4 combination will always be performed, no matter what. And so WEP will never really leave the security business.

As a result of these constraints, 802.11 TGi started working on two solutions, one that will work with these constraints, the other one won't.

One solution will be entirely new, based on AES and will be used for future devices called "counter with CBC-MAC mode AES protocol" ( **CCMP** ). To allow existing devices to be upgraded, a lightweight protocol called Temporal Key Integrity Protocol ( **TKIP** ) is being developed. TKIP can be implemented on existing hardware platforms while still providing acceptable security in the short-term future.

Another standard that is being discussed is **IEEE 802.1X** standard, which enables authentication and key management for LANs.

802.1X will be used together with CCMP and/or TKIP, the latter two providing the data encapsulation and authentication, the former, 802.1X, providing the key management.

1.
  1.
    1. 6.2802.1X

Where TKIP and CCMP provide integrity and encryption, it is 802.1X that provides the following:

- Provide (mutual) authentication
- Have a central user management system
- Have a secure way to distribute secret keys

There are several methods to have one authenticated but the most important thing to remember is that usually the access point won't do the actual authentication (some access points actually do). This is done by a RADIUS server; the access point (authenticator) merely relays the authentication message exchanges between the user (supplicant) and RADIUS (authentication server). While the user isn't authenticated the access point will only allow 802.1x/EAP-based traffic. Once the user is authenticated the access point will open the port for normal traffic.

802.1X is a framework that uses EAP for the messaging.

Make not that 802.1X is not an authentication/authorization algorithm itself; it merely translates messages to and from an authentication/authorization algorithm, using the appropriate frame formats. 802.1X leaves the choices of authentication/authorization algorithm, key management method and accounting profiles up to each EAP authentication type.

EAP (Extensible Authentication Protocol) is extensible meaning that several different authentication methods can be used, depending on the user friendliness and grade of security.

It is important to understand that you have to make sure that both your client and server are compatible with the chosen EAP method. From a customer point-of-view this means that you have to check not only whether the AP is 802.1X-, EAP- or WPA-compatible but that it also supports the wanted EAP method(s).

The most important and usually most-supported EAP (described later on) methods are:

- EAP-TLS
- PEAP
- LEAP
- EAP-TTLS
- EAP-MD5 (outdated, explained later on)

And to a lesser extent:

1. EAP-SIM

For an 802.1X port-controlled environment to work it is of utmost importance that your access points are connected to a switch (and not to a hub) and more importantly that the **switch is 802.1X-compatible** . Most switches from the last two or three years will probably be 802.1X-compatible, with older ones this might not be case.

When integrating your wireless network in your wired LAN it is important that you isolate the traffic of the access points in the network (just as you would isolate Internet traffic using a firewall). Using a firewall would give a large management overhead and is not recommended. A good option is to have a Virtual LAN for isolating your wireless network traffic.

Following figures shows what general steps are performed using 802.1X:

1. Both the client and the access point will exchange messages to discover which EAP-methods are possible to use (being a method they both thus should have).
2. Once a mutual agreement on the EAP-method is reached, the AP will act as a relay between the client and the authentication server. Client and server will then commence the authentication exchange.
3. If the server has enough evidence to authenticate the client it will generate the necessary keys (explained here-after) and relay them to the access point.
4. The access point will further distribute the needed keys and make sure they are updated often.
5. Once the keys are correctly distributed the actual data can be started, which will be encrypted using CCMP or TKIP, depending on the chosen encryption type.

Following figure shows how 802.1X is implemented in IEEE 802.11 wireless LANS to establish a secure authentication and key management environment10.

In 802.1X-enabled WLANs, two sets of keys are generated, session keys (also referred to as pairwise keys) and group keys (also referred to as groupwise keys). Group keys are shared amongst all the clients connected to the same AP and are used for multi-cast traffic. Session keys are unique to each association between an individual client and the AP and create a private virtual port between a client and the AP.

If configured to implement dynamic key exchange, the 802.1X authentication server can return session keys to the access point along with the accept message. The access point uses the session keys to build, sign and encrypt an EAP key message that is sent to the client immediately after sending the success message. The client can then use contents of the key message to define applicable encryption keys. In typical 802.1X implementations, the client can automatically change encryption keys as often as necessary to minimize the possibility of eavesdroppers having enough time to crack the key in current use.

When operating with an authentication server, a master key, called the pairwise master key (PMK), is generated via the exchange between the client and the RADIUS server. The PMK is used as source material for generation of the lower level keys used by the MAC layer encryption. When no RADIUS or other authentication server is present, the PMK is manually entered into each device in the WLAN and serves as a pre-shared key for authentication and source material of the lower level encryption keys. The user model is more analogous to standard WEP in this case since it requires manual distribution and configuration of a shared secret.

When used in pre-shared key mode, session keys are still provided and the improved encryption methods are fully supported. It is important to note that upper-layer authentication is not supported and the security of the network is broken if the shared key is ever compromised. In many small deployment scenarios, these tradeoffs are likely acceptable in exchange for ease of deployment and configuration of the IEEE 802.11b equipment.

**EAP-Types**

There are a lot of available EAP-methods to provide the authentication message exchange. The most popular ones, in wireless lan, are given in the following table.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | **EAP-MD5** | **EAP-TLS** | **EAP-TTLS** | **PEAP** | **LEAP** |
| **Server authentication** | None | Public key (Certificate) | Public Key (Certificate) | Public Key (Certificate) | Password Hash |
| **Client authentication** | Password hash | Public key (certificate or Smart Card) | CHAP, PAP, MS-CHAP(v2), EAP | Any EAP, like EAP-MS-Chapv2 or Public Key | Password Hash |
| **Dynamic key delivery** | No | Yes | Yes | Yes | Yes |
| **Deployment difficulty** | Easy | Hard | Moderate | Moderate | Easy |
| **Overall Security** | WEAK | Strongest | Strong | Strong | Medium |
| **Security Risks** | Identity exposed, Dictionary attack, Man-in-the-middle Attack, session hijacking | Identity exposed | Man-in-the-middle Attack | Man-in-the-middle Attack | Identity exposed, offline-dictionary attack (ASLEAP) |
| **Comment** | Not supported by Windows XP since SP1 due to not being safe | Very difficult to setup, only consider in large companies | Same as TLS but no certificate on client side needed | Supported in Windows XP since SP1. Also works without server certificate needed | Proprietary Cisco solution |

1.
  1.
    1. 6.3TKIP
      1. 6.3.1Overview

Having obtained the needed keys through the 802.1X framework, it is time to encrypt the data. The Temporal Key Integrity Protocol (TKIP) is a suite of algorithms wrapping the WEP protocol on pre-RSN hardware to enhance security, minimizing the threats that exist when using WEP.

TKIP surrounds WEP with new algorithms, namely:

1. A cryptographic message integrity code (MIC), called Michael, to defeat forgeries.
2. A new IV sequencing discipline, to prevent replay attacks.
3. A per-packet key mixing algorithm, to solve the weak keys issue in RC4.
4. A re-keying mechanism, which changes the integrity keys every 10,000 packets or so.

Because an adversary can compromise the TKIP MIC with relatively few messages (it isn't the most secure thing, explained in the next chapter), TKIP also implements countermeasures. In the original WEP specifications, no countermeasures were undertaken when an attack was detected; taken into account that WEP itself could actually not detect a lot. In TKIP, these countermeasures have the following consequences:

1. They force key updates to be rate limited.
2. They limit the probability of a successful forgery and the amount of information an attacker can learn about a key before it is renewed.

Firstly, we will describe how these 4 algorithms work on their own, afterwards shall be described they all work together under TKIP.

**Michael**

A message integrity check (MIC) is a cryptographic device to detect any tampering with data. The literature calls these MICs usually 'message authentication codes' or MACs. However, IEEE 802 already used this acronym for "media access control" and so MIC was chosen instead. A typical MIC is the HMAC used in the IPSec protocol suite.

"Michael" computes a MIC of the payload but it also includes the authentication key, the sender address and the receiver address (in comparison to CRC-32 which only included the payload itself). What is even more important is that the MIC is calculated over the MPDU. So it is only after the MIC calculation that the MPDU is fragmented in smaller MSDU , each with their own ICV from the CRC-32 engine.

The reason Michael was chosen are the following

- Spare cycles: Performance is, like we discussed, a dominating concern in Michael's design and the hardest issue facing TKIP. The total MIC calculation takes about 5.5 cycles per byte on an i486 processor (3.5cycles/byte on an ARM7), which unfortunately are still too many cycles. On an 802.11 access point with an i486 processor it will consume about 4.8M cycles/sec (3.1M cycles/sec on an ARM7) and so some performance degradation should be expected. However Michael is the best as-is solution, giving both enough security with the least processor cycles used.
- Security is another lead issue. The security in a MIC is usually measured in bits. If the security level of a MIC equals s bits, then the time required for an attacker to construct a forgery is, on average, after about 2-s+1 packets. Michael's security level leads to s about 29, and not 64 like you might've expected. This was proven with a differential cryptanalysis that needed 229 messages to attack Michael. This makes Michael a much weaker cryptographic primitive than one normally wants.

On a mediocre traffic 802.11b wireless LAN, an attacker can count on about 2

# 12
 small packets per second, making it possible to create a forgery against Michael in 2
# 7
 seconds worth of messages. This is about two minutes, which definitely is too short to provide any privacy when used in WEP.

That is why Michael is only safe when complemented by TKIP and its countermeasures. When a TKIP implementation detects two failed forgeries in a second, it is assumed there's an ongoing attack and performs the following steps:

1. The station deletes its keys
2. Disassociates from the AP
3. Waits for a minute and then reassociates

Although this disrupts the communications, it is the only way of thwarting the active attack.

**IV Sequence enforcement**

WEP did not provide protection against replay attacks since any packet resend later, with a valid key, was considered secure. A simple, yet robust method to prevent replaying packets is to introduce a sequencing number for each packet send. This sequence number is associated with a MIC key (a MIC on its own doesn't provide detection of replay attacks).

Only a packet which has the next number of the previously send packet is allowed. Of course, this would mean that an infinite sequencing is necessary. Otherwise, in a finite sequencing loop, once all numbers are used replay attacks are possible. The choices available for the transmitter to prevent this sequence number exhaustion are:

1. Halt communication altogether
2. Rekey the MIC with a fresh key
3. Keep sending, but with no protection against replay.

TKIP closely follows this design. To defeat replays, TKIP uses an extended 48-bit IV called the TKIP sequence counter (TSC).The TSC is constructed from the first and second bytes from the original WEP IV and the 4 bytes provided in the extended IV. TKIP extends the length of a WEP encrypted frame by 12 bytes; 4 bytes for the extended IV information and 8 bytes for the MIC.

Upon the start of transmitting, both receiver and sender set the TSC to zero, and also each time a new set of TKIP keys is set. The transmitter increments the TSC number with each packet it sends, and the receiver with each packet it receives from this sender. ). The use of a 48-bit TSC extends the life of the temporal key (discussed below) and eliminates the need to re-key the temporal key during a single association. Since the TSC is updated with each packet, 2

# 48
 packets can be exchanged using a single temporal key before key reuse would occur. Under steady, heavy traffic conditions, it would take approximately 100 years for key reuse to occur.

TKIP defines a packet out-of-sequence when the TSC is the same or smaller then the previously send packet (but only if this packet was using the same encryption key). If this is the case, TKIP considers the packet to be a replay.

Yet, TKIP designed this protection however, somewhat different from the usual design. Instead of associating the sequence number with the MIC key, it associates the number with the TKIP encryption key. This was done in order to reuse the existing WEP hardware and thus packet formats. The 802.11 standard associates the IV field with packet fragments, whereas the access points will out of necessity calculate the TKIP MIC over the entire packet.

**Key mixing**

WEP misuses the RC4 algorithm as described in the chapter 'WEP'. TKIP's per-packet key construction is a feature therefore necessary to correct this flaw. The new per-packet construction, the TKIP key mixing function, uses a temporal key or per-packet key, which is substituted for the WEP base key. This key is called temporal because they have a short lifetime and are replaced frequently.

The key mixing works as follows. A key mixing function transforms a temporal key and packet sequence number into a per-packet key and IV.

This is done in two phases, each phase compensating for a particular WEP design flaw:

- Phase 1 eliminates the same key from use by all links by mixing the transmitter address (TA) with the IV and the base key.
- Phase 2 eliminates knowing the per-packet key by viewing the public IV.

1.
  1.
    1.
      1.
        1.
          1.
            1. i)Phase 1

Phase 1 combines the 802 MAC address of the local wireless interface and the temporal key by iteratively XOR'ing each of their bytes to index into an S-Box, producing an intermediate key. By doing so, using the local MAC address, a different key is generated, even if they begin from the same temporal key (a common situation in ad hoc deployments). And so the stream of generated per-packet encryption keys generated is different at every station. The intermediate keys needs only to be computed when the temporal key is updates, so most implementations cache this key (to improve performance)

1.
  1.
    1.
      1.
        1.
          1.
            1. ii)Phase 2

A tiny cipher, a Feistel structure11, is used in phase 2 to encrypt the packet sequence number, using the intermediate key. A 128-bit per-packet key is produced.

The first 3 bytes of the phase 2 output correspond exactly to the WEP IV, the last 13 to the WEP base key, as existing WEP hardware expects. (Since it uses the base key and IV to form the per-packet key).

The packet sequence number is presented by a 16-bit little-Endian counter. Phase 2 assigns the 8most significant bits of this counter to the first and second bytes of the WEP IV, the least significant counter bots to the third IV byte. The most significant bit of the second IV byte is then masked; ultimately preventing any RC4 weak keys attacks.

Why was TKIP chosen?

- Just as with Michael, the tiny inner loop of a Feistel structure can be implemented using only some basic operation (XOR, shifting, rotating and table-lookup) and so minimal processing power is required. Resulting in about 150 cycles per-packet cost for using the mixing function, which is pretty close to the edge of what can be achieved using the existing access point hardware.
- The security analysis of the key mixing function is somewhat less satisfying than that for Michael, as no quantitative bound such as 29-bits is known. Yet, review by the cryptographic community thus far suggests that the key mixing function does indeed achieve its design goals. And is considered to come close to an optimal solution for the flaws in WEP.

**Rekeying**

Rekeying is provided by the 802.1X protocol, which is responsible for both the time between the rekeying as the types of key needed.

1.
  1.
    1.
      1. 6.3.2How it all fits

Having described how the four algorithms of TKIP work by themselves, it is time to put all the pieces together. Using both the original WEP and the new algorithms security is provided that can be used with the original hardware.

Three steps are performed to ensure a secure data traffic:

- 1X is used for authentication
- 1X is used to provide secure keys
- The sequence counter, key mixing functions and Michael are used to encrypt/decrypt the data.

1. Authentication

When a station makes initial contact exchange with a network, it uses 802.1X to authenticate and derive a fresh master key. This key remains in use until it expires or is revoked. The master key is tied directly to the authentication step, so authorized by it and this key thus authorizes all the subsequent keys and all traffic they protect.

1. Key management

After establishing a master key, the server distributes fresh keying material to the station and the access point to derive a first set of key encryption keys, this is usually also done after every reasociation. The master keys still protects this exchange between the authentication server and the station.

The access point uses the established keys to protect fresh temporal keys it sends to the station. These keys are frequently changed to prevent replay attacks.

1. Data encryption

Finally the data is encrypted using the WEP-hardware with that respect that the seed (previously the WEP-key + IV) now is a safe per-packet key, as the result of the keymixing.

1. TKIP computes the MIC over the packet source address, destination address, and data, and appends the computed MIC to the packet.
2. TKIP fragments the packet into one or more frames; TKIP assigns an incrementing TSC value to each frame it generates, taking care that the entire frame generated from the same packet use counter values from the same 48-bit counter space.
3. For each frame, TKIP uses the key mixing function to compute the WEP seed.
4. TKIP represents the WEP seed as a WEP IV and RC4 key, and passes these with each frame to WEP for encapsulation. WEP uses the WEP seed as a WEP default key, identified by a key id associated with the temporal key.

1. Data decryption

On reception, the encryption steps are largely reversed:

1. Before WEP decrypts a received frame, TKIP extracts the TSC sequence number, WEP IV and key id from the packet. TKIP discards a received frame that violates the sequencing rules, and otherwise uses the mixing function to construct the WEP seed.
2. TKIP represents the WEP seed as a WEP IV and RC4 key and passes these with the frame to WEP for decapsulation.
3. If WEP indicates the ICV check succeeded, the implementation reassembles the frame into a packet. If the packet reassembly succeeds, the receiver verifies the MIC.
4. The MIC verification step recomputes the MIC over the packet source address, destination address, and packet data (but not the MIC field), and bit-wise compares the result against the received MIC.
5. If the two are identical, the verification succeeds, and TKIP shall deliver the packet to the upper layer. If the two differ in any bit position, then the verification fails; the receiver discards the packet, and engages in appropriate countermeasures.

1. TKIP frame formats

TKIP reuses WEP. It extends the frame by 4 bytes to accommodate the new Extended IV field (refer to .) and extends the frame format by 8 bytes, to accommodate the new MIC field. TKIP inserts the Extended IV field after the IV field and before the encrypted data. TKIP appends the MIC to the packet Data field.

Once the MIC is inserted in the packet, the TKIP data encapsulation can proceed in one of two ways.

If the packet-with-MIC can be encoded within a single WEP-encapsulated frame, TKIP encapsulates the packet in a single frame.

If the packet-with-MIC cannot be encoded within a single WEP-encapsulated frame, the packet-with-MIC is fragmented into appropriately sized frames. WEP encapsulates each frame.

1.
  1.
    1. 6.4CCMP
      1. 6.4.1Overview

In addition to TKIP encryption, the 802.11i defined a new encryption method based on the advanced encryption standard (AES). AES offers much stronger encryption. In fact, the U.S. Commerce Department's National Institutes of Standards and Technology (NIST) organization chose AES to replace the aging Data Encryption Standard (DES).

AES based encryption can be used in a number of different modes or algorithms. The mode that has been chosen for 802.11 is the counter mode with CBC-MAC (CCM). The counter mode delivers data privacy while the CBC-MAC delivers data integrity and authentication. This was named: "counter with CBC-mode AES protocol" (CCMP).

CBC-MAC, short for "Cipher Block Chaining – Message Authentication Code", as it name implies will create a hash of the data being encrypted in AES.

1. Operation modes

There are several modes of operation for a block cipher. Basically, a mode of operation is a recipe for using this cipher, if not followed exactly security cannot be guaranteed.

Some examples of modes of operation are Electronic Codebook (ECB, which is the most insecure mode), Counter Mode (CTR) and Cipher-Block Chaining (CBC).

The 802.11 TGi had two proposals for the long-term encryption with a specific AES mode of operation12:

- AES-CCM : based on CTR-mode (dubbed CCMP)
- AES-OCB: based on Offset Codebook(OCB) mode. (dubbed WRAP, for Wireless Robust Authenticated Protocol)

Both modes have their specific advantages and disadvantages, yet small in comparison. The main difference lies in how the mode itself works.

A primary motive to use AES-CCM is the fact that the 802.11 TGi wants to avoid getting mixed up in intellectual property claims. There were already three patens filed that could apply to OCB-mode. One faction of the 802.111 TGi was fighting to get CCM inserted in the drift to avoid any patent-encumbered mechanisms entirely. On the other hand, a second faction of vendors had completed sufficient work on AES-OCB, and this faction had enough votes to prevent AES-OCB to be removed from the final standard.

In the end, it was decided to only use AES-CCM mode, mainly due to the costs that using AES-OCB would bring with it.



1.
  1.
    1.
      1. 6.4.2How it works

**Data encapsulation**

Like TKIP, CCMP also uses a 48-bit IV called a packet number (PN). The packet number is used along with other information to initialize the AES cipher, which is a block cipher, for both the MIC calculation and the frame encryption. Note: remember that MAC was already reserved and thus CBC-MAC could actually be CBC-MIC

The AES encryption blocks in both the MIC calculation and the packet encryption use the same temporal encryption key (K in the figure). As with TKIP, the temporal key is derived from the master key that was derived as part of the 802.1X exchange.

The MIC calculation and encryption proceed along parallel paths as shown the figure. The MIC calculation is seeded with an IV formed by a flag value, the PN, and other data pulled from the header of the frame. This IV is fed into an AES block and its output is XOR'd with select elements from the frame header, which is then fed into the next AES block. This process continues over the remainder of the frame header and down the length of the packet data to compute a final 128-bit CBC-MAC value. The upper 64 bits of this MAC are extracted and used in the final MIC appended to the encrypted frame.

The encryption process is seeded by a counter preload also formed from the PN, a flag value, data from the frame header, and a counter value which is initialized to 1.

This preload value is fed to the AES block and it's output is XOR'd with 128 bits of clear text from the unencrypted frame. The counter value is incremented by one and this process is repeated for the next block of 128 bits of clear text. This process continues down the length of the frame until the entire frame has been encrypted. The final counter value is set to 0 and input to an AES block whose output is XOR'd with the MIC value computed previously before appending to the end of the encrypted frame for transmission.

The CCMP decapsulation process is not shown but is essentially the reverse of the encapsulation process. A final step is added to compare the value of the computed MIC to that received before the MAC passes on the decrypted frame.

**CCMP frame format**

The result from the AES function is an AES-encrypted packet using the AES key. The first 64 bits of the resulting 128-bit output is the MIC value inserted into the AES-encrypted frame. The rest of the frame format is the same as a TKIP encrypted packet.

Note that the MIC is not included in the encrypted portion of the frame. Encrypting the MIC is not required because MIC itself is the result of an AES encryption.

1.
  1.
    1.
      1. 6.4.3WPA/TKIP (Wi-Fi Protected Access with TKIP)

The WiFi Aliance adopted the TKIP standard and placed it in their WPA suite (Wi-Fi Protected Access). As explained TKIP is an encryption module written in the 802.11i standard that is compatible with existing 802.11 devices using WEP. WPA includes:

- TKIP for encryption and integrity
- 1X for authentication and key management

It was chosen to have two modes of operandi in WPA:

-
**WPA-PSK** : Also dubbed **WPA-Personal** . Using a pre-shared key (from a user-inputted passphrase) the user needs to have the key installed on his computer. This is the same as with WEP. The gaps, which enabled a hacker to retrieve the key in WEP or read encrypted messages without having need for the key, are none-existent anymore. However, a hacker can still use an offline dictionary attack13 (since a static passphrase is used) making this mode a whole lot less secure than WPA Enterprise mode. This mode is very easy to deploy and requires no extra network knowledge. However, since no key management is included in this mode it is recommended only to be used in:

  - Home-environment
  - Micro corporations (<10 employees): a frequent change of the WPA-PSK key is recommended.

- WPA Enterprise: In enterprise mode the access point will use 802.1X to authenticate the user using a RADIUS server. The keys will be provided to the user who thus doesn't need to have them preinstalled as in PSK. This will enable the company to have one central user database to manage. The downside however is a larger network management overhead. The mode is recommended for any company housing of over 20 employees. It is a more costly solution.

You can see on the Wi-Fi Alliance site whether a product supports WPA, including which modes (PSK and/or Enterprise). New products with the Wi-Fi label will usually have support for both WPA Enterprise and PSK mode. Some older access points might have neglected WPA Enterprise support so make sure to check this first.

1.
  1.
    1.
      1. 6.4.4WPA2/CCMP

WPA2, the successor of WPA, is the Wi-Fi Alliance-adopted standard of CCMP (Counter-mode with CBC-MAC protocol).

Not all existing access points will be able to be upgraded to this new standard, one of the reasons being the CPU in some access points not sufficing for WPA2. Still it is safe to state that most access points manufactured after January 2003 will be upgradeable, whether by firmware or software upgrade.

From a customer's point of view there won't be any difference between WPA (TKIP) and WPA2. Both will have the same modes (PSK and Enterprise) and have to be configured exactly the same way. And just like TKIP, CCMP will provide the encryption and integrity, whereas 802.1X will provide the authentication, etc. So only internally there will be any differences between WPA and WPA2, the user interfaces will quasi remain the same (make note that WPA2 will be much safer than WPA(1) due to AES being used as encryption).

Our recommendations, based on all previously stated problems and solutions are as follows:


1.
  1.
    1. 6.5Conclusion

To summarize this; 802.11i defines two classes of security algorithms for 802.11 which they named as followed:

- Pre-RSN Security Network: the original, inadequate security in the 802.11 specification, namely WEP.
- Robust Security Network (RSN): the new protocols and algorithms 802.11i TGi is working on.

For clearance, 802.11 TGi classified RSN in two subclasses:

- Data privacy mechanism (i.e. data encapsulation and authentication):
  - TKIP: The Temporal Key Integrity Protocol as an interim solution.
  - CCMP: Counter with CBC-MAC mode- AES protocol (CCMP); robust data privacy for the long term.

- Security association management:
  - 1X: Extra authentication and key management used for both data encapsulations.

It is important to note that all specifications in the RSN are meant for infrastructure BSS only. Although RSN could still be used in ad hoc networks the TGi empathizes it is a bad idea.

1. Other security solutions

This chapter gives a short overview of the more popular higher layer security protocols. Please note that there are many more, ways to secure data, this is more of a 'personal' point of view on how to secure higher layers.

1.
  1. 7VPN

Virtual Private Networks are probably still the safest way to connect externally to a corporate or home network. When using VPN over wireless, the advantages and disadvantages of course remain the same as when using VPN over a wired network. VPNs encrypt the data, using IPSec, from source to destination, this in contrary with WEP or any other wireless encryption mechanism. The latter only encrypt the wireless part. A VPN creates a tunnel to your network. The figure below shows that a VPN user actually creates a "trusted bubble" inside the untrusted zone, and a tunnel from the remote user to the trusted zone of the corporate network.

There are two types of tunnelling when using VPN. A client-to-client tunnel mode called "Transport mode" shown in the following figure:


Hotspots are almost never secured with any form of encryption (which would be against the basic idea of a public network). This means that any data sent over the hotspot is readable by anyone sniffing the network. To avoid this, connecting with a VPN is the ideal way. The security offered is equal to the security offered by VPN in a wired environment.

Of course nothing comes for free. Users who want to connect to the corporate network through a VPN need to have client software installed on their PC. Connecting to the network also takes more time than in "normal" (unencrypted) conditions. The CPU will consume more cycles, which slows down your PC, although this is less of a problem on modern laptops. Installing VPNs also brings extra costs along. The company network needs to be equipped with VPN-aware equipment. Not just any router will allow VPN traffic. There's also need of a VPN server which accepts the VPN connection attempts. This server has a maximum of VPN calls it can accept. This limits the number of VPN users to a certain amount (20-50 per server), which denotes that VPN should only be used for external connections to the network.

1.
  1.
    1. 7.1Intel's view on Wireless LAN and VPN

Because of WEP's inadequacies with regard to security, a number of IT groups chose VPNs to secure wireless access. While VPN solutions provide a high level of security, this security comes at a price. VPN gateways, for example, are

necessary because traffic must be routed through them. But these gateways can be expensive due to installation, maintenance and support costs. While this may seem less significant since most corporations already have VPNs gateways deployed for remote access, using VPNs for campus WLAN access significantly increases the number of simultaneous VPN users and required ports with a similar increase in cost. Unlike Wi-Fi Protected Access, VPNs do not enable port-based access control for APs, so VPN-protected WLANs in enterprises are typically deployed outside the firewall, introducing additional wiring and infrastructure management challenges. In short, VPNs do not scale well for

internal wireless deployment and use, and thus violate our third architectural tenet: scalability.

Consequently, Intel requires the use of Wi-Fi Protected Access (or WPA2) for enterprise WLANs and sees declining use of VPNs for this purpose. However, VPNs will continue to be widely used to secure remote access. They are well suited to protect traffic securely from outside the corporate firewall in remote access situations such as logging into a corporate intranet from homes or public networks.

1.
  1. 8VLANs

A Virtual LAN acts like an ordinary LAN, but connected devices don't have to be physically connected to the same segment. While clients and servers may be located anywhere on a network, they are grouped together by VLAN technology, and broadcasts are sent to devices within the VLAN.

Having a "guest VLAN" is, from a marketing point of view, usually a good solution to provide added connectivity for guests without having them connect to the corporate network itself. However, the 'guest VLAN' should not be considered as the 'free-for-all' network on which the users are free to do as they please, because the users will. 'Guest VLANs' are usually considered as a free WISP and so as a company you want to make sure that only YOUR guests use it.

It is therefore important to perform the following actions:

- Register the guest names
- Maintain access logs
- Place a liability note on the landing page
- Employ bandwidth limiting

These should certainly be taken care of but there are also more subtle threats when using a 'guest VLAN'.

As explained by Ian Shepperd there is also the threat of users misusing the 'guest VLAN' to , for example, mount a virus attack on another company. The victim tracing the attack will end up at the company providing the 'guest VLAN' and will thus be held responsible for it.

1.
  1. 9Firewall and virus scanner

Personal firewalls (i.e. software installed on the client's laptop) should be taken into account more and more. As was described earlier on, the problem of mobility is difficult to circumvent. Users that 'catch a virus' at home will unwillingly bring the virus inside the network; this can only be stopped when having security on the laptop itself in the form of both a personal firewall and a personal virus scanner.

In more advanced companies it is even a policy (both electronic and personal) that a user can't connect to the network unless he has a firewall running and has installed the latest virus definitions14.

1.
  1. 10Staff training

There is a need for well-trained staff members when it comes to implementing security. With wireless LAN this remains the same: employees need to be thoroughly educated. However there are some extra factors that need to be taken into account:

- Overall wireless LAN security aspects: the employees should be aware about the fundamental nature of any wireless network and what new threats exist. Not so that they themselves can start hacking but that they can be vigilant and for example spot a wardriver sitting across the street in a public coffee shop.
- Laptop usage: Users need to understand that their laptop is company-owned, or at least used in the company and should thus be treated as a company computer. No other software should be installed, no mails but those for work should be opened on them and most importantly: they should never be left alone.
- Rogue access points: Employees have to be made clear that placing access points themselves (i.e. rogue access points) is out of the question. Rogue AP's form one of the biggest threats in a wireless LAN environment and should thus be sanctioned severely.

1.
  1. 11Radio coverage

One of the biggest advantages of wireless networking is the mobility. Access points cover a desired area, and people are able to use the wireless network within that area… and beyond! This comes as a disadvantage on the advantage: the wireless signal spreads wider than desired. There's no way to hold the wireless signal within the building: the signal consists of radio frequency waves and they don't stop for walls. When deploying a wireless LAN, it should thereby be taken into account that someone at the parking lodge or even just a trespasser in the street willing to "see" the network will be able to do so (it is this aspect that gave birth to wardriving, a popular new form of wireless hacking, done by both professionals as amateurs).

Nowadays however, there is a way to prevent the wireless signal from leaving the building. UK defence contractor BAE Systems has developed a stealth wallpaper to beat electronic eavesdropping on company Wi-Fi and wired LANs [3]. The company has produced panels, using the technology to produce a screen, that will prevent outsiders from listening in on companies' Wi-Fi traffic but let other radio and mobile phone traffic get through. It also reduces noise from other wireless networks or other interference sources.

It should be clear that the signal must be contained inside the building as good as possible. Anyone able to capture your signal will be able to try an attack on your network.

To prevent your signal from being too wide-spread, different kinds of antennas can be used. There are antennas with a different coverage pattern. Directional antennas (like patch and sector antennas) can be used to cover a specific area, e.g. only the area 180° in front of the AP. When an AP with such an antenna is mounted on a wall, it will only spread its signal forwards, not backwards. Source [2] shows the different available patterns more clearly. Make note however that there will be signal leakage anyhow due to both the not so perfect radiation patterns and the reflected signals. This should never be forgotten: it is impossible to have a maximum containment of your signal inside the perimeters of the building. If a hacker really needs to he will always be able to pick up, even the faintest trace, of the signal.

When an access point comes out of its package, the transmit power is usually by default set to maximum. This offers you the largest coverage area and the best signal quality. So it seams obvious that the power always equals the maximum allowed. The ability to change this setting has a use though. Lowering the transmit power diminishes your coverage area, and can in this way be necessary in some cases to prevent your signal from going too far beyond the walls. Whether this setting is applicable is of course dependant of the situation: maybe there is no coverage needed close to the walls. In another case the walls might be blocking enough of the signal that with the right power settings a good coverage is achieved inside the building and no coverage outside. Also remember that glass windows almost don't block the signal at all. Thus placing an access point near windows will almost certainly result in leakage outside the building; placing the access point near the middle of the building/room is recommended.

1.
  1. 12Anti-theft

A quite drastic but unfortunately existing threat is the theft of access points. When an access point is stolen, the thief can take all the time he needs to extract the security settings of the corporation. If he knows the security settings, he can connect to the corporate network through another access point (that he hasn't stolen). Or he can just plainly use the extracted information to broaden his knowledge on the network topology (e.g. IP addresses of important servers, open/blocked ports, etc). Furthermore, the thief has achieved himself a nice piece of wireless hardware, which costs a lot of money to the company. It's obvious that this "access point theft" has to be avoided. Access points should be considered to have the same physical security such as the company's servers, routers, switches etc. In other words, the same company policies concerning the protection of any of the company's expensive/sensitive devices are applicable.

There are several ways to protect your access points from theft. A first possible measure is to attach or place the access point in a place that is hard to reach. It can for example be attached high against a wall, or on the ceiling, far enough from all walls and unreachable without a ladder. A better option is to place the AP in a locker or server room. This will of course decrease the coverage area and strength of the AP, but an external antenna connected with the access point and reaching outside the locker is a perfect solution for this. This way the wireless network characteristics remain the same and the access point itself is securely (physically) protected.

Another option to physically protect your access points is an extra measure that can be applied on top of the previous option. Nowadays some access points are delivered together with a protection frame (e.g. Cisco APs) This frame needs to be attached to a wall or ceiling and without the key of the lock, the AP can't be removed and in most cases no cables can be detached either (Ethernet cable nor power cable if applicable). This measure can be taken without the first (above mentioned) one (i.e. keeping the AP in a locker or out of reach), but should be seen as a lower level of physical security.

1. Tools

Just as there are uncountable wireless LAN related products there are also uncountable tools. Although most tools are used for the greater good, there are those tools that pretend to help wireless LAN troubleshooting but are actually hacking tools. Nevertheless we will give an overview of the most popular tools. Not only so one can test/use them but also to make you aware of the tools at the hackers' disposal.

- Netstumbler (www.stumbler.net; Windows; free): Is the most popular windows network detection tool around. It is used both by LAN manager as by wardrivers and the like. It shows lots of parameters of the wireless networks it detects. There's also a PocketPC version called MiniStumbler.
- Kismet (http://www.kismetwireless.net/; Linux; free): Kismet is an 802.11 layer2 wireless network detector, sniffer, and intrusion detection system. Kismet will work with any wireless card which supports raw monitoring (rfmon) mode, and can sniff 802.11b, 802.11a, and 802.11g traffic.
- Airsnort (http://airsnort.shmoo.com/ ; Linux; free) AirSnort is a wireless LAN (WLAN) tool which recovers WEP encryption keys. AirSnort operates by passively monitoring transmissions, computing the encryption key when enough packets have been gathered.
- Wepcrack (http://wepcrack.sourceforge.net/; Linux; free) Same as Airsnort but from another development team.
- Airmagnet (http://www.airmagnet.com/; Windows; retail) AirMagnet's Wireless LAN Handheld Analyzer provides WLAN administration, installation surveying, security assessment, connection troubleshooting and performance management functions. The standard product currently includes software (Version 1.20) supporting Pocket PC 2002, one AirMagnet 802.11b PC Card, and three months toll free telephone technical support. The standard pricing of $2,495 does not include the actual Pocket PC hardware, however.
- Airopeek (http://www.wildpackets.com/ ; Windows: retail) Mostly same functionality as Airmagnet but from another vendor.

1. Conclusion

Wireless LANs had sort of a bad start concerning security when it was first introduced in 1999. Although WEP is more than no security, it gave a false sense of privacy to the companies and people using it. This is usually more dangerous than having the feeling of being unprotected at all.

Hackers changed their territories: instead of attacking large companies using the internet, they now drove to the companies themselves. Instead of physically breaking in into the building, they just parked themselves on the public street; hacking their way in by abusing the flaws in WEP. War-driving had begun; and even appeared in new headlines, the media gave notice to this pretty imaginative new form of hacking. Where soft- and hardware constructors at first were concerned with things like performance and compactness, they soon shifted their focus towards data and code protection. Security, at first, nothing more than an 'extra feature' became a 'service', a service where large amounts of money are now being invested in.

Soon managers, engineers, directors etc became aware of the fact that, although a wireless LAN may seem 'the future', this future has not yet begun for their companies that prefer privacy above, for example, the freedom of roaming that comes with wireless LANs.

The original IEEE 802.11b products included only a marginal form of security (WEP, that's about it), good for home users and small companies. The precautions built in were usually adequate enough and although these precautions may seem small (compared to newer security related products). Yet, large companies with sensitive information needed a stronger form of privacy and authentication of whom was allowed to work with their data. This was where WEP fell short, and so the IEEE 802.11 taskgroup i was brought to life.

This taskgroup worked at an astonishing speed on the future of secure WLANs, writing a new security standard called the "Robust Secure Network". It houses both advanced key management protocols provided by the IETF standard 802.1X and it provides better authentication and encryption using TKIP or CCMP.

Is that it? Of course not. There is still security to be considered on the higher layers: IPSec, SSL and other higher layer privacy-providing protocols are becoming increasingly popular and should be considered to be implemented in the security-portfolio of a wireless network.

