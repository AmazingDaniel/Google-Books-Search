const bookController = require("../../controller/bookController")
const router = require("express").Router()

router.route("/")
       .get(bookController.getBooks)
       .post(bookController.saveBooks)

router.route("/:id")
       .delete(bookController.deleteBook)

module.exports = router