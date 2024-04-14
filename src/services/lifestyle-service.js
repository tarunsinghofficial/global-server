import LifestyleRepository from "../repository/lifestyle-repository.js";

class LifestyleService{
  constructor()
  {
    this.lifestyleRepository=new LifestyleRepository();
  }
  async create(data) {
    try {
      const user = await this.lifestyleRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
      console.log(error);
      throw { error };
    }
  }
  
}

export default LifestyleService;