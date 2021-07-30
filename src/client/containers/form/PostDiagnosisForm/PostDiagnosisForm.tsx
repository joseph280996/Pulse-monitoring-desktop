import { useFormik } from 'formik'
import { pick } from 'lodash'
import * as React from 'react'
import { useHistory } from 'react-router-dom'
import tcmAPIRequestController from '../../../common/tcmAPI'
import PostDiagnosisFormComponent, {
  PostDiagnosisFormProps,
} from '../../../components/form/PostDiagnosisForm'
import { IPostDiagnosisFormContainerProp } from './PostDiagnosisFormTypes'

const PostDiagnosisFormContainer = ({
  initialValues,
  ...passThroughProps
}: IPostDiagnosisFormContainerProp): React.ReactElement => {
  const history = useHistory()

  const onPostDiagnosisSubmit = React.useCallback(
    async (values: PostDiagnosisFormProps) => {
      await tcmAPIRequestController.post('/record', {
        ...pick(values, [
          'pulse',
          'pulseTypeID',
          'handPositionID',
          'patientName',
        ]),
        data: JSON.stringify(values.data),
      })
      history.push('/finish')
    },
    [history],
  )
  const formik = useFormik({
    initialValues,
    onSubmit: onPostDiagnosisSubmit,
  })

  return <PostDiagnosisFormComponent {...formik} {...passThroughProps} />
}

export default PostDiagnosisFormContainer
