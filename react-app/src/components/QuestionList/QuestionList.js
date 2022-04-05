import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getQuestions } from '../../store/questions';
import QuestionFormModal from '../QuestionFormModal';

import './QuestionList.css'

const QuestionList = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.byId);

    const questionList = Object.values(questions).reverse();


    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])

    return (
        <div className='question-list'>
            <QuestionFormModal />
            {questionList.map(question => (
                <div className='question-box' key={question.question}>
                    <NavLink key={question.question} to={`/questions/${question.id}`}>
                        <div className='question-block'>
                            <p>{question.question}</p>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    )
};

export default QuestionList;
