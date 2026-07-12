import { certificateServices } from "../services/Certificate.services";
import { Request , Response } from "express";

export const certificateController = {
    async create(req:Request , res:Response){
        try{
            const data = req.body;
            const img = req.file?.filename;
            if(!img){
                return res.status(400).json({
                    status:'Unsuccessful',
                    message:'Image is required',
                });
            };
            const certificate = await certificateServices.createCertificate({
                ...data,
                image:`https://protfolio-back.chbkn.dev/uploads/${img}`
            });

            res.status(201).json({
                status:'Successful',
                message:'Certificate created successfully ✅',
                data:certificate,
            });
        }catch(error:any){
            res.status(error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error',
            })
        }
    },
    async update(req:Request , res:Response){
        try{
            const id = String(req.params.id);
            const updateData = {
                ...req.body,
                ...(req?.file && {image:`https://protfolio-back.chbkn.dev/uploads/${req.file?.filename}`})
            }

            const certificate = await certificateServices.updateCertificateById(id , updateData);
            res.status(200).json({
                status:'Successful',
                message:'Certificate updated successfully ✅',
                data:certificate
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
            const id = String(req.params.id);
            await certificateServices.deleteCertificateById(id);
            res.status(200).json({
                status:'Successful',
                message:'Delete certificate successfully ✅'
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
            const id = String(req.params.id);
            const certificate = await certificateServices.getCertificateById(id);
            res.status(200).json({
                status:'Successful',
                message:'Get certificate by ID successfully ✅',
                data:certificate,
            })
        }catch(error:any){
            res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })            
        }
    },
    async getAll(_req:Request , res:Response){
        try{
         const certificates = await certificateServices.getAllCertificates();
        res.status(200).json({
            status:'Successful',
            message:'Get all certificates successfully ✅',
            data:certificates
        })
        }catch(error:any){
            res.status( error.status || 500).json({
                status:'Unsuccessful',
                message:error.message || 'Internal Server Error'
            })               
        }
    }
}