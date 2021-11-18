from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Location
from app.forms.business_form import BusinessForm

locations_routes = Blueprint('locations', __name__)

@locations_routes.route('',methods=['GET', 'POST'])

def locations():
    form = LocationForm()