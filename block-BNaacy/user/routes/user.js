var express = require('express')
var router = express.Router()
var User = require('../models/User')

router.get('/', (req,res) => {
    res.send('All Users')
})
router.get('/new', (req,res) => {
    res.render('userForm')
})
router.post('/', (req,res) => {
    console.log(req.body)
    User.create(req.body, (err,user) => {
        if (err) res.redirect('/users/new')
        res.redirect('/')
    })
})

module.exports = router