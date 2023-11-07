const Router = require('koa-tree-router')

const router = new Router()

router.get('/user', (ctx) => {
  ctx.body = 'user 1'
})

module.exports = router
