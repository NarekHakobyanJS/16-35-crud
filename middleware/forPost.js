const fs = require('fs').promises
const path = require('path')

const checkEmail = (req, res, next) => {
    const {email} = req.body
    const {users} = res.locals
    const user = users.find((u) => u.email === email);
    if(!user){
        next()
       
    }else {
        res.status(422).json({'msg' : `${email} used`})
    }

}

const checkBody = (req, res, next) => {
    const body = req.body
    const {users} = res.locals
    
    if('age' in body && 'email' in body && "name" in body){
        console.log(1);
        const user = {
            id : Date.now(),
            name : body.name,
            email : body.email,
            age : body.age
        }
        users.push(user)
        fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
            .then(() => {
                fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users))
                    .then(() => {
                        res.locals.user = user
                        next()
                    })
            })
    }else {
        res.status(422).json({'msg' : "Invalid data"})
    }
}
module.exports = {
    checkEmail,
    checkBody
}