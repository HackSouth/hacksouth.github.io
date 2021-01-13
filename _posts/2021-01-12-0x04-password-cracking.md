---
title: "0x04 - Password Cracking"
author: parity0x1
header:
  teaser: /assets/images/0x04-password-cracking/john-the-ripper.png
excerpt_separator: "<!--more-->"
categories:
 - Meetup
tags:
 - HackTheBox
 - Password Cracking
 - Hashcat
 - John the Ripper
---
The [Hack The Box Meetup](https://www.meetup.com/Hack-The-Box-Meetup-South-Africa/) is a monthly online event hosted on the first Tuesday of every month by [Hack South](https://hacksouth.africa/). The meetup is an opportunity to connect with other InfoSec enthusiasts, learn new tools and tricks, exchange knowledge and of course [Hack The Box](https://www.hackthebox.eu/).<!--more-->

A new theme is followed each month and tonight was focussed on `Password Cracking`. The stream recording [can be viewed on our YouTube channel](https://www.youtube.com/watch?v=p2TadlS6VbU&t=658).

The meetups always ends with an opportunity to implement what you have just learnt and tonight was no different. After working through a few basic password cracking tasks together the ultimate challenge was handed out...

### Challenge

Contained within this .zip archive are 3 files. Each have used different password protection methods/hashes and contain a portion of the final flag that needs to be retrieved and submitted to the facilitators. The first 3 people to crack all 3 hashes (passwords) would win a Hack The Box VIP+ monthly subscription. A wordlist has been provided to ensure that the playing field is levelled.

[Test_Your_Worth.zip](/assets/images/0x04-password-cracking/Test_Your_Worth.zip)
[customWordlist.txt](/assets/images/0x04-password-cracking/customWordlist.txt)

### Solution

- The first thing I did was download the archive and extract the contents. Within the archive were 3 files that I renamed for ease of reference:

```
excelDB(Challenge 1).xlsx           ->      1.xlsx
LetsHashThisOut(Challenge 2).txt    ->      2.txt
Challenge3.zip                      ->      3.zip
```

- I started with **2.txt** as the contents of the file looked like a standard `bcrypt` hash. I noticed an additional whitespace at the end so I removed that quickly. To confirm, I copied the hash and dropped it in https://hashes.com/en/decrypt/hash/.

![hash identifier](/assets/images/0x04-password-cracking/hshtb-0x04-01.png){: .align-center}

- Having confirmed the [hash code](https://hashcat.net/wiki/doku.php?id=example_hashes), I ran `hashcat -m 3200 2.txt customWordlist.txt` and got the second part of the flag; `ReLeAs3_tHe`

![running hashcat](/assets/images/0x04-password-cracking/hshtb-0x04-02.png){: .align-center}

- Next I moved on to **3.zip**. After trying to open the archive I was prompted to provide a password. It was clear that I needed to crack the .zip password first. Using `zip2john 3.zip > zip.txt` created a hashable file that I could feed to John The Ripper and get the password `shelby`. I could now "unlock" the .zip archive using that password and read the file `flag3.txt` that had the third part of the flag: `_CrAcK!nG}`

![zip2john](/assets/images/0x04-password-cracking/hshtb-0x04-03.png){: .align-center}

- Last but not least was **1.xlsx** which was also password protected. XLSX is a Microsoft Office filetype (Microsoft Excel) and a quick Google search pointed me to `office2john`. Using `locate office2john` I found the file path and file type (Python).

- Using `python /usr/share/john/office2john.py 1.xlsx > office.txt` allowed John The Ripper to now crack the hash with `john --wordlist=customWordlist.txt office.txt` and get the XLSX password. Opening the file with this password revealed the first part of the flag: `HTBSA{`

![office2john](/assets/images/0x04-password-cracking/hshtb-0x04-04.png){: .align-center}

- I could now submit the final flag: `HTBSA{ReLeAs3_tHe_CrAcK!nG}`