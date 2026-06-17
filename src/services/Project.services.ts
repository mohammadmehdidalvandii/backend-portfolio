import {projectRepository} from '../repositories/Project.repository';
import { ProjectDTO } from '../types/project';

export const projectServices = {
    async createProject(data:ProjectDTO){
        if(data.title) throw{status:400 , message:'Project is exist'};
        const project = await projectRepository.create(data);
        return project;
    },
    async getProjectById(id:string){
        const project = await projectRepository.findById(id);
        if(!project) throw {status:404 , message:'Project not found'};
        return project;
    },
    async getAllProject(){
        const projects = await projectRepository.getAllProject();
        if(projects) throw {status:400 , message:'Project do not exist.'}
        return projects;
    },
    async updateProjectById(id:string ,data:Partial<ProjectDTO>){
        const project = await projectRepository.findById(id);
        if(!project) throw {status:404 , message:'Project not found'};       
        return projectRepository.update(id , data);
    },
    async deleteProjectById(id:string){
        const project = await projectRepository.findById(id);
        if(!project) throw {status:404 , message:'Project not found'}; 
        return projectRepository.delete(id);
    }
}