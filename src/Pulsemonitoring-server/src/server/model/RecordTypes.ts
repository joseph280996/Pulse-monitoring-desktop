import { Moment } from 'moment'

export type RecordFieldsType = {
  id?: number
  pulseTypeID: number
  handPositionID: number
  data: string
  patientID: number
}

export type GetRecordByRangeInputType = {
  startDate: Moment
  endDate: Moment
}

export interface IRecord {
  save(): Promise<IRecord>
}
