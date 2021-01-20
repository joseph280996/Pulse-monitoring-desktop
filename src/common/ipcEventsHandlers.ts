import { IpcMain, ipcMain, IpcRenderer } from 'electron'
import { IpcChannelsInterface } from './types'

class IpcEventHandler {
  private channels: string[]

  private ipcEventEmitter: IpcMain | IpcRenderer

  constructor(ipcEventEmitter: IpcMain | IpcRenderer) {
    this.ipcEventEmitter = ipcEventEmitter
    this.channels = []
  }

  private setChannels(channels: string[]) {
    this.channels = channels
  }

  registerHandlers(channels: IpcChannelsInterface[]) {
    const channelNames = channels.map(({ channel, handler }) => {
      this.ipcEventEmitter.on(channel, handler)
      return channel
    })
    this.setChannels(channelNames)
  }

  getChannels() {
    return this.channels
  }

  end() {
    this.channels.forEach((channel) =>
      this.ipcEventEmitter.removeAllListeners(channel),
    )
  }
}

export default IpcEventHandler
