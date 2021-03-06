from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email or Password is incorrect.')
    if not user.check_password(password):
        raise ValidationError('Email or Password is incorrect.')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message="Please provide email.")])
    password = StringField('password', validators=[
                           DataRequired(message="Please provide password."), password_matches])
