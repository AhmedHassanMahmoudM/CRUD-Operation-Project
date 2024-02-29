import userModel from "../../../../DB/model/User.model.js";
import productModel from "../../../../DB/model/product.model.js";

 // add product model
 export const addProduct = async (req, res , next)=>{
    try {
        const {name , description , price , UserId} = req.body;
        console.log({name , description , price , UserId});

        const product = await productModel.create({name , description , price , UserId})
        return res.json({message:"Done", product})
        
    } catch (error) {
        if(error.original?.errno == 1452){
            return res.json({message:"In-valid UserId"})
        }
        return res.json({message:"Catch error", error})
    }
 }
 // get products information
 export const products = async (req, res , next)=>{
    try {
        const products = await productModel.findAll({
            attributes:['name', 'price'],
            include:{
                model:userModel,
                attributes:['userName', 'email','id']
            }
        })
        return res.json({message:"Done", products})
        
    } catch (error) {
        return res.json({message:"Catch error", error})
    }
    
 }
// update products 
export const updateProduct = async (req, res , next)=>{
    const {id} = req.params;
    // const {price , name} = req.body;
    // console.log({name , price});
    const products = await productModel.update(req.body , {
        where:{
            id
        }
    })
    return products[0]? res.json({message:"Done", products})
    : res.json({message:"In-valid ID" , products})
}
// delete products 

export const deleteProduct = async(req, res , next)=>{
    const {id} = req.params
    const products = await productModel.destroy({
        where:{
            id
        }
    })
    return products? res.json({message:"Done", products})
    : res.json({message:"In-valid ID" , products})
}