import IPatient from '../../types/interface/IPatient'
import db from '../db'

type PatientInputType = {
  id?: number
  userID?: number
  firstName?: string
  lastName?: string
}

type PatientNameType = {
  firstName: string
  lastName: string
}
class Patient implements IPatient {
  private static sqlFields = 'Patient.id, Patient.name'

  public id?: number | undefined

  public userID?: number

  public firstName?: string

  public lastName?: string

  constructor(obj: PatientInputType) {
    this.id = obj.id
    this.userID = obj.userID
    this.firstName = obj.firstName
    this.lastName = obj.lastName
  }

  async save(): Promise<boolean> {
    const result = await db.query(
      `
        INSERT INTO Patient(name)
        VALUES (?)
      `,
      [[this.userID]],
    )
    this.id = result.insertId
    return !!result.insertId
  }


  static async getAll(): Promise<Patient[]> {
    const result = await db.query(`
    SELECT ${Patient.sqlFields}
    FROM Patient
    WHERE id > 0;
    `)
    return result && result.length > 0
      ? result.map((row: any) => new Patient(row))
      : []
  }

  static async getById(id: number): Promise<Patient | null> {
    const result = await db.query(
      `
      SELECT ${Patient.sqlFields}
      FROM Patient
      WHERE id = ?;
    `,
      [id],
    )
    return result ? new Patient(result) : null
  }

  static async findPatientByName({
    firstName,
    lastName,
  }: PatientNameType): Promise<Patient | null> {
    const results = await db.query(
      `
      SELECT ${Patient.sqlFields}, User.firstName as firstName, User.lastName as lastName
      FROM Patient INNER JOIN User ON Patient.UserID = User.id
      WHERE firstName = ? AND lastName = ?
      LIMIT 1;
      `,
      [firstName, lastName],
    )
    return results && results.length ? new Patient(results[0]) : null
  }
}

export default Patient
