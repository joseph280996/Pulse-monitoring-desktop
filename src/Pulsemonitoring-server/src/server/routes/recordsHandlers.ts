import { RequestHandler } from 'express'
import { pick } from 'lodash'
import moment from 'moment'
import Patient from '../model/Patient'
import Record from '../model/Record'
import createIfNotExistFolder from '../utils/createIfNotExistFolder'
import splitNameForDB from '../utils/splitNameForDB'
import writeToFile from '../utils/writeToFile'

const recordData: RequestHandler = async (req, res) => {
  try {
    const [firstName, lastName] = splitNameForDB(req.body.patientName)
    let foundPatient = await Patient.findPatientByName({ firstName, lastName })
    if (!foundPatient) {
      foundPatient = new Patient({ firstName, lastName })
      await foundPatient.save()
    }
    const newRecord = new Record({
      patientID: foundPatient.id as number,
      ...pick(req.body, ['id', 'pulseTypeID', 'handPositionID', 'data']),
    })
    const savedRecord = await newRecord.save()
    res.status(200).send(savedRecord)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Error')
  }
}

export default recordData

const formatInputDateForExport = (startDate: string, endDate: string) => ({
  formattedStartDate: moment(startDate).format('DD-MM-YYYY'),
  formattedEndDate: moment(endDate).format('DD-MM-YYYY'),
})
export const exportData: RequestHandler = async (req, res) => {
  try {
    const { startDate, endDate } = req.body
    if (!startDate || !endDate) {
      throw new Error('Time range for export must be provided')
    }
    const records = await Record.getByDateRange({ startDate, endDate })
    const { formattedStartDate, formattedEndDate } = formatInputDateForExport(
      startDate,
      endDate,
    )
    const pathToDesktop = await createIfNotExistFolder('export-data')
    await writeToFile(
      records,
      pathToDesktop,
      `${formattedStartDate}-${formattedEndDate}`,
      { formatType: 'CSV' },
    )
    res.status(200).send({ status: 200 })
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Error')
  }
}
