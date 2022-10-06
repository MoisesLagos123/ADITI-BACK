import DataType from 'sequelize';
import {sequelize} from '../database/database.js';
import { ModelShoes } from './modelShoes.js';
import { ModelType } from './modelType.js';
export const Model = sequelize.define('models',{
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type: DataType.STRING
    },
});
//FK
//relation: ModelType < Model
ModelType.hasMany(Model,{
    foreignKey: 'modelTypeId',
    targetId: 'id'
})
Model.belongsTo(ModelType,{
    foreignKey: 'modelTypeId',
    sourceKey: 'id'
})
//relation: ModelShoes < Model
ModelShoes.hasMany(Model,{
    foreignKey: 'modelShoesId',
    targetId: 'id'
})
Model.belongsTo(ModelShoes,{
    foreignKey: 'modelShoesId',
    sourceKey: 'id'
})
