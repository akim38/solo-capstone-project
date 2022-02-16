from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Question
from app.forms import QuestionForm
from flask_login import current_user, login_required


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

# delete question
@question_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
