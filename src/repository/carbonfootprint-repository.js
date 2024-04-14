import CarbonFootprint from "../models/carbonfootprint-model.js";
import CrudRepository from "./crud-repository.js";

class CarbonFootprintRepository extends CrudRepository{
    constructor(){
        super(CarbonFootprint);
    }
    async getByUserId(userId){
        try {
            const result = await CarbonFootprint.findOne({
                userId: userId
            });
            return result;
          } catch (error) {
            console.log('Something Went Wrong In Crud Repo');
            console.log(error);
            throw error;
          }
    }
}

export default CarbonFootprintRepository;