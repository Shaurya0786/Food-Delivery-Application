const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/auth-middleware')
const { CartController } = require('../controllers')


router.post("/add",authMiddleware,CartController.addToCart)
router.post("/remove",authMiddleware,CartController.removeFromCart)
router.get("/",authMiddleware,CartController.getCart)


module.exports = router