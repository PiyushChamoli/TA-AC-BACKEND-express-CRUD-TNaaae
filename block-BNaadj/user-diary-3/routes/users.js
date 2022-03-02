var express = require('express')
var router = express.Router()
var User = require('../models/User')

// read all users
router.get('/', (req,res,next) => {
    User.find({}, (err, allUsers) => {
        if (err) return next(err)
        res.render('listUsers', {users:allUsers})
    })
})

// create user form
router.get('/new', (req,res,next) => {
    res.render('userForm')
})

// read single user
router.get('/:id', (req,res,next) => {
    var id = req.params.id
    User.findById(id, (err, user) => {
        if (err) return next(err)
        res.render('singleUser', {user})
    })
})

// create user
router.post('/new', (req,res,next) => {
    User.create(req.body, (err, newUser) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

// update form
router.get('/:id/edit', (req,res,next) => {
    User.findById(req.params.id, (err,user) => {
        if (err) return next(err)
        res.render('editUserForm', {user})
    })
})

// update user
router.post('/:id/edit', (req,res,next) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err,user) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

// delete user
router.get('/:id/delete', (req,res,next) => {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) return next(err)
        res.redirect('/users')
    })
})

module.exports = router