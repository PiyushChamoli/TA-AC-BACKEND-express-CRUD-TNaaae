var express = require('express')
var mongoose = require('mongoose')
var path = require('path')

// connect database
mongoose.connect('mongodb://localhost/user-diary-3', (err) => {
    console.log(err ? err : 'database connected')
})

// instantiate
var app = express()

// middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

// routing middleware
app.get('/', (req,res) => {
    res.render('index')
})

app.use('/users', require('./routes/users.js'))

// error handle
app.use((req,res) => {
    res.send('Page Not Found!')
})

app.use((err,req,res) => {
    res.send(err)
})

//listener
app.listen(3000, () => {
    console.log('server listening on port 3000')
})