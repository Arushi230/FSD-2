from flask import Flask, request, jsonify
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'

# Dummy user
USER = {
    "username": "admin",
    "password": "1234"
}

# -------------------------------
# 1. Authorization Header (Basic)
# -------------------------------
@app.route('/basic-auth')
def basic_auth():
    auth = request.authorization
    if auth and auth.username == USER["username"] and auth.password == USER["password"]:
        return jsonify({"message": "Basic Auth Successful"})
    return jsonify({"message": "Authentication Failed"}), 401


# -------------------------------
# 2. Custom Header
# -------------------------------
@app.route('/custom-auth')
def custom_auth():
    username = request.headers.get('X-Username')
    password = request.headers.get('X-Password')

    if username == USER["username"] and password == USER["password"]:
        return jsonify({"message": "Custom Header Auth Successful"})
    return jsonify({"message": "Authentication Failed"}), 401


# -------------------------------
# 3. JWT Authentication
# -------------------------------
@app.route('/login', methods=['POST'])
def login():
    data = request.json

    if data['username'] == USER["username"] and data['password'] == USER["password"]:
        token = jwt.encode({
            'user': data['username'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        }, app.config['SECRET_KEY'], algorithm="HS256")

        return jsonify({'token': token})

    return jsonify({"message": "Invalid Credentials"}), 401


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]

        if not token:
            return jsonify({'message': 'Token Missing'}), 401

        try:
            jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return jsonify({'message': 'Token Invalid'}), 401

        return f(*args, **kwargs)

    return decorated


@app.route('/jwt-protected')
@token_required
def jwt_protected():
    return jsonify({"message": "JWT Authentication Successful"})

import os

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))