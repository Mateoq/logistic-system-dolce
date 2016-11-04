import Express from 'express';
import path from 'path';
import { Server } from 'http';
import httpProxy from 'http-proxy';
import PrettyError from 'pretty-error';
import qs from 'query-string';
import serialize from 'serialize-javascript';
// React
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { match, RouterContext } from 'react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';

// App
import reducer from '../reducers/';
import routes from '../config/routes';
import { NotFoundPage } from '../components/';

// Constants
import {
  ENV,
  API_HOST,
  API_PORT,
  DEFAULT_PORT,
  WEBPACK_PORT,
  WEBPACK_HOST,
} from '../config/env';
import { MOUNT_ID } from '../config/constants';

// Initialize the server.
const targetUrl = `http://${API_HOST}:${API_PORT}`;
const app = new Express();
const server = new Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true,
});
const pretty = new PrettyError();

/* Render the complete page.
 * @param {string} markup - Prerendered react markup.
 * @param {object} preloadedState - Preloaded state.
 * @returns {string} - Html rendered.
 */
function renderFullPage(markup, preloadedState) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>New Project</title>
  </head>
  <body>
    <div id="${MOUNT_ID}">${markup}</div>
    <script>window.__preloadedState = ${preloadedState};</script>
    <script src="${
      process.env.NODE_ENV === 'development' ?
            `http://${WEBPACK_HOST}:${WEBPACK_PORT}/assets/bundle.js` :
            '/assets/bundle.js'
      }"></script>
  </body>
  </html>
  `;
}

function handleRender(req, res) {
  const store = reduxReactRouter({
    routes,
    createHistory: createMemoryHistory,
  })(createStore)(reducer);
  const query = qs.stringify(req.query);
  const url = req.path + (query.length ? `?${query}` : '');

  store.dispatch(match(url, (err, redirectLocation, routerState) => {
    let markup;
    if (err) {
      // Display error if exists.
      console.error('Router error:', error);
      return res.status(500).send(err.message);
    } else if (redirectLocation) {
      // In case of redirect propagate the redirect to the browser.
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!routerState) {
      // Route not found.
      markup = renderToString(<NotFoundPage />);
      return res.status(404).send(renderFullPage(markup, null));
    }
    // Generate the React markup for the current route
    const preloadState = serialize(store.getState());
    markup = renderToString(
      <Provider store={store} key="provider">
        <ReduxRouter />
      </Provider>
    );
    return res.status(200).send(renderFullPage(markup, preloadState));
  }));
}

// Define the folder that will be used for static assets.
app.use(Express.static(path.join(__dirname, 'static')));

app.use('/api', (req, res) => {
  proxy.web(req, res, {
    target: `${targetUrl}/api`,
  });
});

// Catch errors on the proxy.
proxy.on('error', (err, req, res) => {
  const json = {
    error: 'proxy_error',
    reason: err.message,
  };

  if (err.code !== 'ECONNRESET') {
    console.error('proxy error: ', err);
  }

  if (!res.headersSent) {
    res.writeHead(500, {
      'content-type': 'application/json',
    });
  }

  res.end(JSON.stringify(json));
});

// On server upgraded.
server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

// Start the server
server.listen(DEFAULT_PORT, (err) => {
  if (err) {
    return err;
  }
  return `Server running on http://localhost:${DEFAULT_PORT} [${ENV}]`;
});
