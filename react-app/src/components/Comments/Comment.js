import { useState } from "react";
import { useSelector } from "react-redux";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

import './Comments.css';

const Comment = ({ comment }) => {
    const sessionUser = useSelector(state => state.session.user)
    const [showButtons, setShowButtons] = useState(false);
    const [showCommentEdit, setShowCommentEdit] = useState(false);

    const editComment = () => {
        setShowCommentEdit(!showCommentEdit);
        setShowButtons(!showButtons);
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
                    <button onClick={() => setShowButtons(!showButtons)}>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </button>
                    {showButtons && (
                        <div>
                            <button onClick={editComment}>Edit</button>
                            <DeleteComment commentId={comment.id} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Comment;
