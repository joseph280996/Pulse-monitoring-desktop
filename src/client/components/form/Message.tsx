import React from 'react'
import { Alert } from 'react-bootstrap'
import { FormTypes } from '../../../common/types'

function Message({
  message,
  error,
  variant = 'primary',
}: FormTypes.MessageProps) {
  return <Alert variant={error ? 'error' : variant}>{message || error}</Alert>
}

export default Message
