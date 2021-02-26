import db from '../db'

class PulseTypes {
  private static sqlFields = `id as pulseTypeID, pulseName as pulseTypeName`

  static getAllPulseTypes = () => {
    return db
      .query(`SELECT ${PulseTypes.sqlFields} FROM PulseType`, [])
      .catch(console.error)
  }
}
export default PulseTypes
