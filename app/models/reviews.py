from .db import db

class Review(db.Model):
    
    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id', onDelete='CASCADE'), nullable=False)
    locationId = db.Column(db.Integer, db.ForeignKey('locations.id', onDelete='CASCADE'), nullable=False)
    review = db.Column(db.varchar(500), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True)
    updatedAt = db.Column(db.DateTime(timezone=True)
    
    #relationships
    
    users = db.relationships('User', back_populates='reviews')
    locations = db.relationships('Location', back_populates='reviews')
    
    def to_dict(self):
        return {
            'id': self.id,
            'locationId': self.locationId,
            'userId': self.userId,
            'review': self.review,
            'createdAt': self.createdAt.strftime("%Y/%m/%d %H:%M:%S"),
            'updatedAt': self.updatedAt.strftime("%Y/%m/%d %H:%M:%S")
        }