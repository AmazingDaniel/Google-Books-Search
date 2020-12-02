const bookRouter = require("./book")
const googleRoutes = require("./googlebook")
const app = require("express")

app.use("/books", bookRouter)
app.use("/googlebooks", googleRoutes)

module.exports = app