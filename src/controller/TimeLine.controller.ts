import { timelineServices } from "../services/TimeLine.services";
import {Request , Response} from 'express';

export const timelineController = {
    async create(req:Request , res:Response){
        try{
            const data = req.body
            const timeline =  await timelineServices.createTimeline(data);
            res.status(201).json({
                status:'Successful',
                message:'Timeline created successfully ✅',
                data:timeline
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
            const timeline = await timelineServices.updateTimelineById(id , updateData);
            res.status(200).json({
                status:'Successful',
                message:'Timeline updated successfully ✅',
                data:timeline
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
            await timelineServices.deleteTimelineById(id);
            res.status(200).json({
                status:'Successful',
                message:'Delete Timeline successfully ✅'
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
            const timeline = await timelineServices.getTimelineById(id);
            res.status(200).json({
                status:'Successful',
                message:'Get timeline by id successfully ✅',
                data:timeline
            })
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })
        }
    },
    async getAllTimelines(_req:Request , res:Response){
        try{
            const timelines = await timelineServices.getTimelineAll();
            res.status(200).json({
                status:'Successful',
                message:'Get all timelines successfully ✅',
                data:timelines
            })
        }catch(error:any){
        res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
        })
        }
    }
}