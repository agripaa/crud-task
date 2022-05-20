const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "course"
})

db.connect(((err) => {
    if(err) return err
    console.log('Database Connected!');
}))

module.exports = db