const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const listings = require('./routes/listings')
const users = require('./routes/users')

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
})

app.use('/listings', listings);
app.use('/users', users);

app.get('/', (req, res) => {
  res.json({ msg: 'welcome to alt work' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})