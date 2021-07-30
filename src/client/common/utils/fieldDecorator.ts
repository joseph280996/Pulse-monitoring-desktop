import { useField } from 'formik'
import React from 'react'

const FieldDecorator = ({ name, children, ...passThroughProps }) => {
  const [field, meta, helpers] = useField(name)
  return React.cloneElement(children, {
    ...field,
    meta,
    helpers,
  })
}

export default FieldDecorator
