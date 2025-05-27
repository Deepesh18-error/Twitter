class CurdRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            throw new Error("Something went wrong in CRUD repsitory");
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw new Error("Something went wrong in CRUD repsitory");
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw new Error("Something went wrong in CRUD repsitory");
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            throw new Error("Something went wrong in CRUD repsitory");
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data , {new: true});
            return result;
        }
        catch (error) {
            throw new Error("Something went wrong in CRUD repsitory");
        }
    }

}

export default CurdRepository;