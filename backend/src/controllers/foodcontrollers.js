const {foodServices} = require('../services')

async function addFoodController(req,res){
    try {
        const newfood = await foodServices.addFoodService({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.file.filename,
            category:req.body.category,
        })
        res.json({
            success:true,
            data:newfood,
            error:{}
        })
    } catch (error) {
        res.json({
            success:false,
            data:{},
            error:error
        })
    }
}

module.exports={
    addFoodController
}