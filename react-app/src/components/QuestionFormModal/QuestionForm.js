import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createQuestion, getQuestions } from "../../store/questions";


const QuestionForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [question, setQuestion] = useState('');
    const [details, setDetails] = useState('');
    const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     dispatch(getQuestions());
    // }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('handle submission')
        const payload = {
            question,
            details
        };

        const data = await dispatch(createQuestion(payload))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setShowModal(false);
            history.push(`/questions/${data.id}`)
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowModal(false);
    }


    return (
        <div className="question-form">
            {errors.length > 0 && (
                <div>
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
                        placeholder="Start your question with 'What', 'How', 'Why', etc. "
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
                    <button type="submit">Create New Question</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default QuestionForm;
