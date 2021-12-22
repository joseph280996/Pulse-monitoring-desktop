import fs from 'fs'
import os from 'os'
import path from 'path'

const createIfNotExistFolder = async (fileName: string): Promise<string> => {
  const pathToDesktop = path.join(os.homedir(), 'Desktop')
  if (!fs.existsSync(`${pathToDesktop}/${fileName}`)) {
    fs.mkdirSync(`${pathToDesktop}/${fileName}`, {
      recursive: true,
    })
  }
  return pathToDesktop
}
export default createIfNotExistFolder
