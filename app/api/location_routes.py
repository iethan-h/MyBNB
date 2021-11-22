from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Location
from app.forms.location_form import location_exists,LocationForm


location_routes = Blueprint('locations', __name__)

@location_routes.route('',methods=['POST'])
@login_required
def locationsss():
    form = LocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        location = Location(**request.json)
        db.session.add(location)
        db.session.commit()
        return location.to_dict()
    else:
        return form.errors

@location_routes.route('',methods=['GET'])

def all_locations():
    form = LocationForm()
    locations = Location.query.all()
    print("*****************************",locations)
    return {location.id: location.to_dict() for location in locations}

@location_routes.route('/<int:id>')
def location(id):
    location = Location.query.get(id)
    return location.to_dict()
    
@location_routes.route('/<int:id>', methods=['PUT'])
def editLocation(id):
    form = LocationForm()
    if form.validate_on_submit():
        location = Location(**request.json)
        db.session.commit()
        return location.to_dict()
    else:
        return form.errors
        
@location_routes.route('/<int:id>', methods=['DELETE'])
def delete_location(id):
    # location = Location.query.get(id)
    db.session.delete(location)
    db.session.commit()
    return location.to_dict()