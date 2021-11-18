import { genSalt, hash } from 'bcrypt'
import IUser from 'src/server/types/interface/IUser'
import DB from '../db'

type UserInputType = {
  id?: number
  firstName: string
  lastName?: string
  password: string
}

class User implements IUser {
  private static sqlFields = 'id as userID, passwordHash, firstName, lastName'

  private passwordHash?: string

  private saltRounds = 12

  public id?: number

  public password: string

  public firstName: string

  public lastName?: string

  constructor(obj: UserInputType) {
    this.password = obj.password
    this.id = obj.id
    this.firstName = obj.firstName
    this.lastName = obj.lastName
  }

  static async getUserByID(id: number): Promise<User | null> {
    const result = await DB.query(
      `SELECT ${User.sqlFields} FROM User WHERE id=?`,
      [id],
    )
    return result ? new User(result) : null
  }

  private async encryptPassword() {
    try {
      if (!this.password) {
        throw new Error('Password is required for encryption')
      }
      const { password } = this
      const salt = await genSalt(this.saltRounds)
      const hashedPassword = await hash(password, salt)
      this.passwordHash = hashedPassword
    } catch (err) {
      console.error(err)
      throw new Error('Error hashing password')
    }
  }

  async save(): Promise<boolean> {
    if (this.id) {
      const foundUser = await User.getUserByID(this.id)
      if (foundUser) {
        return true
      }
      throw new Error('Cannot find user with given ID')
    }
    if (!this.password) {
      throw new Error('Password is required to create a user')
    }
    await this.encryptPassword()
    const res = await DB.query(
      `
      INSERT INTO User(passwordHash, firstName, lastName)
      VALUES (?)
    `,
      [[this.passwordHash, this.firstName, this.lastName]],
    )
    return !!res.insertId
  }
}

export default User
