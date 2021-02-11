const express = require('express');
const router = express.Router();
const pool = require('../config/db')

router.get('/', (req, res) => {
  res.json({ msg: 'listings route' })
})

router.get('/all', (req, res, next) => {

  let queryST = `SELECT * FROM listings`;
  pool
    .query(queryST)
    .then(data => {
      res.json({ msg: data.rows })
    })
    .catch(err => console.error('Error executing query', err.stack))
})

router.post('/', (req, res, next) => {
  return new Promise(function (resolve, reject) {
    const {
      title,
      created_by,
      company_for,
      description,
      status,
      date_created
    } = req.body

    pool.query('INSERT INTO listings (title, created_by, company_for, description, status, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, created_by, company_for, description, status, date_created], (error, results) => {
      if (error) {
        reject(error)
      }
      console.log(results)
      resolve(res.json({ msg: `New listing added for ${title}` }))

    })
  })
});

module.exports = router

