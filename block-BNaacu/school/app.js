var express = require('express')
var path = require('path')
var studentsRouter = require('./routes/students')

var app = express()

// middleware
app.use(express.urlencoded({extended:false}))

// setup view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

//routing middleware
app.get('/', (req,res) => {
    res.send('Home Page')
})
app.use('/students', studentsRouter)

// error handle
app.use((req,res) => {
    res.send('PAGE NOT FOUND')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})