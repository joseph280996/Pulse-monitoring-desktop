import { PulseType } from '../../types';
import HttpClient from '../controller/HttpClient';
import { IGetService } from './IService';

class PulseTypeService implements IGetService<never, PulseType[]> {
  private service: HttpClient;

  constructor() {
    this.service = new HttpClient(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'http://192.168.50.185:8000'
    );
  }

  async getAsync(): Promise<PulseType[]> {
    const { data, error: requestError } = await this.service.get('/pulse-type');
    if (requestError) {
      throw new Error(
        `Encounter Error requesting API - Message ${requestError.message}`
      );
    }
    return data;
  }
}

export default new PulseTypeService();
