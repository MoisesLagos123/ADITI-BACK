import { ModelShoes } from "../models/modelShoes.js";

export const getAllModelShoes = async (req, res) => {
    try{
        const allModelShoes = await ModelShoes.findAll();
        if (allModelShoes.length > 0) {
            res.status(200).json(allModelShoes);
        } else { res.status(204).send(); };
    }catch(error){
        res.status(500).json({message: error.message}); 
    };

};
export const createModelShoes = async (req, res) => {
    try{
        const { description } = req.body;
        if (description.length > 0) {
            await ModelShoes.create({
                description
            });
            res.status(201).send('Objeto creado exitosamente');
        } else { res.status(400).send('Uno o mas campos estan vacios'); };
    }catch(error){
        res.status(500).json({message: error.message}); 
    };
    
};