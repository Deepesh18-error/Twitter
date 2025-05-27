import Like from '../models/like.js';
import CurdRepository from './crud-repository.js';

class LikeRepository extends CurdRepository {
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data){
        try{
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            throw new Error("Something went wrong in LikeRepository");
        }
    }

}

export default LikeRepository;
// This LikeRepository class extends the CurdRepository class, inheriting its methods for CRUD operations.