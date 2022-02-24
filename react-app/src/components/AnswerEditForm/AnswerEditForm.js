import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createAnswer, editAnswer, getQuestionAnswers } from "../../store/answers";

import './AnswerEditForm.css'

const AnswerEditForm = ({ answerId, setShowModal }) => {
    const { questionId } = useParams()

    const dispatch = useDispatch();
    const history = useHistory();

    const oldAnswer = useSelector(state => state.answers.byId[answerId])

    const [answer, setAnswer] = useState(oldAnswer?.answer);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            answer
        }

        const data = await dispatch(editAnswer(payload, answerId))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setShowModal(false);
            history.push(`/questions/${questionId}`)
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

        setShowModal(false);
    };

    return (
        <div className="answer-edit-area">
            <div className="answer-edit">
                {errors.length > 0 && (
                    <div className="errors">
                        The following errors were found:
                        <ul>
                            {errors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="answer"> Edit Answer</label>
                        <textarea
                            type="text"
                            className="edit-text-area"
                            id='answer'
                            value={answer}
                            onChange={e => setAnswer(e.target.value)}
                        />
                    <div className="answer-edit-button-container">
                        <button className="edit-answer" type="submit">Post</button>
                        <button className="cancel-edit-answer" type="button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AnswerEditForm;
