# react-app-rewire-antd

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)
[![Dependency Status](https://img.shields.io/david/m31271n/react-app-rewire-antd.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/react-app-rewire-antd.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/react-app-rewire-antd.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/react-app-rewire-antd.svg)](#)

> Load antd to your create-react-app app via react-app-rewired.

## Install

```
$ npm install react-app-rewire-antd
```

## Usage

```js
const rewireAntd = require('react-app-rewire-antd')

/* config-overrides.js */
module.exports = function override(config, env) {

  // ...

  config = rewireAntd({
    '@primary-color': 'rgb(97,43,189)'
  })(config, env)

  // ...

  return config
}
```

## API
### rewireAntd(options)
+ `options`
  + type: Object
  + default value: `{}`
  + description: key-value pairs in `options` will be used to replace [antd's default variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).

## How it works
Thanks to the power of following packages:
+ `react-app-rewired`
+ `react-app-rewire-less`
+ `babel-plugin-import`

And following packages:
+ [create-react-app-antd](https://github.com/ant-design/create-react-app-antd)

And official ant-design docs:
+ [Customize Theme](https://ant.design/docs/react/customize-theme)
+ [Use antd with create-react-app - Advanced-Guides](https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides)

* * *

<p align="center">Made with ❤ by <a href="http://stack.m31271n.com">m31271n</a></p>
