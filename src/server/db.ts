import { createPool, Pool, queryCallback } from 'mysql'
import { ElectronTypes } from '../common/types'

const databaseConfig = {
  connectionLimit: 2,
  host: '127.0.0.1',
  port: 42333,
  user: 'pulsemonitoring',
  password: 'Jpxt280996@1406',
  database: 'pulsemonitoring',
}

class DBInstance implements ElectronTypes.DB {
  private pool: Pool | null = null

  constructor() {
    try {
      this.pool = createPool(databaseConfig)
    } catch (err) {
      console.log(err)
    }
  }

  private getPool() {
    return this.pool
  }

  query = (query: string, values: Array<any>, callback?: queryCallback) => {
    return new Promise((resolve, reject) => {
      this.getPool()?.query(query, values, (error, result) => {
        if (callback) {
          callback(error, result)
        }
        if (error) {
          return reject(error)
        }
        return resolve(result)
      })
    })
  }

  cleanup = () => {
    if (this.pool) {
      this.pool.end()
      this.pool = null
    }
  }
}

export default new DBInstance()
