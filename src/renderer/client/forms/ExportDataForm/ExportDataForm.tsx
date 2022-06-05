import moment from 'moment';
import { useFormik } from 'formik';
import { object } from 'yup';
import piezoelectricService from 'renderer/client/utils/services/piezoelectricService';
import ExportDataService from 'renderer/client/utils/services/exportDataService';
import ExportDataFormComponent from './ExportDataFormComponent';
import {
  DatePickerOnChangeType,
  DatePickerSelectedRangeType,
  ExportDataFormValuesType,
} from './ExportDataFormTypes';
import fields from './exportDataFieldsValidation';

const ExportDataForm = () => {
  const { setFieldValue, values, handleSubmit, status } =
    useFormik<ExportDataFormValuesType>({
      initialValues: {
        startDate: null,
        endDate: null,
      },
      onSubmit: async (formValues, { setStatus: setStatusOnSubmit }) => {
        const statusCode = await ExportDataService.postAsync(formValues);
        if (statusCode === 200) {
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
