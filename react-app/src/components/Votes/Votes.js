import { useState } from "react";
import { useSelector } from "react-redux";

const Votes = ({ answer }) => {
    //if user has not yet voted, button needs to be unfilled and clicking will post
    // if user has voted, button needs to be filled and clicking will delete
    // but if user has voted and clicks other button, vote will be editted

    const sessionUser = useSelector(state => state.session.user);
    const [upvoted, setUpvote] = useState(answer.user_upvoted);
    const [downvoted, setDownvote] = useState(answer.user_downvoted);

    console.log('LOOK HERE ASDKLFJALSDKFJASL', answer)

    const upvote = async (e) => {
        e.preventDefault()

        if (upvoted) {
            
        }

    }

    return (
        <div>
            <div className="upvote-section">
            <button type="submit" onClick={upvote}> up {answer.upvote_count}</button>
            </div>
            <div className="downvote-section">
            <button> down {answer.downvote_count}</button>
            </div>

        </div>
    )
}

export default Votes;
