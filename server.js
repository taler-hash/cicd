const Koa = require('koa')

const app = new Koa()

const router = require('./routes/start')

app.use(router.routes())

app.listen(8000)
