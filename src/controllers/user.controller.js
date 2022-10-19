import { User } from "../models/user.js";

export const getAllUser = async (req, res) => {
    try{
        const alluser = await User.findAll();
        alluser.length > 0 ?
            res.status(200).json(alluser):
            res.status(204).send();
    } catch(error){
        res.status(500).json({message: error.message}); 
    };
};
export const createUser = async (req, res) => {
    try{
        const { 
            name,
            lastName,
            email,
            pass  
        } = req.body;
        
        if (name.length > 0 & lastName.length > 0 & email.length > 0 & pass.length > 0) {
            await User.create({
                name,
                lastName,
                email,
                pass   
            })
            res.status(201).send('Objeto creado exitosamente');
        }else{res.status(400).send('Uno o mas campos estan vacios'); };
    } catch (error) {
        res.status(500).json({message: error.message}); 
    };
};
export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params
        await User.destroy({
            where: { id, }
        });
        res.sendStatus(204)
    }catch (error) {
        res.status(500).json({message: error.message}); 
};

};
export const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const { name,
                lastName,
                email,
                pass 
            } = req.body;

        const user = await User.findByPk(id);
        name.length != 0 ? user.name = name : user.name = user.name
        lastName.length != 0 ? user.lastName = lastName : user.lastName = user.lastName
        email.length != 0 ? user.email = email : user.email = user.email
        pass.length != 0 ? user.pass = pass : user.pass = user.pass
        await user.save()
        res.sendStatus(204)
    }catch(error){
        res.status(500).json({message: error.message}); 
    };
};
export const getOneUser = async (req, res) => {
    try{
        const { id } = req.params;
   
        const user = await User.findByPk(id);
        user != null ?
            res.status(200).json(user.dataValues):
            res.status(204).send();  
    }catch(error){
        res.status(500).json({message: error.message}); 
    };
};