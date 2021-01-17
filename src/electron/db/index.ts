import mysql from 'mysql'

const DB = mysql.createPool({
  connectionLimit: 2,
  host: '127.0.0.1',
  port: 42333,
  user: 'pulsemonitoring@localhost',
  password: 'password',
  database: 'pulsemonitoring',
})

export default DB
