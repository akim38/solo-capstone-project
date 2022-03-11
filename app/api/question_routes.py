from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Question, User, Answer, Comment
from app.forms import QuestionForm, AnswerForm
from flask_login import current_user, login_required


question_routes = Blueprint('questions', __name__)


# get all questions
@question_routes.route('/')
def questions():
    questions = Question.query.all()
    return {'questions': [question.to_dict() for question in questions]}


# get question based on id
@question_routes.route('/<int:id>/')
@login_required
def question(id):
    question = Question.query.get(id)
    username = question.user.username

    question_info = question.to_dict()
    question_info['username'] = username

    return {'questions': [question_info]}


# post question
@question_routes.route('/', methods=['POST'])
@login_required
def post_question():
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_question = Question(
            question=form.data['question'],
            details=form.data['details'],
            user_id=current_user.id
        )
        db.session.add(new_question)
        db.session.commit()
        return new_question.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# edit question
@question_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def edit_question(id):
    question = Question.query.get(id)
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form['check_id'].data = id
    if form.validate_on_submit():
        question.question = form.data['question']
        question.details = form.data['details']

        db.session.add(question)
        db.session.commit()
        return question.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# delete question
@question_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_question(id):
    question = Question.query.get(id)
    db.session.delete(question)
    db.session.commit()
    return {"message": "Question deleted."}


#get all answers on specific question
@question_routes.route('/<int:id>/answers/')
@login_required
def get_answer(id):
    all_answers = Answer.query.filter(Answer.question_id == id).all()

    answers = [answer.to_dict() for answer in all_answers]

    for answer in answers:
        user = User.query.filter(User.id == answer['user_id']).first()
        answer['username'] = user.username

        comments = Comment.query.filter(Comment.answer_id == answer['id']).all()
        answerComments = [comment.to_dict() for comment in comments]
        for comment in answerComments:
            user = User.query.filter(User.id == comment['user_id']).first()
            comment['username'] = user.username
        answer['comments'] = answerComments

    return {'answers': answers}


#post answer on question
@question_routes.route('/<int:id>/answers/', methods=['POST'])
@login_required
def post_answer(id):
    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_answer = Answer(
            answer=form.data['answer'],
            user_id=current_user.id,
            question_id=id
        )
        db.session.add(new_answer)
        db.session.commit()
        return new_answer.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
