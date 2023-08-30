const product = require("../modules/productSchema");
const users = require("../modules/userSchema");



// add prod
const addNewProduct=async(req,res)=>{
    try {
        console.log(req.body)
        const newProduct= new product(req.body)
        await newProduct.save()
        await users.findByIdAndUpdate(req.body.id,{$push:{listOfProducts:newProduct}})
        return res.json({message:"prod added",newProduct})
        
    } catch (error) {
        return res.status(200).json({ error: error.message });

    }
}
// get all
const getAllProd=async(req,res)=>{
    try {
        const allProd=await product.find()
        return res.json(allProd)
    } catch (error) {
        return res.status(200).json({ error: error.message });

    }
}
// get one prod

const getOneProd=async(req,res)=>{
    try {
        const product=await product.findById(req.params.id)
        return res.json(product)
    } catch (error) {
        return res.status(200).json({ error: error.message });

    }
}
// update 
const updateProd=async(req,res)=>{
    try {
        const  updatedProd= await product.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return res.json({message:"prod updated",updateProd})
    } catch (error) {
        return res.status(200).json({ error: error.message });
 
    }
}
// delete 
const deleteProd=async(req,res)=>{
    console.log(req.params)
    try {
        await product.findByIdAndDelete(req.params.id)
        return res.json({message:"prod deleted"})
    } catch (error) {
        return res.status(200).json({ error: error.message });

    }
}
module.exports={addNewProduct,getAllProd,getOneProd,updateProd,deleteProd}