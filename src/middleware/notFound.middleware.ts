import { ExpressHandler } from "../types/express";

const notFoundMiddleware:ExpressHandler = (req , res , next)=>{
    res.status(404).json({
        success:false,
        error:{
            status:404,
            message:`Route ${req.originalUrl} not found`
        }
    })
    next()
};

export default notFoundMiddleware
