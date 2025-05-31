import CurdRepository from "./crud-repository.js";

import Comment from "../models/comment.js";

class CommentRepository extends CurdRepository{
    constructor(){
        super(Comment);
    }
}

export default CommentRepository;