import TimeLineModel from "../models/TimeLine.model";
import { TimelineDTO } from "../types/timeline";

export const timeLineRepository = {
    async create(data:TimelineDTO){
        const timeline = await TimeLineModel.create(data);
        return timeline;
    },
    async update(id:string ,data:Partial<TimelineDTO>){
        const timeline = await TimeLineModel.findOneAndUpdate({_id:id} , data ,{new:true});
        return timeline;
    },
    async delete(id:string){
        return TimeLineModel.findOneAndDelete({_id:id});
    },
    async findById(id:string){
        const timeline = await TimeLineModel.findById(id);
        return timeline;
    },
    async findAll(){
        const timelines = await TimeLineModel.find({}).sort({createdAt:-1}).lean();
        return timelines
    }
}