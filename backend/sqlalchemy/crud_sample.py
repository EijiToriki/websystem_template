from setting import session

from user import User

def insert():
  user = User()
  user.name = 'eiji'
  user.password = 'toriki0404'

  session.add(user)
  session.commit()

  session.close()


def select():
  users = session.query(User).all()
  session.close()
  for user in users:
    print(user.name)


def delete():
  user = session.query(User).first()

  session.delete(user)
  session.commit()

  session.close
  

if __name__ == '__main__':
  # insert()
  # select()
  delete()