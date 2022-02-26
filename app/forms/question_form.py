from flask_wtf import FlaskForm
from sqlalchemy import Integer, String
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Question


def question_exists(form, field):
    # Checking if question already exists
    current_question = field.data

    # check if id's are matching because if so is fine
    # print('!!!!!!!!!!!!!!!!!!!!', form.data)
    # print('11111111111111', current_question)

    check_id = form.data['check_id']

    question_record = Question.query.filter(Question.question == current_question).first()

    if question_record:
        if check_id == question_record.id:
            return
        else:
            raise ValidationError('This exact question has already been asked!')


# def editted_question_exists(form, field):


class QuestionForm(FlaskForm):
    question = StringField('question', validators=[DataRequired(), question_exists, Length(min=2, max=500, message="Question must be between 2 and 500 characters.")])
    details = StringField('details', validators=[Length(max=2000, message="Please keep details less than 2000 characters.")])
    check_id = IntegerField('check_id')

# class QuestionEditForm(FlaskForm):
#     question = StringField('question', validators=[DataRequired(), Length(min=2, max=500, message="Question must be between 2 and 500 characters.")])
#     details = StringField('details', validators=[Length(max=2000, message="Please keep details less than 2000 characters.")])
#     id = IntegerField('id')
