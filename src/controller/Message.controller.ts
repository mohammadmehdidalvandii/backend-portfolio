import { messageServices } from "../services/Message.services"; 
import {Request , Response} from 'express';

export const messageController = {
    async create(req:Request , res:Response){
        try{
            const data = req.body;
            const message = await messageServices.createMessage(data);
            res.status(201).json({
                status:'Successful',
                message:'Message created successfully ✅',
                data:message
            })
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })
        }
    },
    async update(req:Request , res:Response){
        try{
            const id = String(req.params.id);
            const updateData = {
                ...req.body
            };
            const message = await messageServices.updateMessageById(id , updateData )
            res.status(200).json({
                status:'Successful',
                message:'Message updated successfully ✅',
                data:message
            })
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })            
        }
    },
    async delete(req:Request , res:Response){
        try{
            const id = String(req.params.id);
            await messageServices.deleteMessageById(id);
            res.status(200).json({
                status:'Successful',
                message:'Delete message successfully ✅'
            })
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })                
        }
    },
    async getById(req:Request , res:Response){
        try{
        const id = String(req.params.id);
        const message = await messageServices.getMessageById(id)
        res.status(200).json({
            status:'Successful',
            message:'Get message by id successfully ✅',
            data:message
        })
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })              
        }
    },
    async getAll(_req:Request , res:Response){
        try{
            const messages = await messageServices.getMessageAll();
            res.status(200).json({
                status:'Successful',
                message:'Get all messages successfully ✅',
                data:messages
            })
        }catch(error:any){
             res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })  
        }
    }
}