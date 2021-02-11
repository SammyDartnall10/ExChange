const express = require('express');
const router = express.Router();
const pool = require('../config/db')

router.get('/', (req, res, next) => {
  res.json({ msg: 'users route' })
})

router.get('/all', (req, res, next) => {

  let queryST = `SELECT * FROM users`;
  pool
    .query(queryST)
    .then(data => {
      res.json({ msg: data.rows })
    })
    .catch(err => console.error('Error executing query', err.stack))
})

module.exports = router

