import Lifestyle from "../models/lifestyle-model.js";
import CrudRepository from "./crud-repository.js";

class LifestyleRepository extends CrudRepository{
    constructor(){
        super(Lifestyle);
    }
}

export default LifestyleRepository;