const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const ProductController = require('./controllers/ProductController')
const DashboardController = require('./controllers/DashboardController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.get('/products', ProductController.index)
//routes.put('/products/:product_id', ProductController.update)
routes.post('/products', upload.single('thumbnail'), ProductController.store)
routes.get('/dashboard', DashboardController.show)

module.exports = routes