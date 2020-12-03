---
title: "0x03 - Getting started with Reverse Engineering"
author: spymky
header:
  teaser: /assets/images/0x03-getting-started-with-re/ghidra.png
excerpt_separator: "<!--more-->"
categories:
 - Meetup
tags:
 - HackTheBox
 - SRE
 - Ghidra
 - gdb
---
This post summarises the Meetup held on 1 December 2020.

## Agenda
An introductory presentation on Software Reverse Engineering. A theory presentation will cover the types of outputs reverse engineers may investigate for CTFs and in practice. De-obfuscation, disassembly and decomplication will be discussed. We will look at the difference between static and dynamic analysis and how to use some of the common tools. The second half of the Meetup will feature two practical challenges: One guided, for attendees to follow along. The second one will be an exercise for attendees to try.<!--more-->

The stream recording [can be viewed on our YouTube channel](https://youtu.be/w81yT005_8A?t=590).

## Announcements
Check out the recently launched [HTB Academy](https://academy.hackthebox.eu/) for guided learning content from Hack The Box. Some sections are free, others are paid. Feedback from people on our Discord server is overwhelmingly positive.

[![HTB Academy](/assets/images/0x03-getting-started-with-re/htb-academy.png){: .align-center}](https://academy.hackthebox.eu/)

[KringleCon/SANS Holiday Hack 2020](https://holidayhackchallenge.com/) is around the corner. I attended last year and recommend it to everyone. It is a free, virtual conference for attendees to do at their own pace. Walking around the virtual world and helping the elves with obscure security challenges (while listening to festive music) is my favourite part! The date has not been announced yet, but it will likely open in 2 weeks. Join our dedicated Discord channel for hyping and discussing KringleCon!

Please send any Meetup feedback, topic requests, improvement suggestions, or requests for assistance in getting started to **me (spymky) or TOKO** on Discord. Also reach out if you would like to present anything related to Hack The Box, CTFs, or security training in a future Meetup.

## Contents
Software Reverse Engineering is a deep and daunting topic requiring broad knowledge and many skills to do well. The introduction Meetup was approached by showing samples of different types of applications: Interpreted code, interpreted byte code, and native machine code. Most SRE focusses on native machine code, but it is important to know about different software output formats and that there are completely different approaches for non-native applications. The two non-native samples included obfuscated JavaScript and decompilation of a .Net assembly.

![different software outputs](/assets/images/0x03-getting-started-with-re/software-outputs.png){: .align-center}

We discussed some of the reasons for doing SRE, with the core being *to understand* what software is doing. Needing to understand can be for many reasons: malware analysis, CTF challenges, security verification, penetration testing, recovering lost code, etc. Software 'cracking' to bypass license checking and stealing intellectual property are well-known unethical uses for SRE.

We briefly looked at the meanings of the output of the `file` command after compiling a simple C program in various ways with `gcc`:
* Normally, without any special flags.
* Statically, using the `--static` flag.
* Without symbols, using the `-s` flag.
* With embedded debugging information, using the `-g` flag.

The first practical was a guided walkthrough of the Hack The Box's 'Baby RE' challenge, a 64-bit Linux ELF application. It was solved in various ways, using:
* `strings` for finding the correct password,
* Ghidra for decoding the flag,
* `ltrace` for intercepting library calls,
* and `gdb` (with GEF or pwndbg) for debugging to bypass the password.

![gdb in action](/assets/images/0x03-getting-started-with-re/gdb-in-action.png){: .align-center}

The second exercise was Hack The Box's 'Ransom' challenge, a 64-bit Windows PE "ransomware" executable. The goal for this challenge was to figure out how to decrypt an Excel document which was encoded by the ransomware.

## Summary
After trying various platforms, we are starting to find our stride with YouTube and Discord. Attendees did not have any problems joining Discord for this Meetup. The only obstacle was the lengthy download and installation time for Ghidra and Java SDK, which were needed to attempt the two challenges. In the future, we will make sure to send out notices of required tools before the event.

### Tools Mentioned
* dnSpy [https://github.com/dnSpy/dnSpy/releases](https://github.com/dnSpy/dnSpy/releases)
* Ghidra [https://ghidra-sre.org/](https://ghidra-sre.org/)
* CyberChef [https://gchq.github.io/CyberChef/](https://gchq.github.io/CyberChef/)
* GEF [https://gef.readthedocs.io/](https://gef.readthedocs.io/)

### Recommended Links
* HTB Academy - IppSec's Introduction [https://www.youtube.com/watch?v=hBjksyVmspY](https://www.youtube.com/watch?v=hBjksyVmspY)
* HackadayU - SRE with Ghidra [https://www.youtube.com/playlist?list=PL_tws4AXg7auglkFo6ZRoWGXnWL0FHAEi](https://www.youtube.com/playlist?list=PL_tws4AXg7auglkFo6ZRoWGXnWL0FHAEi)
* crackmes.one - SRE challenges [https://crackmes.one/](https://crackmes.one/)
* Ghidra - Classified NSA Tool to Open Source [https://www.youtube.com/watch?v=kx2xp7IQNSc](https://www.youtube.com/watch?v=kx2xp7IQNSc)