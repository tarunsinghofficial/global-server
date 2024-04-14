import express from 'express';
import userRoutes from './user-routes/index.js';
import lifestyleRoutes from "./lifestyle-routes/index.js";
import carbonFootprintRoutes from "./carbonfootprint-routes/index.js";
const router=express.Router();

router.use('/user',userRoutes);

router.use('/lifestyle',lifestyleRoutes);

router.use('/carbonfootprint',carbonFootprintRoutes);

export default router;