---
title: "SARS and the e-Filing quagmire with Adobe Flash discontinuation"
author: 
header:
  teaser: /assets/images/SARS/Sars-logo-800x321.jpg
excerpt_separator: "<!--more-->"
categories:
 - Community
tags:
 - SARS
 - e-Filing
 - Adobe
 - Adobe Flash
 - Vulnerability
---



After many years of faithful service, Adobe announced in 2017 it would discontinue support for [Adobe Flash](https://www.adobe.com/africa/products/flashplayer/end-of-life.html) from 31 December 2020 and blocked Flash content from running in Flash Player on 12 January 2021 many have been caught unprepared.   

[SARS/South African Revenue Services](https://www.sars.gov.za/Pages/default.aspx) recently announced it would start using its own Browser. We aim to tackle the challenge this presents and what to think about and also why with a 2+ year warning things are not in place. <!--more-->

![SARS Guide to using Flash POST discontinuation](/assets/images/SARS/Screenshot_3.png){: .align-center}

### What's all the tech?

[Adobe](https://www.adobe.com/africa/products/flashplayer/end-of-life.html) announced back in 2017 that it would be EOL'ing (End of Life) Flash and this discontinue support (Including vulnerability management) and block Flash content from 12 January 2021. It stated quote:

`Since Adobe no longer supports Flash Player after 31 December 2020 and blocked Flash content from running in Flash Player beginning 12 January 2021, Adobe strongly recommends all users immediately uninstall Flash Player to help protect their systems.`  

`Some users may continue to see reminders from Adobe to uninstall Flash Player from their system.  See below for more details on how to uninstall Flash Player.`


End quote.


### What is flash and what is it used for?

From [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Flash#:~:text=Adobe%20Flash%20is%20a%20multimedia,%2C%20video%20games%2C%20and%20applications) it states:

`Adobe Flash is a multimedia software platform used for production of animations, Rich web applications, desktop applications, mobile apps, mobile games, and embedded web browser video players. Flash displays text, vector graphics, and raster graphics to provide animations, video games, and applications. It allowed streaming of audio and video, and can capture mouse, keyboard, microphone, and camera input. ` 

An article was also published by [howtogeek.com](https://www.howtogeek.com/700229/adobe-flash-is-dead%C2%A0heres-what-that-means/) highlighting Adobe Flashes life and why it is going away forever.

When Flash was first introduced some 25 years ago, it was one of the only ways to make dynamic content available to the end user on the internet. Technology has vastly grown since then and the IT community saw many vulnerabilities in Flash over time. To illustrate this point, see [this article](https://www.mcafee.com/blogs/other-blogs/mcafee-labs/despite-decline-use-adobe-flash-vulnerabilities-will-continue-cause-concern/) by McAfee Research. Adobe has accordingly sunset Flash as of December 2020 so it was a surprise to many when the ship did not want to leave the SARS dock. For many years, SARS has used it to provide users with the ability to work with forms and do their e-Filing. 


### How did we get here and where are we going?

The de facto response for a frustrated nation is to apportion blame. We quickly jump to all the things we would have done differently (better) were we at the helm, but as the saying goes “hindsight is 20/20”. 

Before looking at the current state of affairs and what is expected to come, it’s critical that we examine the timeline that led to this position our South African Revenue Services finds itself in today.

SARS has been aware that Adobe Flash had a limited lifespan since the announcement by Adobe back in July 2017, this ultimately put pressure to expedite the migration of forms to HTML5. In total there are roughly 44 forms, complex in nature with conditional logic and key calculations. No easy task.

For whatever unverifiable reason SARS ran out of time, but an inference that can be drawn from their rationale to “tackle high volume forms first” hints that they may have known that they would not be able to complete the full migration before the Flash end-of-life in January 2021.

In tech, we know what it means to pivot. We know that there has to always be a solution, a backup plan if you will, even if it’s not the way we would like to do it. Again a summation here, but with the release of [“workarounds”](https://www.sars.gov.za/ClientSegments/Individuals/How-Register-Tax/Pages/eFiling-Compatibility-Guidelines.aspx) on the SARS website it seems as though SARS didn’t anticipate that EOL would include pulling/blocking Flash completely.

Despite their best efforts, SARS once again sat with the same problem but this time with far less time. Many of the high traffic forms were personal in nature, focussed on pay-as-you-earn and these weren’t going to cut it for key business requirements.

To add insult to injury, an invisible “onlooker” known as COVID-19 hit for a second time and just like one can’t hide from the taxman, SARS couldn’t hide from the virus. The antiquated manual submissions also now faced it’s temporary ‘end-of-life’ with the announcement on 13 January that all physical SARS offices would remain closed.

Ramped up development, which must have required nightowls jacked up on coffee seems to have ensued as over the past week we’ve seen the release of a [SARS Browser](https://tools.sars.gov.za/webtools/sarsbrowser/browserdownload.aspx) that can still run Flash to address any forms that aren’t yet migrated. Whilst definitely not a user friendly and secure solution, the browser does offer SARS a little bit of breathing room provided it is actually adopted by tax practitioners.



“In line with the service commitment of SARS, the organisation will spare no effort in resolving these matters as speedily as possible.“ - SARS

Godspeed SARS, you’re going to need it.


### Why is SARS continuing use of Flash and how?

Just a note on the tech here - With SARS rolling out their own browser based off of chromium, some have downloaded and unpacked the MSI file and found references to chromium.

![Decompiled](/assets/images/SARS/Screenshot_4.png){: .align-center}  


Modernisation and digitisation has become a rather steep mountain to climb that should have been a few steps on a monthly basis. Back in 2018 SARS Chief Officer for Digital and IT Mmamathe Makhekhe-Mokhuane gave an interview on SABC News after taking over from suspended commissioner Tom Moyane. The interview sadly did little to show citizens that things were being rectified. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vh-nZCaDWHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### How does this affect me and is it bad?

The three most popular browsers today are Chrome, Safari, and Firefox. Vendors of these browsers spend a considerable amount of time and money keeping them secure. Despite this, bugs are frequently found in them. See for example [this](https://threatpost.com/firefox-chrome-edge-bugs-system-hijacking/162873/)  

When vendors patch these bugs, IT departments frequently have control of their environment and ensure that their users update their browsers accordingly.   

The concern is that SARS does not possess the adequate time, resources and know how to effectively and efficiently manage its own dedicated WebBrowser from a security and vulnerability management perspective leaving users at risk, increasing as more vulnerabilites are discovered.    

Some good to know points we have come across:

“This field does not allow pasting on it and drag/dropping on it.”

Be sure you have your info near you and are not copying and pasting.

A tip on sharing:
You may not under any circumstances: [...] decompile, reverse engineer, disassemble or otherwise reduce the Software to a human-perceivable form
In the event that the agreement which licenses the Software to SARS terminates, then in such an event taxpayers and traders will not be permitted to use the Software under any circumstances and any such use will place taxpayers and traders at risk for infringement.

### An interesting read from a user’s perspective:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Breaking the SARS browser&#39;s &quot;You may not under any circumstances: [...] decompile, reverse engineer, disassemble&quot; Terms and Conditions (maybe?) using... <br><br>The SARS browser \:D/ <a href="https://t.co/x9ERbhyAD7">pic.twitter.com/x9ERbhyAD7</a></p>&mdash; HypnInfoSec (@HypnInfoSec) <a href="https://twitter.com/HypnInfoSec/status/1354104748740390913?ref_src=twsrc%5Etfw">January 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  



### What does this mean for your tax return?

On 25 January 2021, SARS introduced a new SARS WEB BROWSER to assist with the migration from Adobe Flash Player to the HTML5 platform.  Whilst they not entirely there yet, the browser has come at a much-needed time for Taxpayers. 
Over the past few weeks Taxpayers have been very frustrated with eFiling as they were not able to access many forms due to the end of Adobe Flash Player on 31 December 2020.  Though it was announced that Adobe Flash Player would end by 31 December 2020, some browsers still continued to support in into the new year.  Taxpayers were able to continue with their filing obligations until 12 January 2021, when Adobe Flash came to a complete standstill.
Whilst SARS started with the migration process towards the end of 2020, there seemed to be some hiccups along the way.  Whilst not ideal they released a temporary workaround to assist Taxpayer with their filing obligations.  With month end looming they have been working tirelessly to find a more suitable solution.

The new browser is compatible with Microsoft Windows devices.  After numerous testing SARS has also confirmed that they are satisfied that it meets the necessary security requirements.
All forms that have not yet been migrated can now be accessed via the new browser.
These forms include the following:

DTR01 and DTR02 – dividend forms  
RAV01- Amendment and verification of registered particulars, registrations  
TDC01- Transfer duty  
TCR01 – Tax Compliance Status Request, clearance applications  
WTI – Withholding Tax on Interest  

### Summary

On January 12 2021 Adobe blocked Flash Player. Since then the race has been on to deploy SARS’s latest, their own browser.
 
With Flash Player no longer supported due to it being legacy and vulnerable to potential attacks.
You can access the following forms on Adobe Flash post December 2020 included: Registration (excluding Registration for Individuals), Transfer Duty, Dividends Tax, Submission of Financial 3rd Party Data, Excise Duties and Levies.
With financial year end around the corner, SARS is under pressure for their browser deployment not to fail, with millions watching and with lots on the line, from both a cyber security risk, traffic influx to come and agile approach for any bugs that may be found.
“In the age of Covid-19, social distancing and remote working, tax practitioners, business owners and members of the public are unable to visit Sars offices and rely heavily on virtual systems to get things done. “
 
As good as this is, there are also points of awareness for individuals and companies alike. This opens up a whole new world of government based software deployment and a nation itself vulnerable to a new world of cyber and all that comes with it, both good and bad. 

So long to Adobe Flash! We are looking at a new age of digitization and modernization from online shops to South African Revenue Services. We hope you are not left uninformed and ill prepared, but find this article useful and informative.

On a positive note and to support the thought process that SARS is trying to resolve their current technology woes they have posted multiple [jobs](https://career2.successfactors.eu/career?company=southafr01&career_ns=job_listing_summary&navBarLevel=JOB_SEARCH&_s.crb=d4hoO8l24XafqM1BWG7MElc67kRHdZXci4Z%2bR39YOKk%3d), hiring Systems Engineers, Database specialists and Security Engineers. Maybe you could be joining SARS soon?

![Jobs at SARS](/assets/images/SARS/JobsAtSARS.png){: .align-center}  


So long to Adobe Flash! We are looking at a new age of digitization and modernization from online shops to South African Revenue Services. We hope you are not left uninformed and ill prepared, but find this article useful and informative.  



### References and reading material



==================

## SARS T&Cs:
Terms and Conditions: Taxpayers and traders must note that the software solution (the Software) is the defined intellectual property licensed to SARS and its use is strictly governed by a license agreement licensing SARS to provide the functionality to its taxpayers and traders subject to the following strict conditions:

---
i) You may not under any circumstances: distribute or copy the functionality; modify or create any derivative works from the Software; decompile, reverse engineer, disassemble or otherwise reduce the Software to a human-perceivable form, nor use the Software for open web browsing;  

ii) In the event that the agreement which licenses the Software to SARS terminates, then in such an event taxpayers and traders will not be permitted to use the Software under any circumstances and any such use will place taxpayers and traders at risk for infringement.

==================
[Chromium License](https://chromium.googlesource.com/chromium/src/+/master/LICENSE)

[Electron License](https://github.com/electron/electron/blob/master/LICENSE)

[“Jsonfile” npm library used](https://github.com/jprichardson/node-jsonfile/blob/master/LICENSE)

[“Winstonjs” npm library used](https://github.com/winstonjs/winston/blob/master/LICENSE)

[“Color.js” npm library used](https://github.com/luukdv/color.js/blob/master/license.md)

[SwiftShader used by Chromium (packaged as a .dll)](https://github.com/google/swiftshader/blob/master/LICENSE.txt)

[SARS-Browser Compatibility Guidelines](https://www.sars.gov.za/ClientSegments/Individuals/How-Register-Tax/Pages/eFiling-Compatibility-Guidelines.aspx)

[SARS addresses Adobe termination](https://www.sars.gov.za/Media/MediaReleases/Pages/18-January-2021-SARS-addresses-Adobe-termination.aspx)

[Wikipedia](https://en.wikipedia.org/wiki/Adobe_Flash#:~:text=Adobe%20Flash%20is%20a%20multimedia,%2C%20video%20games%2C%20and%20applications.) 

[How to Geek - Adobe Flash is Dead: Here’s What That Means](https://www.howtogeek.com/700229/adobe-flash-is-dead%C2%A0heres-what-that-means/)

[TechCentral - No Flash? No problem! Sars releases its own Web browser](https://techcentral.co.za/no-flash-no-problem-sars-releases-its-own-web-browser/104468/)

[SARS: Some taxpayers’ tax forms gone in a Flash
](https://www.dailymaverick.co.za/article/2021-01-24-sars-some-taxpayers-tax-forms-gone-in-a-flash/)





