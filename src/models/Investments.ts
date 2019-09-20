import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InvestmentsSchema = new Schema({
    platform_user_id:{
        type:String,
        required: false
    },
    segment_id:{
        type: String,
        required:false
    },
    user_segment_added:{
        type:String,
        required:false
    }
});

export const Investments = mongoose.model("Investments", InvestmentsSchema);
