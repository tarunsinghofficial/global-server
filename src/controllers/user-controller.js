import UserService from '../services/user-service.js';
import UserRepository from '../repository/user-repository.js';
const userService = new UserService();
const userRepository = new UserRepository();
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
    const userByEmail=await userRepository.getByEmail(req.body.email);
    const newObj={
      token:response,
      userId:userByEmail.id,
    }
    return res.status(200).json({
      message: "Successfully Signed In",
      data: newObj,
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
export const get=async(req,res)=>{
  try {
      const userId=req.body.id;
       const response=await  userService.get(userId);
       return res.status(200).json({
          message:"successfully get user by id",
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

