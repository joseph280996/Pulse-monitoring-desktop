import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import classnames from 'classnames'
import { formTypes } from '../../types'

function SubmitButton({
  text,
  className,
  wrapperClassName,
  disabled,
}: formTypes.ButtonProps) {
  return (
    <div className={classnames(wrapperClassName, 'Button-container')}>
      <Button
        className={classnames(className, 'Button')}
        type="submit"
        disabled={disabled}
      >
        {text}
        {disabled && (
          <Spinner
            animation="border"
            role="status"
            className="Button-spinner"
          />
        )}
      </Button>
    </div>
  )
}

export default SubmitButton