import { RecordFieldsType } from 'src/server/model/RecordTypes'
import IModel from './IModel'

export interface IRecord extends IModel<RecordFieldsType> {
  id?: number
  pulseTypeID: number
  handPositionID: number
  data: string
  patientID: number
}

export default IRecord
