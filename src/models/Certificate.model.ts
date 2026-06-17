import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , 'title is required'],
        trim:true,
    },
    issuer:{
        type:String,
        required:[true , 'issuer is required'],
        trim:true,
    },
    year:{
        type:Number,
        required:[true , 'year is required'],
        min:[2020 , 'year too old']
    },
    credentialId:{
        type:String,
        required:[true , 'credential ID is required'],
        trim:true,
    },
    image:{
        type:String
    },
    verificationLink:{
        type:String,
        required:[true , 'verificationLink is required'],
        trim:true
    }
},{
    timestamps:true
});

const CertificateModel = mongoose.model('Certificate', CertificateSchema);

export default CertificateModel