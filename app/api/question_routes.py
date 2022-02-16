from crypt import methods
from flask import Blueprint
from app.models import Question

question_routes = Blueprint('questions', __name__)


# get all questions
@question_routes.route('/')
def questions():
    questions = Question.query.all()
    return {'questions': [question.to_dict() for question in questions]}


# get question based on id
@question_routes.route('/<int:id>/')
def question(id):
    question = Question.query.get(id)
    return question.to_dict()


# post question
@question_routes.route('/', methods=['POST'])

# edit question


# delete question
