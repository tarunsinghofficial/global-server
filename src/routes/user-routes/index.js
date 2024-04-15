import express from 'express';
import {create,signIn,isAuthenticated,get} from "../../controllers/user-controller.js";
import {validateSignUpUserAuth,validateSignInUserAuth} from '../../middlewares/auth-request-validators.js'; 
const router=express.Router();

//user routes
router.post('/signup',validateSignUpUserAuth,create);
router.post('/signin',validateSignInUserAuth,signIn);
router.get('/isAuthenticated',isAuthenticated);
router.post('/get',get);
export default router;