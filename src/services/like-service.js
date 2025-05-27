import { LikeRepository , TweetRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId , modelType , userID) { //api/v1/likes/toggle>id=model&type=tweet
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId);
        } else if(modelType == 'Comment'){
            // var likeable = await this.tweetRepository.getWithComments(modelId);
        } else{
            throw new Error("Invalid model type");
        }
        
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userID,
            likeable: modelId,
            onModel: modelType
        });
        if(exists){
            likeable.likes.pull(exists._id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;

        } else {
            const newLike = await this.likeRepository.create({
                user: userID,
                likeable: modelId,
                onModel: modelType
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;