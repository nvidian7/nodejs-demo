import * as express from "express";

const router:express.Router = express.Router();

router.get("/", function (req, res) {
    res.json({response: "Hello, World!"})
})

router.get("/about", function (req, res) {
    res.json({response: "Express + TypeScript boilerplate restful api server"})
})

export default router