import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createAnswer, getQuestionAnswers } from "../../store/answers";

import './AnswerForm.css'

const AnswerForm = () => {
    const { questionId } = useParams()

    const dispatch = useDispatch();
    const [answer, setAnswer] = useState('');
    const [errors, setErrors] = useState([]);
    const [showForm, setShowForm] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            answer
        }

        const data = await dispatch(createAnswer(payload, questionId))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setShowForm(false);
            dispatch(getQuestionAnswers(questionId));
            setAnswer('');
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

        setAnswer('');
        setShowForm(false);
    };

    return (
        <div className="answer-form-area">
            <button className="show-answer-form" onClick={() => setShowForm(!showForm)}>
                <ion-icon name="create-outline"></ion-icon>
                Answer
            </button>
            {showForm && (
                <div className="answer-form">
                    {errors.length > 0 && (
                        <div className="errors">
                            The following errors were found:
                            <ul>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="answer">
                            <textarea
                                type="text"
                                placeholder="Write your answer"
                                id='answer'
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                            />
                        </label>
                        <div className="answer-button-container">
                            <button id="post-answer" type="submit">Post</button>
                            <button id="cancel-answer" type="button" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
};

export default AnswerForm;
