from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, DateTimeField
from wtforms.validators import DataRequired

class NewBooking(FlaskForm):
    userId = IntegerField("user_id", validators=[DataRequired()])
    locationId = IntegerField("location_id", validators=[DataRequired()])
    startDate = DateTimeField("start_date", validators=[DataRequired()])
    endDate = DateTimeField("end_date", validators=[DataRequired()])