'use strict'

const assert = require('assert')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const is = require('is')
const isColor = require('is-color')

function createRewireAntd (options) {
  assert(
    options && is.object(options),
    'options should be an object.'
  )

  assert(
    options.theme && is.string(options.theme) && isColor(options.theme),
    'options.theme should be a valid CSS color.'
  )

  return function (config, env) {
    config = injectBabelPlugin([
      'import', { libraryName: 'antd', libraryDirectory: 'es', style: true }
    ], config)

    config = rewireLess.withLoaderOptions({
      modifyVars: { '@primary-color': (options.theme || '#1DA57A') }
    })(config, env)

    return config
  }
}

const rewireAntd = createRewireAntd()

module.exports = rewireAntd
