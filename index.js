var server = require('./server')
var router = require('./router')
var handler = require('./handlers')

server.start(router.router, handler.handlers)
