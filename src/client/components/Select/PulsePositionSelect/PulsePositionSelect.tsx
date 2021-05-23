import * as React from 'react'
import usePulsePosition from '../../../common/utils/hooks/usePulsePositions'
import Option from '../../Option'
import Select from '../Select'
import './PulsePositionSelect.scss'

type PulsePositionProps = {
  className?: string
  name?: string
  value: any
  onPositionChange: React.ChangeEventHandler
  onBlur?: React.ChangeEventHandler
  required?: boolean
}

const PulsePositionSelect = ({
  className,
  onPositionChange,
  ...selectProps
}: PulsePositionProps): React.ReactElement => {
  const { pulsePositions } = usePulsePosition()
  return (
    <div className={`PulsePositionSelect ${className}`}>
      <Select {...selectProps} onChange={onPositionChange}>
        {pulsePositions.map((position) => (
          <Option key={position.id} value={position.id}>
            {position.name}
          </Option>
        ))}
      </Select>
    </div>
  )
}

PulsePositionSelect.defaultProps = {
  className: null,
  name: null,
  required: false,
  onBlur: null,
}

export default PulsePositionSelect
