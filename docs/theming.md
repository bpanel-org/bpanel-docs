---
id: theming
title: Theming
sidebar_label: Theming
---
# Theming :art:

Welcome :tada: This README will guide you through the steps to create your own bPanel theme.

<!--ts-->
- [Theming :art:](#theming-art)
  - [Set up your theme :hatching_chick:](#set-up-your-theme-hatching_chick)
    - [:one: bpanel/webapp/plugins/myTheme/index.js](#one-bpanelwebapppluginsmythemeindexjs)
    - [:two: bpanel/webapp/plugins/myTheme/themeVariables.js](#two-bpanelwebapppluginsmythemethemevariablesjs)
    - [:three: bpanel/webapp/config/appConfig.js](#three-bpanelwebappconfigappconfigjs)
  - [Theme Variables :memo:](#theme-variables-memo)
    - [Basic themeVariables](#basic-themevariables)
    - [Themed themeVariables](#themed-themevariables)
    - [Theme Variable Layout](#theme-variable-layout)
    - [Fonts :black_nib:](#fonts-black_nib)
      - [fontFamily](#fontfamily-black_nib)
      - [fontSizeBase](#fontsizebase-black_nib)
      - [fontSizeSmall](#fontsizesmall-black_nib)
      - [fontSizeNormal](#fontsizenormal-black_nib)
      - [fontSizeLarge](#fontsizelarge-black_nib)
      - [fontSizeH1](#fontsizeh1-black_nib)
      - [fontSizeH2](#fontsizeh2-black_nib)
      - [fontSizeH3](#fontsizeh3-black_nib)
      - [fontSizeH4](#fontsizeh4-black_nib)
      - [fontSizeH5](#fontsizeh5-black_nib)
      - [fontSizeH6](#fontsizeh6-black_nib)
      - [fontOpacity](#fontopacity-black_nib)
      - [fontWeights](#fontweights-black_nib)
    - [Backgrounds :mount_fuji:](#backgrounds-mount_fuji)
      - [appBg](#appbg-mount_fuji)
      - [appBgSize](#appbgsize-mount_fuji)
    - [Colors :lollipop:](#colors-lollipop)
      - [themeColors](#themecolors-lollipop)
    - [Borders :black_square_button:](#borders-black_square_button)
      - [borderWidth](#borderwidth-black_square_button)
      - [borderStyle](#borderstyle-black_square_button)
      - [borderTransparent](#bordertransparent-black_square_button)
      - [border1](#border1-black_square_button)
      - [border2](#border2-black_square_button)
      - [borderRadius](#borderradius-black_square_button)
    - [Container :gift:](#container-gift)
      - [rowContainer](#rowcontainer)
    - [Transitions :new_moon_with_face::first_quarter_moon::full_moon_with_face:](#transitions-new_moon_with_facefirst_quarter_moonfull_moon_with_face)
      - [smoothTransition](#smoothtransition-first_quarter_moon)
    - [Component: App :house_with_garden:](#component-app-house_with_garden)
      - [appBodyHeight](#appbodyheight-house_with_garden)
      - [appBodyMinHeight](#appbodyminheight-house_with_garden)
      - [appContentHeight](#appcontentheight-house_with_garden)
      - [appContentPadding](#appcontentpadding-house_with_garden)
      - [appHeight](#appheight-house_with_garden)
      - [appSidebarContainer](#appsidebarcontainer-house_with_garden)
    - [Component: Header :tophat:](#component-header-tophat)
      - [headerHeight](#headerheight-tophat)
    - [Component: Footer :shoe:](#component-footer-shoe)
      - [footerHeight](#footerheight-shoe)
    - [Component: Sidebar :arrow_left:](#component-sidebar-arrow_left)
      - [sidebarContainerHeight](#sidebarcontainerheight-arrow_left)
      - [sidebarContainerPadding](#sidebarcontainerpadding-arrow_left)
      - [sidebarFooterPadding](#sidebarfooterpadding-arrow_left)
      - [sidebarFooterTextMargin](#sidebarfootertextmargin-arrow_left)
      - [sidebarItemIconPadding](#sidebaritemiconpadding-arrow_left)
      - [sidebarItemPadding](#sidebaritempadding-arrow_left)
      - [sidebarLinkMinWidth](#sidebarlinkminwidth-arrow_left)
    - [Component: Logo :heart:](#component-logo-heart)
      - [logoContainerPadding](#logocontainerpadding-heart)
      - [logoSize](#logosize-heart)
      - [logoUrl](#logourl-heart)
    - [Component: Button :point_down:](#component-button-point_down)
      - [buttonActionPadding](#buttonactionpadding-point_down)
    - [Component: Input :mailbox:](#component-input-mailbox)
      - [inputTextPadding](#inputtextpadding-mailbox)
    - [Component: Table :office:](#component-table-office)
      - [rowRenderer](#rowrenderer-office)
    - [Component: TabMenu :musical_score:](#component-tabmenu-musical_score)
      - [tabMenuHeaderTextMarginBottom](#tabmenuheadertextmarginbottom-musical_score)
      - [tabMenuHeaderTextPadding](#tabmenuheadertextpadding-musical_score)
      - [tabMenuHeaderTextActiveZindex](#tabmenuheadertextactivezindex-musical_score)
      - [tabMenuHeaderTextInactiveZindex](#tabmenuheadertextinactivezindex-musical_score)
      - [tabMenuBodyPadding](#tabmenubodypadding-musical_score)
  - [Utils :wrench:](#utils-wrench)
    - [makeRem](#makerem-wrench)
    - [makeGutter](#makegutter-wrench)
  - [License](#license)
<!--te-->

## Set up your theme :hatching_chick:
To start, create a new folder in your `plugins` directory, and name it with the name of your theme. Inside, you'll create the files `index.js` and `themeVariables.js`. There is also an optional file you can create called `themeConfig.js` which allows you to extend the key/value pairs of the existing default theme. For initializing our theme, we'll start out with just the `index.js` and `themeVariables.js` files.

Every theme will have a few lines of code to initialize it. Assuming we create a theme folder named `myTheme`, that code will look like this:

### :one: bpanel/webapp/plugins/myTheme/index.js
```javascript
import themeVariables from './themeVariables';

export const metadata = {
  name: 'myTheme', // Input the name of your theme here
  author: 'bcoin-org', // Input your name, alias, or org name here
  theme: true
};

export const decorateTheme = themeCreator => () =>
  themeCreator(themeVariables);
```

### :two: bpanel/webapp/plugins/myTheme/themeVariables.js
```javascript
const themeVariables = {};

export default themeVariables;
```

### :three: bpanel/webapp/config/appConfig.js
Add your theme to the `localPlugins` array in `appConfig.js`
```javascript
import theme from './themeConfig/index.js';

const { themeVariables, themeCreator } = theme;

export default {
  // localPlugins are for either development of a plugin or
  // for default/built-in plugins
  localPlugins: [
    'myTheme'
  ],
  // This will be the list of plugins to install from npm
  // This system still needs to be built
  plugins: [],
  theme: {
    themeVariables,
    themeCreator
  }
};
```

By this point, we will have the scaffolding ready to start theming, and our bPanel should not look any different. After creating these files you can begin to add your custom variables to the `themeVariables.js` file to create your own theme.

## Theme Variables :memo:
**How it works**
Exporting a `themeVariables` object containing the properties you want to change will modify the default theme. For example, exporting an object from your `themeVariables.js` file that looks like this `{ appBg: 'white' }` will make your bPanel have a white background.

**Getting started**
The easiest way to get started is to modify your theme colors and background first. These variables give the best overall change to your theme to create the initial look and feel you're going for.

The base structure of the `themeVariables` can be found here: https://github.com/bcoin-org/bpanel/blob/doc/webapp/config/themeConfig/themeVariables.js. Any of these exported values can also be exported out of your custom `themeVariables.js` file to modify their original values. To get started, let's start with this in the `themeVariables.js` file:

### Basic themeVariables
```javascript
// Background
const appBg = '#292C44';

const themeVariables = {
  appBg
};

export default themeVariables;
```
If you refresh you bPanel app, you'll notice the background has changed.

Here is a more robust example. This is a light theme which uses the `appBg` and `themeColors`:
### Themed themeVariables
```javascript
// Background
const appBg = 'white';

// Colors
const black = 'black';
const blue = '#4F80E1';
const teal = '#18CDCA';
const darkBlue = '#292C44';
const darkerBlue = '#122438';
const lightGray = '#F1F1F2';
const mediumGray = '#BEBEBF';
const darkGray = '#383838';

const themeColors = {
  primary: black,
  highlight1: blue,
  highlight2: teal,
  lowlight1: darkBlue,
  lowlight2: darkerBlue,
  lightBg: lightGray,
  mediumBg: mediumGray,
  darkBg: darkGray,
  footerBg: lightGray,
  highlightGradient: blue,
  lowlightGradient: teal
};

const themeVariables = {
  appBg,
  themeColors,
};

export default themeVariables;
```

### Theme Variable Layout
`appBg` and `themeColors` are only two `themeVariables` out of many that we can modify. The complete list of `themeVariables` we can edit can be found here:

```javascript
const themeVariables = {
  /// *****
  /// FONTS
  /// *****
  // Font Family
  fontFamily,
  // Font Size
  fontSizeBase,
  fontSizeSmall,
  fontSizeNormal,
  fontSizeLarge,
  fontSizeH1,
  fontSizeH2,
  fontSizeH3,
  fontSizeH4,
  fontSizeH5,
  fontSizeH6,
  fontOpacity,
  // Font Weights
  fontWeights,
  /// ***********
  /// BACKGROUNDS
  /// ***********
  appBg,
  appBgSize,
  /// ******
  /// COLORS
  /// ******
  themeColors,
  /// *******
  /// BORDERS
  /// *******
  borderWidth,
  borderStyle,
  borderTransparent,
  border1,
  border2,
  borderRadius,
  /// *********
  /// CONTAINER
  /// *********
  rowContainer,
  /// ***********
  /// TRANSITIONS
  /// ***********
  smoothTransition,
  /// *******************
  /// COMPONENT VARIABLES
  /// *******************
  // App
  appBodyHeight,
  appBodyMinHeight,
  appContentHeight,
  appContentPadding,
  appHeight,
  appSidebarContainer,
  // Header
  headerHeight,
  // Footer
  footerHeight,
  // Sidebar
  sidebarContainerHeight,
  sidebarContainerPadding,
  sidebarFooterPadding,
  sidebarFooterTextMargin,
  sidebarItemIconPadding,
  sidebarItemPadding,
  sidebarLinkMinWidth,
  // Logo
  logoContainerPadding,
  logoSize,
  logoUrl,
  // Button
  buttonActionPadding,
  // Input
  inputTextPadding,
  // Table
  rowRenderer,
  // TabMenu
  tabMenuHeaderTextMarginBottom,
  tabMenuHeaderTextPadding,
  tabMenuHeaderTextActiveZindex,
  tabMenuHeaderTextInactiveZindex,
  tabMenuBodyPadding
};
```

### Fonts :black_nib:

#### fontFamily :black_nib:
The fontFamily property describes the font used across bPanel.

Examples:
```javascript
// type: string
const fontFamily = 'Open Sans, sans-serif'; // default

// other examples
const fontFamily = 'Georgia, serif';
const fontFamily = 'serif';
const fontFamily = 'Open Sans';
```

#### fontSizeBase :black_nib:
The fontSizeBase property describes the base font size that all other font sizes are based off of. Increasing or decreasing this value will increase or decrease the font size of all fonts.

Examples:
```javascript
// type: number
const fontSizeBase = 1; // default

// other examples
const fontSizeBase = 2; // 2x the original font size
const fontSizeBase = 0.5; // half the original font size
```

#### fontSizeSmall :black_nib:
The small font size.

Examples:
```javascript
// type: string
const fontSizeSmall = makeRem(0.8, fontSizeBase); // default

// other examples
const fontSizeSmall = makeRem(0.2, fontSizeBase); // very small font size using makeRem
const fontSizeSmall = '0.5rem' // half the original font size
//
```

#### fontSizeNormal :black_nib:
The normal font size.

Examples:
```javascript
// type: string
const fontSizeNormal = makeRem(1, fontSizeBase); // default

// other examples
const fontSizeNormal = makeRem(1.2, fontSizeBase); // 1.2x larger than base font size
const fontSizeNormal = '1.5rem' // 1.5x the base font size
```

#### fontSizeLarge :black_nib:
The large font size.

Examples:
```javascript
// type: string
const fontSizeLarge = makeRem(1.2, fontSizeBase); // default

// other examples
const fontSizeNormal = makeRem(1.5, fontSizeBase); // 1.5 the base font size
const fontSizeNormal = '2rem'; // 2x the base font size;
```

#### fontSizeH1 :black_nib:
The font size for h1 tags.

Examples:
```javascript
// type: string
const fontSizeH1 = makeRem(3.2, fontSizeBase); // default
```

#### fontSizeH2 :black_nib:
The font size for h2 tags.

Examples:
```javascript
// type: string
const fontSizeH2 = makeRem(2.6, fontSizeBase); // default
```

#### fontSizeH3 :black_nib:
The font size for h3 tags.

Examples:
```javascript
// type: string
const fontSizeH3 = makeRem(2.1, fontSizeBase); // default
```

#### fontSizeH4 :black_nib:
The font size for h4 tags.

Examples:
```javascript
// type: string
const fontSizeH4 = makeRem(1.7, fontSizeBase); // default
```

#### fontSizeH5 :black_nib:
The font size for h5 tags.

Examples:
```javascript
// type: string
const fontSizeH5 = makeRem(1.3, fontSizeBase); // default
```

#### fontSizeH6 :black_nib:
The font size for h6 tags.

Examples:
```javascript
// type: string
const fontSizeH6 = makeRem(1.1, fontSizeBase); // default
```

#### fontOpacity :black_nib:
Opacity for decorating text. This is applied to fonts that want a lighter opacity.

Examples:
```javascript
// type: number
const fontOpacity = 0.75; // default
```

#### fontWeights :black_nib:
An object holding font weights.

Examples:
```javascript
// type: object {
//   light: number,
//   regular: number,
//   semiBold: number,
//   bold: number
// }
const fontWeights = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700
}; // default
```

### Backgrounds :mount_fuji:

#### appBg :mount_fuji:
Background used across bpanel. This can be a color, gradient, or image. Anything that the background property allows, this property allows:
https://developer.mozilla.org/en-US/docs/Web/CSS/background

Examples:
```javascript
// type: string
const appBgColors = [
  '#835fac', // purple
  '#00558a', // blue
  '#009db6' // teal
];
const appBgGradientAngle = '-35deg';
const appBgGradientType = 'linear';
const appBg = tinygradient(appBgColors).css(
  appBgGradientType,
  appBgGradientAngle
); // default

// other examples
const appBg = 'white'; // color
const appBg =
  'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(htt' +
  'ps://i2.wp.com/trendintech.com/wp-content/uploads/2017/05/477614_1' +
  '280x720.jpg?fit=1280%2C720) no-repeat center center fixed'; // url
```

#### appBgSize :mount_fuji:
Background size property. If using a background image, this property can be modified to fit your needs.
https://developer.mozilla.org/en-US/docs/Web/CSS/background-size

Examples:
```javascript
// type: string
const appBgSize = 'auto'; // default

// other examples
const appBgSize = 'cover'; // for full sized background images
```

### Colors :lollipop:

#### themeColors :lollipop:
Colors used by bpanel.

Examples:
```javascript
// type: object {
  primary: string,
  highlight1: string,
  highlight2: string,
  lowlight1: string,
  lowlight2: string,
  lightBg: string,
  mediumBg: string,
  darkBg: string,
  footerBg: string,
  highlightGradient: string,
  lowlightGradient: string,
  // Constants
  white: string,
  black: string,
  transparent: string
}

const themeColors = {
  // Themeable colors
  primary: '#fff', // white
  highlight1: '#00ffe0', // teal
  highlight2: '#83d9ff', // light blue
  lowlight1: '#1b1464', // dark purple
  lowlight2: '#9e005d', // medium purple
  lightBg: 'rgba(255, 255, 255, 0.1)', // transparent white
  mediumBg: 'rgba(0, 255, 224, .2)', // transparent teal
  darkBg: 'rgba(0, 0, 0, .4)', // transparent black
  footerBg: 'rgba(255, 255, 255, 0.2)',
  get highlightGradient() {
    return tinygradient([this.highlight1, this.highlight2]).css();
  },
  get lowlightGradient() {
    return tinygradient([this.lowlight1, this.lowlight2]).css();
  },
  // Constants
  white: '#fff',
  black: '#000',
  transparent: 'transparent'
}; // default
```

### Borders :black_square_button:

#### borderWidth :black_square_button:
Width of borders used in bPanel
```javascript
// type: number
const borderWidth = { property: 'border-width', value: '1px' }; // default
```

#### borderStyle :black_square_button:
Examples:
```javascript
// type: string
const borderStyle = { property: 'border-style', value: 'solid' }; // default

// other examples
const borderStyle = { property: 'border-style', value: 'dotted' };
```

#### borderTransparent :black_square_button:
Transparent border. Used for state transitions for :before and :after states that show and hide borders.
```javascript
// type: string
import border from 'css-border-property';
const borderWidth = { property: 'border-width', value: '1px' };
const borderStyle = { property: 'border-style', value: 'solid' };
const borderTransparentColor = {
  property: 'border-color',
  value: themeColors.transparent
};

const borderTransparent = border.stringify([
  borderWidth,
  borderStyle,
  borderTransparentColor
]); // default
```

#### border1 :black_square_button:
```javascript
// type: string
import border from 'css-border-property';
const borderWidth = { property: 'border-width', value: '1px' };
const borderStyle = { property: 'border-style', value: 'solid' };
const border1Color = { property: 'border-color', value: 'white' };

const border1 = border.stringify([borderWidth, borderStyle, border1Color]); // default
```

#### border2 :black_square_button:
```javascript
// type: string
import border from 'css-border-property';
const borderWidth = { property: 'border-width', value: '1px' };
const borderStyle = { property: 'border-style', value: 'solid' };
const border2Color = {
  property: 'border-color',
  value: 'rgba(255, 255, 255, 0.2)'
};

const border2 = border.stringify([borderWidth, borderStyle, border2Color]); // default
```

#### borderRadius :black_square_button:
Border radius mainly used for buttons. Can be applied to other styles in the `themeConfig.js`.
```javascript
// type: string
const borderRadius = '5px'; // default
```

### Container :gift:

#### rowContainer :gift:
```javascript
// type: object {
//   display: string,
//   flexDirection: string,
//   justifyContent: string,
//   alignItems: string
// }
const rowContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center'
}; // default
```

### Transitions :new_moon_with_face::first_quarter_moon::full_moon_with_face:

#### smoothTransition :first_quarter_moon:
```javascript
// type: string
const smoothTransition = '0.3s ease'; // default
```

### Component: App :house_with_garden:

#### appBodyHeight :house_with_garden:
```javascript
// type: string
const appBodyHeight = '100%'; // default
```

#### appBodyMinHeight :house_with_garden:
```javascript
// type: string
const appBodyMinHeight = makeRem(18.75, fontSizeBase); // default
```

#### appContentHeight :house_with_garden:
```javascript
// type: string
const appContentHeight = `calc(100vh - ${footerHeight} - ${headerHeight})`; // default
```

#### appContentPadding :house_with_garden:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const appContentPadding = makeGutter('padding', { left: 1.25, right: 2.5 }); // default
```

#### appHeight :house_with_garden:
```javascript
// type: string
const appHeight = `calc(100vh - ${footerHeight})`; // default
```

#### appSidebarContainer :house_with_garden:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const appSidebarContainer = makeGutter('padding', { left: 0 }); // default
```

### Component: Header :tophat:

#### headerHeight :tophat:
```javascript
// type: string
const headerHeight = makeRem(7, fontSizeBase); // default
```

### Component: Footer :shoe:

#### footerHeight :shoe:
```javascript
// type: string
const footerHeight = makeRem(2, fontSizeBase); // default
```

### Component: Sidebar :arrow_left:

#### sidebarContainerHeight :arrow_left:
```javascript
// type: string
const sidebarContainerHeight = appHeight; // default
```

#### sidebarContainerPadding :arrow_left:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const sidebarContainerPadding = makeGutter('padding', { left: 0 }); // default
```

#### sidebarFooterPadding :arrow_left:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const sidebarFooterPadding = makeGutter('padding', { bottom: 3.125 }); // default
```

#### sidebarFooterTextMargin :arrow_left:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const sidebarFooterTextMargin = makeGutter('margin', { bottom: 0 }); // default
```

#### sidebarItemIconPadding :arrow_left:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const sidebarItemIconPadding = makeGutter('padding', { right: 0.75 }); // default
```

#### sidebarItemPadding :arrow_left:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const sidebarItemPadding = makeGutter('padding', {
  horizontal: 2.1875,
  vertical: 0.625
}); // default
```

#### sidebarLinkMinWidth :arrow_left:
```javascript
// type: string
const sidebarLinkMinWidth = makeRem(9.375, fontSizeBase); // default
```

### Component: Logo :heart:

#### logoContainerPadding :heart:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const logoContainerPadding = makeGutter('padding', {
  horizontal: 0,
  vertical: 1.875
}); // default
```

#### logoSize :heart:
```javascript
// type: string
const logoSize = makeRem(3.75, fontSizeBase); // default
```

#### logoUrl :heart:
```javascript
// type: string
import logo from '../../assets/logo.png';
const logoUrl = logo; // default
```

### Component: Button :point_down:

#### buttonActionPadding :point_down:
```javascript
// type: string
const buttonActionPadding = makeRem(0.3125, fontSizeBase); // default
```

### Component: Input :mailbox:

#### inputTextPadding :mailbox:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const inputTextPadding = makeGutter('padding', {
  horizontal: 0.75,
  vertical: 0.5
}); // default
```

### Component: Table :office:

#### rowRenderer :office:
`rowRenderer` returns the styles for each row. Can having alternating styles per row, which is what the default `rowRenderer` does.
```javascript
// type: function
// params: object: {
//   index: number
// }
const rowRenderer = ({ index }) => {
  const style = {
    fontWeight: fontWeights.light
  };
  if (index === -1) {
    style.backgroundColor = themeColors.mediumBg;
  } else if (index % 2 === 0 || index === 0) {
    style.backgroundColor = themeColors.transparent;
  } else {
    style.backgroundColor = themeColors.lightBg;
  }
  return style;
}; // default
```

### Component: TabMenu :musical_score:

#### tabMenuHeaderTextMarginBottom :musical_score:
```javascript
// type: string
const tabMenuHeaderTextMarginBottom = '-1px'; // default
```

#### tabMenuHeaderTextPadding :musical_score:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const tabMenuHeaderTextPadding = makeGutter('padding', {
  horizontal: 0.625,
  vertical: 0.3125
}); // default
```

#### tabMenuHeaderTextActiveZindex :musical_score:
```javascript
// type: string
const tabMenuHeaderTextActiveZindex = '1'; // default
```

#### tabMenuHeaderTextInactiveZindex :musical_score:
```javascript
// type: string
const tabMenuHeaderTextInactiveZindex = '0'; // default
```

#### tabMenuBodyPadding :musical_score:
```javascript
// type: object {
//   paddingTop: string,
//   paddingRight: string,
//   paddingBottom: string,
//   paddingLeft: string
// }
const tabMenuBodyPadding = makeGutter('padding', { all: 1.25 }); // default
```

## Utils :wrench:

### makeRem :wrench:
`makeRem` takes a `size`, multiplies it by the `fontSizeBase`, then returns a size string with `'rem'` added to the end.
```javascript
// type: function
// params: {
//   size: number,
//   fontSizeBase: number
// }
// return: string
export default (size, fontSizeBase = 1) =>
  (size * fontSizeBase).toString().concat('rem');
```

**Example**
```javascript
makeRem(5); // '5rem';
makeRem(10); // '10rem';
makeRem(0.5, 10); // '5rem';
```

### makeGutter :wrench:
```javascript
// type: function
// params: {
//   type: string,
//   options: object: {
//     top: number,
//     bottom: number,
//     left: number,
//     right: number,
//     horizontal: number,
//     vertical: number,
//     all: number
//   }
// }
// return: object
import makeRem from './makeRem';

export default (
  type = 'padding',
  { top, bottom, left, right, horizontal, vertical, all }
) => {
  let gutterTop, gutterRight, gutterBottom, gutterLeft;

  // All gutter calculations
  if (all) gutterRight = gutterLeft = gutterTop = gutterBottom = makeRem(all);

  // Horizontal gutter calculation
  if (horizontal || horizontal === 0) {
    gutterRight = gutterLeft = makeRem(horizontal);
  } else {
    gutterRight = gutterRight || ((right || right === 0) && makeRem(right));
    gutterLeft = gutterLeft || ((left || left === 0) && makeRem(left));
  }

  // Vertical gutter calculation
  if (vertical || vertical === 0) {
    gutterTop = gutterBottom = makeRem(vertical);
  } else {
    gutterTop = gutterTop || ((top || top === 0) && makeRem(top));
    gutterBottom =
      gutterBottom || ((bottom || bottom === 0) && makeRem(bottom));
  }

  return {
    [`${type}Top`]: gutterTop,
    [`${type}Right`]: gutterRight,
    [`${type}Bottom`]: gutterBottom,
    [`${type}Left`]: gutterLeft
  };
};
```

**Example**
```javascript
// Example
makeGutter('padding', { left: 5, right: 5 }); // { paddingLeft: '5rem', paddingRight: '5rem' };
makeGutter('padding', { horizontal: 15, vertical: 10 }); // { paddingLeft: '15rem', paddingRight: '15rem', paddingTop: '10rem', paddingBottom: '10rem' };
makeGutter('margin', { all: 8 }); // { marginLeft: '8rem', marginRight: '8rem', marginTop: '8rem', marginBottom: '8rem' };
```
## License

- Copyright (c) 2017, The Bcoin Devs (MIT License).