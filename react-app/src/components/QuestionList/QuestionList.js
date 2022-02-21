import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getQuestions } from '../../store/questions';
import QuestionFormModal from '../QuestionFormModal';

import './QuestionList.css'

const QuestionList = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.byId);
    console.log(questions)
    const questionList = Object.values(questions).reverse();
    console.log(questionList)

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])

    return (
        <div className='question-list'>
            <QuestionFormModal />
            {questionList.map(question => (
                <div className='question-box'>
                    <NavLink key={question.question} to={`/questions/${question.id}`}>
                        <div className='question-block'>
                            <h4>{question.question}</h4>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    )
};

export default QuestionList;
