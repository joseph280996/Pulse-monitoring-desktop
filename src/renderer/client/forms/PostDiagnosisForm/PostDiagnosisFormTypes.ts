import { ILineChartProps } from '../../components/Chart/LineChart';
import { PostDiagnosisFormProps } from '../../components/form/PostDiagnosisForm';

export interface IPostDiagnosisFormContainerProp extends ILineChartProps {
  initialValues: PostDiagnosisFormProps;
}
