from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Tank(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=True)
    levels = db.relationship('WaterLevel', backref='tank', lazy=True)

class WaterLevel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tank_id = db.Column(db.Integer, db.ForeignKey('tank.id'), nullable=False)
    level_cm = db.Column(db.Float, nullable=False)
    timestamp = db.Column(db.DateTime, server_default=db.func.now())
