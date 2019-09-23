import express from "express";

import * as controller from "../controllers/users";

const router = express.Router();

router.post("/", controller.createUser); //Create

router.get("/", controller.allUsers); //Show all

router.get("/:UserId", controller.OneUser); //Show One

router.put("/:UserId", ); //Edit 

router.delete("/:UserId", ); //Delete

export default router;