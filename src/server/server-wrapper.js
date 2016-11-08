const path = require('path');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const webpackIsomorphicToolsConfig = require('../../webpack/webpack-isomorphic-tools');

const SOURCE_DIR = path.resolve(__dirname, '..');

global.webpackIsomorphicTools =
  new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
    .server(SOURCE_DIR, () => (require('./server'))); // eslint-disable-line global-require
