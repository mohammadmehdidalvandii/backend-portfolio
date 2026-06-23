import mongoose from "mongoose";

 const TimeLineSchema = new mongoose.Schema({
    year:{
        type:String,
        required:[true ,'Year is required'],
        min:[2020, 'Year too old'],
    },
    role:{
        type:String,
        required:[true , 'Role is required'],
        trim:true,
    },
    company:{
        type:String,
        required:[true , 'Company is required'],
        trim:true,
    },
    detail:{
        type:String,
        required:[true , 'Detail is required'],
        trim:true,
    },
    achievement:{
        type:[String],
        required:[true ,'Achievement is required'],
    },
    isCurrent:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
});

const TimeLineModel = mongoose.model('TimeLine' , TimeLineSchema);

export default TimeLineModel