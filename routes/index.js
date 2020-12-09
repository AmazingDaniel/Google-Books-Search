const apiRoutes = require("./api")
const app = require("express").Router()

app.use("/api",apiRoutes)
module.exports = app

