import Express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import {
  DEFAULT_PORT,
  WEBPACK_HOST,
  WEBPACK_PORT,
} from '../config/env';

import webpackConfig from '../../webpack/webpack.config.dev';

const app = new Express();
const compiler = webpack(webpackConfig);
const serverOptions = {
  contentBase: `http://${WEBPACK_HOST}:${DEFAULT_PORT}`,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Controls-Allow-Origin': '*' },
  stats: { colors: true },
};

app.use(webpackMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.listen(WEBPACK_PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Webpack development server listening on port: ${WEBPACK_PORT}`);
  }
});
