import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { CSSProperties, MouseEventHandler } from 'react'

export interface ButtonProps {
  type?: string
  text?: string
  disabled?: boolean
  className?: string
  wrapperClassName?: string
}

export interface ButtonWithIconProps extends ButtonProps {
  icon: IconProp
  iconPosition?: string
  iconClassName?: string
  iconWrapperClassName?: string
  buttonTextClassName?: string
  onClick?: MouseEventHandler
  iconStyle?: CSSProperties
}
