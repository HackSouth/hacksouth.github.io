---
title: "How to win the TraceLabs CTF, or at least come close"
author: AngusRed
header:
  teaser: /assets/images/Tracelabs/TraceLabs-BronzeBadge.png
excerpt_separator: "<!--more-->"
categories:
 - CTF
tags:
 - TraceLabs
 - OSINT
 - Missing Persons
---


![P3 Podium](/assets/images/Tracelabs/Tracelabsp3banner.jpg){: .align-center}



A few weeks ago, a rag tag motley crew from Hack South took part in the TraceLabs missing persons CTF as part of [conINT 2020](https://conint.io/). It was our 4th shot as team **Hack South**, but this time we scored a podium finish and just missed out on 2nd place. This is the story of how we did it, with no case specifics.<!--more-->


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We are very proud of our team, ranking 3rd in the <a href="https://twitter.com/CONINT_io?ref_src=twsrc%5Etfw">@CONINT_io</a> <a href="https://twitter.com/TraceLabs?ref_src=twsrc%5Etfw">@TraceLabs</a> Missing Persons CTF<br><br>Fantastic Submission to points rating!<br><br>Well done<a href="https://twitter.com/AngusRedBlue?ref_src=twsrc%5Etfw">@AngusRedBlue</a> <a href="https://twitter.com/dewet_villiers?ref_src=twsrc%5Etfw">@dewet_villiers</a> <a href="https://twitter.com/The_MunX?ref_src=twsrc%5Etfw">@The_MunX</a> <a href="https://twitter.com/crypticg00se?ref_src=twsrc%5Etfw">@crypticg00se</a> <br><br>A fantastic team! <a href="https://t.co/Ktt3GQeC1l">pic.twitter.com/Ktt3GQeC1l</a></p>&mdash; H@ck S0uth - Home of the ubiquitous South! (@hack_south) <a href="https://twitter.com/hack_south/status/1317972571837636608?ref_src=twsrc%5Etfw">October 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  

### What is this?
[TraceLabs](https://www.tracelabs.org/about/what-we-do) leverages *Crowdsourced OSINT* (open source intelligence) through the Trace Labs OSINT Search Party CTFs as well as Ongoing Operations and their global community. Highly-skilled intelligence analysts triage the collected data to produce actionable intelligence reports on each missing person. These reports ultimate provide law enforcement agencies the ability to quickly see any new information to re-open a cold case and/or take immediate action on a missing subject.

### Why do we do it?  
The team had been a mix of people throughout the previous few tournaments. I (AngusRed) had been a constant in many of them. Different members take part for different reasons:
* To learn a new skill that we can take into the professional world.
* To compete and win a competition.
* To help bring closure to the families.

Whatever the personal motivation, it is critical to always stay mindful of real-world implications and affects of finding previously unknown intel that may lead to someone being found - dead or alive.

These CTF events are always bittersweet... There are moments of cheer and exhilaration when finding a new point of entry for intelligence (e.g. a new, previously unknown social media profile). Yet, we often find reminders of the stark reality of the circumstances surrounding the cases and the trauma the cases bring to the friends, family, and businesses.

We typically start a TraceLabs CTF with the mindset to have fun and learn new skills. If our initial work is good, we aim to win, but that determination and result often stems from identifying and submitting high quality intelligence that can lead to finding a missing person or at least newer sources of intel for law enforcement to follow up with and either find the child/person or close a case do to passing.

### Can *I* do this?  
Firstly, one need to understand the path to entry. No prior experience is needed. All one needs is to understand what OSINT is. Next, it is advised to use things like a virtual machine (VM), sock accounts (social media accounts not linked to you, ergo fake accounts). In all honesty, you could use your own accounts and a smart phone if you really have to, but it is not advised.

Next one needs to understand the ["Rules of Engagement"](https://www.tracelabs.org/about/search-party-rules). The first rule is what we call **Zero Touch** which basically means, do not interact with any of the intelligence that you find. E.g. if you find a private Instagram account, do NOT follow it. Only document it. Law enforcement can then use your documented intel as they wish.

The next part is super important: It is crucial that you understand what you might find and the nature of it. You might find underage children committing crimes, or you might find things of a violent and/or sexual nature. It is important to keep this at an arms reach.

Lastly, you need to understand what the result is. As with most forms of intelligence, you typically want to know what the result should look like. To get to that result you will typically gain as much intel about the subject, and once that is exhausted, you start looking at ancillary people and information: Siblings, family, parents, partners, work, and so on. You can go down one path, and that can lead to another, but go down too many branches you soon find yourself down a path of irrelevance. The way I see it is, if the intel adds value, keep upping the degrees of separation between the subject and wherever I am. When I feel it is going nowhere, I slowly step closer to the subject in degrees of separation until I am back on target and can then identify new avenues.

### What now, and how do I do this? 
Now that you understand the requirements, where to start?

TraceLabs is set up through a self-built application called **Search Party**. **Search Party** is basically where cases get loaded and contestants can read up on the case and surrounding info before they start hunting. There are also pages to understand the points structure, rules, and some resources along with the all-mighty scoreboard.

![Search Party and the Case Files](/assets/images/Tracelabs/casefiles.png){: .align-center}

As the clock strikes, you will receive between 5 and 12 cases. How we do it is use a separate discord server with a VC channel we all stay on, and then cases are broken down by their own categories. We also use Trello with 10 case "boards" and 10 sections for the various points categories. As we find intel we log them in both and with good reason. Typically I [AngusRed](https://twitter.com/AngusRedBlue) will assign cases to everyone. At about the 2-hour mark we will switch to each other's cases. We work together and collaborate. We do sanity checks which typically involve corroborating that one profile matches to a certain person or profile picture.  Often the first piece of intel is the hardest, IE getting a "Foothold" on a profile of the subject. We will help each other just get a start, especially if someone gets stuck. Keeping the team motivated is key.

### How do you win?    

This is the $400-$900 question. Below is some things I have learnt helps towards this effort.    

**1 Piece of intel, multiple points categories**   
Hack South as a community has taken part in 4 TraceLabs Missing Persons CTF's. The first one we had 2 teams and placed 43rd and 57th respectively, the next we had 1 team that placed 31st, the next 7th and the last one we placed 3rd. The biggest change we made was understanding the points system. Understanding what can be seen as points of worthy intel is key. Submitting at the highest possible level is important and also understanding that a single piece of intel can be submitted multiple times using different categories.  

E.g. imagine a selfie of a young woman - taken in a mirror - and she is smoking a joint whilst showing off a new tattoo that was previously unknown and taken/uploaded post missing date on a new unknown social media account?
* **500** pts **Day Last Seen**/*Picture of subject* - The photo is taken post missing date
* **150** pts **Advanced Subject Info**/*Habit* - The subject is smoking weed which can be seen as habit. Whether its legal or not, it is a habit
* **150** pts **Advanced Subject Info**/*Unique Identifiers* - The subject has a new and visable tattoo
* **150** pts **Advanced Subject Info**/*Brand of cellphone* - If you can identify the brand, you are golden
* **150** pts **Advanced Subject Info**/*Make of cellphone* - If you can determine the model of phone, jackpot
* **50** pts **Social Media handles**/*accounts* - You found one of the subjects sock accounts

![There is always more](/assets/images/Tracelabs/tenor.gif){: .align-center}

Right there, in 1 photo we have 1150 Points on the scoreboard. Separate to this you can trying look in the background of a photo to see if there are any other clues. Study the categories and points. After the 3rd place CTF I relooked the scoreboard and realized on one subject I missed about 400 points on some of the low-ball points (10's and 15's).

**Don't hoard, commit!**
Next piece of advice is committing to the submission. I always want to corroborate a piece of intel to make sure I can unequivocally link it to the subject. To be frank, this is not your job. If you believe it is intel, you submit it. It is up to the judges to decide its validity. Bear in mind many of the judges will have multiple teams that they are judging so perhaps someone else subbed the same intel and further linked to that original, that validates it. Just because you missed the link, does not mean you/they will not. Leave it to the judge. Some people tend to feel uncertain about a piece of intel or start questioning how this piece of intel might be relevant. This simple fact is that you are an unqualified intel analyst competing in a competition. You are not law enforcement, nor is this your assigned case nor do you have jurisdiction to validate something. You submit what you find, the judge approves or rejects. That which is approved gets collated and sent to law enforcement, and law enforcement have a much better idea of the case and something you thought was nothing might have been mentioned in a sketchy sighting or tip that could lead to a case being closed.

*"You are Scooby Doo war dialling the internet, leave the solution of the case to the cops."*

**Your judge and jury**
Managing and working with your judge is also important. Building some sense of trust is key. We have had some great judges that will ask us about something before they reject. If they still reject, that is fine, but if you believe in that piece of intel, do not be scared to challenge and escalate it.

**The scoreboard**
Throughout the CTF's I have a cardinal rule: No-one may look at the scoreboard to see (or at least not react nor tell me) where we are. This ALWAYS breaks my stride and either motivates me so much my brain turns to mush or demotivates me into a lull. Yes, OSINT challenges are mountains and valleys. The key to success is staying motivated and maintain your hunt even if you or your team have not submitted anything in an hour or so. On this last CTF I believe we have 1.5 hours where we had no intel to submit. Run this CTF as-if you are going to be on zero points all the way, and focus on having fun. If you have 30 mins left, then sure, go have a look. Thanks [@CyberSecStu](https://twitter.com/cybersecstu) for telling me we are doing "Really good" 3 hours in. We looked and were 5th.

![Read and weap](/assets/images/Tracelabs/scoreboard.jpg){: .align-center}

#### Big picture
Usually on the CTF, after gaining a decent amount of intel on a subject you might soon realize you come to a point where you believe that the person might not still be missing, or worse, the subject themselves does not consider themselves missing but is merely come from a rough home and wanted to get away. This brings up a moral question in many of us. You gain intel and see the parents are gang affiliated, that drugs are at play or that circumstances where they were living were dire, and then you find a FB profile where the subject seems fine and happy, has a job and looks like they are active and doing better? In this case my thoughts are that I will continue to gather intel and get it to law enforcement via the TraceLabs crew. What should happen then is that Law Enforcement will track down the subject, consult with them and determine they are ok and that the case can be closed without disclosing to the families where the subject is.

It also happens often where you are looking at a case and feel that this subject is no longer missing. This does happen and what you need to keep in mind is that sometimes families will not go back to law enforcement and say the subject was found and is home safely, or perhaps the missing persons database has not been updated. My suggestion is keep hunting, although it can feel a little bit creepy.

#### The many faced gods
One thing you will often find with missing people, especially teens is that they will have multiple social media profiles. Just because you find 1 sock account does not mean they wont have another. Sometimes with a different name, or a variation. Keep hunting! It is also common that the SOCK account will be connected to the main account. It is not always easy to spot but keep on eye on interactions and shares. After a while you could find a link to an account that has a treasure trove of intelligence.

#### Old but gold
When I started participating in TraceLabs, or literally the first one we stuggled like hell on the 500+ day cases. After the CTF I asked some fellow participants which cases were hot and which not. We then realized that those old cases were big and that there was a huge amount of intel. A point to remember with these cases is that if you find 1 social media account of the subject post missing date, you can score big! Every photo is a *500 Pointer* and you are more likely to find an account from someone missing for a protracted period of time than one missing for 14 days.

#### Team Selection
Typically I feel it does not matter who is on the team, or better said, what level of experience your teammates have. What is useful is to have leadership and at least 1 person that has done this before. As long as the team is commited, and willing to stick to the plan for 6 hours and not flake out, you are in with a big shot. We have competed as 2 separate teams, 1 team of 2, and teams of 4 with 2 team members being noobs. Yes, we all want to do well, but for a first swing, have fun with it. With time you will still have fun but will be better equipped to place highly. Setting expectations can be doubled-edged... The first one we did I wanted Top 100, and we got it. Then I wanted Top 50, and we got it. The last one I wanted Top 10, and we got it. Now our expectation is to win it, but all good things will come at their own time.

![Top 10 Finish](/assets/images/Tracelabs/hacksouthp7.png){: .align-center}

Our team was comprised out of the following people:

* [AngusRed](https://twitter.com/AngusRedBlue)/[Charles H Wroth](https://www.linkedin.com/in/chwroth/) *TL*

I have taken part in 4 TraceLabs CTF's, including this conINT CTF. I lead the team and maintained to focus. My day job is as a Technical Security Recruiter

* [CrypticGoose](https://twitter.com/crypticg00se)/[Christo Goosen](https://www.linkedin.com/in/christo-goosen/) *TM*

Christo had taken part in 3 TraceLabs CTF's, including this conINT CTF. He is a BSides Cape Town organizer with me and is a high flying Dev/CTO by day.

* [Munx](https://twitter.com/The_MunX)/[Amy M](https://www.linkedin.com/in/amy-m-83351440/) *TM*

This was Munx's first OSINT CTF. She is a former architect turned pentester/red teamer with Telspace Systems. She has advanced experience with social engineering and was a great team member.
 
* [DeWet](https://twitter.com/dewet_villiers)/[De Wet de Villiers](https://www.linkedin.com/in/de-wet-de-villiers-0593b543/) *TM*

This was De Wet's second TraceLabs CTF and is the randomest team member. By day he is a M&A Advisor on compliance, law and tax.

### I need tools and TOR!
Briefly and simply, you do not. Most of us did not use any tools. We did Google dorking, you found info and followed the paths. We as a team would like to improve our understanding and use of some of the great tools out there, but you do not need them to win.

### Case specifics and highlights from our podium finish

On the last CTF we had a team of 4, and 2 of us had competed before. We only had 5 cases and a decent mix:
* Case 1 - A well-known case of a mother going missing in the UK, last seen at an Off-License on CCTV
* Case 2 - A girl in the USA from Missouri who came from a bad home and had a history of going missing
* Case 3 - A man living in Canada who was believed to have moved to the UAE (1000+ Days)
* Case 4 - An Arab woman in Canada who had not returned to the UAE
* Case 5 - A young girl from Texas

**Case 1** - The trouble with cases that have a huge amount of media attention is that the cases can be EXTREMELY noisy. It can be hard to wade through all the media posts and blog posts to find good intel. We struggled with the case and believed she had been living a double life.

**Case 2** - This was a valuable case. We found 2 Sock Accounts on FB and IG. This lead us to a 3rd FB account where the subject had posted just a few hours prior. We submitted a 5000 pointer (Which was rightfully rejected) when we spotted that in a video of her smoking a joint outside she was panning the camera around. After submitting for the habit, Angus realized that there was a landmark in the background. We as a team realized this about 10 min before the cut off and managed as a team, to track down the bridge in another state. I believe with more time we could have found her exact location. The 5000 pointer was rejected because, to award this, TraceLabs must be able to pass the intel directly to law enforcement, and the cops should be able to go to that location and find the subject. The video was taken near a park.

**Case 3** - This case was also big for us. A big tip is to remember that with certain cultures, especially arabs or muslims that they will have variances in their names. Some might have a western name, or have their arabic name that can change over time (Like after doing their pilgrimage). We managed to find a FB account that lead to a bunch of intel. We found out after that other analysts had looked at family tree and found a post in Arabic that the subject had passed away a few months prior from COVID-19. I believe the MVP award went to a team that built a complete intel product just on this.

**Case 4** - This case was a big struggle. We managed to get passwords linked to her email and social media, and info on the local white papers along with a registered name change but this was it.

**Case 5** - If I recall, we focussed on the family, but it was not a very intel-rich case.

### Summary
* *Taking part in OSINT of any kind is fun and exciting. Whether it is doing challenges on Hack The Box, Doing a `#OSINTCHALLENG` on twitter or tackling TraceLabs. It will give you a new skillset that you can either use in the professional world, whether that be in Infosec, HR or business. Irrespective of how deep you might go, you will gain value, even if it is merely gaining more awareness of how a bunch of small pieces of insignificant info that you post online can help a motivated analyst tracked down where you are and what you do*
* *Team selection is not as important as team motivation. Team up with people that agree with committing to the submission and are willing to give their everything for the 6 hours. Who knows, maybe you place top 3!*
* *Talk to other teams that have won it: [TMHC](https://themanyhats.club/), [Shandyman and the 3 half pints](https://twitter.com/ShandymanOSINT), The Password Inspection Agency (Joe Gray, TJ Null, Alethe Denis), etc. Talking to other teams after a CTF and seeing what they found helps teach you what you missed and how you can improve in the future.* 
* *Something we as a community would love to do, is have a TraceLabs event for South African cases. We will need to build inroads to SAPS and related agencies to get this going.*
* *Lastly, there is always more intel. Do not give up! Keep hunting, leave no stone unturned!*

### Links and Resources  
* [OSINT Framework](https://osintframework.com/) - Have a bit of intel and want to know what to do next? Look at this.
* [OSINT: The Gateway drug your mother never told you about](https://youtu.be/Kl5Ivl0dQZo) - My conINT talk
* [conINT](https://conint.io/) - A conference dedicated to intel with videos on [Youtube](https://www.youtube.com/channel/UCBtSOceclpKcvunVNw82tFQ)
* [TraceLabs](https://www.tracelabs.org/) - The TraceLabs home page.
* [NCPTF](https://www.ncptf.org/) - National Child Protection Task Force  

Shout out to [BigLDP](https://twitter.com/Big_LDP) for the P7 meme!
