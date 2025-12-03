import {Schema, model} from "mongoose";

const UserSchema = new Schema({
    name:String,
    email:{ type: String, unique: true },
    password:String,
});

// vai exportar o modelo para
// quando estiver instanciando esse modelo vai mexer no collections do mongoDB 
export default model("User",UserSchema);