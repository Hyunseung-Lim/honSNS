from flask import Blueprint
from __init__ import create_app, db

main = Blueprint('main', __name__)

@main.route("/profile")
def profile():
    return {"name": "hyunseung"}

app = create_app()
if __name__ == '__main__':
    db.create_all(app=create_app())
    app.run(debug=True)