//import { Request, Response, Router } from "express";
import * as express from "express";

class App {
    public app: express.Application

    constructor() {
        this.app = express.default()

        this.app.use('/*', function(req, res, next) {
            req.requestTime = Date.now()
            const isoDateString:string = new Date(req.requestTime).toISOString();
            console.log(`[${isoDateString}] Request - Type: ${req.method}, URL: ${req.originalUrl}`);
            next();
        }, function (req, res, next) {
            next();
        })
    }
}

export default App;