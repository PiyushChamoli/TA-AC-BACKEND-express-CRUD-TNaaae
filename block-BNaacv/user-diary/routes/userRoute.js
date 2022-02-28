var express = require('express')
var router = express.Router()

router.get('/', (req,res) => {
    // list users
    res.render('users.ejs')
})

router.get('/new', (req,res) => {
    // get user form
    res.render('userForm.ejs')
})

router.post('/', (req,res) => {
    // capture form data
})

router.get('/:id', (req,res) => {
    // get user data
    res.render('singleUser.ejs')
})

router.get('/:id/edit', (req,res) => {
    // edit form
})

router.put('/:id', (req,res) => {
    // capture data and update
})

router.delete('/:id', (req,res) => {
    // delete user 
})

module.exports = router
