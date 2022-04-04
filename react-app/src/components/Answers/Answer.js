import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";
import AnswerEditFormModal from "../AnswerEditForm/AnswerEditFormModal";
import Votes from "../Votes/Votes";
import DeleteAnswer from "./DeleteAnswer";

const Answer = ({answer}) => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        dispatch(getQuestionAnswers(questionId))
    }, [dispatch])

    return (
        <div>
            <div className="answer-area">
                <p>{answer.answer}</p>
            </div>
            <div className="answer-extras">
                    <Votes answer={answer} />
                    {/* <CommentForm answerId={answer.id} /> */}
                    {sessionUser.id === answer?.user_id && (
                        <div className="dropdown">
                            <button onClick={() => setShowButtons(!showButtons)} className="dropbtn">
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </button>
                            {showButtons && (
                                <div className="edit-answer-btn-container dropdown-content">
                                    <AnswerEditFormModal answerId={answer.id} setShowButtons={setShowButtons} />
                                    <DeleteAnswer answerId={answer.id} questionId={questionId} />
                                </div>
                            )}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Answer;
