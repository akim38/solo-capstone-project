import { useState } from "react";
import { useSelector } from "react-redux";
import CommentForm from "../CommentForm/CommentForm";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import Comment from "./Comment";

const Comments = ({ answerId, answerComments }) =>  {
    const sessionUser = useSelector(state => state.session.user);
    const [showCommentEdit, setShowCommentEdit] = useState(false);


    const editComment = () => {
        setShowCommentEdit(!showCommentEdit)
    }


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
