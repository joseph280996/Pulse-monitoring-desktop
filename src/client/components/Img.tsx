import React from 'react'
import { ComponentTypes } from '../../common/types'

function Img({ src, alt }: ComponentTypes.ImgProps) {
  return <img src={`../../public/assets/images${src}`} alt={alt} />
}

export default Img
