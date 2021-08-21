import fs from 'fs'
import os from 'os'
import path from 'path'
import { RequestHandler } from 'express'
import { pick } from 'lodash'
import Patient from '../model/Patient'
import Record from '../model/Record'

const recordData: RequestHandler = async (req, res) => {
  try {
    let foundPatient = await Patient.findPatientByName(req.body.patientName)
    if (!foundPatient) {
      foundPatient = new Patient({ name: req.body.patientName })
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
    console.log(err.stack)
    res.status(500).send('Internal Error')
  }
}

export default recordData

export const exportData: RequestHandler = async (req, res) => {
  try {
    const { startDate, endDate } = req.body
    if (!startDate || !endDate) {
      throw new Error('Time range for export must be provided')
    }
    const records = await Record.getByDateRange({ startDate, endDate })
    Promise.all(
      records.map(async (record) => Patient.getById(record.patientID)),
    )
    const stringifiedRecords = JSON.stringify(records)
    fs.writeFile(
      path.join(os.homedir(), 'data.json'),
      stringifiedRecords,
      (e) => {
        if (e) {
          throw e
        }
        console.log('Exported!')
      },
    )
    res.status(200).send({ status: 200 })
  } catch (err) {
    console.error(err)
    console.log(err.stack)
    res.status(500).send('Internal Error')
  }
}
