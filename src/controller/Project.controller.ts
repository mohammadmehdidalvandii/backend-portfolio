import { projectServices } from "../services/Project.services";
import {Request , Response} from 'express'

export const projectController = {
    async create(req:Request , res:Response){
        try{
            const data = req.body;
            const img = req.file?.filename;
            if(!img){
                return res.status(400).json({
                    status:'Unsuccessful',
                    message:'Image is required'
                });
            }
            const project = await projectServices.createProject({
                ...data,
                image:`https://protfolio-back.chbkn.dev/uploads/${img}`
            });

            res.status(201).json({
                status:'Successful',
                message:'Project created Successfully ✅',
                data:project
            })
        }catch(error:any){
            res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })
        }
    },
    async update(req:Request , res:Response){
        try{
             const id = String(req.params.id)
            const updateData ={
                ...req.body,
                ...(req?.file &&
                    {image:`https://protfolio-back.chbkn.dev/uploads/${req.file?.filename}`}
                )
            }
            const project = await projectServices.updateProjectById(id, updateData)
            res.status(200).json({
                status:'Successful',
                message:'Project updated successfully ✅',
                data:project
            })
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error',
            })
        }
    },
    async delete(req:Request , res:Response){
        try{
            const id = String(req.params.id)
             await projectServices.deleteProjectById(id);
            res.status(200).json({
                status:'Successful',
                message:'Delete project successfully ✅'
            })
        }catch(error:any){
            res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })
        }
    },
    async getById(req:Request , res:Response){
        try{    
             const id = String(req.params.id)
            const project = await projectServices.getProjectById(id);
            res.status(200).json({
                status:'Successful',
                message:'Get project by ID successfully ✅',
                data:project
            })
        }catch(error:any){
            res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })
        }
    },
    async getAllProjects(_req:Request , res:Response){
        try{
            const projects = await projectServices.getAllProject();
            res.status(200).json({
                status:'Successful',
                message:"Get all projects successfully ✅",
                data:projects
            })
        }catch(error:any){
            res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })            
        }
    }
}