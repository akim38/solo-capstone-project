import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const AnswerForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [answer, setAnswer] = useState('');
    const [errors, setErrors] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handle submit')
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowForm(false)
    };

    return (
        <div className="answer-form-area">
            <button className="show-answer-form" onClick={() => setShowForm(!showForm)}>
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

export default AnswerForm;
