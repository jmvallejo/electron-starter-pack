const electronConfig = require('./webpack.config.electron')
const reactConfig = require('./webpack.config.react')

module.exports = [ reactConfig, electronConfig ]
