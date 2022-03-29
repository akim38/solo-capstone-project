import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";

const Votes = ({ answer }) => {
    //if user has not yet voted, button needs to be unfilled and clicking will post
    // if user has voted, button needs to be filled and clicking will delete
    // but if user has voted and clicks other button, vote will be editted
    const { questionId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [upvoted, setUpvoted] = useState(answer.user_upvoted);
    const [downvoted, setDownvoted] = useState(answer.user_downvoted);

    console.log('LOOK HERE ASDKLFJALSDKFJASL', answer)

    const upvote = async (e) => {
        e.preventDefault()

        if (upvoted) {
            const res = await fetch(`/api/votes/${answer.user_vote}/`, {
                method: "DELETE"
            });

            if (res.ok) {
                dispatch(getQuestionAnswers(questionId));
                setUpvoted(false)
            }

        } else {
            const res = await fetch(`/api/answers/${answer.id}/upvote/`, {
                method: "POST"
            });

            if (res.ok) {
                dispatch(getQuestionAnswers(questionId));
                setUpvoted(true)
            }
        }

    }

    const downvote = async (e) => {
        e.preventDefault()

        if (downvoted) {
            const res = await fetch(`/api/votes/${answer.user_vote}/`, {
                method: "DELETE"
            });

            if (res.ok) {
                dispatch(getQuestionAnswers(questionId));
                setDownvoted(false)
            }

        } else {
            const res = await fetch(`/api/answers/${answer.id}/downvote/`, {
                method: "POST"
            });

            if (res.ok) {
                dispatch(getQuestionAnswers(questionId));
                setDownvoted(true)
            }
        }

    }

    return (
        <div>
            <div className="upvote-section">
            <button type="submit" onClick={upvote}> up {answer.upvote_count}</button>
            </div>
            <div className="downvote-section">
            <button type="submit" onClick={downvote}> down {answer.downvote_count}</button>
            </div>

        </div>
    )
}

export default Votes;
