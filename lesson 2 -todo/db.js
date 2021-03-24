const mysql = require('mysql');

const config  = {
    host : "localhost",
    port : 3306,
    user : "root",
    password :  "",
    database : "todos"
}

const con  = mysql.createConnection(config);

con.connect(err => err ? console.log(err) : console.log("DB connected"));

module.exports = con;
