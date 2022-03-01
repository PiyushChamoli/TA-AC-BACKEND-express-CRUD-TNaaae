var express = require('express')
var mongoose = require('mongoose')
var userRoute = require('./routes/user')
var path = require('path')

// connect mongodb
mongoose.connect('mongodb://localhost/users', (err) => {
    console.log(err ? err : 'connected to database')
})

// instantiate
var app = express()

// middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:false}))

// routing middleware
app.get('/', (req,res) => {
    res.send('Home Page')
})

app.use('/users', userRoute)

// error handle
app.use((req,res) => {
    res.send('Page Not Found')
})

app.use((err,req,res) => {
    res.send(err)
})

// add listener
app.listen(3000, () => {
    console.log('server listening on port 3000')
})