import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    }
});

const Segments = mongoose.model("Segments", SegmentsSchema);

module.exports = Segments;