from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Location, Booking
from app.forms.new_booking import NewBooking
from app.forms.update_booking import UpdateBooking


booking_routes = Blueprint('bookings',__name__)

@booking_routes.route("")
@login_required
def all_bookings():
    return {booking.id: booking.to_doct() for booking in Booking.query.filter.all()} 

@booking_routes.route('',methods=['POST'])
# @login_required
def new_booking():
    form = NewBooking()
    print("-------------------------------OUTSIDE")
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print("-------------------------------INSIDE")
        booking = Booking(**request.json)
        db.session.add(booking)
        db.session.commit()
        print("__________________",booking)
        return booking.to_dict()
    else:
        return form.errors

@booking_routes.route('', methods=['GET'])
def one_booking():
    form = NewBooking()
    bookings = Booking.query.all()
    return{booking.id: booking.to_dict() for booking in bookings}
    
@booking_routes.route('/<int:id>')
def booking(id):
    booking = Booking.query.get(id)
    return booking.to_dict()    
        
@booking_routes.route('/<int:id>', methods=['DELETE'])
def delete_booking(id):
    booking = Booking.query.get(id)
    db.session.delete(booking)
    db.session.commit()
    return booking.to_dict()
    
#UPDATE THE DATE OF A BOOKING
@booking_routes.route('<int:id>', methods=['PUT'])
def update_booking(bookingId):
    form = UpdatedBooking()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data =  form.data
        booking = Booking.query.filter(Booking.id == bookingId).first()
        booking.startDate = data['start_date']
        db.session.commit()
        return booking.to_dict()
    else:
        return form.errors
    