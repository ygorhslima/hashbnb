import { Router } from "express";
import { connectDB } from '../../config/db.js';
import User from './model.js';
import bcrypt from 'bcrypt';

// encriptando a senha do usuário
const bcryptSalt = bcrypt.genSaltSync();

const router = Router();
router.get('/', async(req,res)=>{
    // conectando ao banco de dados
    await connectDB();
    // jogando a informação do userDoc para o json
    try {
        // encontrando no collection de user,
        const userDoc = await User.find();
        res.json(userDoc)
    } catch (error) {
        res.status(404).json(error);
    }
});

router.post("/",async(req,res)=>{
    await connectDB();
    const {name,email,password} = req.body;
    // cria um hash da senha 
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt)
    try {
        // fazendo um teste para criar um novo usuário para o banco de dados
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword
        });

        res.json(newUserDoc);
    } catch (error) {
        res.status(404).json(error);
    }
})

export default router