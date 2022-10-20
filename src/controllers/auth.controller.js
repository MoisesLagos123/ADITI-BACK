import { User } from "../models/user.js";
import { authConfig } from '../config/Config.js';
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs';

export const signIn = async (req, res) => {
    const {email, pass} = req.body;
    User.findOne({ 
        where: { email }
    }).then(user => {
        if(!user){
            res.status(401).json({msg: 'El Usuario no existe'})
        }else{
            if(bcrypt.compareSync(pass, user.pass)){
                let token = jwt.sign({user:user}, authConfig.secret,{
                    expiresIn: authConfig.expires
                })
                res.json({
                    user:user,
                    token: token
                })
            }else(res.status(400).json({msg:'Contraseña invalida'}))
        }        
    }).catch (err=> {res.status(500).json(err.message)})
};

