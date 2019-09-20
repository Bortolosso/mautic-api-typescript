import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;