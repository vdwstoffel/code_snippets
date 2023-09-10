from flask import Flask, render_template

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

# template variables
@app.route("/tempvar")
def template_variable():
    year = 2023
    return render_template("variables.html", year=year)

# Dynamic Routing
@app.route("/user/<name>")
# localhost/user/stoffel
def user(name):
    return render_template("index.html", name=name)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
