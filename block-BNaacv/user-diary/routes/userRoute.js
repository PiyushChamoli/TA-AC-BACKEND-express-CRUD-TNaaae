var express = require('express')
var router = express.Router()

router.get('/', (req,res) => {
    // list users
})

router.get('/new', (req,res) => {
    // get user form
    res.render('userForm.ejs')
})

router.get('/:id', (req,res) => {
    // get user data
})

module.exports = router
