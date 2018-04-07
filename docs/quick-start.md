---
id: quick-start
title: Welcome to bPanel!
sidebar_label: Quick Start
---

This is the official documentation for the bPanel project, a full featured, fully extensible enterprise level GUI for your bcoin Bitcoin node.

- [Quick Start](#quick-start)
- [Customizing your Setup](#customizing-your-setup)
- [Setup without docker](#setup-without-docker)

## "Quick" Start
bPanel is still in alpha, so while we wish there was a one click install (and it is on the road map), there is a small amount of setup required to get things running first.

First, download the project files with the link below:

<p style="text-align:center;">
  <a class="button" href="https://github.com/bpanel-org/bpanel/archive/master.zip">Download bPanel</a>
</p>

Luckily almost all configuration can be done through a single docker-compose.yml. If you don't have docker installed locally, download and install here:

<p style="text-align:center;">
  <a class="button" href="https://www.docker.com/get-docker">Get Docker</a>
</p>

To spin up your app server, a bcoin node on regtest, and mine 101 blocks (and generate lots of fake Satoshis for you to play with), navigate to your repo and run:

### Start bPanel
This is primarily a setup for development purposes
(though it could be used in production with some modification).

To spin up your webapp, server, a bcoin node on regtest, and generate
50 regtest BTC for your primary wallet, clone & navigate to this repo then:
1. Run `npm install` to create a secrets.env file.
2. Run `docker-compose up -d bcoin` (add `--build` if you install more dependencies)
3. Run `npm run start:poll`
4. Navigate to http://localhost:5000 to see your webapp.
Requests to `\node` will get get forwarded to your bcoin node.

There is a docker container to run your app in parallel (`docker-compose up app`) however
due to some bugs with npm uninstalling git dependencies when running an install, the docker
environment doesn't work as expected and so it is recommended to run the app locally.

For local development, you run just the bcoin docker container (`docker-compose up -d bcoin`)
and then `npm run start:dev` (or `npm run start:poll` for Mac since webpack's watch behaves strangely
on mac sometimes) to run the app and app server from your local box.

## Customizing Your Docker Environment
There are two docker services in the compose file: `app` and `bcoin`.
The app service runs the web server which serves the static files
for the front end and relays messages to a bcoin node.
You can use custom configs to connect to an existing node,
or use the bcoin docker service to spin up a bcoin node that the webapp will connect to.

## Configuration
Configurations are shared between the two docker containers.

Your bcoin node will expect an API key given to it.
If you are connecting to an existing node, you can set an API key
by adding it to the `secrets.env` file and set `BCOIN_API_KEY=[YOUR-AWESOME-KEY]`.
This key can be any value you want (but if you are running a node with real Bitcoins, make sure it's secure!).
__NOTE: DO NOT CHECK THIS FILE IN TO VERSION CONTROL.__

If you run `npm install` and there is no `secrets.env` present,
one will automatically be generated for you with a cryptographically secure api key.

The configs are managed through environment variables set in a `bcoin.env` file
(this is not ignored by git, so make sure to only put sensitive information in the `secrets.env` file).
These get used by both the app and bcoin containers.
NOTE: runtime environment vars will override the values set in the env files.

If you want to connect to an existing node on a remote server,
update the environment configs to point to your remote node.
To deploy in a docker container run:

```bash
docker-compose up app
```

Otherwise, for local development, run
```bash
npm run start:poll
```
(For Linux you can run `npm run start:dev` instead)

### Bcoin Setup Scripts
Setup scripts are also supported. This will allow you to run scripts on your
node for a repeatable and predictable environment for testing or development.

Three circumstances need to be met to run a script:
1. There needs to be a js file to run in the `scripts` directory that exports a function to run
2. You need to pass the name of this file (including the extension)
as an environment variable named `BCOIN_INIT_SCRIPT` in the docker-compose
3. There should be no walletdb in the container.
This makes sure that a setup script doesn't overwrite your data
if you're mapping volumes or if you restart a container.

These checks are done in the `docker-bcoin-init.js` which sets up a node
based on the configs described above.
Setup scripts will also be passed the bcoin node object that has been created.

### Persistent DBs
To persist your bcoin node information (and skip the setup if the walletdb is persisted),
uncomment and edit the volumes in the bcoin service (this should be uncommented by default).
This is useful if you're working on testnet or mainnet and don't want to wait for a full sync
to happen every time you create a new container.

## Setup Without Docker
If you'd rather not use docker to run your environment,
you need to add a `./configs/bcoin.config.json` file with the
configuration setup for the bcoin node you'd like to connect to
(you can use the docker-compose.yml environment variables
that are prefaced with `BCOIN_` for a template.

Then, run `npm run start` to start the server.


You can read more about bcoin configuration [here](https://github.com/bcoin-org/bcoin/blob/master/docs/Configuration.md).

## Extending bPanel
The bPanel UI is built entirely around plugins.
All visual elements can be extended or overridden via the plugin system
including the header, footer, sidebar, and main panel/view element.
To get started making your own plugin, use the
[bPanel-cli](http://bcoin.io/bpanel-docs/docs/plugin-started.html)

### Server extensions
The simplest thing to do, is to create your own server file that includes `server/index.js`.
```
const bpanel = require('./index.js')({
  network: 'main', // Put bPanel configs here (optional)
});
const app = require('express')();
app.use( /* Put your own middleware here */ );
app.use( bpanel );
app.listen();
```
