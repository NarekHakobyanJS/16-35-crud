const fs = require('fs')
const path = require('path')

const readHtml = (req, res, next) => {
    fs.promises.readFile(path.join(__dirname, '..', 'pages', 'index.html'), 'utf-8')
        .then((data) => {
            res.locals.homePage = data
            next()
        })
}

const readUsers = (req, res, next) => {
    fs.promises.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf-8')
        .then((data) => {
            const users = JSON.parse(data)
            res.locals.users = users
            next()
        })
}

module.exports = {
    readHtml,
    readUsers
}