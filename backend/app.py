from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///friends.db"
#here i tellig to my flask application how to connect dadabase
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db=SQLAlchemy(app)
#in this i create SQLAlechemy object and binds it to flask 

import routes

with app.app_context():
    db.create_all()

if(__name__ == "__main__"):
    app.run(debug=True)
#above app.run is used to run the app.py