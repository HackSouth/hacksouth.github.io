---
title: "Red Teaming - My first physical assessment"
author: chrismeistre
header:
  teaser: /assets/images/redteamfirst/red-team-500px.jpg
excerpt_separator: "<!--more-->"
categories:
 - Careers
tags:
 - Red Teaming
 - Penetration Testing
---

![Preview](/assets/images/redteamfirst/red-team-500px.jpg){:.align-center}

**Red Teaming - My first physical assessment**  
By **chrismeistre**  
 
I've recently been given the opportunity to perform my first physical assessment during a black box engagement for a client.

In short, the black box permitted us to try anything to gain access to their infrastructure, and assess their IT security awareness and defenses.  

I was excited about this, and when the time finally came, I wasn't left wanting.

If you're reading this as an aspiring hacker, or just someone interested in cyber security or the infosec community, you've probably heard at least one story of a red teamer performing a physical assessment.  I have listened to many interviews and read stories, so I thought I knew what to expect.

The TD;LR is that it's definitely not as hard as I imagined it would be.

What I'd like to discuss in this article are the technical (a few) and social engineering (a lot) aspects of this engagement.  

### Our goal

We decided that our goal for this engagement would be to fully compromise their internal network, and take over the domain controller.  There was a feeling in the team that if we could just gain access into the internal network, the escalation to taking over the domain controller should not be too hard.

#### A side note

It is normally the case that once we get on the internal network, we're able to escalate to a domain administrator with relative ease.  Especially for companies that haven't gone through an internal vulnerability assessment or penetration test.  A lot of companies spend all their time and money on securing they external facing infrastructure, which is definitely a good thing.  They do however forget that their internal network could be riddled with opportunities for an attacker.

### The start of the engagement

Whenever we start with an engagement, we go through a checklist of things to do.  

Amongst other things, it involves:
1. Obtaining information (through OSINT) about the company and their employees
2. Compile a list of externally accessible devices (domains and IPs)
3. Do enumeration on the devices to determine what services are accessible to us
4. Look for low hanging fruit and/or weaknesses to exploit from the comfort of our offices

During this black box, we spent a good number of days with the first phase.  Although we found a number of critical vulnerabilities, it was not anything that would gain us access into the internal network.

### Phishing

The second phase involved performing a phishing attack on the company.  

The goal of phishing during a black box engagement is different to just performing a phishing attack assessment.  For a black box, we are not testing to see how many clicks there are, or how many credentials are captured.  We want to obtain valid credentials, and at the same time go undetected.

We were able to obtain a small number of valid emails addresses through OSINT.  

I'm still working on my own methodology for phishing attacks, but here are a few things I do, which have proved quite successful so far:
1. Register a domain that is very similar to the company's domain.  An example would be if you're going to attack google.com, perhaps something like googlesupport.com is a good idea.  We have also registered a number of domain names that are generic.  I alternate between using a very targetted domain and generic ones, depending on who the target is.
2. Use web portals that you find during the first phase (enumerating) of the engagement, and setup a login page that looks similar.  A lot of our clients are using security and spam solutions for emails, so it's been getting a lot more difficult to create email content and fake pages based on ones that already exist.  This is where my experience as a web application developer comes in, as I'm able to create pages pretty much from scratch, to still look the same, but be totally different.  I also have a very generic login page that I use, where I just swop out the client's logo each time.
3. Craft the emails that will go out to seem urgent enough that if they don't respond soon, they might end off in trouble.  This is also where a lot of time is spent, to compile and send off emails to see if it triggers any junk, spam or malicious filters.
4. Once the credentials are submitted on the page, redirect them to a page or a document that you appear legitimate.  It's good if you can find a page that is hosted on their own website.  If nothing happens when they submit their credentials on the form, they might contact the IT department to determine if something is the matter.

The first attempt at the phishing attack was not successful.  We did not even get one click, which was very surprising to me, because this specific combination of email and landing page has always been successfully used.

