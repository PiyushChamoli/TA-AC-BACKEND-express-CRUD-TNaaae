var express = require('express')
var router = express.Router()

router.get('/new', (req,res) => {
    res.render('studentForm')
})

router.post('/', (req,res) => {
    // create a student
})

router.get('/', (req,res) => {
    // get all students
})

router.get('/:id', (req,res) => {
    // get student by id
})

module.exports = router