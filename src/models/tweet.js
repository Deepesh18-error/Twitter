import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
      max: [250 , 'Tweet content cannot exceed 250 characters']
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
      }
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
      }
    ]


}, {timestamps: true});



const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;


