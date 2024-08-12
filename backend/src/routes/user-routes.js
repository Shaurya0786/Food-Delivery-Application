const express = require('express')
const {UserControllers} = require('../controllers')

const router=express.Router();

router.post("/register",UserControllers.registerUser)
router.post("/login",UserControllers.loginUser)


module.exports = router