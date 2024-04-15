import LifestyleService from "../services/lifestyle-service.js";

const lifestyleService=new LifestyleService();

export const create = async (req, res) => {
    try {
      const { userId, eatingHabits, garbageBucketSize, numberOfBuckets, carDistance,
         bikeDistance,carpoolingFrequency, publicTransportDistance } = req.body;
      const response = await lifestyleService.create({
        userId, eatingHabits, garbageBucketSize, numberOfBuckets, carDistance,
        bikeDistance,carpoolingFrequency, publicTransportDistance 
      });
      return res.status(201).json({
        success: true,
        message: "Successfully Created new lifestyle",
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
  export const get = async (req, res) => {
    try {
      const { userId} = req.body;
      const response = await lifestyleService.getOne(userId);
      return res.status(201).json({
        success: true,
        message: "Successfully get new lifestyle",
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