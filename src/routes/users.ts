import express from "express";

import * as controller from "../controllers/users";

const router = express.Router();

router.post("/", controller.createUser); //Create

router.get("/", controller.allUsers); //Show all

router.get("/:UserId", controller.OneUser); //Show One

router.put("/:UserId", controller.EditUser); //Edit 

router.delete("/:UserId", controller.DeleteUser); //Delete

export default router;