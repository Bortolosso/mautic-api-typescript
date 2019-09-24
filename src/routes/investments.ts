import express from "express";

import * as controller from "../controllers/investments";

const router = express.Router();

router.post("/", controller.createInvestments); //Create

router.get("/", controller.allInvestment); //Show all

router.get("/:InvestmentId", controller.OneInvestment); //Show One

router.put("/:InvestmentId", controller.EditInvestment); //Edit 

router.delete("/:InvestmentId", controller.DeleteInvestment); //Delete

export default router;