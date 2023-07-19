try:
  from db.setting import session
  from db.user_model import User
except ModuleNotFoundError:
  from setting import session
  from user_model import User

def insert_user(name, email, password):
  user = User()
  user.name = name
  user.email = email
  user.password = password

  session.add(user)
  session.commit()
  session.close()


def select_user_id(email, password):
  users = session.query(User.id).filter(User.email==email, User.password==password).all()
  session.close()

  if len(users) == 1:
    return users[0][0]
  else:
    return -1
  

def select_user_count(name):
  user_cnt = session.query(User.id).filter(User.name==name).count()
  session.close()
  return user_cnt


def select_email_count(email):
  email_cnt = session.query(User.id).filter(User.email==email).count()
  session.close()
  return email_cnt


def select_user_info(id):
  user = session.query(User.name, User.email).filter(User.id==id).all()
  session.close()

  return user[0]
  


## このスクリプトをコンソールから直接実行したときのみ、実行されるメソッド
## レコードを全削除する。
def delete_record():
  session.query(User).delete()
  session.commit()
  session.close()
  print('finished delete user')


if __name__ == '__main__':
  delete_record()