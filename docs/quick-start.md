---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---
bPanel is still in alpha, so while we wish there was a one click install (and it is on the road map), there is a small amount of setup required to get things running first.

- [Start bPanel](#quick-start)
- [Customizing your Setup](#customizing-your-setup)
- [Setup without docker](#setup-without-docker)

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

#### Running with docker

To start the application, clone the repository and navigate to the root of the project.
1. Run `npm install` to create a secrets.env file.
1. Run `docker-compose up -d` (add `--build` if you install more dependencies)
1. Navigate to http://localhost:5000 or https://localhost to see your webapp.

This will build the web application, and start the app server, reverse proxy,
bcoin node and wallet server in containers.

#### Running without docker

If you want to run the app server outside of the container for development purposes:
1. Run `npm install` to create a secrets.env file.
1. Run `docker-compose up -d bcoin` (add `--build` if you install more dependencies)
1. For mac users, run `npm run start:poll` otherwise run `npm run start:dev`
1. Navigate to http://localhost:5000 to see your webapp.

Requests to `/bcoin` are routed to the bcoin node.  
Requests to `/bwallet` are routed to the bcoin wallet server.  

## Customizing Your Docker Environment

The `docker-compose.yml` file defines multiple services.

- `app` - static file server and router
- `bcoin` - bcoin full node and wallet server
- `securityc` - reverse proxy and TLS termination

You can also use custom configs to connect to an existing bcoin node

## Configuration

This section covers the shared configuration between the `app`
and `bcoin` containers necessary for their communication.

The configuration is managed via environment variables set in the `bcoin.env` file.
Secrets are managed in a `secrets.env` file which is listed in the `.gitignore`.
__NOTE: The `secrets.env` file has sensitive information and should not be checked into version control.__

If you run `npm install` and there is no `secrets.env` present,
one will automatically be generated for you with a cryptographically secure api key.

By default, the bcoin REST server will be set up with Basic Authentication.
The token can be found in the generated `secrets.env` file or if you
are connecting to an existing node, you need to place your token in the `secrets.env`
file like so: `BCOIN_API_KEY=[YOUR-AWESOME-KEY]`
This key can be any value you want (but if you are running a node
with real Bitcoins, make sure it's secure!).

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
