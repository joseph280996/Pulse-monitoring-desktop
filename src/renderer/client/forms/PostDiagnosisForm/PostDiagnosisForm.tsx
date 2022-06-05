import { useFormik } from 'formik';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { object } from 'yup';
import piezoelectricService from 'renderer/client/utils/services/piezoelectricService';
import {
  IPostDiagnosisFormContainerProp,
  PostDiagnosisFormProps,
} from './PostDiagnosisFormTypes';
import fields from './postDiagnosisFieldsValidation';
import PostDiagnosisFormComponent from './PostDiagnosisFormComponent';

const PostDiagnosisFormContainer = ({
  initialValues,
  data,
  ...passThroughProps
}: IPostDiagnosisFormContainerProp): ReactElement => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: PostDiagnosisFormProps) => {
      await piezoelectricService.postAsync(values);
      navigate('/finish');
    },
    validationSchema: object().shape(
      fields.reduce((fieldsValidation, { name, validate }) => {
        return { ...fieldsValidation, [name]: validate };
      }, {})
    ),
  });

  return (
    <PostDiagnosisFormComponent data={data} {...formik} {...passThroughProps} />
  );
};

export default PostDiagnosisFormContainer;
