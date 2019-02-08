import { Response } from "express";

export interface HandlerMap {
    [path: string] : Function
}

export function route (handle: HandlerMap, pathname: string, response: Response) {
    console.log('about to route a request for ' + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response)
    } else {
        console.log('no request handler found for ' + pathname)
        response.writeHead(404, { 'Content-Type': 'application/json' })
        response.write('404 Not found')
        response.end()
    }
}