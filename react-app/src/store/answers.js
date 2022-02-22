//action types
const LOAD_ANSWERS = 'answer/LOAD';
const ADD_ANSWER = 'answer/ADD';
const DELETE_ANSWER = 'answer/DELETE';


//action creators
const loadAnswers = (answers) => ({
    type: LOAD_ANSWERS,
    answers
});

const addAnswer = (answer) => ({
    type: ADD_ANSWER,
    answer
});

const deleteAnswer = (answerId) => ({
    type: DELETE_ANSWER,
    answerId
})


//thunks
export const getAnswers = () => async dispatch => {
    const res = await fetch(`/api/answers/`);

    if (res.ok) {
        const answers = await res.json();

        dispatch(loadAnswers(answers))
    }
};

export const getQuestionAnswers = (questionId) => async dispatch => {
    const res = await fetch(`/api/questions/${questionId}/answers/`)

    if (res.ok) {
        const answers = await res.json();

        dispatch(loadAnswers(answers))
    }
}

export const getSingleAnswer = (answerId) => async dispatch => {
    const res = await fetch(`/api/answers/${answerId}/`);

    if (res.ok) {
        const answer = await res.json();

        dispatch(loadAnswers(answer))
    }
};

export const createAnswer = (payload, questionId) => async dispatch => {
    const res = await fetch(`/api/questions/${questionId}/answers/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newAnswer = await res.json();
        dispatch(addAnswer(newAnswer));

        return newAnswer;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return  {'errors': data.errors}
        }
    } else {
        return ['An error occured. Please try again.']
    }
};

export const editAnswer = (payload, answerId) => async dispatch => {
    const res = await fetch(`/api/answers/${answerId}/`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const edittedAnswer = await res.json();
        dispatch(addAnswer(edittedAnswer));
        return edittedAnswer;
    }
};

export const removeAnswer = (answerId) => async dispatch => {
    const res = await fetch(`/api/answers/${answerId}/`, {
        method: "DELETE"
    });

    if (res.ok) {
        const answer = await res.json();
        dispatch(deleteAnswer(answerId));
        return answer;
    }
};


//reducer
const initialState = { byId: {} }

const answerReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ANSWERS: {
            newState = { ...state }

            newState.byId = action.answers.answers.reduce((answers, answer) => {
                answers[answer.id] = answer;
                return answers;
            }, {});

            return newState;
        }
        case ADD_ANSWER: {
            newState = { ...state }

            newState.byId[action.answer.id] = action.answer;

            return newState;
        }
        case DELETE_ANSWER: {
            newState = { ...state }

            delete newState.byId[action.answerId]

            return newState; 
        }
        default:
            return state;
    }
}

export default answerReducer;