I let it be for a few days, and then started delving into why it could possibly not have worked.  It turned out that due to an error on our server, at the exact time we started the phishing campaign, none of the emails even reached the targets.

With this information at hand, we launched another attack.  This time there was nothing for about 30 minutes, which is also odd, so I thought we had another issue.  My frustration subsided as soon as the notification came in that we had a data submission.  This means a target had clicked on the linked in the email, went to our fake site and filled in their username and password.

We used this information to access this person's emails.  Looking for keywords in their emails, we learned the following:  
1.  The VPN software they are using has enabled 2FA on it.  This meant that if we wanted to gain access through their VPN, we would have to gain access to this person's cellphone or do a vhishing attack to obtain the auth token needed to complete the 2FA request while connecting to the VPN.
2.  We found a number of usernames and passwords used to access external services.
3.  We observed that the IT department had noticed our phishing attacks, and warned the users that if they have clicked on the link in the email, to immediately contact the IT support team to change passwords.  To make sure our compromised user did not see that email, we deleted it from their inbox.  
4.  A complete contact list is available in the directory functionality of the webmail software, which allowed us to get a list of a lot more targets for a phishing attack.  We could also set it up that the emails are sent directly from this person's email address by making use of the webmail functionality.

Based on the information we found about the steps taken when the phishing attack was noticed, we proceeded with a third attack.

We chose a smaller set of email addresses from users that appeared to be in less technical positions.  The thinking is that users like these would be less likely to detect that the email they are receiving is not legitimate.  We were again able to get at least one submission of valid credentials before the IT department detected the attack and proceeded to act against it.  The password was changed the day after our attack.

Obtaining a valid set of credentials ended up being very important to us, even though we couldn't use it to gain access to the internal network from the external devices with it.

This phase turned out a lot more difficult to implement because the IT department was quite good at detecting this.  It's not something I've come across often while performing phishing.

### Vhishing

Our next phase would include vhishing attacks.  This is where we engage with a target over the phone, in order to get them to provide us with sensitive information, or get them to perform actions on their computers for us.

This company had a lot of stores all over the country, so there were a lot of opportunities for vhishing.  We gained a list of these stores and their contact details through OSINT.

It took me a few days to actually get onto the first attack.  This would be the first time that I officially do this during an engagement, and I was trying to wrap my head around what the end goal is going to be here.  Am I going to get them to install something like Anydesk on their PC that allowed me remote access, am I going to get them to open an email that I'll send them that contains something reverse shell, am I going to just get their passwords, or what am I supposed to do.

I eventually decided I'm just going to wing it.  The rough plan was :  
1.  Phone them up
2.  Introduce myself as John from head office IT 
3.  Ask to speak to someone that could be sitting in front of the computer that could assist me troubleshoot an issue
4.  See what happens and go from there

It took about 8 tries before I got one of the stores to actually pick up the phone.  I introduced myself, and it happened to be that the person I was speaking to was actually sitting in front of the computer.  I explained that we can see there is an issue with her antivirus, and we need to resolve it before something infects the computer and destroys the data.

This person was more than willing to assist.  I said I just needed to know which username and password was being used on that computer, to make sure we're going to be working on the right computer.  Without hesititation, they provided their username and password.  I took a chance and asked if they perhaps know the password for the server too, but unfortunately they did not know that.

I proceeded to get them to open their web browser, and see if they can go to a website.  Unfortunately it appeared they were behind a proxy.  I then had them open a command shell to run a ping against an external website, but there didn't seem to be any access to the Internet from the workstation.  As they were seeing an error on the screen, I decided to take this opportunity to explain to them that it appears we're not going to be able to fix the problem remotely, so we will have to send out a IT person to come to the store.  This would set us up to do a physical penetration test at this store.

Before ending the call, I also asked for the manager's name, surname and cellphone number, which I was given.  

