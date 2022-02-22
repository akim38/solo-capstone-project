import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const Answers = () => {
    const { questionId } = useParams();

    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers.byId)
}

export default Answers;
