import { ObjectKeys } from '../types/types'

export const modifyItem = (data: any[], index: number, newData: ObjectKeys) => [
  ...data.slice(0, index),
  { ...data[index], ...newData },
  ...data.slice(index + 1),
]

export const deleteItemAtIndex = (data: any[], index: number) => {
  return [...data.slice(0, index), ...data.slice(index + 1)]
}

export const deleteAttributeFromArrayElement = (
  data: any[],
  index: number,
  key: string,
) => {
  const { [key]: obmitted, ...rest } = data[index]
  return [...data.slice(0, index), rest, ...data.slice(index + 1)]
}
