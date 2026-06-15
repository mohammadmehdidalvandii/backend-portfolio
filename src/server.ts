import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser'
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'
import { connectToDB } from './config/db';
import notFoundMiddleware from './middleware/notFound.middleware';
import UserRouter from './routes/User.router';

const app = express();


// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({credentials:true ,  origin:'http://localhost:3000'}));

// Connection To Database
connectToDB();

// Routes
app.use('/api/user' , UserRouter);


// Not found route
app.use(notFoundMiddleware)
const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`Server Running On http://localhost:${PORT}`)
})