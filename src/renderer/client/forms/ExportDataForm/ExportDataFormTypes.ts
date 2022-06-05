import { SyntheticEvent } from 'react';
import { FormikHandleSubmitType } from 'renderer/client/types';

export type DatePickerSelectedRangeType = [Date | null, Date | null];

export interface ExportDataFormValuesType {
  startDate?: Date | null;
  endDate?: Date | null;
}

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
