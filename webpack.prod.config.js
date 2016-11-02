const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src', 'static')
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    // compress: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000,
    contentBase: path.join(__dirname, 'src', 'static')
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
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["es2016-node5", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   mangle: true,
    //   sourcemap: false,
    //   beautify: false,
    //   dead_code: true
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
