from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Location


location_routes = Blueprint('locations', __name__)

@locations_routes.route('',methods=['GET'])
def locations():
    form = LocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        location = Location(**request.json)
        db.session.add(location)
        db.session.commit()
        return location.to_dict()
    return {location.id: location.to_dict() for location in Location.query.all()}

    
@locations_routes.route('',methods=['POST'])
def new_locations():
    form = LocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        location = Location(**request.json)
        db.session.add(location)
        db.session.commit()
        return location.to_dict()
    return {location.id: location.to_dict() for location in Location.query.all()}
    # return {'hello':'world'}

    
    
@location_routes.route('/<int:id>')
def location(id):
    location = Location.query.get(id)
    return location.to_dict()
    
@location_routes.route('/<int:id>', methods=['PUT']
    if form.validate_on_submit():
        location = Location(**request.json)
        db.session.commit()
        return location.to_dict()
    else:
        return form.errors
        
@business_routes.route('/<int:id>', methods=['DELETE'])
def delete_location(id):
    # location = Location.query.get(id)
    db.session.delete(location)
    db.session.commit()
    return location.to_dict()