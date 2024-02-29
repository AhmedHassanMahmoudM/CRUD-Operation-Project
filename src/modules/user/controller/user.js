import userModel from "../../../../DB/model/User.model.js"
import {Op } from 'sequelize'
import productModel from "../../../../DB/model/product.model.js"
export const usersList  = async (req , res , next)=>{
    // to be dynamic 
    // const { searchKey , searchKey2} = req.query;
    // console.log(searchKey);
    const users = await userModel.findAll({
        // where: {
        //     [Op.or]:[
        //         {
        //             userName:{
        //                 [Op.like]:`%${searchKey}%`
        //             }  
        //         },
        //         {
        //             age:{
        //                 [Op.it]:searchKey2
        //             }
        //         }

        //     ]
        // }
    })
    return res.json({message:"Done" , users})
}
// update user 
export const updateUser = async (req , res , next)=>{
    const {id} = req.params;
    // const {age , confirmEmail} = req.body;
    console.log(id , age)
    // why req.body because i do not now what he update ?
    const user = await userModel.update(req.body ,{
        where:{
            id
        }
    })
    return user[0]? res.json({message:"Done", user})
    : res.json({message:"In-valid ID" , user})
}
// delete user
export const deleteUser = async(req , res , next)=>{
    const {id} = req.params;
    const user = await userModel.destroy({
        where:{
            id
        }
    })
    return user? res.json({message:"Done", user})
    : res.json({message:"In-valid ID" , user})
}
// userProducts
export const userProducts  = async (req , res , next)=>{

    const users = await userModel.findAll({
       include:productModel
    })

    return res.json({message:"Done" , users})
}