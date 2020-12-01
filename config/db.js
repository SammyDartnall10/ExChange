const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'exchange',
  password: 'root',
  port: 5432,
})

module.exports = pool
// port?