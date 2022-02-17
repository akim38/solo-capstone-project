import { useState } from "react";


const QuestionForm = () => {

    const [question, setQuestion] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submission')
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        console.log('handle cancel')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="question"> What would you like to ask?:
                    <input
                        type="text"
                        placeholder="What's your question?"
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
