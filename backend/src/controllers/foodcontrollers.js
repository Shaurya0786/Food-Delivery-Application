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

async function getFoodListController(req,res) {
    try {
        const foodlist = await foodServices.getFoodListService()
        return res.json({
            success:true,
            data:foodlist,
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


async function deleteFoodController(req,res) {
    try {
        const response = await foodServices.deletefoodService(req.params.id);
        return res.json({
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            data:{},
            error:error
        })
    }
}


module.exports={
    addFoodController,
    getFoodListController,
    deleteFoodController
}