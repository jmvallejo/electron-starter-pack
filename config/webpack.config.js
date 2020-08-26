const electronConfig = require('./webpack.config.electron')
const reactConfig = require('./webpack.config.react')

module.exports = (env, argv) => {
  if (env.ELECTRON) {
    return [ reactConfig(env, argv), electronConfig(env, argv) ]
  } else {
    return reactConfig(env, argv)
  }
}
