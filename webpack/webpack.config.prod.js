const webpack = require('webpack');
const path = require('path');
const Config = require('webpack-config').Config;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools');

// Constants
const ENTRY_POINT = path.resolve(__dirname, '..', 'src', 'client', 'index.js');

// Loaders
const assetsPath = path.resolve(__dirname, '..', 'src', 'static', 'assets');
const extractCSS = new ExtractTextPlugin('main-[chunkhash].css', { allChunks: true });

module.exports = new Config()
  .extend('./webpack/webpack.config.common.js')
  .merge({
    devtool: 'source-map',
    entry: {
      main: [ENTRY_POINT]
    },
    output: {
      filename: 'bundle.js',
      path: assetsPath,
      chunkFilename: 'bundle-[hash].js',
      publicPath: '/assets/'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components|server)/,
          loader: 'babel',
          query: {
            presets: ['es2016-node5', 'react', 'stage-0'],
            plugins: ['syntax-decorators']
          }
        },
        {
          test: /\.scss$/,
          loader: extractCSS.extract('style', 'css!postcss!sass'),
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
      extractCSS,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        __CLIENT__: true,
        __DEVTOOLS__: false,
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        }
      }),
      new WebpackIsomorphicToolsPlugin(
        webpackIsomorphicToolsConfig
      ),
      new CleanWebpackPlugin([
        path.join('src', 'static', 'assets')
      ], {
        root: path.resolve(__dirname, '..')
      })
    ]
  });
