/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  // {
  //   caption: 'User1',
  //   image: '/img/bcoin-logo-white.png',
  //   infoLink: 'https://bcoin.io',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'bPanel' /* title for your website */,
  tagline: 'A Blockchain Management System',
  subtext: 'powered by bcoin',
  url: 'https://bpanel.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'bpanel-docs',
  headerLinks: [
    {doc: 'bpanel-overview', label: 'Overview'},
    {doc: 'plugin-started', label: 'Developers'},
    {doc: 'plugin-showcase', label: 'Showcase'}
    // {search: true}
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/bcoin-logo-white.png',
  footerIcon: 'img/bcoin-logo-white.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#004d97',
    secondaryColor: '#004d97',
  },
  // algolia: {
  //   apiKey: '285a9f7546cd8630a1a84619eaa92bba',
  //   indexName: 'bpanel-docs'
  // },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'Bcoin',
  organizationName: 'bpanel-org', // or set an env variable ORGANIZATION_NAME
  projectName: 'bpanel-docs', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'monokai-sublime',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/bpanel-org/bpanel',
  cname: 'bpanel.org'
};

module.exports = siteConfig;
