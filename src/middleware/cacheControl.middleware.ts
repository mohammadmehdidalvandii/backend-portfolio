import {Request , Response , NextFunction} from 'express';

export const setCacheHeaders =(
    maxAge: number,
    isPrivate: boolean = false
)=>{
    return (_req:Request , res:Response , next:NextFunction)=>{
        const visibility = isPrivate ? 'private' : 'public';
        res.set('Cache-Control',`${visibility} ,  max-age=${maxAge}`)
        next()
    }
}

export const noCache = (_req:Request , res:Response , next:NextFunction)=>{
    res.set('Cache-Control','no-cache , no-store ,  must-revalidate');
    next()
}