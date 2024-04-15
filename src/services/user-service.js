import jwt from 'jsonwebtoken';
import UserRepository from '../repository/user-repository.js';
import CarbonFootprintRepository from '../repository/carbonfootprint-repository.js';
import { JWT_KEY } from '../config/server-config.js';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.carbonFootprintRepository = new CarbonFootprintRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      // const newJWT = this.createToken({ email: user.email, id: user.id });
      // return newJWT;
      // return user;
      //console.log("", user);
      const newJWT =  this.createToken({ email: data.email, id: data.id });
      //console.log("", newJWT);
      //const username
     // const userWithToken = { ...user, jwtToken: newJWT };// Add JWT token to the user object
     const userWithToken = {
      email: user.email,
      username: user.username,
      _id: user._id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      __v: user.__v,
      jwtToken: newJWT
    };
      //console.log("", userWithToken);
      //console.log("", user);
      return userWithToken;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
      console.log(error);
      throw { error };
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: '7d' });
      return result;
    } catch (error) {
      console.log("Something Went Wrong In Token Creation");
      console.log(error);
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something Went Wrong In Token Validation");
      console.log(error);
      throw { error };
    }
  }

  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getByEmail(email);
      const passwordMatch = this.checkPass(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("Password Doesn't match");
        throw "Incorrect password";
      }
      const newJWT = this.createToken({ email: user.email, id: user.id });
      return newJWT;
    } catch (error) {
      if (error.name === 'AttributeNotFound') {
        throw error;
      }
      console.log("Something Went Wrong In The SignIn Process");
      console.log(error);
      throw error;
    }
  }

  checkPass(userInputPlainPass, encryptedPass) {
    try {
      return bcrypt.compareSync(userInputPlainPass, encryptedPass);
    } catch (error) {
      console.log("Something Went Wrong In Password Checking");
      console.log(error);
      throw { error };
    }
  }
  async isAuthenticated(token)
  {
      try {
          const response=this.verifyToken(token);
          if(!response)
          {
              throw{error:"Invalid Token"};
          }
          const user= await this.userRepository.get(response.id);
          if(!user)
          {
              throw{error:"No user with this token exists!"};
          }
          return user.id;
      } catch (error) {
          console.log("Something Went wrong in the authentication");
          console.log(error);
          throw{error};
      }
  }
  async get(id)
  {
    try {
      const user=await this.userRepository.get(id);
      //const footprint=await this.carbonFootprintRepository.get(id);
      const newJson = {
        email: user.email,
        username: user.username
      };
      return newJson;
    } catch (error) {
      console.log("Something Went wrong");
      console.log(error);
      throw{error};
    }
  }
  async isAuthenticatedUserAuth(token)
  {
      try {
          const response=this.verifyToken(token);
          if(!response)
          {
              //throw{error:"Invalid Token"};
              return null;
          }
          const user= await this.userRepository.get(response.id);
          if(!user)
          {
            //  throw{error:"No user with this token exists!"};
            return null;
          }
          return user.id;
      } catch (error) {
          // console.log("Something Went wrong in the authentication");
          // console.log(error);
          // throw{error};
          return null;
      }
  }
}

export default UserService;