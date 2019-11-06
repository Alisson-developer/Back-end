const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    thumbnail: String,
    nameProduct: String,
    typeProduct: [String],
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Product', ProductSchema)