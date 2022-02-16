import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../store/questions';

function QuestionList() {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    console.log(questions)

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])



    return (
        <>
            <div>
                This is where questions will go
            </div>
        </>
    )
};

export default QuestionList;
