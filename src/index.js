import express from 'express'; 
import bodyParser from 'body-parser';

import { connect } from './config/database.js';

import { HashtagRepository, TweetRepository , UserRepository , LikeRepository} from './repository/index.js';
import service from './services/tweet-service.js';
import LikeService from './services/like-service.js';

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(3000, async () => {
  console.log('Server started on port 3000');
  await connect();
  console.log('Connected to the mongo db');

  // let repo = new HashtagRepository();
  // await repo.bulkCreate([
  //   {
  //      title: 'C++',
  //      tweets: []
  //   },
  //   {
  //       title: 'Backend',
  //       tweets: []
  //   },
  //   {
  //       title: 'Frontend',
  //       tweets: []
  //   },
  //   {
  //       title: 'Codeforces',
  //       tweets: []
  //   }
  //   ]);
  // const response = await repo.findByName(['C++', 'Backend']);
  // console.log(response);

  // let service = new TweetService();
  // const tweet = await service.create({
  //   content: 'I am #lost and #failing to give my #best in #Codeforces',
  // })
  // console.log(tweet);

  // let ser = new service();
  // const tweet = await ser.create({
  //   content: 'my #coDE and #ComPILER',
  // });
  // console.log(tweet);


  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();

  const tweet = await tweetRepo.getAll(0 , 10);

  const user = await userRepo.getAll();

  const likeService = new LikeService();
  await likeService.toggleLike(tweet[0]._id, 'Tweet', user[0].id)


});
 

