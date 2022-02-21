import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editQuestion } from "../../store/questions";


const QuestionEditForm = ({ setShowModal }) => {
    const { questionId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const oldQuestion = useSelector(state => state.questions.byId[questionId])

    const [question, setQuestion] = useState(oldQuestion?.question);
    const [details, setDetails] = useState(oldQuestion?.details);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        console.log('handle submission')
        const payload = {
            question,
            details
        };

        const editedQuestion = await dispatch(editQuestion(questionId, payload))
            // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) return setErrors(data.errors)
            // })

            // if (editedQuestion) {
            //     setShowModal(false);
            //     history.push(`/questions/`)
            // }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowModal(false);
    }


    return (
        <div className="question-form">
            {errors.length > 0 && (
                <div className="errors">
                    The following errors were found:
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="question"> What would you like to ask?:
                    <input
                        type="text"
                        id='question'
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                    />
                </label>
                <label htmlFor="details"> Details:
                    <textarea
                        type="text"
                        placeholder="Add some details or context if you would like!"
                        id='details'
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />
                </label>
                <div className="button-container">
                    <button type="submit">Edit Question</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default QuestionEditForm;
