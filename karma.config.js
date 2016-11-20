const karmaWebpack = require('karma-webpack');
const webpack = require('webpack');

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      'src/tests/**/*.spec.js'
    ],
    plugins: [
      karmaWebpack,
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter'
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/tests/**/*.spec.js': ['webpack']
    },
    reporters: ['mocha'],
    webpack: {
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon'
        }
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        preLoaders: [
          {
            test: /(\.jsx)|(\.js)$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['eslint']
          }
        ],
        loaders: [
          {
            test: /\.scss$/,
            loader: 'null'
          },
          {
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel'
          },
          {
            test: /\.json$/,
            loader: 'raw'
          }
        ]
      },
      plugins: [
        new webpack.IgnorePlugin(/ReactContext/)
      ]
    },
    webpackMiddleware: { noInfo: true }
  });
};
