import 'dotenv/config.js'
import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

export const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Deu certo ao conectar com o banco")
    } catch (error) {
        console.error("Não deu certo ao conectar com o banco",error)
    }
}
