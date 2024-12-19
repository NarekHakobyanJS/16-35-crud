const express = require('express')
const {readHtml} = require('../middleware/readFile')

const router = express.Router()

router.get('/', readHtml, (req, res) => {
    const {homePage} = res.locals
    res.set({
        'content-type' : 'text/html',
        'cache-control' : 'no-store'
    })
    res.status(200).send(homePage)
});

module.exports = router