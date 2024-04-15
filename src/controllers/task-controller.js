import UserTaskService from '../services/task-service.js';

const taskService = new UserTaskService();

export const increaseCompleteTask = async (req, res) => {
    try {
      const { userId} = req.body;
      const response = await taskService.increaseCompleteTask(userId);
      return res.status(201).json({
        success: true,
        message: "Successfully Updated the task count",
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