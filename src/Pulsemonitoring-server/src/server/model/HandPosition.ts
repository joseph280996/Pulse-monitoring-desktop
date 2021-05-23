import db from '../db'

type HandPositionConstructorParamType = {
  id: number
  name: string
}

class HandPosition {
  private static fields = `id, name`
  private id!: number

  get handPosID(): number {
    return this.id
  }

  set handPosID(id: number) {
    this.id = id
  }

  private name!: string

  get handPosName(): string {
    return this.name
  }

  set handPosName(name: string) {
    this.name = name
  }

  constructor(obj: HandPositionConstructorParamType) {
    this.handPosID = obj.id
    this.handPosName = obj.name
  }

  static async loadAll() {
    const result = await db.query(`
    SELECT ${HandPosition.fields}
    FROM HandPosition
    `)
    return result?.length > 0
      ? result.map((row: any) => new HandPosition(row))
      : []
  }
}

export default HandPosition
