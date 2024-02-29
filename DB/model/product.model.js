
import { DataTypes } from 'sequelize'
import {sequelize} from '../connection.js'
import userModel from './User.model.js'

const productModel = sequelize.define('Product',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false

    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

export default productModel
