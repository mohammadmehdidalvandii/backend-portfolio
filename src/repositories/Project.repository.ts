import ProjectModel from '../models/Project.model';
import { ProjectDTO } from '../types/project';

export const projectRepository = {
    async create(data:ProjectDTO){
        return ProjectModel.create(data)
    },
    async findById(id:string){
        return ProjectModel.findById(id);
    },
    async update(id:string , data:ProjectDTO){
        return ProjectModel.findOneAndUpdate({_id:id} , data , {new:true})
    },
    async delete(id:string){
        return ProjectModel.findOneAndDelete({_id:id})
    },
    async getAllProject(){
        return ProjectModel.find({}).sort({createdAt:-1}).lean()
    }
}