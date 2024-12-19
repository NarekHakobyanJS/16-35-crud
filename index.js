const express = require('express')
require('dotenv').config()
const homeRoute = require('./routes/index')
const userRoute = require('./routes/users')

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.static('pages'))

app.use('/', homeRoute)
app.use('/users', userRoute)

app.all('*',function(req, res) {
    res.status(400).json({"msg" : "Invalid URL"})
})

// fetch('http://localhost:3000/users', {
//     method : "POST",
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({name : "Alik", age : 34})
// })
app.listen(PORT, () => console.log(`server is Running! ${PORT}`))
