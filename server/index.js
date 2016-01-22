'use strict'
require('babel-core/register')

const Promise = require('bluebird')
const sticky = require('socketio-sticky-session')
const fs = require('fs')
const cluster = require('cluster')
const pem = Promise.promisifyAll(require('pem'))
const app = require('./app')
const config = require('./index').default
const spdy = require('spdy')
const socketIo = require('socket.io')

let port = 433

// 如果不是root
if (process.getuid() !== 0) {
  port = 8443
}

Promise.coroutine(function*() {
  const keys = yield pem.createCertificateAsync({
    days: 1,
    selfSigned: true
  })

  const credentials = {
    key: keys.serviceKey,
    cert: keys.certificate
  }

  function getServer () {
    const server = spdy.createServer(credentials, app.callback())
    const io = socketIo.listen(server)

    io.on('connection', function(socket) {

    })

    return server
  }

  if (config.cluster) {
    sticky(function () {
      return getServer()
    }).listen(port, function () {
      console.log('Cluster worker ' + (cluster.worker ? cluster.worker.id : '') + ' HTTPS server listening on port ' + port)
    })
  } else {
    getServer().listen(port, function() {
      console.log('HTTPS server (no cluster) listening on port ' + port)
    })
  }

  if (process.getuid() === 0) {
    process.setgid('nobody')
    process.setuid('nobody')
    if (process.setegid) {
      process.setegid('nobody')
      process.seteuid('nobody')
    }
  }
})()
