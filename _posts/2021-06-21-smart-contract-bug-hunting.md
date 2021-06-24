---
title: "Smart Contract Bug Hunting"
author: toastedsteaksandwich
header:
  teaser: /assets/images/smart-contract-bug-hunting/bug.png
excerpt_separator: "<!--more-->"
categories:
 - Bug Bounty
tags:
 - Vulnerability
 - Learning
 - How to
 - Smart Contracts
---

I've recently swapped out playing CTFs in my free time to trying to catch bugs in my free time, usually for a bounty. Since bug bounty platforms are usually focused on web or mobile applications, I thought it might be interesting to introduce an emerging branch of bug bounty, focusing on smart contracts.<!--more-->

For anyone unfamiliar, a [bug bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program) is a way for whitehat hackers to disclose security vulnerabilies for different platforms, generally in exchange for a monetary bounty. The exact bounty largely depends on the likeihood of the vulnerability being exploited, along with the severity if exploited. Payouts can range anywhere from [$100 to $1m](https://immunefi.com/explore/).


## Live hunting

Ethereum smart contracts have seen significant traction  with the emergence of [DeFi](https://en.wikipedia.org/wiki/Decentralized_finance), with many smart contracts [holding significant value](https://defipulse.com/). As such, exploits of these smart contracts can lead to a drain of several millions of dollars, [as seen many times](https://rekt.news/leaderboard/). To incentivise hackers to disclose vulnerabilities instead of exploiting them, platforms such as [Immunefi](https://immunefi.com/) now interface with several smart contract platforms to aid in safe vulnerability disclosure. Since smart contract code is *generally* immutable, easy-to-catch bugs are usually more difficult to find on audited, deployed contracts. This also means that bugs found here are typically higher risk, and can carry a high payout. 

## Code arena hunting

To sift bugs before smart contracts go live, platforms will typically [undergo an audit](https://iosiro.com/services/smart-contract-auditing), analagous to a traditional pentest. A new style of auditing has emerged in the form of time-boxed hunting as introduced by [code423n4](https://code423n4.com/). Here, smart contract developers will sponsor a bounty and a time-boxed window is opened for hackers to submit bugs on undeployed smart contracts. The findings are then validated and the bounty is split between all hackers who submitted valid findings, rated by severity. If the target smart contracts did not undergo a previous audit, easy-to-catch bugs are more commonplace here, and can typically get rewarded if considered valid.

## Lessons learnt as a beginner

Over the last few months I've tried both styles of bug hunting, and both coming with it's own pros and cons. For code arena-style hunting, I've enjoyed being able to catch a few bugs in my spare time, typically being rewarded for my efforts when the pot is split. However, as the assessments are timeboxed, there is no incentive to continue hunting after the contest is closed. This can make it tricky to try coordinate time to a single platform and find high-risk bugs, especially since the contest will typically run through a work week.

On the flip side, when hunting for bugs on a live contract, I've found that it can be disheartening to spend your weekend (or weekends!) with no concrete results to show for it. At the same time, finding one high-impact bug can make the entire process worth it. I've [recently disclosed](https://iosiro.com/blog/88mph-bug-bounty-post-mortem) a critical bug that affected over $6.5m worth of cryptoassets, with the outcome outweighing the many hours spent without result. My motivation to hunt has been restored since then. 😄

Overall, I don't think there is no best style when it comes to bug hunting - it's whatever works for you in your time. The important thing is to keep learning and trying to recognize your progress as you go. Enjoy the hunt!  
