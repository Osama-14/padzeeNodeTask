const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const EmployRoute = require('./routes/employ')
const authRoute = require('./routes/auth')

const app = express()


// mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connect('mongodb+srv://osama:osama@cluster0.eefwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) =>{
  console.log(err)
})

db.once('open', () => {
  console.log("database connected")
})




app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api', authRoute)
app.use('/api/employ', EmployRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`running ${PORT}`)
})
