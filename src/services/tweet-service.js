import { TweetRepository , HashtagRepository } from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extract hashtags
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title); // extract titles from the tags

        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet._id]} // add the tweet id to the tweets array
        });
        const response = await this.hashtagRepository.bulkCreate(newTags);
        console.log(response);

        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet._id); // add the tweet id to the tweets array
            tag.save(); 
        });




        /*
        TODO create hashtags and add here
        1. bulcreate hashtags
        2. filter title of hashtags based on multiple tags    
        3. how to add tweet id inside all hashtags
        */
        return tweet;
    }
}

export default TweetService;


/*

    this is my # 
*/