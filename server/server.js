const jsonServer = require('json-server')
const server = jsonServer.create()

const dataGenerator = require('./mock/generate.js')
const data = dataGenerator()

const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

const routes = require('./routes.json')
server.use(jsonServer.rewriter(routes))

server.use((req, res, next) => {
    if (Math.random() < 0.1) {
        setTimeout(() => {
            res.status(500).jsonp({
                error: '서버 에러'
            })
        }, 1000)
    } else {
        setTimeout(() => {
            next();
        }, 1000)
    }
})

const port = 9999;

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`json-server is running: localhost:${port}`)
})
