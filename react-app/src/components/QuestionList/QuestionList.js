import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getQuestions } from '../../store/questions';

function QuestionList() {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.byId);
    console.log(questions)
    const questionList = Object.values(questions).reverse();
    console.log(questionList)

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])


    return (
        <>
            <div>
                {questionList.map(question => (
                    <NavLink key={question.question} to={`/questions/${question.id}`}>
                        <h3>{question.question}</h3>
                    </NavLink>
                ))}
            </div>
        </>
    )
};

export default QuestionList;
