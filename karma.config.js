const karmaWebpack = require('karma-webpack');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

// Constants
const PROJECT_SRC = path.resolve(__dirname, '..', 'src');

// Loaders
const cssLoader = `css?sourceMap&root=${PROJECT_SRC}`;
const sassLoader = `sass?sourceMap&root=${PROJECT_SRC}`;

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
      'karma-mocha-reporter',
      'karma-junit-reporter'
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/tests/**/*.spec.js': ['webpack']
    },
    reporters: ['mocha', 'junit'],
    junitReporter: {
      outputDir: path.resolve(__dirname, 'reports'),
      outputFile: 'report.xml',
      useBrowserName: false
    },
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
            loader: `style!${cssLoader}!postcss!${sassLoader}`,
            // loaders: ["style", "css", "sass"],
            exclude: /node_modules/
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
      postcss: () => [autoprefixer],
      plugins: [
        new webpack.IgnorePlugin(/ReactContext/)
      ]
    },
    webpackMiddleware: { noInfo: true }
  });
};
