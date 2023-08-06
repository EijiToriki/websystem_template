# docker image build -t flask_sample .
# docker container run -p 5000:5000 -d flask_sample
FROM python:3.10.6-slim

WORKDIR /backend

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "app.py" ]