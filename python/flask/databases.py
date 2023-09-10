from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from random import randint

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
app.app_context().push()

# Create db
class UserLog(db.Model):
    __tablename__ = "userlogs"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    number = db.Column(db.Integer, nullable=False)
db.create_all()

# Get all records
@app.route("/", methods=["GET"])
def index():
    all_records = UserLog.query.all()
    return render_template("db_records.html", records=all_records)

# Get first of a records
@app.route("/number/<number>", methods=["GET"])
def get_number(number):
    record = UserLog.query.filter_by(number=number).first()
    return f"{record.username} {record.number}"

@app.route("/name/<name>", methods=["GET"])
def get_name(name):
    all_records = UserLog.query.filter_by(username=name)
    return render_template("db_records.html", records=all_records)

# add a record
@app.route("/add", methods=["GET"])
def add():
    new_entry = UserLog(username="Stoffel", number=randint(0, 20))
    db.session.add(new_entry)
    db.session.commit()
    return redirect(url_for("index"))

# update a record
@app.route("/update/<number>", methods=["GET"])
def update(number):
    record = UserLog.query.filter_by(number=number).first()
    record.number = randint(80, 99)
    db.session.commit()
    return redirect(url_for("index"))

# Delete a record
@app.route("/delete/<number>", methods=["GET"])
def delete(number):
    record = UserLog.query.filter_by(number=number).first()
    db.session.delete(record)
    db.session.commit()
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(port=5000, debug=True)