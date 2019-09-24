import request from "request";
import express, {Response, Request} from "express";
// import { raw } from "body-parser";

import {Investments} from "../models/Investments";
import {Users} from "../models/Users";

export function createInvestments(req: Request, res: Response){
    var err = [];

    if(err.length > 0){
        console.log("Error function in 'Create Investment !'");
        res.send({
            success: false
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
                res.send({
                    success: true
                });
                Users.findOne({platform_user_id: req.body.platform_user_id}).then(() => {
                    const url = `https://carloscarvalho:Hurst2019..@mautic.hurst.capital/api/segments/${req.body.segment_id}/contact/${req.body.user_id}/add`;

                    request.post(url, (err, body) => {
                        if(err){
                            console.error(err);
                            return;
                        }else{
                            var statusCode = res.statusCode;
                            console.log(`Status Code: ${statusCode} \n Request Successfull ;) !`);
                            console.log(`URL:${url}`);
                            // console.log(body);
                        };
                    });
                }).catch((err) => {
                    console.error("Error request to URL !", err);
                });
            }).catch((err) => {
                console.error("Error save Investment !");
                res.send({
                    success: false
                });
            });
        }catch(err){
            console.error("Error saving Investment !", err);
            res.send({
                success: false
            });
        };
    };
};

export let allInvestment = (req: Request, res: Response) => {
    let allInvestment = Investments.find((err: any, investment: any) => {
        if(err){
            res.send("There was an error listing Investments !");
            console.error(err);
        }else{
            res.send(investment);
        };
    });
};

export let OneInvestment = (req: Request, res: Response) => {
    let OneInvestment = Investments.findById(req.params.InvestmentId, (err: any, investment: any) => {
        if(err){
            res.send({
                success: false
            });
            console.error(err);
            // res.send("There was an error listing One Investment(ID) !");
        }else{
            res.send(investment);
        };
    });
};

export let EditInvestment = (req: Request, res: Response) => {
    let EditInvestment = Investments.findByIdAndUpdate(req.params.InvestmentId, req.body, (err: any, investment: any) =>{
        if(err){
            res.send({
                success: false
            });
            console.error(`There was an error updating Investment !` ,err);
            // res.send(`There was an error updating Investment !`);
        }else{
            res.send({
                success: true
            });
            console.log(`Successfully update Investment !`);
            // res.send(`Successfully update Investment !`);
        };
    });
};

export let DeleteInvestment = (req: Request, res: Response) => {
    let DeleteInvestment = Investments.findById(req.params.InvestmentId, (err: any, investment: any) =>{
        if(investment){
            Investments.deleteOne({_id:req.params.InvestmentId}).then(() => {
                res.send({
                    success: true
                });    
                console.log(`Successfully delete Investment !`);
            }).catch((err) => {
                res.send({
                    success: false
                });
                console.log(`There was an error deleting Investment !`, err);
            });
        }else{
            if(err){
                res.send({
                    success: false
                });
                console.error(`There was an error deleting Investment !`, err);
                // res.send(`There was an error deleting Investment !`);
            }else{
                res.send({
                    success: false
                });
                console.log(`ID not exists !`);
                // res.send(`Successfully delete Investment !`);
            };
        };
    });
};

/* 

export let DeleteInvestment = (req: Request, res: Response) => {
    let DeleteInvestment = Investments.findByIdAndDelete(req.params.InvestmentId, (err: any, investment: any) =>{
        if(err){
            res.send({
                success: false
            });
            console.error(`There was an error deleting Investment !`, err);
            // res.send(`There was an error deleting Investment !`);
        }else{
            res.send({
                success: true
            });
            console.log(`Successfully delete Investment !`);
            // res.send(`Successfully delete Investment !`);
        };
    });
};

*/