const express = require('express')
const router = express.Router()
const {OrderController} = require('../controllers')
const authMiddleware = require('../middlewares/auth-middleware')




router.post("/place",authMiddleware,OrderController.placeOrder);
router.post("/verify",OrderController.verifyOrder);
router.post("/userorders",authMiddleware,OrderController.userOrders)
router.get("/list",OrderController.listOrders)
router.post("/status",OrderController.updateStatus)

module.exports = router