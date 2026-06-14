import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio-demo';

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            console.log('Using Database connection');
            return true
        }
        const connection = await mongoose.connect(MONGO_URL);
        if(connection){
            console.log("Connected to DB successfully ✅");
            return true
        }
    }catch(error){
        console.log('Database connection error ==>' , error);
        process.exit(1)
    }
};

export {connectToDB}