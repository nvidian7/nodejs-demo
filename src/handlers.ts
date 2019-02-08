import { Response } from "express";
import { HandlerMap } from "./router"

export var handlers: HandlerMap = {};

handlers['/'] = function (response: Response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write('Hello nodejs!!')
    response.end()
}

handlers['/view'] = function (response: Response) {
    console.log('request handler called --> view')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write('Hello View')
    response.end()
}

handlers['/create'] = function (response: Response) {
    console.log('request handler called --> create')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write('Hello Create')
    response.end()
}
