# Plugin Development

## Introduction
bPanel is built entirely around plugins. All visual elements can be extended or overridden via the plugin system including the header, footer, sidebar, and main panel/view element. This is done by leveraging the composable nature of [React](https://reactjs.org) as well as the [3 principles of redux](https://redux.js.org/introduction/three-principles) (single source of truth, read only state, and functional reducers (read more about how [below](#design-philosophy))). Even if you're unfamiliar with either React or Redux, bPanel makes it easy to hook into the underlying architecture and interact with the blockchain API layer on the backend.

This plugin system was heavily influenced by the amazing work done on the [Hyper.is](https://hyper.is) JS terminal emulator by the team at [Zeit.co](https://zeit.co).

### Design Philosophy
We wanted to make bPanel as extensible as possible. Rather than try and solve all problems with a single tool, our goal was to enable developers to create many tools to solve problems for any use case. Whether you wanted to have a footer widget that shows the progress of your node sync or the most recently generated address for a wallet, you can build that plugin for your specific instance of bPanel.

The bPanel plugin system also allows you to [bundle a group of plugins together](#bundling-plugins), creating a theme. By building out themes in this way, a user of bPanel can put together a bespoke version of bPanel, utilizing a range of plugins from other developers, that suites their specific needs- from wallet interfaces to transaction management to block explorers or even advanced scripting.

In order to hook into bPanel, plugins should expose at least one of the [API extensions](#api). These extensions tell bPanel how you would like your plugin to decorate or extend the app. This works either by [decorating React Components](#decorate) (using the power of [Higher Order Components](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)), extending the [reducer](#reducers), or [adding middleware](#middlware) to respond to actions. You can even interact with the web sockets API of your bcoin backend via redux, using bsock-middleware (read more [below](#sockets)).

#### A Plugin Ecosystem
The last important part of the design philosophy behind the plugin architecture is the ability to easily enable an open ecosystem of plugins. Based on the system built into [Hyper.is](https://hyper.is), bPanel allows you to simply `npm install --save` a plugin into your local bPanel's `node_modules`. You can also use `localPlugins` to develop or install plugins locally. The idea is that with just a few `npm install`s, it will be that easy to compose your perfect blockchain interface (and eventually we hope to have a GUI to even simplify that).

## Getting Started
Before getting started, you may want to install the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) (Chrome and Firefox extensions are available). The developer build of bPanel will expose these tools in the browser which will give you a lot of information about what data is available in the store, what actions are fired, etc.

### bPanel CLI
We've built a CLI tool to help spec out the initial skeleton of your plugin and let you hit the ground running in your development. This will setup a project directory for you that is ready to be published onto NPM. For local development you can add this to your bPanel repo, or just `npm link` it (see the npm [docs](https://docs.npmjs.com/cli/link) for more).

The CLI tool is available via npm: [bpanel-cli](https://www.npmjs.com/package/bpanel-cli).
```shell
npm install -g bpanel-cli
```

Once installed, run the command below to create your plugin boilerplate. This will walk you through the steps necessary to setup your development environment. If you've ever run `npm init`, many of the initial steps will feel familiar to you (and in fact, this will fill out a lot of the same information in your plugin's package.json). The later steps however are more advanced, specific to your plugin and the bPanel API, so feel free to skip these if you're not exactly sure what you want to build or how to built it.

```shell
bpanel-cli create
```

Once the script is complete you should have a plugin project directory ready to work on (and even `npm publish` if you wanted to).

## API
The following describes the extensions available that you can expose from your plugin in order to build a plugin. All you need to do is make sure that at least one of these are exported from the entry point of your module (e.g. index.js when using `bpanel-cli`).

### Decorate
This is the part of the API where you are generally extending your views (i.e. the visual components). If you're familiar with how [Higher Order Components](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e) work in React, then you should be comfortable with this interface. The short version is that you want to export a function that accepts a React component (and an object with `React` and `PropTypes`) as arguments and then returns a new React Component that has been decorated by your component.

In most cases, the `render` method of your returned component should return the component it was originally passed with props for any custom children you want to decorate it with.

The available decorators are:
- decorateFooter
- decorateHeader
- decorateSidebar
- decoratePanel
- decoratePlugin (advanced)

#### decoratePanel
This is probably one of the most important decorators as it allows you to create entire routes for your plugin (i.e. a full page view that you can navigate to by a URL path or the page navigation).

#### decorateHeader
#### decorateFooter
#### decorateSidebar
#### deocratePlugin
As this requires a plugin that supports decoration by other plugins, this is a more advanced feature. See below for how to enable this in your own plugin: [Decorating Plugins](#decorating-plugins).

### getProps
### Reducers
### Middleware
### Constants
Currently only the constants for listening to sockets are exposed. Read more about interacting with bcoin via sockets [below](#sockets).
### Sockets
#### Listen and Emit
[bsock Middleware](https://www.npmjs.com/package/bsock-middleware)
#### Broadcast
#### Dispatch
#### Subscribe
#### Connect
### Decorating Plugins
### Bundling Plugins
### bPanel Utils
#### API
##### get
##### post
#### Chain
#### Helpers
##### now()