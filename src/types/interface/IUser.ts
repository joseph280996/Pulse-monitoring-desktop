import IModel from './IModel'

interface IUser extends IModel<boolean> {
  id?: number
  firstName: string
  lastName?: string
}
export default IUser
