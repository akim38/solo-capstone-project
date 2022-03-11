//action types
const LOAD_COMMENTS = 'comment/LOAD';
const ADD_COMMENT = 'comment/ADD';
const DELETE_COMMENT = 'comment/DELETE';


//action creators
const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments
});

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
});

const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})


//thunks
export const getComments = () => async dispatch => {
    const res = await fetch(`/api/comments/`);

    if (res.ok) {
        const answers = await res.json();

        dispatch(loadComments(answers))
    }
};

export const getCommentsToAnswer = (answerId) => async dispatch => {
    const res = await fetch(`/api/answers/${answerId}/comments/`)

    if (res.ok) {
        const comments = await res.json();

        dispatch(loadComments(comments))
    }
};

export const getSingleComment = (commentId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}/`);

    if (res.ok) {
        const comment = await res.json();

        dispatch(loadComments(comment))
    }
};

export const createComment = (payload, answerId) => async dispatch => {
    const res = await fetch(`/api/answers/${answerId}/comments/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newComment = await res.json();
        dispatch(addComment(newComment));

        return newComment;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return  {'errors': data.errors}
        }
    } else {
        return ['An error occured. Please try again.']
    }
};

export const editComment = (payload, commentId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}/`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const edittedComment = await res.json();
        dispatch(addComment(edittedComment));

        return edittedComment;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return  {'errors': data.errors}
        }
    } else {
        return ['An error occured. Please try again.']
    }
};

export const removeComment = (commentId) => async dispatch => {
    const res = await fetch(`/api/comments/${commentId}/`, {
        method: "DELETE"
    });

    if (res.ok) {
        const comment = await res.json();
        dispatch(deleteComment(commentId));
        return comment;
    }
};


//reducer
const initialState = { byId: {} }

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS: {
            newState = { ...state }

            newState.byId = action.comments.comments.reduce((comments, comment) => {
                comments[comment.id] = comment;
                return comments;
            }, {});

            return newState;
        }
        case ADD_COMMENT: {
            newState = { ...state }

            newState.byId[action.comment.id] = action.comment;

            return newState;
        }
        case DELETE_COMMENT: {
            newState = { ...state }

            delete newState.byId[action.commentId]

            return newState;
        }
        default:
            return state;
    }
}

export default commentReducer;
