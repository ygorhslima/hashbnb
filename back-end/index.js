import express from 'express';
import UserRoutes from './domains/users/routes.js';
import cors from 'cors'

const app = express();
const {PORT} = process.env;

app.use(express.json());
app.use(cors());
app.use('/users',UserRoutes);

app.listen(PORT, ()=>{
    console.log(`servidor rodando no http://localhost:${PORT}`);
});