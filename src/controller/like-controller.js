import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async(req , res) => {
    try{
        const response = await likeService.toggleLike(
        req.query.modelId,      // should be a valid ObjectId
        req.query.modelType,    // should be 'Tweet' or 'Comment'
        req.body.user           // should be a valid ObjectId
    );
        return res.status(200).json({
            succes: true,
            data: response,
            err: {},
            message: 'Successfully toggles like'
        })
    } catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: error
        })
    }
}