---
id: plugin-started
title: Getting Started
sidebar_label: Getting Started
---

Before getting started, you may want to install the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) (Chrome and Firefox extensions are available). The developer build of bPanel will expose these tools in the browser which will give you a lot of information about what data is available in the store, what actions are fired, etc.

### bPanel CLI
We've built a CLI tool to help spec out the initial skeleton of your plugin and let you hit the ground running in your development. This will setup a project directory for you that is ready to be published onto NPM. For local development you can add this to your bPanel repo, or just npm link it (see the npm [docs](https://docs.npmjs.com/cli/link) for more).

The CLI tool is available via npm: [bpanel-cli](https://www.npmjs.com/package/bpanel-cli).
```shell
npm install -g bpanel-cli
```

Once installed, run the command below to create your plugin boilerplate. This will walk you through the steps necessary to setup your development environment. If you've ever run `npm init`, many of the initial steps will feel familiar to you (and in fact, this will fill out a lot of the same information in your plugin's package.json). The later steps however are more advanced, specific to your plugin and the bPanel API, so feel free to skip these if you're not exactly sure what you want to build or how to built it.

```shell
bpanel-cli create
```

Once the script is complete you should have a plugin project directory ready to work on (and even `npm publish` if you wanted to).

## Developing your Plugin

## Using your Plugin

## Publishing your Plugin

## The Plugin API
You will need to hook into the extension API in order to make sure your functionality is added to bPanel. Read about the API to learn more about the available extensions and how to use them. All you have to do is make sure that at least one of these are exported from the entry point of your module (e.g. index.js when using `bpanel-cli`).

The API can roughly be broken down as follows (click the links to learn more about implementation):
- [Decorate](/docs/api-decorate.html)
- [Get Props](/docs/api-getprops.html)
- [Reducers](/docs/api-reducers.html)
- [Middleware](/docs/api-middleware.html)
- [Constants](/docs/api-constants.html)
- [Sockets](/docs/api-sockets.html)
  - Connect
  - Listen and Emit
  - Broadcast
  - Dispatch
  - Subscribe
- [Decorate Plugins](/docs/api-decorate-plugins.html)
- [Bundling Plugins](/docs/api-bundling-plugins.html)
- [bPanel Utils](/docs/bpanel-utils.html)
  - API
    - get
    - post
  - Chain
  - Helpers
    - now()