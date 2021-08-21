import db from '../db'

type PatientConstructorParamType = {
  id?: number
  name: string
}

interface PatientInterface {
  save(): void
}

class Patient implements PatientInterface {
  private static fields = 'id, name'

  private _id!: number | undefined

  get id(): number | undefined {
    return this._id
  }

  set id(id: number | undefined) {
    this._id = id
  }

  private _name!: string

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  constructor(obj: PatientConstructorParamType) {
    this.id = obj.id
    this.name = obj.name
  }

  async save(): Promise<void> {
    const result = await db.query(
      `
        INSERT INTO Patient(id, name)
        VALUES (?)
      `,
      [[this.id, this.name]],
    )
    this.id = result.insertId
  }

  static async getById(id: number): Promise<Patient | null> {
    const result = await db.query(
      `
      SELECT ${Patient.fields}
      FROM Patient
      WHERE id = ?;
    `,
      [id],
    )
    return result ? new Patient(result) : null
  }

  static async findPatientByName(name: string): Promise<Patient | null> {
    const results = await db.query(
      `
      SELECT ${Patient.fields}
      FROM Patient
      WHERE name = ?
      LIMIT 1;
      `,
      [name],
    )
    return results && results.length ? new Patient(results[0]) : null
  }
}

export default Patient
