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
  config = rewireAntd({
    theme: '#1DA57A'
  })(config, env);
  // with loaderOptions
  // config = rewireLess.withLoaderOptions(someLoaderOptions)(config, env);
  return config;
}
```

## API
### rewireAntd(options)
+ `options`
  + type: Object
  + default value: `{}`

+ `options.theme`
  + type: String, and should be [an valid CSS color name](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
  + default value: `rgb(97,43,189)`

## How it works
Thanks to the power of following packages:
+ `react-app-rewired`
+ `react-app-rewire-less`
+ `babel-plugin-import`

* * *

<p align="center">Made with ❤ by <a href="http://stack.m31271n.com">m31271n</a></p>
