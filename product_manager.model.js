const mongoose = require('mongoose')

const ProductManagerSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price : {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1, "{PATH} must be at least 1"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "Description must be at least 3 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model('Product', ProductManagerSchema)
module.exports = Product