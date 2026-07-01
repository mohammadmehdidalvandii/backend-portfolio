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
import ProjectRouter from './routes/Project.router';
import CertificateRouter from './routes/Certificate.router';
import TimelineRouter from './routes/TimeLine.router';
import MessageRouter from './routes/Message.router';
import path from 'path';

const app = express();

const uploadsDir  = path.join(process.cwd(), 'uploads')

app.use('/uploads' , express.static(uploadsDir))

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({credentials:true ,  origin:[
    "http://localhost:5173",
    "https://web-dalvandi.ir",
    "https://www.web-dalvandi.ir",
    "https://api.web-dalvandi.ir"
]}));

// Connection To Database
connectToDB();

// Routes
app.use('/api/user' , UserRouter);
app.use('/api/projects', ProjectRouter);
app.use('/api/certificate', CertificateRouter);
app.use('/api/timeline' , TimelineRouter);
app.use('/api/message' , MessageRouter);

// Not found route
app.use(notFoundMiddleware)
const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`Server Running On ${PORT}`)
})