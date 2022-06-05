import { ReceivedDatum } from '../../types';

export default (recordData?: ReceivedDatum[]) => {
  return (recordData || []).map((datum) => ({
    x: datum.timeStamp,
    y: datum.data,
  }));
};
