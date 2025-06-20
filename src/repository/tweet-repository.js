import Tweet from '../models/tweet.js';
import CurdRepository from './crud-repository.js';


class TweetRepository extends CurdRepository {
    constructor() {
        super(Tweet);
    }
  async create(tweetData) {
    try{
        const tweet = await Tweet.create(tweetData);
        return tweet;
    } catch (error) {
        console.log(error);
    }  
 } 

 
  async getWithComments(id) {
    try{
         const tweet = await Tweet.findById(id).populate({
                path: 'comments',
                populate: {
                    path: 'comments'
                }
            }).lean();
        return tweet;
    } catch (error) {
        console.log(error);
    }
}


    async getAll(offset , limit) {
        try{
            const tweets = await Tweet.find().skip(offset).limit(limit); // sort by createdAt in descending order
            return tweets;
        } catch (error) {
            console.log(error);
        }  
    } 

    async find(id){
        try{
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;
