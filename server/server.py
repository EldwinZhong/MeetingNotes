from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

#api.add_resource(Test,'/test')

if __name__ == '__main__':
    print("Loading db")
    print("Starting flask")
    app.run(debug=True), #starts Flask
