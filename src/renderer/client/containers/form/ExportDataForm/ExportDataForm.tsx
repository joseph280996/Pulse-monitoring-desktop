import * as React from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import { pick } from 'lodash';
import { object } from 'yup';
import ExportDataFormComponent from '../../../components/form/ExportDataForm/ExportDataForm';
import { DatePickerOnChangeType } from '../../../components/form/ExportDataForm/ExportDataComponentTypes';
import {
  DatePickerSelectedRangeType,
  ExportDataFormValuesType,
} from './ExportDataFormTypes';
import tcmAPIRequestController from '../../../common/tcmAPI';
import fields from './exportDataFields';

const ExportDataForm = () => {
  const { setFieldValue, values, handleSubmit, status } =
    useFormik<ExportDataFormValuesType>({
      initialValues: {
        startDate: null,
        endDate: null,
      },
      onSubmit: async (formValues, { setStatus: setStatusOnSubmit }) => {
        const response = await tcmAPIRequestController.post('/data', {
          ...pick(formValues, ['startDate', 'endDate']),
        });
        if (response.data.status === 200) {
          setStatusOnSubmit('Exported');
        }
      },
      validationSchema: object().shape(
        fields.reduce((fieldsValidation, { name, validate }) => {
          return { ...fieldsValidation, [name]: validate };
        }, {})
      ),
    });
  const onDateChange: DatePickerOnChangeType = (dateRange) => {
    const [selectedStartDate, selectedEndDate] =
      dateRange as DatePickerSelectedRangeType;
    if (selectedStartDate) {
      setFieldValue('startDate', moment(selectedStartDate).utc());
    }
    if (selectedEndDate) {
      setFieldValue('endDate', moment(selectedEndDate).utc());
    }
  };
  return (
    <ExportDataFormComponent
      handleSubmit={handleSubmit}
      startDate={values.startDate && moment.utc(values.startDate).toDate()}
      endDate={values.endDate && moment.utc(values.endDate).toDate()}
      onDateChange={onDateChange}
      status={status}
    />
  );
};

export default ExportDataForm;
