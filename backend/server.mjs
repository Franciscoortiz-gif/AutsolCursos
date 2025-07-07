import express from "express"
import { Pool } from "./lib/db.mjs";
import md5 from "md5"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res)=> {
    res.send("Heelo World")
})

app.post("/users/regist/valid/", async (req,res) => {
    let salida = 0
    const data = req.body;
    const pass = md5(data.User_password);
    const dbdata = await Pool.query("SELECT * FROM users WHERE email = ?",[data.email]);
    if(dbdata[0].length == 0){
        await Pool.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",[data.user_name, data.email, pass])
        await Pool.query("COMMIT")
        salida = 200
        Pool.end();
    }else{
        salida = 404
        Pool.end();
    }
    res.send(salida)
})
app.post("/users/login/", async(req,res) =>{
    const data = req.body
    const passenc = md5(data.passwo)
    const datadb = await Pool.query("SELECT * FROM users WHERE email = ? AND password = ?",[data.us, passenc]) 
    if(datadb[0].length > 0){
        res.send(JSON.stringify(datadb[0]))
    }else{
        res.send(404)
    }
})

app.listen(5002);

