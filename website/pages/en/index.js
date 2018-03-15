/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class ButtonCTA extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="buttonCTA" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

ButtonCTA.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small className="pm-bot-0">{siteConfig.tagline}</small>
    <smaller>{siteConfig.subtext}</smaller>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('bcoin-logo-gradient.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            {/* <ButtonCTA href="#try">Call to Action</ButtonCTA> Use #[name] and setup anchor for scroll */}
            <ButtonCTA href={docUrl('quick-start.html', language)}>Quick Start</ButtonCTA>
            <Button href={docUrl('bpanel-overview.html', language)}>Overview</Button>
            <Button href={docUrl('quick-start.html', language)}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const LeftBlock = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);

/*
- Theming frame
   - Since we basically already have the theming highlight above, maybe this could be more of a focus on the easy 
   installation of themes and plugins. I think what’s compelling about this system is not just that someone can 
   easily create their own theme (or plugin) but that they can even more easily install someone else’s. This 
   could then have a link to the showcase.

   - If we move this to a focus of “there are a pile of plugins available” type of message then I think the 
   image of the themes stacked should work nicely and buy us some more room.

   - I feel like “Completely customizable” needs to be on this page somewhere and this might be the place to do it.
*/

const Description = props => (
  <LeftBlock background="">
    {[
      {
        content: 'In the world of CMS\'s, projects like WordPress and Drupal started as ways to let people '+
        'without platform expertise to easily organize content, primarily blog posts.\n'+
        '\n'+
        'A Blockchain Management System, or BMS, like bPanel aims to achieve in the world of '+
        'blockchain interfaces, while backed by the enterprise-level security and robustness of bcoin.',
        image: imgUrl('theme-bDark-dark.png'),
        imageAlign: 'right',
        title: 'What is a BMS (Blockchain Management System)?',
      },
    ]}
  </LeftBlock>
);


const Features = props => (
  <Container background="light">
    <Block layout="threeColumn">
      {[
        {
          content: 'Changing a few theme variables can have a big overall visual change to your bPanel. Compelling themes can come from just a few lines of code.',
          image: imgUrl('/icons/paint-brush.png'),
          imageAlign: 'top',
          title: 'Powerful Theming',
        },
        {
          content: 'Painlessly to create interactive UIs and manage state. Design simple views for each state and React will efficiently update and render just the right components.',
          image: imgUrl('/icons/react.png'),
          imageAlign: 'top',
          title: 'Built on React/Redux',
        },
        {
          content: 'Built entirely around plugins. All visual elements can be extended via the plugin system by leveraging the composable nature of React and Redux.',
          image: imgUrl('/icons/socket.png'),
          imageAlign: 'top',
          title: 'Plugin Based',
        },
      ]}
    </Block>
    <Block layout="threeColumn">
      {[
        {
          content: 'bPanel uses bcoin\'s native WebSocket implementation, bsock which is compatible with the Socket.io API.',
          image: imgUrl('/icons/cable.png'),
          imageAlign: 'top',
          title: 'Web Socket Management',
        },
        {
          content: 'With bPanel, enjoy full access to everything the bcoin API has to offer. Manage HD wallets, send & receive, query block and tx information, organize UTXOs.',
          image: imgUrl('/icons/bcoin-node.png'),
          imageAlign: 'top',
          title: 'Enterprise Blockchain',
        },
        {
          content: 'Both bcoin and bPanel are Open Source. Fork, clone, copy and rebuild anything you like. Help us build, help yourself build, just build!',
          image: imgUrl('/icons/worldwide.png'),
          imageAlign: 'top',
          title: 'Open Source',
        },
      ]}
    </Block>
  </Container>
);

const Technology = props => (
  <LeftBlock background="">
    {[
      {
        content: 'bPanel is built from the ground up using modern web development technologies NodeJS and ES6 JavaScript. \n'+
        '\n'+
        'With a standalone app server that acts '+
        'as a proxy to your bcoin node using http requests and web sockets, you can configure your '+
        'bpanel to point to anywhere you want. \n' +
        '#### Built with Bcoin \n' +
        'Bcoin is the trusted fullnode implementation built specifically for production systems at scale.\n'+
        '- Segwit, Ledger & Multisig Capable \n' +
        '- HD Wallets \n' +
        // '- Ledger support \n' +
        // '- Multisig capabilities \n' +
        '- Advanced scripting \n' +
        '- BIP 157/158 (Neutrino Light Client) support \n' +
        '- Full Node and SPV Node capable \n' +
        '\n' +
        '#### [For more info visit ' +
        'bcoin.io](http://bcoin.io)',
        image: imgUrl('tech-diagram.png'),
        imageAlign: 'left',
        title: 'Technology / Architecture',
      },
    ]}
  </LeftBlock>
);


const Customizable = props => (
  <div>
  <LeftBlock background="light">
    {[
      {
        content: 'With bPanel, changing a few theme variables can have a big overall visual change to your bPanel, ' +
        'meaning that compelling themes can come from just a few lines of code. \n' +
        '- Build new themes with ease \n' +
        '- Install new themes effortlessly \n' +
        '- Theme-only plugins \n' +
        '- Built with React \n' +
        '\n' +
        '#### [To view additional plugins/themes visit ' +
        'the Plugin Showcase](bpanel-docs/docs/plugin-showcase.html)',

        title: 'Completely Customizable',
      },
      {
        image: imgUrl('theme-customization.png'),
        imageAlign: 'right',
      },
    ]}
  </LeftBlock>
  </div>
);

const Future = props => (
  <Container background="" padding="top">

  
    <MarkdownBlock>## Future Applications</MarkdownBlock>
    <MarkdownBlock>By leveraging the power of [bcoin](http://bcoin.io), anyone with front-end or React experience 
      can dive in and begin building sophisticated applications on top of Bitcoin's blockchain.
      Here are some exciting ideas for things you can build. Look for these coming to a hackathon
      near you!</MarkdownBlock>

    <Block layout="fourColumn">
    {[
          {
            image: imgUrl('/icons/safebox.png'),
            imageAlign: 'top',
            title: 'Wallet Recovery Interface',
          },
          {
            image: imgUrl('/icons/transaction.png'),
            imageAlign: 'top',
            title: 'Merchant Services',
          },
          {
            image: imgUrl('/icons/switch.png'),
            imageAlign: 'top',
            title: 'Dead Man\'s Switch',
          },
          {
            image: imgUrl('/icons/blocks.png'),
            imageAlign: 'top',
            title: 'Block Explorer',
          },
      ]}
    </Block>
  </Container>
);



const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

/* const ThemeShowcase = props => {
  <div>
    <Block background="dark">
      {[
        {
          content: 'This is where we showcase other themes',
          image: imgUrl('themeshowcase-bDefault.png'),
          imageAlign: 'right',
          title: 'Theme Customization',
        },
      ]}
    </Block>
  </div>
}; */








const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Description />
          <Features />
          {/* <FeatureCallout /> */}
          {/* <ThemeShowcase /> */}
          {/* <BuiltWith /> */}
          <Technology />
          <Customizable/>
          <Future />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
