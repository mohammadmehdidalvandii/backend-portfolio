import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true , 'Username is required'],
        trim:true,
    },
    email:{
        type:String,
        required:[true , 'email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true , 'password is required'],
        minLength:8
    },
    role:{
        type:String,
        default:'ADMIN'
    }
},{
    timestamps:true
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel

