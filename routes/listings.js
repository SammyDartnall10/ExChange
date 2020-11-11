const { request } = require('express')

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'exchange',
  password: 'root',
  port: 5432,
})


const getListings = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM listings', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results)
    })
  })
}

const createListing = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      title,
      created_by,
      company_for,
      description,
      status,
      date_created
    } = body
    pool.query('INSERT INTO listings (title, created_by, company_for, description, status, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, created_by, company_for, description, status, date_created], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`New Quote Added: ${results}`)
    })
  })
}

module.exports = {
  getListings,
  createListing
}