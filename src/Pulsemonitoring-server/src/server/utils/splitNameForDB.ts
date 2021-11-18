const splitNameForDB = (fullName: string): string[] => {
  const trimmedFullName = fullName.trim()
  const indexOfSpace = trimmedFullName.indexOf(' ')
  return [fullName.slice(0, indexOfSpace), fullName.slice(indexOfSpace)]
}
export default splitNameForDB
