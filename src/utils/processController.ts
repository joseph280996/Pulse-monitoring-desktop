import { ChildProcess, spawn } from 'child_process'
import psTree from 'ps-tree'
import redirectStdoutFromChildProcess from './redirectStdoutFromChildProcess'

interface IProcessController {
  registerProcess(process: ChildProcess): void
  cleanUp(signal?: number | NodeJS.Signals): void
}

class ProcessController implements IProcessController {
  private processes: ChildProcess[] = []

  get length(): number {
    return this.processes.length
  }

  registerProcess = (process: ChildProcess) => {
    redirectStdoutFromChildProcess(process.stdout)
    redirectStdoutFromChildProcess(process.stderr)
    this.processes.push(process)
  }

  cleanUp = () => {
    const isWindow = process.platform === 'win32'
    this.processes.forEach((process) => {
      psTree(process.pid, (_, children) => {
        const platformKillConfig = isWindow
          ? {
              killCommand: 'taskkill',
              killPIDs: children
                .map((childOfChild) => {
                  return `/PID ${childOfChild.PID}`
                })
                .concat(['/F']),
            }
          : {
              killCommand: 'kill',
              killPIDs: ['-9'].concat(
                children.map((childOfChild) => {
                  return childOfChild.PID
                }),
              ),
            }
        spawn(platformKillConfig.killCommand, platformKillConfig.killPIDs)
      })
      process.kill('SIGINT')
    })
    this.processes = []
  }
}

export default new ProcessController()
