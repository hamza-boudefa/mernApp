const users = require("../modules/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt=require('jsonwebtoken')

// signup
const addNewUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    // test if user already exist in db
    console.log(password)
    const user = await users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    } else {
      // hash password
      const hashed= await bcrypt.hash(password,saltRounds)
      console.log(hashed)
      const newUser = new users({ ...req.body, password: hashed });
      await newUser.save();
      return res
        .status(200)
        .json({ message: "user added successfully", newUser });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


// login
const login=async(req,res)=>{
  try {
    console.log(req.body)
    const email=req.body.email 
    const password=req.body.password
    const user=await users.findOne({email}).populate('listOfProducts')
    if(!user){
      return res.status(200).json({message:"bad credentials"})
    }else {
      const match=bcrypt.compare(password,user.password)
      if(!match){
        return res.status(200).json({message:"bad credentials"})
      }else {
        var token=jwt.sign({id:user._id}, process.env.privetKey)
        return res.json({message:'user liggedin',token,user})
      }
    }

  } catch (error) {
    return res.status(400).json({ error: error.message });

  }
}

 // get all users
 const getAllUsers=async(req,res)=>{
  try {
    // haja ne9sa
    const allUsers=await users.find()
    return res.json(allUsers)
    
  } catch (error) {
    return res.status(400).json({ error: error.message });

  }
}

// get user
const getUser=async(req,res)=>{
  try {
    const user=await users.findById(req.params.id).populate('listOfProducts').select("-password")
    return res.json(user)
  } catch (error) {
    return res.status(400).json({ error: error.message });

  }
}
// delete user
const deleteUser=async(req,res)=>{
  try {
    await users.findByIdAndDelete(req.params.id)
    return res.json({message:"user deleted"})
  } catch (error) {
    return res.status(400).json({ error: error.message });

  }
}

// update user
const updateUser=async(req,res)=>{
  try {
    const updatedUser= await users.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
    return res.json({message:"user updated successfully",updatedUser})
    
  } catch (error) {
    return res.status(400).json({ error: error.message });

  }
}


module.exports={addNewUser,login,getAllUsers,getUser,deleteUser,updateUser}