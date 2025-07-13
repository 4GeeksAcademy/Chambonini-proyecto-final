from flask import Flask, request, jsonify
from models import db, Tank, WaterLevel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/tanks', methods=['POST'])
def create_tank():
    data = request.json
    new_tank = Tank(name=data['name'], location=data.get('location'))
    db.session.add(new_tank)
    db.session.commit()
    return jsonify({ "message": "Tank created", "tank": {"id": new_tank.id} }), 201

@app.route('/tanks', methods=['GET'])
def get_tanks():
    tanks = Tank.query.all()
    return jsonify([{"id": t.id, "name": t.name, "location": t.location} for t in tanks])

@app.route('/levels', methods=['POST'])
def add_level():
    data = request.json
    level = WaterLevel(tank_id=data['tank_id'], level_cm=data['level_cm'])
    db.session.add(level)
    db.session.commit()
    return jsonify({ "message": "Level recorded" }), 201

@app.route('/tanks/<int:tank_id>/levels', methods=['GET'])
def get_levels(tank_id):
    levels = WaterLevel.query.filter_by(tank_id=tank_id).order_by(WaterLevel.timestamp.desc()).limit(20).all()
    return jsonify([
        {"level_cm": l.level_cm, "timestamp": l.timestamp.isoformat()}
        for l in levels
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
