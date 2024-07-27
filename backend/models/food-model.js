const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
    }
})

const foodmodel = mongoose.model.food || mongoose.model("food",foodSchema)

module.exports = foodmodel

