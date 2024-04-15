import express from 'express';
import {increaseCompleteTask} from "../../controllers/task-controller.js";
const router=express.Router();

//carbonfootprint routes
router.patch('/increase',increaseCompleteTask);

export default router;