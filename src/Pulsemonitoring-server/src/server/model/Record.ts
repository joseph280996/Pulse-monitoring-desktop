import IRecord from 'src/server/types/interface/IRecord'
import db from '../db'
import { GetRecordByRangeInputType, RecordFieldsType } from './RecordTypes'

class Record implements IRecord {
  private static fields =
    'id, data, dateTimeCreated, dateTimeUpdated, PulseTypeID, HandPositionID, PatientID'

  private _id: number | undefined

  get id(): number | undefined {
    return this._id
  }

  set id(id: number | undefined) {
    this._id = id
  }

  private _pulseTypeID!: number

  get pulseTypeID(): number {
    return this._pulseTypeID
  }

  set pulseTypeID(pulseTypeID: number) {
    this._pulseTypeID = pulseTypeID
  }

  private _handPositionID!: number

  get handPositionID(): number {
    return this._handPositionID
  }

  set handPositionID(handPositionID: number) {
    this._handPositionID = handPositionID
  }

  private _data!: string

  get data(): string {
    return this._data
  }

  set data(data: string) {
    this._data = data
  }

  private _patientID!: number

  get patientID(): number {
    return this._patientID
  }

  set patientID(patientID: number) {
    this._patientID = patientID
  }

  constructor(obj: RecordFieldsType) {
    this.id = obj.id
    this.pulseTypeID = obj.pulseTypeID
    this.handPositionID = obj.handPositionID
    this.data = obj.data
    this.patientID = obj.patientID
  }

  async save(): Promise<Record> {
    const result = await db.query(
      `
      INSERT INTO Record(data, PulseTypeID, HandPositionID, PatientID)
      VALUES (?)
      `,
      [[this.data, this.pulseTypeID, this.handPositionID, this.patientID]],
    )
    return new Record({ ...this, id: result.insertId })
  }

  static async getByDateRange({
    startDate,
    endDate,
  }: GetRecordByRangeInputType): Promise<[Record]> {
    const res = await db.query(
      `
      SELECT ${Record.fields} FROM Record WHERE dateTimeCreated > ? AND dateTimeCreated < ?;
      `,
      [startDate, endDate],
    )
    return res && res.length > 0
      ? res.map((row: any) => new Record(row as RecordFieldsType))
      : []
  }
}

export default Record
