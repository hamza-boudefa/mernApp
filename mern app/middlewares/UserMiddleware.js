const Jwt  = require("jsonwebtoken")
const users = require("../modules/userSchema")


const userMiddleware=async(req,res,next)=>{
    try {
        
        const token=req.headers.auth
        if(!token){
        return  res.json({message:'not authorized'})
        }else {
            var decoded=Jwt.verify(token ,process.env.privetKey)
            const user = await users.findById(decoded.id)
            if(!user){
                return res.json({message:'not authorized'})

            }else 
            next()
        }
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}
module.exports=userMiddleware