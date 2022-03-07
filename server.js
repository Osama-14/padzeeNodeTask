const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public/body.html')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/form', (req, res) => {
    res.send('Hello form!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})