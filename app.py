import os

# Heroku check
is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True

import pandas as pd
import json
from flask import Flask, jsonify, render_template

# SQL Alchemy
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

# # Import your config file(s) and variable(s)
# if is_heroku == True:
#     # if IS_HEROKU is found in the environment variables, then use the rest
#     # NOTE: you still need to set up the IS_HEROKU environment variable on Heroku (it is not there by default)
#     remote_db_endpoint = os.environ.get('remote_db_endpoint')
#     remote_db_port = os.environ.get('remote_db_port')
#     remote_db_name = os.environ.get('remote_db_name')
#     remote_db_user = os.environ.get('remote_db_user')
#     remote_db_pwd = os.environ.get('remote_db_pwd')

# else:
#     # Config variables
#     import config
#     from config import remote_db_endpoint, remote_db_port
#     from config import remote_db_name, remote_db_user, remote_db_pwd

# Import Pandas
import pandas as pd


#%%

#################################################
# Flask Setup
#################################################
#instantiate an app
app = Flask(__name__)

#%%
#################################################
# Flask Routes
#################################################
#%%
#default route
@app.route("/")
def home():
    return render_template('index.html')

#%%
#explore route
@app.route("/explore")
def explore():
    return render_template('explore.html')

@app.route("/projections")
def projections():
    return render_template('projections.html')


@app.route("/rawdata")
def rawdata():
    return render_template('rawdata.html')


@app.route("/evidence.html")
def evidence():
    return render_template('evidence.html')

@app.route("/causes.html")
def causes():
    return render_template('causes.html')

@app.route("/effects.html")
def effects():
    return render_template('effects.html')

@app.route("/solutions.html")
def solutions():
    return render_template('solutions.html')     

#%%
@app.route("/css/core")
def core_css(): 
    # Opening JSON file 
    f = open('static/css/core.css',)
    core = json.load(f)

    return core



#%%
if __name__ == '__main__':
    app.run(debug=True)