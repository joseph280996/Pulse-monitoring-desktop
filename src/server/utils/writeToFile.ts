import fs from 'fs'
import path from 'path'
import fastCSV from 'fast-csv'
// import Patient from '../model/Patient'
import Record from '../model/Record'

type WriteToFileConfigType = {
  formatType: 'JSON' | 'CSV'
}

export const FORMAT_TYPE = {
  JSON: 'JSON',
  CSV: 'CSV',
}

const writeToJSONFile = async (
  records: Record[],
  pathToDesktop: string,
  fileName: string,
  { formatType }: WriteToFileConfigType,
): Promise<void> => {
  // Promise.all(records.map(async (record) => Patient.getById(record.patientID)))
  const filePath = path.join(pathToDesktop, 'exported-data', `${fileName}.json`)
  if (formatType === FORMAT_TYPE.JSON) {
    const stringifiedRecords = JSON.stringify(records)
    fs.writeFile(filePath, stringifiedRecords, (err) => {
      if (err) {
        throw err
      }
      console.log('Exported!')
    })
  } else {
    const writeStream = fs.createWriteStream(filePath)
    fastCSV.write(records, { headers: true }).pipe(writeStream)
  }
}

export default writeToJSONFile
