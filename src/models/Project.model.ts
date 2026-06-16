import mongoose from 'mongoose';


const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Name is required'],
        trim:true
    },
    title:{
        type:String,
        required:[true , 'Tile is required'],
        trim:true,
    },
    stacks:{
        type:[String],
        required:[true , 'Stacks are required'],
    },
    image:{
        type:String,
        required:[true , 'Image is required'],
    },
    demoLink:{
        type:String,
        required:[true , 'Demo link is required '],
        match: [/^https?:\/\/.+/, 'Invalid URL format']
    },
    githubLink:{
        type:String,
        required:[true , 'Github link is required'],
        match: [/^https?:\/\/.+/, 'Invalid URL format']
    },
    year:{
        type:Number,
        required:[true , 'Year is required'],
        min:[2020 , 'year too old']
    },
    role:{
        type:String,
        required:[true , 'Role is required'],
    },
    features:{
        type:[String],
        required:[true , 'Features are required'],
    },
    shortDescription:{
        type:String,
        required:[true , 'Short Description is required']
    },
    longDescription:{
        type:String,
        required:[true , 'Long Description is required']
    }
},{
    timestamps:true
});

const projectModel = mongoose.model('Project' , ProjectSchema);

export default projectModel