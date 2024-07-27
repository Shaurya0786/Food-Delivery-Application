const express = require('express')
const upload = require('../config/multer-config')
const { foodControllers } = require('../controllers')
const router = express.Router()

router.post('/',upload.single('image'),foodControllers.addFoodController)

module.exports = router