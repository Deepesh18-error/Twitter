import Like from '../models/like.js';
import CurdRepository from './crud-repository.js';

class LikeRepository extends CurdRepository {
    constructor() {
        super(Like);
    }

}

export default LikeRepository;
// This LikeRepository class extends the CurdRepository class, inheriting its methods for CRUD operations.