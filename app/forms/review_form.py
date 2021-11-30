from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, NumberRange
from app.models import Review

def review_exists(form, field):
    userId = field.data
    user = Review.query.filter(Review.userId == userId).first()

class ReviewForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired()])