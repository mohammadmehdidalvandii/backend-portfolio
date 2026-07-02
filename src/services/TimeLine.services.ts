import { timeLineRepository } from "../repositories/TimeLine.repository";
import { TimelineDTO } from "../types/timeline";

export const timelineServices = {
    async createTimeline(data:TimelineDTO){
        const timeline = await timeLineRepository.create(data);
        return timeline
    },
    async getTimelineById(id:string){
        const timeline = await timeLineRepository.findById(id);
        if(!timeline) throw {status:404 , message:'Timeline not found'}
        return timeline
    },
    async getTimelineAll(){
        const timelines = await timeLineRepository.findAll();
        if(!timelines) throw {status:400 , message:'timelines do not exist.'}
        return timelines;
    },
    async updateTimelineById(id:string , data:Partial<TimelineDTO>){
        const timeline = await timeLineRepository.findById(id);
        if(!timeline) throw {status:404 , message:'Timeline not found'}
        return await timeLineRepository.update(id , data)
    },
    async deleteTimelineById(id:string){
        const timeline = await timeLineRepository.findById(id);
        if(!timeline) throw {status:404 , message:'Timeline not found'}
        await timeLineRepository.delete(id)
    }
}