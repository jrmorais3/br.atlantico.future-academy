import json
from flask import request, jsonify, g, make_response
from csaiweb.models import Login, db, encode_auth_token, decode_auth_token
from csaiweb import app
from csaiweb.middleware import login_required

# Done


@app.route('/backend/login', methods=["POST", "GET"])
def login():
    content = request.get_json()
    username = content["credentials"]["username"]
    password = content["credentials"]["password"]
    # usern = "pranay_kothari"
    # password = "1234"
    # print(content["credentials"])

    user = Login.query.filter(Login.username == username,
                              Login.password == password).first()

    if user is None:
        return jsonify({"errors": {"global": "Invalid credentials"}}), 501

    token = encode_auth_token(username)

    dict = {
        "user": {
            'token': decode_auth_token(token),
            'username': username,
            'password': password}
    }

    return make_response(jsonify(dict))


# @app.route('/backend/login', methods=["GET"])
# @login_required
# def decode_password():
#     try:
#         username = g.user

#         user = Login.query.filter(Login.username == username).first()

#         List = []

#         dict = {
#             'username': user.username,
#         }
#         List.append(dict)

#         return json.dumps(List)
#     except:
#         return 'server error', 500


@app.route('/backend/signup', methods=["POST", "GET"])
def signup():
    try:
        content = request.get_json()
        username = content["user"]["username"]
        password = content["user"]["password"]
        # username = "manjot_singh"
        # password = "1234"
        # print(content)

        user = Login(username=username, password=password)
        db.session.add(user)
        db.session.commit()

        token = encode_auth_token(username)

       # dict = {
       #     'token': token.decode()
       # }
        dict = {
            "user": {
                'token': decode_auth_token(token),
                'username': username,
                # 'password': password
            }
        }

        return make_response(jsonify(dict))
    except:
        return jsonify({"errors": {"global": "Invalid credentials"}}), 501
