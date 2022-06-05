import { ExportDataFormValuesType } from '../../../forms/ExportDataForm/ExportDataFormTypes';
import { FormikHandleSubmitType } from '../../../types';

export type DatePickerOnChangeType = (
  date: Date | [Date | null, Date | null] | /* for selectsRange */ null,
  event: SyntheticEvent<any> | undefined
) => void;

export interface ExportDataFormComponentPropsType
  extends ExportDataFormValuesType {
  handleSubmit: FormikHandleSubmitType;
  onDateChange: DatePickerOnChangeType;
  status?: string | null;
}
