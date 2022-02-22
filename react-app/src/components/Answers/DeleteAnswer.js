import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { removeAnswer } from "../../store/answers";

const DeleteAnswer = ({ answerId, questionId }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteAnswer = async (e) => {
        e.preventDefault()

        await dispatch(removeAnswer(answerId))
            .then((res) => history.push(`/questions/${questionId}`))
    }

    return (
        <button type="submit" className="delete-answer-button" onClick={deleteAnswer}>
            <ion-icon name="trash-bin-outline"></ion-icon>
        </button>
    )
};

export default DeleteAnswer;
