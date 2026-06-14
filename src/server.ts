import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './config/db';


const app = express();

dotenv.config();


// Connection To Database
connectToDB();

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`Server Running On http://localhost:${PORT}`)
})