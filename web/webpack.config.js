'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('webpack-html-plugin')
const HasteResolverPlugin = require('haste-resolver-webpack-plugin')
const IP = '0.0.0.0'
const PORT = 3000
const NODE_ENV = process.env.NODE_ENV
const ROOT_PATH = path.resolve(__dirname, '..')
const config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.ios'),
  }
}

module.exports = {
  ip: IP,
  port: PORT,
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'react-web',
    },
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    'webpack/hot/only-dev-server',
    config.paths.index
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin()
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?stage=1'],
      include: [config.paths.src],
      exclude: [/node_modules/]
    }]
  }
}
