var express = require('express')
var mongoose = require('mongoose')
var path = require('path')
var usersPath = require('./routes/users')

// mongodb connect
mongoose.connect('mongodb://localhost/user-diary-2', (err) => {
    console.log(err ? err : 'connected to database')
})

// instantiate
var app = express()

// middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// routing middleware
app.get('/', (req,res) => {
    res.render('index')
})
app.use('/users', usersPath)

// error handle
app.use((req,res) => {
    res.send('Page Not Found!')
})

app.use((err,req,res) => {
    res.send(err)
})

// listener
app.listen(3000, () => {
    console.log('server listening on port 3000')
})