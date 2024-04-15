import Lifestyle from "../models/lifestyle-model.js";
import CrudRepository from "./crud-repository.js";

class LifestyleRepository extends CrudRepository{
    constructor(){
        super(Lifestyle);
    }
    async getOne(userId){
        try {
            const response=await Lifestyle.findOne({userId:userId});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
}

export default LifestyleRepository;