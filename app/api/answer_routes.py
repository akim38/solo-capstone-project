from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Question, User, Answer
from flask_login import current_user, login_required
from app.forms import AnswerForm


answer_routes = Blueprint('answers', __name__)


#get all answers
@answer_routes.route('/')
@login_required
def answers():
    answers = Answer.query.all()
    return {'answers': [answer.to_dict() for answer in answers]}


#get single answer based on id
@answer_routes.route('/<int:id>/')
@login_required
def answer(id):
    answer = Answer.query.get(id)
    username = answer.user.username

    answer_info = answer.to_dict()
    answer_info['username'] = username

    return {'answers': [answer_info]}


#post answer on question
@answer_routes.route('/', methods=['POST'])
@login_required
def post_answer(question_id):
    form = AnswerForm()
    form['csrf_token'.data] = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_answer = Answer(
            answer=form.data['answer'],
            user_id=current_user.id,
            question_id=question_id
        )
        db.session.add(new_answer)
        db.session.commit()
        return new_answer.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#edit answer
@answer_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def edit_answer(id):
    answer = Answer.query.get(id)
    form = AnswerForm()
    if form.validate_on_submit():
        answer.answer = form.data['answer']

        db.session.commit()
        return answer.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#delete answer
@answer_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_answer(id):
    answer = Answer.query.get(id)
    db.session.delete(answer)
    db.session.commit()
    return {'message': 'Answer deleted.'}




