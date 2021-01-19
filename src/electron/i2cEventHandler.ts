// import i2c, { PromisifiedBus } from 'i2c-bus'
// import ADS1115 from 'ads1115'
// import { ADS1115Interface } from '../common/types'

// class ADS1115Instance {
//   private bus: PromisifiedBus | null = null

//   private ads1115: ADS1115Interface | null = null

//   async init() {
//     if (!this.bus && this.ads1115) {
//       this.bus = await i2c.openPromisified(1)
//       this.ads1115 = await ADS1115(this.bus)
//     }
//     return this.getADS1115Instace()
//   }

//   getADS1115Instace() {
//     return this.ads1115
//   }
// }

// export default new ADS1115Instance().init()
