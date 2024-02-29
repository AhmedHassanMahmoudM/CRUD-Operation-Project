import {sequelize} from '../connection.js';
import {Sequelize , DataTypes} from 'sequelize';
import productModel from './product.model.js'
const userModel = sequelize.define('User' , {
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    userName:{
        type:DataTypes.STRING, // varchar(255)
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    },
    password:{
        type:DataTypes.STRING(200),
        allowNull: false,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull: true,
    },
    confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
    },
    
})
// The relation of user with product:
userModel.hasMany(productModel , {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

// The relation of product with user :
productModel.belongsTo(userModel)
export default userModel