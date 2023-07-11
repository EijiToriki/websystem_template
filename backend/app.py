import sqlite3

from flask import Flask, request, jsonify
from flask_cors import CORS

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
  name, password = data['name'], data['password']

  dbname = "sample.db"
  conn = sqlite3.connect(dbname)
  cur = conn.cursor()

  password = get_digest(password)

  res = cur.execute(
    "select id from user where user_name = '" + name + "' and password = '" + password + "'"
  ).fetchall()

  conn.commit()
  conn.close

  if len(res) == 0:
    res = -1
  else:
    res = res[0][0]


  result = {}
  result['result'] = res

  return jsonify(result)



if __name__ == '__main__':
   app.run(debug=True, port=5000)