import {hash , compare} from 'bcryptjs';
import {sign , verify} from 'jsonwebtoken';

const SECRET_JWT = process.env.SECRET_JWT;

if(!SECRET_JWT){
    throw new Error('Secret code is not found ');
};

const generateToken = (data:Record<string ,any>)=>{
    try{
        const token = sign({data}, SECRET_JWT , {expiresIn:'2h'});
        return token
    }catch(error){
        console.log('Invalid generate token =>' , error)
    }
};

const verifyToken = (token:string)=>{
    try{
        const payload = verify(token , SECRET_JWT);
        return payload
    }catch(error){
        console.log("Invalid Verify token ==>" , error)
    }
}

const hashedPassword = async(password:string)=>{
    const hashPassword = await hash(password , 10);
    return hashPassword
};

const comparePassword = async(password:string , hashPassword:string)=>{
    const validPassword = await compare(password , hashPassword);
    return validPassword;
}

export {
    generateToken,
    verifyToken,
    hashedPassword,
    comparePassword,
}