import { RequestHandler } from 'express'
import HandPosition from '../model/HandPosition'

const getHandPositions: RequestHandler = async (_req, res) => {
  try {
    const handPositions = await HandPosition.loadAll()
    res.status(200).send(handPositions)
  } catch (err) {
    console.error(err)
    console.log(err.stack)
    res.status(500).send('Internal Error')
  }
}

export default getHandPositions
