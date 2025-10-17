const router = require("express").Router()
const userController = require("../controller/userController")

router.post("/create", userController.createUser)
router.get("/users", userController.users)
router.get("/user/:id", userController.user)
router.put("/edit/:id", userController.updateUser)
router.delete("/delete/:id", userController.deleteUser)

module.exports = router