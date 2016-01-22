const router = require('koa-router')()

router.get('/', function*(next) {
  this.status = 200
  this.body = 'Hello world from worker ' + (cluster.workder ? cluster.worker.id : '') + '!'
})

router.get('/api/example', function*(next) {
  yield Promise.delay(3000)
  this.response.body = 'Simple Async 3-second Delayed Example!'
})

router.get('/api/error', function*(next) {
  throw new Error('Hurr durr!')
})

module.exports = router
