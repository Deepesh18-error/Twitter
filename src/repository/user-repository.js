import User from '../models/user.js';
import CurdRepository from './crud-repository.js';

class UserRepository extends CurdRepository {
    constructor() {
        super(User);
    }

        async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
}



export default UserRepository;
// This LikeRepository class extends the CurdRepository class, inheriting its methods for CRUD operations.