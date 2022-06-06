import HttpClient from '../controller/HttpClient';
import EcgPostHandlerFactory from '../factory/EcgPostHandlerFactory';
import { IPostService } from './IService';

type EcgSensorServiceResponseType = {
  status: string;
  recordID?: number;
};

type EcgPostParamType = {
  type: 'start' | 'stop';
  recordID?: number;
};

class EcgSensorService
  implements IPostService<EcgPostParamType, EcgSensorServiceResponseType>
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
    ecgParam: EcgPostParamType
  ): Promise<EcgSensorServiceResponseType> {
    const handler = EcgPostHandlerFactory.getEcgPostHandler(
      ecgParam?.type,
      this.service
    );
    const { data, error } = await handler(ecgParam);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export default new EcgSensorService();
