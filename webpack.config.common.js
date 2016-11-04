const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src', 'static'),
    publicPath: '/assets/'
  },
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
        test: /\.(png|jpg|gif|jpeg)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'image/jpeg' }
      },
      {
        test: /\.(svg)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'image/svg+xml' }
      },
      {
        test: /\.(otf)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'application/x-font-opentype' }
      },
      {
        test: /\.(ttf)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'application/x-font-ttf' }
      },
      {
        test: /\.(eot)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'application/vnd.ms-fontobject' }
      },
      {
        test: /\.(woff)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'application/font-woff' }
      },
      {
        test: /\.(woff2)(\?[a-z0-9]+)?$/gi,
        loader: 'url-loader',
        query: { mimetype: 'application/font-woff2' }
      },
      {
        test: /\.json$/,
        loader: 'raw'
      }
    ]
  },
  postcss: () => [autoprefixer]
};
