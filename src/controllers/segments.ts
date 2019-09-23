import express, {Response, Request} from "express";

import {Segments} from "../models/Segments";

export function createSegments(req: Request, res:Response){
    var err = [];

    if(err.length > 0){
        console.log("Error function in 'Create Segment !'");
        res.send({
            success: false
        });
    }else{
        try{
            const NewSegment = new Segments({
                mautic_segment_id: req.body.mautic_segment_id,
                platform_equity_id: req.body.platform_equity_id,
                platform_step_id: req.body.platform_step_id
            });
            NewSegment.save().then(() => {
                console.info("Segment save whith success !");
                res.send({
                    success: true
                });
            }).catch((err) => {
                console.info("Error save Segment !");
                res.send({
                    success: false
                });
            });
        }catch(err){
            console.error("Error saving Segment !", err);
            res.send({
                success: false
            });
        }
    };
};

export let allSegments = (req: Request, res: Response) => {
    let allSegments = Segments.find((err: any, Segments: any) => {
        if(err){
            res.send("There was an error listing Segments !");
            console.error(err);
        }else{
            res.send(Segments);
        };
    });
};

export let OneSegment = (req: Request, res: Response) => {
    let OneSegment = Segments.findById(req.params.segmentId, (err: any, Segments: any) => {
        if(err){
            res.send("There was an error listing One Segment(ID) !");
            console.error(err);
        }else{
            res.send(Segments);
        };
    });
};