from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length


class CommentForm(FlaskForm):
    comment = StringField('comment', validators=[DataRequired(), Length(min=2, max=2000, message="Comments must be between 2 and 2000 characters.")])
