import db from '../db'
import { PulseTypeFieldsType } from './PulseTypesType'

class PulseType {
  private static sqlFields = 'id, name, chineseName, features '

  id!: number

  name!: string

  chineseName!: string

  features!: string

  constructor(obj: PulseTypeFieldsType) {
    this.chineseName = obj.chineseName
    this.id = obj.id
    this.name = obj.name
    this.features = obj.features
  }

  static loadAll = async (): Promise<PulseType[] | undefined[]> =>
    db
      .query(`SELECT ${PulseType.sqlFields} FROM PulseType`)
      .then((result: any) => {
        if (result?.length > 0) {
          return result.map((row: any) => new PulseType(row))
        }
        return []
      })
}

export default PulseType
