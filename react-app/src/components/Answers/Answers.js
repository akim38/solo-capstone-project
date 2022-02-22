import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";
import AnswerEditForm from "../AnswerEditForm/AnswerEditForm";
import DeleteAnswer from "./DeleteAnswer";


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
                <div key={answer.answer}>
                    <h5>{answer.username}</h5>
                    <p>{answer.answer}</p>
                    {sessionUser.id === answer?.user_id && (
                        <div>
                            <AnswerEditForm answerId={answer.id}/>
                            <DeleteAnswer answerId={answer.id} questionId={questionId} />
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}

export default Answers;
