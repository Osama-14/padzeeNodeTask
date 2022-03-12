const User = require('../model/user')
const bycrypt = require('bcryptjs')
const jwl = require('jsonwebtoken')

const register = (req, res, next) => {
    bycrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err) {
            req.json({
                error:err
            })
        }
    })

    let user = new User ({
        name : req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPass

    })
    user.save()
    .then(user => {
        res.json({
            message: 'added user'
        })
    })
    .catch(err => {
        res.json({
            message : 'an error'
        })
    })
}

module.exports = {
    register
}