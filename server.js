const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const db = require('./config');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const heroController = require('./controller/hero.controller');
const playerProfile = require('./controller/profile.controller');

app.use(express.static('public'));
app.use(express.static('upload'))
app.use('/css', express.static(__dirname + 'public/css'));

app.use(fileUpload());

app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.set("views", "view");

app.use('/hero', heroController);

app.use('/profile', playerProfile);
// app.get('/profile', (req, res) => {
//     db.getConnection((err, connection) => {
//         const sql = `SELECT * FORM profile WHERE id = '1'`
//         connection.query(sql, (err, rows) => {
//             connection.release();
//             if(!err) return res.render('profile', {profile})
//             if(err) return res.send(err);
//         })
//     })
// })
// app.post('/profile', (req, res) => {
    
// });


app.use("/", ((req, res) => {res.render('homePage');}));

app.listen(port, (() => {
    console.log(`server running at http://localhost:${port}`);
}));
