import UserService from '../services/user-service.js';

const userService = new UserService();

export const create = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const response = await userService.create({
      email,
      password,
      username
    });
    return res.status(201).json({
      success: true,
      message: "Successfully Created a new User",
      data: response,
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      data: {},
      success: false,
      err: error.message
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(req.body.email, req.body.password);
    return res.status(200).json({
      message: "Successfully Signed In",
      data: response,
      success: true,
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
      data: {},
      success: false,
      err: error
    });
  }
};
export const isAuthenticated=async(req,res)=>{
  try {
      const token=req.body.jwt_token;
       const response=await  userService.isAuthenticated(token);
       return res.status(200).json({
          message:"User is authenticated and token is valid",
          data:response,
          success:true,
          err:{}
      });
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          message:"Something Went Wrong In Controller Layer",
          data:{},
          success:false,
          err:error
      });
      
  }
}