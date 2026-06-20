import MessageModel from "../models/Message.model";
import { MessageDTO } from "../types/message";

export const messageRepository = {
    async create(data:MessageDTO){
        const message = await MessageModel.create(data);
        return message
    },
    async update(id:string){
        const message = await MessageModel.findOneAndUpdate({_id:id} , {isRead:true} ,{new:true});
        return message
    },
    async delete(id:string){
        return await MessageModel.findOneAndDelete({_id:id});
    },
    async findById(id:string){
        const message = await  MessageModel.findById(id).lean();
        return message
    },
    async findAll(){
        const messages = await MessageModel.find({}).sort({createdAt:-1}).lean();
        return messages
    }
}