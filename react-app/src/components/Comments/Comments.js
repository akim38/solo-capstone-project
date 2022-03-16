import { useSelector } from "react-redux";
import CommentForm from "../CommentForm/CommentForm";
import DeleteComment from "./DeleteComment";

const Comments = ({ answerId, answerComments }) =>  {
    const sessionUser = useSelector(state => state.session.user);



    return (
        <div className="comment-section">
            <CommentForm answerId={answerId} />
            {answerComments.map(comment => (
                <div className="comment-box" key={comment.comment}>
                    <h5>{comment.username}</h5>
                    <p>{comment.comment}</p>
                    {sessionUser.id === comment?.user_id && (
                        <div>
                            <button>Edit</button>
                            <DeleteComment commentId={comment.id} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )

}

export default Comments;
