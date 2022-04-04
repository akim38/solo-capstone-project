import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";

import './Answers.css'
import Comments from "../Comments/Comments";
import Answer from "./Answer";


const Answers = () => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers.byId)
    const answerList = Object.values(answers)

    useEffect(() => {
        dispatch(getQuestionAnswers(questionId))
    }, [dispatch])

    return (
        <div className="answers-box">
            {answerList.map(answer => (
                <div className="answer-box" key={answer.answer}>
                    <p className="answerer-name"><ion-icon size="large" name="person-circle-outline"></ion-icon>  {answer.username}</p>
                    <Answer answer={answer} />
                    <Comments answerId={answer.id} answerComments={answer.comments} />
                </div>
            ))}

        </div>
    )
}

export default Answers;
