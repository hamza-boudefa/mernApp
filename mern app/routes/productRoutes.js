const express=require('express')
const {addNewProduct,getAllProd,getOneProd,updateProd,deleteProd} = require('../controllers/productController')
const userMiddleware = require('../middlewares/UserMiddleware')

const Router=express.Router()

Router.post('/addProd',userMiddleware,addNewProduct)
Router.get('/getAllProd',getAllProd)
Router.get('/getOneProd/:id',getOneProd)
Router.put('/updateProd/:id',userMiddleware,updateProd)
Router.delete('/deleteProd/:id',deleteProd)

module.exports=Router