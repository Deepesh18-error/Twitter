const express = require('express');

const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

const app = express();

app.listen(3000, async () => {
  console.log('Server started on port 3000');
  await connect();
  console.log('Connected to the mongo db');
  
  // const tweet = await Tweet.create({
  //   content: 'Third tweet from the server without email'
  // });

  // const tweets = await Tweet.find({userEmail: 'a@b.com'});

  // const tweet = await Tweet.findById('6832d0543efb5128da5a5136');
  // // console.log(tweet);

  // tweet.userEmail = 'update@.com';
  // await tweet.save();

  const tweetRepo = new TweetRepository();
  // // const tweet = await tweetRepo.get('6832d0543efb5128da5a5136');

  // const tweet = await tweetRepo.update('6832d0543efb5128da5a5136', {content: 'Updated tweet from the Second server tweet'});

  // const tweet = await tweetRepo.create({content: 'Tweet for checking comment schema'});
  // console.log(tweet);
  // tweet.comments.push({content: 'First comment on the tweet'});
  // await tweet.save();
  // console.log(tweet);
  // console.log(tweet);

  // const tweet = await tweetRepo.create({content: 'Tweet with comment Schema'});
  // console.log(tweet);
  // const comment = await Comment.create({content: 'new comment on the tweet'});
  // tweet.comments.push(comment);
  // await tweet.save();

  // const tweet = await tweetRepo.getWithComments('68345a1be298799dbe0aa50f');

  // const tweet = await tweetRepo.getAll(0 , 3);
  // // console.log(tweet);
  // console.log(tweet[0].contentWithEmail);

  
  const tweet = await tweetRepo.create({content: 'Tweet for checking pre hooks', userEmail: 'hooks@.com'});
  console.log(tweet);

});


