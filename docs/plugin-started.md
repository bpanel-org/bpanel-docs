---
id: plugin-started
title: Getting Started
sidebar_label: Getting Started
---

Before getting started, you may want to install the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) (Chrome and Firefox extensions are available). The developer build of bPanel will expose these tools in the browser which will give you a lot of information about what data is available in the store, what actions are fired, etc.

### Table of Contents
- [bPanel CLI](#bpanel-cli)
- [Developing Your Plugin](#developing-your-plugin)
- [A Note About Dependencies](#a-note-about-dependencies)
- [Publishing Your Plugin](#publishing-your-plugin)
- [The Plugin API](#the-plugin-api)

## bPanel CLI
We've built a CLI tool to help spec out the initial skeleton of your plugin and let you hit the ground running in your development. This will setup a project directory for you that is ready to be published onto NPM. For local development you can add this to your bPanel repo, or just npm link it (see the npm [docs](https://docs.npmjs.com/cli/link) for more).

The CLI tool is available via npm: [bpanel-cli](https://www.npmjs.com/package/@bpanel/bpanel-cli).
```shell
npm install -g @bpanel/bpanel-cli
```

Once installed, run the command below to create your plugin boilerplate. This will walk you through the steps necessary to setup your development environment. If you've ever run `npm init`, many of the initial steps will feel familiar to you (and in fact, this will fill out a lot of the same information in your plugin's package.json). The later steps however are more advanced, specific to your plugin and the bPanel API, so feel free to skip these if you're not exactly sure what you want to build or how to built it.

```shell
bpanel-cli create
```

Once the script is complete you should have a plugin project directory ready to work on (and even `npm publish` if you wanted to).

## Developing your Plugin
If you're using the default plugin structure, index.js in the `dist` directory of your plugin directory is the entry point to your plugin. Your plugin extensions should be exposed in this file (see the API docs for more on the available extensions). If you're using `bpanel-cli create` though, you can/should build in the `lib` directory, exposing an `index.js` file there, and the build commands (`make watch`, `make build`, or `npm publish` described below) will build your files into the `dist` directory (the build really just converts any modern ES6+ into more widely supported JavaScript).

bPanel's `config.js` file supports two import types, with fields for `local` and `plugins`. Any plugin name in the `plugins` array will be attempted to be downloaded from npm (but not saved to your package.json). Local plugin projects will be looked for in `webapp/plugins/local` so make sure a project with a matching name is available there.

### As a Local Plugin
This can be the most straightforward way to develop, however since webpack will include all these files in its scope,
if you have too many you could end up with JavaScript Heap memory errors. To get started, just `cd` to `/path/to/bpanel/webapp/plugins/local` and run `bpanel-cli create`, which will default to building your plugin directory in your current working directory.

### With npm link
Using `npm link` can be a good way to test your plugin under more realistic conditions (e.g. managing dependencies), however the setup is a little tricky since you need to add your plugin to the `plugins` array which will try and install it from the npm registry first.

Make sure you've run a build once without any linked packages first so that other plugins will install and be saved to node_modules. Next, in your terminal from your plugin project directory, run:

```bash
npm link
```

then change to your bPanel directory

```bash
cd path/to/bpanel
```

and link to your plugin

```bash
npm link [PLUGIN_NAME]
```

Then add your plugin to bPanel's config.js (see [Install Plugins](/docs/install-plugins.html) for more).

To build your plugin anytime you make changes, simply `cd` to your plugin's directory in your terminal and run the watch command (you can also manually run `make babel` after each change).

**NOTE:** You must `link` the plugin *after* any updates to your config.js and a webpack build has run. Since a change to the config file triggers a new npm install, this will clear any links you have.

```bash
cd /path/to/your-plugin
make watch
```

If you see an error in your build that says your plugin can't be found, try and `npm link` your plugin in the bpanel project again and make sure your plugin has built at least once.

## A Note about Dependencies
Since you will only be using your plugin in bPanel, you can assume a number of tools and packages will be
available by default. This means there is no need to include them in your plugin's dependencies.
The best thing to do (especially to make the linter happy) is to add them to your `peerDependencies` in `package.json`.
`bpanel-cli create` will take care of the most important ones for you automatically, but
if there are others you depend on, and/or you want to ensure a minimum version, make sure to update those manually.

Important packages your plugin can expect to have access to include:

- "@bpanel/bpanel-ui"
- "@bpanel/bpanel-utils"
- "react"
- "react-dom"
- "react-redux"
- "react-router-dom"
- "redux"
- "redux-thunk"

## Publishing your Plugin
If you're using `bpanel-cli` to spec your plugin files, then this is as easy as `npm publish`. Just make sure you've got your npm registry credentials setup on your local machine (more [at npm](https://docs.npmjs.com/cli/publish)). Once published, other bPanel developers can install and import your plugin into their own app!

`bpanel-cli create` will automatically add `bpanel` and `bcoin` keywords to your package.json. This makes it easy for other users to find your plugin with a simple `npm search bpanel`

## The Plugin API
You will need to hook into the extension API in order to make sure your functionality is added to bPanel. Read about the API to learn more about the available extensions and how to use them. All you have to do is make sure that at least one of these are exported from the entry point of your module (e.g. index.js when using `bpanel-cli`).

The API can roughly be broken down as follows (click the links to learn more about implementation):
- [Metadata](/docs/api-metadata.html)
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
  - clients
  - Chain
  - Helpers
    - now()
- [decorateTheme](/docs/theming-started.html#bpanel-webapp-plugins-local-mytheme-indexjs)