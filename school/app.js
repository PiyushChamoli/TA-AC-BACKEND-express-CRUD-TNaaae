var express = require('express')
var mongoose = require('mongoose')
var path = require('path')

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'database connected')
})
var app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('serverlistening on port 3000')
})