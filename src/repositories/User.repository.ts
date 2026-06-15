import UserModel from '../models/Users.model';
import { RegisterDTO } from '../validation/AuthValidation';

export const userRepository = {
    async register(data:RegisterDTO){
        return UserModel.create(data);
    },
    async findByEmail(email:string){
        return UserModel.findOne({email}).select('-password');
    },
    async findById(id:string){
        return UserModel.findById(id);
    }
}