import express from 'express'; 

import { connect } from './config/database.js';

import { HashtagRepository, TweetRepository } from './repository/index.js';
import service from './services/tweet-service.js';


const app = express();

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

  let ser = new service();
  const tweet = await ser.create({
    content: 'my #coDE and #ComPILER',
  });
  console.log(tweet);
});
 

