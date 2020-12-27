import { Callback } from 'yup/lib/types'
import { DIAGNOSTIC_MODE } from '../variables'

const updateTimer = (endTime: number, callback: Callback) => {
  const msLeft = endTime - +new Date()
  if (msLeft < 1000) {
    callback(null, DIAGNOSTIC_MODE.STOP)
  } else {
    const time = new Date(msLeft)
    callback(null, Math.random())
    setTimeout(updateTimer, time.getUTCMilliseconds() + 500)
  }
}
export default (minutes: number, seconds: number, callback: Callback) => {
  const endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500
  updateTimer(endTime, callback)
}
