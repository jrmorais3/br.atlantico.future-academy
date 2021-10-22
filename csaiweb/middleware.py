from flask import request, jsonify, g
from functools import wraps
from csaiweb.models import Login, decode_auth_token


def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        token = None
        if 'x-auth-token' in request.headers:
            token = request.headers['x-auth-token']
        if not token:
            return 'a valid token is missing', 401
            # get user via some ORM system
        try:
            user = decode_auth_token(token)
            # make user available down the pipeline via flask.g
            g.user = user
            # finally call f. f() now haves access to g.user
            return f(*args, **kwargs)
        except:
            return 'Inavlid Token', 401

    return wrap
