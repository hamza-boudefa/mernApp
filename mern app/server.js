const express=require('express')
const connectDB = require('./config/connectDB')
 const cors=require('cors')
require('dotenv').config()

const app=express()
connectDB()
app.use(cors())
app.use(express.json())

app.use('/userAPI',require('./routes/userRoutes'))
app.use('/prodAPI',require('./routes/productRoutes'))

const PORT=8000
app.listen(PORT,(err)=>err?console.log(err):console.log(`app listning on ${PORT}`))