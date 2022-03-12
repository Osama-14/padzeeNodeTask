const {  response, request } = require('express')
const Employ = require('../model/employ')

const index = (req, res, next) => {
    Employ.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error'
        })
    })

}

const show = (req, res, next) => {
    let employID = req.body.employID
    Employ.findById(employID)
    .then(response => {
        res.json({
            response
        })
    })

    .catch(error => {
        res.json({
            message: "error"
        })
    })
}


const store = (req, res, next) => {
    console.log(req.body)
    let employ =  new Employ ({
    name : req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age

})
employ.save()
.then(response => {
    res.json({
        message: 'added employee'
    })
})
.catch(err => {
    res.json({
        message : 'an error'
    })
})
}

const update = (req, res,next) => {
    let employID = req.body.employID
    
    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,

    }

    Employ.findByIdAndUpdate(employID, {$set: updateData})
    .then(() => {
        res.json({
            message: "employe update"
        })
    })
    .catch(error => {
        res.json({
            message:"an error"
        })
    })
}


const destroy = (req, res ,next) => {
    let employID = req.body.employID
    Employ.findByIdAndRemove(employID)
    .then(() => {
        req.json({
            message: "employ deleted"
        })
    })
    .catch(error => {
        req.json ({
            message:'an error'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}