I proceeded to phone a number of stores with a similar script, obtaining information at each store.  I was surprised that with just a bit of friendliness, you can solicit information from people without it triggering any suspicion.

#### A side note

During one conversation, I was informed of an actual IT problem that they were experiencing.  I assured her that someone would be sent to look into this issue, setting myself up for a store visit if needed.  I still feel bad that I never got to that store and I hope that eventually someone did sort out her problem.

### Moving onto the physical assessment

With the vhishing phase done, and having set ourselves up to a reason to access the stores and the IT infrastructure there, we proceeded to the next phase, which would be the physical.

### The Recon

I had a number of stores that were relatively close to me, so I decided to do some recon on them first, before deciding which will be the target or targets.

One good thing about the Covid pandemic, is that we are all forced to wear masks.  That makes it easier to hide.  The timing was also good, because I hadn't cut my hair in a while.  

My plan was to try and do the following at each store:

1.  Establish what type of security is implemented.  This would include determining where security guards are placed,  how they interact with clients,  how busy the shop is, what type of access control there is to access high value areas, how accessible these high values areas are and how much movement there is in those areas.
2.  Check if there are any network connections that aren't being used in the store somewhere.  If these are available, it might be possible to put a dropbox in without anyone noticing.
3.  Determine if there are any other opportunities for an attack.
4.  Do a quick Wifi scan using my phone to see what access points are available.


With the first store, I just went in with an open mind.  And based on my plan, here is what I found:  
1.  There is one security guard at the entrance, that seems very interested in making sure everyone has sanitised their hands.  I observed him while making my way through the rest of the store.  He appeared to be searching bags of people as they exit the store.
2.  There are CCTV cameras all over.
3.  The store is quite busy, with a lot of movement inside.
4.  Casually browsing around, I found a vacant network connection that also had a power plug right next to it.  The way it was placed, provided a perfect opportunity to place a dropbox without it being noticed.  The only problem was that it was in view of the security guard, but after considering a few options around that area, I was confident I had a way to place the dropbox without drawing attention to myself.
5.  I found that accessing the offices where the computers and most likely the server are stored would be easy.  There was no access control, with doors open.  Glancing down the passage as I walked past, I saw what looked like a server cabinet.
6.  I found a number of Wifi access points active in the store, and took note of the security protocol each used.

This store had ample opportunity to be a target, so I decided to head back to the office to set up and come back to see what we can achieve.

### Building the dropbox and other equipment

I'll try and go into a little bit of details here, but my plan is to write this up into a separate article.  It was my first time setting up a dropbox, so there was quite a bit of experimenting and testing that went into this.  Luckily there have been plenty of red teamers before my time, and they write about it all over the Internet.

#### Raspberry Pi Zero W

This was the only device available to me, while I waited for the other one to be delivered.  I added a Ethernet and Battery HAT, because the device only has a built-in wifi connection.  The battery was to keep it running in case of a power failure, or someone unplugging the device.

I installed Kali on there, because then I would automatically have all my favourite tools as well.

I set it up that it acted as a wireless access point (hostapd), so that I could connect to it using my phone or laptop in case I needed to do any manual setting up once I am in the store.

For persistence and connecting to our C2 server, I used an automated script (using autossh) to create a reverse SSH connection.  I also set it up as a VPN (OpenVPN) client, to connect to our server automatically.

Not having a 3d printer, or able to order cases for the Pi, I had to get creative with the box I was going to use.  I put on some stickers and a warning label, which would hopefully look like it fit wherever I would leave it.  Everything was ready to connect to a power source and to the network connection.  

I tested it extensively in the office, making sure that once I had a reverse SSH connection, I can access the network, perform scans and run utilities.  

Being a developer I love automating things, so to have this dropbox fire up the first time, connect to everything it was supposed to and give me access was such an awesome moment for me.

