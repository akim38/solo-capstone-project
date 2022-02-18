import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSingleQuestion } from "../../store/questions";


const QuestionDetails = () => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const question = useSelector(state => state.questions.byId[questionId])

    useEffect(() => {
        dispatch(getSingleQuestion(questionId));
    }, [dispatch])

    console.log(question)


    return (
        <div>
            <h2>{question?.question}</h2>
            <p>Asked by {question?.username}</p>
            <p>{question?.details}</p>
        </div>

    )
}

export default QuestionDetails;
