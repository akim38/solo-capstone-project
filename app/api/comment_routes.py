from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Answer, Comment
from flask_login import current_user, login_required



