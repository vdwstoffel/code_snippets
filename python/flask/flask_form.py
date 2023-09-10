from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"


class NameForm(FlaskForm):
    name = StringField("What is your name?")
    submit = SubmitField("Submit")


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/flaskform", methods=["GET", "POST"])
def flaskform():
    form = NameForm()

    if form.validate_on_submit():
        name = form.name.data
        return f"{name}"

    return render_template("flask_form.html", form=form)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
