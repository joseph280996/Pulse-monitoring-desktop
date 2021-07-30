import * as React from 'react'
import './Option.scss'

type OptionPropsType = {
  className?: string
}

const Option = ({
  className,
  value,
  children,
}: React.OptionHTMLAttributes<OptionPropsType>): React.ReactElement => {
  return (
    <option className={`Option ${className}`} value={value}>
      {children}
    </option>
  )
}

export default Option
