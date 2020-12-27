import { useState, useEffect } from 'react'
import { WindowDimension } from '../../types'

function getWindowDimensions(offset: number) {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width: width - offset,
    height: height - offset,
  }
}

export default (offset: number) => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimension>(
    getWindowDimensions(offset),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(offset))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [offset])
  return windowDimensions
}
