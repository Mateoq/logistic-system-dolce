const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  debug: true,
  webpack_assets_file_path: './build/webpack-assets.json',
  webpack_stats_file_path: './build/webpack-stats.json',
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif',
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser,
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot',
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser,
    },
    svg: {
      extension: 'svg',
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser,
    },
    styles: {
      extensions: ['css', 'scss'],
      filter(module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(
            module,
            regex,
            options,
            log
          );
        }
        return false;
      },
      // path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
      path(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(
            module,
            options,
            log
          );
        }

        return module.name;
      },
      // parser: WebpackIsomorphicToolsPlugin.css_loader_parser,
      parser(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(
            module,
            options,
            log
          );
        }

        return module.source;
      },
    },
  },
};
