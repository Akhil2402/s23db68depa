const mongoose = require("mongoose")
const snakeSchema = mongoose.Schema({
snake_color: String,
snake_breed: {type:String,length:15},
snake_price: {type:Number,min:1000,max:200000}
})
module.exports = mongoose.model("snake",snakeSchema)