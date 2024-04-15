import UserTask from "../models/task-model.js";
import CrudRepository from "./crud-repository.js";

class UserTaskRepository extends CrudRepository{
    constructor(){
        super(UserTask);
    }
    async  increaseTaskCompletion(userId) {
        try {
          // Find the user task document by userId
          const userTask = await UserTask.findOne({ userId:userId });
      
          // If user task document doesn't exist, return an error or handle it accordingly
          if (!userTask) {
            throw new Error('User task not found');
          }
      
          // Increase the tasksCompleted count by one
          userTask.tasksCompleted += 1;
      
          // Save the updated user task document
          await userTask.save();
      
          return true;
        } catch (error) {
          // Handle any errors
          console.error('Error increasing task completion:', error);
          throw error; // Rethrow the error for the calling function to handle
        }
      }
}

export default UserTaskRepository;