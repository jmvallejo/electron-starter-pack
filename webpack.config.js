const path = require('path')

const config = {
	entry: {
		reactApp: './src/react/index.tsx',
		electronApp: './src/electron/index.ts'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
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
	plugins: [],
	node: {
		fs: 'empty'
	},
	mode: process.env.NODE_ENV || 'development'
}

module.exports = config
