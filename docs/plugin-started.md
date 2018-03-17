---
id: plugin-started
title: Getting Started
sidebar_label: Getting Started
---

Before getting started, you may want to install the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) (Chrome and Firefox extensions are available). The developer build of bPanel will expose these tools in the browser which will give you a lot of information about what data is available in the store, what actions are fired, etc.

### bPanel CLI
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
If you're using the default plugin structure, index.js in the top level of your plugin directory is the entry point to your plugin. Your plugin extensions should be exposed in this file (see the API docs for more on the available extensions). All other files should be in the `lib` directory.

To build your plugin anytime you make changes simply change to your plugin's directory and run the watch command (you can also manually run `make babel` after each change)

```bash
cd /path/to/your-plugin
make watch
```


To be able to use the plugin you're developing in your local bPanel project, in your terminal first run from your plugin project directory:

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

Then add your plugin to your pluginsConfig.js (see [Install Plugins](/bpanel-docs/docs/install-plugins.html) for more).

## Publishing your Plugin
If you're using `bpanel-cli` to spec your plugin files, then this is as easy as `npm publish`. Just make sure you've got your npm registry credentials setup on your local machine (more [at npm](https://docs.npmjs.com/cli/publish)). Once published, other bPanel developers can install and import your plugin into their own app!

`bpanel-cli create` will automatically add `bpanel` and `bcoin` keywords to your package.json. This makes it easy for other users to find your plugin with a simple `npm search bpanel`

## The Plugin API
You will need to hook into the extension API in order to make sure your functionality is added to bPanel. Read about the API to learn more about the available extensions and how to use them. All you have to do is make sure that at least one of these are exported from the entry point of your module (e.g. index.js when using `bpanel-cli`).

The API can roughly be broken down as follows (click the links to learn more about implementation):
- [Metadata](/bpanel-docs/docs/api-metadata.html)
- [Decorate](/bpanel-docs/docs/api-decorate.html)
- [Get Props](/bpanel-docs/docs/api-getprops.html)
- [Reducers](/bpanel-docs/docs/api-reducers.html)
- [Middleware](/bpanel-docs/docs/api-middleware.html)
- [Constants](/bpanel-docs/docs/api-constants.html)
- [Sockets](/bpanel-docs/docs/api-sockets.html)
  - Connect
  - Listen and Emit
  - Broadcast
  - Dispatch
  - Subscribe
- [Decorate Plugins](/bpanel-docs/docs/api-decorate-plugins.html)
- [Bundling Plugins](/bpanel-docs/docs/api-bundling-plugins.html)
- [bPanel Utils](/bpanel-docs/docs/bpanel-utils.html)
  - clients
  - Chain
  - Helpers
    - now()
- [decorateTheme](/bpanel-docs/docs/theming-started.html#bpanel-webapp-plugins-local-mytheme-indexjs)