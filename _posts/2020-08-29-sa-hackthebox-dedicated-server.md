---
title: "How To Access Our Dedicated Meetup Lab"
author: spymky
header:
  teaser: /assets/images/dedicated-labs/dedicated-labs.png
excerpt_separator: "<!--more-->"
categories:
 - Meetup
tags:
 - HackTheBox
 - How To
 - Dedicated Labs
---

![dedicated labs](/assets/images/dedicated-labs/dedicated-labs.png){: .align-center}

This post shows how to access our dedicated lab during Hack The Box Meetups. Instead of playing on public instances, Hack The Box provides us a private lab environment for our Meetups. A mix of active and retired machines will be available without noise or interruption from other HTB players beyond our group.<!--more--> This private environment will only be available for the duration of our Meetups.

## Step 1 – Change to Classic HTB UI

If you are using the "New UI", you need to switch back to the old UI for the duration of this Meetup. This can be done by clicking on your username and choosing **Classic HTB**.

![switch to classic](/assets/images/dedicated-labs/switch-to-classic.png){: .align-center}

## Step 2 – Switch Server & Download Connection Pack

In the menu on the left, click on **Access**. You should see an active ticket called "**Dedicated**". If it is not there, reach out to the Meetup hosts (**spymky** or **CptUnderpants**) to add you to the Meetup's dedicated lab. This will be done automatically if you provided your HTB username on Meetup.com and RSVP'd for the Meetup.

Switch to the Dedicated lab by clicking the **switch** dropdown on the ticket and choosing the dedicated lab (there should be one option). Once switched, refresh your **HTB Lab Access Details** and the server name should change to something like `edge-eu-dedicated-34.hackthebox.eu`. Then download the connection pack.

![download connection pack](/assets/images/dedicated-labs/connection-pack.png){: .align-center}

## Step 3 - Connect to the Dedicated Lab VPN

Your downloaded connection pack is an OpenVPN connection file. Connect to the lab VPN with `sudo openvpn <username>.ovpn`. It should generate output like below.

Leave this process running in the background while you are in the lab! When you are done and want to disconnect, you can stop it by hitting `Ctrl+c` or closing the window.

```
➜  ~ sudo openvpn spymky.ovpn
Sat Aug 29 05:31:36 2020 OpenVPN 2.4.9 x86_64-pc-linux-gnu [SSL (OpenSSL)] [LZO] [LZ4] [EPOLL] [PKCS11] [MH/PKTINFO] [AEAD] built on May  2 2020
Sat Aug 29 05:31:36 2020 library versions: OpenSSL 1.1.1g  21 Apr 2020, LZO 2.10
Sat Aug 29 05:31:36 2020 Outgoing Control Channel Authentication: Using 256 bit message hash 'SHA256' for HMAC authentication
Sat Aug 29 05:31:36 2020 Incoming Control Channel Authentication: Using 256 bit message hash 'SHA256' for HMAC authentication
Sat Aug 29 05:31:36 2020 TCP/UDP: Preserving recently used remote address: [AF_INET]5.44.235.121:1337
Sat Aug 29 05:31:36 2020 Socket Buffers: R=[212992->212992] S=[212992->212992]
Sat Aug 29 05:31:36 2020 UDP link local: (not bound)
Sat Aug 29 05:31:36 2020 UDP link remote: [AF_INET]5.44.235.121:1337
Sat Aug 29 05:31:36 2020 TLS: Initial packet from [AF_INET]5.44.235.121:1337, sid=e556230f 478efe57
Sat Aug 29 05:31:36 2020 VERIFY OK: depth=1, C=UK, ST=City, L=London, O=HackTheBox, CN=HackTheBox CA, name=htb, emailAddress=info@hackthebox.eu
Sat Aug 29 05:31:36 2020 VERIFY KU OK
...
Sat Aug 29 05:31:38 2020 Initialization Sequence Completed
```
 
## Step 4 - Test Your Connection
 
First, confirm that you've been given an IP address. OpenVPN should create and connect a network interface called `tun0`. Run `ip -br -4 a show tun0` to check if you have an IP address (IPv4) allocated to `tun0`. I can see my IP is `10.10.14.2` (this is useful to note for later when you make target boxes connect back to you).

```
➜  ~ ip -br -4 a show tun0
tun0             UNKNOWN        10.10.14.2/23
```

Second, check that you can ping any of the target machines in the lab environment. In the menu on the left, click on **Dedicated Labs** > choose **EU Dedicated xx**. There you will see the list of available boxes on the dedicated server and their associated IP addresses.
 
![list of target machines](/assets/images/dedicated-labs/dedicated-lab-machines.png){: .align-center}
  
Pick any of the IP addresses and try to ping it with below command. If you see a message like `64 bytes from <IP address>` then it is working. Hit `Ctrl+c` to stop. Note that a very few machines intentially do not respond to ICMP ping requests, so try a second one if the first one fails.

```
➜  ~ ping 10.10.10.40
PING 10.10.10.40 (10.10.10.40) 56(84) bytes of data.
64 bytes from 10.10.10.40: icmp_seq=1 ttl=127 time=184 ms
64 bytes from 10.10.10.40: icmp_seq=2 ttl=127 time=291 ms
64 bytes from 10.10.10.40: icmp_seq=3 ttl=127 time=185 ms
64 bytes from 10.10.10.40: icmp_seq=4 ttl=127 time=185 ms
^C
```

That's it! You are now connected to the dedicated lab and can begin to hack those boxes! Feel free to reach out to the Meetup organisers or on Discord if you have any questions.

## Step 5 - Switch Back to Regular Servers

Remember to go back to the **Access** page and switch back to the regular labs after the Meetup.

<sub>Adapted from the [Ottawa HTB Meetup group's guide](https://github.com/rkhal101/htb-ottawa/blob/master/how-to-connect-to-dedicated-server.md)</sub>