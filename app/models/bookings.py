from .db import db

class Booking(db.Model):
    
    __tablename__ = "bookings"
    
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    locationId = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    startDate = db.Column(db.DateTime,nullable=False)
    endDate = db.Column(db.DateTime,nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True)
    updatedAt = db.Column(db.DateTime(timezone=True)
    
    #relationships
    
    def to_dict(self):
        return {
            'id': self.id,
            'locationId': self.locationId,
            'userId': self.userId,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'createdAt': self.createdAt.strftime("%Y/%m/%d %H:%M:%S"),
            'updatedAt': self.updatedAt.strftime("%Y/%m/%d %H:%M:%S")
        }