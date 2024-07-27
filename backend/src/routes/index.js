const express = require('express')
const router = express.Router()
const foodRoutes = require('./food-routes')

router.use('/foods',foodRoutes)

router.use('/images',express.static('src/uploads/foods/'))

router.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Api is Live'
    })
})


module.exports = router