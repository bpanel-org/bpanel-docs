---
id: install-plugins
title: Install Plugins
sidebar_label: Install Plugins
---

The plugin system built into bPanel is the best and most flexible way to customize your bPanel install while also ensuring compatibility with the platform. Add custom skins, add functionality, or extend existing views. All with a couple simple steps!

## With npm
The best way to install plugins is with npm. You can search for any plugins on npm tagged with the `bpanel` keyword by running

```bash
npm search bpanel
```

Then when you see you a plugin you want to install, run (from your project directory):

```bash
npm install --save [PLUGIN_NAME]
```

And then import and add the _name_ of your plugin to the /webapp/config/pluginsConfig.js file. (it should be a string that matches the name of the target plugin as it is identified in the npm registry)

```javascript
// webapp/config/pluginsConfig.js
export const localPlugins = [];

export const plugins = ['my-plugin'];

export default { localPlugins, plugins };
```

Note that if you are running bPanel with docker, you will need to restart your docker build to install the plugin into your container:

```bash
docker restart bpanel_app_1
```

This will rebuild the docker container with your new plugin.

## Locally
For local plugins that you only intend to keep for your own bPanel install, or for testing, just add the folder to the `webapp/plugins/local` directory and add the name of the plugin as a string (matching the name of the directory exactly) to the `localPlugins` array in pluginsConfig.js. (You can use [`bpanel-cli`](/docs/plugin-started.html#bpanel-cli) to create a plugin and point it to your local plugin to install it there).

So if your plugin is in the directory `webapp/plugins/local/my-local/plugin` you would add the following to your config:

```javascript
// webapp/config/pluginsConfig.js
export const localPlugins = ['my-local-plugin'];

export const plugins = ['my-plugin'];

export default { localPlugins, plugins };
```

Once you've finished updating pluginsConfig.js, all you need to do is save the file. Your server will see the change and re-run webpack to add your plugin to the build!