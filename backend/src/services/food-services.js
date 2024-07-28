const { foodmodel } = require('../models')
const fs = require('fs')


async function addFoodService(data){
    try {
        const food = new foodmodel(data)
        await food.save()
        return food
    } catch (error) {
        throw error
    }
}

async function getFoodListService(){
    try {
        const foodlist = await foodmodel.find({})
        return foodlist
    } catch (error) {
        throw error
    }
}


async function deletefoodService(id){
    try {
        const food = await foodmodel.findById(id)
        await fs.unlinkSync(`src/uploads/foods/${food.image}`)
        const response = await foodmodel.findByIdAndDelete(id) 
        return response
    } catch (error) {
        throw error
    }
}


module.exports = {
    addFoodService,
    getFoodListService,
    deletefoodService
}