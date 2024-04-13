import express from 'express';
import userRoutes from './user-routes/index.js';

const router=express.Router();

router.use('/user',userRoutes);

export default router;