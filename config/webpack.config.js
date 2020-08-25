const electronConfig = require('./webpack.config.electron')
const reactConfig = require('./webpack.config.react')

module.exports = (env, argv) => {
  return [ reactConfig(env, argv), electronConfig(env, argv) ]
}
