const router =require("express").Router()
const googleController = require("../../controller/googlebookController")
 
router.route("/:title")
      .get(googleController.getBooks)

module.exports = router
     