---
id: api-decorate-plugins
title: Decorate Plugins
sidebar_label: Decorate Plugins
---
## Overview
Decorating plugins, and creating plugins that can be decorated, is a more advanced use case of the plugin system. The best way to think of this is as plugins or views that accept "widgets".

There are two parts to decorating plugins:
- Have a plugin that exposes itself to decoration
- Export a [`decoratePlugin`](#decorateplugin) method from your widget that targets the plugin you want to decorate

This enables for far more customizability within views. For example, you can have advanced Dashboard views where you compose a wide array of visualizations that can be used to get information about your node at a glance. Some users might want to focus on node/network performance while others might information on transaction volume. By customizing the view with different widgets, you can have one dashboard that addresses both.

### `decorator`
This needs to be exposed by the target plugin. The function signature is similar to the component decorator, except the first argument is a function called `pluginDecorator` that applies the widget decoration for each plugin that targets it. The second argument is an object with a `React` and `PropTypes` property, both of which should be passed to the `pluginDecorator` when it is called in `decorator` so that the widgets have access to them.

Let's create a quick example of a sample plugin called `sample`, that will create a new view from a component `MyView` and allow itself to be decorated by widgets.

```
// Import your component here. Can be any valid React component
import MyView from './MyView';

// we are going to cache a version of our view that can be updated by our decorator further down
let _MyView = MyView;

export const decorator = (pluginDecorator, { React, PropTypes }) => {
  _MyView = pluginDecorator(_DecoratedDashboard, {
    React,
    PropTypes
  });
};

export const decoratePanel = (Panel, { React, PropTypes }) => {
  return class extends React.Component {
    static displayName() {
      return 'my view'
    }

    static get propTypes() {
      return {
        customChildren: PropTypes.array
      };
    }

    render() {
     const { customChildren = [] } = this.props;
     const routeData = {
       metadata,
       Component: _MyView // passing decorated component
     };
     return (
       <Panel
         {...this.props}
         customChildren={customChildren.concat(routeData)}
       />
     );
   }
  }
}
```

Note that `decoratePanel` is exactly the same as normal except that we are passing the decorated version of the component to the route view (`_MyView`). Read more about `decoratePanel` [here](/docs/api-decorate.html#decoratepanel).

The last thing you need do is add the "hooks" in your component for widgets to be able to decorate the component. This works the same as normal decoration. All that you need is some kind of `customChildren` prop that is displayed in your component.

```
import React from 'react';
import PropTypes from 'prop-types';

export default class MyView extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    customChildrenBefore: PropTypes.node,
    customChildren: PropTypes.node
  }

  render() {
    { customChildrenBefore, customChildren } = this.props;

    return (
      <div>
        {customChildrenBefore}
        Hello World!
        {customChildren}
      </div>
    )
  }
}
```

### `decoratePlugin`
`decoratePlugin` is what you export from a plugin when you want to decorate another plugin. All it is is an object with a key-value pair where the key should map exactly to the name of the plugin you are targeting. The value is a Higher Order Component that looks just like the other [`decorate`](/docs/api-decorate.html) component exports.

```javascript
const myWidget = (MyView, { React, PropTypes }) =>
  class extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    static displayName() {
      return 'my widget';
    }

    static getPropTypes() {
      return {
        customChildrenBefore: PropTypes.node,
        customChildren: PropTypes.node
      }
    }

    // just for fun, let's do React without JSX
    render() {
      const customChildrenBefore = React.createElement(
        'div', // element type
        { className: 'before-text' }, // props
        'My custom before text', // remaining arguments are children of new component
        this.props.customChildrenBefore // make sure to pass existing children otherwise you're plugin will overwrite other widgets.
      );
      const customChildren = React.createElement(
        'div',
        {},
        'My custom widget text',
        this.props.customChildren
      );
      return React.createElement(
        MyView,
        { customChildrenBefore, customChildren }
      );
    }
  }

// now let's expose the extension
export const decoratePlugin = { sample: myWidget };
```

### Access to the Store
The good news is that since you are strictly just decorating an existing component, all other extensions in the API work like normal. You can use [`mapComponentState`](/docs/api-map-state-dispatch.html#mapcomponentstate) to pass properties from the state to `Panel`, and [`getRouteProps`](http://localhost:3000/docs/api-getprops.html#getrouteprops) to pass those props from `Panel` to the plugin you are decorating!

```javascript
export const mapComponentState = {
  Panel: (state, map) =>
    Object.assign(map, {
      network: state.node.node.network
    })
};


export const getRouteProps = {
  sample: (parentProps, props) =>
    Object.assign(props, {
      network: parentProps.network
    })
};

// now `this.props.network` will be avaialable
// in your custom widget component
```