var express = require('express')
var router = express.Router()
var User = require('../models/User')

router.get('/', (req,res,next) => {
    User.find({}, (err, allUsers) => {
        if(err) return next(err)
        res.render('users', {users: allUsers})
    })
})

router.get('/new', (req,res) => {
    res.render('userForm')
})

router.get('/:id', (req,res,next) => {
    var id = req.params.id
    User.findById(id, (err,user) => {
        if (err) return next(err)
        res.render('singleUser', {user: user})
    })
})

router.get('/:id/edit', (req,res) => {
    var id = req.params.id
    User.findById(id, (err,user) => {
        res.render('userEditForm', {user})
    })
})

router.post('/', (req,res) => {
    console.log(req.body)
    User.create(req.body, (err,user) => {
        if (err) res.redirect('/users/new')
        res.redirect('/')
    })
})

router.post('/:id', (req,res,next) => {
    var id = req.params.id
    User.findByIdAndUpdate(id,req.body, (err) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

module.exports = router