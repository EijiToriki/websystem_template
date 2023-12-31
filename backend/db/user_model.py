from sqlalchemy import Column, Integer, String

try:
    from db.setting import Engine
    from db.setting import Base
except ModuleNotFoundError:
    from setting import Engine
    from setting import Base


class User(Base):
    """
    ユーザモデル
    """
    __tablename__ = 'users'
    __table_args__ = {
        'comment': 'ユーザー情報のマスターテーブル'
    }

    id = Column('id', Integer, primary_key=True, autoincrement=True)
    name = Column('name', String(200))
    email = Column('email', String(200), unique=True)
    password = Column('password', String(200))

if __name__ == "__main__":
    Base.metadata.create_all(bind=Engine)