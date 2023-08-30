const express=require('express')
const {addNewUser,login, updateUser, deleteUser, getUser} = require('../controllers/userControler')
const userMiddleware = require('../middlewares/UserMiddleware')

const Router=express.Router()

Router.post('/newUser',userMiddleware,addNewUser)
Router.post('/login',login)
Router.delete('/delete/:id',deleteUser)
Router.put('/updateUser/:id',userMiddleware,updateUser)
Router.get('/getuser/:id',getUser)

module.exports=Router