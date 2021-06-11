const package = require('./package.json')
const StatsPlugin = require('stats-webpack-plugin');
module.exports = {
  publicPath: '//127.0.0.1:8081',
  css: {
      extract: false
  },
  devServer: {
    port: 8081
  },
  configureWebpack: {
    output: {
      library: package.name,
      libraryTarget: 'window'
    },
    plugins: [
      new StatsPlugin('manifest.json', {
          chunkModules: false,
          entrypoints: true,
          source: false,
          chunks: false,
          modules: false,
          assets: false,
          children: false,
          exclude: [/node_modules/]
      }),
    ]
  }
}