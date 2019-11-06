const mongoose = require('mongoose')

// Esquema de produto para o DB
const ProductSchema = new mongoose.Schema({
    thumbnail: String,
    nameProduct: String,
    typeProduct: [String],
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId, // Associa produto com o usuário
        ref: 'User'
    },
})

module.exports = mongoose.model('Product', ProductSchema)