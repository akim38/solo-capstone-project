import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";
import { removeComment } from "../../store/comments"

const DeleteComment = ({ commentId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { questionId } = useParams();


    const deleteComment = async (e) => {
        e.preventDefault()

        await dispatch(removeComment(commentId))
            .then((res) => {
                dispatch(getQuestionAnswers(questionId))
                // history.push(`/questions/${questionId}`)
            })
    }

    return (
        <button type="submit" className="delete-comment-button" onClick={deleteComment}>Delete</button>
    )
}

export default DeleteComment;
