from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired


class UpdateBooking(FlaskForm):
    start_date = DateField('start_date', validators=[DataRequired()])
    end_date = DateField('end_date', validators=[DataRequired()])