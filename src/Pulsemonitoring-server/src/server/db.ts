import { config } from 'dotenv'
import { Pool, createPool, MysqlError } from 'mysql'

interface DBInterface {
  query(query: string, values: unknown): Promise<unknown>
}

config()
const DBConf = {
  database: process.env.DATABASE_NAME || '',
  port: process.env.PORT ? +process.env.PORT : 3306,
  host: process.env.DATABASE_HOST || '',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  timezone: 'Z',
  charset: 'utf8mb4_unicode_ci',
}

class DB implements DBInterface {
  private _pool?: Pool

  private getPool(): Pool | undefined {
    if (!this._pool) {
      const newPool = createPool({
        ...DBConf,
        debug:
          process.env.NODE_ENV === 'development' ? ['ComQueryPacket'] : false,
      })
      this.setPool(newPool)
    }
    return this._pool
  }

  private setPool(pool: Pool | undefined) {
    this._pool = pool
  }

  hasPoolOpened = () => Boolean(this._pool)

  query(query: string, values?: Array<any>) {
    return new Promise<any>((resolve, reject) => {
      this.getPool()?.query(
        query,
        values,
        (error: MysqlError | null, result: any) => {
          if (error) {
            return reject(error)
          }
          return resolve(result)
        },
      )
    })
  }

  cleanUp = () => {
    const pool = this.getPool()
    if (pool) {
      pool.end()
    }
  }
}

const singletonInstance = new DB()

export default singletonInstance
