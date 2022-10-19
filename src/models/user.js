import DataType from 'sequelize';
import {sequelize} from '../database/database.js';
export const User = sequelize.define('user',{
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataType.STRING
    },
    lastName: {
        type: DataType.STRING
    },
    email: {
        type: DataType.STRING
    },
    pass: {
        type: DataType.STRING
    },

});
