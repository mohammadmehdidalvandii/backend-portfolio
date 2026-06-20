import { messageRepository } from "../repositories/Message.repository";
import { MessageDTO } from "../types/message";
 
export const messageServices = {
    async createMessage(data:MessageDTO){
        const message = await messageRepository.create(data);
        return message
    },
    async getMessageById(id:string){
        const message = await messageRepository.findById(id);
         if(!message) throw {status:404 , message:'Message not found'}; 
        return message
    },
    async getMessageAll(){
        const messages = await messageRepository.findAll();
        return messages
    },
    async updateMessageById(id:string){
        const message = await messageRepository.findById(id);
        if(!message) throw {status:404 , message:'Message not found'};
        return await messageRepository.update(id)
    },
    async deleteMessageById(id:string){
         const message = await messageRepository.findById(id);
        if(!message) throw {status:404 , message:'Message not found'};       
        await messageRepository.delete(id)
    }
}