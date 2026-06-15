import { userRepository } from "../repositories/User.repository";
import { comparePassword, generateToken, hashedPassword } from "../utils/Auth";
import { LoginDTO, RegisterDTO } from "../validation/AuthValidation";

export const userServices = {
    async create(data:RegisterDTO){
        const {username , email , password} = data;
        const existingUser = await userRepository.findByEmail(email);
        if(existingUser) throw {status:409 , message:'User already exist ✅'};

        const hashPassword = await  hashedPassword(password);
        const newUser = await userRepository.register({username , email , password:hashPassword})

        return newUser;
    },
    async login(data:LoginDTO){
        const {email , password} = data
        const user =  await userRepository.findByEmail(email);
        if(!user) throw {status:401 , message:'Invalid email or password ❌'}

        const matchPassword = await comparePassword(password , user.password);
        if(!matchPassword) throw {status:401 , message:'Invalid email or password ❌'}

        const token = generateToken({
            _id:user._id,
        });

        return {token}
    }
}