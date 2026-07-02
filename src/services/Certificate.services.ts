import { certificateRepository } from "../repositories/Certificate.repository";
import { CertificateDTO } from "../types/certificate";


export const certificateServices = {
    async createCertificate(data:CertificateDTO){
        const certificate = await certificateRepository.create(data);
        return certificate
    },
    async getCertificateById(id:string){
        const certificate = await certificateRepository.getById(id);
        if(!certificate) throw {status:404 , message:'Certificate not found'}
        return certificate
    },
    async getAllCertificates(){
        const certificates =  await certificateRepository.getAll();
        return certificates
    },
    async updateCertificateById(id:string , data:Partial<CertificateDTO>){
        const certificate = await certificateRepository.getById(id);
        if(!certificate) throw {status:404 , message:"Certificate not found"}
        return await certificateRepository.update(id , data);
    },
    async deleteCertificateById(id:string){
        const certificate = await certificateRepository.getById(id);
        if(!certificate) throw {status:404 , message:"Certificate not found"}      
        await certificateRepository.delete(id)  
    }
}