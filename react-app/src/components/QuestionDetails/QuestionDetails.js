import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { getSingleQuestion, removeQuestion } from "../../store/questions";
import AnswerForm from "../AnswerForm/AnswerForm";
import Answers from "../Answers/Answers";
import QuestionEditFormModal from "../QuestionEditFormModal";

import './QuestionDetails.css'

const QuestionDetails = () => {
    const { questionId } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const question = useSelector(state => state.questions.byId[questionId])
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getSingleQuestion(questionId));
    }, [dispatch, questionId])

    const deleteQuestion = async (e) => {
        e.preventDefault()

        await dispatch(removeQuestion(questionId))
            .then((res) => history.push('/'))
    }

    return (
        <div className="question-page">
            <div className="question-detail-box">
                <h2>{question?.question}</h2>
                {sessionUser.id === question?.user_id &&
                    <div className="detail-button-container">
                        <QuestionEditFormModal />
                        <button type="submit" className="delete-question-button" onClick={deleteQuestion}>
                        <ion-icon name="trash-bin-outline"></ion-icon>
                        </button>
                    </div>
                }
                <p className="author">Asked by {question?.username}</p>
                <p className="details">{question?.details}</p>
                <AnswerForm />
            </div>
            <div className="answer-section">
                <Answers />
            </div>
        </div>

    )
}

export default QuestionDetails;
