import mongoose from "mongoose";

const Schema = mongoose.Schema;
const BuildModel = mongoose.model;

const SegmentsSchema = new Schema({
    mautic_segment_id:{
        type:String,
        required:false
    },
    platform_equity_id:{
        type:String,
        required:false
    },
    platform_step_id:{
        type:String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

export const Segments = BuildModel("Segments", SegmentsSchema);
