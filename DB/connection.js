
import {Sequelize} from 'sequelize'
export const sequelize = new Sequelize('Sequelize' , 'root' , '' , {
    host: '127.0.0.1' , // localhost
    dialect: 'mysql'
})

 // alter:true => "to can update and add to the table in database":
export const connectDB = async()=>{
    return await sequelize.sync({alter:false}).then(result =>{
        console.log(`DB connected successfully..................`)
    }).catch(err=>{
        console.log(`Fail to connect DB ...................${err}`);
    })
}
