import dotenv from 'dotenv'
import { Pool, createPool, MysqlError, PoolConfig } from 'mysql'

interface DBInterface {
  query(query: string, values: unknown): Promise<unknown>
}

dotenv.config()

const DBConf: PoolConfig = {
  database: process.env.DATABASE_NAME,
  port: process.env.PORT ? +process.env.PORT : 3306,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  timezone: 'Z',
  charset: 'utf8mb4_unicode_ci',
  debug: process.env.NODE_ENV === 'development' ? ['ComQueryPacket'] : false,
}

class DB implements DBInterface {
  private _pool?: Pool

  get pool(): Pool | undefined {
    if (!this._pool) {
      this.pool = createPool(DBConf)
    }
    return this._pool
  }

  set pool(pool: Pool | undefined) {
    this._pool = pool
  }

  hasPoolOpened = () => Boolean(this.pool)

  query(query: string, values?: Array<any>) {
    return new Promise<any>((resolve, reject) => {
      this.pool?.query(
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
    if (this.pool) {
      this.pool.end()
    }
  }
}

const singletonInstance = new DB()

export default singletonInstance
