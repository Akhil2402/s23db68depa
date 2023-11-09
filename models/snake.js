const mongoose = require("mongoose")
const snakeSchema = mongoose.Schema({
snake_color: String,
snake_breed: String,
snake_price: Number
})
module.exports = mongoose.model("snake",snakeSchema)