const { request } = require('express')

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'webbat',
  password: 'root',
  post: 5432,
})


const getListings = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM listings ORDER BY departure_date ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results)
    })
  })
}



module.exports = {
  getListings
}