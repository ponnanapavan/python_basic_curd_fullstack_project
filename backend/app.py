from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS
import os
app=Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///friends.db"
#here i tellig to my flask application how to connect dadabase
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db=SQLAlchemy(app)
#in this i create SQLAlechemy object and binds it to flask 

frontend_folder=os.path.join(os.getcwd(), "..", "frontend")
dist_folder=os.path.join(frontend_folder, "dist")

#server static from the "dist"
@app.route("/", defaults={"filename":""})
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename="index.html"
    return send_from_directory(dist_folder,filename)

import routes

with app.app_context():
    db.create_all()

if(__name__ == "__main__"):
    app.run(debug=True, host='0.0.0.0')
#above app.run is used to run the app.py