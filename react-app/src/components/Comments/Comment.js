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
        <div className="single-comment">
            {showCommentEdit ? (
                <EditComment comment={comment} />
            ) : (
                <p>{comment.comment}</p>
            )}
            {sessionUser.id === comment?.user_id && (
                <div className="dropdown">
                    <button onClick={() => setShowButtons(!showButtons)} className="dropbtn">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </button>
                    {showButtons && (
                        <div className="dropdown-content">
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
