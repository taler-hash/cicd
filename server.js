const koa = require('koa')

const app = new koa()

const router = require('./routes/start')

app.use(router.routes())

app.listen(8000)