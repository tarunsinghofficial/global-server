 import UserService from "../services/user-service.js";
 const userService = new UserService();
 export const validateSignInUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password)
    {
        return res.status(400).json({
            success:false,
            data:{},
            message:"Something Went Wrong",
            err:"Email or Password Missing in the request"
        })

    }
    next();
}
export const validateSignUpUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password || !req.body.username)
    {
        return res.status(400).json({
            success:false,
            data:{},
            message:"Something Went Wrong",
            err:"Email or Password or username Missing in the request"
        })

    }
    next();
}

export const isAuthenticatedUserAuth=async (req,res,next)=>{
       const response=await userService.isAuthenticatedUserAuth(req.body.jwt_token);
       console.log("",req.body.jwt_token);
       console.log("",response);
      if(!response)
      {
        return res.status(400).json({
            success:false,
            data:{},
            message:"Something Went Wrong",
            err:"Token Not Valid or User Not present"
        });
      }
      next();

}