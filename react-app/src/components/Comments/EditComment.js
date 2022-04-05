import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";
import { editComment } from "../../store/comments";

import './Comments.css';

const EditComment = ({ comment }) => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const [edittedComment, setEdittedComment] = useState(comment.comment)
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment: edittedComment
        };

        const data = await dispatch(editComment(payload, comment.id))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            dispatch(getQuestionAnswers(questionId))
        }

    }

    return (
        <div className="edit-comment-area">
            {/* {errors.length > 0 && (
                <div className="errors">
                    The following errors were found:
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
            )} */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">
                        <input
                            type="text"
                            className="comment"
                            id='comment'
                            value={edittedComment}
                            onChange={e => setEdittedComment(e.target.value)}
                        />
                    <button id="post-comment" type="submit">Submit</button>
                </label>
            </form>

        </div>
    )
};

export default EditComment;
