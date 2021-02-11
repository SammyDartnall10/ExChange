const express = require('express');
const router = express.Router();
const pool = require('../config/db')

router.get('/', (req, res, next) => {
  res.json({ msg: 'users route' })
  // pool
  //   .query(`SELECT * FROM listings`,)
  //   .then(data => {
  //     console.log(data.rows)
  //     res.json(data.rows)
  //   })
  //   .catch(err => console.error('Error executing query', err.stack))
})

module.exports = router

// const Pool = require('pg').Pool

// const pool = new Pool({
//   user: 'admin',
//   host: 'localhost',
//   database: 'exchange',
//   password: 'root',
//   port: 5432,
// })


// const getUsers = () => {
//   return new Promise(function (resolve, reject) {
//     pool.query('SELECT * FROM users', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(results)
//     })
//   })
// }

// const createUser = (body) => {
//   return new Promise(function (resolve, reject) {
//     const {
//       full_name,
//       date_joined,
//       email,
//       can_offer
//     } = body
//     pool.query('INSERT INTO users (full_name, date_joined, email, can_offer) VALUES ($1, $2, $3, $4) RETURNING *', [full_name, date_joined, email, can_offer], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`New User Added: ${results}`)
//     })
//   })
// }

// app.post('/users', (req, res) => {
//   users.createUser(req.body)
//     .then(response => {
//       console.log("listing added")
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     })
// })

// module.exports = {
//   getUsers,
//   createUser
// }