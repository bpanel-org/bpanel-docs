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
  <a class="button" href="https://github.com/bcoin-org/bpanel/archive/master.zip">Download bPanel</a>
</p>

Luckily almost all configuration can be done through a single docker-compose.yml. If you don't have docker installed locally, download and install here:

<p style="text-align:center;">
  <a class="button" href="https://www.docker.com/get-docker">Get Docker</a>
</p>

To spin up your app server, a bcoin node on regtest, and mine 101 blocks (and generate lots of fake Satoshis for you to play with), navigate to your repo and run:

### Start bPanel
1. Run `npm run postinstall` to create a secrets.env file.
2. `docker-compose up -d` (add --build if you install more dependencies)
3. Navigate to `http://localhost:5000` in a browser to see your webapp.

Note: HTTP requests to the `\node` endpoint will get forwarded to your bcoin node through the `bclient` module interface.

## Customizing Your Setup
Configurations are shared between the two docker containers. These files are created when you first setup docker.

Your bcoin node will expect an API key given to it. You can set an API key by creating a `secrets.env` file and set `BCOIN_API_KEY=[YOUR-AWESOME-KEY]`. This key can be any value you want (but if you are running a node with real Bitcoins, make sure it's secure!). If you don't do this on your own, one will be created automatically via the `npm postinstall` script. __NOTE: DO NOT CHECK THIS FILE IN TO VERSION CONTROL.__

There are two docker services in the compose file: `app` and `bcoin`. The app service runs the web server which serves the static files
for the front-end and relays messages to a bcoin node.
You can use custom configs to connect to an existing node,
or use the bcoin docker service to spin up a bcoin node that the webapp will connect to.

### Configuration

The configs are managed through environment variables.
A config file is created and placed in the`./configs` directory mounted as a shared volume

Make sure to comment out the environment variables according to the network
you want your webapp to connect to and/or what kind of node you want to run if you're running the bcoin service.

If you want to connect to an existing node on a remote server, update the environment configs for the `app` service in docker-compose.yml that are prefixed with `BCOIN_` to point to your remote node and run:

```bash
docker-compose up app
```

### Setup Scripts
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

## License

- Copyright (c) 2018, The Bcoin Devs (MIT License).
