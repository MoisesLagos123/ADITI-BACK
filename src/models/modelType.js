import DataType from 'sequelize';
import {sequelize} from '../database/database.js';
export const ModelType = sequelize.define('modelType',{
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type: DataType.STRING
    },
});