from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length


class AnswerForm(FlaskForm):
    answer = StringField('answer', validators=[DataRequired, Length(min=2, max=2000, message="Answers must be between 2 and 2000 characters.")])
