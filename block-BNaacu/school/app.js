var express = require('express')
var path = require('path')
var studentsRouter = require('./routes/students')

var app = express()

// middleware

// setup view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

//routing middleware
app.use('/students', studentsRouter)

app.listen(3000, () => {
    console.log('server listening on port 3000')
})