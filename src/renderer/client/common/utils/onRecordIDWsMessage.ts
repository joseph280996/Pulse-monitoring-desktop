import { Dispatch, SetStateAction } from 'react';

export type OnRecordIDWsMessageConfigType = {
  setRecordID: Dispatch<SetStateAction<any>>;
};

export default (
  recordID: number,
  { setRecordID }: OnRecordIDWsMessageConfigType
) => {
  setRecordID(recordID);
};
