import { ExportDataFormValuesType } from '../../../containers/form/ExportDataForm/ExportDataFormTypes'
import { FormikHandleSubmitType } from '../../../common/types'

export type DatePickerOnChangeType = (
  date: Date | [Date | null, Date | null] | /* for selectsRange */ null,
  event: React.SyntheticEvent<any> | undefined,
) => void

export interface ExportDataFormComponentPropsType
  extends ExportDataFormValuesType {
  handleSubmit: FormikHandleSubmitType
  onDateChange: DatePickerOnChangeType
  status?: string | null
}
