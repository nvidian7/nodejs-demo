import App from "./server"
import * as express from "express"
import * as router from "./router"

const port: Number = 8888
const app: express.Application = new App().app

app.use(router.default)
app.listen(port, () => console.log(`Express server listening as ${port}`))
    .on('error', err => console.error(err))