The Pi device doesn't have a lot of memory, so I knew I wouldn't be able to run memory intensive scans like Nessus.  I figured if I can just get a port scan of the network, I could pivot (proxychains) into the network and use further utilities from my own attack box.

#### USB Drive

Having a rough idea of what I'm going to face when I get access to the computers, I decided to also just prepare some utilities to use on the computers.

- Mimikatz (dump passwords and hashes in case I could log in as Administrator somewhere)
- Custom built persistent reverse shell (I spent a few hours on building a reverse shell that would execute while evading antivirus and Microsoft Defender)
- PowerView.ps1 (script to enumerate the domain)
- plink (setup a reverse SSH on the workstations or servers)
- Copy and paste scripts that I could use to create exclusion lists on Defender or disable it completely

##### A side note

I added Mimikatz and PowerView into a password protected zip file.  The last thing I wanted was to plug in the device, have the antivirus automatically scan the USB drive and then delete my utilities.

#### Other equipment

- Screwdriver (in case I needed to open the case)
- Extra Ethernet cable, connection extender and connection splitter (in case I needed to hook into another connection that is already being used)
- 2-prong plug
- USB charging cable
- Laptop with Kali installed, and setup to automatically connect to the Pi via Wifi
- Live Kali installation on a bootable USB
- Company ID badge


### Going to the shop

I decided to go to the store at a time I thought it would be even busier.  By this time I had my hair cut, not really because of the engagement, but just coincidence.  

By the time I stopped at the store, and got out the car, I was relatively at ease.  It was as I was approaching the door that I had stream of thoughts enter my head about what could go wrong.

#### A side note 

It's at this point it's worth noting that we had full permission to do what I was about to do.  There is normally a letter that we get, that we can carry with us.  It's called a "get out of jail free" card.  You normally pull this out if anyone that catch on to what you are doing, and want to phone the police on you.  The letter contains details about why you are at the store and who they can contact at their own head offices to validate the story.  For anyone attempting this, I would recommend that you always keep that letter on you.

As I passed through the door, my mind was completely focused, and I walked straight to the security guard.  I introduced myself, explained to him that I was there to provide IT support, and asked if he would be so kind as to direct me to where the offices were.  It helped that I was able to provide him a name as well of the person I'm supposed to meet.  The friendly guard happily showed me which direction to go.   I could probably have just walked past him to the offices, but in my mind it was important to setup this contact with the him.  Now he is familiar with me, he knows why I am there, and probably won't even look at me twice when he sees me again.

I walked to the offices, and had another brainwave.  I got out my phone, and pretended that I was speaking to someone as I walked into the passage way that branched off to the offices.  Making sure I could be heard by anyone in earshot, I pretended that I was telling the IT department that I just arrived and I will give them a "sitrep" as soon as I know what is going on.  This worked out perfectly, because someone actually heard me and came out of their office before I even "hang up".  They looked at me, and asked if I'm from the IT department.  I confirmed that I was, and gave them the name of the person (manager name that I obtained through the vhishing) I needed to make contact with.  This happened to be the same person standing in front of me.

With that first point of contact out of the way, and having gone smoothly, I now had access to the office, and the computers it contained.

#### Successes

- I had full access to the server cabinet, and in fact I could close the door behind me in the server room and carry on uninterupted.
- All workstations were logged in as local administrator users.
- The server was logged in as Administrator.
- The dropbox worked and I could access it via Wifi.
- As I had access to the server cabinet, I didn't need to hide the dropbox, I just plugged it directly into the network switch.
- Disabling the antivirus or creating exception rules didn't require passwords.
- Workstations were all logged into various sensitive applications.

#### Little hurdles
- There was no DHCP on the network, so through a bit of trial and error I found an IP address I could use


#### Failures

- No Internet connectivity on any of the computers, servers or dropbox (no reverse shell, no reverse SSH).
- Mimikatz didn't work because the version of the operating systems were so outdated.
- Powerview not available on the server or workstation.

