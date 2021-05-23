import db from '../db'

type PulseTypeConstructor = {
  id: number
  pulseName: string
}

class PulseType {
  private static sqlFields = 'id, pulseName'

  id!: number

  get pulseID(): number {
    return this.id
  }

  set pulseID(id: number) {
    this.id = id
  }

  name!: string

  get pulseName(): string {
    return this.name
  }

  set pulseName(pulseName: string) {
    this.name = pulseName
  }

  constructor(obj: PulseTypeConstructor) {
    this.id = obj.id
    this.pulseName = obj.pulseName
  }

  static loadAll = async (): Promise<PulseType[]> =>
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
