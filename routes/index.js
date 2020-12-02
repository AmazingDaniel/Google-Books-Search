const apiRoutes = require("./api")
const app = require("express")

app.use("/api",apiRoutes)
module.exports = app

