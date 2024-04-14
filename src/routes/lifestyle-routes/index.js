import express from 'express';
import {create} from "../../controllers/lifestyle-controller.js";
import {checkLifestyleEntry} from "../../middlewares/lifestyle-request-time-verify.js";
const router=express.Router();

//lifestyle routes
router.post('/create',checkLifestyleEntry,create);

export default router;