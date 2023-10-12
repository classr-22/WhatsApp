const User = require("../models/usermodel");

 const findCurrentUser = async (req,res)=>{
    try {
        const user = await req.user;

        const currentuser = await User.findById(user.user._id);
        currentuser.password = null;

        return res.status(200).send(currentuser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

 const findUserById = async (req,res)=>{
    try {

        const user = await User.findById(req.params.userId);
        user.password = null;

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

 const searchUser=async (req,res)=>{
    try {
        const page = req.query.page || 1;
        const limit = req.query.size || 10;

        const skip = (page-1)*limit;
        const keyword = req.query.search?{
            $or:[
                {username: {$regex: req.query.search,$options:"i"}},
                {email:{$regex: req.query.search,$options:"i"}}
            ]
        }:{}

        const users = await User.find(keyword).select("username profile_image").skip(skip).limit(limit)

        return res.status(200).send(users);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

 const editUser=async(req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

 const deleteUser=async(req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({message: "user deleted successfully",user:deletedUser});
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {deleteUser,editUser,searchUser,findCurrentUser,findUserById}