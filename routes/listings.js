const express = require("express");
const router = express.Router();
const pool = require('../config/db')


router.get('/', (req, res) => {
  res.json('hello world')
})

router.get('/all', (req, res, next) => {
  pool.query(`SELECT * FROM listings 
              ORDER BY date_created DESC`,
    (err, res) => {
      res.json(res.rows)
    })
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

// const getListings = () => async ()=>{
//   try{
//     const res = await axios.get
//   }catch(err){
//     console.log(err)
//   }
// }


// app.get('/', (req, res) => {
//   // listings.getListings()
//   //   .then(response => {
//   //     console.log(response.rows)
//   //     // res.json(response.rows)
//   //     res.status(200).send(response.rows)
//   //   })
//   //   .catch(error => {
//   //     res.status(500).send(error)
//   //   })
//   res.json({ msg: "welcome to alt work" })
// })

// @route   GET /lisitngs
// @desc    Get all listings
// @access  Public
// router.get("/", (req, res) => {
//   return new Promise(function (resolve, reject) {
//     pool.query('SELECT * FROM listings', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve((results) => {
//         console.log("got all listings")
//       })
//     })
//   })
// });


// const { Pool } = require('pg')
// const pool = new Pool()
// pool.query('SELECT $1::text as name', ['brianc'], (err, result) => {
//   if (err) {
//     return console.error('Error executing query', err.stack)
//   }
//   console.log(result.rows[0].name) // brianc
// })


// const getListings = () => {
//   return new Promise(function (resolve, reject) {
//     pool.query('SELECT * FROM listings', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve((results) => {
//         console.log("got all listings")
//       })
//     })
//   })
// }

// const createListing = (body) => {
//   return new Promise(function (resolve, reject) {
//     const {
//       title,
//       created_by,
//       company_for,
//       description,
//       status,
//       date_created
//     } = body
//     pool.query('INSERT INTO listings (title, created_by, company_for, description, status, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, created_by, company_for, description, status, date_created], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`New Quote Added: ${results}`)
//     })
//   })
// }


// app.post('/listing', (req, res) => {
//   listings.createListing(req.body)
//     .then(response => {
//       console.log("listing added")
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     })
// })

// module.exports = {
//   getListings,
//   createListing
// }