from flask import Blueprint, redirect, url_for, request
from flask_cors import cross_origin
from __init__ import create_app, db
from models import User
import json
import os

main = Blueprint('main', __name__)

@main.route("/profile")
def profile():
    users = User.query.all()
    names = []
    emails = []
    num = 0
    for user in users:
        names.append(user.name)
        names.append(user.email)
        num += 1
    return {"name": names, "users": emails, "num": num}

@main.route("/login", methods=['GET', 'POST'])
@cross_origin()
def login():
    if request.method == 'GET':
        return {"name": "1"}
    else:
        params = request.get_json()
        email = params['email']
        name = params['name']
        password = params['password']
        # photo = request.files["photo"]
        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database
        if user: # if a user is found, we want to redirect back to signup page so user can try again
            # flash('Email address already exists')
            return {"":""}
        # if photo:
        #     # uniq_filename = make_unique(photo.filename)
        #     # photo_path = join(current_app.config['UPLOAD_FOLDER'],"photo",uniq_filename)
        #     # photo.save(photo_path)       
        #     pass
        # else:
        photo_path = ""
        new_user = User(
            email = email,
            name = name,
            # password = generate_password_hash(password, method='charlie9807')
            password = password,
            photo = os.path.split(photo_path)[1]
        )
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('main.login'))
        

app = create_app()
if __name__ == '__main__':
    db.create_all(app=create_app())
    app.run(debug=True)