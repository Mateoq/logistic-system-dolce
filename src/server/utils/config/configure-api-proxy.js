import httpProxy from 'http-proxy';
import PrettyError from 'pretty-error';

/* Configure the proxy pointing to the api services.
 * @param {string} targetUrl - The url of the api services
 * @returns {object} - With the config options for the server.
 */
const configureApiProxy = (targetUrl) => {
  const pretty = new PrettyError();
  const proxy = httpProxy.createProxyServer({
    target: targetUrl,
    ws: true,
  });

  // Catch errors on the proxy.
  proxy.on('error', (err, req, res) => {
    const json = {
      error: 'proxy_error',
      reason: err.message,
    };

    if (err.code !== 'ECONNRESET') {
      console.error('proxy error: ', pretty.render(err));
    }

    if (!res.headersSent) {
      res.writeHead(500, {
        'content-type': 'application/json',
      });
    }

    res.end(JSON.stringify(json));
  });

  return {
    handleProxy(req, res) {
      proxy.web(req, res, {
        target: `${targetUrl}${req.baseUrl}`,
      });
    },
    handleUpgrade(req, socket, head) {
      proxy.ws(req, socket, head);
    },
  };
};

export default configureApiProxy;
