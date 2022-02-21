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


//reducer
