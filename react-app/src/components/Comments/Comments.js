
const Comments = ({ answerId, answerComments }) =>  {

    return (
        <div className="comment-section">
            {answerComments.map(comment => (
                <div className="comment-box" key={comment.comment}>
                    <h5>{comment.username}</h5>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </div>
    )

}

export default Comments;
