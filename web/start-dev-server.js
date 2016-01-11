'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(config.port, config.ip, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log('Listening at ' + config.ip + ':' + config.port)
})
