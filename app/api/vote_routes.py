from flask import Blueprint
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, User, Answer, Vote
from flask_login import current_user, login_required


vote_routes = Blueprint('votes', __name__)


