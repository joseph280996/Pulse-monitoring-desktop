import React, { Dispatch, SetStateAction } from 'react'
import { Spinner } from 'react-bootstrap'
import useIPCListener from '../../../hooks/useIPCListener'

type PulseTypeData = {
  pulseTypeID: number
  pulseTypeName: string
}

type PulseTypeSelectProps = {
  onChange: Dispatch<SetStateAction<any>>
  className?: string
  value: any
}

function PulseTypeSelect({ className, onChange, value }: PulseTypeSelectProps) {
  const [pulseTypes] = useIPCListener('getPulseTypes')
  if (!pulseTypes) {
    return <Spinner animation="border" role="status" />
  }
  return (
    <div className={className}>
      <select name="pulseType" value={value} onChange={onChange}>
        {pulseTypes.map((pulseType: PulseTypeData) => {
          const { pulseTypeID, pulseTypeName } = pulseType
          return (
            <option value={pulseTypeID} key={pulseTypeID}>
              {pulseTypeName}
            </option>
          )
        })}
      </select>
    </div>
  )
}

PulseTypeSelect.defaultProps = {
  className: '',
}

export default PulseTypeSelect
