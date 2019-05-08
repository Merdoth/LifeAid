/* eslint no-restricted-globals: 0 */
/* eslint indent: 0 */
/* eslint no-tabs: 0 */
/* eslint max-len: 0 */
/* eslint sort-keys: 0 */
/* eslint no-mixed-spaces-and-tabs: 0 */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackExcludeAssetsPlugin from 'html-webpack-exclude-assets-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};
const extractSass = new ExtractTextPlugin({
	disable: process.env.NODE_ENV === 'development',
	filename: '[name].[contenthash].css',
});

export default {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'client/js/app/index.js'),

  output: {
	  filename: 'bundle.js',
	  path: path.join(__dirname, '/dist/public/'), // Note: Physical files are only output by the production build task `npm run build`.
	  publicPath: '/',
  },
	plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin(),
    extractSass,
    new HtmlWebpackPlugin({
		excludeAssets: [/.js/],
		filename: path.join(__dirname, 'dist/index.html'),
		inject: 'body',
		minify: false,
		template: path.join(__dirname, 'client/index.html'),
	}),
    new HtmlWebpackExcludeAssetsPlugin(),

  ],
	module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server'),
        ],
        loaders: ['babel-loader'],
      },

      { test: /\.(css|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
  },
	resolve: {
    extensions: ['.js', '.jsx'],
  },
	node: {
		dns: 'empty',
		net: 'empty',
  },
	target: 'web',
};
