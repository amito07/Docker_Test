import User from "../models/user.js";

export const userCreate = async(req, res, next) =>{
    const {name, email} = req.body;
    try {
        const result = await User.create({name,email})
        if(result){
            res.status(200).json({message:"successfull"})
        }
        
    } catch (error) {
        res.status(500).json({error})
        next()
    }
}

export const getUsers = async(req,res,next)=>{
    try {
        const userList = await User.findAll();
        res.status(200).json({users: userList})
        
    } catch (error) {
        res.status(500).json({error})
        next()
    }
}

export const getUser = async(req, res, next)=>{
    const {id} = req.params;
    try {
        const singleUser = await User.findByPk(id)
        if(singleUser){
            res.status(200).json({data: singleUser})
        }
        
    } catch (error) {
        res.status(500).json({error})
        next()
    }

}

export const updateUser = async(req, res, next)=>{
    const {email, name } = req.body;
    try {
        const userExist = await User.findOne({where: {email}})
        if(!userExist){
            return res.status(404).json({message: "User not found"})
        }

        const updateUserInfo = await User.update({email,name},{where:{id: userExist.id}})
        if(updateUserInfo){
            res.status(200).json({message: "User Updated Successfully"})
        }
        
    } catch (error) {
        res.status(500).json({error})
        next()
    }
}

export const deleteUser = async(req, res, next)=>{
    const {id} = req.params;
    try {
        const existUser = await User.findByPk(id)
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }

        await User.destroy({
            where:{
                id
            }
        })
        
    } catch (error) {
        res.status(500).json({error})
        next()
    }

}