import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { getSingleQuestion, removeQuestion } from "../../store/questions";


const QuestionDetails = () => {
    const { questionId } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const question = useSelector(state => state.questions.byId[questionId])

    useEffect(() => {
        dispatch(getSingleQuestion(questionId));
    }, [dispatch, questionId])

    const deleteQuestion = async (e) => {
        e.preventDefault()

        await dispatch(removeQuestion(questionId))
            .then((res) => history.push('/questions/'))
    }

    return (
        <div>
            <h2>{question?.question}</h2>
            <p>Asked by {question?.username}</p>
            <p>{question?.details}</p>
            {/* <button className="edit-question-button" onClick={editQuestion}>Edit</button> */}
            <button type="submit" className="delete-question-button" onClick={deleteQuestion}>Delete</button>
        </div>

    )
}

export default QuestionDetails;
