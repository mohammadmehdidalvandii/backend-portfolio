import {verifyToken} from '../utils/Auth';
import { ExpressHandler } from "../types/express";

const authMiddleware:ExpressHandler = (req , res , next)=>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({
            status:'Unsuccessful',
            message:'No token provided'
        });
    }
    if(!token.startsWith('Bearer')){
        return res.status(401).json({
            status:'Unsuccessful',
            message:'Invalid token format'
        })
    }
    const tokenWithoutBearer = token.split(' ')[1];
    const decode = verifyToken(tokenWithoutBearer);
    if(!decode){
        return res.status(401).json({
            status:'Unsuccessful',
            message:'Invalid or expired token'
        })
    };

    next()
}

export default authMiddleware