import {Pool} from 'pg';

const dbPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myfinance',
  password: 'admin',
  port: 5432,
})

export default dbPool;
