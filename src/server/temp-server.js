// Webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import Express from 'express';
import path from 'path';
import { Server } from 'http';
import httpProxy from 'http-proxy';
// React
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import { NotFoundPage } from './components/';

import config from '../webpack.dev';
// Constants
import {
  DEFAULT_PORT,
  API_HOST,
  API_PORT
} from '../config/env';

// Initialize the server.
const targetUrl = `http://${API_HOST}:${API_PORT}`;
const app = new Express();
const server = new Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

const env = process.env.NODE_ENV || 'production';
const isDeveloping = env !== 'production';

/* Render the complete page.
 *
 * @returns {void}
 */
function renderFullPage(html) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>New Project</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/assets/bundle.js"></script>
  </body>
  </html>
  `;
}

function handleRender(req, res) {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      // Display error if exists
      if (err) {
        return res
          .status(500)
          .send(err.message);
      }

      // In case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res
          .redirect(
            302,
            redirectLocation.pathname + redirectLocation.search
          );
      }

      // Generate the React markup for the current route
      let html;
      if (renderProps) {
        // If the current route matched we have renderProps
        html = renderToString(<RouterContext {...renderProps} />);
      } else {
        // Otherwise render a 404 page
        html = renderToString(<NotFoundPage />);
        res.status(404);
      }

      return res.send(renderFullPage(html));
    }
  );
}

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: config.output.contentBase,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
} else {
  // Define the folder that will be used for static assets.
  app.use(Express.static(path.join(__dirname, 'static')));
}

// Universal routing and rendering.
app.use(handleRender);

// Start the server
server.listen(port, (err) => {
  if (err) {
    return err;
  }
  return `Server running on http://localhost:${port} [${env}]`;
});
