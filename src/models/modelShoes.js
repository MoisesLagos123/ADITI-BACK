import DataType from 'sequelize';
import {sequelize} from '../database/database.js';

export const ModelShoes = sequelize.define('modelShoes',{
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type: DataType.STRING
    },
});