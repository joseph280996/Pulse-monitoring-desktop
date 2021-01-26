import { IpcMain, IpcRenderer } from 'electron'
import { ElectronTypes } from './types'

class IpcEventHandler {
  private channels: string[]

  constructor() {
    this.channels = []
  }

  private setChannels(channels: string[]) {
    this.channels = channels
  }

  registerHandlers(
    channels: ElectronTypes.IpcChannelsInterface[],
    ipcEventEmitter: IpcMain | IpcRenderer,
  ) {
    const channelNames = channels.map(({ channel, handler }) => {
      ipcEventEmitter.on(channel, handler)
      return channel
    })
    this.setChannels(channelNames)
  }

  getChannels() {
    return this.channels
  }

  end(ipcEventEmitter: IpcMain | IpcRenderer) {
    this.channels.forEach((channel) =>
      ipcEventEmitter.removeAllListeners(channel),
    )
  }
}

export default IpcEventHandler
