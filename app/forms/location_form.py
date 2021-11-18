from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Location

def location_exists(form, field):
    address = field.data
    user = Location.query.filter(Location.address == address).first()
    if user:
        raise ValidationError('Location is already being hosted.')