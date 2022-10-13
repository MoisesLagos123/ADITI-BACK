import { ModelType } from "../models/modelType.js";

export const getAllModelType = async (req, res) => {
    try{
        const allModelType = await ModelType.findAll();
        allModelType.length > 0 ?
            res.status(200).json(allModelType):
            res.status(204).send();
    } catch(error){
        res.status(500).json({message: error.message}); 
    };
};
export const createModelType = async (req, res) => {
    try{
        const { description } = req.body;
        if (description.length > 0 ) {
            await ModelType.create({
                description
            })
            res.status(201).send('Objeto creado exitosamente');
        }else{res.status(400).send('Uno o mas campos estan vacios'); };
    } catch (error) {
        res.status(500).json({message: error.message}); 
    };
};
export const deleteModelType = async (req, res) => {
    try{
        const { id } = req.params
        await ModelType.destroy({
            where: { id, }
        });
        res.sendStatus(204)
    }catch (error) {
        res.status(500).json({message: error.message}); 
};

};
export const updateModelType = async (req, res) => {
    try{
        const { id } = req.params;
        const {description } = req.body;
        const modelType = await ModelType.findByPk(id);
        modelType.description = description;
        await modelType.save();
        res.sendStatus(204)
    }catch(error){
        res.status(500).json({message: error.message}); 
    };
};
export const getOneModelType = async (req, res) => {
    try{
        const { id } = req.params;
   
        const modelType = await ModelType.findByPk(id);
        modelType != null ?
            res.status(200).json(modelType.dataValues):
            res.status(204).send();  
    }catch(error){
        res.status(500).json({message: error.message}); 
    };
};