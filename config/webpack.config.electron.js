const path = require('path')

const config = {
  target: 'electron-main',
  name: 'electron',
	entry: {
		electronApp: './src/electron/index.ts'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'dist', 'electron')
	},
	module: {
		rules: [ { test: /\.ts$/, use: 'ts-loader' } ]
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	plugins: [],
  mode: process.env.NODE_ENV || 'development'
}

module.exports = config
