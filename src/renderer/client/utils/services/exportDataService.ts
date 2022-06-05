import { pick } from 'lodash';
import { ExportDataFormValuesType } from 'renderer/client/forms/ExportDataForm/ExportDataFormTypes';
import HttpClient from '../controller/HttpClient';
import { IPostService } from './IService';

class ExportDataService
  implements IPostService<ExportDataFormValuesType, number>
{
  private service: HttpClient;

  constructor() {
    this.service = new HttpClient(
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
}

export default new ExportDataService();
