import { Router } from "express";
import { connectDB } from '../../config/db.js';
import User from './model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// encriptando a senha do usuário
const bcryptSalt = bcrypt.genSaltSync();
const {JWT_SECRET_KEY} = process.env;

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

router.get('/profile', async(req,res)=>{
    const {token} = req.cookies;
    
    await connectDB();
    // jogando a informação do userDoc para o json
    if(token){
        try {
            const userInfo = jwt.verify(token, JWT_SECRET_KEY)
            res.json(userInfo);
        } catch (error) {
            res.status(404).json(error);
        }
    }else{
        res.json(null);
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

router.post("/login",async(req,res)=>{
    await connectDB();
    const {email,password} = req.body;
    
    try {
        const userDoc = await User.findOne({ email })

        if(userDoc){
            // comparando a senha com o resto 
            // essa função vai converter o hash, e se ela pega a senha não encriptada, ela encripta e depois compara se as senhas são iguais 
            const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
            const {name,_id} = userDoc

            if (passwordCorrect) {
                const newUserObj = { name, email ,_id}
                // criptografa o token e jogar no armazenamento de cookies e qual será a palavra chave
                const token = jwt.sign(newUserObj, JWT_SECRET_KEY)
                console.log({token: token})
                res.cookie("token",token).json(newUserObj)
            }else{
                res.status(400).json("senha inválida");
            }
        }else{
            res.status(400).json("usuário não encontrado!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router