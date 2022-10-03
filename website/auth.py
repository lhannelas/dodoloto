from flask import Blueprint, render_template, request, flash

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    return render_template("login.html")


@auth.route('/logout')
def logout():
    return "<p>logout</p>"


@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        if len(email) < 4:
            flash('Email must have more than 4 characters.', category='error')
        elif len(firstName) < 2:
            flash('First name must have more than 2 characters.', category='error')
        elif password1 != password2:
            flash('Password does not match.', category='error')
        elif len(password1) < 4:
            flash('Password must have more than 4 characters.', category='error')
        else:
            flash('Account created!', category='success')

    return render_template("signUp.html")
