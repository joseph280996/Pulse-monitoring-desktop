import db from '../db'

type RecordConstructorParamType = {
  id?: number
  pulseTypeID: number
  handPositionID: number
  data: string
  patientID: number
}

interface RecordInterface {
  save(): Promise<Record>
}

class Record implements RecordInterface {
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

  constructor(obj: RecordConstructorParamType) {
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
}

export default Record
