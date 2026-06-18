import CertificateModel from "../models/Certificate.model";
import { CertificateDTO } from "../types/certificate";

export const certificateRepository = {
    async create(data:CertificateDTO){
        const certificate = await CertificateModel.create(data);
        return certificate;
    },
    async update(id:string , data:Partial<CertificateDTO>){
        const certificate = await CertificateModel.findOneAndUpdate({_id:id} , data , {new:true});
        return certificate;
    },
    async delete(id:string){
        return CertificateModel.findOneAndDelete({_id:id});
    },
    async getById(id:string){
        const certificate = await CertificateModel.findById(id);
        return certificate;
    },
    async getAllCertificates(){
        const certificates = await CertificateModel.find({}).sort({createdAt:-1}).lean();
        return certificates;
    }
}