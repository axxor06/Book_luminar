
const express = require("express")
const userController = require('../Controllers/userController')

//creates a new route 
const router = new express.Router()

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//google login
router.post('/google-login',userController.googleLoginController)


//export the whole content so we are using this
module.exports = router