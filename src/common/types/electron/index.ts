import { IpcMainEvent, IpcRendererEvent } from 'electron'
import { queryCallback } from 'mysql'

export interface IpcChannelsInterface {
  channel: string
  handler: (event: IpcMainEvent | IpcRendererEvent, arg: any) => void
}

export interface IntervalMapInterface {
  name: string
  interval: NodeJS.Timeout
}

export interface DB {
  query(
    query: string,
    values: Array<any>,
    callback?: queryCallback,
  ): Promise<any>
  cleanup(): void
}

export interface ADS1115Interface {
  gain(): number
  gain(level: string): number
  measure: (mux: string) => Promise<number>
}

export interface I2CEventHandlerInterface {
  isInitialized(): boolean
  init(): Promise<ADS1115Interface | null>
  getADS1115Instance(): ADS1115Interface | null
  cleanup(): void
}
