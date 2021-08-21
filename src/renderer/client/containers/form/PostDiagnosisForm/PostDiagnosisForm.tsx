import { useFormik } from 'formik'
import { pick } from 'lodash'
import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { object } from 'yup'
import tcmAPIRequestController from '../../../common/tcmAPI'
import PostDiagnosisFormComponent, {
  PostDiagnosisFormProps,
} from '../../../components/form/PostDiagnosisForm'
import { IPostDiagnosisFormContainerProp } from './PostDiagnosisFormTypes'
import fields from './postDiagnosisFields'

const PostDiagnosisFormContainer = ({
  initialValues,
  data,
  ...passThroughProps
}: IPostDiagnosisFormContainerProp): React.ReactElement => {
  const history = useHistory()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: PostDiagnosisFormProps) => {
      await tcmAPIRequestController.post('/record', {
        ...pick(values, ['pulseTypeID', 'handPositionID', 'patientName']),
        data: JSON.stringify(data),
      })
      history.push('/finish')
    },
    validationSchema: object().shape(
      fields.reduce((fieldsValidation, { name, validate }) => {
        return { ...fieldsValidation, [name]: validate }
      }, {}),
    ),
  })

  return (
    <PostDiagnosisFormComponent data={data} {...formik} {...passThroughProps} />
  )
}

export default PostDiagnosisFormContainer
