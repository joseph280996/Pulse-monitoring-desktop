import IModel from './IModel'

interface IPatient extends IModel<boolean> {
  id?: number
  userID?: number
  firstName?: string
  lastName?: string
}
export default IPatient
