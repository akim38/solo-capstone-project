import { useState } from "react";
import { useSelector } from "react-redux";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

const Comment = ({ comment }) => {
    const sessionUser = useSelector(state => state.session.user)
    const [showCommentEdit, setShowCommentEdit] = useState(false);

    const editComment = () => {
        setShowCommentEdit(!showCommentEdit)
    };

    return (
        <div>
            {showCommentEdit ? (
                <EditComment comment={comment} />
            ) : (
                <p>{comment.comment}</p>
            )}
            {sessionUser.id === comment?.user_id && (
                <div>
                    <button onClick={editComment}>Edit</button>
                    <DeleteComment commentId={comment.id} />
                </div>
            )}
        </div>
    )
}

export default Comment;
