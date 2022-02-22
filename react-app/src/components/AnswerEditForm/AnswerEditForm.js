import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createAnswer, editAnswer, getQuestionAnswers } from "../../store/answers";


const AnswerEditForm = ({ answerId }) => {
    const { questionId } = useParams()

    const dispatch = useDispatch();
    const history = useHistory();

    const oldAnswer = useSelector(state => state.answers.byId[answerId])

    const [answer, setAnswer] = useState(oldAnswer?.answer);
    const [errors, setErrors] = useState([]);
    const [showForm, setShowForm] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            answer
        }

        const data = await dispatch(editAnswer(payload, answerId))
        setShowForm(false);
        history.push(`/questions/${questionId}`)
        // if (data.errors) {
        //     setErrors(data.errors)
        // } else {
        //     setShowForm(false);
        //     getQuestionAnswers(questionId);
        //     // history.push(`/questions/${questionId}`)
        //     history.go()
        // }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();

        setShowForm(false);
    };

    return (
        <div className="answer-edit-area">
            <button className="show-answer-edit" onClick={() => setShowForm(!showForm)}>
                Edit
            </button>
            {showForm && (
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
                        <label htmlFor="answer">
                            <textarea
                                type="text"
                                id='answer'
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                            />
                        </label>
                        <div className="button-container">
                            <button type="submit">Post</button>
                            <button type="button" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
};

export default AnswerEditForm;
