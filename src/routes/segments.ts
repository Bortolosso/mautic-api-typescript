import express from "express";

import * as controller from "../controllers/segments";

const router = express.Router();

router.post("/", controller.createSegments); //Create

router.get("/", controller.allSegments); //Show all

router.get("/:segmentId", controller.OneSegment); //Show One

router.put("/:segmentId", controller.EditSegment); //Edit 

router.delete("/:segmentId", controller.DeleteSegment); //Delete

export default router;