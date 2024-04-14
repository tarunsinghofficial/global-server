import CarbonFootprintService from "../services/carbonfootprint-service.js";
const carbonfootprintService = new CarbonFootprintService();
export const getByUserId = async (req, res) => {
    try {
      const { userId} = req.body;
      const response = await carbonfootprintService.getByUserId(userId);
      return res.status(201).json({
        success: true,
        message: "Successfully fetched the carbon footprint of user ",
        data: response.carbonFootprint,
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