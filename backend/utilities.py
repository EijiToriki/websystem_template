import re
import hashlib
import smtplib
from email.mime.text import MIMEText

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


def matchPassword(password):
    pattern = '\A[a-z\d]{8,100}\Z(?i)'

    if re.match(pattern, password):
        return True
    else:
        return False


def send_mail(email):
    # メール情報の設定
    from_email ='kt2lage@gmail.com' 
    to_email = email
    mail_title = '【ご登録ありがとうございます】web-template'
    message = '''
    Web-template へのご登録ありがとうございます。
    '''
    
    # MIMEオブジェクトでメールを作成
    msg = MIMEText(message, 'plain')
    msg['Subject'] = mail_title
    msg['To'] = to_email
    msg['From'] = from_email
    
    # サーバを指定してメールを送信する
    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    smtp_password = 'bdjczovcabcgffvs'
    
    server = smtplib.SMTP(smtp_host, smtp_port)
    server.starttls()
    server.login(from_email, smtp_password)
    server.send_message(msg)
    server.quit()