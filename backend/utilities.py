import re
import hashlib

def get_digest(password):
    pwd = bytes(password, 'utf-8')
    digest = hashlib.sha256(pwd).hexdigest()
    return digest


def isMail(email):
    pattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"

    if re.match(pattern, email):
        return True
    else:
        return False
