import classNames from 'classnames'
import * as React from 'react'
import usePulsePosition from '../../../common/utils/hooks/usePulsePositions'
import Option from '../../Option'
import Select from '../Select'
import styles from './PulsePositionSelect.scss'

type PulsePositionProps = {
  className?: string
  name?: string
  value: any
  onPositionChange: React.ChangeEventHandler
  onBlur?: React.ChangeEventHandler
  required?: boolean
  label?: string
}

const PulsePositionSelect = ({
  className,
  onPositionChange,
  label,
  ...selectProps
}: PulsePositionProps): React.ReactElement => {
  const { pulsePositions } = usePulsePosition()
  return (
    <div className={classNames(styles.PulsePositionSelect, className)}>
      {label && (
        <label
          className={styles['PulsePositionSelect-label']}
          htmlFor="pulsePositionSelect"
        >
          {label}
        </label>
      )}
      <Select
        id="pulsePositionSelect"
        {...selectProps}
        onChange={onPositionChange}
      >
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
  label: null,
}

export default PulsePositionSelect
