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

