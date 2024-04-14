import CarbonFootprint from "../models/carbonfootprint-model.js";
import CrudRepository from "./crud-repository.js";

class CarbonFootprintRepository extends CrudRepository{
    constructor(){
        super(CarbonFootprint);
    }
}

export default CarbonFootprintRepository;