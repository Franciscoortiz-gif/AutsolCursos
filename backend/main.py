from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
import psycopg2
import hashlib

def get_connect():
    try:
        conn = psycopg2.connect(
            host='127.0.0.1',
            port="5432",
            dbname='autsolcursos',
            user='admin',
            password='root'
            )
        return conn
    except:
        return "Internal Error Server 404"

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/')
def hello():
   return "hello word"

@app.route('/users/login/', methods=['GET', 'POST'])
def getusers():
    data = request.get_json(force=True)
    user = data.get('us')
    passwor = data.get('passwo')
    conn = get_connect()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE name = (%s)", [user])
    result = cur.fetchone()
    md = hashlib.md5(passwor.encode('utf-8'))
    if result and md.hexdigest() == result[2]:
        salida = result
    else:
        salida = 404
    cur.close()
    conn.close()
    return jsonify(salida)


@app.route('/users/regist/valid/', methods=['GET','POST'])
def getRegist():
    data = request.get_json(force=True)
    user = data.get('user_name')
    passwor = data.get('User_password')
    passencryp = hashlib.md5(passwor.encode('utf-8'))
    passencrypt = passencryp.hexdigest()
    conn = get_connect()
    conn.set_session(readonly=False, autocommit=True)
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE name = (%s)", [user])
    q = cur.fetchall()
    if q:
        res1 = q[0]
        re2 = res1[1]
    else:
        re2 = ""
    if not re2 == user :
        #print(re2)
        cur.execute("INSERT INTO users (name, password) VALUES (%s,%s)",[user, passencrypt]);
        cur.close()
        conn.close()
        salida = 200
    else:
        salida = 404
        cur.close()
        conn.close()
        #print("usuario registrado")
    return jsonify(salida)

 

if __name__ == '__main__':
    app.run(debug = True, port=5002)
    
    
