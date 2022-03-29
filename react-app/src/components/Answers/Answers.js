import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";
import DeleteAnswer from "./DeleteAnswer";

import './Answers.css'
import AnswerEditFormModal from "../AnswerEditForm/AnswerEditFormModal";
import Comments from "../Comments/Comments";
import Votes from "../Votes/Votes";


const Answers = () => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers.byId)
    const answerList = Object.values(answers)
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getQuestionAnswers(questionId))
    }, [dispatch])

    return (
        <div className="answers-box">
            {answerList.map(answer => (
                <div className="answer-box" key={answer.answer}>
                    <h5>{answer.username}</h5>
                    <p>{answer.answer}</p>
                    {sessionUser.id === answer?.user_id && (
                        <div className="edit-answer-btn-container">
                            <AnswerEditFormModal answerId={answer.id}/>
                            <DeleteAnswer answerId={answer.id} questionId={questionId} />
                        </div>
                    )}
                    <Votes answer={answer} />
                    <Comments answerId={answer.id} answerComments={answer.comments} />
                </div>
            ))}

        </div>
    )
}

export default Answers;
