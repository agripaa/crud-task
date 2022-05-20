const port = 3001
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const heroController = require('./controller/hero.controller');
const playerProfile = require('./controller/profile.controller')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")
app.set("views", "view")

app.use('/hero', heroController)

app.use('/profile', playerProfile)

app.use("/", ((req, res) => {res.render('homePage');}))

app.listen(port, (() => {
    console.log(`server running at http://localhost:${port}`)
}))
