from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Location, Booking
from app.forms.new_booking import NewBooking
from app.forms.update_booking import UpdateBooking

booking_routes = Blueprint('bookings',__name__)

#GET ALL BOOKINGS FOR A LOCATION
@booking_routes.route('/location/<int:locationId>')
def location_bookings(location_id):
    bookings = Booking.query.filter(Bookings.locationId == location_id).all()
    results = [booking.to_dict() for booking in bookings]
    return {'bookings':results}
    
    
#GET ALL BOOKINGS FOR A USER
@booking_routes.route('/user/<int:userId>')
# @login_required
def user_bookings(userId):
    bookings = Booking.query.filter(Booking.userId == userId).all()
    results = [booking.booking_info() for booking in bookings]
    return {'bookings':results}
    
    
  #CREATE A NEW BOOKING  
@booking_routes.route('',methods=['POST'])
@login_required
def new_booking():
    form = NewBooking()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking = Booking(**request.json)
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()
    else:
        return form.errors
        
#UPDATE A BOOKING
@booking_routes.route('/<int:bookingId>',methods=['PUT'])
# @login_required
def update_booking(booking_id):
    form = UpdateBooking()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data

        booking = Booking.query.filter(Booking.id == booking_id).first()
        booking.startDate = data['startDate']
        booking.endDate = data['endDate']
        db.session.commit()
        return booking.booking_info()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    
    
#DELETE A BOOKING
@booking_routes.route('/<int:bookingId>',methods=['DELETE'])
# @login_required
def delete_booking(booking_id):
    booking = Booking.query.filter(Booking.id == booking_id).first()
    if booking:
        db.session.delete(booking)
        db.session.commit()
        return "Booking deleted"
        

# @booking_routes.route("")
# @login_required
# def all_bookings():
#     return {booking.id: booking.to_dict() for booking in Booking.query.filter.all()} 

# @booking_routes.route('',methods=['POST'])
# @login_required
# def new_booking():
#     form = NewBooking()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         booking = Booking(**request.json)
#         db.session.add(booking)
#         db.session.commit()
#         return booking.to_dict()
#     else:
#         return form.errors

# #GET ALL BOOKINGS
# @booking_routes.route('', methods=['GET'])
# def bookings():
#     form = BookingForm()
#     bookings = Booking.query.all()
#     return{booking.id: booking.to_dict() for booking in bookings}

# #GET ALL BOOKINGS FOR A USER
# @booking_routes.route('/<int:id>')
# def booking(id):
#     booking = Booking.query.get(id)
#     return booking.to_dict()    

# #DELETE A BOOKING
# @booking_routes.route('/<int:id>', methods=['DELETE'])
# def delete_booking(id):
#     booking = Booking.query.get(id)
#     db.session.delete(booking)
#     db.session.commit()
#     return booking.to_dict()
    
# #UPDATE THE DATE OF A BOOKING
# @booking_routes.route('<int:id>', methods=['PUT'])
# def update_booking(bookingId):
#     form = UpdatedBooking()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         data =  form.data
#         booking = Booking.query.filter(Booking.id == bookingId).first()
#         booking.startDate = data['start_date']
#         db.session.commit()
#         return booking.to_dict()
#     else:
#         return form.errors
    