import flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__, static_folder="build", static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///UserDataBase.db'
app.config['SQLALCHEMY_BINDS'] = {'fac': 'sqlite:///FacultyDataBase.db'}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'c0679f597745a986531e7cfc963bc811'

db = SQLAlchemy(app)

from csaiweb import routes, auth_routes