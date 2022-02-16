from flask_wtf import FlaskForm
from sqlalchemy import String
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Question


def question_exists(form, field):
    # Checking if question already exists
    current_question = field.data
    question_record = Question.query.filter(Question.question == current_question).first()
    if question_record:
        raise ValidationError('This exact question has already been asked!')


class QuestionForm(FlaskForm):
    question = StringField('question', validators=[DataRequired(), question_exists])
    details = StringField('details')
