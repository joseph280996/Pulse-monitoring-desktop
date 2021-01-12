import mysql, { Connection } from 'mysql'

export default class MySQLDatabase {
  db: Connection

  constructor() {
    this.db = mysql.createConnection({
      host: 'localhost',
      user: 'pulsemonitoring',
      password: process.env.DB_SECRET,
      database: 'pulsemonitoring',
    })
  }

  connect() {
    this.db.connect()
  }

  query(sql: string, callback: (params: any) => any) {
    this.db.query(sql, callback)
  }

  end() {
    this.db.end()
  }
}
