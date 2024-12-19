const express = require('express')
const {readUsers} = require('../middleware/readFile')
const {checkEmail, checkBody} = require('../middleware/forPost')

const router = express.Router()

router.get('/', readUsers, (req, res) => {
    const {users} = res.locals;
    res.json(users)
})

router.post('/', [readUsers, checkEmail, checkBody], (req, res) => {
    res.status(201).json(res.locals.user)
})



module.exports = router