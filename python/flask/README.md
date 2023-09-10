# Getting Started

```bash
pip install Flask
```

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=5000, debug=True)
```

# Dynamic Routing

```python
@app.route("/user/<name>")
# localhost/user/stoffel
def user(name):
    return render_template("index.html", name=name)
```

# Templates

```bash
├── app.py
└── templates
    ├── base.html
    └── index.html
```

Other html file will build of from base.html. So you can add css/bootstrap and all globals here

<figcaption>base.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- when extended content can be dynamically added -->
    <title>{% block title %}{% endblock %}</title>
  </head>
  <body>
    <!-- when extended content can be dynamically added -->
    {% block body %} {% endblock %}
  </body>
</html>
```

<figcaption>index.html

```html
<!-- use the base template -->
{% extends 'base.html' %}

<!-- dynamically add extra content -->
{% block title %}Home{% endblock %} 

{% block body %}
<h1>Welcome to Flask</h1>
{% endblock %}
```

## Includes

Including one page into another page ex header

```html
<body>
  {% include "header.html" %}
</body>
```

## Rendering templates

```bash
├── app.py
└── templates
    └── index.html
```

```python
from flask import render_template
```

```python
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")
```

## Template Variables

```python
@app.route("/tempvar")
def template_variable():
    year = 2023
    return render_template("variables.html", year=year)
```

```html
<h1>Current Year: {{ year }}</h1>
```

# Template Forms

```html
<form action="{{ url_for('template_form')}}" method="POST">
  <input type="text" name="userInput" />
  <button type="submit">Submit</button>
</form>
```

```python
from flask import request

@app.route("/tform", methods=["GET", "POST"])
def template_form():
    if request.method == "POST":
        user_input = request.form.get("userInput")
        return f"UserInput: {user_input}"
    else:
        return render_template("template_form.html")
```

# Static Files

```bash
├── app.py
├── static
│   └── css
│       └── styles.css
└── templates
    └── index.html
```

<figcaption>index.html

```html
<head>
  <!-- static will be used as the base folder -->
  <link
    href="{{ url_for('static', filename='css/styles.css') }}"
    rel="stylesheet"
  />
  <title>Flask Example</title>
</head>
```

# URL For

Use to redirect to function names

```html
<!-- Add the function name in the app -->
<a href="{{ url_for('index') }}">Home</a>
```

# IF/ELSE

```python
@app.route("/user/<name>",)
def user(name):
    return render_template("index.html", name=name)
```

```html
{% if name %}
<h1>Hello {{ name }}!</h1>
{% else %}
<h1>Hello, Flask!</h1>
{% endif %}
```

# Flask Forms

```bash
pip install Flask-WTF
```

```python
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

```

```html
<form method="POST">
  {{ form.csrf_token }} 
  {{ form.name.label }} 
  {{ form.name(class="red_background") }} 
  {{ form.submit() }}
</form>
```

## Quick Forms with Bootstrap

```bash
pip install Flask-Bootstrap
```

```python
from flask import Flask, request, render_template
from flask_wtf import FlaskForm
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)
app.config["SECRET_KEY"] = "secret"

class NameForm(FlaskForm):
    name = StringField("What is your name?")
    submit = SubmitField("Submit")

@app.route("/flaskform", methods=["GET", "POST"])
def flaskform():
    form = NameForm()

    if form.validate_on_submit():
        name = form.name.data
        return f"{name}"
    
    return render_template("flask_form.html", form=form)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
```

```html
{% import "bootstrap/wtf.html" as wtf %}

<form method="POST" novalidate>
    {{ wtf.quick_form(form) }}
</form>
```

## Form Validators/Fields

```python
from wtforms import (StringField, BooleanField, DateTimeField, RadioField,
                     SelectField, TextField, TextAreaField, PasswordField, SubmitField)
from wtforms.validators import DataRequired, Email, Length

name = StringField("Name", validators=[DataRequired()])
email = StringField("Email", validators=[Email()])
password = PasswordField("Password", validators=[Length(min=8, max=16)])
human = BooleanField("Are you human")
Gender = RadioField("Choose Gender:", choices=[("male", "Male"), ("female", "Femal")])
food_choice = SelectField("Pick your Favorite Food", choices=[("white", "Chicken"), ("red", "Beef")])
comments = TextAreaField()
date = DateTimeField()
submit = SubmitField()
```

## Flash messages

```python
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
```

```html
<form method="POST">
  {% with messages = get_flashed_messages() %} 
    {% for message in messages %} 
        {% if message %}
            <p>{{ message }}</p>
        {% endif %} 
    {% endfor %} 
  {% endwith %}

  {{ form.csrf_token }} 
  {{ form.submit() }}
</form>
```
