import DataType from 'sequelize';
import {sequelize} from '../database/database.js';
export const User = sequelize.define('user',{

    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataType.STRING,
        required: true
    },
    lastName: {
        type: DataType.STRING,
        required: true
    },
    email: {
        type: DataType.STRING,
        required: true,
        unique: true,
        validate:{
            isEmail: {msg:"Correo no valido"}
        }
        
    },
    pass: {
        type: DataType.STRING,
        required: true,
    },

});
