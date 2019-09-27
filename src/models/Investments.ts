import mongoose from "mongoose";

const Schema = mongoose.Schema;
const BuildModel = mongoose.model;

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
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export const Investments = BuildModel("Investments", InvestmentsSchema);
