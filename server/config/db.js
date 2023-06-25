var mysql = require("mysql");

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: '135246',
    database : 'pizzaalvolo',
    port: 3306
})

module.exports = db;
