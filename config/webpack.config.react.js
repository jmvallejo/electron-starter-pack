const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
	target: 'web',
	name: 'react',
	entry: {
		reactApp: './src/react/index.tsx'
	},
	devServer: {
		hot: true
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'dist', 'react'),
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] }
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './src/react/index.html' })
	],
	node: {
		fs: 'empty'
	},
	mode: process.env.NODE_ENV || 'development'
}

module.exports = config
