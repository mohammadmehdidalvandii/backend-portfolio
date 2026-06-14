import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    role:{
        type:String,
        required:true,
        default:'ADMIN'
    }
},{
    timestamps:true
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel

