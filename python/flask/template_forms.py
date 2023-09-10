from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/form", methods=["GET", "POST"])
def template_form():
    if request.method == "POST":
        user_input = request.form.get("userInput")
        return f"UserInput: {user_input}"
    else:
        return render_template("template_form.html")


if __name__ == "__main__":
    app.run(port=5000, debug=True)
