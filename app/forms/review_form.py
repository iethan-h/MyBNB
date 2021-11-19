from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, NumberRange
from app.models import User


class ReviewForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired()])