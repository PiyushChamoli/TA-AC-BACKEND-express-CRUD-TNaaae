var express = require('express')
var userRoute = require('./routes/user')

var app = express()

// middleware
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// routing middleware
app.get('/', (req,res) => {
    res.send('HOME PAGE')
})
app.get('/users', userRoute)

// error handle
app.use((req,res) => {
    res.send('PAGE NOT FOUND')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})