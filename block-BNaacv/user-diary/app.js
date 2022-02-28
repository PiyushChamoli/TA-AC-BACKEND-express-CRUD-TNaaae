var express = require('express')
var path = require('path')
var userRoute = require('./routes/userRoute')

var app = express()

// middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({extended:false}))

// routing middleware
app.get('/', (req,res) => {
    res.send('HOME PAGE')
})
app.use('/users', userRoute)

// error handle
app.use((req,res) => {
    res.status(404).send('PAGE NOT FOUND')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})