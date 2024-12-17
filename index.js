const express = require('express')
const {readHtml, readUsers} = require('./middleware/readFile')
const {checkCase} = require("./middleware/forPost")
const app = express()

app.use(express.json())
app.use(express.static('pages'))

app.get('/', readHtml, (req, res) => {
    const {homePage} = res.locals
    res.set({
        'content-type' : 'text/html',
        'cache-control' : 'no-store'
    })
    res.status(200).send(homePage)
});

app.get('/users', readUsers, (req, res) => {
    const {users} = res.locals;
    res.json(users)
})

app.post('/users', readUsers, checkCase, (req, res) => {
    
    console.log(req.body);
})


// fetch('http://localhost:3000/users', {
//     method : "POST",
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({name : "Alik", age : 34})
// })
app.listen(3000, () => console.log('server is Running!'))
