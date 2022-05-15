import { pick } from 'lodash';
import { ExportDataFormValuesType } from 'renderer/client/containers/form/ExportDataForm/ExportDataFormTypes';
import { RecordType } from '../../types';
import FetchController from '../controller/FetchController';
import { IGetService, IPostService } from './IService';

class PiezoelectricSensorRecordService
  implements
    IPostService<ExportDataFormValuesType, number>,
    IGetService<number, RecordType>
{
  private service: FetchController;

  constructor() {
    this.service = new FetchController(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'http://192.168.50.185:8000'
    );
  }

  async postAsync(
    exportDataFormValues: ExportDataFormValuesType
  ): Promise<number> {
    const response = await this.service.post('/data', {
      ...pick(exportDataFormValues, ['startDate', 'endDate']),
    });
    return response.data.status;
  }

  async getAsync(recordID: number): Promise<RecordType> {
    const { data, error } = await this.service.get(`/record/${recordID}`);
    if (error) {
      throw new Error(`Cannot get Record for recordID [${recordID}]`);
    }
    return data;
  }
}

export default new PiezoelectricSensorRecordService();
