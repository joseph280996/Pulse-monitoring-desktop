import { IpcMainEvent, IpcRendererEvent } from 'electron'

export interface IpcChannelsInterface {
  channel: string
  handler: (event: IpcMainEvent | IpcRendererEvent) => void
}
