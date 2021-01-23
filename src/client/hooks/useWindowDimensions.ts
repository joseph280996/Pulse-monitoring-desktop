import { useState, useEffect } from 'react'
import { HooksTypes } from '../../common/types'

function getWindowDimensions(offset: number) {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width: width - offset,
    height: height - offset,
  }
}

/**
 * @param offset offset desired from the actual screen size
 * @returns screen width and height
 */
export default (offset: number) => {
  const [
    windowDimensions,
    setWindowDimensions,
  ] = useState<HooksTypes.WindowDimension>(getWindowDimensions(offset))

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(offset))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [offset])
  return windowDimensions
}
