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
/*gonna try to add a CTA button component
replicating the button above and naming it different
also calling a different button class that has new styles*/
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
/*end of my attempt to add another component*/
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
    <small>{siteConfig.tagline}</small>
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
        <Logo img_src={imgUrl('bcoin-logo-slate-12.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <ButtonCTA href="#try">Call to Action</ButtonCTA>
            <Button href={docUrl('quick-start.html', language)}>Quick Start</Button>
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

const Features = props => (
  <div>
    <Block layout="threeColumn">
      {[
        {
          content: 'This is the content of my feature.',
          image: imgUrl('bcoin-logo-slate-12.png'),
          imageAlign: 'top',
          title: 'Theming',
        },
        {
          content: 'The content of my second feature',
          image: imgUrl('bcoin-logo-slate-12.png'),
          imageAlign: 'top',
          title: 'Built on React/Redux',
        },
        {
          content: 'The content of my second feature',
          image: imgUrl('bcoin-logo-slate-12.png'),
          imageAlign: 'top',
          title: 'Plugin Based',
        },
      ]}
    </Block>
    <Block layout="twoColumn">
      {[
        {
          content: 'This is the content of my feature.',
          image: imgUrl('bcoin-logo-slate-12.png'),
          imageAlign: 'top',
          title: 'Theming',
        },
        {
          content: 'The content of my second feature',
          image: imgUrl('bcoin-logo-slate-12.png'),
          imageAlign: 'top',
          title: 'Built on React/Redux',
        },
      ]}
    </Block>
  </div>
);


const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const ThemeShowcase = props => {
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
};

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('themeshowcase-bDefault.png'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

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
          <Features />
          {/* <FeatureCallout /> */}
          {/* <ThemeShowcase /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
