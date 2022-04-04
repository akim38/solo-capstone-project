import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionAnswers } from "../../store/answers";

import './Votes.css';

const Votes = ({ answer }) => {
    //if user has not yet voted, button needs to be unfilled and clicking will post
    // if user has voted, button needs to be filled and clicking will delete
    // but if user has voted and clicks other button, vote will be editted
    const { questionId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [upvoted, setUpvoted] = useState(answer.user_upvoted);
    const [downvoted, setDownvoted] = useState(answer.user_downvoted);
    const [upvoteColor, setUpvoteColor] = useState(upvoted ? 'rgb(48, 144, 235)' : '');
    const [downvoteColor, setDownvoteColor] = useState(downvoted ? 'rgb(48, 144, 235)' : '')

    // console.log('LOOK HERE ASDKLFJALSDKFJASL', answer)

    const upvote = async (e) => {
        e.preventDefault();

        if (downvoted) {
            const res = await fetch(`/api/votes/${answer.user_vote}/`, {
                method: "PUT"
            })

            if (res.ok) {
                dispatch(getQuestionAnswers(questionId));
                setUpvoted(true);
                setDownvoted(false);
                setUpvoteColor('rgb(48, 144, 235)');
                setDownvoteColor('');
            }

        } else {
            if (upvoted) {
                const res = await fetch(`/api/votes/${answer.user_vote}/`, {
                    method: "DELETE"
                });

                if (res.ok) {
                    dispatch(getQuestionAnswers(questionId));
                    setUpvoted(false)
                    setUpvoteColor('')
                }

            } else {
                const res = await fetch(`/api/answers/${answer.id}/upvote/`, {
                    method: "POST"
                });

                if (res.ok) {
                    dispatch(getQuestionAnswers(questionId));
                    setUpvoted(true)
                    setUpvoteColor('rgb(48, 144, 235)')
                }
            }
        }

    }

    const downvote = async (e) => {
        e.preventDefault()

        if (upvoted) {
            const res = await fetch(`/api/votes/${answer.user_vote}/`, {
                method: "PUT"
            })

            if (res.ok) {
                dispatch(getQuestionAnswers(questionId));
                setUpvoted(false);
                setDownvoted(true);
                setUpvoteColor('');
                setDownvoteColor('rgb(48, 144, 235)');
            }
        } else {
            if (downvoted) {
                const res = await fetch(`/api/votes/${answer.user_vote}/`, {
                    method: "DELETE"
                });

                if (res.ok) {
                    dispatch(getQuestionAnswers(questionId));
                    setDownvoted(false);
                    setDownvoteColor('');
                }

            } else {
                const res = await fetch(`/api/answers/${answer.id}/downvote/`, {
                    method: "POST"
                });

                if (res.ok) {
                    dispatch(getQuestionAnswers(questionId));
                    setDownvoted(true);
                    setDownvoteColor('rgb(48, 144, 235)');
                }
            }
        }
    }

    return (
        <div className="vote-area">
            <div className="vote-btn">
                <button type="submit" style={{color: upvoteColor}} onClick={upvote}> <ion-icon name="arrow-up-outline"></ion-icon> {answer.upvote_count}</button>
                <button type="submit" style={{color: downvoteColor}} onClick={downvote}> <ion-icon name="arrow-down-outline"></ion-icon> {answer.downvote_count}</button>
            </div>
        </div>
    )
}

export default Votes;
