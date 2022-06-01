import { pick } from 'lodash';
import { PostDiagnosisFormProps } from 'renderer/client/components/form/PostDiagnosisForm';
import { RecordType } from '../../types';
import HttpClient from '../controller/HttpClient';
import { IGetService, IPostService } from './IService';

class PiezoelectricSensorRecordService
  implements
    IPostService<PostDiagnosisFormProps, number>,
    IGetService<number, RecordType>
{
  private service: HttpClient;

  constructor() {
    this.service = new HttpClient(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'http://192.168.50.185:8000'
    );
  }

  async getAsync(recordID: number): Promise<RecordType> {
    const { data, error } = await this.service.get(`/record/${recordID}`);
    if (error) {
      throw new Error(`Cannot get Record for recordID [${recordID}]`);
    }
    return data;
  }

  async postAsync(values: PostDiagnosisFormProps): Promise<number> {
    const response = await this.service.post('/record', {
      ...pick(values, ['pulseTypeID', 'handPositionID', 'patientName']),
      data: JSON.stringify(values.data),
    });
    return response.data.status;
  }
}

export default new PiezoelectricSensorRecordService();
