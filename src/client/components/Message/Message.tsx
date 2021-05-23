import * as React from 'react'
import { Alert } from 'react-bootstrap'

export type MessageProps = {
  className?: string
  message?: string
  error?: string
  variant?: string
}

function Message({
  className,
  message,
  error,
  variant = 'primary',
}: MessageProps): React.ReactElement {
  return (
    <Alert className={className} variant={error ? 'danger' : variant}>
      {message || error}
    </Alert>
  )
}

export default Message
