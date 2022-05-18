const express=require('express')
const app=express()
const mongoose = require('mongoose')
const route = require('./routes/signin')
const MongoClient = require('mongodb')
async function start(){
    try{
        await mongoose.connect('mongodb+srv://123:123@bet.t7ijm.mongodb.net/user',{
            useNewUrlParser: true
        })
        app.listen(3000, () => {
            console.log(`Example app listening on port`)
        })
    }
    catch (e){
        console.log(e)
    }
}
start()
        app.set('view engine', 'ejs')
        app.set('views')
        app.use(express.static(__dirname + '/public'))
        app.use(express.urlencoded({extended: true}))
        app.use(route)
        app.get('/', function (req, res) {
            res.render('welcome')
        })
        app.get('/logout', function (req, res) {
            res.redirect('/')
        })
        app.get('/main', function (req, res) {
            res.render('main')
        })
        app.get('/stands', function (req, res) {
            res.render('stands')
        })
        app.get('/efl-stands', function (req, res) {
            res.render('efl-stands')
        })
        app.get('/bundes', function (req, res) {
            res.render('bundes')
        })
        app.get('/laliga', function (req, res) {
            res.render('laliga')
        })
        app.get('/serie_a', function (req, res) {
            res.render('serie_a')
        })

        app.get('/about', function (req, res) {
            res.render('about')
        })
