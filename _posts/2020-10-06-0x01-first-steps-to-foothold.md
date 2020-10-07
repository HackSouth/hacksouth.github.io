---
title: "0x01 - First steps towards a foothold"
header:
  teaser: /assets/images/0x01-first-steps/enumeration.png
excerpt_separator: "<!--more-->"
categories:
 - Meetup
tags:
 - HackTheBox
 - Enumeration
 - Nmap
 - AutoRecon
 - Zerologon
---
This post summarises the Meetup held on 6 October 2020.

## Agenda
An introductory session focussed on the first step when beginning on a new box: enumeration. A short presentation and a live demo will introduce on the theory and practice of initial enumeration and commonly used tools. Two Hack The Box 1-month VIP vouchers will be awarded to the top two contestants in a multiple-choice quiz! The second half of the Meetup will be dedicated to hacking together on the lab while sharing tips, tricks and advice.<!--more-->

![gathering information](/assets/images/0x01-first-steps/enumeration.png){: .align-center}

## Contents
The presentation covered scanning and information gathering, and what it means to develop a hacking methodology. Live demonstrations included enumeration up to finding something interesting (the foothold) on each of the three boxes in the lab. The boxes were chosen for their spread of common enumeration tasks. The live demonstration ran for *much* longer than intended and timed during the dry run, but feedback has been positive. The full presentation can be [viewed on our YouTube channel](https://youtu.be/idnLBgRJLNY).

![phishing a user with SEToolkit](/assets/images/0x01-first-steps/user-phishing.png){: .align-center}

During the practical portion of the Meetup, attendees mostly hacked on the Monteverde box. This machine expired some time ago and would not be available to try the Zerologon exploit after our dedicated lab closed for the evening. SneakyMailer and Admirer are available on the Hack The Box free tier for attendees to try later, even though Admirer was recently retired.

## Summary
We decided to host this month's Meetup with Discord streaming instead of a Zoom meeting. We saw more interactive discussion, but less attendees. We love Discord, but it poses a barrier to entry for first-time users who just want to attend the Meetup. We are still experimenting with the best platform (possibly two at the same time) and will find a good balance soon.

The Hack South Discord staff were on form once again in their support and made sure everything ran smoothly. If you attended the event, please let us know if you have any improvement suggestions.

![Discord attendance](/assets/images/0x01-first-steps/discord.png){: .align-center}

## Tools Mentioned
Scanning
* Nmap [https://nmap.org/](https://nmap.org/)
* Burp Suite [https://portswigger.net/burp/](https://portswigger.net/burp/)
* Gobuster web fuzzer [https://github.com/OJ/gobuster](https://github.com/OJ/gobuster)
* Ffuf web fuzzer [https://github.com/ffuf/ffuf](https://github.com/ffuf/ffuf)
* enum4linux-ng [https://github.com/cddmp/enum4linux-ng](https://github.com/cddmp/enum4linux-ng)
* SMTP user enum [https://github.com/pentestmonkey/smtp-user-enum](https://github.com/pentestmonkey/smtp-user-enum)

Password spraying
* CrackMapExec [https://github.com/byt3bl33d3r/CrackMapExec](https://github.com/byt3bl33d3r/CrackMapExec)
* Hydra [https://github.com/vanhauser-thc/thc-hydra](https://github.com/vanhauser-thc/thc-hydra)

Automated scanning
* AutoRecon [https://github.com/Tib3rius/AutoRecon](https://github.com/Tib3rius/AutoRecon)
* Legion [https://github.com/carlospolop/legion](https://github.com/carlospolop/legion)
* Sparta [https://tools.kali.org/information-gathering/sparta](https://tools.kali.org/information-gathering/sparta)

Other links and tools
* ippSec [https://ippsec.rocks/](https://ippsec.rocks/)
* Social-Engineering Toolkit [https://github.com/trustedsec/social-engineer-toolkit](https://github.com/trustedsec/social-engineer-toolkit)
* Zerologon exploit [https://github.com/dirkjanm/CVE-2020-1472](https://github.com/dirkjanm/CVE-2020-1472)
* Evil-WinRM [https://github.com/Hackplayers/evil-winrm](https://github.com/Hackplayers/evil-winrm)