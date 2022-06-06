import HttpClient from '../controller/HttpClient';
import { ECG_POST_TYPE } from '../variables';

type EcgStopPostParamType = {
  recordID?: number;
};

class EcgPostHandlerFactory {
  static getEcgPostHandler(requestType: string, httpClient: HttpClient) {
    if (requestType === ECG_POST_TYPE.START) {
      return () => httpClient.post('/record/start');
    }

    if (requestType === ECG_POST_TYPE.STOP) {
      return (params: EcgStopPostParamType) =>
        httpClient.post('/record/stop', { ...params, status: requestType });
    }

    throw new Error('Unsupported handler type');
  }
}

export default EcgPostHandlerFactory;
