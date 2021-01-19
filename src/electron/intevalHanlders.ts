class IntervalsHandler {
  private intervals: Map<string, NodeJS.Timeout>

  constructor(intervals: Map<string, NodeJS.Timeout> = new Map()) {
    this.intervals = intervals
  }

  registerInterval(name: string, interval: NodeJS.Timeout) {
    this.intervals.set(name, interval)
  }

  unregisterInterval(name: string) {
    const removedInterval = this.intervals.get(name)
    if (!removedInterval) {
      throw Error('Interval Not Found')
    }
    clearInterval(removedInterval)
    this.deleteInterval(name)
  }

  private deleteInterval(name: string) {
    this.intervals.delete(name)
  }
}

export default IntervalsHandler
