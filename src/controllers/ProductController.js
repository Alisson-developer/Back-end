const User = require('../models/User')
const Product = require('../models/Product')

module.exports = {
    async index(req, res){
        const { type } = req.query

        const product = await Product.find({ typeProduct: type })

        return res.json(product)
    },

    async store(req, res){
        const { filename } = req.file
        const { nameProduct, typeProduct } = req.body
        const { price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if(!user){
            return res.status(400).json({ error: 'Usuário não existe!'
             })
        }

        const product = await Product.create({
            user: user_id,
            thumbnail: filename,
            nameProduct,
            typeProduct: typeProduct.split(',').map(type => type.trim()),
            price
        })
        
        return res.json(product)
    }

    
}