from flask import Flask

app = Flask(__name__)

@app.route("/profile")
def profile():
    return {"name": "hyunseung"}

if __name__ == "__main__":
    app.run(debug=True)