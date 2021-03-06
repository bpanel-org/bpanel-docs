/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('quick-start.html')}>
              Quick Start
            </a>
            <a href={this.docUrl('plugin-intro.html')}>
              Plugin Overview
            </a>
            <a href={this.docUrl('theming-started.html')}>
              Theming Overview
            </a>
          </div>
          <div>
            <h5>Community</h5>
{/*             <a href={this.pageUrl('users.html')}>
              User Showcase
            </a> */}
            <a
              href="https://bitcoin.stackexchange.com/questions/tagged/bcoin"
              target="_blank">
              Stack Overflow
            </a>
            <a href="http://bcoin.io/slack-signup.html" target="_blank">Project Chat</a>
            <a href="https://twitter.com/bcoin" target="_blank">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/bpanel-org" target="_blank">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href=""
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">
          Copyright &copy; {currentYear} bcoin<br/>
          <smallest>Icons made by artists from https://www.flaticon.com/authors and licensed under CC 3.0</smallest>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
