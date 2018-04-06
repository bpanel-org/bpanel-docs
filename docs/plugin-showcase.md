---
id: plugin-showcase
title: Plugin Showcase
sidebar_label: Plugin Showcase
---
Here are some featured bPanel plugins to help you get started.
Any of these can be added to your local bPanel install by adding
their name (as they appear on npm) to the pluginsConfig.js

## Plugins
### Simple Mining
Simple mining utility. Includes tools to:
- Add coinbase address
- Mine set number of blocks
- Start/Stop CPU mining
- Display stats about your miner
[Get on NPM](https://npmjs.com/@bpanel/simple-mining)

### Dashboard
A "blank slate" plugin that [can be decorated by widgets](/docs/api-decorate-plugins.html)
to add functionality to your home view. Has 4 pluggable
widget areas: customChildrenBefore, primaryWidget, bottomWidgets,
customChildrenAfter.
[Get on NPM](https://npmjs.com/@bpanel/dashboard)

### BUI
A playground plugin to view and test available bpanel-ui components.

[Get on NPM](https://npmjs.com/@bpanel/bui)

### Chain Sockets
A utility plugin for subscribing to chain sockets
and managing the chain state accordingly.
[Get on NPM](https://npmjs.com/@bpanel/chain-sockets)

### bPanel Footer
A footer plugin that shows the current version of bcoin you're connecting to and the
sync progress of your node.

[Get on NPM](https://npmjs.com/package/@bpanel/bpanel-footer)

### bPanel Header
A plugin to decorate your header with a widget for the top right that shows
current network you're connected to, URI of the node, and connection status.

[Get on NPM](https://npmjs.com/package/@bpanel/bpanel-header)

## Widgets
### Recent Blocks
A widget that displays a table with the 10 most recent blocks that have been mined.
By default it will decorate the dashboard plugin, but this can be changed with relatively
little code.

Includes expanding rows to show more detailed information about the block
as well as copy fields to easily copy and paste long pieces of data.

[Get on NPM](https://npmjs.com/@bpanel/recent-blocks)

### Mempool Widget
A simple widget for your dashboard plugin that uses the [`chain-sockets`](#chain-sockets)
utility plugin to show the total number of transactions and size of the mempool.

[Get on NPM](https://npmjs.com/@bpanel/mempool-widget)

### Peers Widget
This includes two widgets for your dashboard, one in the bottom widgets area that shows
a table of your currently connected peers, and a second in the bottom area of the dashboard
that shows a Google map with the approximate location of the peers.

[Get on NPM](https://npmjs.com/@bpanel/peers-widget)

## Themes
Themes are essentially bundles of plugins and skins. Anyone can easily create
their own theme by [bundling together existing plugins](/docs/api-bundling-plugins.html).

### Genesis Theme
The default theme that comes with bPanel. Includes the following:
- bpanel-footer
- bpanel-header
- bMenace Skin
- Dashboard with Peers, recent blocks, and mempool widgets

## Skins
![bMenace Theme](/img/theme-bMenace-white.png "menace theme")*Custom skin bMenace*

![bMoon Theme](/img/theme-bMoon-dark.png "moon theme")*Custom skin bMoon*

![Dark Theme](/img/theme-bDark-dark.png "dark theme")*Custom skin bDark*

![Default Theme](/img/theme-bDefault-white.png "default theme")*Default bPanel Skin*


If you would like to see your plugin featured here, you can submit a [pull request on GitHub](https://github.com/bpanel-org/bpanel-docs/pulls) with your project name, link, and description.
