/**
 *
 * This file is for i2c purpose.
 * If your device is not support this, do not uncomment.
 *
 */

// import i2c, { PromisifiedBus } from 'i2c-bus'
// import ADS1115 from 'ads1115'
// import { ElectronTypes } from '../common/types'

// class I2CEventHandler implements ElectronTypes.I2CEventHandlerInterface {
//   private bus: PromisifiedBus | null = null

//   private ads1115: ElectronTypes.ADS1115Interface | null = null

//   constructor() {
//     this.bus = null
//     this.ads1115 = null
//   }

//   isInitialized() {
//     return Boolean(this.bus) && Boolean(this.ads1115)
//   }

//   async init() {
//     if (!this.bus && this.ads1115) {
//       this.bus = await i2c.openPromisified(1)
//       this.ads1115 = await ADS1115(this.bus)
//     }
//     return this.getADS1115Instance()
//   }

//   getADS1115Instance() {
//     return this.ads1115
//   }

//   cleanup() {
//     if (this.bus) {
//       this.bus.close()
//       this.bus = null
//       this.ads1115 = null
//     }
//   }
// }

// export default I2CEventHandler
