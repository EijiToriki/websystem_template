from flask import Flask, request, jsonify
from flask_cors import CORS

from db.user_crud import select_user_id, select_email_count, insert_user

from utilities import get_digest, isMail

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
  email = data['email']
  password = get_digest(data['password'])

  result = {}
  result['result'] = select_user_id(email, password)

  return jsonify(result)


@app.route("/signup", methods=['GET', 'POST'])
def userSignUp():
  data = request.get_json()
  name = data['name']
  email = data['email']
  password = get_digest(data['password'])
  confirm = get_digest(data['confirm'])

  result = {}
  if name == "" or password == "" or confirm == "":
    ## 何も入力されていない
    result['result'] = -1
  elif not isMail(email):
    result['result'] = -2
  elif select_email_count(email) == 0:
    if password == confirm:
      insert_user(name, email, password)
      result['result'] = select_user_id(email, password)
    else:
      ## パスワードが一致しない
      result['result'] = -3
  else:
    ## 既にメールアドレスが存在している
    result['result'] = -4

  return jsonify(result) 

if __name__ == '__main__':
   app.run(debug=True, port=5000)