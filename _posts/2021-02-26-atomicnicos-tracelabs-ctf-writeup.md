---
title: "Going at the TraceLabs OSINT CTF again: You don't win them all"
author: AtomicNicos
header:
  teaser: /assets/images/AtomicNicos-posts/Feb2021-Tracelabs/cover.png
excerpt_separator: "<!--more-->"
categories:
 - CTF
tags:
 - TraceLabs
 - OSINT
 - Missing Persons
---
---

<style>
.media-container {
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 10px 0;
}

.media-container > * {
  margin: 0 auto;
  max-width: 100%;
}
</style>

<p>On the weekend of the 22nd, I participated once more in the TraceLabs OSINT CTF. For context, this CTF is a bit different from other CTF's. It's not something where you compromise machines or map some networks. It's something where you actually try to dig up as much information as possible on missing people, as per the cases provided to TraceLabs by various law enforcement departments.</p>
<!--more-->
  <p>This time though I participated as part of a team from one of the communities I regularly frequent -- <a target="_blank" href="https://hacksouth.africa"><i class="fas fa-external-link-square-alt"></i> Hack South</a>, the home of the Ubiquitous South. My team members were members from Hack South that had not participated in a TraceLabs CTF either much or at all in recent editions, namely <a target="_blank" href="https://twitter.com/The_MunX"><i class="fab fa-twitter-square"></i> Munx</a>, <a target="_blank" href="https://twitter.com/DotBecca"><i class="fab fa-twitter-square"></i> Becca</a> and <a target="_blank" href="https://twitter.com/s0duil"><i class="fab fa-twitter-square"></i> S0duil</a>. We came in 18th place, which is a pretty solid score.</p>

  <p>Participating in this kind of CTF is not about winning. Well OK, it's not <em>only</em> about winning. What I personally love about these kinds of CTF's is that I'm not only helping a cause that can potentially bring long lost family members together again, but that I am also pursuing a fun, entertaining and educationally profitable endeavor in a perfectly ethical context -- whereas OSINTing random people is a tad in the gray area.</p>

  <p>After participating in the event, I thought it would be nice to have a bit of an analysis of the event, of where our team could have performed better, and what skills or tools we could have pivoted with.</p>

  <h4>Summary</h4>
  <ul>
    <li><a class="no-underline" href="#the-before-times">Pre-emptive organization</a></li>
    <li><a class="no-underline" href="#mp-familiarity">Getting familiar with the MP's</a></li>
    <li><a class="no-underline" href="#judgment-day">Judgment day</a></li>
    <li><a class="no-underline" href="#event-experience">My experience</a></li>
    <li><a class="no-underline" href="#much-ado-about-docs">Much ado about documentation</a></li>
    <li><a class="no-underline" href="#my-conclusions">My personal conclusions</a></li>
  </ul>

  <br/>
  <h4 id="the-before-times">Pre-emptive organization</h4>
  <p>One of the main drawbacks for this specific CTF edition was it's timing. It was from 10PM to 6AM GMT+1, which is quite literally at the opposite of my sleep schedule. So on Friday night, I went to sleep around 6AM, waking up around 2PM. Not perfect, but it would still allow me to catch some sunlight and do something with my day. Also I am a slow-starter, it takes me a while to wake up and become productive, no matter the hectoliters of coffee I ingest.</p>

  <p>What I also did during this initial period was to stock up on a bit of food, opting more for a TV platter I could microwave halfway through than with snacks -- because snacks at a desktop is a partial recipe for disaster, and also how does one stop? (Asking for a friend)</p>

  <p>For drinks I had prepared a sizeable amount of black tea, left to cool outside for half a day. This brew was so dense that one could not see light through it, making it the perfect "energy" drink for a long CTF such as this one.</p>

  <hr/>
  <p>Another part of the preparation stage is to get all of the tools fired up and ready, polishing a little on the documentation, etc. So this all starts with a Virtual Machine (in my case a Kali VM) that is loaded up with a collection of tools and scripts.</p>

  <p>The other thing with this VM is that it also contains the browser on which my nurtured sock account resides. One thing that beginner OSINTeers will often get trapped by is the creation of social media accounts. Most platforms, for example Facebook, have systems in place to detect irregular account creation, which includes the usage of less trusted email domains, or certain significant activity patterns. I will divulge my ways in an upcoming post, but I will first need to create another sock account and document along the way -- I would not want to burn my main sock account.</p>

  <hr/>
  <p>Finally, the last important step is getting all of the CTF team members on Discord. Why Discord? Well, it allows for some instant communication, screen sharing and is also pretty convenient and comfortable for us to use. We have it built quite simply:</p>

  <div class="media-container">
    <img src="/assets/images/AtomicNicos-posts/Feb2021-Tracelabs/discord-layout.png" alt="A snapshot of our Discord channel layout in our CTF server."/>
  </div>
  <br/>
  <p>We then have one category per case assigned, for eventual evidentiary sanity checks -- which is the process of asking a teammate to check whether what we found is conclusive or whether it is a red herring.</p>

  <br/>
  <h4 id="mp-familiarity">Getting familiar with the MP's</h4>
  <p>When the bell rings the start of the CTF, we gain access to the "case files". These case files give us a bit of information on a number of missing people, such as a picture, some physical descriptors and known social media. Every participant has access to the same cases, to facilitate the crowd-sourcing process, meaning that everyone had the same five cases.</p>

  <p>The issue when having a low case/team size ratio, is that it can be hard for team members to cycle cases when they feel they haveve arrived at the limit of what they could find.</p>

  <p>The reason I say that, is that usually each Missing Person (MP) has a different story, different social circles and different interactions on the Internet. Well... not this time. Of the five cases, only one had a family member verbose enough to give information about the MP. Everyone else had had their social media profiles either deleted, or just there as purged placeholders.</p>

  <p>This of course means that more "vanilla" methodologies of OSINT, such as parsing social media were harder, which meant it was harder to pivot, which in finality meant it was harder to score points. To get around that, one would need to use certain tools, but that is not necessarily something that is within the grasp of newer OSINTeers -- such as myself, to a certain extent. Nor is it something a team leader would want their team member to lose time on, because sometimes getting these tools to run correctly can be finicky and chronophage.</p>

  <br/>
  <h4 id="judgment-day">Judgment day</h4>
  <p>The other core point of this CTF is that the intelligence you dig up has to be judged by an event judge, who is usually assigned to the team around the start of the event. These judges can sometimes have a certain interpretation of the rules that makes certain point gathering schemes harder.</p>

  <p>The fact is that various types of intel are worth a different amount of points, for example anything relating to the MP's family is worth 20 points, whereas a picture of them post-disappearance is worth 500 points. So the trick is to collect a lot of intel and submit it in the correct category, striking a balance between low-hanging fruit (10-50 points) and high-value submissions (150-1000).</p>

  <p>However your judge can sometimes assume a position that is stricter on the quality of your content -- asking for example that you provide detailed infographics proving a causal link. This of course makes submissions longer and reduces the overall amount of points. The judges can also sometimes take on the burden of relevancy, sometimes disqualifying submissions to a certain extent that other groups are not privy to.</p>

  <br/>
  <h4 id="event-experience">My experience</h4>
  <p>Now that I have gone around the various things that can be done and how the event works, I feel I am at the point where I can talk about how our run went. Obviously, 18th is not the same position as Hack South enjoyed during the conINT TraceLabs CTF (3rd), but we will try to find a few reasons for this.</p>

  <p>I personally started out with the first case, which after a significant amount of searching turned very little intelligence (not even social media accounts). After a short while I moved to the other pristine case, which was the fifth case. This turned out to be a goldmine in terms of information, since the mother had been divulging a lot of information in her pleas to the public (such as her former place of employment, phone numbers, email addresses, and things like that). In the last leg of the CTF, I started hopping around in the least productive cases, finding a few elements and submitting them.</p>

  <p>Our team dynamic was a bit flawed however, as comparing it with others' in terms of communication reveals some insights. Whilst all of the team members were present in a Discord voice channel for most of the event, no one was actually speaking save for some small sanity checks. This kind of goes against the rubber ducky principle, and could have had team members lose valuable time looking for their next pivot, instead of asking for a consult, as it were. It also resulted in a team member not informing the person on the case that they were looking into the case, which could have gone very wrong if they had not been looking from a different angle into the case.</p>

  <p>The second aspect is the quality of the submissions. Now of course not all submissions were perfect, because for example rejecting a submission due to the lack of image documentation was fair -- and it got us to do it correctly in later submissions. However the judge also initially rejected a TikTok account of a MP because the submitter had not made a facial comparison, which we felt was a bit excessive. Other submissions were rejected on the basis of a lack of proof, for example a picture of an underage MP holding a beer glass with opaque foamy liquid and being a bit rosy was not considered as a sign of a potential alcohol problem such as underage drinking (quite possible, considering the fact the family had had a few issues with alcohol previously).</p>

  <p>Scrambling to fix or understand the basis for rejection of these submissions, as well as documenting said submissions, was something that took a lot of time, as it is quite literally the most time consuming task when cataloging intelligence, which all in all amounted to the rejection of at least 1.5k points (that being just the sum of the values of my personal rejected submissions), which itself had an effect on the team during the CTF.</p>

  <br/>
  <h4 id="much-ado-about-docs">Much ado about documentation</h4>
  <p>The primary aspect of documenting a piece of intelligence is to make sure the important elements are visible and can be easily identified. Having a screenshotting software with basic editing capabilities (ie. drawing circles, rectangles and text) is quite important. Saving these files in a specific directory with an incrementing number helps identify which pieces of intelligence haven't been submitted yet. Moving the already submitted intelligence to another folder between drill-downs is another easy way to avoid cluttering the workspace.</p>

  <p>That isn't the only thing to keep track of though. There is a common (sarcastic) saying in infosec that Excel is the best monitoring / logging tool. Well here it comes quite close to the mark.</p>

  <p>Having a template Excel workbook to start with is ideal, and it helps keep track of information. As columns, we have <strong>"POINTS"</strong> the category the intelligence is supposed to represent, <strong>"URL"</strong> the link of said intelligence (be careful to disable Excel's link detection, I did not and it could have backfired), <strong>"RELEVANCY"</strong> being how this intelligence relates to the case, <strong>"ADDITIONAL INFO"</strong> which is any additional commentary or evidence provided and finally <strong>"SCORE"</strong> which tracks how many points the submission was valued at.</p>

  <p>Additionally I use background colors to see what the status of a piece of intelligence is: <strong><span style="background-color: white; color: black;padding: 2px;">WHITE</span></strong> means unsubmitted, <strong><span style="background-color: orangered; color: black; padding: 2px;">ORANGE</span></strong> means submitted, <strong><span style="background-color: #70AD47; color: black; padding: 2px;">GREEN</span></strong> means accepted and <strong><span style="background-color: red; color: black; padding: 2px;">RED</span></strong> means rejected.</p>

  <br/>
  <div class="media-container">
    <img src="/assets/images/AtomicNicos-posts/Feb2021-Tracelabs/excel-case.png" alt="A redacted case information aggregation spreadsheet from the TraceLabs CTF."/>
  </div>
  <br/>

  <p>This all feeds into a statistics Excel page which I use to see my contribution to the event (as a not-so-veiled ego boosting technique). It shows the score on a per case basis and the amount of evidence accepted per case too.</p>

  <br/>
  <div class="media-container">
    <img src="/assets/images/AtomicNicos-posts/Feb2021-Tracelabs/excel-stats.png" alt="The statistics spreadsheet from the TraceLabs CTF."/>
  </div>
  <br/>

  <p>The main advantage to this technique is that one only needs to copy-paste the data into the corresponding fields to submit the intelligence, making it all in all quite easy to deal with, without forgetting to submit any intelligence.</p>

  <br/>
  <h4 id="my-conclusions">My personal conclusions</h4>
  <p>I personally enjoyed my time in this CTF, although I was a tad disappointed in our ranking. But that just means we have more to learn.</p>

  <p>I also got this nifty badge from it, so there's that too.</p>

  <div class="media-container">
    <a target="_blank" href="https://ca.badgr.com/public/assertions/bQurDCQITFSbtVD3zdWb2A">
      <img class="profile" src="https://api.ca.badgr.io/public/assertions/bQurDCQITFSbtVD3zdWb2A/image"/>
    </a>
  </div>
  <br/>

  <p>See you at the next one!</p>

___

<p>This article is originally published on AtomicNicos's Blog (<a href="https://atomicnicos.me/postx/2021/2021_02_26%2BTraceLabs-CTF-With-Hacksouth" target="_blank">original link here</a>) and was published by them on the HackSouth blog, conform to the <a href="https://atomicnicos.me/copyright">CC-BY-SA policy</a> on the website.</p>

___
