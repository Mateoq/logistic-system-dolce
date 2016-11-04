const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const {
  WEBPACK_PORT,
  WEBPACK_HOST
} = require('./src/config/env');

// Constants
const ENTRY_POINT = `${__dirname}/src/`;

// Loaders
const rootPath = path.resolve(__dirname);
const assetsPath = path.resolve(__dirname, 'src', 'static', 'assets');
const cssLoader = `css?sourceMap&root=${rootPath}`;
const sassLoader = `sass?sourceMap&root=${rootPath}`;
const webpackURL = `http://${WEBPACK_HOST}:${WEBPACK_PORT}/`;

module.exports = merge(commonConfig, {
  // The configuration for the server-side rendering
  name: 'server-side rendering',
  devtool: 'eval-source-map',
  context: path.join(__dirname, 'src'),
  target: 'node',
  entry: [
    `webpack-hot-middleware/client?path=${webpackURL}__webpack_hmr`
    ENTRY_POINT
  ],
  output: {
    filename: 'bundle.js',
    path: assetsPath,
    chunkFilename: 'bundle-[chunkhash].js',
    publicPath: `${webpackURL}assets/`
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|server)/,
        loader: 'babel',
        query: {
          presets: ['es2016-node5', 'react'],
          plugins: ['transform-object-rest-spread', 'react-hot-loader/babel']
        }
      },
      {
        test: /\.scss$/,
        loader: `style!${cssLoader}!postcss!${sassLoader}`,
        // loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      _DEVCLIENT__: false,
      __DEVSERVER__: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
