'use strict';

const Promise = require('bluebird')
const cluster = require('cluster')

// middleware
const serveStatic = require('koa-serve-static')('public')
const conditional = require('koa-conditional-get')
const bodyParser = require('koa-bodyparser')()
const compress = require('koa-compress')()
const Morgan = require('koa-morgan')
const favicon = require('koa-favicon')
const session = require('koa-session')
const adapt = require('koa-adapter') // 适配Koa2
const helmet = require('koa-helmet')
const etag = require('koa-etag')

const router = require('./router')

const Koa = require('koa')
const app = module.exports = new Koa()

const logger = Morgan('combined')
app.keys = ['some secret hurr']

app.use(adapt(favicon(__dirname + '/public/favicon.ico')))
app.use(adapt(require('koa-response-time')()))
app.use(adapt(conditional()))
app.use(adapt(etag()))
app.use(logger)
app.use(adapt(compress))
app.use(adapt(session({
  maxAge: 24 * 60 * 60 * 1000
}, app)))
app.use(adapt(bodyParser))
app.use(adapt(function*(next) {
  try {
    yield next
  } catch (err) {
    this.status = err.status || 500
    this.type = 'application/json'
    this.body = JSON.stringify({
      success: false,
      message: err.stack
    })
    this.app.emit('error', err, this)
  }
}))
app.use(adapt(router.routes()))
app.use(adapt(router.allowedMethods()))
app.use(adapt(serveStatic))



