from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base

# 接続先DBの設定
## sqliteを使う場合 ##
# DATABASE = 'sqlite:///sample.db'    # レコードを削除する場合は、このパスで実行する
# DATABASE = 'sqlite:///db/sample.db'
######################

## MySQLを使う場合
try:
  import db.config
  user = db.config.DB_USER
  password = db.config.PASSWORD
  host = db.config.HOST
  db_name = db.config.DATABASE
except ModuleNotFoundError:
  import config
  user = config.DB_USER
  password = config.PASSWORD
  host = config.HOST
  db_name = config.DATABASE

DATABASE = f'mysql+mysqlconnector://{user}:{password}@{host}/{db_name}'
######################

# Engine の作成
Engine = create_engine(
  DATABASE,
  encoding="utf-8",
  echo=False
)
Base = declarative_base()

# Sessionの作成
session = scoped_session(
  sessionmaker(
    autocommit = False,
    autoflush = True,
    bind = Engine
  )
)

# modelで使用する
Base = declarative_base()
Base.query = session.query_property()