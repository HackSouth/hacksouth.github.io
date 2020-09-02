---
title: "0x00 - Starting from zero on HackTheBox"
header:
  teaser: /assets/images/0x00-starting-from-zero/wannacry.png
excerpt_separator: "<!--more-->"
categories:
 - Meetup
tags:
 - HackTheBox
 - WannaCry
 - EternalBlue
---
This post summarises the Meetup held on Tuesday 1 Sept 2020.

## Agenda
This will be an introductory session with the goal of getting everyone to pop a shell with EternalBlue. The backstory of WannaCry will be presented after a quick introduction. Then we will walk through the EternalBlue exploit and help everyone practice it in the HTB lab. Advanced attendees can skip forward to do other boxes on the private lab provided by HTB. The hosts will focus on walking new people through getting registered, set up, connected, and popping that 1st shell.<!--more-->

![that 1st shell](/assets/images/0x00-starting-from-zero/shell-meme.png){: .align-center}

## Setup
Our first Meetup was preceded by some chaos and last-minute scrambling. We had hoped to find 30 interested people to RSVP for the Meetup - maybe 40 at a stretch. We kept seeing more and more requests until we decided to limiting the event to 100 attendees. Since Discord only allows 50 viewers in a video channel, we were forced to make alternate arrangements and shifted to Zoom. Off to an interesting start...

## Presentation
The Meetup kicked off with a deep dive of WannaCry. Nicholas Camp explained the origins of the infamous worm that rocked the world in 2017 and the roles of Microsoft, the NSA, the Lazarus Group (allegedly) and  Marcus Hutchins. The full presentation can be [viewed on our YouTube channel](https://www.youtube.com/watch?v=vyt6veBO1LY).

The second part of the presentation focussed on the Hack The Box platform itself. Nicholas explained how to navigate the content-rich [HackTheBox.eu](https://hackthebox.eu/) website: Where to configure your profile and team; where to find the boxes and challenges; a brief overview of Fortress, Endgame and Pro Labs; and how the ranking system works. Then he showed how to connect to our dedicated lab for getting our hands dirty with some exploits.

## Practical
Nicholas demonstrated the EternalBlue (MS17-010) exploit on HackTheBox's "Blue" box. Triggering the exploit was hit-and-miss due the unstable nature of EternalBlue. That and over 20 attendees running it at the same time against the same target. Eventually it triggered and returned a system-level command shell. Attendees were shown how to exfiltrate the "user" and "root" flags that need to be submitted on Hack The Box to complete the challenge.

We split into two main groups for the final section. Carl Mönnig discussed the active OpenKeyS box including and covered the fairly recent OpenBSD authentication exploits. Nicholas assisted the second group to get their own reverse shells using the EternalBlue exploit. Some attendees split into small groups on their own to work on Calamity and Cascade in our private lab (provided by Hack The Box for the evening).

![Discord channels](/assets/images/0x00-starting-from-zero/discord.png){: .align-center}

## Summary
We hoped to foster a safe & collaborative vibe and that is exactly what we saw! The Meetup was very interactive: Some experts chimed in with neat tips & tricks that benefited everyone - including the hosts. Beginners asked questions and the group pulled together to discover solutions. The Hack South Discord staff were awesome in their support and made sure everything ran smoothly. Feedback so far has been overwhelmingly positive and the event was a resounding success. Please reach out to the organisers on Discord or Meetup if you attended the event and have any suggestions.