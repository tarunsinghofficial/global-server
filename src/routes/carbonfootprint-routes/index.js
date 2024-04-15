import express from 'express';
import {getByUserId} from "../../controllers/carbonfootprint-controller.js";
const router=express.Router();

//carbonfootprint routes
router.post('/get',getByUserId);

export default router;