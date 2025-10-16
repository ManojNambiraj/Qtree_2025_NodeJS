const router = require("express").Router()
const userController = require("../controller/userController")

router.post("/create", userController.createUser)
router.get("/users", userController.users)
router.get("/user/:id", userController.user)

module.exports = router