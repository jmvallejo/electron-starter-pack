const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const Dotenv = require('dotenv-webpack')

const config = (env, argv) => ({
	target: 'web',
	name: 'react',
	entry: {
		reactApp: './src/react/index.tsx'
	},
	devServer: {
		port: env.ELECTRON ? 3000 : 3001,
		hot: true
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'dist', 'react'),
		publicPath: env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH || './' : '/'
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] },
			{
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
		]
	},
	resolve: {
		extensions: env.ELECTRON
			? [ '.electron.ts', '.ts', '.electron.tsx', '.tsx', '.electron.js', '.js' ]
			: [ '.ts', '.tsx', '.js' ]
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new EnvironmentPlugin({
			NODE_ENV: env.NODE_ENV || 'development'
		}),
		new Dotenv({
			defaults: true
		}),
		new HtmlWebpackPlugin({ template: './src/react/index.html' })
	],
	node: {
		fs: 'empty'
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	mode: env.NODE_ENV || 'development'
})

module.exports = config
