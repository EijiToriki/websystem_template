from flask import Flask, request, jsonify
from flask_cors import CORS

from db.user_crud import select_user_id, select_user_count, insert_user

from hash_password import get_digest

app = Flask(__name__)
CORS(app)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route("/login", methods=['GET', 'POST'])
def userLogin():
  data = request.get_json()
  name = data['name']
  password = get_digest(data['password'])

  result = {}
  result['result'] = select_user_id(name, password)

  return jsonify(result)


@app.route("/signup", methods=['GET', 'POST'])
def userSignUp():
  data = request.get_json()
  name = data['name']
  password = get_digest(data['password'])  

  result = {}
  if select_user_count(name) == 0:
    insert_user(name, password)
    result['result'] = select_user_id(name, password)
  else:
    result['result'] = -1

  return jsonify(result) 

if __name__ == '__main__':
   app.run(debug=True, port=5000)