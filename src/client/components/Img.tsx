import React from 'react'
import { ComponentTypes } from '../../common/types'

function Img({ className, src, alt, useBasePath }: ComponentTypes.ImgProps) {
  const basePath = useBasePath ? './assets/images' : ''
  return <img className={className} src={`${basePath}${src}`} alt={alt} />
}

export default Img
