import { Pool } from 'mysql'
import { pick } from 'lodash'
import { DB, RecordedData } from '../../common/types'
import DBInstance from '../db'

class Record {
  pulse: string

  pulseTypeID: number

  private db: DB

  private static sqlFields = `Record.id as recordID,
   Record.dateTimeCreated, Record.dateTimeUpdated,
   Record.pulse, Record.pulseTypeID`

  private static pulseTypeFields = `PulseType.pulseName`

  constructor(obj: { pulse: string; pulseTypeID: number }) {
    this.db = DBInstance
    this.pulse = obj.pulse
    this.pulseTypeID = obj.pulseTypeID
  }

  static async getRecordByID(id: number) {
    const result: any = await DBInstance.query(
      `
        SELECT ${this.sqlFields}, ${this.pulseTypeFields}
        FROM Record
        INNER JOIN PulseType ON Record.pulseTypeID = PulseType.id
        WHERE id = ?
      `,
      [id],
    )
    if (result?.length > 0) return new Record(result[0])
    return null
  }

  static getRecordByPulseType(pulseType: string) {
    const rows: any = DBInstance.query(
      `
        SELECT ${this.sqlFields}, ${this.pulseTypeFields}
        FROM Record
        INNER JOIN PulseType ON Record.pulseTypeID = PulseType.id
        WHERE PulseType.pulseName = ?
      `,
      [pulseType],
    )
    if (rows?.length > 0) return rows.map((row: any) => new Record(row))
    return null
  }

  async save() {
    const result = await this.db.query(
      `
        INSERT INTO Record SET ?
      `,
      [pick(this, ['pusle, pulseTypeID'])],
    )
    if (result?.insertID > 0) {
      return new Record(result)
    }
    throw Error('Unable to insert')
  }
}

export default Record