import DataType from 'sequelize';
import {sequelize} from '../database/database.js';
import { Model } from './model.js';
export const Device = sequelize.define('devices',{
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    serie:{
        type: DataType.STRING
    },
    mac: {
        type: DataType.STRING
    },
    ip: {
        type: DataType.STRING
    },

});
//FK
//relation: Model < Device
Device.belongsTo(Model,{
    foreignKey: 'modelId',
    targetId: 'id'
})
Model.hasMany(Device,{
    foreignKey: 'modelId',
    sourceKey: 'id'
})
