class CrudRepository{
    constructor(model) {
     this.model = model;
    }
    async create(data) {
        try {
          const result = await this.model.create(data);
          return result;
        } catch (error) {
           console.log('Something Went Wrong In Crud Repo');
          console.log(error);
          throw error;
        }
      }
      async get(id) {
        try {
          const result = await this.model.findById(id);
          return result;
        } catch (error) {
          console.log('Something Went Wrong In Crud Repo');
          console.log(error);
          throw error;
        }
      }

      async getAll() {
        try {
          const tweet = await this.model.find({});
          return tweet;
        } catch (error) {
          console.log(error);
        }
      }
      
      async update(id,data) {
        try {
           const result=await this.model.findByIdAndUpdate(id,data,{new:true});
          return result;
        } catch (error) {
          console.log('Something Went Wrong In Crud Repo');
          console.log(error);
          throw error;
        }
      }

      async destroy(id) {
        try {
          await this.model.findByIdAndDelete(id);
          return "User Deleted Successfully";
        } catch (error) {
          console.log('Something Went Wrong In Crud Repo');
          console.log(error);
          throw error;
        }
      }
}

export default CrudRepository;