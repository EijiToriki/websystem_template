from flask import Flask, request, jsonify
from flask_cors import CORS

from db.user_crud import select_user_id, select_email_count, select_user_info, insert_user, delete_record

from utilities import get_digest, isMail, matchPassword, send_mail

app = Flask(__name__)
CORS(app)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route("/test", methods=['GET'])
def test():
  result = {}
  insert_user(name='eiji', email='eiji.sample.co.jp', password='123')
  result['result'] = select_user_id(email='eiji.sample.co.jp', password='123')
  return result


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
  password = data['password']
  hash_password = get_digest(data['password'])
  hash_confirm = get_digest(data['confirm'])

  result = {}
  if name == "" or email == "":
    ## 何も入力されていない
    result['result'] = -1
  elif not isMail(email):
    result['result'] = -2
  elif select_email_count(email) == 0:
    if hash_password == hash_confirm:
      if matchPassword(password):
        insert_user(name, email, hash_password)
        # send_mail(email)
        result['result'] = select_user_id(email, hash_password)
      else:
        ## パスワードが英数字混合8文字以上でない
        result['result'] = -4      
    else:
      ## パスワードが一致しない
      result['result'] = -3
  else:
    ## 既にメールアドレスが存在している
    result['result'] = -5

  return jsonify(result) 


@app.route("/getuser", methods=['GET', 'POST'])
def getUser():
  data = request.get_json()
  id = data['id']
  res = select_user_info(id)

  result = {}
  result['id'] = id
  result['name'] = res[0]
  result['email'] = res[1]

  return jsonify(result)


@app.route("/delete")
def delete():
  delete_record()

  result = {}
  result['result'] = 1
  return jsonify(result)


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)