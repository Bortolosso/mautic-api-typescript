import mongoose from "mongoose";

const Schema = mongoose.Schema;
const BuildModel = mongoose.model;

const UsersSchema =  new Schema({
    platform_user_id:{
        type:String,
        required: false
    },
    mautic_user_id:{
        type:String,
        required:false
    },
    user_email:{
        type: String,
        required:false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export const Users = BuildModel("Users", UsersSchema);