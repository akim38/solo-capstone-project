import CommentForm from "../CommentForm/CommentForm";
import Comment from "./Comment";

import './Comments.css';

const Comments = ({ answerId, answerComments }) =>  {

    return (
        <div className="comment-section">
            <CommentForm  answerId={answerId} />
            {answerComments.map(comment => (
                <div className="comment-box" key={comment.comment}>
                    <p><ion-icon size="large" name="person-circle-outline"></ion-icon> {comment.username}</p>
                    <Comment comment={comment} />
                </div>
            ))}
        </div>
    )

}

export default Comments;
