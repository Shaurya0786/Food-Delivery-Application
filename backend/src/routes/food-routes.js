const express = require('express')
const upload = require('../config/multer-config')
const { foodControllers } = require('../controllers')
const router = express.Router()

router.post('/add',upload.single('image'),foodControllers.addFoodController)

router.get('/',foodControllers.getFoodListController)

router.delete('/:id',foodControllers.deleteFoodController)

module.exports = router