const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const fs = require('fs');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools');
const commonConfig = require('./webpack.config.common');
const {
  WEBPACK_PORT,
  WEBPACK_HOST
} = require('../src/config/env');

// Constants
const ENTRY_POINT = path.resolve(__dirname, '..', 'src', 'client.js');
const PROJECT_SRC = path.resolve(__dirname, '..', 'src');
const ASSETS_PATH = path.resolve(__dirname, '..', 'src', 'static', 'assets');

// Loaders
const cssLoader = `css?sourceMap&root=${PROJECT_SRC}`;
const sassLoader = `sass?sourceMap&root=${PROJECT_SRC}`;
const webpackURL = `http://${WEBPACK_HOST}:${WEBPACK_PORT}/`;

module.exports = merge(commonConfig, {
  // The configuration for the server-side rendering
  name: 'server-side rendering',
  devtool: 'eval-source-map',
  context: PROJECT_SRC,
  entry: {
    main: [
      `webpack-hot-middleware/client?reload=true&path=${webpackURL}__webpack_hmr`,
      ENTRY_POINT
    ]
  },
  output: {
    filename: 'bundle.js',
    path: ASSETS_PATH,
    chunkFilename: 'bundle-[hash].js',
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
  progress: true,
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src',
    ],
    extensions: ['', '.json', '.js', '.css', '.scss'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVTOOLS: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackIsomorphicToolsPlugin(
      webpackIsomorphicToolsConfig
    )
  ]
});