I decided to limit my time to about an hour on site, before I made contact with the manager again.  I explained that I couldn't determine yet what the issue was, and that I would have to come back later, or the following day.  They were quite happy with this, so I left.

On the way out, I greeted the security guard again, and he must've felt comfortable with my presence, because he did not search my bags on the way out.

### Back to the drawing board

We needed a way to access my dropbox once it was connected to their network.  We decided to put a 3G router in the dropbox container as well, which would then give it connection to the Internet.  This way the reverse SSH and VPN connection would run though that 3G connection, while still giving access to the local network via the network cable.

I also got a version of Mimikatz onto my flash drive that should work on the older operating systems.

As with the previous visit to the store, just before I reach the doorway of the store, I have the same rush of thoughts of everything that could go wrong.  It's amplified this time because at the entrance they have "cash in transit" security guards busy loading money from an ATM.  For some reason the big guns they are carry makes it an especially scary moment for me.  I force myself not to hesitate though, because I don't want my nervousness to set these guys off.  


#### A side note

In our country, "cash in transit" security guards are often (daily) targeted because of the valuable items they transport.  It's for this reason that they are extra alert.

I pass them and by the time I walk past the security guard, this time just greeting him in passing, I am focused again.

I make my way to the manager to just let them know I am back, and proceed to the server room.  I start getting my stuff unpacked, and I hook my dropbox directly into the network switch again.  Within a minute or so, I pick up that the reverse SSH connection had successfully established, and I can access the dropbox from our C2 server.

While trying to get Mimikatz to run on the server (which for some reason still doesn't want to), an automated task starts up and displays information on the screen.  I take note of a username and password that appears on the screen.  It's cleartext credentials for another server.

With remote access gained, I head back to the office to move onto the next phase.

### Let's start

The first thing I do is start with device enumeration, to see what devices and IP ranges I can access.  It goes good for a few minutes, and then it freezes.  I lose access, and cannot get it back.  I decide to leave it for a while, to see if it comes back up.

When I was at the store on this day, I noticed that in the server room it was extremely hot.  It's worth noting the server room is just a little room, with no airconditioning.  I realised that the Pi must be freezing up because of the heat.  

After an hour, there is still nothing.

### Nope, let's try... again

I decide that because I basically have carte blanche in their offices, and no one really pays any attention to me because they are all familiar with me by this time, I might as well just set up a laptop with Kali, and go put it in the server cabinet.  There is no need for any stealth at this stage.

I set up a laptop with the same reverse connection functionality as the dropbox.

I head back with my laptop, hook it up into the server cabinet, make sure I have remote access, and head back to the office.  By now I have been there so many times I feel like I actually belong there, so it doesn't even cross my mind that I'm not supposed to be there. 

### Finally

Once I was back at the office the actual work of hacking could start.  We figured out we could access the complete network, and very soon after our initial discovery scanning we were able to compromise the Active Directory domain.

We were able to determine a number of ways we can compromise the domain controller, including a path that involved using the credentials we obtained from the phishing attack.

#### A side note

It's worth noting that compromising the domain controller without valid credentials initially is a lot more worrysome.  This means that we could've skipped the whole phishing and vhishing attack to gain credentials and still be successful.

The laptop was fetched from the store a short while after, again without any questions being asked why IT equipment was being carried out the store.

### Lessons I learned

- Be prepared for anything
- Roll with whatever happens
- If you can establish a rapor with someone, you are seen as a "familiar"
- Be confident and act like you belong


### Protecting your company

- Enable 2FA for any login portals that are accesible from the Internet
- When a phishing attack is noticed, communicate by means other than email that an attacker might have access to
- Provide ongoing training to staff members about phishing and vhishing attacks, carefully explaining to them the impact
- Make sure policies are in place to cater for external service providers access to stores
- Do not neglect physical access security
- Segment the network in such a way that compromising one store does not give the attacker access to the complete network