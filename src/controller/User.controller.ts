import { userServices } from "../services/User.services";
import { Request , Response } from "express";

export const userController = {
    async register(req:Request , res:Response){
        try{
            const {username , email , password} = req.body;
            if(!username || !email || !password){
            return res.status(400).json({
                    status:'Unsuccessful',
                    message:'All Fields are required'
                })
            };

            const result = await userServices.create({username , email , password});
            res.status(201).json({
                status:'successful',
                message:'Created User successfully ✅',
                data:result
            })

        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })
        }
    },
    async login(req:Request , res:Response){
        try{
            const {email , password} = req.body;
            if(!email || !password){
                return res.status(400).json({
                    status:'Unsuccessful',
                    message:'All fields are required'
                })
            }
            const {token} = await userServices.login({email , password});
        
            res.cookie('token' , token,{
                httpOnly:true,
                sameSite:'none',
                secure:true,
                path:'/',
                maxAge: 60 * 60 * 1000
            });

            res.status(200).json({
                status:'successful',
                message:'Login Successfully ✅',
                data:token
            })

        }catch(error:any){
             res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            }) 
        }
    }
}