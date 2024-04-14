import CarbonFootprintRepository from "../repository/carbonfootprint-repository.js";

class CarbonFootprintService{
  constructor()
  {
    this.carbonFootprintRepository=new CarbonFootprintRepository();
  }
  async getByUserId(data) {
    try {
      const carbonfootprint = await this.carbonFootprintRepository.getByUserId(data);
      return carbonfootprint;
    } catch (error) {
      console.log("Something Went Wrong In Service Layer");
      console.log(error);
      throw { error };
    }
  }
  
}

export default CarbonFootprintService;