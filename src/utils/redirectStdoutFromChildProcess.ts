import { Readable } from 'stream'

export default (stdio: Readable | null, isError?: boolean) => {
  let lineBuffer = ''
  if (stdio) {
    stdio.on('data', (data) => {
      lineBuffer += data.toString()
      const lines = lineBuffer.split('\n')

      // eslint-disable-next-line no-console
      lines.forEach((line) =>
        isError ? console.error(line) : console.log(line),
      )

      lineBuffer = lines[lines.length - 1]
    })
  }
}
