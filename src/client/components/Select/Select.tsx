import classNames from 'classnames'
import * as React from 'react'

type SelectProps = {
  name?: string
  className?: string
  value: any
  onChange: React.ChangeEventHandler
  onBlur?: React.FocusEventHandler
}

function Select({
  className,
  name,
  children,
  value,
  onChange,
  onBlur,
}: React.PropsWithChildren<SelectProps>): React.ReactElement {
  return (
    <select
      className={classNames('Select', className)}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >
      {children}
    </select>
  )
}

export default Select
