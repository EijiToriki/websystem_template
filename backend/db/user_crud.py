from db.setting import session

from db.user_model import User

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
  print(email, password)
  session.close()

  if len(users) == 1:
    return users[0][0]
  else:
    return -1
  

def select_user_count(name):
  user_cnt = session.query(User.id).filter(User.name==name).count()
  return user_cnt


def select_email_count(email):
  email_cnt = session.query(User.id).filter(User.email==email).count()
  return email_cnt