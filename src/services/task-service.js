import UserTaskRepository from "../repository/usertask-repository.js";

class UserTaskService{
  constructor()
  {
    this.userTaskRepository=new UserTaskRepository();
  }
  async increaseCompleteTask(data) {
    try {
      const  response= await this.userTaskRepository.increaseTaskCompletion(data);
      return response;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
      console.log(error);
      throw { error };
    }
  }
  
}

export default UserTaskService;