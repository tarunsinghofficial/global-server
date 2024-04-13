import User from "../models/user-model.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
    async getByEmail(userEmail) {
        try {
          const user = await User.findOne({ email: userEmail });
          if (!user) {
            throw new Error("User Not Exist");
          }
          return user;
        } catch (error) {
          console.log("Something Went Wrong In Repo Layer");
          console.log(error);
          throw error;
        }
      }

}

export default UserRepository;