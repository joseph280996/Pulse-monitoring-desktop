import { PulsePositionType } from '../../common/types';
import HttpClient from '../controller/HttpClient';
import { IGetService } from './IService';

class PulsePositionService implements IGetService<never, PulsePositionType[]> {
  private service: HttpClient;

  constructor() {
    this.service = new HttpClient(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'http://192.168.50.185:8000'
    );
  }

  async getAsync(): Promise<PulsePositionType[]> {
    const { data, error: requestError } = await this.service.get(
      '/hand-position'
    );
    if (requestError) {
      throw new Error(
        `Encounter Error requesting API - Message ${requestError.message}`
      );
    }
    return data;
  }
}

export default new PulsePositionService();
