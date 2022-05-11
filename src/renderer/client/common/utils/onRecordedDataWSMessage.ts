import { Dispatch, SetStateAction } from 'react';
import { ReceivedDatum } from '../types';

export type OnRecordedDataWSMessageConfigType = {
  setData: Dispatch<SetStateAction<any>>;
  setDataFn: (existingData: ReceivedDatum[]) => SetStateAction<ReceivedDatum[]>;
};

export default (
  data: ReceivedDatum[],
  { setData, setDataFn }: OnRecordedDataWSMessageConfigType
) => {
  setData(setDataFn(data));
};
