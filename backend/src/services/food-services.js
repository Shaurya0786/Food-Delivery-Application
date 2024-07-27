const { foodmodel } = require('../models')

async function addFoodService(data){
    try {
        const food = new foodmodel(data)
        await food.save()
        return food
    } catch (error) {
        throw error
    }
}

module.exports = {
    addFoodService
}