import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getCommentsToAnswer } from "../../store/comments";


const Comments = ({ answerId }) =>  {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.byId);
    const commentList = Object.values(comments);
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getCommentsToAnswer(answerId))
        // dispatch(getComments())
    }, [dispatch])

    return (
        <div className="comment-section">
            {answerId}
            {/* {commentList.map(comment => (
                <div className="comment-box" key={comment.comment}>
                    <h5>{comment.username}</h5>
                    <p>{comment.comment}</p>

                </div>
            ))} */}
        </div>
    )

}

export default Comments;
