const Tweet = require('../models/tweet');

class TweetRepository {
  async create(tweetData) {
    try{
        const tweet = await Tweet.create(tweetData);
        return tweet;
    } catch (error) {
        console.log(error);
    }  
 } 

  async get(id) {
    try{
        const tweet = await Tweet.findById(id);
        return tweet;
    } catch (error) {
        console.log(error);
    }  
 } 
 
  async getWithComments(id) {
    try{
        const tweet = await Tweet.findById(id).populate({path: 'comments'}); // populate will replace the comment id with the actual comment object
        return tweet;
    } catch (error) {
        console.log(error);
    }
}

  async update(tweetId , data ) {
    try{
        const tweet = await Tweet.findByIdAndUpdate(tweetId , data , {new: true});  // new: true returns the updated document last recent update NOT old one
        return tweet;
    } catch (error) {
        console.log(error);
    }  
 } 

  async destroy(id) {
    try{
        const tweet = await Tweet.findByIdAndRemove(id);
        return tweet;
    } catch (error) {
        console.log(error);
    }  
 } 
}


module.exports = TweetRepository;
