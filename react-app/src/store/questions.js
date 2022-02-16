//action types
const LOAD_QUESTIONS = 'question/LOAD';
const ADD_QUESTION = 'question/ADD';
const DELETE_QUESTION = 'question/DELETE';

//action creators
const loadQuestions = (questions) => ({
    type: LOAD_QUESTIONS,
    questions
});

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question
});

const deleteQuestion = (questionId) => ({
    type: DELETE_QUESTION,
    questionId
});


//thunks
export const getQuestions = () => async dispatch => {
    const res = await fetch(`/api/questions/`);

    if (res.ok) {
        const questions = await res.json();

        dispatch(loadQuestions(questions))
    }
};

export const getSingleQuestion = (questionId) => async dispatch => {
    const res = await fetch(`/api/questions/${questionId}/`);

    if (res.ok) {
        const question = await res.json();

        dispatch(loadQuestions(question))
    }
}

export const createQuestion = (payload) => async dispatch => {
    const res = await fetch(`/api/questions/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newQuestion = await res.json();
        dispatch(addQuestion(newQuestion));
        return newQuestion;
    }
};

export const editQuestion = (payload) => async dispatch => {
    const res = await fetch(`/api/questions/`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const edittedQuestion = await res.json();
        dispatch(addQuestion(edittedQuestion));
        return edittedQuestion;
    }
};

export const removeQuestion = (questionId) => async dispatch => {
    const res = await fetch(`/api/questions/${questionId}/`, {
        method: "DELETE"
    });

    if (res.ok) {
        const question = await res.json();
        dispatch(deleteQuestion(questionId));
        return question;
    }
};


//reducer
const initialState = { byId: {} }

const questionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_QUESTIONS: {
            newState = { ...state }

            newState.byId = action.questions.questions.reduce((questions, question) => {
                questions[question.id] = question;
                return questions;
            }, {});

            return newState
        }
        case ADD_QUESTION: {
            newState = { ...state }

            newState.byId[action.questionId] = action.question

            return newState
        }
        case DELETE_QUESTION: {
            newState = { ...state }

            delete newState.byId[action.questionId]

            return newState;
        }
        default:
            return state;
    }
};

export default questionReducer;
