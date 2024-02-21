'use strict';

var DEVELOPMENT = 'development'
var PRODUCTION = 'production'

var webpack = require('webpack')
var path = require('path')

// const ESLintPlugin = require('eslint-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
	return {
		mode: env.NODE_ENV,
	
		entry: {
			app: path.resolve(__dirname, './src/index.ts'),
		},
		output: {
			filename: './index.js',
			path: path.resolve(__dirname, './dist'),
			clean: true,
		},
	
		watch: env.WEBPACK_SERVE ? undefined : false,
		devtool: env.NODE_ENV === PRODUCTION ? false : 'source-map',
	
		resolve: {
			extensions: ['.ts', '.js'],
		},

		devServer: {
			static: {
				directory: path.join(__dirname, 'dist'),
			},
			compress: true,
		},
	
		module: {
			rules: [{
				test: /\.ts$/,
				loader: 'ts-loader',
			}/*
		, {
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
          			'sass-loader',
				]
			}*/]
		},
	
		// plugins: [
		// 	new ESLintPlugin(),
		// 	new HtmlWebpackPlugin(),
		// 	new MiniCssExtractPlugin({
		// 		filename: './app.css'
		// 	})
		// ]
	}
};
