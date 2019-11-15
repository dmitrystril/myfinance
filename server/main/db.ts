const { Pool } = require('pg');

const dbPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myfinance',
  password: 'admin',
  post: 5432,
})

module.exports = dbPool;
