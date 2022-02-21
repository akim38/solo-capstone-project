from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Question, User, Answer
from flask_login import current_user, login_required


answer_routes = Blueprint('answers', __name__)

#get all answers for specific question


#get single answer based on id


#post answer on question


#edit answer


#delete answer



