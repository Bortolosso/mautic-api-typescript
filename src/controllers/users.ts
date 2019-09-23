import express, {Response, Request} from "express";

import {Users} from "../models/Users";

export function createUser(req: Request, res:Response){
    var err = [];

    if(err.length > 0){
        console.log("Error function in 'Create Segment !'");
        res.send({
            success: false
        });
    }else{
        try{
            const NewUser = new Users({
                platform_user_id: req.body.platform_user_id,
                mautic_user_id: req.body.mautic_user_id,
                user_email: req.body.user_email
            });
            NewUser.save().then(() => {
                console.info("User save whith success !");
                res.send({
                    success: true
                });
            }).catch((err) => {
                console.info("Error save User !");
                res.send({
                    success: false
                });
            });
        }catch(err){
            console.error("Error saving User !", err);
            res.send({
                success: false
            });
        };
    };
};

export let allUsers = (req: Request, res: Response) => {
    let allUsers = Users.find((err: any, Users: any) => {
        if(err){
            res.send("There was an error listing Users !");
            console.error(err);
        }else{
            res.send(Users);
        };
    });
};

export let OneUser = (req: Request, res: Response) => {
    let OneUser = Users.findById(req.params.UserId, (err: any, Users: any) => {
        if(err){
            res.send("There was an error listing One User(ID) !");
            console.error(err);
        }else{
            res.send(Users);
        };
    });
};