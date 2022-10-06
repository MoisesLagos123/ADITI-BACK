import { ModelShoes } from "../models/modelShoes.js";

export const getModelShoes = (req, res) => {
    res.send('getting ModelShoes');
};
export const createModelShoes = async (req, res) => {
    const { description } = req.body;
    console.log(description);

    const newModelShoes = await ModelShoes.create({
        description
    })
    console.log(newModelShoes);
    res.send('creating ModelShoes');
};