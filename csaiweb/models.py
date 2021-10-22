from csaiweb import db
import datetime
import jwt


class Login(db.Model):
    __tablename__ = 'Login'
    username = db.Column(db.String(100), primary_key=True)
    password = db.Column(db.String(100))


class Comments(db.Model):
    __tablename__ = 'Comment'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    body = db.Column(db.String(3000))
    author = db.Column(db.String(100))
    thread_id = db.Column(db.String(10))
    karma = db.Column(db.Integer, default=0)
    upvoted = db.Column(db.String(100))
    downvoted = db.Column(db.String(100))
    time_created = db.Column(db.String(100))


class Thread(db.Model):
    __tablename__ = 'Thread'
    s_no = db.Column(db.Integer, primary_key=True, autoincrement=True)
    body = db.Column(db.String(3000))
    author = db.Column(db.String(100))
    title = db.Column(db.String(300))
    karma = db.Column(db.Integer, default=0)
    upvoted = db.Column(db.String(100))
    downvoted = db.Column(db.String(100))
    time_created = db.Column(db.String(100))

#Faculty Part


class Faculty(db.Model):
    __bind_key__ = 'fac'
    __tablename__ = 'Faculty'
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    designation = db.Column(db.String(200))
    qualification = db.Column(db.String(200))
    email = db.Column(db.String(400))
    number = db.Column(db.String(100))
    image = db.Column(db.String(200))


def encode_auth_token(username):
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=10),
            'iat': datetime.datetime.utcnow(),
            'username': username
        }
        return jwt.encode(
            payload,
            'c0679f597745a986531e7cfc963bc811',
            algorithm='HS256'
        )
    except Exception as e:
        return e


def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(auth_token, 'c0679f597745a986531e7cfc963bc811')
        return payload['username']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'
