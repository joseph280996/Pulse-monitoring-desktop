import React, { ReactElement } from 'react';
import { FormikBag, FormikConfig, FormikValues, useFormik } from 'formik';
import yup from 'yup';
import Component from '../../components/form/Form';

type OnSubmitType = (formValues: FormikValues) => void;

type FieldsComponent = (...any: any[]) => ReactElement;

function Form(
  FieldsComponent: FieldsComponent,
  initialValues: FormikConfig<FormikValues>,
  onSubmit: OnSubmitType,
  validationSchema: yup.object<any>
): ReactElement {
  const FormFormik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <form onSubmit={FormFormik.handleSubmit}>
      <FieldsComponent formik={FormFormik} />
    </form>
  );
}

export default Form;
