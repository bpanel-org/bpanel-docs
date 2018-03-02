---
id: install-plugins
title: Install Plugins
sidebar_label: Install Plugins
---

## With npm (recommended)
The best way to install plugins is with npm. You can search for any plugins on npm tagged with the `bpanel` keyword by running

```bash
npm search bpanel
```

Then when you see you a plugin you want to install, run (from your project directory):

```bash
npm install --save [PLUGIN_NAME]
```

And then import and add the plugin to your appConfig.js file

```javascript
// webapp/config/appConfig.js
import * as myPlugin from '[PLUGIN_NAME]';
// any other imports you have

export default {
  plugins: [myPlugin]
  ...
}
```

## Locally
For local plugins that you only intend to keep for your own bPanel install, just add the folder to the `webapp/plugins` directory and add the name of the plugin as a string (matching the name of the directory exactly) to the `localPlugins` array in the export from appConfig.js.

So if your plugin is in the directory `webapp/plugins/my-plugin` you would add the following to your config.

```javascript
// webapp/config/appConfig.js
export default {
  plugins: [],
  localPlugins: 'my-plugin'
}
```

