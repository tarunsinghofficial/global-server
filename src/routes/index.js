import express from 'express';
import userRoutes from './user-routes/index.js';
import lifestyleRoutes from "./lifestyle-routes/index.js";

const router=express.Router();

router.use('/user',userRoutes);

router.use('/lifestyle',lifestyleRoutes);


export default router;