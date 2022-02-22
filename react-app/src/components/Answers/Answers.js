import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";



const Answers = () => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers.byId)
    const answerList = Object.values(answers)
    console.log(answerList, `YOOOOOOOOOOOOOOO`)

    useEffect(() => {
        dispatch(getQuestionAnswers(questionId))
    }, [dispatch])

    return (
        <div className="answers-box">
            {answerList.map(answer => (
                <div>
                    <h5>username</h5>
                    <p>{answer.answer}</p>
                </div>
            ))}

        </div>
    )
}

export default Answers;
