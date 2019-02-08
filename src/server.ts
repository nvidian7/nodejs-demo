import * as router from "./router"
import * as handlers from "./handlers"
import { Request, Response, Router } from "express";

var http = require('http')
var url = require('url')

export function start () {
    
    function onRequest (request: Request, response: Response) {
        var pathname = url.parse(request.url).pathname
        console.log('request for ' + pathname + ' received.')
        router.route(handlers.handlers, pathname, response) // injected function call
    }

    http.createServer(onRequest).listen(8888)
    console.log('Server has started.')
}