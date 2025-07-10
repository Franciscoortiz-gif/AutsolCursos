import mysql from "mysql2/promise"

export const Pool = mysql.createPool({
    host:"localhost",
    port: 3307,
    database:"autsolcursos",
    user:"mysql",
    password: "root"
})