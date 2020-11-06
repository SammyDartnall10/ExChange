const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'webbat',
  password: 'root',
  post: 5432,
})

// port?