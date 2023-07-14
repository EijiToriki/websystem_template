from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base

# 接続先DBの設定
DATABASE = 'sqlite:///db/sample.db'

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