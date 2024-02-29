
import userModel from "../../../../DB/model/User.model.js"
// signup page 
export const signup = async(req , res , next)=>{
    // we used try and catch to check if the email oredy exists or not :
    try {

        const { email , name , password} = req.body;
        // console.log({ email , name , password})
        // insert user in the database:
        const user = await userModel.create(req.body,{
            // fields is important for security:
            fields: ['userName' , 'email' , 'password']
        })
        return res.json({message:"Done" , user});
        
    } catch (error) {
        if(error.original?.errno == 1062){
            return res.json({message:"Email Exist"});
        }
        // error.stack to make where the error place
        return res.json({message:"catch error" , error});
    }
 
}

// login page
export const login = async (req , res , next)=>{
    try {

        const { email , password} = req.body;
        console.log({email , password});
        const user = await userModel.findAll({
            where: {
                email, 
                password,
            }
        })
        // .length because return arr 
        return user.length? res.json({message : "Done" , user})
        : res.json({message : "In-valid email or password" , user})
    } catch (error) {
        return res.json({message : "catch error" , error})
        
    }

}