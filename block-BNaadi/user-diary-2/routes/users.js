var express = require('express')
var router = express.Router()
var User = require('../models/User')

// read all users
router.get('/', (req,res,next) => {
    User.find({}, (err, allUsers) => {
        if (err) return next(err)
        res.render('listUsers', {users: allUsers})
    })
})

// read single user
router.get('/:id', (req,res) => {
    var id = req.params.id
    User.findById(id, (err, user) => {
        if (err) return next(err)
        res.render('singleUser', {user})
    })
})

// create user
router.post('/', (req,res,next) => {
    User.create(req.body, (err, newUser) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

// update user
router.put('/:id', (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

// delete user
router.delete('/:id', (req,res) => {
    User.findByIdAndDelete(req.params.id, (err,deletedUser) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

module.exports = router