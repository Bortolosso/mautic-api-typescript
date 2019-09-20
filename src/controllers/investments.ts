import request from "request";
import express, {Response, Request} from "express";

import {Investments} from "../models/Investments";
// import { raw } from "body-parser";

export function createInvestments(req: Request, res: Response){
    var err = [];

    if(err.length > 0){
        console.log("Error function Create investment !");
        res.send({
            success: true
        });
    }else{
        try{
            const NewInvestment = new Investments({
                platform_user_id: req.body.platform_user_id,
                segment_id: req.body.segment_id,
                user_segment_added: req.body.user_segment_added
            });
            NewInvestment.save().then((investment) => {
                console.info("Investment save whith success !");
                //CALL FUNCTION
            });
        }catch(err){
            console.error("Error saving Investment !", err);
            res.send({
                success: false
            });
        };
    };
};

