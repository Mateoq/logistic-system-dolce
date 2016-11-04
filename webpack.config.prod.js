const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constants
const ENTRY_POINT = path.join(__dirname, 'src', 'client.js');

// Loaders
const extractCSS = new ExtractTextPlugin('main.css', { allChunks: true });

module.exports = merge(commonConfig, {
  entry: ENTRY_POINT,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2016-node5", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract('style', 'css!postcss!sass'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
    // new webpack.optimize.UglifyJsPlugin()
  ]
});
