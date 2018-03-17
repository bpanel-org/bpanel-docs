---
id: bpanel-overview
title: bPanel Overview
sidebar_label: Overview
---

## Introduction
Our goal with bPanel was to build a completely new kind of blockchain interface on top of one of the most advanced blockchain implementations. Rather than try and create something that solves all use cases, or focus on one or two of the most common problems, we believe that the best way to create new, effective, and secure user experiences is to enable a diverse ecosystem of developers to come up with novel approaches that no one team could imagine on their own.

In the world of CMS's, projects like WordPress and Drupal started as ways to let people without much specific platform expertise to easily organize simple content, primarily blog posts. This ended up creating a whole industry of developers building diverse categories of websites on these platforms. As of April, 2016, over 26% of all websites run on WordPress, from large newspapers to photography portfolios and ecommerce platforms, far beyond the originally envisioned blogs.

A Blockchain Management System, or BMS, like bPanel aims to do something similar in the world of blockchain interfaces. Rather than relying on one company for your wallet interface, another for hardware wallet interfaces, and another for a block explorer (to say nothing of needing deep technical and command line expertise to run enterprise tasks like transaction and node management), why not have a single platform where you can install plugins and themes that solve each of these problems. This gives the user the ability to mix and match their ideal interface. All of this backed by the enterprise-level security and robustness of [bcoin](http://bcoin.io).

>**Much like how CMS's created a whole new way to interact with _centralized_ databases, a BMS will revolutionize how we interact with, and build on, _decentralized_ databases.**

The possibilities of things that can be built with a BMS are potentially endless:
- Multisignature transaction management
- Advanced wallet feature support
- Peer management on your node
- Block explorers with advanced visualizations
- Advanced transaction scripting and validation
- Time-locked kill switch transactions
- Key management
- Password management built on proven cryptography

## Architecture
The default setup for bPanel when first [getting started](/bpanel-docs/docs/quick-start.html) is with two docker containers running in parallel, one with an app server that serves the static files and routes requests from bPanel clients and one that runs an isolated instance of a bcoin node. In reality though, bPanel can run entirely separate from a bcoin node (you could, however, also decide to create a plugin that runs a bcoin node directly in the client). All you have to do is make sure to set the right configuration files to tell your app server where to send requests meant for a node (see more in [configuration](/bpanel-docs/docs/quick-start.html#configuration)).

The app server serves as a proxy between your clients (of which there can be many) and your node.

![bpanel architecture](/bpanel-docs/img/tech-diagram.png "bpanel architecture")

This allows for a lot of flexibility. You could host your app server remotely, allowing for multiple users to access it from different clients and all talking to the same remote node. With bcoin's support for a separate wallet server, you can have a bPanel setup that is only meant to interact with a wallet server or only a node (Full, SPV, or Neutrino). You could use bcoin's built-in wallet services to manage wallets and accounts or handle key management locally in the clients. This also provides an extra layer of security by not giving users direct access to your node.

## Tech Stack
The App Server is built entirely with NodeJS and Express. WebSocket management uses bcoin's native WebSocket implementation, bsock (compatible with the Socket.io API). Currently there is no persistent storage support outside of bcoin's own chain and wallet databases and local storage (though it is planned for future releases).

The front-end and plugin system are built with React and Redux. Redux is also used to [manage the socket client](/bpanel-docs/docs/api-sockets.html) through a middleware called [bsock-middleware](https://www.npmjs.com/package/bsock-middleware).

The Bootstrap grid system (v4) is used to support responsive layouts and a custom [theming system](/bpanel-docs/docs/theming.html) using [aphrodite](https://www.npmjs.com/package/aphrodite-simple) for advanced inline style support are used for styling and CSS.

You can read more about how the plugin system is designed and how to develop your own plugins [here](/bpanel-docs/docs/plugin-intro).
