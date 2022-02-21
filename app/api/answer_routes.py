from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Question, User, Answer
from flask_login import current_user, login_required


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
def post_answer():
    

#edit answer


#delete answer



