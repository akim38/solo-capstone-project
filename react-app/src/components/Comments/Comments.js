import CommentForm from "../CommentForm/CommentForm";
import Comment from "./Comment";

import './Comments.css';

const Comments = ({ answerId, answerComments }) =>  {

    return (
        <div className="comment-section">
            <CommentForm answerId={answerId} />
            {answerComments.map(comment => (
                <div className="comment-box" key={comment.comment}>
                    <h5>{comment.username}</h5>
                    <Comment comment={comment} />
                </div>
            ))}
        </div>
    )

}

export default Comments;
