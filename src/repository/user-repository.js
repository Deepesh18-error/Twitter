import User from '../models/user.js';
import CurdRepository from './crud-repository.js';

class UserRepository extends CurdRepository {
    constructor() {
        super(User);
    }
}


export default UserRepository;
// This LikeRepository class extends the CurdRepository class, inheriting its methods for CRUD operations.