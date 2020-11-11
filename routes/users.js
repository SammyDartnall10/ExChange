const { request } = require('express')

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'exchange',
  password: 'root',
  port: 5432,
})


const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results)
    })
  })
}

const createUser = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      full_name,
      date_joined,
      email,
      can_offer
    } = body
    pool.query('INSERT INTO users (full_name, date_joined, email, can_offer) VALUES ($1, $2, $3, $4) RETURNING *', [full_name, date_joined, email, can_offer], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`New User Added: ${results}`)
    })
  })
}

module.exports = {
  getUsers,
  createUser
}