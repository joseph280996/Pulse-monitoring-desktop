import HttpClient from '../controller/HttpClient';
import { ECG_POST_TYPE } from '../variables';

type EcgStopPostParamType = {
  operation_type_id: number;
};

class EcgPostHandlerFactory {
  static getEcgPostHandler(requestType: number, httpClient: HttpClient) {
    if (requestType === ECG_POST_TYPE.START) {
      return (params: EcgStopPostParamType) =>
        httpClient.post('/record', { ...params, status: requestType });
    }

    if (requestType === ECG_POST_TYPE.STOP) {
      return (params: EcgStopPostParamType) =>
        httpClient.post('/record', { ...params, status: requestType });
    }

    throw new Error('Unsupported handler type');
  }
}

export default EcgPostHandlerFactory;
