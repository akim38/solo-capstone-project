import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createQuestion } from "../../store/questions";


const QuestionForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [question, setQuestion] = useState('');
    const [details, setDetails] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submission')
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        const payload = {
            question,
            details
        };

        const newQuestion = await dispatch(createQuestion(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) return setErrors(data.errors)
            })

            if (newQuestion) {
                history.push(`/questions/`)
            }
    }


    return (
        <>
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
                    <input
                        type="text"
                        placeholder="Add some details or context if you would like!"
                        id='details'
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />
                </label>
                <button type="submit">Create New Question</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </>
    )
};

export default QuestionForm;
