const express = require('express')
const router = express.Router()
const foodRoutes = require('./food-routes')
const CartRoutes = require('./cart-routes')
const userRoutes = require('./user-routes')
const orderRoutes = require('./order-routes')

router.use('/foods',foodRoutes)

router.use('/images',express.static('src/uploads/foods/'))

router.use('/user',userRoutes)

router.use('/cart',CartRoutes)

router.use('/order',orderRoutes)
router.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Api is Live'
    })
})


module.exports = router