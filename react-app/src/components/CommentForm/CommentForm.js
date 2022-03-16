import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";
import { createComment } from "../../store/comments";

const CommentForm = ({ answerId }) => {

    const { questionId } = useParams();

    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([])
    const [showForm, setShowForm] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment
        }

        const data = await dispatch(createComment(payload, answerId))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setShowForm(false);
            dispatch(getQuestionAnswers(questionId));
            setComment('');
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

        setComment('');
        setShowForm(false);
    };

    return (
        <div className="comment-form-area">
            <button className="show-comment-form" onClick={() => setShowForm(!showForm)}>
                Reply
            </button>
            {showForm && (
                <div className="comment-form">
                    {errors.length > 0 && (
                        <div className="errors">
                            The following errors were found:
                            <ul>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="comment">
                            <textarea
                                type="text"
                                className="comment"
                                placeholder="Write a comment..."
                                id='comment'
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                        </label>
                        <div className="comment-button-container">
                            <button id="post-comment" type="submit">Add Comment</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
};

export default CommentForm;
