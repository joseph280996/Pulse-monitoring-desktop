import { PulsePositionType } from '../../types';
import FetchController from '../controller/FetchController';
import { IGetService } from './IService';

class PulsePositionService implements IGetService<never, PulsePositionType[]> {
  private service: FetchController;

  constructor() {
    this.service = new FetchController(
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
