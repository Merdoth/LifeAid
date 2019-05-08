/* eslint no-restricted-globals: 0 */
/* eslint indent: 0 */
/* eslint no-tabs: 0 */
/* eslint max-len: 0 */
/* eslint no-mixed-spaces-and-tabs: 0 */
const webpack = require('webpack');
const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	devServer: {
		contentBase: path.resolve(__dirname, 'client'),
		historyApiFallback: true,
	},

	devtool: debug ? 'inline-sourcemap' : false,

	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true',
		path.resolve(__dirname, './client/js/app/index.js'),
	],

  module: {
    loaders: [
      {
		  loaders: ['style-loader', 'css-loader', 'sass-loader'],
		  test: /\.(css|scss)$/,
	  },
      {
		  include: path.join(__dirname, 'client'),
		  loader: 'babel-loader',
		  query: { presets: ['es2015', 'react'] },
		  test: /\.(js|jsx)$/,
	  },
      {
		  loaders: 'file-loader?name=fonts/[name].[ext]',
		  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      },
      {
		  loaders: [
			  'file-loader',
			  'image-webpack-loader',
		  ],
		  test: /\.(gif|png|jpg|svg)$/i,
      },
    ],
  },

	node: {
		dns: 'empty',
		net: 'empty',
	},

  output: {
	  filename: 'bundle.js',
	  path: `${__dirname}/client/dist/`,
	  publicPath: '/',
  },

  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
