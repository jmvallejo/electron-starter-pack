const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = (env, argv) => ({
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
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin()
	],
  mode: env.NODE_ENV || 'development'
})

module.exports = config
