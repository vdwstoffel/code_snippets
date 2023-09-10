from flask import Flask, render_template, flash
from flask_wtf import FlaskForm
from wtforms import SubmitField

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"


class NameForm(FlaskForm):
    submit = SubmitField("Submit")


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/flash", methods=["GET", "POST"])
def flash_message():
    form = NameForm()

    if form.validate_on_submit():
        flash("Button Clicked")

    return render_template("flash.html", form=form)


if __name__ == "__main__":
    app.run(port=5000, debug=True)