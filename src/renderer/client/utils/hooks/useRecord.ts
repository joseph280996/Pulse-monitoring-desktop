import { useState, useCallback, useEffect } from 'react';
import { RecordType } from '../../types';
import piezoelectricService from '../services/piezoelectricService';

type UseRecordReturnType = {
  record: RecordType | undefined;
  isLoading: boolean;
};

type UseRecordType = (recordID?: number) => UseRecordReturnType;

const useRecord: UseRecordType = (recordID) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [record, setRecord] = useState<RecordType>();

  const getRecord = useCallback(async (id: number) => {
    setIsLoading(true);
    const recordedRecord = await piezoelectricService.getAsync(id);
    setRecord(recordedRecord);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (recordID) {
      getRecord(recordID);
    }
  }, [getRecord, recordID]);
  return { record, isLoading };
};

export default useRecord;
