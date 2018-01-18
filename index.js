'use strict'

const assert = require('assert')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const is = require('is')

function createRewireAntd (options = {}) {
  assert(
    options && is.object(options),
    'options should be an object.'
  )

  const modifyVars = options

  return function (config, env) {
    config = injectBabelPlugin([
      'import', { libraryName: 'antd', libraryDirectory: 'es', style: true }
    ], config)

    config = rewireLess.withLoaderOptions({
      modifyVars
    })(config, env)

    return config
  }
}

const rewireAntd = createRewireAntd()

module.exports = rewireAntd
