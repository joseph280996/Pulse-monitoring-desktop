import React from 'react'
import { Alert } from 'react-bootstrap'
import { FormTypes } from '../../../common/types'

function Message({
  className,
  message,
  error,
  variant = 'primary',
}: FormTypes.MessageProps) {
  return (
    <Alert className={className} variant={error ? 'danger' : variant}>
      {message || error}
    </Alert>
  )
}

export default Message
