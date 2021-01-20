import { IpcMainEvent, IpcRendererEvent } from 'electron'

export interface IpcChannelsInterface {
  channel: string
  handler: (event: IpcMainEvent | IpcRendererEvent, arg: any) => void
}

export interface IntervalMapInterface {
  name: string
  interval: NodeJS.Timeout
}
